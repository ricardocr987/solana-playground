/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { FeesConfig, feesConfigBeet } from '../types/FeesConfig'
import { RewardsConfig, rewardsConfigBeet } from '../types/RewardsConfig'

/**
 * @category Instructions
 * @category InitMarketplace
 * @category generated
 */
export type InitMarketplaceInstructionArgs = {
  accessMintBump: number
  feesConfig: beet.COption<FeesConfig>
  rewardsConfig: beet.COption<RewardsConfig>
}
/**
 * @category Instructions
 * @category InitMarketplace
 * @category generated
 */
export const initMarketplaceStruct = new beet.FixableBeetArgsStruct<
  InitMarketplaceInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['accessMintBump', beet.u8],
    ['feesConfig', beet.coption(feesConfigBeet)],
    ['rewardsConfig', beet.coption(rewardsConfigBeet)],
  ],
  'InitMarketplaceInstructionArgs'
)
/**
 * Accounts required by the _initMarketplace_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] marketplace
 * @property [_writable_] accessMint
 * @category Instructions
 * @category InitMarketplace
 * @category generated
 */
export type InitMarketplaceInstructionAccounts = {
  signer: web3.PublicKey
  marketplace: web3.PublicKey
  accessMint: web3.PublicKey
  rent?: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initMarketplaceInstructionDiscriminator = [
  242, 23, 212, 134, 238, 95, 82, 161,
]

/**
 * Creates a _InitMarketplace_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitMarketplace
 * @category generated
 */
export function createInitMarketplaceInstruction(
  accounts: InitMarketplaceInstructionAccounts,
  args: InitMarketplaceInstructionArgs,
  programId = new web3.PublicKey('7KES27SK4AdZCCVj7nWgf5rUBFgyDMNSHEwgu7tvbnZW')
) {
  const [data] = initMarketplaceStruct.serialize({
    instructionDiscriminator: initMarketplaceInstructionDiscriminator,
    ...args,
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
      pubkey: accounts.accessMint,
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
