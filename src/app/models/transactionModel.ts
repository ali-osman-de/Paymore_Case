import { PaymentTypes } from "../enums/globalEnums"

export interface Transaction {
  id: string
  timestamp: string
  paymentType: PaymentTypes
  status: string
  financials: Financials | null
  merchant: Merchant | null
  context: Context | null
  metadata: Metadata | null
}

export interface Financials {
  baseAmount: number | null
  currency: string | null
  commission: Commission | null
  taxDetails: TaxDetail[]
}

export interface Commission {
  rate: number | null
  calculatedAmount: number | null
}

export interface TaxDetail {
  type: string | null
  rate: number | null
  amount: number | null
}

export interface Merchant {
  id: string | null
  category: string | null
  branch: Branch | null
}

export interface Branch {
  branchCode: string | null
  city: string | null
}

export interface Context {
  deviceOS: string | null
  ipAddress: string | null
  location: Location | null
}

export interface Location {
  countryCode: string | null
  region: string | null
}

export interface Metadata {
  terminalId: string | null
  is3DSecure: boolean | null
  campaignCode: string | null
  refundInfo: string | null
}
