//! { "cases": [ {
//!     "name": "main",
//!     "inputs": [
//!         {
//!             "method": "main",
//!             "calldata": [
//!             ]
//!         }
//!     ],
//!     "expected": [
//!         "7"
//!     ]
//! } ] }

// SPDX-License-Identifier: MIT

pragma solidity >=0.8.7;

contract Test {
    function main() public returns(uint) {
        uint _basefee = block.basefee;
        return _basefee;
    }
}
