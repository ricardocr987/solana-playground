/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import {
  MarketplaceBumps,
  marketplaceBumpsBeet,
} from '../types/MarketplaceBumps'
import { FeesConfig, feesConfigBeet } from '../types/FeesConfig'
import { RewardsConfig, rewardsConfigBeet } from '../types/RewardsConfig'

/**
 * Arguments used to create {@link Marketplace}
 * @category Accounts
 * @category generated
 */
export type MarketplaceArgs = {
  authority: web3.PublicKey
  bumps: MarketplaceBumps
  accessMint: beet.COption<web3.PublicKey>
  feesConfig: beet.COption<FeesConfig>
  rewardsConfig: beet.COption<RewardsConfig>
}

export const marketplaceDiscriminator = [70, 222, 41, 62, 78, 3, 32, 174]
/**
 * Holds the data for the {@link Marketplace} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Marketplace implements MarketplaceArgs {
  private constructor(
    readonly authority: web3.PublicKey,
    readonly bumps: MarketplaceBumps,
    readonly accessMint: beet.COption<web3.PublicKey>,
    readonly feesConfig: beet.COption<FeesConfig>,
    readonly rewardsConfig: beet.COption<RewardsConfig>
  ) {}

  /**
   * Creates a {@link Marketplace} instance from the provided args.
   */
  static fromArgs(args: MarketplaceArgs) {
    return new Marketplace(
      args.authority,
      args.bumps,
      args.accessMint,
      args.feesConfig,
      args.rewardsConfig
    )
  }

  /**
   * Deserializes the {@link Marketplace} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Marketplace, number] {
    return Marketplace.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Marketplace} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Marketplace> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Marketplace account at ${address}`)
    }
    return Marketplace.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '7KES27SK4AdZCCVj7nWgf5rUBFgyDMNSHEwgu7tvbnZW'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, marketplaceBeet)
  }

  /**
   * Deserializes the {@link Marketplace} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Marketplace, number] {
    return marketplaceBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Marketplace} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return marketplaceBeet.serialize({
      accountDiscriminator: marketplaceDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Marketplace} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: MarketplaceArgs) {
    const instance = Marketplace.fromArgs(args)
    return marketplaceBeet.toFixedFromValue({
      accountDiscriminator: marketplaceDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Marketplace} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: MarketplaceArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Marketplace.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link Marketplace} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      authority: this.authority.toBase58(),
      bumps: this.bumps,
      accessMint: this.accessMint,
      feesConfig: this.feesConfig,
      rewardsConfig: this.rewardsConfig,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const marketplaceBeet = new beet.FixableBeetStruct<
  Marketplace,
  MarketplaceArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['authority', beetSolana.publicKey],
    ['bumps', marketplaceBumpsBeet],
    ['accessMint', beet.coption(beetSolana.publicKey)],
    ['feesConfig', beet.coption(feesConfigBeet)],
    ['rewardsConfig', beet.coption(rewardsConfigBeet)],
  ],
  Marketplace.fromArgs,
  'Marketplace'
)
