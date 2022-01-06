/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxERC20RootTunnel,
  FxERC20RootTunnelInterface,
} from "../FxERC20RootTunnel";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_checkpointManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fxRoot",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fxERC20Token",
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
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FxDepositERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FxWithdrawERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childToken",
        type: "address",
      },
    ],
    name: "TokenMappedERC20",
    type: "event",
  },
  {
    inputs: [],
    name: "DEPOSIT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAP_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEND_MESSAGE_EVENT_SIG",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkpointManager",
    outputs: [
      {
        internalType: "contract ICheckpointManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "childTokenTemplateCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "computedCreate2Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
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
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fxChildTunnel",
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
    name: "fxRoot",
    outputs: [
      {
        internalType: "contract IFxStateSender",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
    ],
    name: "mapToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processedExits",
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
        internalType: "bytes",
        name: "inputData",
        type: "bytes",
      },
    ],
    name: "receiveMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rootToChildTokens",
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
    inputs: [
      {
        internalType: "address",
        name: "_fxChildTunnel",
        type: "address",
      },
    ],
    name: "setFxChildTunnel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200311138038062003111833981016040819052620000349162000109565b600180546001600160a01b038086166001600160a01b03199283161790925560008054928516929091169190911790556200006f8162000084565b8051602090910120600555506200018f915050565b604051606090693d602d80600a3d3981f360b01b9069363d3d373d3d3d363d7360b01b9084841b906e5af43d82803e903d91602b57fd5bf360881b90620000d690859085908590859060200162000152565b6040516020818303038152906040529450505050505b919050565b80516001600160a01b0381168114620000ec57600080fd5b6000806000606084860312156200011e578283fd5b6200012984620000f1565b92506200013960208501620000f1565b91506200014960408501620000f1565b90509250925092565b6001600160b01b0319948516815292909316600a8301526001600160601b03191660148201526001600160881b0319909116602882015260370190565b612f72806200019f6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063aea4e49e1161008c578063de9b771f11610066578063de9b771f1461019d578063e9c670ad146101a5578063f4a120f7146101b8578063f953cec7146101cb576100ea565b8063aea4e49e14610178578063c0857ba01461018d578063d81c8e5214610195576100ea565b80637337957f116100c85780637337957f14610135578063886a69ba1461015557806388e700681461015d578063972c492814610170576100ea565b80630e387de6146100ef578063607f2d421461010d57806369914b3e1461012d575b600080fd5b6100f76101de565b60405161010491906127c1565b60405180910390f35b61012061011b36600461240a565b610202565b60405161010491906127b6565b6100f7610217565b610148610143366004612422565b61021d565b6040516101049190612672565b6100f761025e565b61014861016b366004612312565b610282565b6101486102aa565b61018b610186366004612312565b6102c6565b005b61014861034c565b6100f7610368565b61014861038c565b61018b6101b3366004612380565b6103a8565b61018b6101c6366004612312565b6104f6565b61018b6101d93660046124a6565b610820565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03681565b60036020526000908152604090205460ff1681565b60055481565b60008060ff60f81b83868660405160200161023b949392919061259c565b60408051601f1981840301815291905280516020909101209150505b9392505050565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad81565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b60025473ffffffffffffffffffffffffffffffffffffffff16156103055760405162461bcd60e51b81526004016102fc906127f6565b60405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b7f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82181565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff848116600090815260046020526040902054166103dd576103dd846104f6565b6103ff73ffffffffffffffffffffffffffffffffffffffff851633308561083a565b60007f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f821853386868660405160200161043b959493929190612693565b60408051601f198184030181529082905261045992916020016127ca565b6040516020818303038152906040529050610473816108c5565b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167f8a58355ceb4626422a66b0f36743672dde8507c6be664f0e5b9de8350a132159866040516104e791906127c1565b60405180910390a45050505050565b73ffffffffffffffffffffffffffffffffffffffff818116600090815260046020526040902054161561053b5760405162461bcd60e51b81526004016102fc9061296a565b600081905060008173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561058857600080fd5b505afa15801561059c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105c491908101906124d9565b905060008273ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561060e57600080fd5b505afa158015610622573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261064a91908101906124d9565b905060008373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561069457600080fd5b505afa1580156106a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cc919061251f565b905060007f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad86858585604051602001610708949392919061273a565b60408051601f198184030181529082905261072692916020016127ca565b6040516020818303038152906040529050610740816108c5565b600086604051602001610753919061256c565b60408051601f19818403018152919052805160209091012060055460025491925060009161079891849173ffffffffffffffffffffffffffffffffffffffff1661021d565b73ffffffffffffffffffffffffffffffffffffffff89811660008181526004602052604080822080547fffffffffffffffffffffffff000000000000000000000000000000000000000016948616948517905551939450919290917fc21cd413746aa9146d86960ed90847c18aa555d8dfd256e0aac3954c41e3cfe291a35050505050505050565b600061082b82610956565b905061083681610b81565b5050565b6108bf846323b872dd60e01b85858560405160240161085b939291906126da565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610c84565b50505050565b6000546002546040517fb472047700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283169263b47204779261092192911690859060040161270b565b600060405180830381600087803b15801561093b57600080fd5b505af115801561094f573d6000803e3d6000fd5b5050505050565b6060600061096383610d25565b9050600061097082610d55565b9050600061097d83610d92565b905060008161098b84610dc9565b61099486610fef565b6040516020016109a69392919061262a565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16156109ee5760405162461bcd60e51b81526004016102fc906128b0565b600081815260036020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610a2e85611019565b90506000610a3b82611127565b9050610a46816111b6565b60025473ffffffffffffffffffffffffffffffffffffffff908116911614610a805760405162461bcd60e51b81526004016102fc90612b94565b6000610a8b876111ed565b9050610aa9610a9984611217565b87610aa38a61121e565b84611248565b610ac55760405162461bcd60e51b81526004016102fc90612853565b610af385610ad289611547565b610adb8a611571565b84610ae58c61159b565b610aee8d6115c5565b6115ef565b506000610aff8361171d565b90507f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036610b35610b30836000611760565b61179a565b14610b525760405162461bcd60e51b81526004016102fc90612a6c565b6000610b5d84611815565b806020019051810190610b7091906124d9565b99505050505050505050505b919050565b60008060008084806020019051810190610b9b919061232e565b73ffffffffffffffffffffffffffffffffffffffff8481166000908152600460205260409020549498509296509094509250848116911614610bef5760405162461bcd60e51b81526004016102fc90612ada565b610c1073ffffffffffffffffffffffffffffffffffffffff8516838361183f565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f1a77c658a097b28097b54b8acb928a569a3830a6cbed2de1f60001c0757eb0d6846040516104e791906127c1565b6000610ce6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661185e9092919063ffffffff16565b805190915015610d205780806020019051810190610d0491906123ea565b610d205760405162461bcd60e51b81526004016102fc90612b37565b505050565b610d2d612223565b6000610d40610d3b8461186d565b611892565b60408051602081019091529081529392505050565b6060610d8c8260000151600881518110610d7f57634e487b7160e01b600052603260045260246000fd5b60200260200101516119b8565b92915050565b6000610d8c8260000151600281518110610dbc57634e487b7160e01b600052603260045260246000fd5b602002602001015161179a565b60408051602081019091526000815281516060919015610d8c57600080610df1600086611a63565b60f81c90506001811480610e0857508060ff166003145b15610ee457600185516002610e1d9190612dc3565b610e279190612e00565b67ffffffffffffffff811115610e4d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610e77576020820181803683370190505b5092506000610e87600187611a63565b90508084600081518110610eab57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001925050610f56565b600285516002610ef49190612dc3565b610efe9190612e00565b67ffffffffffffffff811115610f2457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f4e576020820181803683370190505b509250600091505b60ff82165b8351811015610fe657610f85610f7460ff851683612e00565b610f7f906002612c43565b87611a63565b848281518110610fa557634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610fde81612e66565b915050610f5b565b50505092915050565b6000610d8c8260000151600981518110610dbc57634e487b7160e01b600052603260045260246000fd5b611021612236565b6110498260000151600681518110610d7f57634e487b7160e01b600052603260045260246000fd5b6020820181905260009061105c9061186d565b905061106781611b00565b1561107c5761107581611892565b8252611113565b6020820151805160009061109290600190612e00565b67ffffffffffffffff8111156110b857634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156110e2576020820181803683370190505b50905060008083602101915082602001905061110082828551611b3a565b61110c610d3b8461186d565b8652505050505b61111c83610fef565b604083015250919050565b61112f612257565b6000611166836000015160038151811061115957634e487b7160e01b600052603260045260246000fd5b6020026020010151611892565b83604001518151811061118957634e487b7160e01b600052603260045260246000fd5b6020026020010151905060405180604001604052808281526020016111ad83611892565b90529392505050565b6000610d8c82602001516000815181106111e057634e487b7160e01b600052603260045260246000fd5b6020026020010151611bb3565b6000610d8c8260000151600581518110610dbc57634e487b7160e01b600052603260045260246000fd5b6020015190565b6060610d8c8260000151600781518110610d7f57634e487b7160e01b600052603260045260246000fd5b6000806112548461186d565b9050600061126182611892565b9050606080856000806112738b610dc9565b905080516000141561128f57600097505050505050505061153f565b60005b86518110156115365781518311156112b55760009850505050505050505061153f565b6112e58782815181106112d857634e487b7160e01b600052603260045260246000fd5b6020026020010151611bcd565b9550858051906020012084146113065760009850505050505050505061153f565b61132987828151811061115957634e487b7160e01b600052603260045260246000fd5b9450845160111415611428578151831415611399578c8051906020012061136a86601081518110610d7f57634e487b7160e01b600052603260045260246000fd5b8051906020012014156113885760019850505050505050505061153f565b60009850505050505050505061153f565b60008284815181106113bb57634e487b7160e01b600052603260045260246000fd5b016020015160f81c905060108111156113e0576000995050505050505050505061153f565b611413868260ff168151811061140657634e487b7160e01b600052603260045260246000fd5b6020026020010151611c5c565b9450611420600185612c43565b935050611524565b84516002141561138857600061146261145b87600081518110610d7f57634e487b7160e01b600052603260045260246000fd5b8486611c8a565b83519091506114718286612c43565b14156114d4578d805190602001206114a387600181518110610d7f57634e487b7160e01b600052603260045260246000fd5b8051906020012014156114c2576001995050505050505050505061153f565b6000995050505050505050505061153f565b806114eb576000995050505050505050505061153f565b6114f58185612c43565b935061151b8660018151811061140657634e487b7160e01b600052603260045260246000fd5b94506115249050565b8061152e81612e66565b915050611292565b50505050505050505b949350505050565b6000610d8c8260000151600381518110610dbc57634e487b7160e01b600052603260045260246000fd5b6000610d8c8260000151600481518110610dbc57634e487b7160e01b600052603260045260246000fd5b6000610d8c8260000151600081518110610dbc57634e487b7160e01b600052603260045260246000fd5b6060610d8c8260000151600181518110610d7f57634e487b7160e01b600052603260045260246000fd5b6001546040517f41539d4a00000000000000000000000000000000000000000000000000000000815260009182918291829173ffffffffffffffffffffffffffffffffffffffff909116906341539d4a9061164e9089906004016127c1565b60a06040518083038186803b15801561166657600080fd5b505afa15801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e919061245a565b50935050925092506116f4828b6116b59190612e00565b84878d8d8d8d6040516020016116ce9493929190612657565b60405160208183030381529060405280519060200120611ded909392919063ffffffff16565b6117105760405162461bcd60e51b81526004016102fc90612a35565b9998505050505050505050565b611725612223565b6040518060200160405280611758846020015160018151811061115957634e487b7160e01b600052603260045260246000fd5b905292915050565b611768612277565b825180518390811061178a57634e487b7160e01b600052603260045260246000fd5b6020026020010151905092915050565b8051600090158015906117af57508151602110155b6117b857600080fd5b60006117c78360200151611f01565b905060008184600001516117db9190612e00565b90506000808386602001516117f09190612c43565b905080519150602083101561180c57826020036101000a820491505b50949350505050565b6060610d8c8260200151600281518110610d7f57634e487b7160e01b600052603260045260246000fd5b610d208363a9059cbb60e01b848460405160240161085b929190612790565b606061153f8484600085611f86565b611875612277565b506040805180820190915281518152602082810190820152919050565b606061189d82611b00565b6118a657600080fd5b60006118b183612053565b905060008167ffffffffffffffff8111156118dc57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561191557816020015b611902612277565b8152602001906001900390816118fa5790505b50905060006119278560200151611f01565b85602001516119369190612c43565b90506000805b848110156119ad5761194d836120d6565b915060405180604001604052808381526020018481525084828151811061198457634e487b7160e01b600052603260045260246000fd5b60209081029190910101526119998284612c43565b9250806119a581612e66565b91505061193c565b509195945050505050565b80516060906119c657600080fd5b60006119d58360200151611f01565b905060008184600001516119e99190612e00565b905060008167ffffffffffffffff811115611a1457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611a3e576020820181803683370190505b509050600081602001905061180c848760200151611a5c9190612c43565b8285612198565b6000611a70600284612e9f565b15611ab857601082611a83600286612c5b565b81518110611aa157634e487b7160e01b600052603260045260246000fd5b0160200151611ab3919060f81c612eb3565b611af6565b601082611ac6600286612c5b565b81518110611ae457634e487b7160e01b600052603260045260246000fd5b0160200151611af6919060f81c612c6f565b60f81b9392505050565b8051600090611b1157506000610b7c565b6020820151805160001a9060c0821015611b3057600092505050610b7c565b5060019392505050565b80611b4457610d20565b60208110611b7c5782518252611b5b602084612c43565b9250611b68602083612c43565b9150611b75602082612e00565b9050611b44565b60006001611b8b836020612e00565b611b9790610100612cd7565b611ba19190612e00565b84518451821691191617835250505050565b8051600090601514611bc457600080fd5b610d8c8261179a565b60606000826000015167ffffffffffffffff811115611bfc57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611c26576020820181803683370190505b509050805160001415611c3a579050610b7c565b6000816020019050611c558460200151828660000151612198565b5092915050565b8051600090602114611c6d57600080fd5b60008083602001516001611c819190612c43565b51949350505050565b60008080611c9786610dc9565b90506000815167ffffffffffffffff811115611cc357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611ced576020820181803683370190505b509050845b8251611cfe9087612c43565b811015611dbd576000878281518110611d2757634e487b7160e01b600052603260045260246000fd5b01602001517fff000000000000000000000000000000000000000000000000000000000000001690508083611d5c8985612e00565b81518110611d7a57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350508080611db590612e66565b915050611cf2565b50808051906020012082805190602001201415611ddd5781519250611de2565b600092505b509095945050505050565b600060208251611dfd9190612e9f565b15611e1a5760405162461bcd60e51b81526004016102fc906129c7565b600060208351611e2a9190612c5b565b9050611e37816002612cd7565b8510611e555760405162461bcd60e51b81526004016102fc906129fe565b60008660205b85518111611ef357858101519250611e74600289612e9f565b611ea8578183604051602001611e8b929190612600565b604051602081830303815290604052805190602001209150611ed4565b8282604051602001611ebb929190612600565b6040516020818303038152906040528051906020012091505b611edf600289612c5b565b9750611eec602082612c43565b9050611e5b565b509094149695505050505050565b8051600090811a6080811015611f1b576000915050610b7c565b60b8811080611f36575060c08110801590611f36575060f881105b15611f45576001915050610b7c565b60c0811015611f7a57611f5a600160b8612e17565b611f679060ff1682612e00565b611f72906001612c43565b915050610b7c565b611f5a600160f8612e17565b606082471015611fa85760405162461bcd60e51b81526004016102fc9061290d565b611fb1856121e4565b611fcd5760405162461bcd60e51b81526004016102fc90612aa3565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ff6919061260e565b60006040518083038185875af1925050503d8060008114612033576040519150601f19603f3d011682016040523d82523d6000602084013e612038565b606091505b50915091506120488282866121ea565b979650505050505050565b805160009061206457506000610b7c565b6000806120748460200151611f01565b84602001516120839190612c43565b905060008460000151856020015161209b9190612c43565b90505b808210156120cd576120af826120d6565b6120b99083612c43565b9150826120c581612e66565b93505061209e565b50909392505050565b80516000908190811a60808110156120f15760019150611c55565b60b881101561211757612105608082612e00565b612110906001612c43565b9150611c55565b60c08110156121445760b78103600185019450806020036101000a85510460018201810193505050611c55565b60f88110156121585761210560c082612e00565b60019390930151602084900360f7016101000a90049092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0a0192915050565b806121a257610d20565b602081106121da57825182526121b9602084612c43565b92506121c6602083612c43565b91506121d3602082612e00565b90506121a2565b80611b7c57610d20565b3b151590565b606083156121f9575081610257565b8251156122095782518084602001fd5b8160405162461bcd60e51b81526004016102fc91906127e3565b6040518060200160405280606081525090565b60405180606001604052806060815260200160608152602001600081525090565b604051806040016040528061226a612277565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60006122a461229f84612c1b565b612bf1565b90508281528383830111156122b857600080fd5b610257836020830184612e3a565b600082601f8301126122d6578081fd5b81356122e461229f82612c1b565b8181528460208386010111156122f8578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215612323578081fd5b813561025781612f17565b60008060008060808587031215612343578283fd5b845161234e81612f17565b602086015190945061235f81612f17565b604086015190935061237081612f17565b6060959095015193969295505050565b60008060008060808587031215612395578384fd5b84356123a081612f17565b935060208501356123b081612f17565b925060408501359150606085013567ffffffffffffffff8111156123d2578182fd5b6123de878288016122c6565b91505092959194509250565b6000602082840312156123fb578081fd5b81518015158114610257578182fd5b60006020828403121561241b578081fd5b5035919050565b600080600060608486031215612436578283fd5b8335925060208401359150604084013561244f81612f17565b809150509250925092565b600080600080600060a08688031215612471578081fd5b85519450602086015193506040860151925060608601519150608086015161249881612f17565b809150509295509295909350565b6000602082840312156124b7578081fd5b813567ffffffffffffffff8111156124cd578182fd5b61153f848285016122c6565b6000602082840312156124ea578081fd5b815167ffffffffffffffff811115612500578182fd5b8201601f81018413612510578182fd5b61153f84825160208401612291565b600060208284031215612530578081fd5b815160ff81168114610257578182fd5b60008151808452612558816020860160208601612e3a565b601f01601f19169290920160200192915050565b60609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b7fff0000000000000000000000000000000000000000000000000000000000000094909416845260609290921b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830152603582015260550190565b918252602082015260400190565b60008251612620818460208701612e3a565b9190910192915050565b60008482528351612642816020850160208801612e3a565b60209201918201929092526040019392505050565b93845260208401929092526040830152606082015260800190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352808716602084015280861660408401525083606083015260a0608083015261204860a0830184612540565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b600073ffffffffffffffffffffffffffffffffffffffff841682526040602083015261153f6040830184612540565b600073ffffffffffffffffffffffffffffffffffffffff86168252608060208301526127696080830186612540565b828103604084015261277b8186612540565b91505060ff8316606083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b901515815260200190565b90815260200190565b60008382526040602083015261153f6040830184612540565b6000602082526102576020830184612540565b6020808252602a908201527f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160408201527f4c52454144595f53455400000000000000000000000000000000000000000000606082015260800190565b60208082526023908201527f4678526f6f7454756e6e656c3a20494e56414c49445f524543454950545f505260408201527f4f4f460000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f4678526f6f7454756e6e656c3a20455849545f414c52454144595f50524f434560408201527f5353454400000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f46784552433230526f6f7454756e6e656c3a20414c52454144595f4d4150504560408201527f4400000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526014908201527f496e76616c69642070726f6f66206c656e677468000000000000000000000000604082015260600190565b60208082526015908201527f4c65616620696e64657820697320746f6f206269670000000000000000000000604082015260600190565b6020808252601c908201527f4678526f6f7454756e6e656c3a20494e56414c49445f48454144455200000000604082015260600190565b6020808252601f908201527f4678526f6f7454756e6e656c3a20494e56414c49445f5349474e415455524500604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f46784552433230526f6f7454756e6e656c3a20494e56414c49445f4d4150504960408201527f4e475f4f4e5f4558495400000000000000000000000000000000000000000000606082015260800190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f4678526f6f7454756e6e656c3a20494e56414c49445f46585f4348494c445f5460408201527f554e4e454c000000000000000000000000000000000000000000000000000000606082015260800190565b60405181810167ffffffffffffffff81118282101715612c1357612c13612f01565b604052919050565b600067ffffffffffffffff821115612c3557612c35612f01565b50601f01601f191660200190565b60008219821115612c5657612c56612ed5565b500190565b600082612c6a57612c6a612eeb565b500490565b600060ff831680612c8257612c82612eeb565b8060ff84160491505092915050565b80825b6001808611612ca35750612cce565b818704821115612cb557612cb5612ed5565b80861615612cc257918102915b9490941c938002612c94565b94509492505050565b60006102577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484600082612d0e57506001610257565b81612d1b57506000610257565b8160018114612d315760028114612d3b57612d68565b6001915050610257565b60ff841115612d4c57612d4c612ed5565b6001841b915084821115612d6257612d62612ed5565b50610257565b5060208310610133831016604e8410600b8410161715612d9b575081810a83811115612d9657612d96612ed5565b610257565b612da88484846001612c91565b808604821115612dba57612dba612ed5565b02949350505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612dfb57612dfb612ed5565b500290565b600082821015612e1257612e12612ed5565b500390565b600060ff821660ff841680821015612e3157612e31612ed5565b90039392505050565b60005b83811015612e55578181015183820152602001612e3d565b838111156108bf5750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612e9857612e98612ed5565b5060010190565b600082612eae57612eae612eeb565b500690565b600060ff831680612ec657612ec6612eeb565b8060ff84160691505092915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114612f3957600080fd5b5056fea2646970667358221220b10cfff766ca2472c4fa237c620d936356c81de064ca161dd2228ad5ac7af95b64736f6c63430008000033";

export class FxERC20RootTunnel__factory extends ContractFactory {
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
    _checkpointManager: string,
    _fxRoot: string,
    _fxERC20Token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxERC20RootTunnel> {
    return super.deploy(
      _checkpointManager,
      _fxRoot,
      _fxERC20Token,
      overrides || {}
    ) as Promise<FxERC20RootTunnel>;
  }
  getDeployTransaction(
    _checkpointManager: string,
    _fxRoot: string,
    _fxERC20Token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _checkpointManager,
      _fxRoot,
      _fxERC20Token,
      overrides || {}
    );
  }
  attach(address: string): FxERC20RootTunnel {
    return super.attach(address) as FxERC20RootTunnel;
  }
  connect(signer: Signer): FxERC20RootTunnel__factory {
    return super.connect(signer) as FxERC20RootTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxERC20RootTunnelInterface {
    return new utils.Interface(_abi) as FxERC20RootTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxERC20RootTunnel {
    return new Contract(address, _abi, signerOrProvider) as FxERC20RootTunnel;
  }
}
