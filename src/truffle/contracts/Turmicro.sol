// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Turmicro {
    address public _owner;

    constructor() {
        _owner = msg.sender;
    }
}
