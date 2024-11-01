//! { "cases": [ {
//!     "name": "condition_true",
//!     "inputs": [
//!         {
//!             "method": "with_message",
//!             "calldata": [
//!                 "1"
//!             ]
//!         }
//!     ],
//!     "expected": {
//!         "return_data": [
//!             "0x08C379A000000000000000000000000000000000000000000000000000000000",
//!             "0x0000002000000000000000000000000000000000000000000000000000000000",
//!             "0x000000054572726F720000000000000000000000000000000000000000000000",
//!             "0x0000000000000000000000000000000000000000000000000000000000000000"
//!         ],
//!         "exception": true
//!     }
//! }] }

// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22;

contract Test {
    function without_message(bool condition) public pure returns(uint8) {
        uint8 result = 5;

        if (condition) {
            require(result != 5);
        }

        return result;
    }

    function with_empty_message(bool condition) public pure returns(uint8) {
        uint8 result = 5;

        if (condition) {
            require(result != 5, "");
        }

        return result;
    }

    function with_message(bool condition) public pure returns(uint8) {
        uint8 result = 5;

        if (condition) {
            require(result != 5, "Error");
        }

        return result;
    }
}
