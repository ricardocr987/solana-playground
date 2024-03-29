/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  UpdateProductTreeParams,
  updateProductTreeParamsBeet,
} from '../types/UpdateProductTreeParams'

/**
 * @category Instructions
 * @category UpdateTree
 * @category generated
 */
export type UpdateTreeInstructionArgs = {
  params: UpdateProductTreeParams
}
/**
 * @category Instructions
 * @category UpdateTree
 * @category generated
 */
export const updateTreeStruct = new beet.BeetArgsStruct<
  UpdateTreeInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['params', updateProductTreeParamsBeet],
  ],
  'UpdateTreeInstructionArgs'
)
/**
 * Accounts required by the _updateTree_ instruction
 *
 * @property [_writable_, **signer**] payer
 * @property [**signer**] signer
 * @property [_writable_] marketplace
 * @property [_writable_] product
 * @property [_writable_] treeAuthority
 * @property [_writable_] merkleTree
 * @property [] logWrapper
 * @property [] bubblegumProgram
 * @property [] compressionProgram
 * @category Instructions
 * @category UpdateTree
 * @category generated
 */
export type UpdateTreeInstructionAccounts = {
  payer: web3.PublicKey
  signer: web3.PublicKey
  marketplace: web3.PublicKey
  product: web3.PublicKey
  treeAuthority: web3.PublicKey
  merkleTree: web3.PublicKey
  logWrapper: web3.PublicKey
  systemProgram?: web3.PublicKey
  bubblegumProgram: web3.PublicKey
  compressionProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const updateTreeInstructionDiscriminator = [
  19, 121, 110, 180, 72, 164, 59, 219,
]

/**
 * Creates a _UpdateTree_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateTree
 * @category generated
 */
export function createUpdateTreeInstruction(
  accounts: UpdateTreeInstructionAccounts,
  args: UpdateTreeInstructionArgs,
  programId = new web3.PublicKey('brick5uEiJqSkfuAvMtKmq7kiuEVmbjVMiigyV51GRF')
) {
  const [data] = updateTreeStruct.serialize({
    instructionDiscriminator: updateTreeInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.signer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.marketplace,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.product,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treeAuthority,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.merkleTree,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.logWrapper,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.bubblegumProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.compressionProgram,
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
