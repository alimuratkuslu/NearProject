#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call update() on the contract'
echo sudo near call \$CONTRACT update '{"id": '$MOVIEID', "updates":{"name": "Harry Potter", "price": 13.7, "rating": 9.2, "duration": 120, "type": "Fiction", "stock": 20} }' --accountId \$CONTRACT 
echo
echo \$CONTRACT is $CONTRACT
sudo near call $CONTRACT update '{"id": '$MOVIEID', "updates":{"name": "Harry Potter", "price": 13.7, "rating": 9.2, "duration": 120, "type": "Fiction", "stock": 20} }' --accountId $CONTRACT 