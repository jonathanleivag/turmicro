/* eslint-disable */
import BN from 'bn.js'
import BigNumber from 'bignumber.js'
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext
} from 'ethereum-abi-types-generator'

export interface CallOptions {
  from?: string
  gasPrice?: string
  gas?: number
}

export interface SendOptions {
  from: string
  value?: number | string | BN | BigNumber
  gasPrice?: string
  gas?: number
}

export interface EstimateGasOptions {
  from?: string
  value?: number | string | BN | BigNumber
  gas?: number
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void
  ): PromiEvent<TransactionReceipt>
  estimateGas(options: EstimateGasOptions): Promise<number>
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void
  ): Promise<number>
  encodeABI(): string
}

export interface MethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>
  call(options: CallOptions): Promise<TCallReturn>
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>
  encodeABI(): string
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
  Turmicro,
  TurmicroMethodNames,
  TurmicroEventsContext,
  TurmicroEvents
>
export type TurmicroEvents = 'ViajesComprados'
export interface TurmicroEventsContext {
  ViajesComprados(
    parameters: {
      filter?: { cliente?: string | string[] }
      fromBlock?: number
      toBlock?: 'latest' | number
      topics?: string[]
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse
}
export type TurmicroMethodNames =
  | 'new'
  | '_clientes'
  | '_etherPuntos'
  | '_owner'
  | '_totalViajes'
  | '_viajes'
  | '_vieajesCliente'
  | 'pagarViaje'
  | 'getTotalViajes'
  | 'getPuntosEnEther'
  | 'transferirPuntosEnEther'
  | 'getBalance'
export interface ViajesCompradosEventEmittedResponse {
  cliente: string
  valor: string
}
export interface _clientesResponse {
  puntos: string
  totalViajes: string
}
export interface _viajesResponse {
  nombre: string
  valor: number
  puntos: number
}
export interface _vieajesClienteResponse {
  nombre: string
  valor: string
  puntos: string
}

interface IPagerValor {
  from: string
  value: number
}

interface ITransferirPuntosEnEther {
  from: string
}

export interface Turmicro {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   */
  'new'(): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  _clientes(parameter0: string): _clientesResponse
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  _etherPuntos(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  _owner(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  _totalViajes(parameter0: string): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  _viajes(parameter0: number): _viajesResponse
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: uint256, Indexed: false
   */
  _vieajesCliente(
    parameter0: string,
    parameter1: number
  ): _vieajesClienteResponse
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param indexVieje Type: uint256, Indexed: false
   */
  pagarViaje(
    indexVieje: number,
    object: IPagerValor
  ): MethodPayableReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getTotalViajes(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getPuntosEnEther(): MethodConstantReturnContext<string>
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  transferirPuntosEnEther(
    payload: ITransferirPuntosEnEther
  ): MethodReturnContext
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getBalance(): MethodConstantReturnContext<string>
}
