#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call create() on the contract'
echo sudo near call \$CONTRACT create '{"name":"Inception", "price": 10.5, "rating": 8.8, "duration": 180, "type": "Action", "stock": 10}' --accountId \$CONTRACT 
echo
echo \$CONTRACT is $CONTRACT
sudo near call $CONTRACT create '{"name":"Inception", "price": 10.5, "rating": 8.8, "duration": 180, "type": "Action", "stock": 10}' --accountId $CONTRACT

echo --------------------------------------------
echo run the following commands
echo
echo 'export MOVIEID=<movie_id>'
echo 'export MOVIEPRICE=<movie_price>'
echo