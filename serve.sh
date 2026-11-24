#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

export BUNDLE_PATH="${BUNDLE_PATH:-vendor/bundle}"
export BUNDLE_DISABLE_SHARED_GEMS="${BUNDLE_DISABLE_SHARED_GEMS:-true}"

bundle exec jekyll serve "$@"
