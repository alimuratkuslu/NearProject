#!/usr/bin/env bash

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable"

echo "deleting $CONTRACT"
echo
near delete $CONTRACT 

echo --------------------------------------------
echo
echo "cleaning up the /neardev folder"
echo
rm -rf ./neardev

# exit on first error after this point to avoid redeploying with successful build
set -e

echo --------------------------------------------
echo
echo "rebuilding the contract (release build)"
echo
sudo yarn build:release

echo --------------------------------------------
echo
echo "redeploying the contract"
echo
sudo near dev-deploy ./build/release/NearProject.wasm

echo --------------------------------------------
echo run the following commands
echo
echo 'export CONTRACT=<dev-123-456>'
echo
echo

exit 0