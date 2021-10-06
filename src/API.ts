/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSMAccountInput = {
  nationalid: string,
  name: string,
  phonecontact: string,
  awsemail: string,
  balance: number,
  pw: string,
  loanAcceptanceCode: string,
  ttlDpstSM: number,
  TtlWthdrwnSM: number,
  ttlLnInSM: number,
  ttlLnOutSM: number,
  ttlLoanRecovered: number,
  blTimesSM: number,
  blClrdtmsSM: number,
  clrdNnvrBLSM: number,
  actvLnsSM: number,
  ttlActiveLnsInAmtSM: number,
  ttlBLLoansInAmtSM: number,
  ttlClrdLnsInAmtSM: number,
  ttlActiveLnsOutAmtSM: number,
  ttlBLLoansOutAmtSM: number,
  ttlClrdLnsOutAmtSM: number,
  tmsIHvBrwdSM: number,
  tmsIHvLndSM: number,
  ttlDpstChm: number,
  ttlWithdrwlChm: number,
  ttlChmLnIn: number,
  blChmTimes: number,
  blChmClrdtms: number,
  clrdNnvrBLChm: number,
  actvLnsChm: number,
  ttlActiveLnsInAmtChm: number,
  ttlBLLoansInAmChmt: number,
  ttlClrdLnsInAmtChm: number,
  tmsIHvBrwdChm: number,
  tmsIHvLndChm: number,
  ttlLnInCrdSls: number,
  ttlLnOutCrdSls: number,
  blTimesCrdSls: number,
  blClrdtmsCrdSls: number,
  clrdNnvrBLCrdSls: number,
  actvLnsCrdSls: number,
  ttlActiveLnsInAmtCrdSls: number,
  ttlBLLoansInAmtCrdSls: number,
  ttlClrdLnsInAmtCrdSls: number,
  ttlActiveLnsOutAmtCrdSls: number,
  ttlBLLoansOutAmtCrdSls: number,
  ttlClrdLnsOutAmtCrdSls: number,
  tmsIHvBrwdCrdSls: number,
  tmsIHvLndCrdSls: number,
  TotalTymsBL: number,
  acActivenessStatus: Status,
  blStatus: Status,
  loanStatus: Status,
  owner: string,
};

export enum Status {
  LoanActive = "LoanActive",
  AccountActive = "AccountActive",
  AccountInactive = "AccountInactive",
  AccountBlackListed = "AccountBlackListed",
  LoaneeBlackListed = "LoaneeBlackListed",
  LoanCleared = "LoanCleared",
  NoLoan = "NoLoan",
}


export type ModelSMAccountConditionInput = {
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  awsemail?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  loanAcceptanceCode?: ModelStringInput | null,
  ttlDpstSM?: ModelFloatInput | null,
  TtlWthdrwnSM?: ModelFloatInput | null,
  ttlLnInSM?: ModelFloatInput | null,
  ttlLnOutSM?: ModelFloatInput | null,
  ttlLoanRecovered?: ModelFloatInput | null,
  blTimesSM?: ModelFloatInput | null,
  blClrdtmsSM?: ModelFloatInput | null,
  clrdNnvrBLSM?: ModelFloatInput | null,
  actvLnsSM?: ModelFloatInput | null,
  ttlActiveLnsInAmtSM?: ModelFloatInput | null,
  ttlBLLoansInAmtSM?: ModelFloatInput | null,
  ttlClrdLnsInAmtSM?: ModelFloatInput | null,
  ttlActiveLnsOutAmtSM?: ModelFloatInput | null,
  ttlBLLoansOutAmtSM?: ModelFloatInput | null,
  ttlClrdLnsOutAmtSM?: ModelFloatInput | null,
  tmsIHvBrwdSM?: ModelFloatInput | null,
  tmsIHvLndSM?: ModelFloatInput | null,
  ttlDpstChm?: ModelFloatInput | null,
  ttlWithdrwlChm?: ModelFloatInput | null,
  ttlChmLnIn?: ModelFloatInput | null,
  blChmTimes?: ModelFloatInput | null,
  blChmClrdtms?: ModelFloatInput | null,
  clrdNnvrBLChm?: ModelFloatInput | null,
  actvLnsChm?: ModelFloatInput | null,
  ttlActiveLnsInAmtChm?: ModelFloatInput | null,
  ttlBLLoansInAmChmt?: ModelFloatInput | null,
  ttlClrdLnsInAmtChm?: ModelFloatInput | null,
  tmsIHvBrwdChm?: ModelFloatInput | null,
  tmsIHvLndChm?: ModelFloatInput | null,
  ttlLnInCrdSls?: ModelFloatInput | null,
  ttlLnOutCrdSls?: ModelFloatInput | null,
  blTimesCrdSls?: ModelFloatInput | null,
  blClrdtmsCrdSls?: ModelFloatInput | null,
  clrdNnvrBLCrdSls?: ModelFloatInput | null,
  actvLnsCrdSls?: ModelFloatInput | null,
  ttlActiveLnsInAmtCrdSls?: ModelFloatInput | null,
  ttlBLLoansInAmtCrdSls?: ModelFloatInput | null,
  ttlClrdLnsInAmtCrdSls?: ModelFloatInput | null,
  ttlActiveLnsOutAmtCrdSls?: ModelFloatInput | null,
  ttlBLLoansOutAmtCrdSls?: ModelFloatInput | null,
  ttlClrdLnsOutAmtCrdSls?: ModelFloatInput | null,
  tmsIHvBrwdCrdSls?: ModelFloatInput | null,
  tmsIHvLndCrdSls?: ModelFloatInput | null,
  TotalTymsBL?: ModelFloatInput | null,
  acActivenessStatus?: ModelStatusInput | null,
  blStatus?: ModelStatusInput | null,
  loanStatus?: ModelStatusInput | null,
  and?: Array< ModelSMAccountConditionInput | null > | null,
  or?: Array< ModelSMAccountConditionInput | null > | null,
  not?: ModelSMAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type SMAccount = {
  __typename: "SMAccount",
  nationalid: string,
  name: string,
  phonecontact: string,
  awsemail: string,
  balance: number,
  pw: string,
  loanAcceptanceCode: string,
  ttlDpstSM: number,
  TtlWthdrwnSM: number,
  ttlLnInSM: number,
  ttlLnOutSM: number,
  ttlLoanRecovered: number,
  blTimesSM: number,
  blClrdtmsSM: number,
  clrdNnvrBLSM: number,
  actvLnsSM: number,
  ttlActiveLnsInAmtSM: number,
  ttlBLLoansInAmtSM: number,
  ttlClrdLnsInAmtSM: number,
  ttlActiveLnsOutAmtSM: number,
  ttlBLLoansOutAmtSM: number,
  ttlClrdLnsOutAmtSM: number,
  tmsIHvBrwdSM: number,
  tmsIHvLndSM: number,
  ttlDpstChm: number,
  ttlWithdrwlChm: number,
  ttlChmLnIn: number,
  blChmTimes: number,
  blChmClrdtms: number,
  clrdNnvrBLChm: number,
  actvLnsChm: number,
  ttlActiveLnsInAmtChm: number,
  ttlBLLoansInAmChmt: number,
  ttlClrdLnsInAmtChm: number,
  tmsIHvBrwdChm: number,
  tmsIHvLndChm: number,
  ttlLnInCrdSls: number,
  ttlLnOutCrdSls: number,
  blTimesCrdSls: number,
  blClrdtmsCrdSls: number,
  clrdNnvrBLCrdSls: number,
  actvLnsCrdSls: number,
  ttlActiveLnsInAmtCrdSls: number,
  ttlBLLoansInAmtCrdSls: number,
  ttlClrdLnsInAmtCrdSls: number,
  ttlActiveLnsOutAmtCrdSls: number,
  ttlBLLoansOutAmtCrdSls: number,
  ttlClrdLnsOutAmtCrdSls: number,
  tmsIHvBrwdCrdSls: number,
  tmsIHvLndCrdSls: number,
  TotalTymsBL: number,
  acActivenessStatus: Status,
  blStatus: Status,
  loanStatus: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMAccountInput = {
  nationalid: string,
  name?: string | null,
  phonecontact?: string | null,
  awsemail?: string | null,
  balance?: number | null,
  pw?: string | null,
  loanAcceptanceCode?: string | null,
  ttlDpstSM?: number | null,
  TtlWthdrwnSM?: number | null,
  ttlLnInSM?: number | null,
  ttlLnOutSM?: number | null,
  ttlLoanRecovered?: number | null,
  blTimesSM?: number | null,
  blClrdtmsSM?: number | null,
  clrdNnvrBLSM?: number | null,
  actvLnsSM?: number | null,
  ttlActiveLnsInAmtSM?: number | null,
  ttlBLLoansInAmtSM?: number | null,
  ttlClrdLnsInAmtSM?: number | null,
  ttlActiveLnsOutAmtSM?: number | null,
  ttlBLLoansOutAmtSM?: number | null,
  ttlClrdLnsOutAmtSM?: number | null,
  tmsIHvBrwdSM?: number | null,
  tmsIHvLndSM?: number | null,
  ttlDpstChm?: number | null,
  ttlWithdrwlChm?: number | null,
  ttlChmLnIn?: number | null,
  blChmTimes?: number | null,
  blChmClrdtms?: number | null,
  clrdNnvrBLChm?: number | null,
  actvLnsChm?: number | null,
  ttlActiveLnsInAmtChm?: number | null,
  ttlBLLoansInAmChmt?: number | null,
  ttlClrdLnsInAmtChm?: number | null,
  tmsIHvBrwdChm?: number | null,
  tmsIHvLndChm?: number | null,
  ttlLnInCrdSls?: number | null,
  ttlLnOutCrdSls?: number | null,
  blTimesCrdSls?: number | null,
  blClrdtmsCrdSls?: number | null,
  clrdNnvrBLCrdSls?: number | null,
  actvLnsCrdSls?: number | null,
  ttlActiveLnsInAmtCrdSls?: number | null,
  ttlBLLoansInAmtCrdSls?: number | null,
  ttlClrdLnsInAmtCrdSls?: number | null,
  ttlActiveLnsOutAmtCrdSls?: number | null,
  ttlBLLoansOutAmtCrdSls?: number | null,
  ttlClrdLnsOutAmtCrdSls?: number | null,
  tmsIHvBrwdCrdSls?: number | null,
  tmsIHvLndCrdSls?: number | null,
  TotalTymsBL?: number | null,
  acActivenessStatus?: Status | null,
  blStatus?: Status | null,
  loanStatus?: Status | null,
  owner?: string | null,
};

export type DeleteSMAccountInput = {
  nationalid: string,
};

export type CreateSMLoansCoveredInput = {
  id?: string | null,
  loaneeid: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountrepaid: number,
  loanercontact: string,
  loaneecontact: string,
  repaymentPeriod: number,
  advregnu?: string | null,
  timestamp: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelSMLoansCoveredConditionInput = {
  loaneeid?: ModelIDInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  loanercontact?: ModelStringInput | null,
  loaneecontact?: ModelStringInput | null,
  repaymentPeriod?: ModelIntInput | null,
  advregnu?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSMLoansCoveredConditionInput | null > | null,
  or?: Array< ModelSMLoansCoveredConditionInput | null > | null,
  not?: ModelSMLoansCoveredConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type SMLoansCovered = {
  __typename: "SMLoansCovered",
  id: string,
  loaneeid: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountrepaid: number,
  loanercontact: string,
  loaneecontact: string,
  repaymentPeriod: number,
  advregnu?: string | null,
  timestamp: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMLoansCoveredInput = {
  id: string,
  loaneeid?: string | null,
  loanerId?: string | null,
  amountgiven?: number | null,
  amountexpected?: number | null,
  amountrepaid?: number | null,
  loanercontact?: string | null,
  loaneecontact?: string | null,
  repaymentPeriod?: number | null,
  advregnu?: string | null,
  timestamp?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteSMLoansCoveredInput = {
  id: string,
};

export type CreateSMNonLoansInput = {
  id?: string | null,
  senderID: string,
  amountgiven: number,
  senderContact: string,
  description?: string | null,
  receiverphonecontact: string,
  owner: string,
};

export type ModelSMNonLoansConditionInput = {
  senderID?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  senderContact?: ModelStringInput | null,
  description?: ModelStringInput | null,
  receiverphonecontact?: ModelStringInput | null,
  and?: Array< ModelSMNonLoansConditionInput | null > | null,
  or?: Array< ModelSMNonLoansConditionInput | null > | null,
  not?: ModelSMNonLoansConditionInput | null,
};

export type SMNonLoans = {
  __typename: "SMNonLoans",
  id: string,
  senderID: string,
  amountgiven: number,
  senderContact: string,
  description?: string | null,
  receiverphonecontact: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMNonLoansInput = {
  id: string,
  senderID?: string | null,
  amountgiven?: number | null,
  senderContact?: string | null,
  description?: string | null,
  receiverphonecontact?: string | null,
  owner?: string | null,
};

export type DeleteSMNonLoansInput = {
  id: string,
};

export type CreateAgentInput = {
  phonecontact: string,
  nationalid: string,
  name: string,
  ttlEarnings: number,
  pw: string,
  email: string,
  sagentregno: string,
  TtlFltIn: number,
  TtlFltOut: number,
  floatBal: number,
  latitude: number,
  longitude: number,
  agentEarningBal: number,
  status: Status,
  owner: string,
};

export type ModelAgentConditionInput = {
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ttlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  TtlFltIn?: ModelFloatInput | null,
  TtlFltOut?: ModelFloatInput | null,
  floatBal?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAgentConditionInput | null > | null,
  or?: Array< ModelAgentConditionInput | null > | null,
  not?: ModelAgentConditionInput | null,
};

export type Agent = {
  __typename: "Agent",
  phonecontact: string,
  nationalid: string,
  name: string,
  ttlEarnings: number,
  pw: string,
  email: string,
  sagentregno: string,
  TtlFltIn: number,
  TtlFltOut: number,
  floatBal: number,
  latitude: number,
  longitude: number,
  agentEarningBal: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAgentInput = {
  phonecontact: string,
  nationalid?: string | null,
  name?: string | null,
  ttlEarnings?: number | null,
  pw?: string | null,
  email?: string | null,
  sagentregno?: string | null,
  TtlFltIn?: number | null,
  TtlFltOut?: number | null,
  floatBal?: number | null,
  latitude?: number | null,
  longitude?: number | null,
  agentEarningBal?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAgentInput = {
  phonecontact: string,
};

export type CreateFloatPurchaseInput = {
  id?: string | null,
  agentphone: string,
  amount: number,
  nationalid: string,
  bankAdmid: string,
  status: Status,
  owner: string,
};

export type ModelFloatPurchaseConditionInput = {
  agentphone?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  nationalid?: ModelStringInput | null,
  bankAdmid?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelFloatPurchaseConditionInput | null > | null,
  or?: Array< ModelFloatPurchaseConditionInput | null > | null,
  not?: ModelFloatPurchaseConditionInput | null,
};

export type FloatPurchase = {
  __typename: "FloatPurchase",
  id?: string | null,
  agentphone: string,
  amount: number,
  nationalid: string,
  bankAdmid: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFloatPurchaseInput = {
  id: string,
  agentphone?: string | null,
  amount?: number | null,
  nationalid?: string | null,
  bankAdmid?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteFloatPurchaseInput = {
  id: string,
};

export type CreateFloatAddInput = {
  id?: string | null,
  withdrawerid: string,
  trnsactionCode: string,
  amount: number,
  agentPhonecontact: string,
  sagentregno: string,
  status: Status,
  owner: string,
};

export type ModelFloatAddConditionInput = {
  withdrawerid?: ModelStringInput | null,
  trnsactionCode?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  agentPhonecontact?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelFloatAddConditionInput | null > | null,
  or?: Array< ModelFloatAddConditionInput | null > | null,
  not?: ModelFloatAddConditionInput | null,
};

export type FloatAdd = {
  __typename: "FloatAdd",
  id: string,
  withdrawerid: string,
  trnsactionCode: string,
  amount: number,
  agentPhonecontact: string,
  sagentregno: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFloatAddInput = {
  id: string,
  withdrawerid?: string | null,
  trnsactionCode?: string | null,
  amount?: number | null,
  agentPhonecontact?: string | null,
  sagentregno?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteFloatAddInput = {
  id: string,
};

export type CreateFloatReductionInput = {
  id?: string | null,
  amount: number,
  depositerid: string,
  depositerPhn: string,
  phonecontact: string,
  status: Status,
  agentNationalid: string,
  owner: string,
};

export type ModelFloatReductionConditionInput = {
  amount?: ModelFloatInput | null,
  depositerid?: ModelStringInput | null,
  depositerPhn?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  agentNationalid?: ModelStringInput | null,
  and?: Array< ModelFloatReductionConditionInput | null > | null,
  or?: Array< ModelFloatReductionConditionInput | null > | null,
  not?: ModelFloatReductionConditionInput | null,
};

export type FloatReduction = {
  __typename: "FloatReduction",
  id: string,
  amount: number,
  depositerid: string,
  depositerPhn: string,
  phonecontact: string,
  status: Status,
  agentNationalid: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFloatReductionInput = {
  id: string,
  amount?: number | null,
  depositerid?: string | null,
  depositerPhn?: string | null,
  phonecontact?: string | null,
  status?: Status | null,
  agentNationalid?: string | null,
  owner?: string | null,
};

export type DeleteFloatReductionInput = {
  id: string,
};

export type CreateAgentWithdrawalsInput = {
  AgentPhone: string,
  Amount: number,
  id?: string | null,
  bankAdmId?: string | null,
  agentNationalid: string,
  status: Status,
  owner: string,
};

export type ModelAgentWithdrawalsConditionInput = {
  AgentPhone?: ModelStringInput | null,
  Amount?: ModelFloatInput | null,
  bankAdmId?: ModelStringInput | null,
  agentNationalid?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAgentWithdrawalsConditionInput | null > | null,
  or?: Array< ModelAgentWithdrawalsConditionInput | null > | null,
  not?: ModelAgentWithdrawalsConditionInput | null,
};

export type AgentWithdrawals = {
  __typename: "AgentWithdrawals",
  AgentPhone: string,
  Amount: number,
  id: string,
  bankAdmId?: string | null,
  agentNationalid: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAgentWithdrawalsInput = {
  AgentPhone?: string | null,
  Amount?: number | null,
  id: string,
  bankAdmId?: string | null,
  agentNationalid?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAgentWithdrawalsInput = {
  id: string,
};

export type CreateSAgentInput = {
  id?: string | null,
  saNationalid: string,
  name: string,
  phonecontact: string,
  pw: string,
  TtlEarnings: number,
  actMFNdog: number,
  email: string,
  saBalance: number,
  status: Status,
  owner: string,
};

export type ModelSAgentConditionInput = {
  saNationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  pw?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  actMFNdog?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  saBalance?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSAgentConditionInput | null > | null,
  or?: Array< ModelSAgentConditionInput | null > | null,
  not?: ModelSAgentConditionInput | null,
};

export type SAgent = {
  __typename: "SAgent",
  id: string,
  saNationalid: string,
  name: string,
  phonecontact: string,
  pw: string,
  TtlEarnings: number,
  actMFNdog: number,
  email: string,
  saBalance: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSAgentInput = {
  id: string,
  saNationalid?: string | null,
  name?: string | null,
  phonecontact?: string | null,
  pw?: string | null,
  TtlEarnings?: number | null,
  actMFNdog?: number | null,
  email?: string | null,
  saBalance?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteSAgentInput = {
  id: string,
};

export type CreateSAgentWithdrawalsInput = {
  id?: string | null,
  sagentphone: string,
  sagentNatId: string,
  sagentregno: string,
  amount: number,
  bankAdmid?: string | null,
  status: Status,
  owner: string,
};

export type ModelSAgentWithdrawalsConditionInput = {
  sagentphone?: ModelStringInput | null,
  sagentNatId?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankAdmid?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSAgentWithdrawalsConditionInput | null > | null,
  or?: Array< ModelSAgentWithdrawalsConditionInput | null > | null,
  not?: ModelSAgentWithdrawalsConditionInput | null,
};

export type SAgentWithdrawals = {
  __typename: "SAgentWithdrawals",
  id: string,
  sagentphone: string,
  sagentNatId: string,
  sagentregno: string,
  amount: number,
  bankAdmid?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSAgentWithdrawalsInput = {
  id: string,
  sagentphone?: string | null,
  sagentNatId?: string | null,
  sagentregno?: string | null,
  amount?: number | null,
  bankAdmid?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteSAgentWithdrawalsInput = {
  id: string,
};

export type CreateBankAdminInput = {
  nationalid: string,
  name: string,
  phonecontact: string,
  TtlEarnings: number,
  pw: string,
  BankAdmBal: number,
  email: string,
  status: Status,
  owner: string,
};

export type ModelBankAdminConditionInput = {
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  BankAdmBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelBankAdminConditionInput | null > | null,
  or?: Array< ModelBankAdminConditionInput | null > | null,
  not?: ModelBankAdminConditionInput | null,
};

export type BankAdmin = {
  __typename: "BankAdmin",
  nationalid: string,
  name: string,
  phonecontact: string,
  TtlEarnings: number,
  pw: string,
  BankAdmBal: number,
  email: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBankAdminInput = {
  nationalid: string,
  name?: string | null,
  phonecontact?: string | null,
  TtlEarnings?: number | null,
  pw?: string | null,
  BankAdmBal?: number | null,
  email?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteBankAdminInput = {
  nationalid: string,
};

export type CreateBankAdmWithdrawalsInput = {
  id?: string | null,
  phoneContact: string,
  bankAdmNatId: string,
  amount: number,
  status: Status,
  owner: string,
};

export type ModelBankAdmWithdrawalsConditionInput = {
  phoneContact?: ModelStringInput | null,
  bankAdmNatId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelBankAdmWithdrawalsConditionInput | null > | null,
  or?: Array< ModelBankAdmWithdrawalsConditionInput | null > | null,
  not?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type BankAdmWithdrawals = {
  __typename: "BankAdmWithdrawals",
  id: string,
  phoneContact: string,
  bankAdmNatId: string,
  amount: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBankAdmWithdrawalsInput = {
  id: string,
  phoneContact?: string | null,
  bankAdmNatId?: string | null,
  amount?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteBankAdmWithdrawalsInput = {
  id: string,
};

export type CreateAdvocateInput = {
  advregnu: string,
  nationalid: string,
  pwd: string,
  name: string,
  phonecontact: string,
  TtlEarnings: number,
  advBal: number,
  email: string,
  status: Status,
  owner: string,
};

export type ModelAdvocateConditionInput = {
  nationalid?: ModelStringInput | null,
  pwd?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  advBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAdvocateConditionInput | null > | null,
  or?: Array< ModelAdvocateConditionInput | null > | null,
  not?: ModelAdvocateConditionInput | null,
};

export type Advocate = {
  __typename: "Advocate",
  advregnu: string,
  nationalid: string,
  pwd: string,
  name: string,
  phonecontact: string,
  TtlEarnings: number,
  advBal: number,
  email: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdvocateInput = {
  advregnu: string,
  nationalid?: string | null,
  pwd?: string | null,
  name?: string | null,
  phonecontact?: string | null,
  TtlEarnings?: number | null,
  advBal?: number | null,
  email?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAdvocateInput = {
  advregnu: string,
};

export type CreateAdvocateWithdrawalsInput = {
  id?: string | null,
  phoneContact: string,
  advregnu: string,
  amount: number,
  advNatId: string,
  status: Status,
  owner: string,
};

export type ModelAdvocateWithdrawalsConditionInput = {
  phoneContact?: ModelStringInput | null,
  advregnu?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  advNatId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAdvocateWithdrawalsConditionInput | null > | null,
  or?: Array< ModelAdvocateWithdrawalsConditionInput | null > | null,
  not?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type AdvocateWithdrawals = {
  __typename: "AdvocateWithdrawals",
  id: string,
  phoneContact: string,
  advregnu: string,
  amount: number,
  advNatId: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdvocateWithdrawalsInput = {
  id: string,
  phoneContact?: string | null,
  advregnu?: string | null,
  amount?: number | null,
  advNatId?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAdvocateWithdrawalsInput = {
  id: string,
};

export type CreateCompanyInput = {
  AdminId: string,
  phoneContact: string,
  companyEmail: string,
  termsNconditions: string,
  alert: string,
  about: string,
  policy: string,
  privacy: string,
  recom: string,
  pw1: string,
  pw2: string,
  agentwithdrawalFee: number,
  agentCom: number,
  sagentCom: number,
  companyCom: number,
  AdvCom: number,
  bankAdminCom: number,
  compComg: number,
  sawithdrawalFee: number,
  advuserwithdrawalFee: number,
  bankAdmuserwithdrawalFee: number,
  advocateCoverageFee: number,
  userTransferFee: number,
  userClearanceFee: number,
  searchAdFee: number,
  createBuzFee: number,
  crtCompAdsFee: number,
  crtParaAdsFee: number,
  companyEarningBal: number,
  companyEarning: number,
  agentEarningBal: number,
  agentEarning: number,
  saEarningBal: number,
  saarning: number,
  AdvEarningBal: number,
  AdvEarning: number,
  admEarningBal: number,
  admEarning: number,
  ttlUsrDep: number,
  ttlUserWthdrwl?: number | null,
  agentFloatIn: number,
  agentFloatOut: number,
  ttlActiveUsers: number,
  ttlnactvUsrs: number,
  ttlBLUsrs: number,
  ttlKFNdgActv: number,
  ttlKFNdgInActv: number,
  ttlKNdgBLStts: number,
  ttlKFKbwActv: number,
  ttlKFKbwInActv: number,
  ttlKKbwBLStts: number,
  ttlKFAdvActv: number,
  ttlKFAdvInActv: number,
  ttlKAdvBLStts: number,
  ttlKFAdmActv: number,
  ttlKFAdmInActv: number,
  ttlKAdmBLStts: number,
  ttlSMLnsIn: number,
  ttlChmLnsIn: number,
  ttlSellerLnsIn: number,
  ttlSMLnsInActv: number,
  ttlChmLnsInActv: number,
  ttlSellerLnsInActv: number,
  ttlSMLnsInClrd: number,
  ttlChmLnsInClrd: number,
  ttlSellerLnsInClrd: number,
  ttlSMLnsInBl: number,
  ttlChmLnsInBl: number,
  ttlSellerLnsInBl: number,
  ttlSMLnsInBlThnClr: number,
  ttlChmLnsInBlThnClr: number,
  ttlSellerLnsInBlThnClr: number,
  ttlSMLnsInNvrBlThnClr: number,
  ttlChmLnsInNvrBlThnClr: number,
  ttlSellerLnsInNvrBlThnClr: number,
  ttlCompTrnsfrEarnings: number,
  ttlCompBLClrncfrEarnings: number,
  ttlCompCovEarnings: number,
  ttlCompEarnings: number,
  ttlKFNdogoTrnsactionEarnings: number,
  ttlKFKubwaTrnsactionEarnings: number,
  ttlKFAdvTrnsactionEarnings: number,
  ttlKFAdmTrnsactionEarnings: number,
  maxInterest: number,
  totalLnsRecovered: number,
};

export type ModelCompanyConditionInput = {
  phoneContact?: ModelStringInput | null,
  companyEmail?: ModelStringInput | null,
  termsNconditions?: ModelStringInput | null,
  alert?: ModelStringInput | null,
  about?: ModelStringInput | null,
  policy?: ModelStringInput | null,
  privacy?: ModelStringInput | null,
  recom?: ModelStringInput | null,
  pw1?: ModelStringInput | null,
  pw2?: ModelStringInput | null,
  agentwithdrawalFee?: ModelFloatInput | null,
  agentCom?: ModelFloatInput | null,
  sagentCom?: ModelFloatInput | null,
  companyCom?: ModelFloatInput | null,
  AdvCom?: ModelFloatInput | null,
  bankAdminCom?: ModelFloatInput | null,
  compComg?: ModelFloatInput | null,
  sawithdrawalFee?: ModelFloatInput | null,
  advuserwithdrawalFee?: ModelFloatInput | null,
  bankAdmuserwithdrawalFee?: ModelFloatInput | null,
  advocateCoverageFee?: ModelFloatInput | null,
  userTransferFee?: ModelFloatInput | null,
  userClearanceFee?: ModelFloatInput | null,
  searchAdFee?: ModelFloatInput | null,
  createBuzFee?: ModelFloatInput | null,
  crtCompAdsFee?: ModelFloatInput | null,
  crtParaAdsFee?: ModelFloatInput | null,
  companyEarningBal?: ModelFloatInput | null,
  companyEarning?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  agentEarning?: ModelFloatInput | null,
  saEarningBal?: ModelFloatInput | null,
  saarning?: ModelFloatInput | null,
  AdvEarningBal?: ModelFloatInput | null,
  AdvEarning?: ModelFloatInput | null,
  admEarningBal?: ModelFloatInput | null,
  admEarning?: ModelFloatInput | null,
  ttlUsrDep?: ModelFloatInput | null,
  ttlUserWthdrwl?: ModelFloatInput | null,
  agentFloatIn?: ModelFloatInput | null,
  agentFloatOut?: ModelFloatInput | null,
  ttlActiveUsers?: ModelFloatInput | null,
  ttlnactvUsrs?: ModelFloatInput | null,
  ttlBLUsrs?: ModelFloatInput | null,
  ttlKFNdgActv?: ModelFloatInput | null,
  ttlKFNdgInActv?: ModelFloatInput | null,
  ttlKNdgBLStts?: ModelFloatInput | null,
  ttlKFKbwActv?: ModelFloatInput | null,
  ttlKFKbwInActv?: ModelFloatInput | null,
  ttlKKbwBLStts?: ModelFloatInput | null,
  ttlKFAdvActv?: ModelFloatInput | null,
  ttlKFAdvInActv?: ModelFloatInput | null,
  ttlKAdvBLStts?: ModelFloatInput | null,
  ttlKFAdmActv?: ModelFloatInput | null,
  ttlKFAdmInActv?: ModelFloatInput | null,
  ttlKAdmBLStts?: ModelFloatInput | null,
  ttlSMLnsIn?: ModelFloatInput | null,
  ttlChmLnsIn?: ModelFloatInput | null,
  ttlSellerLnsIn?: ModelFloatInput | null,
  ttlSMLnsInActv?: ModelFloatInput | null,
  ttlChmLnsInActv?: ModelFloatInput | null,
  ttlSellerLnsInActv?: ModelFloatInput | null,
  ttlSMLnsInClrd?: ModelFloatInput | null,
  ttlChmLnsInClrd?: ModelFloatInput | null,
  ttlSellerLnsInClrd?: ModelFloatInput | null,
  ttlSMLnsInBl?: ModelFloatInput | null,
  ttlChmLnsInBl?: ModelFloatInput | null,
  ttlSellerLnsInBl?: ModelFloatInput | null,
  ttlSMLnsInBlThnClr?: ModelFloatInput | null,
  ttlChmLnsInBlThnClr?: ModelFloatInput | null,
  ttlSellerLnsInBlThnClr?: ModelFloatInput | null,
  ttlSMLnsInNvrBlThnClr?: ModelFloatInput | null,
  ttlChmLnsInNvrBlThnClr?: ModelFloatInput | null,
  ttlSellerLnsInNvrBlThnClr?: ModelFloatInput | null,
  ttlCompTrnsfrEarnings?: ModelFloatInput | null,
  ttlCompBLClrncfrEarnings?: ModelFloatInput | null,
  ttlCompCovEarnings?: ModelFloatInput | null,
  ttlCompEarnings?: ModelFloatInput | null,
  ttlKFNdogoTrnsactionEarnings?: ModelFloatInput | null,
  ttlKFKubwaTrnsactionEarnings?: ModelFloatInput | null,
  ttlKFAdvTrnsactionEarnings?: ModelFloatInput | null,
  ttlKFAdmTrnsactionEarnings?: ModelFloatInput | null,
  maxInterest?: ModelFloatInput | null,
  totalLnsRecovered?: ModelFloatInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type Company = {
  __typename: "Company",
  AdminId: string,
  phoneContact: string,
  companyEmail: string,
  termsNconditions: string,
  alert: string,
  about: string,
  policy: string,
  privacy: string,
  recom: string,
  pw1: string,
  pw2: string,
  agentwithdrawalFee: number,
  agentCom: number,
  sagentCom: number,
  companyCom: number,
  AdvCom: number,
  bankAdminCom: number,
  compComg: number,
  sawithdrawalFee: number,
  advuserwithdrawalFee: number,
  bankAdmuserwithdrawalFee: number,
  advocateCoverageFee: number,
  userTransferFee: number,
  userClearanceFee: number,
  searchAdFee: number,
  createBuzFee: number,
  crtCompAdsFee: number,
  crtParaAdsFee: number,
  companyEarningBal: number,
  companyEarning: number,
  agentEarningBal: number,
  agentEarning: number,
  saEarningBal: number,
  saarning: number,
  AdvEarningBal: number,
  AdvEarning: number,
  admEarningBal: number,
  admEarning: number,
  ttlUsrDep: number,
  ttlUserWthdrwl?: number | null,
  agentFloatIn: number,
  agentFloatOut: number,
  ttlActiveUsers: number,
  ttlnactvUsrs: number,
  ttlBLUsrs: number,
  ttlKFNdgActv: number,
  ttlKFNdgInActv: number,
  ttlKNdgBLStts: number,
  ttlKFKbwActv: number,
  ttlKFKbwInActv: number,
  ttlKKbwBLStts: number,
  ttlKFAdvActv: number,
  ttlKFAdvInActv: number,
  ttlKAdvBLStts: number,
  ttlKFAdmActv: number,
  ttlKFAdmInActv: number,
  ttlKAdmBLStts: number,
  ttlSMLnsIn: number,
  ttlChmLnsIn: number,
  ttlSellerLnsIn: number,
  ttlSMLnsInActv: number,
  ttlChmLnsInActv: number,
  ttlSellerLnsInActv: number,
  ttlSMLnsInClrd: number,
  ttlChmLnsInClrd: number,
  ttlSellerLnsInClrd: number,
  ttlSMLnsInBl: number,
  ttlChmLnsInBl: number,
  ttlSellerLnsInBl: number,
  ttlSMLnsInBlThnClr: number,
  ttlChmLnsInBlThnClr: number,
  ttlSellerLnsInBlThnClr: number,
  ttlSMLnsInNvrBlThnClr: number,
  ttlChmLnsInNvrBlThnClr: number,
  ttlSellerLnsInNvrBlThnClr: number,
  ttlCompTrnsfrEarnings: number,
  ttlCompBLClrncfrEarnings: number,
  ttlCompCovEarnings: number,
  ttlCompEarnings: number,
  ttlKFNdogoTrnsactionEarnings: number,
  ttlKFKubwaTrnsactionEarnings: number,
  ttlKFAdvTrnsactionEarnings: number,
  ttlKFAdmTrnsactionEarnings: number,
  maxInterest: number,
  totalLnsRecovered: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCompanyInput = {
  AdminId: string,
  phoneContact?: string | null,
  companyEmail?: string | null,
  termsNconditions?: string | null,
  alert?: string | null,
  about?: string | null,
  policy?: string | null,
  privacy?: string | null,
  recom?: string | null,
  pw1?: string | null,
  pw2?: string | null,
  agentwithdrawalFee?: number | null,
  agentCom?: number | null,
  sagentCom?: number | null,
  companyCom?: number | null,
  AdvCom?: number | null,
  bankAdminCom?: number | null,
  compComg?: number | null,
  sawithdrawalFee?: number | null,
  advuserwithdrawalFee?: number | null,
  bankAdmuserwithdrawalFee?: number | null,
  advocateCoverageFee?: number | null,
  userTransferFee?: number | null,
  userClearanceFee?: number | null,
  searchAdFee?: number | null,
  createBuzFee?: number | null,
  crtCompAdsFee?: number | null,
  crtParaAdsFee?: number | null,
  companyEarningBal?: number | null,
  companyEarning?: number | null,
  agentEarningBal?: number | null,
  agentEarning?: number | null,
  saEarningBal?: number | null,
  saarning?: number | null,
  AdvEarningBal?: number | null,
  AdvEarning?: number | null,
  admEarningBal?: number | null,
  admEarning?: number | null,
  ttlUsrDep?: number | null,
  ttlUserWthdrwl?: number | null,
  agentFloatIn?: number | null,
  agentFloatOut?: number | null,
  ttlActiveUsers?: number | null,
  ttlnactvUsrs?: number | null,
  ttlBLUsrs?: number | null,
  ttlKFNdgActv?: number | null,
  ttlKFNdgInActv?: number | null,
  ttlKNdgBLStts?: number | null,
  ttlKFKbwActv?: number | null,
  ttlKFKbwInActv?: number | null,
  ttlKKbwBLStts?: number | null,
  ttlKFAdvActv?: number | null,
  ttlKFAdvInActv?: number | null,
  ttlKAdvBLStts?: number | null,
  ttlKFAdmActv?: number | null,
  ttlKFAdmInActv?: number | null,
  ttlKAdmBLStts?: number | null,
  ttlSMLnsIn?: number | null,
  ttlChmLnsIn?: number | null,
  ttlSellerLnsIn?: number | null,
  ttlSMLnsInActv?: number | null,
  ttlChmLnsInActv?: number | null,
  ttlSellerLnsInActv?: number | null,
  ttlSMLnsInClrd?: number | null,
  ttlChmLnsInClrd?: number | null,
  ttlSellerLnsInClrd?: number | null,
  ttlSMLnsInBl?: number | null,
  ttlChmLnsInBl?: number | null,
  ttlSellerLnsInBl?: number | null,
  ttlSMLnsInBlThnClr?: number | null,
  ttlChmLnsInBlThnClr?: number | null,
  ttlSellerLnsInBlThnClr?: number | null,
  ttlSMLnsInNvrBlThnClr?: number | null,
  ttlChmLnsInNvrBlThnClr?: number | null,
  ttlSellerLnsInNvrBlThnClr?: number | null,
  ttlCompTrnsfrEarnings?: number | null,
  ttlCompBLClrncfrEarnings?: number | null,
  ttlCompCovEarnings?: number | null,
  ttlCompEarnings?: number | null,
  ttlKFNdogoTrnsactionEarnings?: number | null,
  ttlKFKubwaTrnsactionEarnings?: number | null,
  ttlKFAdvTrnsactionEarnings?: number | null,
  ttlKFAdmTrnsactionEarnings?: number | null,
  maxInterest?: number | null,
  totalLnsRecovered?: number | null,
};

export type DeleteCompanyInput = {
  AdminId: string,
};

export type CreateCovCreditSellerInput = {
  id?: string | null,
  itemName?: Array< string > | null,
  itemSerialNumber?: Array< string | null > | null,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountRepaid: number,
  repaymentPeriod: number,
  timestamp: number,
  description?: string | null,
  status: Status,
  advregnu: string,
  advPhone: string,
  owner: string,
};

export type ModelCovCreditSellerConditionInput = {
  itemName?: ModelStringInput | null,
  itemSerialNumber?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  timestamp?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  advregnu?: ModelStringInput | null,
  advPhone?: ModelStringInput | null,
  and?: Array< ModelCovCreditSellerConditionInput | null > | null,
  or?: Array< ModelCovCreditSellerConditionInput | null > | null,
  not?: ModelCovCreditSellerConditionInput | null,
};

export type CovCreditSeller = {
  __typename: "CovCreditSeller",
  id: string,
  itemName?: Array< string > | null,
  itemSerialNumber?: Array< string | null > | null,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountRepaid: number,
  repaymentPeriod: number,
  timestamp: number,
  description?: string | null,
  status: Status,
  advregnu: string,
  advPhone: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCovCreditSellerInput = {
  id: string,
  itemName?: Array< string > | null,
  itemSerialNumber?: Array< string | null > | null,
  buyerContact?: string | null,
  sellerContact?: string | null,
  buyerID?: string | null,
  sellerID?: string | null,
  amountSold?: number | null,
  amountexpectedBack?: number | null,
  amountRepaid?: number | null,
  repaymentPeriod?: number | null,
  timestamp?: number | null,
  description?: string | null,
  status?: Status | null,
  advregnu?: string | null,
  advPhone?: string | null,
  owner?: string | null,
};

export type DeleteCovCreditSellerInput = {
  id: string,
};

export type CreateGroupInput = {
  grpContact: string,
  signitoryContact: string,
  SignitoryNatid: string,
  signitoryName: string,
  grpName: string,
  signitoryPW: string,
  grpEmail: string,
  grpBal: number,
  ttlGrpMembers: number,
  ttlLonsOut: number,
  description?: string | null,
  ttlDpst: number,
  ttlWthdrwn: number,
  ttlBLMmbrs: number,
  ttlMmbrsWthActvLns: number,
  ttlMmbrsClrdNnvrBL: number,
  ttlMmbrsWithActvLns: number,
  ttlActiveLnsInAmt: number,
  ttlMmbrsBLLoansInAmt: number,
  ttlMmbrsClrdLnsInAmt: number,
  ttlClrdLnsOutAmt: number,
  tymsGrpHasLend: number,
  ttlLonAmountRecovered?: number | null,
  status: Status,
  owner: string,
};

export type ModelGroupConditionInput = {
  signitoryContact?: ModelStringInput | null,
  SignitoryNatid?: ModelStringInput | null,
  signitoryName?: ModelStringInput | null,
  grpName?: ModelStringInput | null,
  signitoryPW?: ModelStringInput | null,
  grpEmail?: ModelStringInput | null,
  grpBal?: ModelFloatInput | null,
  ttlGrpMembers?: ModelFloatInput | null,
  ttlLonsOut?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  ttlDpst?: ModelFloatInput | null,
  ttlWthdrwn?: ModelFloatInput | null,
  ttlBLMmbrs?: ModelFloatInput | null,
  ttlMmbrsWthActvLns?: ModelFloatInput | null,
  ttlMmbrsClrdNnvrBL?: ModelFloatInput | null,
  ttlMmbrsWithActvLns?: ModelFloatInput | null,
  ttlActiveLnsInAmt?: ModelFloatInput | null,
  ttlMmbrsBLLoansInAmt?: ModelFloatInput | null,
  ttlMmbrsClrdLnsInAmt?: ModelFloatInput | null,
  ttlClrdLnsOutAmt?: ModelFloatInput | null,
  tymsGrpHasLend?: ModelFloatInput | null,
  ttlLonAmountRecovered?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type Group = {
  __typename: "Group",
  grpContact: string,
  signitoryContact: string,
  SignitoryNatid: string,
  signitoryName: string,
  grpName: string,
  signitoryPW: string,
  grpEmail: string,
  grpBal: number,
  ttlGrpMembers: number,
  ttlLonsOut: number,
  description?: string | null,
  ttlDpst: number,
  ttlWthdrwn: number,
  ttlBLMmbrs: number,
  ttlMmbrsWthActvLns: number,
  ttlMmbrsClrdNnvrBL: number,
  ttlMmbrsWithActvLns: number,
  ttlActiveLnsInAmt: number,
  ttlMmbrsBLLoansInAmt: number,
  ttlMmbrsClrdLnsInAmt: number,
  ttlClrdLnsOutAmt: number,
  tymsGrpHasLend: number,
  ttlLonAmountRecovered?: number | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupInput = {
  grpContact: string,
  signitoryContact?: string | null,
  SignitoryNatid?: string | null,
  signitoryName?: string | null,
  grpName?: string | null,
  signitoryPW?: string | null,
  grpEmail?: string | null,
  grpBal?: number | null,
  ttlGrpMembers?: number | null,
  ttlLonsOut?: number | null,
  description?: string | null,
  ttlDpst?: number | null,
  ttlWthdrwn?: number | null,
  ttlBLMmbrs?: number | null,
  ttlMmbrsWthActvLns?: number | null,
  ttlMmbrsClrdNnvrBL?: number | null,
  ttlMmbrsWithActvLns?: number | null,
  ttlActiveLnsInAmt?: number | null,
  ttlMmbrsBLLoansInAmt?: number | null,
  ttlMmbrsClrdLnsInAmt?: number | null,
  ttlClrdLnsOutAmt?: number | null,
  tymsGrpHasLend?: number | null,
  ttlLonAmountRecovered?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteGroupInput = {
  grpContact: string,
};

export type CreateGrpMembersInput = {
  id?: string | null,
  groupContact: string,
  memberContact: string,
  memberNatId: string,
  acBal: number,
  status: Status,
  owner: string,
};

export type ModelGrpMembersConditionInput = {
  groupContact?: ModelStringInput | null,
  memberContact?: ModelStringInput | null,
  memberNatId?: ModelStringInput | null,
  acBal?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelGrpMembersConditionInput | null > | null,
  or?: Array< ModelGrpMembersConditionInput | null > | null,
  not?: ModelGrpMembersConditionInput | null,
};

export type GrpMembers = {
  __typename: "GrpMembers",
  id: string,
  groupContact: string,
  memberContact: string,
  memberNatId: string,
  acBal: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGrpMembersInput = {
  id: string,
  groupContact?: string | null,
  memberContact?: string | null,
  memberNatId?: string | null,
  acBal?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteGrpMembersInput = {
  id: string,
};

export type CreateCvrdGroupLoansInput = {
  id?: string | null,
  grpContact: string,
  loaneeContact: string,
  loaneeID: string,
  repaymentPeriod: number,
  amountGiven: number,
  amountExpectedBack: number,
  amountRepaid: number,
  description?: string | null,
  timestamp: number,
  advRegNu: string,
  status: Status,
  owner: string,
};

export type ModelCvrdGroupLoansConditionInput = {
  grpContact?: ModelStringInput | null,
  loaneeContact?: ModelStringInput | null,
  loaneeID?: ModelStringInput | null,
  repaymentPeriod?: ModelIntInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  advRegNu?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelCvrdGroupLoansConditionInput | null > | null,
  or?: Array< ModelCvrdGroupLoansConditionInput | null > | null,
  not?: ModelCvrdGroupLoansConditionInput | null,
};

export type CvrdGroupLoans = {
  __typename: "CvrdGroupLoans",
  id: string,
  grpContact: string,
  loaneeContact: string,
  loaneeID: string,
  repaymentPeriod: number,
  amountGiven: number,
  amountExpectedBack: number,
  amountRepaid: number,
  description?: string | null,
  timestamp: number,
  advRegNu: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCvrdGroupLoansInput = {
  id: string,
  grpContact?: string | null,
  loaneeContact?: string | null,
  loaneeID?: string | null,
  repaymentPeriod?: number | null,
  amountGiven?: number | null,
  amountExpectedBack?: number | null,
  amountRepaid?: number | null,
  description?: string | null,
  timestamp?: number | null,
  advRegNu?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteCvrdGroupLoansInput = {
  id: string,
};

export type CreateGroupNonLoansInput = {
  id?: string | null,
  grpContact: string,
  recipientContact: string,
  amountSent: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelGroupNonLoansConditionInput = {
  grpContact?: ModelStringInput | null,
  recipientContact?: ModelStringInput | null,
  amountSent?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelGroupNonLoansConditionInput | null > | null,
  or?: Array< ModelGroupNonLoansConditionInput | null > | null,
  not?: ModelGroupNonLoansConditionInput | null,
};

export type GroupNonLoans = {
  __typename: "GroupNonLoans",
  id: string,
  grpContact: string,
  recipientContact: string,
  amountSent: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupNonLoansInput = {
  id: string,
  grpContact?: string | null,
  recipientContact?: string | null,
  amountSent?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteGroupNonLoansInput = {
  id: string,
};

export type CreateGrpMembersContributionInput = {
  id?: string | null,
  memberContact: string,
  grpContact: string,
  contriAmount: number,
  status: Status,
  owner: string,
};

export type ModelGrpMembersContributionConditionInput = {
  memberContact?: ModelStringInput | null,
  grpContact?: ModelStringInput | null,
  contriAmount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelGrpMembersContributionConditionInput | null > | null,
  or?: Array< ModelGrpMembersContributionConditionInput | null > | null,
  not?: ModelGrpMembersContributionConditionInput | null,
};

export type GrpMembersContribution = {
  __typename: "GrpMembersContribution",
  id?: string | null,
  memberContact: string,
  grpContact: string,
  contriAmount: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGrpMembersContributionInput = {
  id: string,
  memberContact?: string | null,
  grpContact?: string | null,
  contriAmount?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteGrpMembersContributionInput = {
  id: string,
};

export type CreateAdvertisedSingleMemberLoansInput = {
  id?: string | null,
  nameOfLoaner: string,
  maximum: number,
  contact: string,
  repaymentPeriod: string,
  interest: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelAdvertisedSingleMemberLoansConditionInput = {
  nameOfLoaner?: ModelStringInput | null,
  maximum?: ModelFloatInput | null,
  contact?: ModelStringInput | null,
  repaymentPeriod?: ModelStringInput | null,
  interest?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAdvertisedSingleMemberLoansConditionInput | null > | null,
  or?: Array< ModelAdvertisedSingleMemberLoansConditionInput | null > | null,
  not?: ModelAdvertisedSingleMemberLoansConditionInput | null,
};

export type AdvertisedSingleMemberLoans = {
  __typename: "AdvertisedSingleMemberLoans",
  id: string,
  nameOfLoaner: string,
  maximum: number,
  contact: string,
  repaymentPeriod: string,
  interest: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdvertisedSingleMemberLoansInput = {
  id: string,
  nameOfLoaner?: string | null,
  maximum?: number | null,
  contact?: string | null,
  repaymentPeriod?: string | null,
  interest?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAdvertisedSingleMemberLoansInput = {
  id: string,
};

export type CreateAdvertisedChamaLoansInput = {
  id?: string | null,
  nameOfLoaner: string,
  maximum: number,
  contact: string,
  repaymentPeriod: string,
  interest: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelAdvertisedChamaLoansConditionInput = {
  nameOfLoaner?: ModelStringInput | null,
  maximum?: ModelFloatInput | null,
  contact?: ModelStringInput | null,
  repaymentPeriod?: ModelStringInput | null,
  interest?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAdvertisedChamaLoansConditionInput | null > | null,
  or?: Array< ModelAdvertisedChamaLoansConditionInput | null > | null,
  not?: ModelAdvertisedChamaLoansConditionInput | null,
};

export type AdvertisedChamaLoans = {
  __typename: "AdvertisedChamaLoans",
  id: string,
  nameOfLoaner: string,
  maximum: number,
  contact: string,
  repaymentPeriod: string,
  interest: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdvertisedChamaLoansInput = {
  id: string,
  nameOfLoaner?: string | null,
  maximum?: number | null,
  contact?: string | null,
  repaymentPeriod?: string | null,
  interest?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAdvertisedChamaLoansInput = {
  id: string,
};

export type CreatePaidMultipleAdsInput = {
  id?: string | null,
  bizRegNo: string,
  ownerNatId: string,
  item: string,
  nameOfSeller: string,
  buzType: string,
  nearByTown: string,
  contact: string,
  description?: string | null,
  status: Status,
  latitude: number,
  longitude: number,
  owner: string,
};

export type ModelPaidMultipleAdsConditionInput = {
  bizRegNo?: ModelStringInput | null,
  ownerNatId?: ModelStringInput | null,
  item?: ModelStringInput | null,
  nameOfSeller?: ModelStringInput | null,
  buzType?: ModelStringInput | null,
  nearByTown?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelPaidMultipleAdsConditionInput | null > | null,
  or?: Array< ModelPaidMultipleAdsConditionInput | null > | null,
  not?: ModelPaidMultipleAdsConditionInput | null,
};

export type PaidMultipleAds = {
  __typename: "PaidMultipleAds",
  id: string,
  bizRegNo: string,
  ownerNatId: string,
  item: string,
  nameOfSeller: string,
  buzType: string,
  nearByTown: string,
  contact: string,
  description?: string | null,
  status: Status,
  latitude: number,
  longitude: number,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePaidMultipleAdsInput = {
  id: string,
  bizRegNo?: string | null,
  ownerNatId?: string | null,
  item?: string | null,
  nameOfSeller?: string | null,
  buzType?: string | null,
  nearByTown?: string | null,
  contact?: string | null,
  description?: string | null,
  status?: Status | null,
  latitude?: number | null,
  longitude?: number | null,
  owner?: string | null,
};

export type DeletePaidMultipleAdsInput = {
  id: string,
};

export type CreateFreeBizAdsInput = {
  id?: string | null,
  item: string,
  nameOfSeller: string,
  buzType: string,
  nearByTown: string,
  contact: string,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelFreeBizAdsConditionInput = {
  item?: ModelStringInput | null,
  nameOfSeller?: ModelStringInput | null,
  buzType?: ModelStringInput | null,
  nearByTown?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelFreeBizAdsConditionInput | null > | null,
  or?: Array< ModelFreeBizAdsConditionInput | null > | null,
  not?: ModelFreeBizAdsConditionInput | null,
};

export type FreeBizAds = {
  __typename: "FreeBizAds",
  id: string,
  item: string,
  nameOfSeller: string,
  buzType: string,
  nearByTown: string,
  contact: string,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFreeBizAdsInput = {
  id: string,
  item?: string | null,
  nameOfSeller?: string | null,
  buzType?: string | null,
  nearByTown?: string | null,
  contact?: string | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteFreeBizAdsInput = {
  id: string,
};

export type ModelSMAccountFilterInput = {
  nationalid?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  awsemail?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  loanAcceptanceCode?: ModelStringInput | null,
  ttlDpstSM?: ModelFloatInput | null,
  TtlWthdrwnSM?: ModelFloatInput | null,
  ttlLnInSM?: ModelFloatInput | null,
  ttlLnOutSM?: ModelFloatInput | null,
  ttlLoanRecovered?: ModelFloatInput | null,
  blTimesSM?: ModelFloatInput | null,
  blClrdtmsSM?: ModelFloatInput | null,
  clrdNnvrBLSM?: ModelFloatInput | null,
  actvLnsSM?: ModelFloatInput | null,
  ttlActiveLnsInAmtSM?: ModelFloatInput | null,
  ttlBLLoansInAmtSM?: ModelFloatInput | null,
  ttlClrdLnsInAmtSM?: ModelFloatInput | null,
  ttlActiveLnsOutAmtSM?: ModelFloatInput | null,
  ttlBLLoansOutAmtSM?: ModelFloatInput | null,
  ttlClrdLnsOutAmtSM?: ModelFloatInput | null,
  tmsIHvBrwdSM?: ModelFloatInput | null,
  tmsIHvLndSM?: ModelFloatInput | null,
  ttlDpstChm?: ModelFloatInput | null,
  ttlWithdrwlChm?: ModelFloatInput | null,
  ttlChmLnIn?: ModelFloatInput | null,
  blChmTimes?: ModelFloatInput | null,
  blChmClrdtms?: ModelFloatInput | null,
  clrdNnvrBLChm?: ModelFloatInput | null,
  actvLnsChm?: ModelFloatInput | null,
  ttlActiveLnsInAmtChm?: ModelFloatInput | null,
  ttlBLLoansInAmChmt?: ModelFloatInput | null,
  ttlClrdLnsInAmtChm?: ModelFloatInput | null,
  tmsIHvBrwdChm?: ModelFloatInput | null,
  tmsIHvLndChm?: ModelFloatInput | null,
  ttlLnInCrdSls?: ModelFloatInput | null,
  ttlLnOutCrdSls?: ModelFloatInput | null,
  blTimesCrdSls?: ModelFloatInput | null,
  blClrdtmsCrdSls?: ModelFloatInput | null,
  clrdNnvrBLCrdSls?: ModelFloatInput | null,
  actvLnsCrdSls?: ModelFloatInput | null,
  ttlActiveLnsInAmtCrdSls?: ModelFloatInput | null,
  ttlBLLoansInAmtCrdSls?: ModelFloatInput | null,
  ttlClrdLnsInAmtCrdSls?: ModelFloatInput | null,
  ttlActiveLnsOutAmtCrdSls?: ModelFloatInput | null,
  ttlBLLoansOutAmtCrdSls?: ModelFloatInput | null,
  ttlClrdLnsOutAmtCrdSls?: ModelFloatInput | null,
  tmsIHvBrwdCrdSls?: ModelFloatInput | null,
  tmsIHvLndCrdSls?: ModelFloatInput | null,
  TotalTymsBL?: ModelFloatInput | null,
  acActivenessStatus?: ModelStatusInput | null,
  blStatus?: ModelStatusInput | null,
  loanStatus?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSMAccountFilterInput | null > | null,
  or?: Array< ModelSMAccountFilterInput | null > | null,
  not?: ModelSMAccountFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSMAccountConnection = {
  __typename: "ModelSMAccountConnection",
  items?:  Array<SMAccount | null > | null,
  nextToken?: string | null,
};

export type ModelSMLoansCoveredFilterInput = {
  id?: ModelIDInput | null,
  loaneeid?: ModelIDInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  loanercontact?: ModelStringInput | null,
  loaneecontact?: ModelStringInput | null,
  repaymentPeriod?: ModelIntInput | null,
  advregnu?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSMLoansCoveredFilterInput | null > | null,
  or?: Array< ModelSMLoansCoveredFilterInput | null > | null,
  not?: ModelSMLoansCoveredFilterInput | null,
};

export type ModelSMLoansCoveredConnection = {
  __typename: "ModelSMLoansCoveredConnection",
  items?:  Array<SMLoansCovered | null > | null,
  nextToken?: string | null,
};

export type ModelSMNonLoansFilterInput = {
  id?: ModelIDInput | null,
  senderID?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  senderContact?: ModelStringInput | null,
  description?: ModelStringInput | null,
  receiverphonecontact?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSMNonLoansFilterInput | null > | null,
  or?: Array< ModelSMNonLoansFilterInput | null > | null,
  not?: ModelSMNonLoansFilterInput | null,
};

export type ModelSMNonLoansConnection = {
  __typename: "ModelSMNonLoansConnection",
  items?:  Array<SMNonLoans | null > | null,
  nextToken?: string | null,
};

export type ModelAgentFilterInput = {
  phonecontact?: ModelIDInput | null,
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ttlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  TtlFltIn?: ModelFloatInput | null,
  TtlFltOut?: ModelFloatInput | null,
  floatBal?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAgentFilterInput | null > | null,
  or?: Array< ModelAgentFilterInput | null > | null,
  not?: ModelAgentFilterInput | null,
};

export type ModelAgentConnection = {
  __typename: "ModelAgentConnection",
  items?:  Array<Agent | null > | null,
  nextToken?: string | null,
};

export type ModelFloatPurchaseFilterInput = {
  id?: ModelIDInput | null,
  agentphone?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  nationalid?: ModelStringInput | null,
  bankAdmid?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelFloatPurchaseFilterInput | null > | null,
  or?: Array< ModelFloatPurchaseFilterInput | null > | null,
  not?: ModelFloatPurchaseFilterInput | null,
};

export type ModelFloatPurchaseConnection = {
  __typename: "ModelFloatPurchaseConnection",
  items?:  Array<FloatPurchase | null > | null,
  nextToken?: string | null,
};

export type ModelFloatAddFilterInput = {
  id?: ModelIDInput | null,
  withdrawerid?: ModelStringInput | null,
  trnsactionCode?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  agentPhonecontact?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelFloatAddFilterInput | null > | null,
  or?: Array< ModelFloatAddFilterInput | null > | null,
  not?: ModelFloatAddFilterInput | null,
};

export type ModelFloatAddConnection = {
  __typename: "ModelFloatAddConnection",
  items?:  Array<FloatAdd | null > | null,
  nextToken?: string | null,
};

export type ModelFloatReductionFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  depositerid?: ModelStringInput | null,
  depositerPhn?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  agentNationalid?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelFloatReductionFilterInput | null > | null,
  or?: Array< ModelFloatReductionFilterInput | null > | null,
  not?: ModelFloatReductionFilterInput | null,
};

export type ModelFloatReductionConnection = {
  __typename: "ModelFloatReductionConnection",
  items?:  Array<FloatReduction | null > | null,
  nextToken?: string | null,
};

export type ModelAgentWithdrawalsFilterInput = {
  AgentPhone?: ModelStringInput | null,
  Amount?: ModelFloatInput | null,
  id?: ModelIDInput | null,
  bankAdmId?: ModelStringInput | null,
  agentNationalid?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAgentWithdrawalsFilterInput | null > | null,
  or?: Array< ModelAgentWithdrawalsFilterInput | null > | null,
  not?: ModelAgentWithdrawalsFilterInput | null,
};

export type ModelAgentWithdrawalsConnection = {
  __typename: "ModelAgentWithdrawalsConnection",
  items?:  Array<AgentWithdrawals | null > | null,
  nextToken?: string | null,
};

export type ModelSAgentFilterInput = {
  id?: ModelIDInput | null,
  saNationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  pw?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  actMFNdog?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  saBalance?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSAgentFilterInput | null > | null,
  or?: Array< ModelSAgentFilterInput | null > | null,
  not?: ModelSAgentFilterInput | null,
};

export type ModelSAgentConnection = {
  __typename: "ModelSAgentConnection",
  items?:  Array<SAgent | null > | null,
  nextToken?: string | null,
};

export type ModelSAgentWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  sagentphone?: ModelStringInput | null,
  sagentNatId?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankAdmid?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSAgentWithdrawalsFilterInput | null > | null,
  or?: Array< ModelSAgentWithdrawalsFilterInput | null > | null,
  not?: ModelSAgentWithdrawalsFilterInput | null,
};

export type ModelSAgentWithdrawalsConnection = {
  __typename: "ModelSAgentWithdrawalsConnection",
  items?:  Array<SAgentWithdrawals | null > | null,
  nextToken?: string | null,
};

export type ModelBankAdminFilterInput = {
  nationalid?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  BankAdmBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBankAdminFilterInput | null > | null,
  or?: Array< ModelBankAdminFilterInput | null > | null,
  not?: ModelBankAdminFilterInput | null,
};

export type ModelBankAdminConnection = {
  __typename: "ModelBankAdminConnection",
  items?:  Array<BankAdmin | null > | null,
  nextToken?: string | null,
};

export type ModelBankAdmWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  phoneContact?: ModelStringInput | null,
  bankAdmNatId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBankAdmWithdrawalsFilterInput | null > | null,
  or?: Array< ModelBankAdmWithdrawalsFilterInput | null > | null,
  not?: ModelBankAdmWithdrawalsFilterInput | null,
};

export type ModelBankAdmWithdrawalsConnection = {
  __typename: "ModelBankAdmWithdrawalsConnection",
  items?:  Array<BankAdmWithdrawals | null > | null,
  nextToken?: string | null,
};

export type ModelAdvocateFilterInput = {
  advregnu?: ModelIDInput | null,
  nationalid?: ModelStringInput | null,
  pwd?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  advBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAdvocateFilterInput | null > | null,
  or?: Array< ModelAdvocateFilterInput | null > | null,
  not?: ModelAdvocateFilterInput | null,
};

export type ModelAdvocateConnection = {
  __typename: "ModelAdvocateConnection",
  items?:  Array<Advocate | null > | null,
  nextToken?: string | null,
};

export type ModelAdvocateWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  phoneContact?: ModelStringInput | null,
  advregnu?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  advNatId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAdvocateWithdrawalsFilterInput | null > | null,
  or?: Array< ModelAdvocateWithdrawalsFilterInput | null > | null,
  not?: ModelAdvocateWithdrawalsFilterInput | null,
};

export type ModelAdvocateWithdrawalsConnection = {
  __typename: "ModelAdvocateWithdrawalsConnection",
  items?:  Array<AdvocateWithdrawals | null > | null,
  nextToken?: string | null,
};

export type ModelCompanyFilterInput = {
  AdminId?: ModelStringInput | null,
  phoneContact?: ModelStringInput | null,
  companyEmail?: ModelStringInput | null,
  termsNconditions?: ModelStringInput | null,
  alert?: ModelStringInput | null,
  about?: ModelStringInput | null,
  policy?: ModelStringInput | null,
  privacy?: ModelStringInput | null,
  recom?: ModelStringInput | null,
  pw1?: ModelStringInput | null,
  pw2?: ModelStringInput | null,
  agentwithdrawalFee?: ModelFloatInput | null,
  agentCom?: ModelFloatInput | null,
  sagentCom?: ModelFloatInput | null,
  companyCom?: ModelFloatInput | null,
  AdvCom?: ModelFloatInput | null,
  bankAdminCom?: ModelFloatInput | null,
  compComg?: ModelFloatInput | null,
  sawithdrawalFee?: ModelFloatInput | null,
  advuserwithdrawalFee?: ModelFloatInput | null,
  bankAdmuserwithdrawalFee?: ModelFloatInput | null,
  advocateCoverageFee?: ModelFloatInput | null,
  userTransferFee?: ModelFloatInput | null,
  userClearanceFee?: ModelFloatInput | null,
  searchAdFee?: ModelFloatInput | null,
  createBuzFee?: ModelFloatInput | null,
  crtCompAdsFee?: ModelFloatInput | null,
  crtParaAdsFee?: ModelFloatInput | null,
  companyEarningBal?: ModelFloatInput | null,
  companyEarning?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  agentEarning?: ModelFloatInput | null,
  saEarningBal?: ModelFloatInput | null,
  saarning?: ModelFloatInput | null,
  AdvEarningBal?: ModelFloatInput | null,
  AdvEarning?: ModelFloatInput | null,
  admEarningBal?: ModelFloatInput | null,
  admEarning?: ModelFloatInput | null,
  ttlUsrDep?: ModelFloatInput | null,
  ttlUserWthdrwl?: ModelFloatInput | null,
  agentFloatIn?: ModelFloatInput | null,
  agentFloatOut?: ModelFloatInput | null,
  ttlActiveUsers?: ModelFloatInput | null,
  ttlnactvUsrs?: ModelFloatInput | null,
  ttlBLUsrs?: ModelFloatInput | null,
  ttlKFNdgActv?: ModelFloatInput | null,
  ttlKFNdgInActv?: ModelFloatInput | null,
  ttlKNdgBLStts?: ModelFloatInput | null,
  ttlKFKbwActv?: ModelFloatInput | null,
  ttlKFKbwInActv?: ModelFloatInput | null,
  ttlKKbwBLStts?: ModelFloatInput | null,
  ttlKFAdvActv?: ModelFloatInput | null,
  ttlKFAdvInActv?: ModelFloatInput | null,
  ttlKAdvBLStts?: ModelFloatInput | null,
  ttlKFAdmActv?: ModelFloatInput | null,
  ttlKFAdmInActv?: ModelFloatInput | null,
  ttlKAdmBLStts?: ModelFloatInput | null,
  ttlSMLnsIn?: ModelFloatInput | null,
  ttlChmLnsIn?: ModelFloatInput | null,
  ttlSellerLnsIn?: ModelFloatInput | null,
  ttlSMLnsInActv?: ModelFloatInput | null,
  ttlChmLnsInActv?: ModelFloatInput | null,
  ttlSellerLnsInActv?: ModelFloatInput | null,
  ttlSMLnsInClrd?: ModelFloatInput | null,
  ttlChmLnsInClrd?: ModelFloatInput | null,
  ttlSellerLnsInClrd?: ModelFloatInput | null,
  ttlSMLnsInBl?: ModelFloatInput | null,
  ttlChmLnsInBl?: ModelFloatInput | null,
  ttlSellerLnsInBl?: ModelFloatInput | null,
  ttlSMLnsInBlThnClr?: ModelFloatInput | null,
  ttlChmLnsInBlThnClr?: ModelFloatInput | null,
  ttlSellerLnsInBlThnClr?: ModelFloatInput | null,
  ttlSMLnsInNvrBlThnClr?: ModelFloatInput | null,
  ttlChmLnsInNvrBlThnClr?: ModelFloatInput | null,
  ttlSellerLnsInNvrBlThnClr?: ModelFloatInput | null,
  ttlCompTrnsfrEarnings?: ModelFloatInput | null,
  ttlCompBLClrncfrEarnings?: ModelFloatInput | null,
  ttlCompCovEarnings?: ModelFloatInput | null,
  ttlCompEarnings?: ModelFloatInput | null,
  ttlKFNdogoTrnsactionEarnings?: ModelFloatInput | null,
  ttlKFKubwaTrnsactionEarnings?: ModelFloatInput | null,
  ttlKFAdvTrnsactionEarnings?: ModelFloatInput | null,
  ttlKFAdmTrnsactionEarnings?: ModelFloatInput | null,
  maxInterest?: ModelFloatInput | null,
  totalLnsRecovered?: ModelFloatInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items?:  Array<Company | null > | null,
  nextToken?: string | null,
};

export type ModelCovCreditSellerFilterInput = {
  id?: ModelIDInput | null,
  itemName?: ModelStringInput | null,
  itemSerialNumber?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  timestamp?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  advregnu?: ModelStringInput | null,
  advPhone?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCovCreditSellerFilterInput | null > | null,
  or?: Array< ModelCovCreditSellerFilterInput | null > | null,
  not?: ModelCovCreditSellerFilterInput | null,
};

export type ModelCovCreditSellerConnection = {
  __typename: "ModelCovCreditSellerConnection",
  items?:  Array<CovCreditSeller | null > | null,
  nextToken?: string | null,
};

export type ModelGroupFilterInput = {
  grpContact?: ModelIDInput | null,
  signitoryContact?: ModelStringInput | null,
  SignitoryNatid?: ModelStringInput | null,
  signitoryName?: ModelStringInput | null,
  grpName?: ModelStringInput | null,
  signitoryPW?: ModelStringInput | null,
  grpEmail?: ModelStringInput | null,
  grpBal?: ModelFloatInput | null,
  ttlGrpMembers?: ModelFloatInput | null,
  ttlLonsOut?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  ttlDpst?: ModelFloatInput | null,
  ttlWthdrwn?: ModelFloatInput | null,
  ttlBLMmbrs?: ModelFloatInput | null,
  ttlMmbrsWthActvLns?: ModelFloatInput | null,
  ttlMmbrsClrdNnvrBL?: ModelFloatInput | null,
  ttlMmbrsWithActvLns?: ModelFloatInput | null,
  ttlActiveLnsInAmt?: ModelFloatInput | null,
  ttlMmbrsBLLoansInAmt?: ModelFloatInput | null,
  ttlMmbrsClrdLnsInAmt?: ModelFloatInput | null,
  ttlClrdLnsOutAmt?: ModelFloatInput | null,
  tymsGrpHasLend?: ModelFloatInput | null,
  ttlLonAmountRecovered?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items?:  Array<Group | null > | null,
  nextToken?: string | null,
};

export type ModelGrpMembersFilterInput = {
  id?: ModelIDInput | null,
  groupContact?: ModelStringInput | null,
  memberContact?: ModelStringInput | null,
  memberNatId?: ModelStringInput | null,
  acBal?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGrpMembersFilterInput | null > | null,
  or?: Array< ModelGrpMembersFilterInput | null > | null,
  not?: ModelGrpMembersFilterInput | null,
};

export type ModelGrpMembersConnection = {
  __typename: "ModelGrpMembersConnection",
  items?:  Array<GrpMembers | null > | null,
  nextToken?: string | null,
};

export type ModelCvrdGroupLoansFilterInput = {
  id?: ModelIDInput | null,
  grpContact?: ModelStringInput | null,
  loaneeContact?: ModelStringInput | null,
  loaneeID?: ModelStringInput | null,
  repaymentPeriod?: ModelIntInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  advRegNu?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCvrdGroupLoansFilterInput | null > | null,
  or?: Array< ModelCvrdGroupLoansFilterInput | null > | null,
  not?: ModelCvrdGroupLoansFilterInput | null,
};

export type ModelCvrdGroupLoansConnection = {
  __typename: "ModelCvrdGroupLoansConnection",
  items?:  Array<CvrdGroupLoans | null > | null,
  nextToken?: string | null,
};

export type ModelGroupNonLoansFilterInput = {
  id?: ModelIDInput | null,
  grpContact?: ModelStringInput | null,
  recipientContact?: ModelStringInput | null,
  amountSent?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGroupNonLoansFilterInput | null > | null,
  or?: Array< ModelGroupNonLoansFilterInput | null > | null,
  not?: ModelGroupNonLoansFilterInput | null,
};

export type ModelGroupNonLoansConnection = {
  __typename: "ModelGroupNonLoansConnection",
  items?:  Array<GroupNonLoans | null > | null,
  nextToken?: string | null,
};

export type ModelGrpMembersContributionFilterInput = {
  id?: ModelIDInput | null,
  memberContact?: ModelStringInput | null,
  grpContact?: ModelStringInput | null,
  contriAmount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGrpMembersContributionFilterInput | null > | null,
  or?: Array< ModelGrpMembersContributionFilterInput | null > | null,
  not?: ModelGrpMembersContributionFilterInput | null,
};

export type ModelGrpMembersContributionConnection = {
  __typename: "ModelGrpMembersContributionConnection",
  items?:  Array<GrpMembersContribution | null > | null,
  nextToken?: string | null,
};

export type ModelAdvertisedSingleMemberLoansFilterInput = {
  id?: ModelIDInput | null,
  nameOfLoaner?: ModelStringInput | null,
  maximum?: ModelFloatInput | null,
  contact?: ModelStringInput | null,
  repaymentPeriod?: ModelStringInput | null,
  interest?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAdvertisedSingleMemberLoansFilterInput | null > | null,
  or?: Array< ModelAdvertisedSingleMemberLoansFilterInput | null > | null,
  not?: ModelAdvertisedSingleMemberLoansFilterInput | null,
};

export type ModelAdvertisedSingleMemberLoansConnection = {
  __typename: "ModelAdvertisedSingleMemberLoansConnection",
  items?:  Array<AdvertisedSingleMemberLoans | null > | null,
  nextToken?: string | null,
};

export type ModelAdvertisedChamaLoansFilterInput = {
  id?: ModelIDInput | null,
  nameOfLoaner?: ModelStringInput | null,
  maximum?: ModelFloatInput | null,
  contact?: ModelStringInput | null,
  repaymentPeriod?: ModelStringInput | null,
  interest?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAdvertisedChamaLoansFilterInput | null > | null,
  or?: Array< ModelAdvertisedChamaLoansFilterInput | null > | null,
  not?: ModelAdvertisedChamaLoansFilterInput | null,
};

export type ModelAdvertisedChamaLoansConnection = {
  __typename: "ModelAdvertisedChamaLoansConnection",
  items?:  Array<AdvertisedChamaLoans | null > | null,
  nextToken?: string | null,
};

export type ModelPaidMultipleAdsFilterInput = {
  id?: ModelIDInput | null,
  bizRegNo?: ModelStringInput | null,
  ownerNatId?: ModelStringInput | null,
  item?: ModelStringInput | null,
  nameOfSeller?: ModelStringInput | null,
  buzType?: ModelStringInput | null,
  nearByTown?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPaidMultipleAdsFilterInput | null > | null,
  or?: Array< ModelPaidMultipleAdsFilterInput | null > | null,
  not?: ModelPaidMultipleAdsFilterInput | null,
};

export type ModelPaidMultipleAdsConnection = {
  __typename: "ModelPaidMultipleAdsConnection",
  items?:  Array<PaidMultipleAds | null > | null,
  nextToken?: string | null,
};

export type ModelFreeBizAdsFilterInput = {
  id?: ModelIDInput | null,
  item?: ModelStringInput | null,
  nameOfSeller?: ModelStringInput | null,
  buzType?: ModelStringInput | null,
  nearByTown?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelFreeBizAdsFilterInput | null > | null,
  or?: Array< ModelFreeBizAdsFilterInput | null > | null,
  not?: ModelFreeBizAdsFilterInput | null,
};

export type ModelFreeBizAdsConnection = {
  __typename: "ModelFreeBizAdsConnection",
  items?:  Array<FreeBizAds | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyConditionInput = {
  eq?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  le?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  lt?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  ge?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  gt?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  between?: Array< ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null > | null,
  beginsWith?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
};

export type ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput = {
  loaneecontact?: string | null,
  status?: Status | null,
};

export type ModelCovCreditSellerSearchAdvCredSllrCompositeKeyConditionInput = {
  eq?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  le?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  lt?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  ge?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  gt?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  between?: Array< ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null > | null,
  beginsWith?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
};

export type ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput = {
  sellerContact?: string | null,
  buyerContact?: string | null,
};

export type ModelFloatKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CreateSMAccountMutationVariables = {
  input: CreateSMAccountInput,
  condition?: ModelSMAccountConditionInput | null,
};

export type CreateSMAccountMutation = {
  createSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    ttlLnInSM: number,
    ttlLnOutSM: number,
    ttlLoanRecovered: number,
    blTimesSM: number,
    blClrdtmsSM: number,
    clrdNnvrBLSM: number,
    actvLnsSM: number,
    ttlActiveLnsInAmtSM: number,
    ttlBLLoansInAmtSM: number,
    ttlClrdLnsInAmtSM: number,
    ttlActiveLnsOutAmtSM: number,
    ttlBLLoansOutAmtSM: number,
    ttlClrdLnsOutAmtSM: number,
    tmsIHvBrwdSM: number,
    tmsIHvLndSM: number,
    ttlDpstChm: number,
    ttlWithdrwlChm: number,
    ttlChmLnIn: number,
    blChmTimes: number,
    blChmClrdtms: number,
    clrdNnvrBLChm: number,
    actvLnsChm: number,
    ttlActiveLnsInAmtChm: number,
    ttlBLLoansInAmChmt: number,
    ttlClrdLnsInAmtChm: number,
    tmsIHvBrwdChm: number,
    tmsIHvLndChm: number,
    ttlLnInCrdSls: number,
    ttlLnOutCrdSls: number,
    blTimesCrdSls: number,
    blClrdtmsCrdSls: number,
    clrdNnvrBLCrdSls: number,
    actvLnsCrdSls: number,
    ttlActiveLnsInAmtCrdSls: number,
    ttlBLLoansInAmtCrdSls: number,
    ttlClrdLnsInAmtCrdSls: number,
    ttlActiveLnsOutAmtCrdSls: number,
    ttlBLLoansOutAmtCrdSls: number,
    ttlClrdLnsOutAmtCrdSls: number,
    tmsIHvBrwdCrdSls: number,
    tmsIHvLndCrdSls: number,
    TotalTymsBL: number,
    acActivenessStatus: Status,
    blStatus: Status,
    loanStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSMAccountMutationVariables = {
  input: UpdateSMAccountInput,
  condition?: ModelSMAccountConditionInput | null,
};

export type UpdateSMAccountMutation = {
  updateSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    ttlLnInSM: number,
    ttlLnOutSM: number,
    ttlLoanRecovered: number,
    blTimesSM: number,
    blClrdtmsSM: number,
    clrdNnvrBLSM: number,
    actvLnsSM: number,
    ttlActiveLnsInAmtSM: number,
    ttlBLLoansInAmtSM: number,
    ttlClrdLnsInAmtSM: number,
    ttlActiveLnsOutAmtSM: number,
    ttlBLLoansOutAmtSM: number,
    ttlClrdLnsOutAmtSM: number,
    tmsIHvBrwdSM: number,
    tmsIHvLndSM: number,
    ttlDpstChm: number,
    ttlWithdrwlChm: number,
    ttlChmLnIn: number,
    blChmTimes: number,
    blChmClrdtms: number,
    clrdNnvrBLChm: number,
    actvLnsChm: number,
    ttlActiveLnsInAmtChm: number,
    ttlBLLoansInAmChmt: number,
    ttlClrdLnsInAmtChm: number,
    tmsIHvBrwdChm: number,
    tmsIHvLndChm: number,
    ttlLnInCrdSls: number,
    ttlLnOutCrdSls: number,
    blTimesCrdSls: number,
    blClrdtmsCrdSls: number,
    clrdNnvrBLCrdSls: number,
    actvLnsCrdSls: number,
    ttlActiveLnsInAmtCrdSls: number,
    ttlBLLoansInAmtCrdSls: number,
    ttlClrdLnsInAmtCrdSls: number,
    ttlActiveLnsOutAmtCrdSls: number,
    ttlBLLoansOutAmtCrdSls: number,
    ttlClrdLnsOutAmtCrdSls: number,
    tmsIHvBrwdCrdSls: number,
    tmsIHvLndCrdSls: number,
    TotalTymsBL: number,
    acActivenessStatus: Status,
    blStatus: Status,
    loanStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSMAccountMutationVariables = {
  input: DeleteSMAccountInput,
  condition?: ModelSMAccountConditionInput | null,
};

export type DeleteSMAccountMutation = {
  deleteSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    ttlLnInSM: number,
    ttlLnOutSM: number,
    ttlLoanRecovered: number,
    blTimesSM: number,
    blClrdtmsSM: number,
    clrdNnvrBLSM: number,
    actvLnsSM: number,
    ttlActiveLnsInAmtSM: number,
    ttlBLLoansInAmtSM: number,
    ttlClrdLnsInAmtSM: number,
    ttlActiveLnsOutAmtSM: number,
    ttlBLLoansOutAmtSM: number,
    ttlClrdLnsOutAmtSM: number,
    tmsIHvBrwdSM: number,
    tmsIHvLndSM: number,
    ttlDpstChm: number,
    ttlWithdrwlChm: number,
    ttlChmLnIn: number,
    blChmTimes: number,
    blChmClrdtms: number,
    clrdNnvrBLChm: number,
    actvLnsChm: number,
    ttlActiveLnsInAmtChm: number,
    ttlBLLoansInAmChmt: number,
    ttlClrdLnsInAmtChm: number,
    tmsIHvBrwdChm: number,
    tmsIHvLndChm: number,
    ttlLnInCrdSls: number,
    ttlLnOutCrdSls: number,
    blTimesCrdSls: number,
    blClrdtmsCrdSls: number,
    clrdNnvrBLCrdSls: number,
    actvLnsCrdSls: number,
    ttlActiveLnsInAmtCrdSls: number,
    ttlBLLoansInAmtCrdSls: number,
    ttlClrdLnsInAmtCrdSls: number,
    ttlActiveLnsOutAmtCrdSls: number,
    ttlBLLoansOutAmtCrdSls: number,
    ttlClrdLnsOutAmtCrdSls: number,
    tmsIHvBrwdCrdSls: number,
    tmsIHvLndCrdSls: number,
    TotalTymsBL: number,
    acActivenessStatus: Status,
    blStatus: Status,
    loanStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSMLoansCoveredMutationVariables = {
  input: CreateSMLoansCoveredInput,
  condition?: ModelSMLoansCoveredConditionInput | null,
};

export type CreateSMLoansCoveredMutation = {
  createSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    loanercontact: string,
    loaneecontact: string,
    repaymentPeriod: number,
    advregnu?: string | null,
    timestamp: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSMLoansCoveredMutationVariables = {
  input: UpdateSMLoansCoveredInput,
  condition?: ModelSMLoansCoveredConditionInput | null,
};

export type UpdateSMLoansCoveredMutation = {
  updateSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    loanercontact: string,
    loaneecontact: string,
    repaymentPeriod: number,
    advregnu?: string | null,
    timestamp: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSMLoansCoveredMutationVariables = {
  input: DeleteSMLoansCoveredInput,
  condition?: ModelSMLoansCoveredConditionInput | null,
};

export type DeleteSMLoansCoveredMutation = {
  deleteSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    loanercontact: string,
    loaneecontact: string,
    repaymentPeriod: number,
    advregnu?: string | null,
    timestamp: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSMNonLoansMutationVariables = {
  input: CreateSMNonLoansInput,
  condition?: ModelSMNonLoansConditionInput | null,
};

export type CreateSMNonLoansMutation = {
  createSMNonLoans?:  {
    __typename: "SMNonLoans",
    id: string,
    senderID: string,
    amountgiven: number,
    senderContact: string,
    description?: string | null,
    receiverphonecontact: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSMNonLoansMutationVariables = {
  input: UpdateSMNonLoansInput,
  condition?: ModelSMNonLoansConditionInput | null,
};

export type UpdateSMNonLoansMutation = {
  updateSMNonLoans?:  {
    __typename: "SMNonLoans",
    id: string,
    senderID: string,
    amountgiven: number,
    senderContact: string,
    description?: string | null,
    receiverphonecontact: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSMNonLoansMutationVariables = {
  input: DeleteSMNonLoansInput,
  condition?: ModelSMNonLoansConditionInput | null,
};

export type DeleteSMNonLoansMutation = {
  deleteSMNonLoans?:  {
    __typename: "SMNonLoans",
    id: string,
    senderID: string,
    amountgiven: number,
    senderContact: string,
    description?: string | null,
    receiverphonecontact: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAgentMutationVariables = {
  input: CreateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type CreateAgentMutation = {
  createAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAgentMutationVariables = {
  input: UpdateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type UpdateAgentMutation = {
  updateAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAgentMutationVariables = {
  input: DeleteAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type DeleteAgentMutation = {
  deleteAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFloatPurchaseMutationVariables = {
  input: CreateFloatPurchaseInput,
  condition?: ModelFloatPurchaseConditionInput | null,
};

export type CreateFloatPurchaseMutation = {
  createFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    nationalid: string,
    bankAdmid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFloatPurchaseMutationVariables = {
  input: UpdateFloatPurchaseInput,
  condition?: ModelFloatPurchaseConditionInput | null,
};

export type UpdateFloatPurchaseMutation = {
  updateFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    nationalid: string,
    bankAdmid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFloatPurchaseMutationVariables = {
  input: DeleteFloatPurchaseInput,
  condition?: ModelFloatPurchaseConditionInput | null,
};

export type DeleteFloatPurchaseMutation = {
  deleteFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    nationalid: string,
    bankAdmid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFloatAddMutationVariables = {
  input: CreateFloatAddInput,
  condition?: ModelFloatAddConditionInput | null,
};

export type CreateFloatAddMutation = {
  createFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    trnsactionCode: string,
    amount: number,
    agentPhonecontact: string,
    sagentregno: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFloatAddMutationVariables = {
  input: UpdateFloatAddInput,
  condition?: ModelFloatAddConditionInput | null,
};

export type UpdateFloatAddMutation = {
  updateFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    trnsactionCode: string,
    amount: number,
    agentPhonecontact: string,
    sagentregno: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFloatAddMutationVariables = {
  input: DeleteFloatAddInput,
  condition?: ModelFloatAddConditionInput | null,
};

export type DeleteFloatAddMutation = {
  deleteFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    trnsactionCode: string,
    amount: number,
    agentPhonecontact: string,
    sagentregno: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFloatReductionMutationVariables = {
  input: CreateFloatReductionInput,
  condition?: ModelFloatReductionConditionInput | null,
};

export type CreateFloatReductionMutation = {
  createFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    depositerPhn: string,
    phonecontact: string,
    status: Status,
    agentNationalid: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFloatReductionMutationVariables = {
  input: UpdateFloatReductionInput,
  condition?: ModelFloatReductionConditionInput | null,
};

export type UpdateFloatReductionMutation = {
  updateFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    depositerPhn: string,
    phonecontact: string,
    status: Status,
    agentNationalid: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFloatReductionMutationVariables = {
  input: DeleteFloatReductionInput,
  condition?: ModelFloatReductionConditionInput | null,
};

export type DeleteFloatReductionMutation = {
  deleteFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    depositerPhn: string,
    phonecontact: string,
    status: Status,
    agentNationalid: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAgentWithdrawalsMutationVariables = {
  input: CreateAgentWithdrawalsInput,
  condition?: ModelAgentWithdrawalsConditionInput | null,
};

export type CreateAgentWithdrawalsMutation = {
  createAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    AgentPhone: string,
    Amount: number,
    id: string,
    bankAdmId?: string | null,
    agentNationalid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAgentWithdrawalsMutationVariables = {
  input: UpdateAgentWithdrawalsInput,
  condition?: ModelAgentWithdrawalsConditionInput | null,
};

export type UpdateAgentWithdrawalsMutation = {
  updateAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    AgentPhone: string,
    Amount: number,
    id: string,
    bankAdmId?: string | null,
    agentNationalid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAgentWithdrawalsMutationVariables = {
  input: DeleteAgentWithdrawalsInput,
  condition?: ModelAgentWithdrawalsConditionInput | null,
};

export type DeleteAgentWithdrawalsMutation = {
  deleteAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    AgentPhone: string,
    Amount: number,
    id: string,
    bankAdmId?: string | null,
    agentNationalid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSAgentMutationVariables = {
  input: CreateSAgentInput,
  condition?: ModelSAgentConditionInput | null,
};

export type CreateSAgentMutation = {
  createSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSAgentMutationVariables = {
  input: UpdateSAgentInput,
  condition?: ModelSAgentConditionInput | null,
};

export type UpdateSAgentMutation = {
  updateSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSAgentMutationVariables = {
  input: DeleteSAgentInput,
  condition?: ModelSAgentConditionInput | null,
};

export type DeleteSAgentMutation = {
  deleteSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSAgentWithdrawalsMutationVariables = {
  input: CreateSAgentWithdrawalsInput,
  condition?: ModelSAgentWithdrawalsConditionInput | null,
};

export type CreateSAgentWithdrawalsMutation = {
  createSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    sagentphone: string,
    sagentNatId: string,
    sagentregno: string,
    amount: number,
    bankAdmid?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSAgentWithdrawalsMutationVariables = {
  input: UpdateSAgentWithdrawalsInput,
  condition?: ModelSAgentWithdrawalsConditionInput | null,
};

export type UpdateSAgentWithdrawalsMutation = {
  updateSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    sagentphone: string,
    sagentNatId: string,
    sagentregno: string,
    amount: number,
    bankAdmid?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSAgentWithdrawalsMutationVariables = {
  input: DeleteSAgentWithdrawalsInput,
  condition?: ModelSAgentWithdrawalsConditionInput | null,
};

export type DeleteSAgentWithdrawalsMutation = {
  deleteSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    sagentphone: string,
    sagentNatId: string,
    sagentregno: string,
    amount: number,
    bankAdmid?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBankAdminMutationVariables = {
  input: CreateBankAdminInput,
  condition?: ModelBankAdminConditionInput | null,
};

export type CreateBankAdminMutation = {
  createBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBankAdminMutationVariables = {
  input: UpdateBankAdminInput,
  condition?: ModelBankAdminConditionInput | null,
};

export type UpdateBankAdminMutation = {
  updateBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBankAdminMutationVariables = {
  input: DeleteBankAdminInput,
  condition?: ModelBankAdminConditionInput | null,
};

export type DeleteBankAdminMutation = {
  deleteBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBankAdmWithdrawalsMutationVariables = {
  input: CreateBankAdmWithdrawalsInput,
  condition?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type CreateBankAdmWithdrawalsMutation = {
  createBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    phoneContact: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBankAdmWithdrawalsMutationVariables = {
  input: UpdateBankAdmWithdrawalsInput,
  condition?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type UpdateBankAdmWithdrawalsMutation = {
  updateBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    phoneContact: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBankAdmWithdrawalsMutationVariables = {
  input: DeleteBankAdmWithdrawalsInput,
  condition?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type DeleteBankAdmWithdrawalsMutation = {
  deleteBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    phoneContact: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdvocateMutationVariables = {
  input: CreateAdvocateInput,
  condition?: ModelAdvocateConditionInput | null,
};

export type CreateAdvocateMutation = {
  createAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdvocateMutationVariables = {
  input: UpdateAdvocateInput,
  condition?: ModelAdvocateConditionInput | null,
};

export type UpdateAdvocateMutation = {
  updateAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdvocateMutationVariables = {
  input: DeleteAdvocateInput,
  condition?: ModelAdvocateConditionInput | null,
};

export type DeleteAdvocateMutation = {
  deleteAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdvocateWithdrawalsMutationVariables = {
  input: CreateAdvocateWithdrawalsInput,
  condition?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type CreateAdvocateWithdrawalsMutation = {
  createAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    phoneContact: string,
    advregnu: string,
    amount: number,
    advNatId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdvocateWithdrawalsMutationVariables = {
  input: UpdateAdvocateWithdrawalsInput,
  condition?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type UpdateAdvocateWithdrawalsMutation = {
  updateAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    phoneContact: string,
    advregnu: string,
    amount: number,
    advNatId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdvocateWithdrawalsMutationVariables = {
  input: DeleteAdvocateWithdrawalsInput,
  condition?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type DeleteAdvocateWithdrawalsMutation = {
  deleteAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    phoneContact: string,
    advregnu: string,
    amount: number,
    advNatId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    compComg: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    advocateCoverageFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    searchAdFee: number,
    createBuzFee: number,
    crtCompAdsFee: number,
    crtParaAdsFee: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlnactvUsrs: number,
    ttlBLUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsIn: number,
    ttlChmLnsIn: number,
    ttlSellerLnsIn: number,
    ttlSMLnsInActv: number,
    ttlChmLnsInActv: number,
    ttlSellerLnsInActv: number,
    ttlSMLnsInClrd: number,
    ttlChmLnsInClrd: number,
    ttlSellerLnsInClrd: number,
    ttlSMLnsInBl: number,
    ttlChmLnsInBl: number,
    ttlSellerLnsInBl: number,
    ttlSMLnsInBlThnClr: number,
    ttlChmLnsInBlThnClr: number,
    ttlSellerLnsInBlThnClr: number,
    ttlSMLnsInNvrBlThnClr: number,
    ttlChmLnsInNvrBlThnClr: number,
    ttlSellerLnsInNvrBlThnClr: number,
    ttlCompTrnsfrEarnings: number,
    ttlCompBLClrncfrEarnings: number,
    ttlCompCovEarnings: number,
    ttlCompEarnings: number,
    ttlKFNdogoTrnsactionEarnings: number,
    ttlKFKubwaTrnsactionEarnings: number,
    ttlKFAdvTrnsactionEarnings: number,
    ttlKFAdmTrnsactionEarnings: number,
    maxInterest: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    compComg: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    advocateCoverageFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    searchAdFee: number,
    createBuzFee: number,
    crtCompAdsFee: number,
    crtParaAdsFee: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlnactvUsrs: number,
    ttlBLUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsIn: number,
    ttlChmLnsIn: number,
    ttlSellerLnsIn: number,
    ttlSMLnsInActv: number,
    ttlChmLnsInActv: number,
    ttlSellerLnsInActv: number,
    ttlSMLnsInClrd: number,
    ttlChmLnsInClrd: number,
    ttlSellerLnsInClrd: number,
    ttlSMLnsInBl: number,
    ttlChmLnsInBl: number,
    ttlSellerLnsInBl: number,
    ttlSMLnsInBlThnClr: number,
    ttlChmLnsInBlThnClr: number,
    ttlSellerLnsInBlThnClr: number,
    ttlSMLnsInNvrBlThnClr: number,
    ttlChmLnsInNvrBlThnClr: number,
    ttlSellerLnsInNvrBlThnClr: number,
    ttlCompTrnsfrEarnings: number,
    ttlCompBLClrncfrEarnings: number,
    ttlCompCovEarnings: number,
    ttlCompEarnings: number,
    ttlKFNdogoTrnsactionEarnings: number,
    ttlKFKubwaTrnsactionEarnings: number,
    ttlKFAdvTrnsactionEarnings: number,
    ttlKFAdmTrnsactionEarnings: number,
    maxInterest: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    compComg: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    advocateCoverageFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    searchAdFee: number,
    createBuzFee: number,
    crtCompAdsFee: number,
    crtParaAdsFee: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlnactvUsrs: number,
    ttlBLUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsIn: number,
    ttlChmLnsIn: number,
    ttlSellerLnsIn: number,
    ttlSMLnsInActv: number,
    ttlChmLnsInActv: number,
    ttlSellerLnsInActv: number,
    ttlSMLnsInClrd: number,
    ttlChmLnsInClrd: number,
    ttlSellerLnsInClrd: number,
    ttlSMLnsInBl: number,
    ttlChmLnsInBl: number,
    ttlSellerLnsInBl: number,
    ttlSMLnsInBlThnClr: number,
    ttlChmLnsInBlThnClr: number,
    ttlSellerLnsInBlThnClr: number,
    ttlSMLnsInNvrBlThnClr: number,
    ttlChmLnsInNvrBlThnClr: number,
    ttlSellerLnsInNvrBlThnClr: number,
    ttlCompTrnsfrEarnings: number,
    ttlCompBLClrncfrEarnings: number,
    ttlCompCovEarnings: number,
    ttlCompEarnings: number,
    ttlKFNdogoTrnsactionEarnings: number,
    ttlKFKubwaTrnsactionEarnings: number,
    ttlKFAdvTrnsactionEarnings: number,
    ttlKFAdmTrnsactionEarnings: number,
    maxInterest: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCovCreditSellerMutationVariables = {
  input: CreateCovCreditSellerInput,
  condition?: ModelCovCreditSellerConditionInput | null,
};

export type CreateCovCreditSellerMutation = {
  createCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName?: Array< string > | null,
    itemSerialNumber?: Array< string | null > | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timestamp: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    advPhone: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCovCreditSellerMutationVariables = {
  input: UpdateCovCreditSellerInput,
  condition?: ModelCovCreditSellerConditionInput | null,
};

export type UpdateCovCreditSellerMutation = {
  updateCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName?: Array< string > | null,
    itemSerialNumber?: Array< string | null > | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timestamp: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    advPhone: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCovCreditSellerMutationVariables = {
  input: DeleteCovCreditSellerInput,
  condition?: ModelCovCreditSellerConditionInput | null,
};

export type DeleteCovCreditSellerMutation = {
  deleteCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName?: Array< string > | null,
    itemSerialNumber?: Array< string | null > | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timestamp: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    advPhone: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    ttlLonsOut: number,
    description?: string | null,
    ttlDpst: number,
    ttlWthdrwn: number,
    ttlBLMmbrs: number,
    ttlMmbrsWthActvLns: number,
    ttlMmbrsClrdNnvrBL: number,
    ttlMmbrsWithActvLns: number,
    ttlActiveLnsInAmt: number,
    ttlMmbrsBLLoansInAmt: number,
    ttlMmbrsClrdLnsInAmt: number,
    ttlClrdLnsOutAmt: number,
    tymsGrpHasLend: number,
    ttlLonAmountRecovered?: number | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    ttlLonsOut: number,
    description?: string | null,
    ttlDpst: number,
    ttlWthdrwn: number,
    ttlBLMmbrs: number,
    ttlMmbrsWthActvLns: number,
    ttlMmbrsClrdNnvrBL: number,
    ttlMmbrsWithActvLns: number,
    ttlActiveLnsInAmt: number,
    ttlMmbrsBLLoansInAmt: number,
    ttlMmbrsClrdLnsInAmt: number,
    ttlClrdLnsOutAmt: number,
    tymsGrpHasLend: number,
    ttlLonAmountRecovered?: number | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    ttlLonsOut: number,
    description?: string | null,
    ttlDpst: number,
    ttlWthdrwn: number,
    ttlBLMmbrs: number,
    ttlMmbrsWthActvLns: number,
    ttlMmbrsClrdNnvrBL: number,
    ttlMmbrsWithActvLns: number,
    ttlActiveLnsInAmt: number,
    ttlMmbrsBLLoansInAmt: number,
    ttlMmbrsClrdLnsInAmt: number,
    ttlClrdLnsOutAmt: number,
    tymsGrpHasLend: number,
    ttlLonAmountRecovered?: number | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGrpMembersMutationVariables = {
  input: CreateGrpMembersInput,
  condition?: ModelGrpMembersConditionInput | null,
};

export type CreateGrpMembersMutation = {
  createGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGrpMembersMutationVariables = {
  input: UpdateGrpMembersInput,
  condition?: ModelGrpMembersConditionInput | null,
};

export type UpdateGrpMembersMutation = {
  updateGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGrpMembersMutationVariables = {
  input: DeleteGrpMembersInput,
  condition?: ModelGrpMembersConditionInput | null,
};

export type DeleteGrpMembersMutation = {
  deleteGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCvrdGroupLoansMutationVariables = {
  input: CreateCvrdGroupLoansInput,
  condition?: ModelCvrdGroupLoansConditionInput | null,
};

export type CreateCvrdGroupLoansMutation = {
  createCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    timestamp: number,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCvrdGroupLoansMutationVariables = {
  input: UpdateCvrdGroupLoansInput,
  condition?: ModelCvrdGroupLoansConditionInput | null,
};

export type UpdateCvrdGroupLoansMutation = {
  updateCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    timestamp: number,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCvrdGroupLoansMutationVariables = {
  input: DeleteCvrdGroupLoansInput,
  condition?: ModelCvrdGroupLoansConditionInput | null,
};

export type DeleteCvrdGroupLoansMutation = {
  deleteCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    timestamp: number,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupNonLoansMutationVariables = {
  input: CreateGroupNonLoansInput,
  condition?: ModelGroupNonLoansConditionInput | null,
};

export type CreateGroupNonLoansMutation = {
  createGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientContact: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupNonLoansMutationVariables = {
  input: UpdateGroupNonLoansInput,
  condition?: ModelGroupNonLoansConditionInput | null,
};

export type UpdateGroupNonLoansMutation = {
  updateGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientContact: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupNonLoansMutationVariables = {
  input: DeleteGroupNonLoansInput,
  condition?: ModelGroupNonLoansConditionInput | null,
};

export type DeleteGroupNonLoansMutation = {
  deleteGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientContact: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGrpMembersContributionMutationVariables = {
  input: CreateGrpMembersContributionInput,
  condition?: ModelGrpMembersContributionConditionInput | null,
};

export type CreateGrpMembersContributionMutation = {
  createGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id?: string | null,
    memberContact: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGrpMembersContributionMutationVariables = {
  input: UpdateGrpMembersContributionInput,
  condition?: ModelGrpMembersContributionConditionInput | null,
};

export type UpdateGrpMembersContributionMutation = {
  updateGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id?: string | null,
    memberContact: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGrpMembersContributionMutationVariables = {
  input: DeleteGrpMembersContributionInput,
  condition?: ModelGrpMembersContributionConditionInput | null,
};

export type DeleteGrpMembersContributionMutation = {
  deleteGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id?: string | null,
    memberContact: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdvertisedSingleMemberLoansMutationVariables = {
  input: CreateAdvertisedSingleMemberLoansInput,
  condition?: ModelAdvertisedSingleMemberLoansConditionInput | null,
};

export type CreateAdvertisedSingleMemberLoansMutation = {
  createAdvertisedSingleMemberLoans?:  {
    __typename: "AdvertisedSingleMemberLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdvertisedSingleMemberLoansMutationVariables = {
  input: UpdateAdvertisedSingleMemberLoansInput,
  condition?: ModelAdvertisedSingleMemberLoansConditionInput | null,
};

export type UpdateAdvertisedSingleMemberLoansMutation = {
  updateAdvertisedSingleMemberLoans?:  {
    __typename: "AdvertisedSingleMemberLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdvertisedSingleMemberLoansMutationVariables = {
  input: DeleteAdvertisedSingleMemberLoansInput,
  condition?: ModelAdvertisedSingleMemberLoansConditionInput | null,
};

export type DeleteAdvertisedSingleMemberLoansMutation = {
  deleteAdvertisedSingleMemberLoans?:  {
    __typename: "AdvertisedSingleMemberLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdvertisedChamaLoansMutationVariables = {
  input: CreateAdvertisedChamaLoansInput,
  condition?: ModelAdvertisedChamaLoansConditionInput | null,
};

export type CreateAdvertisedChamaLoansMutation = {
  createAdvertisedChamaLoans?:  {
    __typename: "AdvertisedChamaLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdvertisedChamaLoansMutationVariables = {
  input: UpdateAdvertisedChamaLoansInput,
  condition?: ModelAdvertisedChamaLoansConditionInput | null,
};

export type UpdateAdvertisedChamaLoansMutation = {
  updateAdvertisedChamaLoans?:  {
    __typename: "AdvertisedChamaLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdvertisedChamaLoansMutationVariables = {
  input: DeleteAdvertisedChamaLoansInput,
  condition?: ModelAdvertisedChamaLoansConditionInput | null,
};

export type DeleteAdvertisedChamaLoansMutation = {
  deleteAdvertisedChamaLoans?:  {
    __typename: "AdvertisedChamaLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePaidMultipleAdsMutationVariables = {
  input: CreatePaidMultipleAdsInput,
  condition?: ModelPaidMultipleAdsConditionInput | null,
};

export type CreatePaidMultipleAdsMutation = {
  createPaidMultipleAds?:  {
    __typename: "PaidMultipleAds",
    id: string,
    bizRegNo: string,
    ownerNatId: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    latitude: number,
    longitude: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaidMultipleAdsMutationVariables = {
  input: UpdatePaidMultipleAdsInput,
  condition?: ModelPaidMultipleAdsConditionInput | null,
};

export type UpdatePaidMultipleAdsMutation = {
  updatePaidMultipleAds?:  {
    __typename: "PaidMultipleAds",
    id: string,
    bizRegNo: string,
    ownerNatId: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    latitude: number,
    longitude: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePaidMultipleAdsMutationVariables = {
  input: DeletePaidMultipleAdsInput,
  condition?: ModelPaidMultipleAdsConditionInput | null,
};

export type DeletePaidMultipleAdsMutation = {
  deletePaidMultipleAds?:  {
    __typename: "PaidMultipleAds",
    id: string,
    bizRegNo: string,
    ownerNatId: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    latitude: number,
    longitude: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFreeBizAdsMutationVariables = {
  input: CreateFreeBizAdsInput,
  condition?: ModelFreeBizAdsConditionInput | null,
};

export type CreateFreeBizAdsMutation = {
  createFreeBizAds?:  {
    __typename: "FreeBizAds",
    id: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFreeBizAdsMutationVariables = {
  input: UpdateFreeBizAdsInput,
  condition?: ModelFreeBizAdsConditionInput | null,
};

export type UpdateFreeBizAdsMutation = {
  updateFreeBizAds?:  {
    __typename: "FreeBizAds",
    id: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFreeBizAdsMutationVariables = {
  input: DeleteFreeBizAdsInput,
  condition?: ModelFreeBizAdsConditionInput | null,
};

export type DeleteFreeBizAdsMutation = {
  deleteFreeBizAds?:  {
    __typename: "FreeBizAds",
    id: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSMAccountQueryVariables = {
  nationalid: string,
};

export type GetSMAccountQuery = {
  getSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    ttlLnInSM: number,
    ttlLnOutSM: number,
    ttlLoanRecovered: number,
    blTimesSM: number,
    blClrdtmsSM: number,
    clrdNnvrBLSM: number,
    actvLnsSM: number,
    ttlActiveLnsInAmtSM: number,
    ttlBLLoansInAmtSM: number,
    ttlClrdLnsInAmtSM: number,
    ttlActiveLnsOutAmtSM: number,
    ttlBLLoansOutAmtSM: number,
    ttlClrdLnsOutAmtSM: number,
    tmsIHvBrwdSM: number,
    tmsIHvLndSM: number,
    ttlDpstChm: number,
    ttlWithdrwlChm: number,
    ttlChmLnIn: number,
    blChmTimes: number,
    blChmClrdtms: number,
    clrdNnvrBLChm: number,
    actvLnsChm: number,
    ttlActiveLnsInAmtChm: number,
    ttlBLLoansInAmChmt: number,
    ttlClrdLnsInAmtChm: number,
    tmsIHvBrwdChm: number,
    tmsIHvLndChm: number,
    ttlLnInCrdSls: number,
    ttlLnOutCrdSls: number,
    blTimesCrdSls: number,
    blClrdtmsCrdSls: number,
    clrdNnvrBLCrdSls: number,
    actvLnsCrdSls: number,
    ttlActiveLnsInAmtCrdSls: number,
    ttlBLLoansInAmtCrdSls: number,
    ttlClrdLnsInAmtCrdSls: number,
    ttlActiveLnsOutAmtCrdSls: number,
    ttlBLLoansOutAmtCrdSls: number,
    ttlClrdLnsOutAmtCrdSls: number,
    tmsIHvBrwdCrdSls: number,
    tmsIHvLndCrdSls: number,
    TotalTymsBL: number,
    acActivenessStatus: Status,
    blStatus: Status,
    loanStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSMAccountsQueryVariables = {
  nationalid?: string | null,
  filter?: ModelSMAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSMAccountsQuery = {
  listSMAccounts?:  {
    __typename: "ModelSMAccountConnection",
    items?:  Array< {
      __typename: "SMAccount",
      nationalid: string,
      name: string,
      phonecontact: string,
      awsemail: string,
      balance: number,
      pw: string,
      loanAcceptanceCode: string,
      ttlDpstSM: number,
      TtlWthdrwnSM: number,
      ttlLnInSM: number,
      ttlLnOutSM: number,
      ttlLoanRecovered: number,
      blTimesSM: number,
      blClrdtmsSM: number,
      clrdNnvrBLSM: number,
      actvLnsSM: number,
      ttlActiveLnsInAmtSM: number,
      ttlBLLoansInAmtSM: number,
      ttlClrdLnsInAmtSM: number,
      ttlActiveLnsOutAmtSM: number,
      ttlBLLoansOutAmtSM: number,
      ttlClrdLnsOutAmtSM: number,
      tmsIHvBrwdSM: number,
      tmsIHvLndSM: number,
      ttlDpstChm: number,
      ttlWithdrwlChm: number,
      ttlChmLnIn: number,
      blChmTimes: number,
      blChmClrdtms: number,
      clrdNnvrBLChm: number,
      actvLnsChm: number,
      ttlActiveLnsInAmtChm: number,
      ttlBLLoansInAmChmt: number,
      ttlClrdLnsInAmtChm: number,
      tmsIHvBrwdChm: number,
      tmsIHvLndChm: number,
      ttlLnInCrdSls: number,
      ttlLnOutCrdSls: number,
      blTimesCrdSls: number,
      blClrdtmsCrdSls: number,
      clrdNnvrBLCrdSls: number,
      actvLnsCrdSls: number,
      ttlActiveLnsInAmtCrdSls: number,
      ttlBLLoansInAmtCrdSls: number,
      ttlClrdLnsInAmtCrdSls: number,
      ttlActiveLnsOutAmtCrdSls: number,
      ttlBLLoansOutAmtCrdSls: number,
      ttlClrdLnsOutAmtCrdSls: number,
      tmsIHvBrwdCrdSls: number,
      tmsIHvLndCrdSls: number,
      TotalTymsBL: number,
      acActivenessStatus: Status,
      blStatus: Status,
      loanStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSMLoansCoveredQueryVariables = {
  id: string,
};

export type GetSMLoansCoveredQuery = {
  getSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    loanercontact: string,
    loaneecontact: string,
    repaymentPeriod: number,
    advregnu?: string | null,
    timestamp: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSMLoansCoveredsQueryVariables = {
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSMLoansCoveredsQuery = {
  listSMLoansCovereds?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      loanercontact: string,
      loaneecontact: string,
      repaymentPeriod: number,
      advregnu?: string | null,
      timestamp: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSMNonLoansQueryVariables = {
  id: string,
};

export type GetSMNonLoansQuery = {
  getSMNonLoans?:  {
    __typename: "SMNonLoans",
    id: string,
    senderID: string,
    amountgiven: number,
    senderContact: string,
    description?: string | null,
    receiverphonecontact: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSMNonLoansQueryVariables = {
  filter?: ModelSMNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSMNonLoansQuery = {
  listSMNonLoans?:  {
    __typename: "ModelSMNonLoansConnection",
    items?:  Array< {
      __typename: "SMNonLoans",
      id: string,
      senderID: string,
      amountgiven: number,
      senderContact: string,
      description?: string | null,
      receiverphonecontact: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAgentQueryVariables = {
  phonecontact: string,
};

export type GetAgentQuery = {
  getAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAgentsQueryVariables = {
  phonecontact?: string | null,
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAgentsQuery = {
  listAgents?:  {
    __typename: "ModelAgentConnection",
    items?:  Array< {
      __typename: "Agent",
      phonecontact: string,
      nationalid: string,
      name: string,
      ttlEarnings: number,
      pw: string,
      email: string,
      sagentregno: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFloatPurchaseQueryVariables = {
  id: string,
};

export type GetFloatPurchaseQuery = {
  getFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    nationalid: string,
    bankAdmid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFloatPurchasesQueryVariables = {
  filter?: ModelFloatPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFloatPurchasesQuery = {
  listFloatPurchases?:  {
    __typename: "ModelFloatPurchaseConnection",
    items?:  Array< {
      __typename: "FloatPurchase",
      id?: string | null,
      agentphone: string,
      amount: number,
      nationalid: string,
      bankAdmid: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFloatAddQueryVariables = {
  id: string,
};

export type GetFloatAddQuery = {
  getFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    trnsactionCode: string,
    amount: number,
    agentPhonecontact: string,
    sagentregno: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFloatAddsQueryVariables = {
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFloatAddsQuery = {
  listFloatAdds?:  {
    __typename: "ModelFloatAddConnection",
    items?:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      trnsactionCode: string,
      amount: number,
      agentPhonecontact: string,
      sagentregno: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFloatReductionQueryVariables = {
  id: string,
};

export type GetFloatReductionQuery = {
  getFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    depositerPhn: string,
    phonecontact: string,
    status: Status,
    agentNationalid: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFloatReductionsQueryVariables = {
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFloatReductionsQuery = {
  listFloatReductions?:  {
    __typename: "ModelFloatReductionConnection",
    items?:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      depositerPhn: string,
      phonecontact: string,
      status: Status,
      agentNationalid: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAgentWithdrawalsQueryVariables = {
  id: string,
};

export type GetAgentWithdrawalsQuery = {
  getAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    AgentPhone: string,
    Amount: number,
    id: string,
    bankAdmId?: string | null,
    agentNationalid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAgentWithdrawalsQueryVariables = {
  filter?: ModelAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAgentWithdrawalsQuery = {
  listAgentWithdrawals?:  {
    __typename: "ModelAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "AgentWithdrawals",
      AgentPhone: string,
      Amount: number,
      id: string,
      bankAdmId?: string | null,
      agentNationalid: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSAgentQueryVariables = {
  id: string,
};

export type GetSAgentQuery = {
  getSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSAgentsQueryVariables = {
  filter?: ModelSAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSAgentsQuery = {
  listSAgents?:  {
    __typename: "ModelSAgentConnection",
    items?:  Array< {
      __typename: "SAgent",
      id: string,
      saNationalid: string,
      name: string,
      phonecontact: string,
      pw: string,
      TtlEarnings: number,
      actMFNdog: number,
      email: string,
      saBalance: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSAgentWithdrawalsQueryVariables = {
  id: string,
};

export type GetSAgentWithdrawalsQuery = {
  getSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    sagentphone: string,
    sagentNatId: string,
    sagentregno: string,
    amount: number,
    bankAdmid?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSAgentWithdrawalsQueryVariables = {
  filter?: ModelSAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSAgentWithdrawalsQuery = {
  listSAgentWithdrawals?:  {
    __typename: "ModelSAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      sagentphone: string,
      sagentNatId: string,
      sagentregno: string,
      amount: number,
      bankAdmid?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBankAdminQueryVariables = {
  nationalid: string,
};

export type GetBankAdminQuery = {
  getBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBankAdminsQueryVariables = {
  nationalid?: string | null,
  filter?: ModelBankAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBankAdminsQuery = {
  listBankAdmins?:  {
    __typename: "ModelBankAdminConnection",
    items?:  Array< {
      __typename: "BankAdmin",
      nationalid: string,
      name: string,
      phonecontact: string,
      TtlEarnings: number,
      pw: string,
      BankAdmBal: number,
      email: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBankAdmWithdrawalsQueryVariables = {
  id: string,
};

export type GetBankAdmWithdrawalsQuery = {
  getBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    phoneContact: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBankAdmWithdrawalsQueryVariables = {
  filter?: ModelBankAdmWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBankAdmWithdrawalsQuery = {
  listBankAdmWithdrawals?:  {
    __typename: "ModelBankAdmWithdrawalsConnection",
    items?:  Array< {
      __typename: "BankAdmWithdrawals",
      id: string,
      phoneContact: string,
      bankAdmNatId: string,
      amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAdvocateQueryVariables = {
  advregnu: string,
};

export type GetAdvocateQuery = {
  getAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdvocatesQueryVariables = {
  advregnu?: string | null,
  filter?: ModelAdvocateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAdvocatesQuery = {
  listAdvocates?:  {
    __typename: "ModelAdvocateConnection",
    items?:  Array< {
      __typename: "Advocate",
      advregnu: string,
      nationalid: string,
      pwd: string,
      name: string,
      phonecontact: string,
      TtlEarnings: number,
      advBal: number,
      email: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAdvocateWithdrawalsQueryVariables = {
  id: string,
};

export type GetAdvocateWithdrawalsQuery = {
  getAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    phoneContact: string,
    advregnu: string,
    amount: number,
    advNatId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdvocateWithdrawalsQueryVariables = {
  filter?: ModelAdvocateWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdvocateWithdrawalsQuery = {
  listAdvocateWithdrawals?:  {
    __typename: "ModelAdvocateWithdrawalsConnection",
    items?:  Array< {
      __typename: "AdvocateWithdrawals",
      id: string,
      phoneContact: string,
      advregnu: string,
      amount: number,
      advNatId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  AdminId: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    compComg: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    advocateCoverageFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    searchAdFee: number,
    createBuzFee: number,
    crtCompAdsFee: number,
    crtParaAdsFee: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlnactvUsrs: number,
    ttlBLUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsIn: number,
    ttlChmLnsIn: number,
    ttlSellerLnsIn: number,
    ttlSMLnsInActv: number,
    ttlChmLnsInActv: number,
    ttlSellerLnsInActv: number,
    ttlSMLnsInClrd: number,
    ttlChmLnsInClrd: number,
    ttlSellerLnsInClrd: number,
    ttlSMLnsInBl: number,
    ttlChmLnsInBl: number,
    ttlSellerLnsInBl: number,
    ttlSMLnsInBlThnClr: number,
    ttlChmLnsInBlThnClr: number,
    ttlSellerLnsInBlThnClr: number,
    ttlSMLnsInNvrBlThnClr: number,
    ttlChmLnsInNvrBlThnClr: number,
    ttlSellerLnsInNvrBlThnClr: number,
    ttlCompTrnsfrEarnings: number,
    ttlCompBLClrncfrEarnings: number,
    ttlCompCovEarnings: number,
    ttlCompEarnings: number,
    ttlKFNdogoTrnsactionEarnings: number,
    ttlKFKubwaTrnsactionEarnings: number,
    ttlKFAdvTrnsactionEarnings: number,
    ttlKFAdmTrnsactionEarnings: number,
    maxInterest: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompaniesQueryVariables = {
  AdminId?: string | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items?:  Array< {
      __typename: "Company",
      AdminId: string,
      phoneContact: string,
      companyEmail: string,
      termsNconditions: string,
      alert: string,
      about: string,
      policy: string,
      privacy: string,
      recom: string,
      pw1: string,
      pw2: string,
      agentwithdrawalFee: number,
      agentCom: number,
      sagentCom: number,
      companyCom: number,
      AdvCom: number,
      bankAdminCom: number,
      compComg: number,
      sawithdrawalFee: number,
      advuserwithdrawalFee: number,
      bankAdmuserwithdrawalFee: number,
      advocateCoverageFee: number,
      userTransferFee: number,
      userClearanceFee: number,
      searchAdFee: number,
      createBuzFee: number,
      crtCompAdsFee: number,
      crtParaAdsFee: number,
      companyEarningBal: number,
      companyEarning: number,
      agentEarningBal: number,
      agentEarning: number,
      saEarningBal: number,
      saarning: number,
      AdvEarningBal: number,
      AdvEarning: number,
      admEarningBal: number,
      admEarning: number,
      ttlUsrDep: number,
      ttlUserWthdrwl?: number | null,
      agentFloatIn: number,
      agentFloatOut: number,
      ttlActiveUsers: number,
      ttlnactvUsrs: number,
      ttlBLUsrs: number,
      ttlKFNdgActv: number,
      ttlKFNdgInActv: number,
      ttlKNdgBLStts: number,
      ttlKFKbwActv: number,
      ttlKFKbwInActv: number,
      ttlKKbwBLStts: number,
      ttlKFAdvActv: number,
      ttlKFAdvInActv: number,
      ttlKAdvBLStts: number,
      ttlKFAdmActv: number,
      ttlKFAdmInActv: number,
      ttlKAdmBLStts: number,
      ttlSMLnsIn: number,
      ttlChmLnsIn: number,
      ttlSellerLnsIn: number,
      ttlSMLnsInActv: number,
      ttlChmLnsInActv: number,
      ttlSellerLnsInActv: number,
      ttlSMLnsInClrd: number,
      ttlChmLnsInClrd: number,
      ttlSellerLnsInClrd: number,
      ttlSMLnsInBl: number,
      ttlChmLnsInBl: number,
      ttlSellerLnsInBl: number,
      ttlSMLnsInBlThnClr: number,
      ttlChmLnsInBlThnClr: number,
      ttlSellerLnsInBlThnClr: number,
      ttlSMLnsInNvrBlThnClr: number,
      ttlChmLnsInNvrBlThnClr: number,
      ttlSellerLnsInNvrBlThnClr: number,
      ttlCompTrnsfrEarnings: number,
      ttlCompBLClrncfrEarnings: number,
      ttlCompCovEarnings: number,
      ttlCompEarnings: number,
      ttlKFNdogoTrnsactionEarnings: number,
      ttlKFKubwaTrnsactionEarnings: number,
      ttlKFAdvTrnsactionEarnings: number,
      ttlKFAdmTrnsactionEarnings: number,
      maxInterest: number,
      totalLnsRecovered: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCovCreditSellerQueryVariables = {
  id: string,
};

export type GetCovCreditSellerQuery = {
  getCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName?: Array< string > | null,
    itemSerialNumber?: Array< string | null > | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timestamp: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    advPhone: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCovCreditSellersQueryVariables = {
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCovCreditSellersQuery = {
  listCovCreditSellers?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName?: Array< string > | null,
      itemSerialNumber?: Array< string | null > | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timestamp: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      advPhone: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  grpContact: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    ttlLonsOut: number,
    description?: string | null,
    ttlDpst: number,
    ttlWthdrwn: number,
    ttlBLMmbrs: number,
    ttlMmbrsWthActvLns: number,
    ttlMmbrsClrdNnvrBL: number,
    ttlMmbrsWithActvLns: number,
    ttlActiveLnsInAmt: number,
    ttlMmbrsBLLoansInAmt: number,
    ttlMmbrsClrdLnsInAmt: number,
    ttlClrdLnsOutAmt: number,
    tymsGrpHasLend: number,
    ttlLonAmountRecovered?: number | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  grpContact?: string | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items?:  Array< {
      __typename: "Group",
      grpContact: string,
      signitoryContact: string,
      SignitoryNatid: string,
      signitoryName: string,
      grpName: string,
      signitoryPW: string,
      grpEmail: string,
      grpBal: number,
      ttlGrpMembers: number,
      ttlLonsOut: number,
      description?: string | null,
      ttlDpst: number,
      ttlWthdrwn: number,
      ttlBLMmbrs: number,
      ttlMmbrsWthActvLns: number,
      ttlMmbrsClrdNnvrBL: number,
      ttlMmbrsWithActvLns: number,
      ttlActiveLnsInAmt: number,
      ttlMmbrsBLLoansInAmt: number,
      ttlMmbrsClrdLnsInAmt: number,
      ttlClrdLnsOutAmt: number,
      tymsGrpHasLend: number,
      ttlLonAmountRecovered?: number | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGrpMembersQueryVariables = {
  id: string,
};

export type GetGrpMembersQuery = {
  getGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGrpMembersQueryVariables = {
  filter?: ModelGrpMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGrpMembersQuery = {
  listGrpMembers?:  {
    __typename: "ModelGrpMembersConnection",
    items?:  Array< {
      __typename: "GrpMembers",
      id: string,
      groupContact: string,
      memberContact: string,
      memberNatId: string,
      acBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCvrdGroupLoansQueryVariables = {
  id: string,
};

export type GetCvrdGroupLoansQuery = {
  getCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    timestamp: number,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCvrdGroupLoansQueryVariables = {
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCvrdGroupLoansQuery = {
  listCvrdGroupLoans?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      timestamp: number,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGroupNonLoansQueryVariables = {
  id: string,
};

export type GetGroupNonLoansQuery = {
  getGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientContact: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupNonLoansQueryVariables = {
  filter?: ModelGroupNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupNonLoansQuery = {
  listGroupNonLoans?:  {
    __typename: "ModelGroupNonLoansConnection",
    items?:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientContact: string,
      amountSent: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGrpMembersContributionQueryVariables = {
  id: string,
};

export type GetGrpMembersContributionQuery = {
  getGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id?: string | null,
    memberContact: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGrpMembersContributionsQueryVariables = {
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGrpMembersContributionsQuery = {
  listGrpMembersContributions?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items?:  Array< {
      __typename: "GrpMembersContribution",
      id?: string | null,
      memberContact: string,
      grpContact: string,
      contriAmount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAdvertisedSingleMemberLoansQueryVariables = {
  id: string,
};

export type GetAdvertisedSingleMemberLoansQuery = {
  getAdvertisedSingleMemberLoans?:  {
    __typename: "AdvertisedSingleMemberLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdvertisedSingleMemberLoansQueryVariables = {
  filter?: ModelAdvertisedSingleMemberLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdvertisedSingleMemberLoansQuery = {
  listAdvertisedSingleMemberLoans?:  {
    __typename: "ModelAdvertisedSingleMemberLoansConnection",
    items?:  Array< {
      __typename: "AdvertisedSingleMemberLoans",
      id: string,
      nameOfLoaner: string,
      maximum: number,
      contact: string,
      repaymentPeriod: string,
      interest: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAdvertisedChamaLoansQueryVariables = {
  id: string,
};

export type GetAdvertisedChamaLoansQuery = {
  getAdvertisedChamaLoans?:  {
    __typename: "AdvertisedChamaLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdvertisedChamaLoansQueryVariables = {
  filter?: ModelAdvertisedChamaLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdvertisedChamaLoansQuery = {
  listAdvertisedChamaLoans?:  {
    __typename: "ModelAdvertisedChamaLoansConnection",
    items?:  Array< {
      __typename: "AdvertisedChamaLoans",
      id: string,
      nameOfLoaner: string,
      maximum: number,
      contact: string,
      repaymentPeriod: string,
      interest: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPaidMultipleAdsQueryVariables = {
  id: string,
};

export type GetPaidMultipleAdsQuery = {
  getPaidMultipleAds?:  {
    __typename: "PaidMultipleAds",
    id: string,
    bizRegNo: string,
    ownerNatId: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    latitude: number,
    longitude: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPaidMultipleAdsQueryVariables = {
  filter?: ModelPaidMultipleAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaidMultipleAdsQuery = {
  listPaidMultipleAds?:  {
    __typename: "ModelPaidMultipleAdsConnection",
    items?:  Array< {
      __typename: "PaidMultipleAds",
      id: string,
      bizRegNo: string,
      ownerNatId: string,
      item: string,
      nameOfSeller: string,
      buzType: string,
      nearByTown: string,
      contact: string,
      description?: string | null,
      status: Status,
      latitude: number,
      longitude: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFreeBizAdsQueryVariables = {
  id: string,
};

export type GetFreeBizAdsQuery = {
  getFreeBizAds?:  {
    __typename: "FreeBizAds",
    id: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFreeBizAdsQueryVariables = {
  filter?: ModelFreeBizAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFreeBizAdsQuery = {
  listFreeBizAds?:  {
    __typename: "ModelFreeBizAdsConnection",
    items?:  Array< {
      __typename: "FreeBizAds",
      id: string,
      item: string,
      nameOfSeller: string,
      buzType: string,
      nearByTown: string,
      contact: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckUserrrBalanceQueryVariables = {
  phonecontact?: string | null,
  pw?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckUserrrBalanceQuery = {
  checkUserrrBalance?:  {
    __typename: "ModelSMAccountConnection",
    items?:  Array< {
      __typename: "SMAccount",
      nationalid: string,
      name: string,
      phonecontact: string,
      awsemail: string,
      balance: number,
      pw: string,
      loanAcceptanceCode: string,
      ttlDpstSM: number,
      TtlWthdrwnSM: number,
      ttlLnInSM: number,
      ttlLnOutSM: number,
      ttlLoanRecovered: number,
      blTimesSM: number,
      blClrdtmsSM: number,
      clrdNnvrBLSM: number,
      actvLnsSM: number,
      ttlActiveLnsInAmtSM: number,
      ttlBLLoansInAmtSM: number,
      ttlClrdLnsInAmtSM: number,
      ttlActiveLnsOutAmtSM: number,
      ttlBLLoansOutAmtSM: number,
      ttlClrdLnsOutAmtSM: number,
      tmsIHvBrwdSM: number,
      tmsIHvLndSM: number,
      ttlDpstChm: number,
      ttlWithdrwlChm: number,
      ttlChmLnIn: number,
      blChmTimes: number,
      blChmClrdtms: number,
      clrdNnvrBLChm: number,
      actvLnsChm: number,
      ttlActiveLnsInAmtChm: number,
      ttlBLLoansInAmChmt: number,
      ttlClrdLnsInAmtChm: number,
      tmsIHvBrwdChm: number,
      tmsIHvLndChm: number,
      ttlLnInCrdSls: number,
      ttlLnOutCrdSls: number,
      blTimesCrdSls: number,
      blClrdtmsCrdSls: number,
      clrdNnvrBLCrdSls: number,
      actvLnsCrdSls: number,
      ttlActiveLnsInAmtCrdSls: number,
      ttlBLLoansInAmtCrdSls: number,
      ttlClrdLnsInAmtCrdSls: number,
      ttlActiveLnsOutAmtCrdSls: number,
      ttlBLLoansOutAmtCrdSls: number,
      ttlClrdLnsOutAmtCrdSls: number,
      tmsIHvBrwdCrdSls: number,
      tmsIHvLndCrdSls: number,
      TotalTymsBL: number,
      acActivenessStatus: Status,
      blStatus: Status,
      loanStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AccessingPersonalAcQueryVariables = {
  name?: string | null,
  phonecontact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccessingPersonalAcQuery = {
  AccessingPersonalAc?:  {
    __typename: "ModelSMAccountConnection",
    items?:  Array< {
      __typename: "SMAccount",
      nationalid: string,
      name: string,
      phonecontact: string,
      awsemail: string,
      balance: number,
      pw: string,
      loanAcceptanceCode: string,
      ttlDpstSM: number,
      TtlWthdrwnSM: number,
      ttlLnInSM: number,
      ttlLnOutSM: number,
      ttlLoanRecovered: number,
      blTimesSM: number,
      blClrdtmsSM: number,
      clrdNnvrBLSM: number,
      actvLnsSM: number,
      ttlActiveLnsInAmtSM: number,
      ttlBLLoansInAmtSM: number,
      ttlClrdLnsInAmtSM: number,
      ttlActiveLnsOutAmtSM: number,
      ttlBLLoansOutAmtSM: number,
      ttlClrdLnsOutAmtSM: number,
      tmsIHvBrwdSM: number,
      tmsIHvLndSM: number,
      ttlDpstChm: number,
      ttlWithdrwlChm: number,
      ttlChmLnIn: number,
      blChmTimes: number,
      blChmClrdtms: number,
      clrdNnvrBLChm: number,
      actvLnsChm: number,
      ttlActiveLnsInAmtChm: number,
      ttlBLLoansInAmChmt: number,
      ttlClrdLnsInAmtChm: number,
      tmsIHvBrwdChm: number,
      tmsIHvLndChm: number,
      ttlLnInCrdSls: number,
      ttlLnOutCrdSls: number,
      blTimesCrdSls: number,
      blClrdtmsCrdSls: number,
      clrdNnvrBLCrdSls: number,
      actvLnsCrdSls: number,
      ttlActiveLnsInAmtCrdSls: number,
      ttlBLLoansInAmtCrdSls: number,
      ttlClrdLnsInAmtCrdSls: number,
      ttlActiveLnsOutAmtCrdSls: number,
      ttlBLLoansOutAmtCrdSls: number,
      ttlClrdLnsOutAmtCrdSls: number,
      tmsIHvBrwdCrdSls: number,
      tmsIHvLndCrdSls: number,
      TotalTymsBL: number,
      acActivenessStatus: Status,
      blStatus: Status,
      loanStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyDetorsQueryVariables = {
  loanerId?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyDetorsQuery = {
  checkMyDetors?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      loanercontact: string,
      loaneecontact: string,
      repaymentPeriod: number,
      advregnu?: string | null,
      timestamp: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ConfrmMyLoaneeeeeQueryVariables = {
  loanercontact?: string | null,
  loaneecontactStatus?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConfrmMyLoaneeeeeQuery = {
  confrmMyLoaneeeee?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      loanercontact: string,
      loaneecontact: string,
      repaymentPeriod: number,
      advregnu?: string | null,
      timestamp: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNLnarQueryVariables = {
  advregnu?: string | null,
  loanercontact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNLnarQuery = {
  checkbyAdvNLnar?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      loanercontact: string,
      loaneecontact: string,
      repaymentPeriod: number,
      advregnu?: string | null,
      timestamp: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ChckbyAdvNLneeQueryVariables = {
  advregnu?: string | null,
  loaneecontact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChckbyAdvNLneeQuery = {
  chckbyAdvNLnee?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      loanercontact: string,
      loaneecontact: string,
      repaymentPeriod: number,
      advregnu?: string | null,
      timestamp: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckSentNonLnsQueryVariables = {
  senderID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckSentNonLnsQuery = {
  checkSentNonLns?:  {
    __typename: "ModelSMNonLoansConnection",
    items?:  Array< {
      __typename: "SMNonLoans",
      id: string,
      senderID: string,
      amountgiven: number,
      senderContact: string,
      description?: string | null,
      receiverphonecontact: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckReceivedNonLnsQueryVariables = {
  receiverphonecontact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckReceivedNonLnsQuery = {
  checkReceivedNonLns?:  {
    __typename: "ModelSMNonLoansConnection",
    items?:  Array< {
      __typename: "SMNonLoans",
      id: string,
      senderID: string,
      amountgiven: number,
      senderContact: string,
      description?: string | null,
      receiverphonecontact: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UpdtAgentBalbyUserQueryVariables = {
  name?: string | null,
  pw?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UpdtAgentBalbyUserQuery = {
  updtAgentBalbyUser?:  {
    __typename: "ModelAgentConnection",
    items?:  Array< {
      __typename: "Agent",
      phonecontact: string,
      nationalid: string,
      name: string,
      ttlEarnings: number,
      pw: string,
      email: string,
      sagentregno: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchMyAgentsQueryVariables = {
  sagentregno?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchMyAgentsQuery = {
  searchMyAgents?:  {
    __typename: "ModelAgentConnection",
    items?:  Array< {
      __typename: "Agent",
      phonecontact: string,
      nationalid: string,
      name: string,
      ttlEarnings: number,
      pw: string,
      email: string,
      sagentregno: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstAgentFltPrchasssQueryVariables = {
  nationalid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstAgentFltPrchasssQuery = {
  lstAgentFltPrchasss?:  {
    __typename: "ModelFloatPurchaseConnection",
    items?:  Array< {
      __typename: "FloatPurchase",
      id?: string | null,
      agentphone: string,
      amount: number,
      nationalid: string,
      bankAdmid: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstBankAdmTransaaaaccttionsQueryVariables = {
  bankAdmid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstBankAdmTransaaaaccttionsQuery = {
  lstBankAdmTransaaaaccttions?:  {
    __typename: "ModelFloatPurchaseConnection",
    items?:  Array< {
      __typename: "FloatPurchase",
      id?: string | null,
      agentphone: string,
      amount: number,
      nationalid: string,
      bankAdmid: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CreateWythdrawalsQueryVariables = {
  agentPhonecontact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreateWythdrawalsQuery = {
  createWythdrawals?:  {
    __typename: "ModelFloatAddConnection",
    items?:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      trnsactionCode: string,
      amount: number,
      agentPhonecontact: string,
      sagentregno: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ReadSAWithdrwlsQueryVariables = {
  sagentregno?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReadSAWithdrwlsQuery = {
  readSAWithdrwls?:  {
    __typename: "ModelFloatAddConnection",
    items?:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      trnsactionCode: string,
      amount: number,
      agentPhonecontact: string,
      sagentregno: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CreatFltDeducQueryVariables = {
  agentNationalid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreatFltDeducQuery = {
  creatFltDeduc?:  {
    __typename: "ModelFloatReductionConnection",
    items?:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      depositerPhn: string,
      phonecontact: string,
      status: Status,
      agentNationalid: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CreatFltDedQueryVariables = {
  phonecontact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreatFltDedQuery = {
  creatFltDed?:  {
    __typename: "ModelFloatReductionConnection",
    items?:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      depositerPhn: string,
      phonecontact: string,
      status: Status,
      agentNationalid: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ReeeadAmtDpstdQueryVariables = {
  depositerPhn?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReeeadAmtDpstdQuery = {
  reeeadAmtDpstd?:  {
    __typename: "ModelFloatReductionConnection",
    items?:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      depositerPhn: string,
      phonecontact: string,
      status: Status,
      agentNationalid: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAgentWthdrawlsQueryVariables = {
  agentNationalid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAgentWthdrawlsQuery = {
  checkAgentWthdrawls?:  {
    __typename: "ModelAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "AgentWithdrawals",
      AgentPhone: string,
      Amount: number,
      id: string,
      bankAdmId?: string | null,
      agentNationalid: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstAgentWithdrowalsQueryVariables = {
  AgentPhone?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstAgentWithdrowalsQuery = {
  lstAgentWithdrowals?:  {
    __typename: "ModelAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "AgentWithdrawals",
      AgentPhone: string,
      Amount: number,
      id: string,
      bankAdmId?: string | null,
      agentNationalid: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstBankAdmTransactiooonnnsQueryVariables = {
  bankAdmId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstBankAdmTransactiooonnnsQuery = {
  lstBankAdmTransactiooonnns?:  {
    __typename: "ModelAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "AgentWithdrawals",
      AgentPhone: string,
      Amount: number,
      id: string,
      bankAdmId?: string | null,
      agentNationalid: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckingSAQueryVariables = {
  saNationalid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckingSAQuery = {
  CheckingSA?:  {
    __typename: "ModelSAgentConnection",
    items?:  Array< {
      __typename: "SAgent",
      id: string,
      saNationalid: string,
      name: string,
      phonecontact: string,
      pw: string,
      TtlEarnings: number,
      actMFNdog: number,
      email: string,
      saBalance: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckingSABalBySAQueryVariables = {
  pw?: string | null,
  saNationalid?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckingSABalBySAQuery = {
  CheckingSABalBySA?:  {
    __typename: "ModelSAgentConnection",
    items?:  Array< {
      __typename: "SAgent",
      id: string,
      saNationalid: string,
      name: string,
      phonecontact: string,
      pw: string,
      TtlEarnings: number,
      actMFNdog: number,
      email: string,
      saBalance: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstSAWithdrllsQueryVariables = {
  sagentregno?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstSAWithdrllsQuery = {
  lstSAWithdrlls?:  {
    __typename: "ModelSAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      sagentphone: string,
      sagentNatId: string,
      sagentregno: string,
      amount: number,
      bankAdmid?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstSAWithdrlllsQueryVariables = {
  sagentNatId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstSAWithdrlllsQuery = {
  lstSAWithdrllls?:  {
    __typename: "ModelSAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      sagentphone: string,
      sagentNatId: string,
      sagentregno: string,
      amount: number,
      bankAdmid?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstBankAdmTranssactionsQueryVariables = {
  bankAdmid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstBankAdmTranssactionsQuery = {
  lstBankAdmTranssactions?:  {
    __typename: "ModelSAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      sagentphone: string,
      sagentNatId: string,
      sagentregno: string,
      amount: number,
      bankAdmid?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GeetbankAdmdtlsByNatIdQueryVariables = {
  phonecontact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBankAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GeetbankAdmdtlsByNatIdQuery = {
  geetbankAdmdtlsByNatId?:  {
    __typename: "ModelBankAdminConnection",
    items?:  Array< {
      __typename: "BankAdmin",
      nationalid: string,
      name: string,
      phonecontact: string,
      TtlEarnings: number,
      pw: string,
      BankAdmBal: number,
      email: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckBankAdmWithdrawalsQueryVariables = {
  phoneContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBankAdmWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckBankAdmWithdrawalsQuery = {
  checkBankAdmWithdrawals?:  {
    __typename: "ModelBankAdmWithdrawalsConnection",
    items?:  Array< {
      __typename: "BankAdmWithdrawals",
      id: string,
      phoneContact: string,
      bankAdmNatId: string,
      amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAdvByNatIdQueryVariables = {
  nationalid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdvocateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAdvByNatIdQuery = {
  checkAdvByNatId?:  {
    __typename: "ModelAdvocateConnection",
    items?:  Array< {
      __typename: "Advocate",
      advregnu: string,
      nationalid: string,
      pwd: string,
      name: string,
      phonecontact: string,
      TtlEarnings: number,
      advBal: number,
      email: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAdvocateWithdrawalsssQueryVariables = {
  advNatId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdvocateWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAdvocateWithdrawalsssQuery = {
  checkAdvocateWithdrawalsss?:  {
    __typename: "ModelAdvocateWithdrawalsConnection",
    items?:  Array< {
      __typename: "AdvocateWithdrawals",
      id: string,
      phoneContact: string,
      advregnu: string,
      amount: number,
      advNatId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyComppwQueryVariables = {
  pw1?: string | null,
  pw2?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyComppwQuery = {
  checkbyComppw?:  {
    __typename: "ModelCompanyConnection",
    items?:  Array< {
      __typename: "Company",
      AdminId: string,
      phoneContact: string,
      companyEmail: string,
      termsNconditions: string,
      alert: string,
      about: string,
      policy: string,
      privacy: string,
      recom: string,
      pw1: string,
      pw2: string,
      agentwithdrawalFee: number,
      agentCom: number,
      sagentCom: number,
      companyCom: number,
      AdvCom: number,
      bankAdminCom: number,
      compComg: number,
      sawithdrawalFee: number,
      advuserwithdrawalFee: number,
      bankAdmuserwithdrawalFee: number,
      advocateCoverageFee: number,
      userTransferFee: number,
      userClearanceFee: number,
      searchAdFee: number,
      createBuzFee: number,
      crtCompAdsFee: number,
      crtParaAdsFee: number,
      companyEarningBal: number,
      companyEarning: number,
      agentEarningBal: number,
      agentEarning: number,
      saEarningBal: number,
      saarning: number,
      AdvEarningBal: number,
      AdvEarning: number,
      admEarningBal: number,
      admEarning: number,
      ttlUsrDep: number,
      ttlUserWthdrwl?: number | null,
      agentFloatIn: number,
      agentFloatOut: number,
      ttlActiveUsers: number,
      ttlnactvUsrs: number,
      ttlBLUsrs: number,
      ttlKFNdgActv: number,
      ttlKFNdgInActv: number,
      ttlKNdgBLStts: number,
      ttlKFKbwActv: number,
      ttlKFKbwInActv: number,
      ttlKKbwBLStts: number,
      ttlKFAdvActv: number,
      ttlKFAdvInActv: number,
      ttlKAdvBLStts: number,
      ttlKFAdmActv: number,
      ttlKFAdmInActv: number,
      ttlKAdmBLStts: number,
      ttlSMLnsIn: number,
      ttlChmLnsIn: number,
      ttlSellerLnsIn: number,
      ttlSMLnsInActv: number,
      ttlChmLnsInActv: number,
      ttlSellerLnsInActv: number,
      ttlSMLnsInClrd: number,
      ttlChmLnsInClrd: number,
      ttlSellerLnsInClrd: number,
      ttlSMLnsInBl: number,
      ttlChmLnsInBl: number,
      ttlSellerLnsInBl: number,
      ttlSMLnsInBlThnClr: number,
      ttlChmLnsInBlThnClr: number,
      ttlSellerLnsInBlThnClr: number,
      ttlSMLnsInNvrBlThnClr: number,
      ttlChmLnsInNvrBlThnClr: number,
      ttlSellerLnsInNvrBlThnClr: number,
      ttlCompTrnsfrEarnings: number,
      ttlCompBLClrncfrEarnings: number,
      ttlCompCovEarnings: number,
      ttlCompEarnings: number,
      ttlKFNdogoTrnsactionEarnings: number,
      ttlKFKubwaTrnsactionEarnings: number,
      ttlKFAdvTrnsactionEarnings: number,
      ttlKFAdmTrnsactionEarnings: number,
      maxInterest: number,
      totalLnsRecovered: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyNonCovrrrrrrrrdSalesQueryVariables = {
  sellerID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyNonCovrrrrrrrrdSalesQuery = {
  checkMyNonCovrrrrrrrrdSales?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName?: Array< string > | null,
      itemSerialNumber?: Array< string | null > | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timestamp: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      advPhone: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyNonCovrrrrrrrrdSaleeesQueryVariables = {
  advPhone?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyNonCovrrrrrrrrdSaleeesQuery = {
  checkMyNonCovrrrrrrrrdSaleees?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName?: Array< string > | null,
      itemSerialNumber?: Array< string | null > | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timestamp: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      advPhone: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckOurNonCovrredSMLoansQueryVariables = {
  sellerContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckOurNonCovrredSMLoansQuery = {
  checkOurNonCovrredSMLoans?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName?: Array< string > | null,
      itemSerialNumber?: Array< string | null > | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timestamp: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      advPhone: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMysalessDebtsQueryVariables = {
  buyerContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMysalessDebtsQuery = {
  checkMysalessDebts?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName?: Array< string > | null,
      itemSerialNumber?: Array< string | null > | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timestamp: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      advPhone: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNCredddSsellerQueryVariables = {
  advregnu?: string | null,
  sellerContactBuyerContact?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNCredddSsellerQuery = {
  checkbyAdvNCredddSseller?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName?: Array< string > | null,
      itemSerialNumber?: Array< string | null > | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timestamp: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      advPhone: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckGrpsICrtdQueryVariables = {
  signitoryContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckGrpsICrtdQuery = {
  checkGrpsICrtd?:  {
    __typename: "ModelGroupConnection",
    items?:  Array< {
      __typename: "Group",
      grpContact: string,
      signitoryContact: string,
      SignitoryNatid: string,
      signitoryName: string,
      grpName: string,
      signitoryPW: string,
      grpEmail: string,
      grpBal: number,
      ttlGrpMembers: number,
      ttlLonsOut: number,
      description?: string | null,
      ttlDpst: number,
      ttlWthdrwn: number,
      ttlBLMmbrs: number,
      ttlMmbrsWthActvLns: number,
      ttlMmbrsClrdNnvrBL: number,
      ttlMmbrsWithActvLns: number,
      ttlActiveLnsInAmt: number,
      ttlMmbrsBLLoansInAmt: number,
      ttlMmbrsClrdLnsInAmt: number,
      ttlClrdLnsOutAmt: number,
      tymsGrpHasLend: number,
      ttlLonAmountRecovered?: number | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckGrpBalQueryVariables = {
  signitoryContact?: string | null,
  signitoryPW?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckGrpBalQuery = {
  checkGrpBal?:  {
    __typename: "ModelGroupConnection",
    items?:  Array< {
      __typename: "Group",
      grpContact: string,
      signitoryContact: string,
      SignitoryNatid: string,
      signitoryName: string,
      grpName: string,
      signitoryPW: string,
      grpEmail: string,
      grpBal: number,
      ttlGrpMembers: number,
      ttlLonsOut: number,
      description?: string | null,
      ttlDpst: number,
      ttlWthdrwn: number,
      ttlBLMmbrs: number,
      ttlMmbrsWthActvLns: number,
      ttlMmbrsClrdNnvrBL: number,
      ttlMmbrsWithActvLns: number,
      ttlActiveLnsInAmt: number,
      ttlMmbrsBLLoansInAmt: number,
      ttlMmbrsClrdLnsInAmt: number,
      ttlClrdLnsOutAmt: number,
      tymsGrpHasLend: number,
      ttlLonAmountRecovered?: number | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMygroupQueryVariables = {
  memberContact?: string | null,
  groupContact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMygroupQuery = {
  checkMygroup?:  {
    __typename: "ModelGrpMembersConnection",
    items?:  Array< {
      __typename: "GrpMembers",
      id: string,
      groupContact: string,
      memberContact: string,
      memberNatId: string,
      acBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMygrpsQueryVariables = {
  memberContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMygrpsQuery = {
  checkMygrps?:  {
    __typename: "ModelGrpMembersConnection",
    items?:  Array< {
      __typename: "GrpMembers",
      id: string,
      groupContact: string,
      memberContact: string,
      memberNatId: string,
      acBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheeeeckGrpCovrdLonDfltsQueryVariables = {
  grpContact?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheeeeckGrpCovrdLonDfltsQuery = {
  cheeeeckGrpCovrdLonDflts?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      timestamp: number,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UpdatAmaounntrepaidQueryVariables = {
  loaneeID?: string | null,
  grpContact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UpdatAmaounntrepaidQuery = {
  updatAmaounntrepaid?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      timestamp: number,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ClearloaneriiiiifongoingQueryVariables = {
  loaneeID?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClearloaneriiiiifongoingQuery = {
  clearloaneriiiiifongoing?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      timestamp: number,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNGrrrppQueryVariables = {
  advRegNu?: string | null,
  grpContact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNGrrrppQuery = {
  checkbyAdvNGrrrpp?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      timestamp: number,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNLoaneeeeeeiQueryVariables = {
  advRegNu?: string | null,
  loaneeID?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNLoaneeeeeeiQuery = {
  checkbyAdvNLoaneeeeeei?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      timestamp: number,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheeeckGrpNonLoanseeQueryVariables = {
  recipientContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheeeckGrpNonLoanseeQuery = {
  cheeeckGrpNonLoansee?:  {
    __typename: "ModelGroupNonLoansConnection",
    items?:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientContact: string,
      amountSent: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheeeckGrpNonLoanseQueryVariables = {
  grpContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheeeckGrpNonLoanseQuery = {
  cheeeckGrpNonLoanse?:  {
    __typename: "ModelGroupNonLoansConnection",
    items?:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientContact: string,
      amountSent: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAllMyGrpsContriQueryVariables = {
  memberContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAllMyGrpsContriQuery = {
  checkAllMyGrpsContri?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items?:  Array< {
      __typename: "GrpMembersContribution",
      id?: string | null,
      memberContact: string,
      grpContact: string,
      contriAmount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAllGrpContributorssssQueryVariables = {
  grpContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAllGrpContributorssssQuery = {
  checkAllGrpContributorssss?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items?:  Array< {
      __typename: "GrpMembersContribution",
      id?: string | null,
      memberContact: string,
      grpContact: string,
      contriAmount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMmbrContrInAGrppQueryVariables = {
  grpContact?: string | null,
  memberContact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMmbrContrInAGrppQuery = {
  checkMmbrContrInAGrpp?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items?:  Array< {
      __typename: "GrpMembersContribution",
      id?: string | null,
      memberContact: string,
      grpContact: string,
      contriAmount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ByMaximumAmntNinterestQueryVariables = {
  repaymentPeriod?: string | null,
  maximum?: ModelFloatKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdvertisedSingleMemberLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByMaximumAmntNinterestQuery = {
  byMaximumAmntNinterest?:  {
    __typename: "ModelAdvertisedSingleMemberLoansConnection",
    items?:  Array< {
      __typename: "AdvertisedSingleMemberLoans",
      id: string,
      nameOfLoaner: string,
      maximum: number,
      contact: string,
      repaymentPeriod: string,
      interest: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ByMaximumAmntNinteresteeQueryVariables = {
  repaymentPeriod?: string | null,
  maximum?: ModelFloatKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdvertisedChamaLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByMaximumAmntNinteresteeQuery = {
  byMaximumAmntNinterestee?:  {
    __typename: "ModelAdvertisedChamaLoansConnection",
    items?:  Array< {
      __typename: "AdvertisedChamaLoans",
      id: string,
      nameOfLoaner: string,
      maximum: number,
      contact: string,
      repaymentPeriod: string,
      interest: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ByBuznessTypeQueryVariables = {
  buzType?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPaidMultipleAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByBuznessTypeQuery = {
  byBuznessType?:  {
    __typename: "ModelPaidMultipleAdsConnection",
    items?:  Array< {
      __typename: "PaidMultipleAds",
      id: string,
      bizRegNo: string,
      ownerNatId: string,
      item: string,
      nameOfSeller: string,
      buzType: string,
      nearByTown: string,
      contact: string,
      description?: string | null,
      status: Status,
      latitude: number,
      longitude: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ByBuznesTypeeeQueryVariables = {
  buzType?: string | null,
  nearByTown?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPaidMultipleAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByBuznesTypeeeQuery = {
  byBuznesTypeee?:  {
    __typename: "ModelPaidMultipleAdsConnection",
    items?:  Array< {
      __typename: "PaidMultipleAds",
      id: string,
      bizRegNo: string,
      ownerNatId: string,
      item: string,
      nameOfSeller: string,
      buzType: string,
      nearByTown: string,
      contact: string,
      description?: string | null,
      status: Status,
      latitude: number,
      longitude: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ByBusnessTypeQueryVariables = {
  buzType?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFreeBizAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByBusnessTypeQuery = {
  byBusnessType?:  {
    __typename: "ModelFreeBizAdsConnection",
    items?:  Array< {
      __typename: "FreeBizAds",
      id: string,
      item: string,
      nameOfSeller: string,
      buzType: string,
      nearByTown: string,
      contact: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ByBiznessTypeQueryVariables = {
  buzType?: string | null,
  nearByTown?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFreeBizAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByBiznessTypeQuery = {
  byBiznessType?:  {
    __typename: "ModelFreeBizAdsConnection",
    items?:  Array< {
      __typename: "FreeBizAds",
      id: string,
      item: string,
      nameOfSeller: string,
      buzType: string,
      nearByTown: string,
      contact: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSMAccountSubscription = {
  onCreateSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    ttlLnInSM: number,
    ttlLnOutSM: number,
    ttlLoanRecovered: number,
    blTimesSM: number,
    blClrdtmsSM: number,
    clrdNnvrBLSM: number,
    actvLnsSM: number,
    ttlActiveLnsInAmtSM: number,
    ttlBLLoansInAmtSM: number,
    ttlClrdLnsInAmtSM: number,
    ttlActiveLnsOutAmtSM: number,
    ttlBLLoansOutAmtSM: number,
    ttlClrdLnsOutAmtSM: number,
    tmsIHvBrwdSM: number,
    tmsIHvLndSM: number,
    ttlDpstChm: number,
    ttlWithdrwlChm: number,
    ttlChmLnIn: number,
    blChmTimes: number,
    blChmClrdtms: number,
    clrdNnvrBLChm: number,
    actvLnsChm: number,
    ttlActiveLnsInAmtChm: number,
    ttlBLLoansInAmChmt: number,
    ttlClrdLnsInAmtChm: number,
    tmsIHvBrwdChm: number,
    tmsIHvLndChm: number,
    ttlLnInCrdSls: number,
    ttlLnOutCrdSls: number,
    blTimesCrdSls: number,
    blClrdtmsCrdSls: number,
    clrdNnvrBLCrdSls: number,
    actvLnsCrdSls: number,
    ttlActiveLnsInAmtCrdSls: number,
    ttlBLLoansInAmtCrdSls: number,
    ttlClrdLnsInAmtCrdSls: number,
    ttlActiveLnsOutAmtCrdSls: number,
    ttlBLLoansOutAmtCrdSls: number,
    ttlClrdLnsOutAmtCrdSls: number,
    tmsIHvBrwdCrdSls: number,
    tmsIHvLndCrdSls: number,
    TotalTymsBL: number,
    acActivenessStatus: Status,
    blStatus: Status,
    loanStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMAccountSubscription = {
  onUpdateSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    ttlLnInSM: number,
    ttlLnOutSM: number,
    ttlLoanRecovered: number,
    blTimesSM: number,
    blClrdtmsSM: number,
    clrdNnvrBLSM: number,
    actvLnsSM: number,
    ttlActiveLnsInAmtSM: number,
    ttlBLLoansInAmtSM: number,
    ttlClrdLnsInAmtSM: number,
    ttlActiveLnsOutAmtSM: number,
    ttlBLLoansOutAmtSM: number,
    ttlClrdLnsOutAmtSM: number,
    tmsIHvBrwdSM: number,
    tmsIHvLndSM: number,
    ttlDpstChm: number,
    ttlWithdrwlChm: number,
    ttlChmLnIn: number,
    blChmTimes: number,
    blChmClrdtms: number,
    clrdNnvrBLChm: number,
    actvLnsChm: number,
    ttlActiveLnsInAmtChm: number,
    ttlBLLoansInAmChmt: number,
    ttlClrdLnsInAmtChm: number,
    tmsIHvBrwdChm: number,
    tmsIHvLndChm: number,
    ttlLnInCrdSls: number,
    ttlLnOutCrdSls: number,
    blTimesCrdSls: number,
    blClrdtmsCrdSls: number,
    clrdNnvrBLCrdSls: number,
    actvLnsCrdSls: number,
    ttlActiveLnsInAmtCrdSls: number,
    ttlBLLoansInAmtCrdSls: number,
    ttlClrdLnsInAmtCrdSls: number,
    ttlActiveLnsOutAmtCrdSls: number,
    ttlBLLoansOutAmtCrdSls: number,
    ttlClrdLnsOutAmtCrdSls: number,
    tmsIHvBrwdCrdSls: number,
    tmsIHvLndCrdSls: number,
    TotalTymsBL: number,
    acActivenessStatus: Status,
    blStatus: Status,
    loanStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMAccountSubscription = {
  onDeleteSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    ttlLnInSM: number,
    ttlLnOutSM: number,
    ttlLoanRecovered: number,
    blTimesSM: number,
    blClrdtmsSM: number,
    clrdNnvrBLSM: number,
    actvLnsSM: number,
    ttlActiveLnsInAmtSM: number,
    ttlBLLoansInAmtSM: number,
    ttlClrdLnsInAmtSM: number,
    ttlActiveLnsOutAmtSM: number,
    ttlBLLoansOutAmtSM: number,
    ttlClrdLnsOutAmtSM: number,
    tmsIHvBrwdSM: number,
    tmsIHvLndSM: number,
    ttlDpstChm: number,
    ttlWithdrwlChm: number,
    ttlChmLnIn: number,
    blChmTimes: number,
    blChmClrdtms: number,
    clrdNnvrBLChm: number,
    actvLnsChm: number,
    ttlActiveLnsInAmtChm: number,
    ttlBLLoansInAmChmt: number,
    ttlClrdLnsInAmtChm: number,
    tmsIHvBrwdChm: number,
    tmsIHvLndChm: number,
    ttlLnInCrdSls: number,
    ttlLnOutCrdSls: number,
    blTimesCrdSls: number,
    blClrdtmsCrdSls: number,
    clrdNnvrBLCrdSls: number,
    actvLnsCrdSls: number,
    ttlActiveLnsInAmtCrdSls: number,
    ttlBLLoansInAmtCrdSls: number,
    ttlClrdLnsInAmtCrdSls: number,
    ttlActiveLnsOutAmtCrdSls: number,
    ttlBLLoansOutAmtCrdSls: number,
    ttlClrdLnsOutAmtCrdSls: number,
    tmsIHvBrwdCrdSls: number,
    tmsIHvLndCrdSls: number,
    TotalTymsBL: number,
    acActivenessStatus: Status,
    blStatus: Status,
    loanStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSMLoansCoveredSubscription = {
  onCreateSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    loanercontact: string,
    loaneecontact: string,
    repaymentPeriod: number,
    advregnu?: string | null,
    timestamp: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMLoansCoveredSubscription = {
  onUpdateSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    loanercontact: string,
    loaneecontact: string,
    repaymentPeriod: number,
    advregnu?: string | null,
    timestamp: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMLoansCoveredSubscription = {
  onDeleteSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    loanercontact: string,
    loaneecontact: string,
    repaymentPeriod: number,
    advregnu?: string | null,
    timestamp: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSMNonLoansSubscription = {
  onCreateSMNonLoans?:  {
    __typename: "SMNonLoans",
    id: string,
    senderID: string,
    amountgiven: number,
    senderContact: string,
    description?: string | null,
    receiverphonecontact: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMNonLoansSubscription = {
  onUpdateSMNonLoans?:  {
    __typename: "SMNonLoans",
    id: string,
    senderID: string,
    amountgiven: number,
    senderContact: string,
    description?: string | null,
    receiverphonecontact: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMNonLoansSubscription = {
  onDeleteSMNonLoans?:  {
    __typename: "SMNonLoans",
    id: string,
    senderID: string,
    amountgiven: number,
    senderContact: string,
    description?: string | null,
    receiverphonecontact: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAgentSubscription = {
  onCreateAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgentSubscription = {
  onUpdateAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgentSubscription = {
  onDeleteAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatPurchaseSubscription = {
  onCreateFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    nationalid: string,
    bankAdmid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFloatPurchaseSubscription = {
  onUpdateFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    nationalid: string,
    bankAdmid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFloatPurchaseSubscription = {
  onDeleteFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    nationalid: string,
    bankAdmid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatAddSubscription = {
  onCreateFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    trnsactionCode: string,
    amount: number,
    agentPhonecontact: string,
    sagentregno: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFloatAddSubscription = {
  onUpdateFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    trnsactionCode: string,
    amount: number,
    agentPhonecontact: string,
    sagentregno: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFloatAddSubscription = {
  onDeleteFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    trnsactionCode: string,
    amount: number,
    agentPhonecontact: string,
    sagentregno: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatReductionSubscription = {
  onCreateFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    depositerPhn: string,
    phonecontact: string,
    status: Status,
    agentNationalid: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFloatReductionSubscription = {
  onUpdateFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    depositerPhn: string,
    phonecontact: string,
    status: Status,
    agentNationalid: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFloatReductionSubscription = {
  onDeleteFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    depositerPhn: string,
    phonecontact: string,
    status: Status,
    agentNationalid: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAgentWithdrawalsSubscription = {
  onCreateAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    AgentPhone: string,
    Amount: number,
    id: string,
    bankAdmId?: string | null,
    agentNationalid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgentWithdrawalsSubscription = {
  onUpdateAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    AgentPhone: string,
    Amount: number,
    id: string,
    bankAdmId?: string | null,
    agentNationalid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgentWithdrawalsSubscription = {
  onDeleteAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    AgentPhone: string,
    Amount: number,
    id: string,
    bankAdmId?: string | null,
    agentNationalid: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSAgentSubscription = {
  onCreateSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSAgentSubscription = {
  onUpdateSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSAgentSubscription = {
  onDeleteSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSAgentWithdrawalsSubscription = {
  onCreateSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    sagentphone: string,
    sagentNatId: string,
    sagentregno: string,
    amount: number,
    bankAdmid?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSAgentWithdrawalsSubscription = {
  onUpdateSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    sagentphone: string,
    sagentNatId: string,
    sagentregno: string,
    amount: number,
    bankAdmid?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSAgentWithdrawalsSubscription = {
  onDeleteSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    sagentphone: string,
    sagentNatId: string,
    sagentregno: string,
    amount: number,
    bankAdmid?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBankAdminSubscription = {
  onCreateBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBankAdminSubscription = {
  onUpdateBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBankAdminSubscription = {
  onDeleteBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBankAdmWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBankAdmWithdrawalsSubscription = {
  onCreateBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    phoneContact: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBankAdmWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBankAdmWithdrawalsSubscription = {
  onUpdateBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    phoneContact: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBankAdmWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBankAdmWithdrawalsSubscription = {
  onDeleteBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    phoneContact: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdvocateSubscription = {
  onCreateAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdvocateSubscription = {
  onUpdateAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdvocateSubscription = {
  onDeleteAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdvocateWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAdvocateWithdrawalsSubscription = {
  onCreateAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    phoneContact: string,
    advregnu: string,
    amount: number,
    advNatId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdvocateWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAdvocateWithdrawalsSubscription = {
  onUpdateAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    phoneContact: string,
    advregnu: string,
    amount: number,
    advNatId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdvocateWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAdvocateWithdrawalsSubscription = {
  onDeleteAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    phoneContact: string,
    advregnu: string,
    amount: number,
    advNatId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    compComg: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    advocateCoverageFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    searchAdFee: number,
    createBuzFee: number,
    crtCompAdsFee: number,
    crtParaAdsFee: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlnactvUsrs: number,
    ttlBLUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsIn: number,
    ttlChmLnsIn: number,
    ttlSellerLnsIn: number,
    ttlSMLnsInActv: number,
    ttlChmLnsInActv: number,
    ttlSellerLnsInActv: number,
    ttlSMLnsInClrd: number,
    ttlChmLnsInClrd: number,
    ttlSellerLnsInClrd: number,
    ttlSMLnsInBl: number,
    ttlChmLnsInBl: number,
    ttlSellerLnsInBl: number,
    ttlSMLnsInBlThnClr: number,
    ttlChmLnsInBlThnClr: number,
    ttlSellerLnsInBlThnClr: number,
    ttlSMLnsInNvrBlThnClr: number,
    ttlChmLnsInNvrBlThnClr: number,
    ttlSellerLnsInNvrBlThnClr: number,
    ttlCompTrnsfrEarnings: number,
    ttlCompBLClrncfrEarnings: number,
    ttlCompCovEarnings: number,
    ttlCompEarnings: number,
    ttlKFNdogoTrnsactionEarnings: number,
    ttlKFKubwaTrnsactionEarnings: number,
    ttlKFAdvTrnsactionEarnings: number,
    ttlKFAdmTrnsactionEarnings: number,
    maxInterest: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    compComg: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    advocateCoverageFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    searchAdFee: number,
    createBuzFee: number,
    crtCompAdsFee: number,
    crtParaAdsFee: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlnactvUsrs: number,
    ttlBLUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsIn: number,
    ttlChmLnsIn: number,
    ttlSellerLnsIn: number,
    ttlSMLnsInActv: number,
    ttlChmLnsInActv: number,
    ttlSellerLnsInActv: number,
    ttlSMLnsInClrd: number,
    ttlChmLnsInClrd: number,
    ttlSellerLnsInClrd: number,
    ttlSMLnsInBl: number,
    ttlChmLnsInBl: number,
    ttlSellerLnsInBl: number,
    ttlSMLnsInBlThnClr: number,
    ttlChmLnsInBlThnClr: number,
    ttlSellerLnsInBlThnClr: number,
    ttlSMLnsInNvrBlThnClr: number,
    ttlChmLnsInNvrBlThnClr: number,
    ttlSellerLnsInNvrBlThnClr: number,
    ttlCompTrnsfrEarnings: number,
    ttlCompBLClrncfrEarnings: number,
    ttlCompCovEarnings: number,
    ttlCompEarnings: number,
    ttlKFNdogoTrnsactionEarnings: number,
    ttlKFKubwaTrnsactionEarnings: number,
    ttlKFAdvTrnsactionEarnings: number,
    ttlKFAdmTrnsactionEarnings: number,
    maxInterest: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    compComg: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    advocateCoverageFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    searchAdFee: number,
    createBuzFee: number,
    crtCompAdsFee: number,
    crtParaAdsFee: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlnactvUsrs: number,
    ttlBLUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsIn: number,
    ttlChmLnsIn: number,
    ttlSellerLnsIn: number,
    ttlSMLnsInActv: number,
    ttlChmLnsInActv: number,
    ttlSellerLnsInActv: number,
    ttlSMLnsInClrd: number,
    ttlChmLnsInClrd: number,
    ttlSellerLnsInClrd: number,
    ttlSMLnsInBl: number,
    ttlChmLnsInBl: number,
    ttlSellerLnsInBl: number,
    ttlSMLnsInBlThnClr: number,
    ttlChmLnsInBlThnClr: number,
    ttlSellerLnsInBlThnClr: number,
    ttlSMLnsInNvrBlThnClr: number,
    ttlChmLnsInNvrBlThnClr: number,
    ttlSellerLnsInNvrBlThnClr: number,
    ttlCompTrnsfrEarnings: number,
    ttlCompBLClrncfrEarnings: number,
    ttlCompCovEarnings: number,
    ttlCompEarnings: number,
    ttlKFNdogoTrnsactionEarnings: number,
    ttlKFKubwaTrnsactionEarnings: number,
    ttlKFAdvTrnsactionEarnings: number,
    ttlKFAdmTrnsactionEarnings: number,
    maxInterest: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCovCreditSellerSubscription = {
  onCreateCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName?: Array< string > | null,
    itemSerialNumber?: Array< string | null > | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timestamp: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    advPhone: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCovCreditSellerSubscription = {
  onUpdateCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName?: Array< string > | null,
    itemSerialNumber?: Array< string | null > | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timestamp: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    advPhone: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCovCreditSellerSubscription = {
  onDeleteCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName?: Array< string > | null,
    itemSerialNumber?: Array< string | null > | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timestamp: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    advPhone: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    ttlLonsOut: number,
    description?: string | null,
    ttlDpst: number,
    ttlWthdrwn: number,
    ttlBLMmbrs: number,
    ttlMmbrsWthActvLns: number,
    ttlMmbrsClrdNnvrBL: number,
    ttlMmbrsWithActvLns: number,
    ttlActiveLnsInAmt: number,
    ttlMmbrsBLLoansInAmt: number,
    ttlMmbrsClrdLnsInAmt: number,
    ttlClrdLnsOutAmt: number,
    tymsGrpHasLend: number,
    ttlLonAmountRecovered?: number | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    ttlLonsOut: number,
    description?: string | null,
    ttlDpst: number,
    ttlWthdrwn: number,
    ttlBLMmbrs: number,
    ttlMmbrsWthActvLns: number,
    ttlMmbrsClrdNnvrBL: number,
    ttlMmbrsWithActvLns: number,
    ttlActiveLnsInAmt: number,
    ttlMmbrsBLLoansInAmt: number,
    ttlMmbrsClrdLnsInAmt: number,
    ttlClrdLnsOutAmt: number,
    tymsGrpHasLend: number,
    ttlLonAmountRecovered?: number | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    ttlLonsOut: number,
    description?: string | null,
    ttlDpst: number,
    ttlWthdrwn: number,
    ttlBLMmbrs: number,
    ttlMmbrsWthActvLns: number,
    ttlMmbrsClrdNnvrBL: number,
    ttlMmbrsWithActvLns: number,
    ttlActiveLnsInAmt: number,
    ttlMmbrsBLLoansInAmt: number,
    ttlMmbrsClrdLnsInAmt: number,
    ttlClrdLnsOutAmt: number,
    tymsGrpHasLend: number,
    ttlLonAmountRecovered?: number | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGrpMembersSubscription = {
  onCreateGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGrpMembersSubscription = {
  onUpdateGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGrpMembersSubscription = {
  onDeleteGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCvrdGroupLoansSubscription = {
  onCreateCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    timestamp: number,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCvrdGroupLoansSubscription = {
  onUpdateCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    timestamp: number,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCvrdGroupLoansSubscription = {
  onDeleteCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    timestamp: number,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupNonLoansSubscription = {
  onCreateGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientContact: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupNonLoansSubscription = {
  onUpdateGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientContact: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupNonLoansSubscription = {
  onDeleteGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientContact: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGrpMembersContributionSubscription = {
  onCreateGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id?: string | null,
    memberContact: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGrpMembersContributionSubscription = {
  onUpdateGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id?: string | null,
    memberContact: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGrpMembersContributionSubscription = {
  onDeleteGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id?: string | null,
    memberContact: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdvertisedSingleMemberLoansSubscription = {
  onCreateAdvertisedSingleMemberLoans?:  {
    __typename: "AdvertisedSingleMemberLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdvertisedSingleMemberLoansSubscription = {
  onUpdateAdvertisedSingleMemberLoans?:  {
    __typename: "AdvertisedSingleMemberLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdvertisedSingleMemberLoansSubscription = {
  onDeleteAdvertisedSingleMemberLoans?:  {
    __typename: "AdvertisedSingleMemberLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdvertisedChamaLoansSubscription = {
  onCreateAdvertisedChamaLoans?:  {
    __typename: "AdvertisedChamaLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdvertisedChamaLoansSubscription = {
  onUpdateAdvertisedChamaLoans?:  {
    __typename: "AdvertisedChamaLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdvertisedChamaLoansSubscription = {
  onDeleteAdvertisedChamaLoans?:  {
    __typename: "AdvertisedChamaLoans",
    id: string,
    nameOfLoaner: string,
    maximum: number,
    contact: string,
    repaymentPeriod: string,
    interest: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePaidMultipleAdsSubscription = {
  onCreatePaidMultipleAds?:  {
    __typename: "PaidMultipleAds",
    id: string,
    bizRegNo: string,
    ownerNatId: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    latitude: number,
    longitude: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePaidMultipleAdsSubscription = {
  onUpdatePaidMultipleAds?:  {
    __typename: "PaidMultipleAds",
    id: string,
    bizRegNo: string,
    ownerNatId: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    latitude: number,
    longitude: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePaidMultipleAdsSubscription = {
  onDeletePaidMultipleAds?:  {
    __typename: "PaidMultipleAds",
    id: string,
    bizRegNo: string,
    ownerNatId: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    latitude: number,
    longitude: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFreeBizAdsSubscription = {
  onCreateFreeBizAds?:  {
    __typename: "FreeBizAds",
    id: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFreeBizAdsSubscription = {
  onUpdateFreeBizAds?:  {
    __typename: "FreeBizAds",
    id: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFreeBizAdsSubscription = {
  onDeleteFreeBizAds?:  {
    __typename: "FreeBizAds",
    id: string,
    item: string,
    nameOfSeller: string,
    buzType: string,
    nearByTown: string,
    contact: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
