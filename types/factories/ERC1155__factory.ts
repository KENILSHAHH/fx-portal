/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611a22806100206000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461015057610087565b8062fdd58e1461008c57806301ffc9a7146100b55780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a3660046110f4565b610163565b6040516100ac9190611773565b60405180910390f35b6100c86100c33660046111db565b6101d4565b6040516100ac91906113b3565b6100e86100e336600461121a565b61027e565b6040516100ac91906113be565b610108610103366004610fb1565b610312565b005b61011d61011836600461111d565b610639565b6040516100ac9190611372565b6101086101383660046110ba565b6107bd565b6100c861014b366004610f7f565b6108dd565b61010861015e366004611057565b610918565b600073ffffffffffffffffffffffffffffffffffffffff83166101a15760405162461bcd60e51b81526004016101989061148b565b60405180910390fd5b5060009081526020818152604080832073ffffffffffffffffffffffffffffffffffffffff949094168352929052205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061026757507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b80610276575061027682610b16565b90505b919050565b60606002805461028d90611807565b80601f01602080910402602001604051908101604052809291908181526020018280546102b990611807565b80156103065780601f106102db57610100808354040283529160200191610306565b820191906000526020600020905b8154815290600101906020018083116102e957829003601f168201915b50505050509050919050565b81518351146103335760405162461bcd60e51b815260040161019890611716565b73ffffffffffffffffffffffffffffffffffffffff84166103665760405162461bcd60e51b815260040161019890611545565b61036e610b60565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806103ae57506103ae8561014b610b60565b6103ca5760405162461bcd60e51b8152600401610198906115a2565b60006103d4610b60565b90506103e4818787878787610631565b60005b84518110156105a457600085828151811061042b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506000858381518110610470577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8e1683529093529190912054909150818110156104cd5760405162461bcd60e51b8152600401610198906115ff565b6104d782826117f0565b60008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461058991906117d8565b925050819055505050508061059d9061185b565b90506103e7565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161061b929190611385565b60405180910390a4610631818787878787610b65565b505050505050565b6060815183511461065c5760405162461bcd60e51b8152600401610198906116b9565b6000835167ffffffffffffffff81111561069f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156106c8578160200160208202803683370190505b50905060005b84518110156107b557610761858281518110610713577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151858381518110610754577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610163565b82828151811061079a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60209081029190910101526107ae8161185b565b90506106ce565b509392505050565b8173ffffffffffffffffffffffffffffffffffffffff166107dc610b60565b73ffffffffffffffffffffffffffffffffffffffff1614156108105760405162461bcd60e51b81526004016101989061165c565b806001600061081d610b60565b73ffffffffffffffffffffffffffffffffffffffff90811682526020808301939093526040918201600090812091871680825291909352912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169215159290921790915561088c610b60565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516108d191906113b3565b60405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b73ffffffffffffffffffffffffffffffffffffffff841661094b5760405162461bcd60e51b815260040161019890611545565b610953610b60565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061099357506109938561014b610b60565b6109af5760405162461bcd60e51b8152600401610198906114e8565b60006109b9610b60565b90506109d98187876109ca88610cd7565b6109d388610cd7565b87610631565b60008481526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8a16845290915290205483811015610a275760405162461bcd60e51b8152600401610198906115ff565b610a3184826117f0565b60008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8c81168552925280832093909355881681529081208054869290610a7a9084906117d8565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051610af792919061177c565b60405180910390a4610b0d828888888888610d49565b50505050505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b335b90565b610b848473ffffffffffffffffffffffffffffffffffffffff16610e7e565b15610631576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c8190610be390899089908890889088906004016112b7565b602060405180830381600087803b158015610bfd57600080fd5b505af1925050508015610c2d575060408051601f3d908101601f19168201909252610c2a918101906111fe565b60015b610c7657610c396118f8565b80610c445750610c5e565b8060405162461bcd60e51b815260040161019891906113be565b60405162461bcd60e51b8152600401610198906113d1565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014610b0d5760405162461bcd60e51b81526004016101989061142e565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610d38577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602090810291909101015292915050565b610d688473ffffffffffffffffffffffffffffffffffffffff16610e7e565b15610631576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e6190610dc79089908990889088908890600401611322565b602060405180830381600087803b158015610de157600080fd5b505af1925050508015610e11575060408051601f3d908101601f19168201909252610e0e918101906111fe565b60015b610e1d57610c396118f8565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014610b0d5760405162461bcd60e51b81526004016101989061142e565b3b151590565b803573ffffffffffffffffffffffffffffffffffffffff8116811461027957600080fd5b600082601f830112610eb8578081fd5b81356020610ecd610ec8836117b4565b61178a565b8281528181019085830183850287018401881015610ee9578586fd5b855b85811015610f0757813584529284019290840190600101610eeb565b5090979650505050505050565b600082601f830112610f24578081fd5b813567ffffffffffffffff811115610f3e57610f3e6118c3565b610f516020601f19601f8401160161178a565b818152846020838601011115610f65578283fd5b816020850160208301379081016020019190915292915050565b60008060408385031215610f91578182fd5b610f9a83610e84565b9150610fa860208401610e84565b90509250929050565b600080600080600060a08688031215610fc8578081fd5b610fd186610e84565b9450610fdf60208701610e84565b9350604086013567ffffffffffffffff80821115610ffb578283fd5b61100789838a01610ea8565b9450606088013591508082111561101c578283fd5b61102889838a01610ea8565b9350608088013591508082111561103d578283fd5b5061104a88828901610f14565b9150509295509295909350565b600080600080600060a0868803121561106e578081fd5b61107786610e84565b945061108560208701610e84565b93506040860135925060608601359150608086013567ffffffffffffffff8111156110ae578182fd5b61104a88828901610f14565b600080604083850312156110cc578182fd5b6110d583610e84565b9150602083013580151581146110e9578182fd5b809150509250929050565b60008060408385031215611106578182fd5b61110f83610e84565b946020939093013593505050565b6000806040838503121561112f578182fd5b823567ffffffffffffffff80821115611146578384fd5b818501915085601f830112611159578384fd5b81356020611169610ec8836117b4565b82815281810190858301838502870184018b1015611185578889fd5b8896505b848710156111ae5761119a81610e84565b835260019690960195918301918301611189565b50965050860135925050808211156111c4578283fd5b506111d185828601610ea8565b9150509250929050565b6000602082840312156111ec578081fd5b81356111f7816119bb565b9392505050565b60006020828403121561120f578081fd5b81516111f7816119bb565b60006020828403121561122b578081fd5b5035919050565b6000815180845260208085019450808401835b8381101561126157815187529582019590820190600101611245565b509495945050505050565b60008151808452815b8181101561129157602081850181015186830182015201611275565b818111156112a25782602083870101525b50601f01601f19169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a060408301526112f060a0830186611232565b82810360608401526113028186611232565b90508281036080840152611316818561126c565b98975050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a0608083015261136760a083018461126c565b979650505050505050565b6000602082526111f76020830184611232565b6000604082526113986040830185611232565b82810360208401526113aa8185611232565b95945050505050565b901515815260200190565b6000602082526111f7602083018461126c565b60208082526034908201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560408201527f526563656976657220696d706c656d656e746572000000000000000000000000606082015260800190565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a6563746560408201527f6420746f6b656e73000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60408201527f65726f2061646472657373000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201527f20617070726f7665640000000000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526032908201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060408201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201527f72207472616e7366657200000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360408201527f20666f722073656c660000000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860408201527f206d69736d617463680000000000000000000000000000000000000000000000606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060408201527f6d69736d61746368000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff811182821017156117ac576117ac6118c3565b604052919050565b600067ffffffffffffffff8211156117ce576117ce6118c3565b5060209081020190565b600082198211156117eb576117eb611894565b500190565b60008282101561180257611802611894565b500390565b60028104600182168061181b57607f821691505b60208210811415611855577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561188d5761188d611894565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60e01c90565b600060443d101561190857610b62565b600481823e6308c379a061191c82516118f2565b1461192657610b62565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d016004823e80513d67ffffffffffffffff81602484011181841117156119745750505050610b62565b8284019250825191508082111561198e5750505050610b62565b503d830160208284010111156119a657505050610b62565b601f01601f1916810160200160405291505090565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146119e957600080fd5b5056fea264697066735822122047d445a4902c633e26774f10cd37c4511a280ffcf9f9334149483ebd208d1beb64736f6c63430008000033";

export class ERC1155__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
