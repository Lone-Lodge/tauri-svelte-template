#!/usr/bin/env bash
set -euo pipefail

echo "Scaffolding monorepo layout..."
mkdir -p apps packages core plugins bindings
echo "Done. Add your packages and update pnpm-workspace.yaml accordingly."
