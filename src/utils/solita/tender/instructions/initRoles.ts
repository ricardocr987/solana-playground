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
  InitRolesParams,
  initRolesParamsBeet,
} from '../types/InitRolesParams.js'

/**
 * @category Instructions
 * @category InitRoles
 * @category generated
 */
export type InitRolesInstructionArgs = {
  params: InitRolesParams
}
/**
 * @category Instructions
 * @category InitRoles
 * @category generated
 */
export const initRolesStruct = new beet.FixableBeetArgsStruct<
  InitRolesInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['params', initRolesParamsBeet],
  ],
  'InitRolesInstructionArgs',
)
/**
 * Accounts required by the _initRoles_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] network
 * @property [_writable_] councilCollection
 * @property [_writable_] councilCollectionVault
 * @property [_writable_] councilCollectionMetadata
 * @property [_writable_] councilCollectionMasterEdition
 * @property [_writable_] serviceCollection
 * @property [_writable_] serviceCollectionVault
 * @property [_writable_] serviceCollectionMetadata
 * @property [_writable_] serviceCollectionMasterEdition
 * @property [] associatedTokenProgram
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category InitRoles
 * @category generated
 */
export type InitRolesInstructionAccounts = {
  signer: web3.PublicKey
  network: web3.PublicKey
  councilCollection: web3.PublicKey
  councilCollectionVault: web3.PublicKey
  councilCollectionMetadata: web3.PublicKey
  councilCollectionMasterEdition: web3.PublicKey
  serviceCollection: web3.PublicKey
  serviceCollectionVault: web3.PublicKey
  serviceCollectionMetadata: web3.PublicKey
  serviceCollectionMasterEdition: web3.PublicKey
  rent?: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initRolesInstructionDiscriminator = [
  21, 226, 142, 151, 173, 111, 10, 64,
]

/**
 * Creates a _InitRoles_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitRoles
 * @category generated
 */
export function createInitRolesInstruction(
  accounts: InitRolesInstructionAccounts,
  args: InitRolesInstructionArgs,
  programId = new web3.PublicKey(
    'BHQvQgoMZhCKuVeoVhsy8agZQYwMuvzXwrEYoEHHDgGJ',
  ),
) {
  const [data] = initRolesStruct.serialize({
    instructionDiscriminator: initRolesInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.network,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.councilCollection,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.councilCollectionVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.councilCollectionMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.councilCollectionMasterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.serviceCollection,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.serviceCollectionVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.serviceCollectionMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.serviceCollectionMasterEdition,
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
    {
      pubkey: accounts.tokenMetadataProgram,
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
