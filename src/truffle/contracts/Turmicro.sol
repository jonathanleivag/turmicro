// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Turmicro {
    address public _owner;

    struct Clientes {
        uint256 puntos;
        uint256 totalViajes;
    }

    struct Viaje {
        string nombre;
        uint256 valor;
        uint256 puntos;
    }

    Viaje[] public _viajes;

    mapping(address => Clientes) public _clientes;
    mapping(address => Viaje[]) public _vieajesCliente;
    mapping(address => uint256) public _totalViajes;

    event ViajesComprados(address indexed cliente, uint256 valor);

    constructor() {
        _owner = msg.sender;
    }

    function pagarViaje(uint256 indexVieje) public payable {
        Viaje memory vieje = _viajes[indexVieje];

        require(msg.value == vieje.valor);

        Clientes storage cliente = _clientes[msg.sender];

        cliente.puntos += vieje.puntos;
        cliente.totalViajes++;

        _vieajesCliente[msg.sender].push(vieje);
        _totalViajes[msg.sender]++;

        emit ViajesComprados(msg.sender, vieje.valor);
    }
}
