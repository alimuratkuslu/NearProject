#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call getAll() on the contract'
echo near view \$CONTRACT getAll '{"offset":0}' --accountId \$CONTRACT 
echo
echo \$CONTRACT is $CONTRACT
near view $CONTRACT getAll '{"offset":0}' --accountId $CONTRACT