#!/bin/bash
# Creates the Cloudflare tunnel token Secret in the lootregen namespace.
# The token is NEVER written to disk or committed to Git.

set -euo pipefail

NAMESPACE="lootregen"

# Ensure the namespace exists first
kubectl create namespace "$NAMESPACE" --dry-run=client -o yaml | kubectl apply -f -

# Prompt for the token (hidden input)
echo "Paste your Cloudflare Tunnel token and press Enter:"
read -rs TOKEN
echo ""

if [[ -z "$TOKEN" ]]; then
    echo "ERROR: empty token" >&2
    exit 1
fi

# Create or update the Secret
kubectl create secret generic cloudflare-token \
    --from-literal=token="$TOKEN" \
    -n "$NAMESPACE" \
    --dry-run=client -o yaml | kubectl apply -f -

echo "✓ Secret 'cloudflare-token' created in namespace '$NAMESPACE'."

# Clear from shell memory
unset TOKEN