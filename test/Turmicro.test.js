const assert = require('assert')

const Turmicro = artifacts.require('Turmicro')

const intance = async () => await Turmicro.deployed()

contract('Turmicro', accounts => {
  it('Mostrar viajes disponible', async () => {
    const instance = await intance()
    const totalViajes = await instance.getTotalViajes()
    assert(totalViajes > 0)
  })

  it('El cliente puede comprar un viaje', async () => {
    const instance = await intance()
    const primerViaje = await instance._viajes(0)
    const destino = primerViaje[0]
    const valor = primerViaje[1]

    assert.equal(typeof destino, 'string')

    await instance.pagarViaje(0, { from: accounts[0], value: valor })

    const clienteViaje = await instance._vieajesCliente(accounts[0], 0)
    const totalViajes = await instance._totalViajes(accounts[0])

    assert.equal(clienteViaje[0], destino)
    assert.equal(clienteViaje[1].toString(), valor.toString())
    assert.equal(totalViajes, 1)
  })

  it('Error al comprar viaje cuando no tiene suficiente dinero', async () => {
    const instance = await intance()
    const primerViaje = await instance._viajes(0)
    const valor = primerViaje[1] - 3000

    try {
      await instance.pagarViaje(0, { from: accounts[0], value: valor })
    } catch (error) {
      return
    }

    assert.fail()
  })

  it('Mostrar los balences del contrato', async () => {
    // hacer un nuevo deployed para que no se vea afectado por los cambios anteriores
    const instance = await Turmicro.new()

    const primerViaje = await instance._viajes(0)
    const valor = primerViaje[1]

    const segundoViaje = await instance._viajes(1)
    const valor2 = segundoViaje[1]

    await instance.pagarViaje(0, { from: accounts[0], value: valor })
    await instance.pagarViaje(1, { from: accounts[0], value: valor2 })

    const balance = await instance.getBalance()
    assert.equal(+balance, Number(valor) + Number(valor2))
  })

  it('Verificar que los puntos de los clientes pasen a ether', async () => {
    // hacer un nuevo deployed para que no se vea afectado por los cambios anteriores
    const instance = await Turmicro.new()

    const primerViaje = await instance._viajes(0)
    const valor = primerViaje[1]

    await instance.pagarViaje(0, { from: accounts[0], value: valor })

    const balance = await web3.eth.getBalance(accounts[0])
    await instance.transferirPuntosEnEther({ from: accounts[0] })
    const balanceFinal = await web3.eth.getBalance(accounts[0])

    const cliente = await instance._clientes(accounts[0])
    const puntosCliente = cliente[0]

    assert.equal(+puntosCliente, 0)
    assert(+balanceFinal > +balance)
  })
})
