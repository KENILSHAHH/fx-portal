/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FxERC1155ChildTunnelInterface extends ethers.utils.Interface {
  functions: {
    "DEPOSIT()": FunctionFragment;
    "DEPOSIT_BATCH()": FunctionFragment;
    "MAP_TOKEN()": FunctionFragment;
    "WITHDRAW()": FunctionFragment;
    "WITHDRAW_BATCH()": FunctionFragment;
    "computedCreate2Address(bytes32,bytes32,address)": FunctionFragment;
    "fxChild()": FunctionFragment;
    "fxRootTunnel()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "processMessageFromRoot(uint256,address,bytes)": FunctionFragment;
    "rootToChildToken(address)": FunctionFragment;
    "setFxRootTunnel(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokenTemplate()": FunctionFragment;
    "withdraw(address,uint256,uint256,bytes)": FunctionFragment;
    "withdrawBatch(address,uint256[],uint256[],bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DEPOSIT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEPOSIT_BATCH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAP_TOKEN", values?: undefined): string;
  encodeFunctionData(functionFragment: "WITHDRAW", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "WITHDRAW_BATCH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "computedCreate2Address",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "fxChild", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fxRootTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "processMessageFromRoot",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rootToChildToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxRootTunnel",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenTemplate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawBatch",
    values: [string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "DEPOSIT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEPOSIT_BATCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAP_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WITHDRAW", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAW_BATCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computedCreate2Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fxRootTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMessageFromRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rootToChildToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFxRootTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenTemplate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBatch",
    data: BytesLike
  ): Result;

  events: {
    "MessageSent(bytes)": EventFragment;
    "TokenMapped(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenMapped"): EventFragment;
}

export type MessageSentEvent = TypedEvent<[string] & { message: string }>;

export type TokenMappedEvent = TypedEvent<
  [string, string] & { rootToken: string; childToken: string }
>;

export class FxERC1155ChildTunnel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FxERC1155ChildTunnelInterface;

  functions: {
    DEPOSIT(overrides?: CallOverrides): Promise<[string]>;

    DEPOSIT_BATCH(overrides?: CallOverrides): Promise<[string]>;

    MAP_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    WITHDRAW(overrides?: CallOverrides): Promise<[string]>;

    WITHDRAW_BATCH(overrides?: CallOverrides): Promise<[string]>;

    computedCreate2Address(
      salt: BytesLike,
      bytecodeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fxChild(overrides?: CallOverrides): Promise<[string]>;

    fxRootTunnel(overrides?: CallOverrides): Promise<[string]>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rootToChildToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenTemplate(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      childToken: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawBatch(
      childToken: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEPOSIT(overrides?: CallOverrides): Promise<string>;

  DEPOSIT_BATCH(overrides?: CallOverrides): Promise<string>;

  MAP_TOKEN(overrides?: CallOverrides): Promise<string>;

  WITHDRAW(overrides?: CallOverrides): Promise<string>;

  WITHDRAW_BATCH(overrides?: CallOverrides): Promise<string>;

  computedCreate2Address(
    salt: BytesLike,
    bytecodeHash: BytesLike,
    deployer: string,
    overrides?: CallOverrides
  ): Promise<string>;

  fxChild(overrides?: CallOverrides): Promise<string>;

  fxRootTunnel(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  processMessageFromRoot(
    stateId: BigNumberish,
    rootMessageSender: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rootToChildToken(arg0: string, overrides?: CallOverrides): Promise<string>;

  setFxRootTunnel(
    _fxRootTunnel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenTemplate(overrides?: CallOverrides): Promise<string>;

  withdraw(
    childToken: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawBatch(
    childToken: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEPOSIT(overrides?: CallOverrides): Promise<string>;

    DEPOSIT_BATCH(overrides?: CallOverrides): Promise<string>;

    MAP_TOKEN(overrides?: CallOverrides): Promise<string>;

    WITHDRAW(overrides?: CallOverrides): Promise<string>;

    WITHDRAW_BATCH(overrides?: CallOverrides): Promise<string>;

    computedCreate2Address(
      salt: BytesLike,
      bytecodeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<string>;

    fxChild(overrides?: CallOverrides): Promise<string>;

    fxRootTunnel(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    rootToChildToken(arg0: string, overrides?: CallOverrides): Promise<string>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenTemplate(overrides?: CallOverrides): Promise<string>;

    withdraw(
      childToken: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawBatch(
      childToken: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageSent(bytes)"(
      message?: null
    ): TypedEventFilter<[string], { message: string }>;

    MessageSent(
      message?: null
    ): TypedEventFilter<[string], { message: string }>;

    "TokenMapped(address,address)"(
      rootToken?: string | null,
      childToken?: string | null
    ): TypedEventFilter<
      [string, string],
      { rootToken: string; childToken: string }
    >;

    TokenMapped(
      rootToken?: string | null,
      childToken?: string | null
    ): TypedEventFilter<
      [string, string],
      { rootToken: string; childToken: string }
    >;
  };

  estimateGas: {
    DEPOSIT(overrides?: CallOverrides): Promise<BigNumber>;

    DEPOSIT_BATCH(overrides?: CallOverrides): Promise<BigNumber>;

    MAP_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAW(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAW_BATCH(overrides?: CallOverrides): Promise<BigNumber>;

    computedCreate2Address(
      salt: BytesLike,
      bytecodeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fxChild(overrides?: CallOverrides): Promise<BigNumber>;

    fxRootTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rootToChildToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenTemplate(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      childToken: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawBatch(
      childToken: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEPOSIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEPOSIT_BATCH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAP_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WITHDRAW(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WITHDRAW_BATCH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    computedCreate2Address(
      salt: BytesLike,
      bytecodeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fxChild(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRootTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rootToChildToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      childToken: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawBatch(
      childToken: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}