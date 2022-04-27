#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo
echo 'About to call rentMovie() on the contract'
echo sudo near call \$CONTRACT rentMovie '{"'accountId'": "$CONTRACT", "id": '$MOVIEID'}' --accountId \$CONTRACT --amount \$RENTPRICE
echo
echo \$CONTRACT is $CONTRACT
echo \$MOVIEID is $MOVIEID
echo \$RENTPRICE is $RENTPRICE
sudo near call $CONTRACT rentMovie '{"accountId": "'$CONTRACT'", "id": '$MOVIEID'}' --accountId $CONTRACT --amount $RENTPRICE