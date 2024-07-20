/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Escrow}
 * @category Accounts
 * @category generated
 */
export type EscrowArgs = {
  payer: web3.PublicKey
  receiver: web3.PublicKey
  product: web3.PublicKey
  productAmount: beet.bignum
  expireTime: beet.bignum
  vaultBump: number
  bump: number
}

export const escrowDiscriminator = [31, 213, 123, 187, 186, 22, 218, 155]
/**
 * Holds the data for the {@link Escrow} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Escrow implements EscrowArgs {
  private constructor(
    readonly payer: web3.PublicKey,
    readonly receiver: web3.PublicKey,
    readonly product: web3.PublicKey,
    readonly productAmount: beet.bignum,
    readonly expireTime: beet.bignum,
    readonly vaultBump: number,
    readonly bump: number
  ) {}

  /**
   * Creates a {@link Escrow} instance from the provided args.
   */
  static fromArgs(args: EscrowArgs) {
    return new Escrow(
      args.payer,
      args.receiver,
      args.product,
      args.productAmount,
      args.expireTime,
      args.vaultBump,
      args.bump
    )
  }

  /**
   * Deserializes the {@link Escrow} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Escrow, number] {
    return Escrow.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Escrow} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Escrow> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Escrow account at ${address}`)
    }
    return Escrow.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '6NSfzFwHeuDCLzFwAo3yQ2KLLb9bThvkEVyeWChoAqBa'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, escrowBeet)
  }

  /**
   * Deserializes the {@link Escrow} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Escrow, number] {
    return escrowBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Escrow} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return escrowBeet.serialize({
      accountDiscriminator: escrowDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Escrow}
   */
  static get byteSize() {
    return escrowBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Escrow} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Escrow.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Escrow} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Escrow.byteSize
  }

  /**
   * Returns a readable version of {@link Escrow} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      payer: this.payer.toBase58(),
      receiver: this.receiver.toBase58(),
      product: this.product.toBase58(),
      productAmount: (() => {
        const x = <{ toNumber: () => number }>this.productAmount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      expireTime: (() => {
        const x = <{ toNumber: () => number }>this.expireTime
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      vaultBump: this.vaultBump,
      bump: this.bump,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const escrowBeet = new beet.BeetStruct<
  Escrow,
  EscrowArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['payer', beetSolana.publicKey],
    ['receiver', beetSolana.publicKey],
    ['product', beetSolana.publicKey],
    ['productAmount', beet.u64],
    ['expireTime', beet.i64],
    ['vaultBump', beet.u8],
    ['bump', beet.u8],
  ],
  Escrow.fromArgs,
  'Escrow'
)