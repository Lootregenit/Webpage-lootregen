#!/bin/bash
# Copies the contents of ./webpage/ into the apache pod's htdocs directory.
# Run this after any edits to webpage/.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

NAMESPACE="lootregen"
WEBPAGE_DIR="./webpage"

if [[ ! -d "$WEBPAGE_DIR" ]]; then
    echo "ERROR: $WEBPAGE_DIR not found" >&2
    exit 1
fi

echo "→ Finding apache pod..."
POD=$(kubectl get pod -n "$NAMESPACE" -l app=apache \
    -o jsonpath='{.items[0].metadata.name}')

if [[ -z "$POD" ]]; then
    echo "ERROR: no apache pod found. Is the deployment running?" >&2
    exit 1
fi

echo "→ Found pod: $POD"
echo "→ Clearing existing htdocs..."
kubectl exec -n "$NAMESPACE" "$POD" -- sh -c 'rm -rf /usr/local/apache2/htdocs/*'

echo "→ Uploading $WEBPAGE_DIR/ to $POD:/usr/local/apache2/htdocs/"
kubectl cp "$WEBPAGE_DIR/." "$NAMESPACE/$POD:/usr/local/apache2/htdocs/"

echo ""
echo "✓ Upload complete."
echo ""
echo "Your site should now be live via the Cloudflare Tunnel hostname."