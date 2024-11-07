### EVM Tests [WIP]

Set of generic tests to check for chain compatibility. It covers higher level 
tests derived from Smart Contracts (such as Uniswap V3) and lower level testing inspired by [`Matter Labs`]
(https://github.com/matter-labs).

## Execution

This is a hybrid test suite that uses both [Hardhat](https://hardhat.org/) and
[Foundry](https://book.getfoundry.sh/).

To run the tests, simply run the script `init.sh`:

```sh
~ ./init.sh <CHAIN> <URL> <TEST>
```

Currently the available options for `CHAIN` to test against are:
* `--acala`
* `--arbitrum`
* `--astar`
* `--ethereum`
* `--moonbeam`
* `--polygon`
* `--westend`
* `--endpoint` or `-e`

With `--ethereum` being the default option.

When passing `--endpoint` or `-e`, the second argument must be the `http` endpoint
of the node you are connecting to. If choosing from a preset chain and specifying
a test, `--` should be passed for the `<URL>` argument.

As for `TEST`, you can specify either `--matter-labs` to run the `matter-labs`
tests or `--smart-contracts` to run the tests that deploy and check against the
smart contracts (Uniswap V3 and some generic smart contracts, more tba). Not
specifying the test will result in both suites being executed consecutively.

This script will install the necessary packages and run the tests in order.

The test logs will be saved to `/test-logs/`, in order to allow the user to review
them after they are completed, since terminals may have a limited historical display.

**NOTE**

As things are now, running both suites at the same time will result in timeouts.

Some tests are expected to fail, and being actively worked on.

To run the tests with the default `--arbitrum` or `--polygon` options, you need
to set the env variable `PRIVATE_KEY` with your Infura API key. 

Tests take a while to run, and using the predetermined public endpoints may 
result in them taking longer timeouts or being banned due to the amount of requests,
so we highly recommend using the `-e` option.
