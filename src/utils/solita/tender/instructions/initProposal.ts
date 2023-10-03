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
  InitProposalParams,
  initProposalParamsBeet,
} from '../types/InitProposalParams.js'

/**
 * @category Instructions
 * @category InitProposal
 * @category generated
 */
export type InitProposalInstructionArgs = {
  params: InitProposalParams
}
/**
 * @category Instructions
 * @category InitProposal
 * @category generated
 */
export const initProposalStruct = new beet.FixableBeetArgsStruct<
  InitProposalInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['params', initProposalParamsBeet],
  ],
  'InitProposalInstructionArgs',
)
/**
 * Accounts required by the _initProposal_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] network
 * @property [_writable_] proposal
 * @property [_writable_] vault
 * @property [] paymentMint
 * @property [_writable_] proposalCollection
 * @property [_writable_] proposalCollectionMetadata
 * @property [_writable_] proposalCollectionMasterEdition
 * @property [_writable_] proposalMint
 * @property [_writable_] proposalMetadata
 * @property [_writable_] proposalMasterEdition
 * @property [_writable_] userVault
 * @property [] associatedTokenProgram
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category InitProposal
 * @category generated
 */
export type InitProposalInstructionAccounts = {
  signer: web3.PublicKey
  network: web3.PublicKey
  proposal: web3.PublicKey
  vault: web3.PublicKey
  paymentMint: web3.PublicKey
  proposalCollection: web3.PublicKey
  proposalCollectionMetadata: web3.PublicKey
  proposalCollectionMasterEdition: web3.PublicKey
  proposalMint: web3.PublicKey
  proposalMetadata: web3.PublicKey
  proposalMasterEdition: web3.PublicKey
  userVault: web3.PublicKey
  rent?: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initProposalInstructionDiscriminator = [
  113, 76, 165, 176, 110, 138, 198, 178,
]

/**
 * Creates a _InitProposal_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitProposal
 * @category generated
 */
export function createInitProposalInstruction(
  accounts: InitProposalInstructionAccounts,
  args: InitProposalInstructionArgs,
  programId = new web3.PublicKey(
    'BHQvQgoMZhCKuVeoVhsy8agZQYwMuvzXwrEYoEHHDgGJ',
  ),
) {
  const [data] = initProposalStruct.serialize({
    instructionDiscriminator: initProposalInstructionDiscriminator,
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
      pubkey: accounts.proposal,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.paymentMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalCollection,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalCollectionMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalCollectionMasterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalMasterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userVault,
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
