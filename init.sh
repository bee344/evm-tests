#!/bin/sh

chain=$1
tests=$2

if [ "$chain" = '--acala' ]; then
  export NETWORK_URL="https://eth-rpc-acala.aca-api.network"
elif [ "$chain" = '--ethereum' ]; then
  export NETWORK_URL="https://ethereum-rpc.publicnode.com"
elif [ "$chain" = '--moonbeam' ]; then
  export NETWORK_URL="https://moonbeam.public.blastapi.io"
elif [ "$chain" = '--astar' ]; then
  export NETWORK_URL="https://rpc.astar.network"
elif [ "$chain" = '--polygon' ]; then
  export NETWORK_URL="https://polygon-amoy-bor-rpc.publicnode.com"
else
  export NETWORK_URL="https://ethereum-rpc.publicnode.com"
fi

echo $chain

if [ "$tests" = '--matter-labs' ]; then
  cd ./matter-labs-tests/ &&
  npx hardhat test ./test/MatterLabsTests.ts
elif [ "$tests" = '--smart-contracts' ]; then
  npx hardhat compile &&
  npx hardhat test &&
  cd ./v3-core/ &&
  yarn install &&
  yarn test &&
  cd ../v3-periphery/ &&
  yarn install &&
  yarn compile &&
  yarn test
else
  npx hardhat compile &&
  npx hardhat test &&
  cd ./v3-core/ &&
  yarn install &&
  yarn test &&
  cd ../v3-periphery/ &&
  yarn install &&
  yarn compile &&
  yarn test &&
  cd ../../matter-labs-tests/ &&
  npx hardhat test ./test/MatterLabsTests.ts
fi