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
 * @category InitServiceProvider
 * @category generated
 */
export const initServiceProviderStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'InitServiceProviderInstructionArgs',
)
/**
 * Accounts required by the _initServiceProvider_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] receiver
 * @property [_writable_] network
 * @property [_writable_] serviceCollection
 * @property [_writable_] serviceCollectionMetadata
 * @property [_writable_] serviceCollectionMasterEdition
 * @property [_writable_] serviceMetadata
 * @property [_writable_] serviceMasterEdition
 * @property [_writable_, **signer**] receiverVault
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category InitServiceProvider
 * @category generated
 */
export type InitServiceProviderInstructionAccounts = {
  signer: web3.PublicKey
  receiver: web3.PublicKey
  network: web3.PublicKey
  serviceCollection: web3.PublicKey
  serviceCollectionMetadata: web3.PublicKey
  serviceCollectionMasterEdition: web3.PublicKey
  serviceMetadata: web3.PublicKey
  serviceMasterEdition: web3.PublicKey
  receiverVault: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  rent?: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initServiceProviderInstructionDiscriminator = [
  214, 93, 149, 43, 15, 84, 169, 25,
]

/**
 * Creates a _InitServiceProvider_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitServiceProvider
 * @category generated
 */
export function createInitServiceProviderInstruction(
  accounts: InitServiceProviderInstructionAccounts,
  programId = new web3.PublicKey(
    'BHQvQgoMZhCKuVeoVhsy8agZQYwMuvzXwrEYoEHHDgGJ',
  ),
) {
  const [data] = initServiceProviderStruct.serialize({
    instructionDiscriminator: initServiceProviderInstructionDiscriminator,
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
      pubkey: accounts.network,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.serviceCollection,
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
      pubkey: accounts.serviceMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.serviceMasterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.receiverVault,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
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
