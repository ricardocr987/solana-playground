/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Payment}
 * @category Accounts
 * @category generated
 */
export type PaymentArgs = {
  units: number
  bump: number
}

export const paymentDiscriminator = [227, 231, 51, 26, 244, 88, 4, 148]
/**
 * Holds the data for the {@link Payment} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Payment implements PaymentArgs {
  private constructor(readonly units: number, readonly bump: number) {}

  /**
   * Creates a {@link Payment} instance from the provided args.
   */
  static fromArgs(args: PaymentArgs) {
    return new Payment(args.units, args.bump)
  }

  /**
   * Deserializes the {@link Payment} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [Payment, number] {
    return Payment.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Payment} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<Payment> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Payment account at ${address}`)
    }
    return Payment.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'brick5uEiJqSkfuAvMtKmq7kiuEVmbjVMiigyV51GRF',
    ),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, paymentBeet)
  }

  /**
   * Deserializes the {@link Payment} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Payment, number] {
    return paymentBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Payment} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return paymentBeet.serialize({
      accountDiscriminator: paymentDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Payment}
   */
  static get byteSize() {
    return paymentBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Payment} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Payment.byteSize,
      commitment,
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Payment} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Payment.byteSize
  }

  /**
   * Returns a readable version of {@link Payment} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      units: this.units,
      bump: this.bump,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const paymentBeet = new beet.BeetStruct<
  Payment,
  PaymentArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['units', beet.u32],
    ['bump', beet.u8],
  ],
  Payment.fromArgs,
  'Payment',
)