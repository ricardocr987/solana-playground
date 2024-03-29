/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  InitMarketplaceParams,
  initMarketplaceParamsBeet,
} from '../types/InitMarketplaceParams'

/**
 * @category Instructions
 * @category InitMarketplace
 * @category generated
 */
export type InitMarketplaceInstructionArgs = {
  params: InitMarketplaceParams
}
/**
 * @category Instructions
 * @category InitMarketplace
 * @category generated
 */
export const initMarketplaceStruct = new beet.BeetArgsStruct<
  InitMarketplaceInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['params', initMarketplaceParamsBeet],
  ],
  'InitMarketplaceInstructionArgs'
)
/**
 * Accounts required by the _initMarketplace_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] marketplace
 * @property [_writable_] accessMint
 * @property [] rewardMint
 * @property [] discountMint
 * @property [_writable_] bountyVault
 * @property [] tokenProgram2022
 * @category Instructions
 * @category InitMarketplace
 * @category generated
 */
export type InitMarketplaceInstructionAccounts = {
  signer: web3.PublicKey
  marketplace: web3.PublicKey
  accessMint: web3.PublicKey
  rewardMint: web3.PublicKey
  discountMint: web3.PublicKey
  bountyVault: web3.PublicKey
  rent?: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram2022: web3.PublicKey
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
  programId = new web3.PublicKey('brick5uEiJqSkfuAvMtKmq7kiuEVmbjVMiigyV51GRF')
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
      pubkey: accounts.rewardMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.discountMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.bountyVault,
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
      pubkey: accounts.tokenProgram2022,
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
