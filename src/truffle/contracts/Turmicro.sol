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

        _viajes.push(Viaje("Santiago", 2 ether, 2));
        _viajes.push(Viaje("Punta Arenas", 4 ether, 3));
        _viajes.push(Viaje("Antofagasta", 5 ether, 4));
        _viajes.push(Viaje("Puerto Montt", 2 ether, 2));
        _viajes.push(Viaje("Iquique", 4 ether, 3));
        _viajes.push(Viaje("Concepcion", 4 ether, 3));
        _viajes.push(Viaje("Arica", 8 ether, 5));
        _viajes.push(Viaje("Copiapo", 3 ether, 3));
        _viajes.push(Viaje("Calama", 2 ether, 3));
        _viajes.push(Viaje("Temuco", 2 ether, 3));
        _viajes.push(Viaje("La serena", 3 ether, 4));
        _viajes.push(Viaje("Valdivia", 4 ether, 4));
        _viajes.push(Viaje("Osorno", 2 ether, 5));
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

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
