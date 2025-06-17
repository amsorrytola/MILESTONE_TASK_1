export const idlFactory = ({ IDL }) => {
  const Block = IDL.Record({
    'miner' : IDL.Text,
    'totalDifficulty' : IDL.Opt(IDL.Nat),
    'receiptsRoot' : IDL.Text,
    'stateRoot' : IDL.Text,
    'hash' : IDL.Text,
    'difficulty' : IDL.Opt(IDL.Nat),
    'size' : IDL.Nat,
    'uncles' : IDL.Vec(IDL.Text),
    'baseFeePerGas' : IDL.Opt(IDL.Nat),
    'extraData' : IDL.Text,
    'transactionsRoot' : IDL.Opt(IDL.Text),
    'sha3Uncles' : IDL.Text,
    'nonce' : IDL.Nat,
    'number' : IDL.Nat,
    'timestamp' : IDL.Nat,
    'transactions' : IDL.Vec(IDL.Text),
    'gasLimit' : IDL.Nat,
    'logsBloom' : IDL.Text,
    'parentHash' : IDL.Text,
    'gasUsed' : IDL.Nat,
    'mixHash' : IDL.Text,
  });
  return IDL.Service({
    'get_ecdsa_public_key' : IDL.Func([], [IDL.Text], []),
    'get_evm_block' : IDL.Func([IDL.Nat], [Block], []),
    'get_schnorr_public_key' : IDL.Func([], [IDL.Text], []),
    'sign_message_with_ecdsa' : IDL.Func([IDL.Text], [IDL.Text], []),
    'sign_message_with_schnorr' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
