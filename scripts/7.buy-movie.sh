#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call buyMovieById() on the contract'
echo sudo near call \$CONTRACT buyMovieById '{"'accountId'": "$CONTRACT", "id": '$MOVIEID'}' --accountId \$CONTRACT --amount \$MOVIEPRICE
echo
echo \$CONTRACT is $CONTRACT
echo \$MOVIEID is $MOVIEID
echo \$MOVIEPRICE is $MOVIEPRICE
sudo near call $CONTRACT buyMovieById '{"accountId": "'$CONTRACT'", "id": '$MOVIEID'}' --accountId $CONTRACT --amount $MOVIEPRICE