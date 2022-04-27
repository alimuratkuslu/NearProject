#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call del() on the contract'
echo sudo near call \$CONTRACT del '{"id": '$MOVIEID'}' --accountId \$CONTRACT 
echo
echo \$CONTRACT is $CONTRACT
sudo near call $CONTRACT del '{"id": '$MOVIEID'}' --accountId $CONTRACT