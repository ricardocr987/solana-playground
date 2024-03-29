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
  RegisterBuyCnftParams,
  registerBuyCnftParamsBeet,
} from '../types/RegisterBuyCnftParams'

/**
 * @category Instructions
 * @category RegisterBuyCnft
 * @category generated
 */
export type RegisterBuyCnftInstructionArgs = {
  params: RegisterBuyCnftParams
}
/**
 * @category Instructions
 * @category RegisterBuyCnft
 * @category generated
 */
export const registerBuyCnftStruct = new beet.FixableBeetArgsStruct<
  RegisterBuyCnftInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['params', registerBuyCnftParamsBeet],
  ],
  'RegisterBuyCnftInstructionArgs'
)
/**
 * Accounts required by the _registerBuyCnft_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] seller (optional)
 * @property [_writable_] marketplaceAuth (optional)
 * @property [_writable_] marketplace
 * @property [_writable_] product
 * @property [] paymentMint
 * @property [_writable_] productMint
 * @property [_writable_] buyerTransferVault (optional)
 * @property [_writable_] sellerTransferVault (optional)
 * @property [_writable_] marketplaceTransferVault (optional)
 * @property [_writable_] bountyVault (optional)
 * @property [_writable_] sellerReward (optional)
 * @property [_writable_] sellerRewardVault (optional)
 * @property [_writable_] buyerReward (optional)
 * @property [_writable_] buyerRewardVault (optional)
 * @property [_writable_] metadata
 * @property [_writable_] masterEdition
 * @property [_writable_] treeAuthority
 * @property [] bubblegumSigner
 * @property [_writable_] merkleTree
 * @property [] logWrapper
 * @property [] bubblegumProgram
 * @property [] compressionProgram
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category RegisterBuyCnft
 * @category generated
 */
export type RegisterBuyCnftInstructionAccounts = {
  signer: web3.PublicKey
  seller?: web3.PublicKey
  marketplaceAuth?: web3.PublicKey
  marketplace: web3.PublicKey
  product: web3.PublicKey
  paymentMint: web3.PublicKey
  productMint: web3.PublicKey
  buyerTransferVault?: web3.PublicKey
  sellerTransferVault?: web3.PublicKey
  marketplaceTransferVault?: web3.PublicKey
  bountyVault?: web3.PublicKey
  sellerReward?: web3.PublicKey
  sellerRewardVault?: web3.PublicKey
  buyerReward?: web3.PublicKey
  buyerRewardVault?: web3.PublicKey
  metadata: web3.PublicKey
  masterEdition: web3.PublicKey
  treeAuthority: web3.PublicKey
  bubblegumSigner: web3.PublicKey
  merkleTree: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  rent?: web3.PublicKey
  logWrapper: web3.PublicKey
  bubblegumProgram: web3.PublicKey
  compressionProgram: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const registerBuyCnftInstructionDiscriminator = [
  179, 223, 15, 216, 96, 162, 219, 139,
]

/**
 * Creates a _RegisterBuyCnft_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category RegisterBuyCnft
 * @category generated
 */
export function createRegisterBuyCnftInstruction(
  accounts: RegisterBuyCnftInstructionAccounts,
  args: RegisterBuyCnftInstructionArgs,
  programId = new web3.PublicKey('brick5uEiJqSkfuAvMtKmq7kiuEVmbjVMiigyV51GRF')
) {
  const [data] = registerBuyCnftStruct.serialize({
    instructionDiscriminator: registerBuyCnftInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.seller ?? programId,
      isWritable: accounts.seller != null,
      isSigner: false,
    },
    {
      pubkey: accounts.marketplaceAuth ?? programId,
      isWritable: accounts.marketplaceAuth != null,
      isSigner: false,
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
      pubkey: accounts.paymentMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.productMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.buyerTransferVault ?? programId,
      isWritable: accounts.buyerTransferVault != null,
      isSigner: false,
    },
    {
      pubkey: accounts.sellerTransferVault ?? programId,
      isWritable: accounts.sellerTransferVault != null,
      isSigner: false,
    },
    {
      pubkey: accounts.marketplaceTransferVault ?? programId,
      isWritable: accounts.marketplaceTransferVault != null,
      isSigner: false,
    },
    {
      pubkey: accounts.bountyVault ?? programId,
      isWritable: accounts.bountyVault != null,
      isSigner: false,
    },
    {
      pubkey: accounts.sellerReward ?? programId,
      isWritable: accounts.sellerReward != null,
      isSigner: false,
    },
    {
      pubkey: accounts.sellerRewardVault ?? programId,
      isWritable: accounts.sellerRewardVault != null,
      isSigner: false,
    },
    {
      pubkey: accounts.buyerReward ?? programId,
      isWritable: accounts.buyerReward != null,
      isSigner: false,
    },
    {
      pubkey: accounts.buyerRewardVault ?? programId,
      isWritable: accounts.buyerRewardVault != null,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treeAuthority,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.bubblegumSigner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.merkleTree,
      isWritable: true,
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
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.logWrapper,
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
