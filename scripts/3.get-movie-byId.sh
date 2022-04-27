#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call getById() on the contract'
echo near view \$CONTRACT getById '{"id": '$MOVIEID'}' --accountId \$CONTRACT 
echo
echo \$CONTRACT is $CONTRACT
near view $CONTRACT getById '{"id": '$MOVIEID'}' --accountId $CONTRACT