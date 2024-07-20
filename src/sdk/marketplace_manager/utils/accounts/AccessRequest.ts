/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'

/**
 * Arguments used to create {@link AccessRequest}
 * @category Accounts
 * @category generated
 */
export type AccessRequestArgs = {
  payer: web3.PublicKey
}

export const accessRequestDiscriminator = [165, 109, 87, 16, 193, 252, 188, 174]
/**
 * Holds the data for the {@link AccessRequest} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class AccessRequest implements AccessRequestArgs {
  private constructor(readonly payer: web3.PublicKey) {}

  /**
   * Creates a {@link AccessRequest} instance from the provided args.
   */
  static fromArgs(args: AccessRequestArgs) {
    return new AccessRequest(args.payer)
  }

  /**
   * Deserializes the {@link AccessRequest} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [AccessRequest, number] {
    return AccessRequest.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link AccessRequest} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<AccessRequest> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find AccessRequest account at ${address}`)
    }
    return AccessRequest.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, accessRequestBeet)
  }

  /**
   * Deserializes the {@link AccessRequest} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [AccessRequest, number] {
    return accessRequestBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link AccessRequest} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return accessRequestBeet.serialize({
      accountDiscriminator: accessRequestDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link AccessRequest}
   */
  static get byteSize() {
    return accessRequestBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link AccessRequest} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      AccessRequest.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link AccessRequest} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === AccessRequest.byteSize
  }

  /**
   * Returns a readable version of {@link AccessRequest} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      payer: this.payer.toBase58(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const accessRequestBeet = new beet.BeetStruct<
  AccessRequest,
  AccessRequestArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['payer', beetSolana.publicKey],
  ],
  AccessRequest.fromArgs,
  'AccessRequest'
)