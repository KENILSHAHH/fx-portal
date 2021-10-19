/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxStateChildTunnel,
  FxStateChildTunnelInterface,
} from "../FxStateChildTunnel";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxChild",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    inputs: [],
    name: "fxChild",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fxRootTunnel",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRootMessageSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestStateId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "sendMessageToRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxRootTunnel",
        type: "address",
      },
    ],
    name: "setFxRootTunnel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161095b38038061095b83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b6108ca806100916000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063888370941161005b57806388837094146100dd5780639a113ee2146100f25780639a7c4b7114610105578063e6a8e7451461011857610088565b8063142bc2ae1461008d578063450d11f0146100ab5780635a319df9146100c05780637f1e9cb0146100d5575b600080fd5b610095610120565b6040516100a29190610680565b60405180910390f35b6100b36101ae565b6040516100a2919061065f565b6100c86101ca565b6040516100a29190610808565b6100b36101d0565b6100f06100eb3660046104fd565b6101ec565b005b6100f061010036600461051e565b61028c565b6100f06101133660046105dd565b610298565b6100b3610330565b6004805461012d90610811565b80601f016020809104026020016040519081016040528092919081815260200182805461015990610811565b80156101a65780601f1061017b576101008083540402835291602001916101a6565b820191906000526020600020905b81548152906001019060200180831161018957829003601f168201915b505050505081565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1615610245576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023c906107ab565b60405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6102958161034c565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023c906106f1565b61032a848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061038692505050565b50505050565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b0368160405161037b9190610680565b60405180910390a150565b600154829073ffffffffffffffffffffffffffffffffffffffff8083169116146103dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023c9061074e565b6002849055600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516179055815161043490600490602085019061043b565b5050505050565b82805461044790610811565b90600052602060002090601f01602090048101928261046957600085556104af565b82601f1061048257805160ff19168380011785556104af565b828001600101855582156104af579182015b828111156104af578251825591602001919060010190610494565b506104bb9291506104bf565b5090565b5b808211156104bb57600081556001016104c0565b803573ffffffffffffffffffffffffffffffffffffffff811681146104f857600080fd5b919050565b60006020828403121561050e578081fd5b610517826104d4565b9392505050565b60006020808385031215610530578182fd5b823567ffffffffffffffff80821115610547578384fd5b818501915085601f83011261055a578384fd5b81358181111561056c5761056c610865565b604051847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011682010181811084821117156105ad576105ad610865565b60405281815283820185018810156105c3578586fd5b818585018683013790810190930193909352509392505050565b600080600080606085870312156105f2578283fd5b84359350610602602086016104d4565b9250604085013567ffffffffffffffff8082111561061e578384fd5b818701915087601f830112610631578384fd5b81358181111561063f578485fd5b886020828501011115610650578485fd5b95989497505060200194505050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6000602080835283518082850152825b818110156106ac57858101830151858201604001528201610690565b818111156106bd5783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60208082526021908201527f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560408201527f5200000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560408201527f525f46524f4d5f524f4f54000000000000000000000000000000000000000000606082015260800190565b6020808252602a908201527f4678426173654368696c6454756e6e656c3a20524f4f545f54554e4e454c5f4160408201527f4c52454144595f53455400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60028104600182168061082557607f821691505b6020821081141561085f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea264697066735822122035b04eaf9e7ee6b04b9f3d4f33a5fa736a210b9b6dfac3b2f0f0b5ea420f3cf664736f6c63430008000033";

export class FxStateChildTunnel__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _fxChild: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxStateChildTunnel> {
    return super.deploy(
      _fxChild,
      overrides || {}
    ) as Promise<FxStateChildTunnel>;
  }
  getDeployTransaction(
    _fxChild: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_fxChild, overrides || {});
  }
  attach(address: string): FxStateChildTunnel {
    return super.attach(address) as FxStateChildTunnel;
  }
  connect(signer: Signer): FxStateChildTunnel__factory {
    return super.connect(signer) as FxStateChildTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxStateChildTunnelInterface {
    return new utils.Interface(_abi) as FxStateChildTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxStateChildTunnel {
    return new Contract(address, _abi, signerOrProvider) as FxStateChildTunnel;
  }
}
