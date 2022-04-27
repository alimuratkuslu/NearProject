#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call seeRentPriceById() on the contract'
echo near view \$CONTRACT seeRentPriceById '{"id": '$MOVIEID'}' --accountId \$CONTRACT 
echo
echo \$CONTRACT is $CONTRACT
echo \$MOVIEID is $MOVIEID
near view $CONTRACT seeRentPriceById '{"id": '$MOVIEID'}' --accountId $CONTRACT

echo --------------------------------------------
echo run the following commands
echo
echo 'export RENTPRICE=<movie_price>'
echo