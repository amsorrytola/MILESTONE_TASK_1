import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Block {
  'miner' : string,
  'totalDifficulty' : [] | [bigint],
  'receiptsRoot' : string,
  'stateRoot' : string,
  'hash' : string,
  'difficulty' : [] | [bigint],
  'size' : bigint,
  'uncles' : Array<string>,
  'baseFeePerGas' : [] | [bigint],
  'extraData' : string,
  'transactionsRoot' : [] | [string],
  'sha3Uncles' : string,
  'nonce' : bigint,
  'number' : bigint,
  'timestamp' : bigint,
  'transactions' : Array<string>,
  'gasLimit' : bigint,
  'logsBloom' : string,
  'parentHash' : string,
  'gasUsed' : bigint,
  'mixHash' : string,
}
export interface _SERVICE {
  'get_ecdsa_public_key' : ActorMethod<[], string>,
  'get_evm_block' : ActorMethod<[bigint], Block>,
  'get_schnorr_public_key' : ActorMethod<[], string>,
  'sign_message_with_ecdsa' : ActorMethod<[string], string>,
  'sign_message_with_schnorr' : ActorMethod<[string], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
