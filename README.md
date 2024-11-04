### EVM Tests [WIP]

Set of generic tests to check for chain compatibility. It covers higher level 
tests derived from Smart Contracts (such as Uniswap V3) and lower level testing inspired by [`Matter Labs`]
(https://github.com/matter-labs).

## Execution

To run the tests, simply run the script `init.sh`:

```sh
~ ./init.sh <CHAIN> <URL> <TEST>
```

Currently the available options for `CHAIN` to test against are:
* `--acala`
* `--moonbeam`
* `--astar`
* `--ethereum`
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

**NOTE**

As things are now, running both suites at the same time will result in timeouts.
Some tests are expected to fail, and being actively worked on.