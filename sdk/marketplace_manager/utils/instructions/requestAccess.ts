/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category RequestAccess
 * @category generated
 */
export const requestAccessStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'RequestAccessInstructionArgs'
)
/**
 * Accounts required by the _requestAccess_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] marketplace
 * @property [_writable_] request
 * @category Instructions
 * @category RequestAccess
 * @category generated
 */
export type RequestAccessInstructionAccounts = {
  signer: web3.PublicKey
  marketplace: web3.PublicKey
  request: web3.PublicKey
  rent?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const requestAccessInstructionDiscriminator = [
  102, 165, 38, 148, 139, 189, 106, 47,
]

/**
 * Creates a _RequestAccess_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category RequestAccess
 * @category generated
 */
export function createRequestAccessInstruction(
  accounts: RequestAccessInstructionAccounts,
  programId = new web3.PublicKey('brick5uEiJqSkfuAvMtKmq7kiuEVmbjVMiigyV51GRF')
) {
  const [data] = requestAccessStruct.serialize({
    instructionDiscriminator: requestAccessInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.marketplace,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.request,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
