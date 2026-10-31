# Static site served by unprivileged nginx (uid 101, port 8080), so it runs
# under the "restricted" Pod Security level with a read-only root filesystem.
# The site is baked into the image: a deploy is a new tag, a rollback is a git revert.
#
# SITE_DIR = the folder holding index.html. Languages are switched inside the page (?lang=de|pl).
ARG SITE_DIR=webpage

FROM nginxinc/nginx-unprivileged:1.29-alpine
ARG SITE_DIR
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=101:101 ${SITE_DIR}/ /usr/share/nginx/html/
EXPOSE 8080
