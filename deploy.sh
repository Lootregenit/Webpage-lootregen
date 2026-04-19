#!/bin/bash
# Deploys lootregen to the current kubectl context.
# Idempotent - safe to run multiple times.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "→ Applying manifests..."
kubectl apply -f lootregen.yaml

echo ""
echo "→ Waiting for deployments to become available..."
kubectl rollout status deployment/apache -n lootregen --timeout=120s
kubectl rollout status deployment/cloudflared -n lootregen --timeout=120s

echo ""
echo "→ Current state:"
kubectl get all -n lootregen

echo ""
echo "✓ Deployment complete."
echo ""
echo "Next step: upload your webpage files with ./upload-webpage.sh"
