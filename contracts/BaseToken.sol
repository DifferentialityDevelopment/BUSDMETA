//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Common.sol";

abstract contract BaseToken {
    event TokenCreated(
        address indexed owner,
        address indexed token,
        Common.TokenType tokenType,
        uint256 version
    );
}