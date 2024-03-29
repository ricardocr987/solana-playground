/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { PaymentFeePayer, paymentFeePayerBeet } from './PaymentFeePayer'
export type EditMarketplaceParams = {
  fee: number
  feeReduction: number
  sellerReward: number
  buyerReward: number
  transferable: boolean
  permissionless: boolean
  rewardsEnabled: boolean
  feePayer: PaymentFeePayer
}

/**
 * @category userTypes
 * @category generated
 */
export const editMarketplaceParamsBeet =
  new beet.BeetArgsStruct<EditMarketplaceParams>(
    [
      ['fee', beet.u16],
      ['feeReduction', beet.u16],
      ['sellerReward', beet.u16],
      ['buyerReward', beet.u16],
      ['transferable', beet.bool],
      ['permissionless', beet.bool],
      ['rewardsEnabled', beet.bool],
      ['feePayer', paymentFeePayerBeet],
    ],
    'EditMarketplaceParams'
  )
