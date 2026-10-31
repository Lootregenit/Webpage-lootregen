// Build -> push to ghcr.io -> bump the tag in the GitOps repo -> Flux deploys.
// Runs as a pod in the jenkins-agents namespace on K3s (no executors on jenkins-01).
pipeline {
  agent {
    kubernetes {
      cloud 'k3s'
      defaultContainer 'buildkit'
      yaml '''
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: jenkins
  automountServiceAccountToken: false
  containers:
    - name: buildkit
      # CHECK: pin to the newest vX.Y.Z-rootless tag (Renovate will keep it current)
      image: moby/buildkit:rootless
      command: [cat]
      tty: true
      env:
        - name: BUILDKITD_FLAGS
          value: --oci-worker-no-process-sandbox
      securityContext:
        runAsUser: 1000
        runAsGroup: 1000
        seccompProfile:
          type: Unconfined
        appArmorProfile:
          type: Unconfined
      resources:
        requests: { cpu: 500m, memory: 512Mi }
        limits: { memory: 2Gi }
      volumeMounts:
        - { name: buildkitd, mountPath: /home/user/.local/share/buildkit }
    - name: git
      image: alpine/git:2.49.1   # CHECK: newest tag on hub.docker.com/r/alpine/git
      command: [cat]
      tty: true
      resources:
        requests: { cpu: 50m, memory: 64Mi }
  volumes:
    - name: buildkitd
      emptyDir: {}
'''
    }
  }

  options {
    timestamps()
    timeout(time: 20, unit: 'MINUTES')
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '20'))
  }

  environment {
    IMAGE      = 'ghcr.io/lootregenit/lootregen-site'
    GITOPS     = 'github.com/Lootregenit/homelab.git'
    KUSTOMIZE  = 'apps/lootregen/kustomization.yaml'
  }

  stages {
    stage('Tag') {
      steps {
        script {
          // GIT_COMMIT is set by the multibranch checkout; the buildkit image has no git
          env.TAG = env.GIT_COMMIT.take(12)
        }
        echo "Image: ${env.IMAGE}:${env.TAG}"
      }
    }

    stage('Build') {
      when { not { branch 'main' } }
      steps {
        // Branches and PRs: build only, prove the Dockerfile works
        sh '''
          buildctl-daemonless.sh build \
            --frontend dockerfile.v0 \
            --local context=. --local dockerfile=. \
            --output type=image,name=${IMAGE}:${TAG},push=false
        '''
      }
    }

    stage('Build & push') {
      when { branch 'main' }
      steps {
        withCredentials([usernamePassword(credentialsId: 'ghcr', usernameVariable: 'GHCR_USER', passwordVariable: 'GHCR_TOKEN')]) {
          sh '''
            mkdir -p "$HOME/.docker"
            AUTH=$(printf '%s:%s' "$GHCR_USER" "$GHCR_TOKEN" | base64 | tr -d '\\n')
            printf '{"auths":{"ghcr.io":{"auth":"%s"}}}' "$AUTH" > "$HOME/.docker/config.json"
            chmod 600 "$HOME/.docker/config.json"

            buildctl-daemonless.sh build \
              --frontend dockerfile.v0 \
              --local context=. --local dockerfile=. \
              --opt label:org.opencontainers.image.source=https://github.com/Lootregenit/Webpage-lootregen \
              --opt label:org.opencontainers.image.revision=${TAG} \
              --output type=image,name=${IMAGE}:${TAG},push=true

            rm -f "$HOME/.docker/config.json"
          '''
        }
      }
    }

    stage('Deploy (GitOps)') {
      when { branch 'main' }
      steps {
        container('git') {
          withCredentials([usernamePassword(credentialsId: 'github', usernameVariable: 'GH_USER', passwordVariable: 'GH_TOKEN')]) {
            sh '''
              set -eu
              rm -rf gitops
              git clone --depth 1 "https://${GH_USER}:${GH_TOKEN}@${GITOPS}" gitops
              cd gitops

              sed -i -E "s|^([[:space:]]*newTag:).*|\\1 ${TAG}|" "${KUSTOMIZE}"
              if git diff --quiet; then
                echo "Tag already ${TAG}, nothing to deploy"; exit 0
              fi

              git config user.name  "jenkins-01"
              git config user.email "jenkins@lab.lootregen.com"
              git commit -am "deploy(lootregen): ${TAG}"
              git push origin HEAD:main
            '''
          }
        }
      }
    }
  }

  post {
    always {
      container('git') { sh 'rm -rf gitops' }
    }
  }
}
