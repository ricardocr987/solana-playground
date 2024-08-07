/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category AirdropAccess
 * @category generated
 */
export const airdropAccessStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'AirdropAccessInstructionArgs'
)
/**
 * Accounts required by the _airdropAccess_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] receiver
 * @property [_writable_] marketplace
 * @property [_writable_] accessMint
 * @property [_writable_] accessVault
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category AirdropAccess
 * @category generated
 */
export type AirdropAccessInstructionAccounts = {
  signer: web3.PublicKey
  receiver: web3.PublicKey
  marketplace: web3.PublicKey
  accessMint: web3.PublicKey
  accessVault: web3.PublicKey
  rent?: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const airdropAccessInstructionDiscriminator = [
  161, 35, 117, 107, 167, 139, 80, 126,
]

/**
 * Creates a _AirdropAccess_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category AirdropAccess
 * @category generated
 */
export function createAirdropAccessInstruction(
  accounts: AirdropAccessInstructionAccounts,
  programId = new web3.PublicKey('7KES27SK4AdZCCVj7nWgf5rUBFgyDMNSHEwgu7tvbnZW')
) {
  const [data] = airdropAccessStruct.serialize({
    instructionDiscriminator: airdropAccessInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.receiver,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.marketplace,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.accessMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.accessVault,
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
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.associatedTokenProgram,
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
