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
  TtlActvLonsTmsLnrCov: number,
  TtlActvLonsTmsLneeCov: number,
  TtlActvLonsAmtLnrCov: number,
  TtlActvLonsAmtLneeCov: number,
  TtlBLLonsTmsLnrCov: number,
  TtlBLLonsTmsLneeCov: number,
  TtlBLLonsAmtLnrCov: number,
  TtlBLLonsAmtLneeCov: number,
  TtlClrdLonsTmsLnrCov: number,
  TtlClrdLonsTmsLneeCov: number,
  TtlClrdLonsAmtLnrCov: number,
  TtlClrdLonsAmtLneeCov: number,
  TtlActvLonsTmsLneeChmCov: number,
  TtlActvLonsAmtLneeChmCov: number,
  TtlBLLonsTmsLneeChmCov: number,
  TtlBLLonsAmtLneeChmCov: number,
  TtlClrdLonsTmsLneeChmCov: number,
  TtlClrdLonsAmtLneeChmCov: number,
  TtlActvLonsTmsSllrCov: number,
  TtlActvLonsTmsByrCov: number,
  TtlActvLonsAmtSllrCov: number,
  TtlActvLonsAmtByrCov: number,
  TtlBLLonsTmsSllrCov: number,
  TtlBLLonsTmsByrCov: number,
  TtlBLLonsAmtSllrCov: number,
  TtlBLLonsAmtByrCov: number,
  TtlClrdLonsTmsSllrCov: number,
  TtlClrdLonsTmsByrCov: number,
  TtlClrdLonsAmtSllrCov: number,
  TtlClrdLonsAmtByrCov: number,
  TtlActvLonsTmsLnrNonCov: number,
  TtlActvLonsTmsLneeNonCov: number,
  TtlActvLonsAmtLnrNonCov: number,
  TtlActvLonsAmtLneeNonCov: number,
  TtlBLLonsTmsLnrNonCov: number,
  TtlBLLonsTmsLneeNonCov: number,
  TtlBLLonsAmtLnrNonCov: number,
  TtlBLLonsAmtLneeNonCov: number,
  TtlClrdLonsTmsLnrNonCov: number,
  TtlClrdLonsTmsLneeNonCov: number,
  TtlClrdLonsAmtLnrNonCov: number,
  TtlClrdLonsAmtLneeNonCov: number,
  TtlActvLonsTmsLneeChmNonCov: number,
  TtlActvLonsAmtLneeChmNonCov: number,
  TtlBLLonsTmsLneeChmNonCov: number,
  TtlBLLonsAmtLneeChmNonCov: number,
  TtlClrdLonsTmsLneeChmNonCov: number,
  TtlClrdLonsAmtLneeChmNonCov: number,
  TtlActvLonsTmsSllrNonCov: number,
  TtlActvLonsTmsByrNonCov: number,
  TtlActvLonsAmtSllrNonCov: number,
  TtlActvLonsAmtByrNonCov: number,
  TtlBLLonsTmsSllrNonCov: number,
  TtlBLLonsTmsByrNonCov: number,
  TtlBLLonsAmtSllrNonCov: number,
  TtlBLLonsAmtByrNonCov: number,
  TtlClrdLonsTmsSllrNonCov: number,
  TtlClrdLonsTmsByrNonCov: number,
  TtlClrdLonsAmtSllrNonCov: number,
  TtlClrdLonsAmtByrNonCov: number,
  ttlNonLonsRecSM: number,
  ttlNonLonsSentSM: number,
  ttlNonLonsRecChm: number,
  ttlNonLonsSentChm: number,
  MaxTymsBL: number,
  MaxTymsIHvBL: number,
  MaxAcBal: number,
  TymsIHvGivnLn: number,
  TymsMyLnClrd: number,
  DefaultPenaltySM: number,
  loanStatus: Status,
  acStatus: Status,
  deActvtnReason: string,
  blStatus: Status,
  loanLimit: number,
  nonLonLimit: number,
  withdrawalLimit: number,
  depositLimit: number,
  owner: string,
  createdAt?: string | null,
};

export enum Status {
  NoLoan = "NoLoan",
  LoanActive = "LoanActive",
  LoanInActive = "LoanInActive",
  LoanCleared = "LoanCleared",
  LoanBL = "LoanBL",
  AccountActive = "AccountActive",
  AccountInactive = "AccountInactive",
  AccountBlackListed = "AccountBlackListed",
  AccountNotBL = "AccountNotBL",
  SMNonLons = "SMNonLons",
  ChmMbrGrpContri = "ChmMbrGrpContri",
  ChmSndMbr = "ChmSndMbr",
  SMLonRepayment = "SMLonRepayment",
  ChmLonRepayment = "ChmLonRepayment",
  Yes = "Yes",
  No = "No",
  CredSlrLonRepayment = "CredSlrLonRepayment",
  AwaitingResponse = "AwaitingResponse",
  Approved = "Approved",
  Declined = "Declined",
  TransactionRev = "TransactionRev",
  BiznaShare = "BiznaShare",
}


export type ModelSMAccountConditionInput = {
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  loanAcceptanceCode?: ModelStringInput | null,
  ttlDpstSM?: ModelFloatInput | null,
  TtlWthdrwnSM?: ModelFloatInput | null,
  TtlActvLonsTmsLnrCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlActvLonsTmsSllrCov?: ModelFloatInput | null,
  TtlActvLonsTmsByrCov?: ModelFloatInput | null,
  TtlActvLonsAmtSllrCov?: ModelFloatInput | null,
  TtlActvLonsAmtByrCov?: ModelFloatInput | null,
  TtlBLLonsTmsSllrCov?: ModelFloatInput | null,
  TtlBLLonsTmsByrCov?: ModelFloatInput | null,
  TtlBLLonsAmtSllrCov?: ModelFloatInput | null,
  TtlBLLonsAmtByrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsSllrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsByrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtSllrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtByrCov?: ModelFloatInput | null,
  TtlActvLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtByrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtByrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtByrNonCov?: ModelFloatInput | null,
  ttlNonLonsRecSM?: ModelFloatInput | null,
  ttlNonLonsSentSM?: ModelFloatInput | null,
  ttlNonLonsRecChm?: ModelFloatInput | null,
  ttlNonLonsSentChm?: ModelFloatInput | null,
  MaxTymsBL?: ModelFloatInput | null,
  MaxTymsIHvBL?: ModelFloatInput | null,
  MaxAcBal?: ModelFloatInput | null,
  TymsIHvGivnLn?: ModelFloatInput | null,
  TymsMyLnClrd?: ModelFloatInput | null,
  DefaultPenaltySM?: ModelFloatInput | null,
  loanStatus?: ModelStatusInput | null,
  acStatus?: ModelStatusInput | null,
  deActvtnReason?: ModelStringInput | null,
  blStatus?: ModelStatusInput | null,
  loanLimit?: ModelFloatInput | null,
  nonLonLimit?: ModelFloatInput | null,
  withdrawalLimit?: ModelFloatInput | null,
  depositLimit?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
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
  TtlActvLonsTmsLnrCov: number,
  TtlActvLonsTmsLneeCov: number,
  TtlActvLonsAmtLnrCov: number,
  TtlActvLonsAmtLneeCov: number,
  TtlBLLonsTmsLnrCov: number,
  TtlBLLonsTmsLneeCov: number,
  TtlBLLonsAmtLnrCov: number,
  TtlBLLonsAmtLneeCov: number,
  TtlClrdLonsTmsLnrCov: number,
  TtlClrdLonsTmsLneeCov: number,
  TtlClrdLonsAmtLnrCov: number,
  TtlClrdLonsAmtLneeCov: number,
  TtlActvLonsTmsLneeChmCov: number,
  TtlActvLonsAmtLneeChmCov: number,
  TtlBLLonsTmsLneeChmCov: number,
  TtlBLLonsAmtLneeChmCov: number,
  TtlClrdLonsTmsLneeChmCov: number,
  TtlClrdLonsAmtLneeChmCov: number,
  TtlActvLonsTmsSllrCov: number,
  TtlActvLonsTmsByrCov: number,
  TtlActvLonsAmtSllrCov: number,
  TtlActvLonsAmtByrCov: number,
  TtlBLLonsTmsSllrCov: number,
  TtlBLLonsTmsByrCov: number,
  TtlBLLonsAmtSllrCov: number,
  TtlBLLonsAmtByrCov: number,
  TtlClrdLonsTmsSllrCov: number,
  TtlClrdLonsTmsByrCov: number,
  TtlClrdLonsAmtSllrCov: number,
  TtlClrdLonsAmtByrCov: number,
  TtlActvLonsTmsLnrNonCov: number,
  TtlActvLonsTmsLneeNonCov: number,
  TtlActvLonsAmtLnrNonCov: number,
  TtlActvLonsAmtLneeNonCov: number,
  TtlBLLonsTmsLnrNonCov: number,
  TtlBLLonsTmsLneeNonCov: number,
  TtlBLLonsAmtLnrNonCov: number,
  TtlBLLonsAmtLneeNonCov: number,
  TtlClrdLonsTmsLnrNonCov: number,
  TtlClrdLonsTmsLneeNonCov: number,
  TtlClrdLonsAmtLnrNonCov: number,
  TtlClrdLonsAmtLneeNonCov: number,
  TtlActvLonsTmsLneeChmNonCov: number,
  TtlActvLonsAmtLneeChmNonCov: number,
  TtlBLLonsTmsLneeChmNonCov: number,
  TtlBLLonsAmtLneeChmNonCov: number,
  TtlClrdLonsTmsLneeChmNonCov: number,
  TtlClrdLonsAmtLneeChmNonCov: number,
  TtlActvLonsTmsSllrNonCov: number,
  TtlActvLonsTmsByrNonCov: number,
  TtlActvLonsAmtSllrNonCov: number,
  TtlActvLonsAmtByrNonCov: number,
  TtlBLLonsTmsSllrNonCov: number,
  TtlBLLonsTmsByrNonCov: number,
  TtlBLLonsAmtSllrNonCov: number,
  TtlBLLonsAmtByrNonCov: number,
  TtlClrdLonsTmsSllrNonCov: number,
  TtlClrdLonsTmsByrNonCov: number,
  TtlClrdLonsAmtSllrNonCov: number,
  TtlClrdLonsAmtByrNonCov: number,
  ttlNonLonsRecSM: number,
  ttlNonLonsSentSM: number,
  ttlNonLonsRecChm: number,
  ttlNonLonsSentChm: number,
  MaxTymsBL: number,
  MaxTymsIHvBL: number,
  MaxAcBal: number,
  TymsIHvGivnLn: number,
  TymsMyLnClrd: number,
  DefaultPenaltySM: number,
  loanStatus: Status,
  acStatus: Status,
  deActvtnReason: string,
  blStatus: Status,
  loanLimit: number,
  nonLonLimit: number,
  withdrawalLimit: number,
  depositLimit: number,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMAccountInput = {
  nationalid?: string | null,
  name?: string | null,
  phonecontact?: string | null,
  awsemail: string,
  balance?: number | null,
  pw?: string | null,
  loanAcceptanceCode?: string | null,
  ttlDpstSM?: number | null,
  TtlWthdrwnSM?: number | null,
  TtlActvLonsTmsLnrCov?: number | null,
  TtlActvLonsTmsLneeCov?: number | null,
  TtlActvLonsAmtLnrCov?: number | null,
  TtlActvLonsAmtLneeCov?: number | null,
  TtlBLLonsTmsLnrCov?: number | null,
  TtlBLLonsTmsLneeCov?: number | null,
  TtlBLLonsAmtLnrCov?: number | null,
  TtlBLLonsAmtLneeCov?: number | null,
  TtlClrdLonsTmsLnrCov?: number | null,
  TtlClrdLonsTmsLneeCov?: number | null,
  TtlClrdLonsAmtLnrCov?: number | null,
  TtlClrdLonsAmtLneeCov?: number | null,
  TtlActvLonsTmsLneeChmCov?: number | null,
  TtlActvLonsAmtLneeChmCov?: number | null,
  TtlBLLonsTmsLneeChmCov?: number | null,
  TtlBLLonsAmtLneeChmCov?: number | null,
  TtlClrdLonsTmsLneeChmCov?: number | null,
  TtlClrdLonsAmtLneeChmCov?: number | null,
  TtlActvLonsTmsSllrCov?: number | null,
  TtlActvLonsTmsByrCov?: number | null,
  TtlActvLonsAmtSllrCov?: number | null,
  TtlActvLonsAmtByrCov?: number | null,
  TtlBLLonsTmsSllrCov?: number | null,
  TtlBLLonsTmsByrCov?: number | null,
  TtlBLLonsAmtSllrCov?: number | null,
  TtlBLLonsAmtByrCov?: number | null,
  TtlClrdLonsTmsSllrCov?: number | null,
  TtlClrdLonsTmsByrCov?: number | null,
  TtlClrdLonsAmtSllrCov?: number | null,
  TtlClrdLonsAmtByrCov?: number | null,
  TtlActvLonsTmsLnrNonCov?: number | null,
  TtlActvLonsTmsLneeNonCov?: number | null,
  TtlActvLonsAmtLnrNonCov?: number | null,
  TtlActvLonsAmtLneeNonCov?: number | null,
  TtlBLLonsTmsLnrNonCov?: number | null,
  TtlBLLonsTmsLneeNonCov?: number | null,
  TtlBLLonsAmtLnrNonCov?: number | null,
  TtlBLLonsAmtLneeNonCov?: number | null,
  TtlClrdLonsTmsLnrNonCov?: number | null,
  TtlClrdLonsTmsLneeNonCov?: number | null,
  TtlClrdLonsAmtLnrNonCov?: number | null,
  TtlClrdLonsAmtLneeNonCov?: number | null,
  TtlActvLonsTmsLneeChmNonCov?: number | null,
  TtlActvLonsAmtLneeChmNonCov?: number | null,
  TtlBLLonsTmsLneeChmNonCov?: number | null,
  TtlBLLonsAmtLneeChmNonCov?: number | null,
  TtlClrdLonsTmsLneeChmNonCov?: number | null,
  TtlClrdLonsAmtLneeChmNonCov?: number | null,
  TtlActvLonsTmsSllrNonCov?: number | null,
  TtlActvLonsTmsByrNonCov?: number | null,
  TtlActvLonsAmtSllrNonCov?: number | null,
  TtlActvLonsAmtByrNonCov?: number | null,
  TtlBLLonsTmsSllrNonCov?: number | null,
  TtlBLLonsTmsByrNonCov?: number | null,
  TtlBLLonsAmtSllrNonCov?: number | null,
  TtlBLLonsAmtByrNonCov?: number | null,
  TtlClrdLonsTmsSllrNonCov?: number | null,
  TtlClrdLonsTmsByrNonCov?: number | null,
  TtlClrdLonsAmtSllrNonCov?: number | null,
  TtlClrdLonsAmtByrNonCov?: number | null,
  ttlNonLonsRecSM?: number | null,
  ttlNonLonsSentSM?: number | null,
  ttlNonLonsRecChm?: number | null,
  ttlNonLonsSentChm?: number | null,
  MaxTymsBL?: number | null,
  MaxTymsIHvBL?: number | null,
  MaxAcBal?: number | null,
  TymsIHvGivnLn?: number | null,
  TymsMyLnClrd?: number | null,
  DefaultPenaltySM?: number | null,
  loanStatus?: Status | null,
  acStatus?: Status | null,
  deActvtnReason?: string | null,
  blStatus?: Status | null,
  loanLimit?: number | null,
  nonLonLimit?: number | null,
  withdrawalLimit?: number | null,
  depositLimit?: number | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteSMAccountInput = {
  awsemail: string,
};

export type CreateSMLoansCoveredInput = {
  id?: string | null,
  loaneeid: string,
  loaneePhn: string,
  loanerLoanee: string,
  loanerLoaneeAdv: string,
  loanerPhn: string,
  advregnu: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountExpectedBackWthClrnc: number,
  amountrepaid: number,
  lonBala: number,
  loaneename: string,
  loanername: string,
  repaymentPeriod: number,
  DefaultPenaltySM: number,
  DefaultPenaltySM2: number,
  timeExpBack: number,
  timeExpBack2: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelSMLoansCoveredConditionInput = {
  loaneeid?: ModelStringInput | null,
  loaneePhn?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  loanerLoaneeAdv?: ModelStringInput | null,
  loanerPhn?: ModelStringInput | null,
  advregnu?: ModelStringInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  lonBala?: ModelFloatInput | null,
  loaneename?: ModelStringInput | null,
  loanername?: ModelStringInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  DefaultPenaltySM?: ModelFloatInput | null,
  DefaultPenaltySM2?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSMLoansCoveredConditionInput | null > | null,
  or?: Array< ModelSMLoansCoveredConditionInput | null > | null,
  not?: ModelSMLoansCoveredConditionInput | null,
};

export type SMLoansCovered = {
  __typename: "SMLoansCovered",
  id: string,
  loaneeid: string,
  loaneePhn: string,
  loanerLoanee: string,
  loanerLoaneeAdv: string,
  loanerPhn: string,
  advregnu: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountExpectedBackWthClrnc: number,
  amountrepaid: number,
  lonBala: number,
  loaneename: string,
  loanername: string,
  repaymentPeriod: number,
  DefaultPenaltySM: number,
  DefaultPenaltySM2: number,
  timeExpBack: number,
  timeExpBack2: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMLoansCoveredInput = {
  id: string,
  loaneeid?: string | null,
  loaneePhn?: string | null,
  loanerLoanee?: string | null,
  loanerLoaneeAdv?: string | null,
  loanerPhn?: string | null,
  advregnu?: string | null,
  loanerId?: string | null,
  amountgiven?: number | null,
  amountexpected?: number | null,
  amountExpectedBackWthClrnc?: number | null,
  amountrepaid?: number | null,
  lonBala?: number | null,
  loaneename?: string | null,
  loanername?: string | null,
  repaymentPeriod?: number | null,
  DefaultPenaltySM?: number | null,
  DefaultPenaltySM2?: number | null,
  timeExpBack?: number | null,
  timeExpBack2?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteSMLoansCoveredInput = {
  id: string,
};

export type CreateSMLoansNonCoveredInput = {
  id?: string | null,
  loaneePhn: string,
  loanerPhn: string,
  loanerLoanee: string,
  loaneeid: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountExpectedBackWthClrnc: number,
  amountrepaid: number,
  lonBala: number,
  loaneename: string,
  loanername: string,
  repaymentPeriod: number,
  DefaultPenaltySM: number,
  DefaultPenaltySM2: number,
  timeExpBack: number,
  timeExpBack2: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelSMLoansNonCoveredConditionInput = {
  loaneePhn?: ModelStringInput | null,
  loanerPhn?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  loaneeid?: ModelIDInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  lonBala?: ModelFloatInput | null,
  loaneename?: ModelStringInput | null,
  loanername?: ModelStringInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  DefaultPenaltySM?: ModelFloatInput | null,
  DefaultPenaltySM2?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSMLoansNonCoveredConditionInput | null > | null,
  or?: Array< ModelSMLoansNonCoveredConditionInput | null > | null,
  not?: ModelSMLoansNonCoveredConditionInput | null,
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

export type SMLoansNonCovered = {
  __typename: "SMLoansNonCovered",
  id: string,
  loaneePhn: string,
  loanerPhn: string,
  loanerLoanee: string,
  loaneeid: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountExpectedBackWthClrnc: number,
  amountrepaid: number,
  lonBala: number,
  loaneename: string,
  loanername: string,
  repaymentPeriod: number,
  DefaultPenaltySM: number,
  DefaultPenaltySM2: number,
  timeExpBack: number,
  timeExpBack2: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMLoansNonCoveredInput = {
  id: string,
  loaneePhn?: string | null,
  loanerPhn?: string | null,
  loanerLoanee?: string | null,
  loaneeid?: string | null,
  loanerId?: string | null,
  amountgiven?: number | null,
  amountexpected?: number | null,
  amountExpectedBackWthClrnc?: number | null,
  amountrepaid?: number | null,
  lonBala?: number | null,
  loaneename?: string | null,
  loanername?: string | null,
  repaymentPeriod?: number | null,
  DefaultPenaltySM?: number | null,
  DefaultPenaltySM2?: number | null,
  timeExpBack?: number | null,
  timeExpBack2?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteSMLoansNonCoveredInput = {
  id: string,
};

export type CreateNonLoansInput = {
  id?: string | null,
  senderPhn: string,
  recPhn: string,
  RecName: string,
  SenderName: string,
  amount: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelNonLoansConditionInput = {
  senderPhn?: ModelStringInput | null,
  recPhn?: ModelStringInput | null,
  RecName?: ModelStringInput | null,
  SenderName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNonLoansConditionInput | null > | null,
  or?: Array< ModelNonLoansConditionInput | null > | null,
  not?: ModelNonLoansConditionInput | null,
};

export type NonLoans = {
  __typename: "NonLoans",
  id: string,
  senderPhn: string,
  recPhn: string,
  RecName: string,
  SenderName: string,
  amount: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNonLoansInput = {
  id: string,
  senderPhn?: string | null,
  recPhn?: string | null,
  RecName?: string | null,
  SenderName?: string | null,
  amount?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteNonLoansInput = {
  id: string,
};

export type CreateSokoAdInput = {
  id?: string | null,
  sokoregno: string,
  sokokntct: string,
  sokoname: string,
  sokoprice: number,
  sokotown: string,
  sokolnprcntg: number,
  sokolpymntperiod: number,
  sokodesc: string,
  owner: string,
  createdAt?: string | null,
};

export type ModelSokoAdConditionInput = {
  sokoregno?: ModelStringInput | null,
  sokokntct?: ModelStringInput | null,
  sokoname?: ModelStringInput | null,
  sokoprice?: ModelFloatInput | null,
  sokotown?: ModelStringInput | null,
  sokolnprcntg?: ModelFloatInput | null,
  sokolpymntperiod?: ModelFloatInput | null,
  sokodesc?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSokoAdConditionInput | null > | null,
  or?: Array< ModelSokoAdConditionInput | null > | null,
  not?: ModelSokoAdConditionInput | null,
};

export type SokoAd = {
  __typename: "SokoAd",
  id: string,
  sokoregno: string,
  sokokntct: string,
  sokoname: string,
  sokoprice: number,
  sokotown: string,
  sokolnprcntg: number,
  sokolpymntperiod: number,
  sokodesc: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSokoAdInput = {
  id: string,
  sokoregno?: string | null,
  sokokntct?: string | null,
  sokoname?: string | null,
  sokoprice?: number | null,
  sokotown?: string | null,
  sokolnprcntg?: number | null,
  sokolpymntperiod?: number | null,
  sokodesc?: string | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteSokoAdInput = {
  id: string,
};

export type CreateRafikiLnAdInput = {
  id?: string | null,
  rafikiName: string,
  rafikicntct: string,
  rafikiEmail: string,
  rafikiamnt: number,
  rafikidesc: string,
  rafikiprcntg: number,
  rafikirpymntperiod: number,
  owner: string,
  createdAt?: string | null,
};

export type ModelRafikiLnAdConditionInput = {
  rafikiName?: ModelStringInput | null,
  rafikicntct?: ModelStringInput | null,
  rafikiEmail?: ModelStringInput | null,
  rafikiamnt?: ModelFloatInput | null,
  rafikidesc?: ModelStringInput | null,
  rafikiprcntg?: ModelFloatInput | null,
  rafikirpymntperiod?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelRafikiLnAdConditionInput | null > | null,
  or?: Array< ModelRafikiLnAdConditionInput | null > | null,
  not?: ModelRafikiLnAdConditionInput | null,
};

export type RafikiLnAd = {
  __typename: "RafikiLnAd",
  id: string,
  rafikiName: string,
  rafikicntct: string,
  rafikiEmail: string,
  rafikiamnt: number,
  rafikidesc: string,
  rafikiprcntg: number,
  rafikirpymntperiod: number,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRafikiLnAdInput = {
  id: string,
  rafikiName?: string | null,
  rafikicntct?: string | null,
  rafikiEmail?: string | null,
  rafikiamnt?: number | null,
  rafikidesc?: string | null,
  rafikiprcntg?: number | null,
  rafikirpymntperiod?: number | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteRafikiLnAdInput = {
  id: string,
};

export type CreateAgentInput = {
  phonecontact: string,
  sagentregno: string,
  nationalid: string,
  name: string,
  ttlEarnings: number,
  pw: string,
  email: string,
  TtlFltIn: number,
  TtlFltOut: number,
  floatBal: number,
  latitude: number,
  longitude: number,
  agentEarningBal: number,
  status: Status,
  bankName: string,
  bkAcNo: string,
  owner: string,
  town: string,
  MFNWithdrwlFee: number,
  createdAt?: string | null,
};

export type ModelAgentConditionInput = {
  sagentregno?: ModelStringInput | null,
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ttlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  email?: ModelStringInput | null,
  TtlFltIn?: ModelFloatInput | null,
  TtlFltOut?: ModelFloatInput | null,
  floatBal?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  town?: ModelStringInput | null,
  MFNWithdrwlFee?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAgentConditionInput | null > | null,
  or?: Array< ModelAgentConditionInput | null > | null,
  not?: ModelAgentConditionInput | null,
};

export type Agent = {
  __typename: "Agent",
  phonecontact: string,
  sagentregno: string,
  nationalid: string,
  name: string,
  ttlEarnings: number,
  pw: string,
  email: string,
  TtlFltIn: number,
  TtlFltOut: number,
  floatBal: number,
  latitude: number,
  longitude: number,
  agentEarningBal: number,
  status: Status,
  bankName: string,
  bkAcNo: string,
  owner: string,
  town: string,
  MFNWithdrwlFee: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAgentInput = {
  phonecontact: string,
  sagentregno?: string | null,
  nationalid?: string | null,
  name?: string | null,
  ttlEarnings?: number | null,
  pw?: string | null,
  email?: string | null,
  TtlFltIn?: number | null,
  TtlFltOut?: number | null,
  floatBal?: number | null,
  latitude?: number | null,
  longitude?: number | null,
  agentEarningBal?: number | null,
  status?: Status | null,
  bankName?: string | null,
  bkAcNo?: string | null,
  owner?: string | null,
  town?: string | null,
  MFNWithdrwlFee?: number | null,
  createdAt?: string | null,
};

export type DeleteAgentInput = {
  phonecontact: string,
};

export type CreateFloatPurchaseInput = {
  agentphone: string,
  amount: number,
  transactId: string,
  bankAdminID: string,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelFloatPurchaseConditionInput = {
  agentphone?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankAdminID?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFloatPurchaseConditionInput | null > | null,
  or?: Array< ModelFloatPurchaseConditionInput | null > | null,
  not?: ModelFloatPurchaseConditionInput | null,
};

export type FloatPurchase = {
  __typename: "FloatPurchase",
  agentphone: string,
  amount: number,
  transactId: string,
  bankAdminID: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFloatPurchaseInput = {
  agentphone?: string | null,
  amount?: number | null,
  transactId: string,
  bankAdminID?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteFloatPurchaseInput = {
  transactId: string,
};

export type CreateFloatAddInput = {
  id?: string | null,
  withdrawerid: string,
  amount: number,
  agentPhonecontact: string,
  agentName: string,
  userName: string,
  saName: string,
  saPhone: string,
  sagentId: string,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelFloatAddConditionInput = {
  withdrawerid?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  agentPhonecontact?: ModelStringInput | null,
  agentName?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  saName?: ModelStringInput | null,
  saPhone?: ModelStringInput | null,
  sagentId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFloatAddConditionInput | null > | null,
  or?: Array< ModelFloatAddConditionInput | null > | null,
  not?: ModelFloatAddConditionInput | null,
};

export type FloatAdd = {
  __typename: "FloatAdd",
  id: string,
  withdrawerid: string,
  amount: number,
  agentPhonecontact: string,
  agentName: string,
  userName: string,
  saName: string,
  saPhone: string,
  sagentId: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFloatAddInput = {
  id: string,
  withdrawerid?: string | null,
  amount?: number | null,
  agentPhonecontact?: string | null,
  agentName?: string | null,
  userName?: string | null,
  saName?: string | null,
  saPhone?: string | null,
  sagentId?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteFloatAddInput = {
  id: string,
};

export type CreateFloatReductionInput = {
  id?: string | null,
  amount: number,
  depositerid: string,
  agContact: string,
  agentName: string,
  userName: string,
  status: Status,
  createdAt?: string | null,
};

export type ModelFloatReductionConditionInput = {
  amount?: ModelFloatInput | null,
  depositerid?: ModelStringInput | null,
  agContact?: ModelStringInput | null,
  agentName?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFloatReductionConditionInput | null > | null,
  or?: Array< ModelFloatReductionConditionInput | null > | null,
  not?: ModelFloatReductionConditionInput | null,
};

export type FloatReduction = {
  __typename: "FloatReduction",
  id: string,
  amount: number,
  depositerid: string,
  agContact: string,
  agentName: string,
  userName: string,
  status: Status,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFloatReductionInput = {
  id: string,
  amount?: number | null,
  depositerid?: string | null,
  agContact?: string | null,
  agentName?: string | null,
  userName?: string | null,
  status?: Status | null,
  createdAt?: string | null,
};

export type DeleteFloatReductionInput = {
  id: string,
};

export type CreateAgentWithdrawalsInput = {
  id?: string | null,
  agentPhone: string,
  bankAdminId: string,
  bankName: string,
  bkAcNo: string,
  Amount: number,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelAgentWithdrawalsConditionInput = {
  agentPhone?: ModelStringInput | null,
  bankAdminId?: ModelStringInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  Amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAgentWithdrawalsConditionInput | null > | null,
  or?: Array< ModelAgentWithdrawalsConditionInput | null > | null,
  not?: ModelAgentWithdrawalsConditionInput | null,
};

export type AgentWithdrawals = {
  __typename: "AgentWithdrawals",
  id: string,
  agentPhone: string,
  bankAdminId: string,
  bankName: string,
  bkAcNo: string,
  Amount: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAgentWithdrawalsInput = {
  id: string,
  agentPhone?: string | null,
  bankAdminId?: string | null,
  bankName?: string | null,
  bkAcNo?: string | null,
  Amount?: number | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteAgentWithdrawalsInput = {
  id: string,
};

export type CreateSAgentInput = {
  saPhoneContact: string,
  saNationalid: string,
  name: string,
  pw: string,
  TtlEarnings: number,
  actvMFNdog: number,
  InctvMFNdog: number,
  email: string,
  saBalance: number,
  bankName: string,
  bkAcNo: string,
  status: Status,
  owner: string,
  MFKWithdrwlFee: number,
  createdAt?: string | null,
};

export type ModelSAgentConditionInput = {
  saNationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pw?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  actvMFNdog?: ModelFloatInput | null,
  InctvMFNdog?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  saBalance?: ModelFloatInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  MFKWithdrwlFee?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSAgentConditionInput | null > | null,
  or?: Array< ModelSAgentConditionInput | null > | null,
  not?: ModelSAgentConditionInput | null,
};

export type SAgent = {
  __typename: "SAgent",
  saPhoneContact: string,
  saNationalid: string,
  name: string,
  pw: string,
  TtlEarnings: number,
  actvMFNdog: number,
  InctvMFNdog: number,
  email: string,
  saBalance: number,
  bankName: string,
  bkAcNo: string,
  status: Status,
  owner: string,
  MFKWithdrwlFee: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSAgentInput = {
  saPhoneContact: string,
  saNationalid?: string | null,
  name?: string | null,
  pw?: string | null,
  TtlEarnings?: number | null,
  actvMFNdog?: number | null,
  InctvMFNdog?: number | null,
  email?: string | null,
  saBalance?: number | null,
  bankName?: string | null,
  bkAcNo?: string | null,
  status?: Status | null,
  owner?: string | null,
  MFKWithdrwlFee?: number | null,
  createdAt?: string | null,
};

export type DeleteSAgentInput = {
  saPhoneContact: string,
};

export type CreateSAgentWithdrawalsInput = {
  id?: string | null,
  saId: string,
  amount: number,
  bankAdmnId: string,
  bankName: string,
  bkAcNo: string,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelSAgentWithdrawalsConditionInput = {
  saId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankAdmnId?: ModelStringInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSAgentWithdrawalsConditionInput | null > | null,
  or?: Array< ModelSAgentWithdrawalsConditionInput | null > | null,
  not?: ModelSAgentWithdrawalsConditionInput | null,
};

export type SAgentWithdrawals = {
  __typename: "SAgentWithdrawals",
  id: string,
  saId: string,
  amount: number,
  bankAdmnId: string,
  bankName: string,
  bkAcNo: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSAgentWithdrawalsInput = {
  id: string,
  saId?: string | null,
  amount?: number | null,
  bankAdmnId?: string | null,
  bankName?: string | null,
  bkAcNo?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteSAgentWithdrawalsInput = {
  id: string,
};

export type CreatePersonelInput = {
  phoneKontact: string,
  BusinessRegNo: string,
  nationalid: string,
  BiznaName: string,
  name: string,
  ownrsss: string,
  email: string,
  workerId: string,
  workId: string,
  createdAt?: string | null,
};

export type ModelPersonelConditionInput = {
  phoneKontact?: ModelStringInput | null,
  BusinessRegNo?: ModelStringInput | null,
  nationalid?: ModelStringInput | null,
  BiznaName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ownrsss?: ModelStringInput | null,
  email?: ModelStringInput | null,
  workId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPersonelConditionInput | null > | null,
  or?: Array< ModelPersonelConditionInput | null > | null,
  not?: ModelPersonelConditionInput | null,
};

export type Personel = {
  __typename: "Personel",
  phoneKontact: string,
  BusinessRegNo: string,
  nationalid: string,
  BiznaName: string,
  name: string,
  ownrsss: string,
  email: string,
  workerId: string,
  workId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePersonelInput = {
  phoneKontact?: string | null,
  BusinessRegNo?: string | null,
  nationalid?: string | null,
  BiznaName?: string | null,
  name?: string | null,
  ownrsss?: string | null,
  email?: string | null,
  workerId: string,
  workId?: string | null,
  createdAt?: string | null,
};

export type DeletePersonelInput = {
  workerId: string,
};

export type CreateBiznaInput = {
  BusKntct: string,
  busName: string,
  pw: string,
  TtlEarnings: number,
  earningsBal: number,
  netEarnings: number,
  email: string,
  status: string,
  owner: string,
  description: string,
  createdAt?: string | null,
};

export type ModelBiznaConditionInput = {
  busName?: ModelStringInput | null,
  pw?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  earningsBal?: ModelFloatInput | null,
  netEarnings?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelBiznaConditionInput | null > | null,
  or?: Array< ModelBiznaConditionInput | null > | null,
  not?: ModelBiznaConditionInput | null,
};

export type Bizna = {
  __typename: "Bizna",
  BusKntct: string,
  busName: string,
  pw: string,
  TtlEarnings: number,
  earningsBal: number,
  netEarnings: number,
  email: string,
  status: string,
  owner: string,
  description: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBiznaInput = {
  BusKntct: string,
  busName?: string | null,
  pw?: string | null,
  TtlEarnings?: number | null,
  earningsBal?: number | null,
  netEarnings?: number | null,
  email?: string | null,
  status?: string | null,
  owner?: string | null,
  description?: string | null,
  createdAt?: string | null,
};

export type DeleteBiznaInput = {
  BusKntct: string,
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
  createdAt?: string | null,
};

export type ModelBankAdminConditionInput = {
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  BankAdmBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
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
  createdAt?: string | null,
};

export type DeleteBankAdminInput = {
  nationalid: string,
};

export type CreateBankAdmWithdrawalsInput = {
  id?: string | null,
  bankAdmNatId: string,
  amount: number,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelBankAdmWithdrawalsConditionInput = {
  bankAdmNatId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelBankAdmWithdrawalsConditionInput | null > | null,
  or?: Array< ModelBankAdmWithdrawalsConditionInput | null > | null,
  not?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type BankAdmWithdrawals = {
  __typename: "BankAdmWithdrawals",
  id: string,
  bankAdmNatId: string,
  amount: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBankAdmWithdrawalsInput = {
  id: string,
  bankAdmNatId?: string | null,
  amount?: number | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
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
  bankName: string,
  bkAcNo: string,
  officeLoc: string,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelAdvocateConditionInput = {
  nationalid?: ModelStringInput | null,
  pwd?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  advBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  officeLoc?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
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
  bankName: string,
  bkAcNo: string,
  officeLoc: string,
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
  bankName?: string | null,
  bkAcNo?: string | null,
  officeLoc?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteAdvocateInput = {
  advregnu: string,
};

export type CreateAdvocateWithdrawalsInput = {
  id?: string | null,
  bankAdmnId: string,
  advregnu: string,
  amount: number,
  bankName: string,
  bkAcNo: string,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelAdvocateWithdrawalsConditionInput = {
  bankAdmnId?: ModelStringInput | null,
  advregnu?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAdvocateWithdrawalsConditionInput | null > | null,
  or?: Array< ModelAdvocateWithdrawalsConditionInput | null > | null,
  not?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type AdvocateWithdrawals = {
  __typename: "AdvocateWithdrawals",
  id: string,
  bankAdmnId: string,
  advregnu: string,
  amount: number,
  bankName: string,
  bkAcNo: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdvocateWithdrawalsInput = {
  id: string,
  bankAdmnId?: string | null,
  advregnu?: string | null,
  amount?: number | null,
  bankName?: string | null,
  bkAcNo?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
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
  AdvCompanyCom: number,
  bankAdminCom: number,
  sawithdrawalFee: number,
  advuserwithdrawalFee: number,
  bankAdmuserwithdrawalFee: number,
  userLoanTransferFee: number,
  userTransferFee: number,
  chmMmbrTransferFee: number,
  chmTransferFee: number,
  biznaTransferFee: number,
  palpalLnRpymntFee: number,
  chmLnRpymntFee: number,
  crdSllrLnRpymntFee: number,
  userClearanceFee: number,
  CoverageFee: number,
  vat: number,
  ttlvat: number,
  enquiryFee: number,
  UsrWthdrwlFees: number,
  ttlNonLonssRecSM: number,
  ttlNonLonssSentSM: number,
  ttlNonLonssRecChm: number,
  ttlNonLonssSentChm: number,
  companyEarningBal: number,
  companyEarning: number,
  agentEarningBal: number,
  agentEarning: number,
  saEarningBal: number,
  saEarning: number,
  AdvEarningBal: number,
  AdvEarning: number,
  admEarningBal: number,
  admEarning: number,
  ttlUsrDep: number,
  ttlUserWthdrwl?: number | null,
  agentFloatIn: number,
  agentFloatOut: number,
  ttlActiveUsers: number,
  ttlInactvUsrs: number,
  ttlBLUsrs: number,
  ttlActiveChm: number,
  ttlInactvChm: number,
  ttlBLChm: number,
  ttlActiveChmUsers: number,
  ttlInactvChmUsrs: number,
  ttlBLChmUsrs: number,
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
  ttlSMLnsInAmtCov: number,
  ttlChmLnsInAmtCov: number,
  ttlSellerLnsInAmtCov: number,
  ttlSMLnsInActvAmtCov: number,
  ttlChmLnsInActvAmtCov: number,
  ttlSellerLnsInActvAmtCov: number,
  ttlSMLnsInClrdAmtCov: number,
  ttlChmLnsInClrdAmtCov: number,
  ttlSellerLnsInClrdAmtCov: number,
  ttlSMLnsInBlAmtCov: number,
  ttlChmLnsInBlAmtCov: number,
  ttlSellerLnsInBlAmtCov: number,
  ttlSMLnsInTymsCov: number,
  ttlChmLnsInTymsCov: number,
  ttlSellerLnsInTymsCov: number,
  ttlSMLnsInActvTymsCov: number,
  ttlChmLnsInActvTymsCov: number,
  ttlSellerLnsInActvTymsCov: number,
  ttlSMLnsInClrdTymsCov: number,
  ttlChmLnsInClrdTymsCov: number,
  ttlSellerLnsInClrdTymsCov: number,
  ttlSMLnsInBlTymsCov: number,
  ttlChmLnsInBlTymsCov: number,
  ttlSellerLnsInBlTymsCov: number,
  ttlCompTrnsfrEarningsCov: number,
  ttlCompBLClrncEarningsCov: number,
  ttlSMLnsInAmtNonCov: number,
  ttlChmLnsInAmtNonCov: number,
  ttlSellerLnsInAmtNonCov: number,
  ttlSMLnsInActvAmtNonCov: number,
  ttlChmLnsInActvAmtNonCov: number,
  ttlSellerLnsInActvAmtNonCov: number,
  ttlSMLnsInClrdAmtNonCov: number,
  ttlChmLnsInClrdAmtNonCov: number,
  ttlSellerLnsInClrdAmtNonCov: number,
  ttlSMLnsInBlAmtNonCov: number,
  ttlChmLnsInBlAmtNonCov: number,
  ttlSellerLnsInBlAmtNonCov: number,
  ttlSMLnsInTymsNonCov: number,
  ttlChmLnsInTymsNonCov: number,
  ttlSellerLnsInTymsNonCov: number,
  ttlSMLnsInActvTymsNonCov: number,
  ttlChmLnsInActvTymsNonCov: number,
  ttlSellerLnsInActvTymsNonCov: number,
  ttlSMLnsInClrdTymsNonCov: number,
  ttlChmLnsInClrdTymsNonCov: number,
  ttlSellerLnsInClrdTymsNonCov: number,
  ttlSMLnsInBlTymsNonCov: number,
  ttlChmLnsInBlTymsNonCov: number,
  ttlSellerLnsInBlTymsNonCov: number,
  ttlCompTrnsfrEarningsNonCov: number,
  ttlCompBLClrncEarningsNonCov: number,
  ttlCompCovEarnings: number,
  maxInterestSM: number,
  maxInterestPwnBrkr: number,
  maxInterestCredSllr: number,
  maxInterestGrp: number,
  maxMFNdogos: number,
  maxBLs: number,
  owner: string,
  totalLnsRecovered: number,
  createdAt?: string | null,
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
  AdvCompanyCom?: ModelFloatInput | null,
  bankAdminCom?: ModelFloatInput | null,
  sawithdrawalFee?: ModelFloatInput | null,
  advuserwithdrawalFee?: ModelFloatInput | null,
  bankAdmuserwithdrawalFee?: ModelFloatInput | null,
  userLoanTransferFee?: ModelFloatInput | null,
  userTransferFee?: ModelFloatInput | null,
  chmMmbrTransferFee?: ModelFloatInput | null,
  chmTransferFee?: ModelFloatInput | null,
  biznaTransferFee?: ModelFloatInput | null,
  palpalLnRpymntFee?: ModelFloatInput | null,
  chmLnRpymntFee?: ModelFloatInput | null,
  crdSllrLnRpymntFee?: ModelFloatInput | null,
  userClearanceFee?: ModelFloatInput | null,
  CoverageFee?: ModelFloatInput | null,
  vat?: ModelFloatInput | null,
  ttlvat?: ModelFloatInput | null,
  enquiryFee?: ModelFloatInput | null,
  UsrWthdrwlFees?: ModelFloatInput | null,
  ttlNonLonssRecSM?: ModelFloatInput | null,
  ttlNonLonssSentSM?: ModelFloatInput | null,
  ttlNonLonssRecChm?: ModelFloatInput | null,
  ttlNonLonssSentChm?: ModelFloatInput | null,
  companyEarningBal?: ModelFloatInput | null,
  companyEarning?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  agentEarning?: ModelFloatInput | null,
  saEarningBal?: ModelFloatInput | null,
  saEarning?: ModelFloatInput | null,
  AdvEarningBal?: ModelFloatInput | null,
  AdvEarning?: ModelFloatInput | null,
  admEarningBal?: ModelFloatInput | null,
  admEarning?: ModelFloatInput | null,
  ttlUsrDep?: ModelFloatInput | null,
  ttlUserWthdrwl?: ModelFloatInput | null,
  agentFloatIn?: ModelFloatInput | null,
  agentFloatOut?: ModelFloatInput | null,
  ttlActiveUsers?: ModelFloatInput | null,
  ttlInactvUsrs?: ModelFloatInput | null,
  ttlBLUsrs?: ModelFloatInput | null,
  ttlActiveChm?: ModelFloatInput | null,
  ttlInactvChm?: ModelFloatInput | null,
  ttlBLChm?: ModelFloatInput | null,
  ttlActiveChmUsers?: ModelFloatInput | null,
  ttlInactvChmUsrs?: ModelFloatInput | null,
  ttlBLChmUsrs?: ModelFloatInput | null,
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
  ttlSMLnsInAmtCov?: ModelFloatInput | null,
  ttlChmLnsInAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInAmtCov?: ModelFloatInput | null,
  ttlSMLnsInActvAmtCov?: ModelFloatInput | null,
  ttlChmLnsInActvAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInActvAmtCov?: ModelFloatInput | null,
  ttlSMLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlChmLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlSMLnsInBlAmtCov?: ModelFloatInput | null,
  ttlChmLnsInBlAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInBlAmtCov?: ModelFloatInput | null,
  ttlSMLnsInTymsCov?: ModelFloatInput | null,
  ttlChmLnsInTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInTymsCov?: ModelFloatInput | null,
  ttlSMLnsInActvTymsCov?: ModelFloatInput | null,
  ttlChmLnsInActvTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInActvTymsCov?: ModelFloatInput | null,
  ttlSMLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlChmLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlSMLnsInBlTymsCov?: ModelFloatInput | null,
  ttlChmLnsInBlTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInBlTymsCov?: ModelFloatInput | null,
  ttlCompTrnsfrEarningsCov?: ModelFloatInput | null,
  ttlCompBLClrncEarningsCov?: ModelFloatInput | null,
  ttlSMLnsInAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlCompTrnsfrEarningsNonCov?: ModelFloatInput | null,
  ttlCompBLClrncEarningsNonCov?: ModelFloatInput | null,
  ttlCompCovEarnings?: ModelFloatInput | null,
  maxInterestSM?: ModelFloatInput | null,
  maxInterestPwnBrkr?: ModelFloatInput | null,
  maxInterestCredSllr?: ModelFloatInput | null,
  maxInterestGrp?: ModelFloatInput | null,
  maxMFNdogos?: ModelFloatInput | null,
  maxBLs?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  totalLnsRecovered?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
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
  AdvCompanyCom: number,
  bankAdminCom: number,
  sawithdrawalFee: number,
  advuserwithdrawalFee: number,
  bankAdmuserwithdrawalFee: number,
  userLoanTransferFee: number,
  userTransferFee: number,
  chmMmbrTransferFee: number,
  chmTransferFee: number,
  biznaTransferFee: number,
  palpalLnRpymntFee: number,
  chmLnRpymntFee: number,
  crdSllrLnRpymntFee: number,
  userClearanceFee: number,
  CoverageFee: number,
  vat: number,
  ttlvat: number,
  enquiryFee: number,
  UsrWthdrwlFees: number,
  ttlNonLonssRecSM: number,
  ttlNonLonssSentSM: number,
  ttlNonLonssRecChm: number,
  ttlNonLonssSentChm: number,
  companyEarningBal: number,
  companyEarning: number,
  agentEarningBal: number,
  agentEarning: number,
  saEarningBal: number,
  saEarning: number,
  AdvEarningBal: number,
  AdvEarning: number,
  admEarningBal: number,
  admEarning: number,
  ttlUsrDep: number,
  ttlUserWthdrwl?: number | null,
  agentFloatIn: number,
  agentFloatOut: number,
  ttlActiveUsers: number,
  ttlInactvUsrs: number,
  ttlBLUsrs: number,
  ttlActiveChm: number,
  ttlInactvChm: number,
  ttlBLChm: number,
  ttlActiveChmUsers: number,
  ttlInactvChmUsrs: number,
  ttlBLChmUsrs: number,
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
  ttlSMLnsInAmtCov: number,
  ttlChmLnsInAmtCov: number,
  ttlSellerLnsInAmtCov: number,
  ttlSMLnsInActvAmtCov: number,
  ttlChmLnsInActvAmtCov: number,
  ttlSellerLnsInActvAmtCov: number,
  ttlSMLnsInClrdAmtCov: number,
  ttlChmLnsInClrdAmtCov: number,
  ttlSellerLnsInClrdAmtCov: number,
  ttlSMLnsInBlAmtCov: number,
  ttlChmLnsInBlAmtCov: number,
  ttlSellerLnsInBlAmtCov: number,
  ttlSMLnsInTymsCov: number,
  ttlChmLnsInTymsCov: number,
  ttlSellerLnsInTymsCov: number,
  ttlSMLnsInActvTymsCov: number,
  ttlChmLnsInActvTymsCov: number,
  ttlSellerLnsInActvTymsCov: number,
  ttlSMLnsInClrdTymsCov: number,
  ttlChmLnsInClrdTymsCov: number,
  ttlSellerLnsInClrdTymsCov: number,
  ttlSMLnsInBlTymsCov: number,
  ttlChmLnsInBlTymsCov: number,
  ttlSellerLnsInBlTymsCov: number,
  ttlCompTrnsfrEarningsCov: number,
  ttlCompBLClrncEarningsCov: number,
  ttlSMLnsInAmtNonCov: number,
  ttlChmLnsInAmtNonCov: number,
  ttlSellerLnsInAmtNonCov: number,
  ttlSMLnsInActvAmtNonCov: number,
  ttlChmLnsInActvAmtNonCov: number,
  ttlSellerLnsInActvAmtNonCov: number,
  ttlSMLnsInClrdAmtNonCov: number,
  ttlChmLnsInClrdAmtNonCov: number,
  ttlSellerLnsInClrdAmtNonCov: number,
  ttlSMLnsInBlAmtNonCov: number,
  ttlChmLnsInBlAmtNonCov: number,
  ttlSellerLnsInBlAmtNonCov: number,
  ttlSMLnsInTymsNonCov: number,
  ttlChmLnsInTymsNonCov: number,
  ttlSellerLnsInTymsNonCov: number,
  ttlSMLnsInActvTymsNonCov: number,
  ttlChmLnsInActvTymsNonCov: number,
  ttlSellerLnsInActvTymsNonCov: number,
  ttlSMLnsInClrdTymsNonCov: number,
  ttlChmLnsInClrdTymsNonCov: number,
  ttlSellerLnsInClrdTymsNonCov: number,
  ttlSMLnsInBlTymsNonCov: number,
  ttlChmLnsInBlTymsNonCov: number,
  ttlSellerLnsInBlTymsNonCov: number,
  ttlCompTrnsfrEarningsNonCov: number,
  ttlCompBLClrncEarningsNonCov: number,
  ttlCompCovEarnings: number,
  maxInterestSM: number,
  maxInterestPwnBrkr: number,
  maxInterestCredSllr: number,
  maxInterestGrp: number,
  maxMFNdogos: number,
  maxBLs: number,
  owner: string,
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
  AdvCompanyCom?: number | null,
  bankAdminCom?: number | null,
  sawithdrawalFee?: number | null,
  advuserwithdrawalFee?: number | null,
  bankAdmuserwithdrawalFee?: number | null,
  userLoanTransferFee?: number | null,
  userTransferFee?: number | null,
  chmMmbrTransferFee?: number | null,
  chmTransferFee?: number | null,
  biznaTransferFee?: number | null,
  palpalLnRpymntFee?: number | null,
  chmLnRpymntFee?: number | null,
  crdSllrLnRpymntFee?: number | null,
  userClearanceFee?: number | null,
  CoverageFee?: number | null,
  vat?: number | null,
  ttlvat?: number | null,
  enquiryFee?: number | null,
  UsrWthdrwlFees?: number | null,
  ttlNonLonssRecSM?: number | null,
  ttlNonLonssSentSM?: number | null,
  ttlNonLonssRecChm?: number | null,
  ttlNonLonssSentChm?: number | null,
  companyEarningBal?: number | null,
  companyEarning?: number | null,
  agentEarningBal?: number | null,
  agentEarning?: number | null,
  saEarningBal?: number | null,
  saEarning?: number | null,
  AdvEarningBal?: number | null,
  AdvEarning?: number | null,
  admEarningBal?: number | null,
  admEarning?: number | null,
  ttlUsrDep?: number | null,
  ttlUserWthdrwl?: number | null,
  agentFloatIn?: number | null,
  agentFloatOut?: number | null,
  ttlActiveUsers?: number | null,
  ttlInactvUsrs?: number | null,
  ttlBLUsrs?: number | null,
  ttlActiveChm?: number | null,
  ttlInactvChm?: number | null,
  ttlBLChm?: number | null,
  ttlActiveChmUsers?: number | null,
  ttlInactvChmUsrs?: number | null,
  ttlBLChmUsrs?: number | null,
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
  ttlSMLnsInAmtCov?: number | null,
  ttlChmLnsInAmtCov?: number | null,
  ttlSellerLnsInAmtCov?: number | null,
  ttlSMLnsInActvAmtCov?: number | null,
  ttlChmLnsInActvAmtCov?: number | null,
  ttlSellerLnsInActvAmtCov?: number | null,
  ttlSMLnsInClrdAmtCov?: number | null,
  ttlChmLnsInClrdAmtCov?: number | null,
  ttlSellerLnsInClrdAmtCov?: number | null,
  ttlSMLnsInBlAmtCov?: number | null,
  ttlChmLnsInBlAmtCov?: number | null,
  ttlSellerLnsInBlAmtCov?: number | null,
  ttlSMLnsInTymsCov?: number | null,
  ttlChmLnsInTymsCov?: number | null,
  ttlSellerLnsInTymsCov?: number | null,
  ttlSMLnsInActvTymsCov?: number | null,
  ttlChmLnsInActvTymsCov?: number | null,
  ttlSellerLnsInActvTymsCov?: number | null,
  ttlSMLnsInClrdTymsCov?: number | null,
  ttlChmLnsInClrdTymsCov?: number | null,
  ttlSellerLnsInClrdTymsCov?: number | null,
  ttlSMLnsInBlTymsCov?: number | null,
  ttlChmLnsInBlTymsCov?: number | null,
  ttlSellerLnsInBlTymsCov?: number | null,
  ttlCompTrnsfrEarningsCov?: number | null,
  ttlCompBLClrncEarningsCov?: number | null,
  ttlSMLnsInAmtNonCov?: number | null,
  ttlChmLnsInAmtNonCov?: number | null,
  ttlSellerLnsInAmtNonCov?: number | null,
  ttlSMLnsInActvAmtNonCov?: number | null,
  ttlChmLnsInActvAmtNonCov?: number | null,
  ttlSellerLnsInActvAmtNonCov?: number | null,
  ttlSMLnsInClrdAmtNonCov?: number | null,
  ttlChmLnsInClrdAmtNonCov?: number | null,
  ttlSellerLnsInClrdAmtNonCov?: number | null,
  ttlSMLnsInBlAmtNonCov?: number | null,
  ttlChmLnsInBlAmtNonCov?: number | null,
  ttlSellerLnsInBlAmtNonCov?: number | null,
  ttlSMLnsInTymsNonCov?: number | null,
  ttlChmLnsInTymsNonCov?: number | null,
  ttlSellerLnsInTymsNonCov?: number | null,
  ttlSMLnsInActvTymsNonCov?: number | null,
  ttlChmLnsInActvTymsNonCov?: number | null,
  ttlSellerLnsInActvTymsNonCov?: number | null,
  ttlSMLnsInClrdTymsNonCov?: number | null,
  ttlChmLnsInClrdTymsNonCov?: number | null,
  ttlSellerLnsInClrdTymsNonCov?: number | null,
  ttlSMLnsInBlTymsNonCov?: number | null,
  ttlChmLnsInBlTymsNonCov?: number | null,
  ttlSellerLnsInBlTymsNonCov?: number | null,
  ttlCompTrnsfrEarningsNonCov?: number | null,
  ttlCompBLClrncEarningsNonCov?: number | null,
  ttlCompCovEarnings?: number | null,
  maxInterestSM?: number | null,
  maxInterestPwnBrkr?: number | null,
  maxInterestCredSllr?: number | null,
  maxInterestGrp?: number | null,
  maxMFNdogos?: number | null,
  maxBLs?: number | null,
  owner?: string | null,
  totalLnsRecovered?: number | null,
  createdAt?: string | null,
};

export type DeleteCompanyInput = {
  AdminId: string,
};

export type CreateCovCreditSellerInput = {
  id?: string | null,
  itemName: string,
  loanerLoanee: string,
  loanerLoaneeAdv: string,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  buyerName: string,
  SellerName: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountExpectedBackWthClrnc: number,
  amountRepaid: number,
  repaymentPeriod: number,
  timeExpBack: number,
  timeExpBack2: number,
  lonBala: number,
  description?: string | null,
  status: Status,
  advregnu: string,
  DefaultPenaltyCredSl: number,
  DefaultPenaltyCredSl2: number,
  owner: string,
  createdAt?: string | null,
};

export type ModelCovCreditSellerConditionInput = {
  itemName?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  loanerLoaneeAdv?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  buyerName?: ModelStringInput | null,
  SellerName?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  lonBala?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  advregnu?: ModelStringInput | null,
  DefaultPenaltyCredSl?: ModelFloatInput | null,
  DefaultPenaltyCredSl2?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCovCreditSellerConditionInput | null > | null,
  or?: Array< ModelCovCreditSellerConditionInput | null > | null,
  not?: ModelCovCreditSellerConditionInput | null,
};

export type CovCreditSeller = {
  __typename: "CovCreditSeller",
  id: string,
  itemName: string,
  loanerLoanee: string,
  loanerLoaneeAdv: string,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  buyerName: string,
  SellerName: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountExpectedBackWthClrnc: number,
  amountRepaid: number,
  repaymentPeriod: number,
  timeExpBack: number,
  timeExpBack2: number,
  lonBala: number,
  description?: string | null,
  status: Status,
  advregnu: string,
  DefaultPenaltyCredSl: number,
  DefaultPenaltyCredSl2: number,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCovCreditSellerInput = {
  id: string,
  itemName?: string | null,
  loanerLoanee?: string | null,
  loanerLoaneeAdv?: string | null,
  buyerContact?: string | null,
  sellerContact?: string | null,
  buyerID?: string | null,
  buyerName?: string | null,
  SellerName?: string | null,
  sellerID?: string | null,
  amountSold?: number | null,
  amountexpectedBack?: number | null,
  amountExpectedBackWthClrnc?: number | null,
  amountRepaid?: number | null,
  repaymentPeriod?: number | null,
  timeExpBack?: number | null,
  timeExpBack2?: number | null,
  lonBala?: number | null,
  description?: string | null,
  status?: Status | null,
  advregnu?: string | null,
  DefaultPenaltyCredSl?: number | null,
  DefaultPenaltyCredSl2?: number | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteCovCreditSellerInput = {
  id: string,
};

export type CreateNonCovCreditSellerInput = {
  id?: string | null,
  itemName: string,
  loanerLoanee: string,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  buyerName: string,
  SellerName: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountExpectedBackWthClrnc: number,
  amountRepaid: number,
  lonBala: number,
  repaymentPeriod: number,
  timeExpBack: number,
  timeExpBack2: number,
  description?: string | null,
  DefaultPenaltyCredSl: number,
  DefaultPenaltyCredSl2: number,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelNonCovCreditSellerConditionInput = {
  itemName?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  buyerName?: ModelStringInput | null,
  SellerName?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  lonBala?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  DefaultPenaltyCredSl?: ModelFloatInput | null,
  DefaultPenaltyCredSl2?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNonCovCreditSellerConditionInput | null > | null,
  or?: Array< ModelNonCovCreditSellerConditionInput | null > | null,
  not?: ModelNonCovCreditSellerConditionInput | null,
};

export type NonCovCreditSeller = {
  __typename: "NonCovCreditSeller",
  id: string,
  itemName: string,
  loanerLoanee: string,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  buyerName: string,
  SellerName: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountExpectedBackWthClrnc: number,
  amountRepaid: number,
  lonBala: number,
  repaymentPeriod: number,
  timeExpBack: number,
  timeExpBack2: number,
  description?: string | null,
  DefaultPenaltyCredSl: number,
  DefaultPenaltyCredSl2: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNonCovCreditSellerInput = {
  id: string,
  itemName?: string | null,
  loanerLoanee?: string | null,
  buyerContact?: string | null,
  sellerContact?: string | null,
  buyerID?: string | null,
  buyerName?: string | null,
  SellerName?: string | null,
  sellerID?: string | null,
  amountSold?: number | null,
  amountexpectedBack?: number | null,
  amountExpectedBackWthClrnc?: number | null,
  amountRepaid?: number | null,
  lonBala?: number | null,
  repaymentPeriod?: number | null,
  timeExpBack?: number | null,
  timeExpBack2?: number | null,
  description?: string | null,
  DefaultPenaltyCredSl?: number | null,
  DefaultPenaltyCredSl2?: number | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteNonCovCreditSellerInput = {
  id: string,
};

export type CreateGroupInput = {
  grpContact: string,
  regNo: string,
  signitoryContact: string,
  SignitoryNatid: string,
  signitoryName: string,
  grpName: string,
  signitoryPW: string,
  oprtnArea: string,
  venture: string,
  signitory2Sub: string,
  WithdrawCnfrmtn: string,
  grpEmail: string,
  grpBal: number,
  ttlGrpMembers: number,
  description?: string | null,
  ttlNonLonsRecChm: number,
  ttlNonLonsSentChm: number,
  ttlDpst: number,
  ttlWthdrwn: number,
  tymsChmHvBL: number,
  TtlActvLonsTmsLnrChmCov: number,
  TtlActvLonsAmtLnrChmCov: number,
  TtlBLLonsTmsLnrChmCov: number,
  TtlBLLonsAmtLnrChmCov: number,
  TtlClrdLonsTmsLnrChmCov: number,
  TtlClrdLonsAmtLnrChmCov: number,
  TtlActvLonsTmsLnrChmNonCov: number,
  TtlActvLonsAmtLnrChmNonCov: number,
  TtlBLLonsTmsLnrChmNonCov: number,
  TtlBLLonsAmtLnrChmNonCov: number,
  TtlClrdLonsTmsLnrChmNonCov: number,
  TtlClrdLonsAmtLnrChmNonCov: number,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelGroupConditionInput = {
  regNo?: ModelStringInput | null,
  signitoryContact?: ModelStringInput | null,
  SignitoryNatid?: ModelStringInput | null,
  signitoryName?: ModelStringInput | null,
  grpName?: ModelStringInput | null,
  signitoryPW?: ModelStringInput | null,
  oprtnArea?: ModelStringInput | null,
  venture?: ModelStringInput | null,
  signitory2Sub?: ModelStringInput | null,
  WithdrawCnfrmtn?: ModelStringInput | null,
  grpEmail?: ModelStringInput | null,
  grpBal?: ModelFloatInput | null,
  ttlGrpMembers?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  ttlNonLonsRecChm?: ModelFloatInput | null,
  ttlNonLonsSentChm?: ModelFloatInput | null,
  ttlDpst?: ModelFloatInput | null,
  ttlWthdrwn?: ModelFloatInput | null,
  tymsChmHvBL?: ModelFloatInput | null,
  TtlActvLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlActvLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type Group = {
  __typename: "Group",
  grpContact: string,
  regNo: string,
  signitoryContact: string,
  SignitoryNatid: string,
  signitoryName: string,
  grpName: string,
  signitoryPW: string,
  oprtnArea: string,
  venture: string,
  signitory2Sub: string,
  WithdrawCnfrmtn: string,
  grpEmail: string,
  grpBal: number,
  ttlGrpMembers: number,
  description?: string | null,
  ttlNonLonsRecChm: number,
  ttlNonLonsSentChm: number,
  ttlDpst: number,
  ttlWthdrwn: number,
  tymsChmHvBL: number,
  TtlActvLonsTmsLnrChmCov: number,
  TtlActvLonsAmtLnrChmCov: number,
  TtlBLLonsTmsLnrChmCov: number,
  TtlBLLonsAmtLnrChmCov: number,
  TtlClrdLonsTmsLnrChmCov: number,
  TtlClrdLonsAmtLnrChmCov: number,
  TtlActvLonsTmsLnrChmNonCov: number,
  TtlActvLonsAmtLnrChmNonCov: number,
  TtlBLLonsTmsLnrChmNonCov: number,
  TtlBLLonsAmtLnrChmNonCov: number,
  TtlClrdLonsTmsLnrChmNonCov: number,
  TtlClrdLonsAmtLnrChmNonCov: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupInput = {
  grpContact: string,
  regNo?: string | null,
  signitoryContact?: string | null,
  SignitoryNatid?: string | null,
  signitoryName?: string | null,
  grpName?: string | null,
  signitoryPW?: string | null,
  oprtnArea?: string | null,
  venture?: string | null,
  signitory2Sub?: string | null,
  WithdrawCnfrmtn?: string | null,
  grpEmail?: string | null,
  grpBal?: number | null,
  ttlGrpMembers?: number | null,
  description?: string | null,
  ttlNonLonsRecChm?: number | null,
  ttlNonLonsSentChm?: number | null,
  ttlDpst?: number | null,
  ttlWthdrwn?: number | null,
  tymsChmHvBL?: number | null,
  TtlActvLonsTmsLnrChmCov?: number | null,
  TtlActvLonsAmtLnrChmCov?: number | null,
  TtlBLLonsTmsLnrChmCov?: number | null,
  TtlBLLonsAmtLnrChmCov?: number | null,
  TtlClrdLonsTmsLnrChmCov?: number | null,
  TtlClrdLonsAmtLnrChmCov?: number | null,
  TtlActvLonsTmsLnrChmNonCov?: number | null,
  TtlActvLonsAmtLnrChmNonCov?: number | null,
  TtlBLLonsTmsLnrChmNonCov?: number | null,
  TtlBLLonsAmtLnrChmNonCov?: number | null,
  TtlClrdLonsTmsLnrChmNonCov?: number | null,
  TtlClrdLonsAmtLnrChmNonCov?: number | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteGroupInput = {
  grpContact: string,
};

export type CreateChamaMembersInput = {
  MembaId: string,
  groupContact: string,
  regNo: string,
  ChamaNMember: string,
  groupName: string,
  memberContact: string,
  memberName: string,
  memberNatId: string,
  GrossLnsGvn: number,
  LonAmtGven: number,
  AmtRepaid: number,
  LnBal: number,
  NonLoanAcBal: number,
  ttlNonLonAcBal: number,
  AcStatus: Status,
  loanStatus: Status,
  blStatus: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelChamaMembersConditionInput = {
  MembaId?: ModelStringInput | null,
  groupContact?: ModelStringInput | null,
  regNo?: ModelStringInput | null,
  groupName?: ModelStringInput | null,
  memberContact?: ModelStringInput | null,
  memberName?: ModelStringInput | null,
  memberNatId?: ModelStringInput | null,
  GrossLnsGvn?: ModelFloatInput | null,
  LonAmtGven?: ModelFloatInput | null,
  AmtRepaid?: ModelFloatInput | null,
  LnBal?: ModelFloatInput | null,
  NonLoanAcBal?: ModelFloatInput | null,
  ttlNonLonAcBal?: ModelFloatInput | null,
  AcStatus?: ModelStatusInput | null,
  loanStatus?: ModelStatusInput | null,
  blStatus?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChamaMembersConditionInput | null > | null,
  or?: Array< ModelChamaMembersConditionInput | null > | null,
  not?: ModelChamaMembersConditionInput | null,
};

export type ChamaMembers = {
  __typename: "ChamaMembers",
  MembaId: string,
  groupContact: string,
  regNo: string,
  ChamaNMember: string,
  groupName: string,
  memberContact: string,
  memberName: string,
  memberNatId: string,
  GrossLnsGvn: number,
  LonAmtGven: number,
  AmtRepaid: number,
  LnBal: number,
  NonLoanAcBal: number,
  ttlNonLonAcBal: number,
  AcStatus: Status,
  loanStatus: Status,
  blStatus: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChamaMembersInput = {
  MembaId?: string | null,
  groupContact?: string | null,
  regNo?: string | null,
  ChamaNMember: string,
  groupName?: string | null,
  memberContact?: string | null,
  memberName?: string | null,
  memberNatId?: string | null,
  GrossLnsGvn?: number | null,
  LonAmtGven?: number | null,
  AmtRepaid?: number | null,
  LnBal?: number | null,
  NonLoanAcBal?: number | null,
  ttlNonLonAcBal?: number | null,
  AcStatus?: Status | null,
  loanStatus?: Status | null,
  blStatus?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteChamaMembersInput = {
  ChamaNMember: string,
};

export type CreateChamasNPwnBrkrsInput = {
  id?: string | null,
  contact: string,
  regNo: string,
  AcStatus: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelChamasNPwnBrkrsConditionInput = {
  contact?: ModelStringInput | null,
  regNo?: ModelStringInput | null,
  AcStatus?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChamasNPwnBrkrsConditionInput | null > | null,
  or?: Array< ModelChamasNPwnBrkrsConditionInput | null > | null,
  not?: ModelChamasNPwnBrkrsConditionInput | null,
};

export type ChamasNPwnBrkrs = {
  __typename: "ChamasNPwnBrkrs",
  id: string,
  contact: string,
  regNo: string,
  AcStatus: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChamasNPwnBrkrsInput = {
  id: string,
  contact?: string | null,
  regNo?: string | null,
  AcStatus?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteChamasNPwnBrkrsInput = {
  id: string,
};

export type CreateChamasRegConfirmInput = {
  id?: string | null,
  contact: string,
  regNo: string,
  AcStatus: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelChamasRegConfirmConditionInput = {
  contact?: ModelStringInput | null,
  regNo?: ModelStringInput | null,
  AcStatus?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChamasRegConfirmConditionInput | null > | null,
  or?: Array< ModelChamasRegConfirmConditionInput | null > | null,
  not?: ModelChamasRegConfirmConditionInput | null,
};

export type ChamasRegConfirm = {
  __typename: "ChamasRegConfirm",
  id: string,
  contact: string,
  regNo: string,
  AcStatus: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChamasRegConfirmInput = {
  id: string,
  contact?: string | null,
  regNo?: string | null,
  AcStatus?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteChamasRegConfirmInput = {
  id: string,
};

export type CreateCvrdGroupLoansInput = {
  id?: string | null,
  grpContact: string,
  loaneePhn: string,
  repaymentPeriod: number,
  loanerLoanee: string,
  loanerLoaneeAdv: string,
  amountGiven: number,
  amountExpectedBack: number,
  amountExpectedBackWthClrnc: number,
  amountRepaid: number,
  description?: string | null,
  lonBala: number,
  memberId: string,
  advRegNu: string,
  loaneeName: string,
  LoanerName: string,
  timeExpBack: number,
  timeExpBack2: number,
  status: Status,
  owner: string,
  DefaultPenaltyChm: number,
  DefaultPenaltyChm2: number,
  createdAt?: string | null,
};

export type ModelCvrdGroupLoansConditionInput = {
  grpContact?: ModelStringInput | null,
  loaneePhn?: ModelStringInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  loanerLoanee?: ModelStringInput | null,
  loanerLoaneeAdv?: ModelStringInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  lonBala?: ModelFloatInput | null,
  memberId?: ModelStringInput | null,
  advRegNu?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  LoanerName?: ModelStringInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  DefaultPenaltyChm?: ModelFloatInput | null,
  DefaultPenaltyChm2?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCvrdGroupLoansConditionInput | null > | null,
  or?: Array< ModelCvrdGroupLoansConditionInput | null > | null,
  not?: ModelCvrdGroupLoansConditionInput | null,
};

export type CvrdGroupLoans = {
  __typename: "CvrdGroupLoans",
  id: string,
  grpContact: string,
  loaneePhn: string,
  repaymentPeriod: number,
  loanerLoanee: string,
  loanerLoaneeAdv: string,
  amountGiven: number,
  amountExpectedBack: number,
  amountExpectedBackWthClrnc: number,
  amountRepaid: number,
  description?: string | null,
  lonBala: number,
  memberId: string,
  advRegNu: string,
  loaneeName: string,
  LoanerName: string,
  timeExpBack: number,
  timeExpBack2: number,
  status: Status,
  owner: string,
  DefaultPenaltyChm: number,
  DefaultPenaltyChm2: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCvrdGroupLoansInput = {
  id: string,
  grpContact?: string | null,
  loaneePhn?: string | null,
  repaymentPeriod?: number | null,
  loanerLoanee?: string | null,
  loanerLoaneeAdv?: string | null,
  amountGiven?: number | null,
  amountExpectedBack?: number | null,
  amountExpectedBackWthClrnc?: number | null,
  amountRepaid?: number | null,
  description?: string | null,
  lonBala?: number | null,
  memberId?: string | null,
  advRegNu?: string | null,
  loaneeName?: string | null,
  LoanerName?: string | null,
  timeExpBack?: number | null,
  timeExpBack2?: number | null,
  status?: Status | null,
  owner?: string | null,
  DefaultPenaltyChm?: number | null,
  DefaultPenaltyChm2?: number | null,
  createdAt?: string | null,
};

export type DeleteCvrdGroupLoansInput = {
  id: string,
};

export type CreateNonCvrdGroupLoansInput = {
  id?: string | null,
  grpContact: string,
  loaneePhn: string,
  loanerLoanee: string,
  DefaultPenaltyChm: number,
  DefaultPenaltyChm2: number,
  repaymentPeriod: number,
  amountGiven: number,
  amountExpectedBack: number,
  amountExpectedBackWthClrnc: number,
  amountRepaid: number,
  timeExpBack: number,
  timeExpBack2: number,
  description?: string | null,
  loaneeName: string,
  loanerName: string,
  memberId: string,
  lonBala: number,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelNonCvrdGroupLoansConditionInput = {
  grpContact?: ModelStringInput | null,
  loaneePhn?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  DefaultPenaltyChm?: ModelFloatInput | null,
  DefaultPenaltyChm2?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  loanerName?: ModelStringInput | null,
  memberId?: ModelStringInput | null,
  lonBala?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNonCvrdGroupLoansConditionInput | null > | null,
  or?: Array< ModelNonCvrdGroupLoansConditionInput | null > | null,
  not?: ModelNonCvrdGroupLoansConditionInput | null,
};

export type NonCvrdGroupLoans = {
  __typename: "NonCvrdGroupLoans",
  id: string,
  grpContact: string,
  loaneePhn: string,
  loanerLoanee: string,
  DefaultPenaltyChm: number,
  DefaultPenaltyChm2: number,
  repaymentPeriod: number,
  amountGiven: number,
  amountExpectedBack: number,
  amountExpectedBackWthClrnc: number,
  amountRepaid: number,
  timeExpBack: number,
  timeExpBack2: number,
  description?: string | null,
  loaneeName: string,
  loanerName: string,
  memberId: string,
  lonBala: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNonCvrdGroupLoansInput = {
  id: string,
  grpContact?: string | null,
  loaneePhn?: string | null,
  loanerLoanee?: string | null,
  DefaultPenaltyChm?: number | null,
  DefaultPenaltyChm2?: number | null,
  repaymentPeriod?: number | null,
  amountGiven?: number | null,
  amountExpectedBack?: number | null,
  amountExpectedBackWthClrnc?: number | null,
  amountRepaid?: number | null,
  timeExpBack?: number | null,
  timeExpBack2?: number | null,
  description?: string | null,
  loaneeName?: string | null,
  loanerName?: string | null,
  memberId?: string | null,
  lonBala?: number | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteNonCvrdGroupLoansInput = {
  id: string,
};

export type CreateGroupNonLoansInput = {
  id?: string | null,
  grpContact: string,
  recipientPhn: string,
  receiverName: string,
  SenderName: string,
  amountSent: number,
  memberId: string,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelGroupNonLoansConditionInput = {
  grpContact?: ModelStringInput | null,
  recipientPhn?: ModelStringInput | null,
  receiverName?: ModelStringInput | null,
  SenderName?: ModelStringInput | null,
  amountSent?: ModelFloatInput | null,
  memberId?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupNonLoansConditionInput | null > | null,
  or?: Array< ModelGroupNonLoansConditionInput | null > | null,
  not?: ModelGroupNonLoansConditionInput | null,
};

export type GroupNonLoans = {
  __typename: "GroupNonLoans",
  id: string,
  grpContact: string,
  recipientPhn: string,
  receiverName: string,
  SenderName: string,
  amountSent: number,
  memberId: string,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupNonLoansInput = {
  id: string,
  grpContact?: string | null,
  recipientPhn?: string | null,
  receiverName?: string | null,
  SenderName?: string | null,
  amountSent?: number | null,
  memberId?: string | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteGroupNonLoansInput = {
  id: string,
};

export type CreateGrpMembersContributionInput = {
  id?: string | null,
  memberPhn: string,
  mmberNme: string,
  GrpName: string,
  grpContact: string,
  contriAmount: number,
  memberId: string,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelGrpMembersContributionConditionInput = {
  memberPhn?: ModelStringInput | null,
  mmberNme?: ModelStringInput | null,
  GrpName?: ModelStringInput | null,
  grpContact?: ModelStringInput | null,
  contriAmount?: ModelFloatInput | null,
  memberId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGrpMembersContributionConditionInput | null > | null,
  or?: Array< ModelGrpMembersContributionConditionInput | null > | null,
  not?: ModelGrpMembersContributionConditionInput | null,
};

export type GrpMembersContribution = {
  __typename: "GrpMembersContribution",
  id: string,
  memberPhn: string,
  mmberNme: string,
  GrpName: string,
  grpContact: string,
  contriAmount: number,
  memberId: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGrpMembersContributionInput = {
  id: string,
  memberPhn?: string | null,
  mmberNme?: string | null,
  GrpName?: string | null,
  grpContact?: string | null,
  contriAmount?: number | null,
  memberId?: string | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteGrpMembersContributionInput = {
  id: string,
};

export type CreateReqLoanInput = {
  id?: string | null,
  loaneeEmail: string,
  loanerEmail: string,
  loaneePhone: string,
  loaneeName: string,
  amount: number,
  repaymentAmt: number,
  repaymentPeriod: number,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelReqLoanConditionInput = {
  loaneeEmail?: ModelStringInput | null,
  loanerEmail?: ModelStringInput | null,
  loaneePhone?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  repaymentAmt?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReqLoanConditionInput | null > | null,
  or?: Array< ModelReqLoanConditionInput | null > | null,
  not?: ModelReqLoanConditionInput | null,
};

export type ReqLoan = {
  __typename: "ReqLoan",
  id: string,
  loaneeEmail: string,
  loanerEmail: string,
  loaneePhone: string,
  loaneeName: string,
  amount: number,
  repaymentAmt: number,
  repaymentPeriod: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReqLoanInput = {
  id: string,
  loaneeEmail?: string | null,
  loanerEmail?: string | null,
  loaneePhone?: string | null,
  loaneeName?: string | null,
  amount?: number | null,
  repaymentAmt?: number | null,
  repaymentPeriod?: number | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteReqLoanInput = {
  id: string,
};

export type CreateReqLoanChamaInput = {
  id?: string | null,
  loaneeEmail: string,
  chamaPhone: string,
  loaneePhone: string,
  loaneeName: string,
  amount: number,
  repaymentAmt: number,
  repaymentPeriod: number,
  status: Status,
  owner: string,
  loaneeMemberId: string,
  createdAt?: string | null,
};

export type ModelReqLoanChamaConditionInput = {
  loaneeEmail?: ModelStringInput | null,
  chamaPhone?: ModelStringInput | null,
  loaneePhone?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  repaymentAmt?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  loaneeMemberId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReqLoanChamaConditionInput | null > | null,
  or?: Array< ModelReqLoanChamaConditionInput | null > | null,
  not?: ModelReqLoanChamaConditionInput | null,
};

export type ReqLoanChama = {
  __typename: "ReqLoanChama",
  id: string,
  loaneeEmail: string,
  chamaPhone: string,
  loaneePhone: string,
  loaneeName: string,
  amount: number,
  repaymentAmt: number,
  repaymentPeriod: number,
  status: Status,
  owner: string,
  loaneeMemberId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReqLoanChamaInput = {
  id: string,
  loaneeEmail?: string | null,
  chamaPhone?: string | null,
  loaneePhone?: string | null,
  loaneeName?: string | null,
  amount?: number | null,
  repaymentAmt?: number | null,
  repaymentPeriod?: number | null,
  status?: Status | null,
  owner?: string | null,
  loaneeMemberId?: string | null,
  createdAt?: string | null,
};

export type DeleteReqLoanChamaInput = {
  id: string,
};

export type CreateReqLoanCredSlInput = {
  id?: string | null,
  loaneeEmail: string,
  businessNo: string,
  loaneePhone: string,
  loaneeName: string,
  itemName: string,
  amount: number,
  repaymentAmt: number,
  repaymentPeriod: number,
  status: Status,
  owner: string,
  createdAt?: string | null,
};

export type ModelReqLoanCredSlConditionInput = {
  loaneeEmail?: ModelStringInput | null,
  businessNo?: ModelStringInput | null,
  loaneePhone?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  itemName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  repaymentAmt?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReqLoanCredSlConditionInput | null > | null,
  or?: Array< ModelReqLoanCredSlConditionInput | null > | null,
  not?: ModelReqLoanCredSlConditionInput | null,
};

export type ReqLoanCredSl = {
  __typename: "ReqLoanCredSl",
  id: string,
  loaneeEmail: string,
  businessNo: string,
  loaneePhone: string,
  loaneeName: string,
  itemName: string,
  amount: number,
  repaymentAmt: number,
  repaymentPeriod: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReqLoanCredSlInput = {
  id: string,
  loaneeEmail?: string | null,
  businessNo?: string | null,
  loaneePhone?: string | null,
  loaneeName?: string | null,
  itemName?: string | null,
  amount?: number | null,
  repaymentAmt?: number | null,
  repaymentPeriod?: number | null,
  status?: Status | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteReqLoanCredSlInput = {
  id: string,
};

export type ModelSMAccountFilterInput = {
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  awsemail?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  loanAcceptanceCode?: ModelStringInput | null,
  ttlDpstSM?: ModelFloatInput | null,
  TtlWthdrwnSM?: ModelFloatInput | null,
  TtlActvLonsTmsLnrCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlActvLonsTmsSllrCov?: ModelFloatInput | null,
  TtlActvLonsTmsByrCov?: ModelFloatInput | null,
  TtlActvLonsAmtSllrCov?: ModelFloatInput | null,
  TtlActvLonsAmtByrCov?: ModelFloatInput | null,
  TtlBLLonsTmsSllrCov?: ModelFloatInput | null,
  TtlBLLonsTmsByrCov?: ModelFloatInput | null,
  TtlBLLonsAmtSllrCov?: ModelFloatInput | null,
  TtlBLLonsAmtByrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsSllrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsByrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtSllrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtByrCov?: ModelFloatInput | null,
  TtlActvLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtByrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtByrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtByrNonCov?: ModelFloatInput | null,
  ttlNonLonsRecSM?: ModelFloatInput | null,
  ttlNonLonsSentSM?: ModelFloatInput | null,
  ttlNonLonsRecChm?: ModelFloatInput | null,
  ttlNonLonsSentChm?: ModelFloatInput | null,
  MaxTymsBL?: ModelFloatInput | null,
  MaxTymsIHvBL?: ModelFloatInput | null,
  MaxAcBal?: ModelFloatInput | null,
  TymsIHvGivnLn?: ModelFloatInput | null,
  TymsMyLnClrd?: ModelFloatInput | null,
  DefaultPenaltySM?: ModelFloatInput | null,
  loanStatus?: ModelStatusInput | null,
  acStatus?: ModelStatusInput | null,
  deActvtnReason?: ModelStringInput | null,
  blStatus?: ModelStatusInput | null,
  loanLimit?: ModelFloatInput | null,
  nonLonLimit?: ModelFloatInput | null,
  withdrawalLimit?: ModelFloatInput | null,
  depositLimit?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
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
  items:  Array<SMAccount | null >,
  nextToken?: string | null,
};

export type ModelSMLoansCoveredFilterInput = {
  id?: ModelIDInput | null,
  loaneeid?: ModelStringInput | null,
  loaneePhn?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  loanerLoaneeAdv?: ModelStringInput | null,
  loanerPhn?: ModelStringInput | null,
  advregnu?: ModelStringInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  lonBala?: ModelFloatInput | null,
  loaneename?: ModelStringInput | null,
  loanername?: ModelStringInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  DefaultPenaltySM?: ModelFloatInput | null,
  DefaultPenaltySM2?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSMLoansCoveredFilterInput | null > | null,
  or?: Array< ModelSMLoansCoveredFilterInput | null > | null,
  not?: ModelSMLoansCoveredFilterInput | null,
};

export type ModelSMLoansCoveredConnection = {
  __typename: "ModelSMLoansCoveredConnection",
  items:  Array<SMLoansCovered | null >,
  nextToken?: string | null,
};

export type ModelSMLoansNonCoveredFilterInput = {
  id?: ModelIDInput | null,
  loaneePhn?: ModelStringInput | null,
  loanerPhn?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  loaneeid?: ModelIDInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  lonBala?: ModelFloatInput | null,
  loaneename?: ModelStringInput | null,
  loanername?: ModelStringInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  DefaultPenaltySM?: ModelFloatInput | null,
  DefaultPenaltySM2?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSMLoansNonCoveredFilterInput | null > | null,
  or?: Array< ModelSMLoansNonCoveredFilterInput | null > | null,
  not?: ModelSMLoansNonCoveredFilterInput | null,
};

export type ModelSMLoansNonCoveredConnection = {
  __typename: "ModelSMLoansNonCoveredConnection",
  items:  Array<SMLoansNonCovered | null >,
  nextToken?: string | null,
};

export type ModelNonLoansFilterInput = {
  id?: ModelIDInput | null,
  senderPhn?: ModelStringInput | null,
  recPhn?: ModelStringInput | null,
  RecName?: ModelStringInput | null,
  SenderName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNonLoansFilterInput | null > | null,
  or?: Array< ModelNonLoansFilterInput | null > | null,
  not?: ModelNonLoansFilterInput | null,
};

export type ModelNonLoansConnection = {
  __typename: "ModelNonLoansConnection",
  items:  Array<NonLoans | null >,
  nextToken?: string | null,
};

export type ModelSokoAdFilterInput = {
  id?: ModelIDInput | null,
  sokoregno?: ModelStringInput | null,
  sokokntct?: ModelStringInput | null,
  sokoname?: ModelStringInput | null,
  sokoprice?: ModelFloatInput | null,
  sokotown?: ModelStringInput | null,
  sokolnprcntg?: ModelFloatInput | null,
  sokolpymntperiod?: ModelFloatInput | null,
  sokodesc?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSokoAdFilterInput | null > | null,
  or?: Array< ModelSokoAdFilterInput | null > | null,
  not?: ModelSokoAdFilterInput | null,
};

export type ModelSokoAdConnection = {
  __typename: "ModelSokoAdConnection",
  items:  Array<SokoAd | null >,
  nextToken?: string | null,
};

export type ModelRafikiLnAdFilterInput = {
  id?: ModelIDInput | null,
  rafikiName?: ModelStringInput | null,
  rafikicntct?: ModelStringInput | null,
  rafikiEmail?: ModelStringInput | null,
  rafikiamnt?: ModelFloatInput | null,
  rafikidesc?: ModelStringInput | null,
  rafikiprcntg?: ModelFloatInput | null,
  rafikirpymntperiod?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelRafikiLnAdFilterInput | null > | null,
  or?: Array< ModelRafikiLnAdFilterInput | null > | null,
  not?: ModelRafikiLnAdFilterInput | null,
};

export type ModelRafikiLnAdConnection = {
  __typename: "ModelRafikiLnAdConnection",
  items:  Array<RafikiLnAd | null >,
  nextToken?: string | null,
};

export type ModelAgentFilterInput = {
  phonecontact?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ttlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  email?: ModelStringInput | null,
  TtlFltIn?: ModelFloatInput | null,
  TtlFltOut?: ModelFloatInput | null,
  floatBal?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  town?: ModelStringInput | null,
  MFNWithdrwlFee?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAgentFilterInput | null > | null,
  or?: Array< ModelAgentFilterInput | null > | null,
  not?: ModelAgentFilterInput | null,
};

export type ModelAgentConnection = {
  __typename: "ModelAgentConnection",
  items:  Array<Agent | null >,
  nextToken?: string | null,
};

export type ModelFloatPurchaseFilterInput = {
  agentphone?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  transactId?: ModelStringInput | null,
  bankAdminID?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFloatPurchaseFilterInput | null > | null,
  or?: Array< ModelFloatPurchaseFilterInput | null > | null,
  not?: ModelFloatPurchaseFilterInput | null,
};

export type ModelFloatPurchaseConnection = {
  __typename: "ModelFloatPurchaseConnection",
  items:  Array<FloatPurchase | null >,
  nextToken?: string | null,
};

export type ModelFloatAddFilterInput = {
  id?: ModelIDInput | null,
  withdrawerid?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  agentPhonecontact?: ModelStringInput | null,
  agentName?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  saName?: ModelStringInput | null,
  saPhone?: ModelStringInput | null,
  sagentId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFloatAddFilterInput | null > | null,
  or?: Array< ModelFloatAddFilterInput | null > | null,
  not?: ModelFloatAddFilterInput | null,
};

export type ModelFloatAddConnection = {
  __typename: "ModelFloatAddConnection",
  items:  Array<FloatAdd | null >,
  nextToken?: string | null,
};

export type ModelFloatReductionFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  depositerid?: ModelStringInput | null,
  agContact?: ModelStringInput | null,
  agentName?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFloatReductionFilterInput | null > | null,
  or?: Array< ModelFloatReductionFilterInput | null > | null,
  not?: ModelFloatReductionFilterInput | null,
};

export type ModelFloatReductionConnection = {
  __typename: "ModelFloatReductionConnection",
  items:  Array<FloatReduction | null >,
  nextToken?: string | null,
};

export type ModelAgentWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  agentPhone?: ModelStringInput | null,
  bankAdminId?: ModelStringInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  Amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAgentWithdrawalsFilterInput | null > | null,
  or?: Array< ModelAgentWithdrawalsFilterInput | null > | null,
  not?: ModelAgentWithdrawalsFilterInput | null,
};

export type ModelAgentWithdrawalsConnection = {
  __typename: "ModelAgentWithdrawalsConnection",
  items:  Array<AgentWithdrawals | null >,
  nextToken?: string | null,
};

export type ModelSAgentFilterInput = {
  saPhoneContact?: ModelStringInput | null,
  saNationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pw?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  actvMFNdog?: ModelFloatInput | null,
  InctvMFNdog?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  saBalance?: ModelFloatInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  MFKWithdrwlFee?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSAgentFilterInput | null > | null,
  or?: Array< ModelSAgentFilterInput | null > | null,
  not?: ModelSAgentFilterInput | null,
};

export type ModelSAgentConnection = {
  __typename: "ModelSAgentConnection",
  items:  Array<SAgent | null >,
  nextToken?: string | null,
};

export type ModelSAgentWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  saId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankAdmnId?: ModelStringInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSAgentWithdrawalsFilterInput | null > | null,
  or?: Array< ModelSAgentWithdrawalsFilterInput | null > | null,
  not?: ModelSAgentWithdrawalsFilterInput | null,
};

export type ModelSAgentWithdrawalsConnection = {
  __typename: "ModelSAgentWithdrawalsConnection",
  items:  Array<SAgentWithdrawals | null >,
  nextToken?: string | null,
};

export type ModelPersonelFilterInput = {
  phoneKontact?: ModelStringInput | null,
  BusinessRegNo?: ModelStringInput | null,
  nationalid?: ModelStringInput | null,
  BiznaName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ownrsss?: ModelStringInput | null,
  email?: ModelStringInput | null,
  workerId?: ModelStringInput | null,
  workId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPersonelFilterInput | null > | null,
  or?: Array< ModelPersonelFilterInput | null > | null,
  not?: ModelPersonelFilterInput | null,
};

export type ModelPersonelConnection = {
  __typename: "ModelPersonelConnection",
  items:  Array<Personel | null >,
  nextToken?: string | null,
};

export type ModelBiznaFilterInput = {
  BusKntct?: ModelStringInput | null,
  busName?: ModelStringInput | null,
  pw?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  earningsBal?: ModelFloatInput | null,
  netEarnings?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelBiznaFilterInput | null > | null,
  or?: Array< ModelBiznaFilterInput | null > | null,
  not?: ModelBiznaFilterInput | null,
};

export type ModelBiznaConnection = {
  __typename: "ModelBiznaConnection",
  items:  Array<Bizna | null >,
  nextToken?: string | null,
};

export type ModelBankAdminFilterInput = {
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  BankAdmBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelBankAdminFilterInput | null > | null,
  or?: Array< ModelBankAdminFilterInput | null > | null,
  not?: ModelBankAdminFilterInput | null,
};

export type ModelBankAdminConnection = {
  __typename: "ModelBankAdminConnection",
  items:  Array<BankAdmin | null >,
  nextToken?: string | null,
};

export type ModelBankAdmWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  bankAdmNatId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelBankAdmWithdrawalsFilterInput | null > | null,
  or?: Array< ModelBankAdmWithdrawalsFilterInput | null > | null,
  not?: ModelBankAdmWithdrawalsFilterInput | null,
};

export type ModelBankAdmWithdrawalsConnection = {
  __typename: "ModelBankAdmWithdrawalsConnection",
  items:  Array<BankAdmWithdrawals | null >,
  nextToken?: string | null,
};

export type ModelAdvocateFilterInput = {
  advregnu?: ModelStringInput | null,
  nationalid?: ModelStringInput | null,
  pwd?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  advBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  officeLoc?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAdvocateFilterInput | null > | null,
  or?: Array< ModelAdvocateFilterInput | null > | null,
  not?: ModelAdvocateFilterInput | null,
};

export type ModelAdvocateConnection = {
  __typename: "ModelAdvocateConnection",
  items:  Array<Advocate | null >,
  nextToken?: string | null,
};

export type ModelAdvocateWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  bankAdmnId?: ModelStringInput | null,
  advregnu?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankName?: ModelStringInput | null,
  bkAcNo?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAdvocateWithdrawalsFilterInput | null > | null,
  or?: Array< ModelAdvocateWithdrawalsFilterInput | null > | null,
  not?: ModelAdvocateWithdrawalsFilterInput | null,
};

export type ModelAdvocateWithdrawalsConnection = {
  __typename: "ModelAdvocateWithdrawalsConnection",
  items:  Array<AdvocateWithdrawals | null >,
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
  AdvCompanyCom?: ModelFloatInput | null,
  bankAdminCom?: ModelFloatInput | null,
  sawithdrawalFee?: ModelFloatInput | null,
  advuserwithdrawalFee?: ModelFloatInput | null,
  bankAdmuserwithdrawalFee?: ModelFloatInput | null,
  userLoanTransferFee?: ModelFloatInput | null,
  userTransferFee?: ModelFloatInput | null,
  chmMmbrTransferFee?: ModelFloatInput | null,
  chmTransferFee?: ModelFloatInput | null,
  biznaTransferFee?: ModelFloatInput | null,
  palpalLnRpymntFee?: ModelFloatInput | null,
  chmLnRpymntFee?: ModelFloatInput | null,
  crdSllrLnRpymntFee?: ModelFloatInput | null,
  userClearanceFee?: ModelFloatInput | null,
  CoverageFee?: ModelFloatInput | null,
  vat?: ModelFloatInput | null,
  ttlvat?: ModelFloatInput | null,
  enquiryFee?: ModelFloatInput | null,
  UsrWthdrwlFees?: ModelFloatInput | null,
  ttlNonLonssRecSM?: ModelFloatInput | null,
  ttlNonLonssSentSM?: ModelFloatInput | null,
  ttlNonLonssRecChm?: ModelFloatInput | null,
  ttlNonLonssSentChm?: ModelFloatInput | null,
  companyEarningBal?: ModelFloatInput | null,
  companyEarning?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  agentEarning?: ModelFloatInput | null,
  saEarningBal?: ModelFloatInput | null,
  saEarning?: ModelFloatInput | null,
  AdvEarningBal?: ModelFloatInput | null,
  AdvEarning?: ModelFloatInput | null,
  admEarningBal?: ModelFloatInput | null,
  admEarning?: ModelFloatInput | null,
  ttlUsrDep?: ModelFloatInput | null,
  ttlUserWthdrwl?: ModelFloatInput | null,
  agentFloatIn?: ModelFloatInput | null,
  agentFloatOut?: ModelFloatInput | null,
  ttlActiveUsers?: ModelFloatInput | null,
  ttlInactvUsrs?: ModelFloatInput | null,
  ttlBLUsrs?: ModelFloatInput | null,
  ttlActiveChm?: ModelFloatInput | null,
  ttlInactvChm?: ModelFloatInput | null,
  ttlBLChm?: ModelFloatInput | null,
  ttlActiveChmUsers?: ModelFloatInput | null,
  ttlInactvChmUsrs?: ModelFloatInput | null,
  ttlBLChmUsrs?: ModelFloatInput | null,
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
  ttlSMLnsInAmtCov?: ModelFloatInput | null,
  ttlChmLnsInAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInAmtCov?: ModelFloatInput | null,
  ttlSMLnsInActvAmtCov?: ModelFloatInput | null,
  ttlChmLnsInActvAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInActvAmtCov?: ModelFloatInput | null,
  ttlSMLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlChmLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlSMLnsInBlAmtCov?: ModelFloatInput | null,
  ttlChmLnsInBlAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInBlAmtCov?: ModelFloatInput | null,
  ttlSMLnsInTymsCov?: ModelFloatInput | null,
  ttlChmLnsInTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInTymsCov?: ModelFloatInput | null,
  ttlSMLnsInActvTymsCov?: ModelFloatInput | null,
  ttlChmLnsInActvTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInActvTymsCov?: ModelFloatInput | null,
  ttlSMLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlChmLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlSMLnsInBlTymsCov?: ModelFloatInput | null,
  ttlChmLnsInBlTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInBlTymsCov?: ModelFloatInput | null,
  ttlCompTrnsfrEarningsCov?: ModelFloatInput | null,
  ttlCompBLClrncEarningsCov?: ModelFloatInput | null,
  ttlSMLnsInAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlCompTrnsfrEarningsNonCov?: ModelFloatInput | null,
  ttlCompBLClrncEarningsNonCov?: ModelFloatInput | null,
  ttlCompCovEarnings?: ModelFloatInput | null,
  maxInterestSM?: ModelFloatInput | null,
  maxInterestPwnBrkr?: ModelFloatInput | null,
  maxInterestCredSllr?: ModelFloatInput | null,
  maxInterestGrp?: ModelFloatInput | null,
  maxMFNdogos?: ModelFloatInput | null,
  maxBLs?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  totalLnsRecovered?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type ModelCovCreditSellerFilterInput = {
  id?: ModelIDInput | null,
  itemName?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  loanerLoaneeAdv?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  buyerName?: ModelStringInput | null,
  SellerName?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  lonBala?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  advregnu?: ModelStringInput | null,
  DefaultPenaltyCredSl?: ModelFloatInput | null,
  DefaultPenaltyCredSl2?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCovCreditSellerFilterInput | null > | null,
  or?: Array< ModelCovCreditSellerFilterInput | null > | null,
  not?: ModelCovCreditSellerFilterInput | null,
};

export type ModelCovCreditSellerConnection = {
  __typename: "ModelCovCreditSellerConnection",
  items:  Array<CovCreditSeller | null >,
  nextToken?: string | null,
};

export type ModelNonCovCreditSellerFilterInput = {
  id?: ModelIDInput | null,
  itemName?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  buyerName?: ModelStringInput | null,
  SellerName?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  lonBala?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  DefaultPenaltyCredSl?: ModelFloatInput | null,
  DefaultPenaltyCredSl2?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNonCovCreditSellerFilterInput | null > | null,
  or?: Array< ModelNonCovCreditSellerFilterInput | null > | null,
  not?: ModelNonCovCreditSellerFilterInput | null,
};

export type ModelNonCovCreditSellerConnection = {
  __typename: "ModelNonCovCreditSellerConnection",
  items:  Array<NonCovCreditSeller | null >,
  nextToken?: string | null,
};

export type ModelGroupFilterInput = {
  grpContact?: ModelStringInput | null,
  regNo?: ModelStringInput | null,
  signitoryContact?: ModelStringInput | null,
  SignitoryNatid?: ModelStringInput | null,
  signitoryName?: ModelStringInput | null,
  grpName?: ModelStringInput | null,
  signitoryPW?: ModelStringInput | null,
  oprtnArea?: ModelStringInput | null,
  venture?: ModelStringInput | null,
  signitory2Sub?: ModelStringInput | null,
  WithdrawCnfrmtn?: ModelStringInput | null,
  grpEmail?: ModelStringInput | null,
  grpBal?: ModelFloatInput | null,
  ttlGrpMembers?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  ttlNonLonsRecChm?: ModelFloatInput | null,
  ttlNonLonsSentChm?: ModelFloatInput | null,
  ttlDpst?: ModelFloatInput | null,
  ttlWthdrwn?: ModelFloatInput | null,
  tymsChmHvBL?: ModelFloatInput | null,
  TtlActvLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlActvLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelChamaMembersFilterInput = {
  MembaId?: ModelStringInput | null,
  groupContact?: ModelStringInput | null,
  regNo?: ModelStringInput | null,
  ChamaNMember?: ModelStringInput | null,
  groupName?: ModelStringInput | null,
  memberContact?: ModelStringInput | null,
  memberName?: ModelStringInput | null,
  memberNatId?: ModelStringInput | null,
  GrossLnsGvn?: ModelFloatInput | null,
  LonAmtGven?: ModelFloatInput | null,
  AmtRepaid?: ModelFloatInput | null,
  LnBal?: ModelFloatInput | null,
  NonLoanAcBal?: ModelFloatInput | null,
  ttlNonLonAcBal?: ModelFloatInput | null,
  AcStatus?: ModelStatusInput | null,
  loanStatus?: ModelStatusInput | null,
  blStatus?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChamaMembersFilterInput | null > | null,
  or?: Array< ModelChamaMembersFilterInput | null > | null,
  not?: ModelChamaMembersFilterInput | null,
};

export type ModelChamaMembersConnection = {
  __typename: "ModelChamaMembersConnection",
  items:  Array<ChamaMembers | null >,
  nextToken?: string | null,
};

export type ModelChamasNPwnBrkrsFilterInput = {
  id?: ModelIDInput | null,
  contact?: ModelStringInput | null,
  regNo?: ModelStringInput | null,
  AcStatus?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChamasNPwnBrkrsFilterInput | null > | null,
  or?: Array< ModelChamasNPwnBrkrsFilterInput | null > | null,
  not?: ModelChamasNPwnBrkrsFilterInput | null,
};

export type ModelChamasNPwnBrkrsConnection = {
  __typename: "ModelChamasNPwnBrkrsConnection",
  items:  Array<ChamasNPwnBrkrs | null >,
  nextToken?: string | null,
};

export type ModelChamasRegConfirmFilterInput = {
  id?: ModelIDInput | null,
  contact?: ModelStringInput | null,
  regNo?: ModelStringInput | null,
  AcStatus?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChamasRegConfirmFilterInput | null > | null,
  or?: Array< ModelChamasRegConfirmFilterInput | null > | null,
  not?: ModelChamasRegConfirmFilterInput | null,
};

export type ModelChamasRegConfirmConnection = {
  __typename: "ModelChamasRegConfirmConnection",
  items:  Array<ChamasRegConfirm | null >,
  nextToken?: string | null,
};

export type ModelCvrdGroupLoansFilterInput = {
  id?: ModelIDInput | null,
  grpContact?: ModelStringInput | null,
  loaneePhn?: ModelStringInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  loanerLoanee?: ModelStringInput | null,
  loanerLoaneeAdv?: ModelStringInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  lonBala?: ModelFloatInput | null,
  memberId?: ModelStringInput | null,
  advRegNu?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  LoanerName?: ModelStringInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  DefaultPenaltyChm?: ModelFloatInput | null,
  DefaultPenaltyChm2?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCvrdGroupLoansFilterInput | null > | null,
  or?: Array< ModelCvrdGroupLoansFilterInput | null > | null,
  not?: ModelCvrdGroupLoansFilterInput | null,
};

export type ModelCvrdGroupLoansConnection = {
  __typename: "ModelCvrdGroupLoansConnection",
  items:  Array<CvrdGroupLoans | null >,
  nextToken?: string | null,
};

export type ModelNonCvrdGroupLoansFilterInput = {
  id?: ModelIDInput | null,
  grpContact?: ModelStringInput | null,
  loaneePhn?: ModelStringInput | null,
  loanerLoanee?: ModelStringInput | null,
  DefaultPenaltyChm?: ModelFloatInput | null,
  DefaultPenaltyChm2?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountExpectedBackWthClrnc?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  timeExpBack?: ModelFloatInput | null,
  timeExpBack2?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  loanerName?: ModelStringInput | null,
  memberId?: ModelStringInput | null,
  lonBala?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNonCvrdGroupLoansFilterInput | null > | null,
  or?: Array< ModelNonCvrdGroupLoansFilterInput | null > | null,
  not?: ModelNonCvrdGroupLoansFilterInput | null,
};

export type ModelNonCvrdGroupLoansConnection = {
  __typename: "ModelNonCvrdGroupLoansConnection",
  items:  Array<NonCvrdGroupLoans | null >,
  nextToken?: string | null,
};

export type ModelGroupNonLoansFilterInput = {
  id?: ModelIDInput | null,
  grpContact?: ModelStringInput | null,
  recipientPhn?: ModelStringInput | null,
  receiverName?: ModelStringInput | null,
  SenderName?: ModelStringInput | null,
  amountSent?: ModelFloatInput | null,
  memberId?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupNonLoansFilterInput | null > | null,
  or?: Array< ModelGroupNonLoansFilterInput | null > | null,
  not?: ModelGroupNonLoansFilterInput | null,
};

export type ModelGroupNonLoansConnection = {
  __typename: "ModelGroupNonLoansConnection",
  items:  Array<GroupNonLoans | null >,
  nextToken?: string | null,
};

export type ModelGrpMembersContributionFilterInput = {
  id?: ModelIDInput | null,
  memberPhn?: ModelStringInput | null,
  mmberNme?: ModelStringInput | null,
  GrpName?: ModelStringInput | null,
  grpContact?: ModelStringInput | null,
  contriAmount?: ModelFloatInput | null,
  memberId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGrpMembersContributionFilterInput | null > | null,
  or?: Array< ModelGrpMembersContributionFilterInput | null > | null,
  not?: ModelGrpMembersContributionFilterInput | null,
};

export type ModelGrpMembersContributionConnection = {
  __typename: "ModelGrpMembersContributionConnection",
  items:  Array<GrpMembersContribution | null >,
  nextToken?: string | null,
};

export type ModelReqLoanFilterInput = {
  id?: ModelIDInput | null,
  loaneeEmail?: ModelStringInput | null,
  loanerEmail?: ModelStringInput | null,
  loaneePhone?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  repaymentAmt?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReqLoanFilterInput | null > | null,
  or?: Array< ModelReqLoanFilterInput | null > | null,
  not?: ModelReqLoanFilterInput | null,
};

export type ModelReqLoanConnection = {
  __typename: "ModelReqLoanConnection",
  items:  Array<ReqLoan | null >,
  nextToken?: string | null,
};

export type ModelReqLoanChamaFilterInput = {
  id?: ModelIDInput | null,
  loaneeEmail?: ModelStringInput | null,
  chamaPhone?: ModelStringInput | null,
  loaneePhone?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  repaymentAmt?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  loaneeMemberId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReqLoanChamaFilterInput | null > | null,
  or?: Array< ModelReqLoanChamaFilterInput | null > | null,
  not?: ModelReqLoanChamaFilterInput | null,
};

export type ModelReqLoanChamaConnection = {
  __typename: "ModelReqLoanChamaConnection",
  items:  Array<ReqLoanChama | null >,
  nextToken?: string | null,
};

export type ModelReqLoanCredSlFilterInput = {
  id?: ModelIDInput | null,
  loaneeEmail?: ModelStringInput | null,
  businessNo?: ModelStringInput | null,
  loaneePhone?: ModelStringInput | null,
  loaneeName?: ModelStringInput | null,
  itemName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  repaymentAmt?: ModelFloatInput | null,
  repaymentPeriod?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReqLoanCredSlFilterInput | null > | null,
  or?: Array< ModelReqLoanCredSlFilterInput | null > | null,
  not?: ModelReqLoanCredSlFilterInput | null,
};

export type ModelReqLoanCredSlConnection = {
  __typename: "ModelReqLoanCredSlConnection",
  items:  Array<ReqLoanCredSl | null >,
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
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    MaxTymsBL: number,
    MaxTymsIHvBL: number,
    MaxAcBal: number,
    TymsIHvGivnLn: number,
    TymsMyLnClrd: number,
    DefaultPenaltySM: number,
    loanStatus: Status,
    acStatus: Status,
    deActvtnReason: string,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
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
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    MaxTymsBL: number,
    MaxTymsIHvBL: number,
    MaxAcBal: number,
    TymsIHvGivnLn: number,
    TymsMyLnClrd: number,
    DefaultPenaltySM: number,
    loanStatus: Status,
    acStatus: Status,
    deActvtnReason: string,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
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
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    MaxTymsBL: number,
    MaxTymsIHvBL: number,
    MaxAcBal: number,
    TymsIHvGivnLn: number,
    TymsMyLnClrd: number,
    DefaultPenaltySM: number,
    loanStatus: Status,
    acStatus: Status,
    deActvtnReason: string,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
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
    loaneePhn: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    loanerPhn: string,
    advregnu: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
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
    loaneePhn: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    loanerPhn: string,
    advregnu: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
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
    loaneePhn: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    loanerPhn: string,
    advregnu: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSMLoansNonCoveredMutationVariables = {
  input: CreateSMLoansNonCoveredInput,
  condition?: ModelSMLoansNonCoveredConditionInput | null,
};

export type CreateSMLoansNonCoveredMutation = {
  createSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneePhn: string,
    loanerPhn: string,
    loanerLoanee: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSMLoansNonCoveredMutationVariables = {
  input: UpdateSMLoansNonCoveredInput,
  condition?: ModelSMLoansNonCoveredConditionInput | null,
};

export type UpdateSMLoansNonCoveredMutation = {
  updateSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneePhn: string,
    loanerPhn: string,
    loanerLoanee: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSMLoansNonCoveredMutationVariables = {
  input: DeleteSMLoansNonCoveredInput,
  condition?: ModelSMLoansNonCoveredConditionInput | null,
};

export type DeleteSMLoansNonCoveredMutation = {
  deleteSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneePhn: string,
    loanerPhn: string,
    loanerLoanee: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNonLoansMutationVariables = {
  input: CreateNonLoansInput,
  condition?: ModelNonLoansConditionInput | null,
};

export type CreateNonLoansMutation = {
  createNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderPhn: string,
    recPhn: string,
    RecName: string,
    SenderName: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNonLoansMutationVariables = {
  input: UpdateNonLoansInput,
  condition?: ModelNonLoansConditionInput | null,
};

export type UpdateNonLoansMutation = {
  updateNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderPhn: string,
    recPhn: string,
    RecName: string,
    SenderName: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNonLoansMutationVariables = {
  input: DeleteNonLoansInput,
  condition?: ModelNonLoansConditionInput | null,
};

export type DeleteNonLoansMutation = {
  deleteNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderPhn: string,
    recPhn: string,
    RecName: string,
    SenderName: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSokoAdMutationVariables = {
  input: CreateSokoAdInput,
  condition?: ModelSokoAdConditionInput | null,
};

export type CreateSokoAdMutation = {
  createSokoAd?:  {
    __typename: "SokoAd",
    id: string,
    sokoregno: string,
    sokokntct: string,
    sokoname: string,
    sokoprice: number,
    sokotown: string,
    sokolnprcntg: number,
    sokolpymntperiod: number,
    sokodesc: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSokoAdMutationVariables = {
  input: UpdateSokoAdInput,
  condition?: ModelSokoAdConditionInput | null,
};

export type UpdateSokoAdMutation = {
  updateSokoAd?:  {
    __typename: "SokoAd",
    id: string,
    sokoregno: string,
    sokokntct: string,
    sokoname: string,
    sokoprice: number,
    sokotown: string,
    sokolnprcntg: number,
    sokolpymntperiod: number,
    sokodesc: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSokoAdMutationVariables = {
  input: DeleteSokoAdInput,
  condition?: ModelSokoAdConditionInput | null,
};

export type DeleteSokoAdMutation = {
  deleteSokoAd?:  {
    __typename: "SokoAd",
    id: string,
    sokoregno: string,
    sokokntct: string,
    sokoname: string,
    sokoprice: number,
    sokotown: string,
    sokolnprcntg: number,
    sokolpymntperiod: number,
    sokodesc: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRafikiLnAdMutationVariables = {
  input: CreateRafikiLnAdInput,
  condition?: ModelRafikiLnAdConditionInput | null,
};

export type CreateRafikiLnAdMutation = {
  createRafikiLnAd?:  {
    __typename: "RafikiLnAd",
    id: string,
    rafikiName: string,
    rafikicntct: string,
    rafikiEmail: string,
    rafikiamnt: number,
    rafikidesc: string,
    rafikiprcntg: number,
    rafikirpymntperiod: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRafikiLnAdMutationVariables = {
  input: UpdateRafikiLnAdInput,
  condition?: ModelRafikiLnAdConditionInput | null,
};

export type UpdateRafikiLnAdMutation = {
  updateRafikiLnAd?:  {
    __typename: "RafikiLnAd",
    id: string,
    rafikiName: string,
    rafikicntct: string,
    rafikiEmail: string,
    rafikiamnt: number,
    rafikidesc: string,
    rafikiprcntg: number,
    rafikirpymntperiod: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRafikiLnAdMutationVariables = {
  input: DeleteRafikiLnAdInput,
  condition?: ModelRafikiLnAdConditionInput | null,
};

export type DeleteRafikiLnAdMutation = {
  deleteRafikiLnAd?:  {
    __typename: "RafikiLnAd",
    id: string,
    rafikiName: string,
    rafikicntct: string,
    rafikiEmail: string,
    rafikiamnt: number,
    rafikidesc: string,
    rafikiprcntg: number,
    rafikirpymntperiod: number,
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
    sagentregno: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    bankName: string,
    bkAcNo: string,
    owner: string,
    town: string,
    MFNWithdrwlFee: number,
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
    sagentregno: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    bankName: string,
    bkAcNo: string,
    owner: string,
    town: string,
    MFNWithdrwlFee: number,
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
    sagentregno: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    bankName: string,
    bkAcNo: string,
    owner: string,
    town: string,
    MFNWithdrwlFee: number,
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
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
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
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
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
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
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
    amount: number,
    agentPhonecontact: string,
    agentName: string,
    userName: string,
    saName: string,
    saPhone: string,
    sagentId: string,
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
    amount: number,
    agentPhonecontact: string,
    agentName: string,
    userName: string,
    saName: string,
    saPhone: string,
    sagentId: string,
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
    amount: number,
    agentPhonecontact: string,
    agentName: string,
    userName: string,
    saName: string,
    saPhone: string,
    sagentId: string,
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
    agContact: string,
    agentName: string,
    userName: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    agContact: string,
    agentName: string,
    userName: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    agContact: string,
    agentName: string,
    userName: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAgentWithdrawalsMutationVariables = {
  input: CreateAgentWithdrawalsInput,
  condition?: ModelAgentWithdrawalsConditionInput | null,
};

export type CreateAgentWithdrawalsMutation = {
  createAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    bankName: string,
    bkAcNo: string,
    Amount: number,
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
    id: string,
    agentPhone: string,
    bankAdminId: string,
    bankName: string,
    bkAcNo: string,
    Amount: number,
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
    id: string,
    agentPhone: string,
    bankAdminId: string,
    bankName: string,
    bkAcNo: string,
    Amount: number,
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
    saPhoneContact: string,
    saNationalid: string,
    name: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    MFKWithdrwlFee: number,
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
    saPhoneContact: string,
    saNationalid: string,
    name: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    MFKWithdrwlFee: number,
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
    saPhoneContact: string,
    saNationalid: string,
    name: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    MFKWithdrwlFee: number,
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
    saId: string,
    amount: number,
    bankAdmnId: string,
    bankName: string,
    bkAcNo: string,
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
    saId: string,
    amount: number,
    bankAdmnId: string,
    bankName: string,
    bkAcNo: string,
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
    saId: string,
    amount: number,
    bankAdmnId: string,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonelMutationVariables = {
  input: CreatePersonelInput,
  condition?: ModelPersonelConditionInput | null,
};

export type CreatePersonelMutation = {
  createPersonel?:  {
    __typename: "Personel",
    phoneKontact: string,
    BusinessRegNo: string,
    nationalid: string,
    BiznaName: string,
    name: string,
    ownrsss: string,
    email: string,
    workerId: string,
    workId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePersonelMutationVariables = {
  input: UpdatePersonelInput,
  condition?: ModelPersonelConditionInput | null,
};

export type UpdatePersonelMutation = {
  updatePersonel?:  {
    __typename: "Personel",
    phoneKontact: string,
    BusinessRegNo: string,
    nationalid: string,
    BiznaName: string,
    name: string,
    ownrsss: string,
    email: string,
    workerId: string,
    workId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePersonelMutationVariables = {
  input: DeletePersonelInput,
  condition?: ModelPersonelConditionInput | null,
};

export type DeletePersonelMutation = {
  deletePersonel?:  {
    __typename: "Personel",
    phoneKontact: string,
    BusinessRegNo: string,
    nationalid: string,
    BiznaName: string,
    name: string,
    ownrsss: string,
    email: string,
    workerId: string,
    workId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBiznaMutationVariables = {
  input: CreateBiznaInput,
  condition?: ModelBiznaConditionInput | null,
};

export type CreateBiznaMutation = {
  createBizna?:  {
    __typename: "Bizna",
    BusKntct: string,
    busName: string,
    pw: string,
    TtlEarnings: number,
    earningsBal: number,
    netEarnings: number,
    email: string,
    status: string,
    owner: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBiznaMutationVariables = {
  input: UpdateBiznaInput,
  condition?: ModelBiznaConditionInput | null,
};

export type UpdateBiznaMutation = {
  updateBizna?:  {
    __typename: "Bizna",
    BusKntct: string,
    busName: string,
    pw: string,
    TtlEarnings: number,
    earningsBal: number,
    netEarnings: number,
    email: string,
    status: string,
    owner: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBiznaMutationVariables = {
  input: DeleteBiznaInput,
  condition?: ModelBiznaConditionInput | null,
};

export type DeleteBiznaMutation = {
  deleteBizna?:  {
    __typename: "Bizna",
    BusKntct: string,
    busName: string,
    pw: string,
    TtlEarnings: number,
    earningsBal: number,
    netEarnings: number,
    email: string,
    status: string,
    owner: string,
    description: string,
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
    bankName: string,
    bkAcNo: string,
    officeLoc: string,
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
    bankName: string,
    bkAcNo: string,
    officeLoc: string,
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
    bankName: string,
    bkAcNo: string,
    officeLoc: string,
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
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    bankName: string,
    bkAcNo: string,
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
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    bankName: string,
    bkAcNo: string,
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
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    bankName: string,
    bkAcNo: string,
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
    AdvCompanyCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    chmMmbrTransferFee: number,
    chmTransferFee: number,
    biznaTransferFee: number,
    palpalLnRpymntFee: number,
    chmLnRpymntFee: number,
    crdSllrLnRpymntFee: number,
    userClearanceFee: number,
    CoverageFee: number,
    vat: number,
    ttlvat: number,
    enquiryFee: number,
    UsrWthdrwlFees: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlBLUsrs: number,
    ttlActiveChm: number,
    ttlInactvChm: number,
    ttlBLChm: number,
    ttlActiveChmUsers: number,
    ttlInactvChmUsrs: number,
    ttlBLChmUsrs: number,
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
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestPwnBrkr: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    maxMFNdogos: number,
    maxBLs: number,
    owner: string,
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
    AdvCompanyCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    chmMmbrTransferFee: number,
    chmTransferFee: number,
    biznaTransferFee: number,
    palpalLnRpymntFee: number,
    chmLnRpymntFee: number,
    crdSllrLnRpymntFee: number,
    userClearanceFee: number,
    CoverageFee: number,
    vat: number,
    ttlvat: number,
    enquiryFee: number,
    UsrWthdrwlFees: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlBLUsrs: number,
    ttlActiveChm: number,
    ttlInactvChm: number,
    ttlBLChm: number,
    ttlActiveChmUsers: number,
    ttlInactvChmUsrs: number,
    ttlBLChmUsrs: number,
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
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestPwnBrkr: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    maxMFNdogos: number,
    maxBLs: number,
    owner: string,
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
    AdvCompanyCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    chmMmbrTransferFee: number,
    chmTransferFee: number,
    biznaTransferFee: number,
    palpalLnRpymntFee: number,
    chmLnRpymntFee: number,
    crdSllrLnRpymntFee: number,
    userClearanceFee: number,
    CoverageFee: number,
    vat: number,
    ttlvat: number,
    enquiryFee: number,
    UsrWthdrwlFees: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlBLUsrs: number,
    ttlActiveChm: number,
    ttlInactvChm: number,
    ttlBLChm: number,
    ttlActiveChmUsers: number,
    ttlInactvChmUsrs: number,
    ttlBLChmUsrs: number,
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
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestPwnBrkr: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    maxMFNdogos: number,
    maxBLs: number,
    owner: string,
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
    itemName: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    lonBala: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
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
    itemName: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    lonBala: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
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
    itemName: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    lonBala: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNonCovCreditSellerMutationVariables = {
  input: CreateNonCovCreditSellerInput,
  condition?: ModelNonCovCreditSellerConditionInput | null,
};

export type CreateNonCovCreditSellerMutation = {
  createNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    lonBala: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNonCovCreditSellerMutationVariables = {
  input: UpdateNonCovCreditSellerInput,
  condition?: ModelNonCovCreditSellerConditionInput | null,
};

export type UpdateNonCovCreditSellerMutation = {
  updateNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    lonBala: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNonCovCreditSellerMutationVariables = {
  input: DeleteNonCovCreditSellerInput,
  condition?: ModelNonCovCreditSellerConditionInput | null,
};

export type DeleteNonCovCreditSellerMutation = {
  deleteNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    lonBala: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    status: Status,
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
    regNo: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    oprtnArea: string,
    venture: string,
    signitory2Sub: string,
    WithdrawCnfrmtn: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    tymsChmHvBL: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
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
    regNo: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    oprtnArea: string,
    venture: string,
    signitory2Sub: string,
    WithdrawCnfrmtn: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    tymsChmHvBL: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
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
    regNo: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    oprtnArea: string,
    venture: string,
    signitory2Sub: string,
    WithdrawCnfrmtn: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    tymsChmHvBL: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChamaMembersMutationVariables = {
  input: CreateChamaMembersInput,
  condition?: ModelChamaMembersConditionInput | null,
};

export type CreateChamaMembersMutation = {
  createChamaMembers?:  {
    __typename: "ChamaMembers",
    MembaId: string,
    groupContact: string,
    regNo: string,
    ChamaNMember: string,
    groupName: string,
    memberContact: string,
    memberName: string,
    memberNatId: string,
    GrossLnsGvn: number,
    LonAmtGven: number,
    AmtRepaid: number,
    LnBal: number,
    NonLoanAcBal: number,
    ttlNonLonAcBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChamaMembersMutationVariables = {
  input: UpdateChamaMembersInput,
  condition?: ModelChamaMembersConditionInput | null,
};

export type UpdateChamaMembersMutation = {
  updateChamaMembers?:  {
    __typename: "ChamaMembers",
    MembaId: string,
    groupContact: string,
    regNo: string,
    ChamaNMember: string,
    groupName: string,
    memberContact: string,
    memberName: string,
    memberNatId: string,
    GrossLnsGvn: number,
    LonAmtGven: number,
    AmtRepaid: number,
    LnBal: number,
    NonLoanAcBal: number,
    ttlNonLonAcBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChamaMembersMutationVariables = {
  input: DeleteChamaMembersInput,
  condition?: ModelChamaMembersConditionInput | null,
};

export type DeleteChamaMembersMutation = {
  deleteChamaMembers?:  {
    __typename: "ChamaMembers",
    MembaId: string,
    groupContact: string,
    regNo: string,
    ChamaNMember: string,
    groupName: string,
    memberContact: string,
    memberName: string,
    memberNatId: string,
    GrossLnsGvn: number,
    LonAmtGven: number,
    AmtRepaid: number,
    LnBal: number,
    NonLoanAcBal: number,
    ttlNonLonAcBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChamasNPwnBrkrsMutationVariables = {
  input: CreateChamasNPwnBrkrsInput,
  condition?: ModelChamasNPwnBrkrsConditionInput | null,
};

export type CreateChamasNPwnBrkrsMutation = {
  createChamasNPwnBrkrs?:  {
    __typename: "ChamasNPwnBrkrs",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChamasNPwnBrkrsMutationVariables = {
  input: UpdateChamasNPwnBrkrsInput,
  condition?: ModelChamasNPwnBrkrsConditionInput | null,
};

export type UpdateChamasNPwnBrkrsMutation = {
  updateChamasNPwnBrkrs?:  {
    __typename: "ChamasNPwnBrkrs",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChamasNPwnBrkrsMutationVariables = {
  input: DeleteChamasNPwnBrkrsInput,
  condition?: ModelChamasNPwnBrkrsConditionInput | null,
};

export type DeleteChamasNPwnBrkrsMutation = {
  deleteChamasNPwnBrkrs?:  {
    __typename: "ChamasNPwnBrkrs",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChamasRegConfirmMutationVariables = {
  input: CreateChamasRegConfirmInput,
  condition?: ModelChamasRegConfirmConditionInput | null,
};

export type CreateChamasRegConfirmMutation = {
  createChamasRegConfirm?:  {
    __typename: "ChamasRegConfirm",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChamasRegConfirmMutationVariables = {
  input: UpdateChamasRegConfirmInput,
  condition?: ModelChamasRegConfirmConditionInput | null,
};

export type UpdateChamasRegConfirmMutation = {
  updateChamasRegConfirm?:  {
    __typename: "ChamasRegConfirm",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChamasRegConfirmMutationVariables = {
  input: DeleteChamasRegConfirmInput,
  condition?: ModelChamasRegConfirmConditionInput | null,
};

export type DeleteChamasRegConfirmMutation = {
  deleteChamasRegConfirm?:  {
    __typename: "ChamasRegConfirm",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
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
    loaneePhn: string,
    repaymentPeriod: number,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    description?: string | null,
    lonBala: number,
    memberId: string,
    advRegNu: string,
    loaneeName: string,
    LoanerName: string,
    timeExpBack: number,
    timeExpBack2: number,
    status: Status,
    owner: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
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
    loaneePhn: string,
    repaymentPeriod: number,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    description?: string | null,
    lonBala: number,
    memberId: string,
    advRegNu: string,
    loaneeName: string,
    LoanerName: string,
    timeExpBack: number,
    timeExpBack2: number,
    status: Status,
    owner: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
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
    loaneePhn: string,
    repaymentPeriod: number,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    description?: string | null,
    lonBala: number,
    memberId: string,
    advRegNu: string,
    loaneeName: string,
    LoanerName: string,
    timeExpBack: number,
    timeExpBack2: number,
    status: Status,
    owner: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNonCvrdGroupLoansMutationVariables = {
  input: CreateNonCvrdGroupLoansInput,
  condition?: ModelNonCvrdGroupLoansConditionInput | null,
};

export type CreateNonCvrdGroupLoansMutation = {
  createNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    loanerLoanee: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    loaneeName: string,
    loanerName: string,
    memberId: string,
    lonBala: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNonCvrdGroupLoansMutationVariables = {
  input: UpdateNonCvrdGroupLoansInput,
  condition?: ModelNonCvrdGroupLoansConditionInput | null,
};

export type UpdateNonCvrdGroupLoansMutation = {
  updateNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    loanerLoanee: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    loaneeName: string,
    loanerName: string,
    memberId: string,
    lonBala: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNonCvrdGroupLoansMutationVariables = {
  input: DeleteNonCvrdGroupLoansInput,
  condition?: ModelNonCvrdGroupLoansConditionInput | null,
};

export type DeleteNonCvrdGroupLoansMutation = {
  deleteNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    loanerLoanee: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    loaneeName: string,
    loanerName: string,
    memberId: string,
    lonBala: number,
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
    recipientPhn: string,
    receiverName: string,
    SenderName: string,
    amountSent: number,
    memberId: string,
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
    recipientPhn: string,
    receiverName: string,
    SenderName: string,
    amountSent: number,
    memberId: string,
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
    recipientPhn: string,
    receiverName: string,
    SenderName: string,
    amountSent: number,
    memberId: string,
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
    id: string,
    memberPhn: string,
    mmberNme: string,
    GrpName: string,
    grpContact: string,
    contriAmount: number,
    memberId: string,
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
    id: string,
    memberPhn: string,
    mmberNme: string,
    GrpName: string,
    grpContact: string,
    contriAmount: number,
    memberId: string,
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
    id: string,
    memberPhn: string,
    mmberNme: string,
    GrpName: string,
    grpContact: string,
    contriAmount: number,
    memberId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReqLoanMutationVariables = {
  input: CreateReqLoanInput,
  condition?: ModelReqLoanConditionInput | null,
};

export type CreateReqLoanMutation = {
  createReqLoan?:  {
    __typename: "ReqLoan",
    id: string,
    loaneeEmail: string,
    loanerEmail: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReqLoanMutationVariables = {
  input: UpdateReqLoanInput,
  condition?: ModelReqLoanConditionInput | null,
};

export type UpdateReqLoanMutation = {
  updateReqLoan?:  {
    __typename: "ReqLoan",
    id: string,
    loaneeEmail: string,
    loanerEmail: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReqLoanMutationVariables = {
  input: DeleteReqLoanInput,
  condition?: ModelReqLoanConditionInput | null,
};

export type DeleteReqLoanMutation = {
  deleteReqLoan?:  {
    __typename: "ReqLoan",
    id: string,
    loaneeEmail: string,
    loanerEmail: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReqLoanChamaMutationVariables = {
  input: CreateReqLoanChamaInput,
  condition?: ModelReqLoanChamaConditionInput | null,
};

export type CreateReqLoanChamaMutation = {
  createReqLoanChama?:  {
    __typename: "ReqLoanChama",
    id: string,
    loaneeEmail: string,
    chamaPhone: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    loaneeMemberId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReqLoanChamaMutationVariables = {
  input: UpdateReqLoanChamaInput,
  condition?: ModelReqLoanChamaConditionInput | null,
};

export type UpdateReqLoanChamaMutation = {
  updateReqLoanChama?:  {
    __typename: "ReqLoanChama",
    id: string,
    loaneeEmail: string,
    chamaPhone: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    loaneeMemberId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReqLoanChamaMutationVariables = {
  input: DeleteReqLoanChamaInput,
  condition?: ModelReqLoanChamaConditionInput | null,
};

export type DeleteReqLoanChamaMutation = {
  deleteReqLoanChama?:  {
    __typename: "ReqLoanChama",
    id: string,
    loaneeEmail: string,
    chamaPhone: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    loaneeMemberId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReqLoanCredSlMutationVariables = {
  input: CreateReqLoanCredSlInput,
  condition?: ModelReqLoanCredSlConditionInput | null,
};

export type CreateReqLoanCredSlMutation = {
  createReqLoanCredSl?:  {
    __typename: "ReqLoanCredSl",
    id: string,
    loaneeEmail: string,
    businessNo: string,
    loaneePhone: string,
    loaneeName: string,
    itemName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReqLoanCredSlMutationVariables = {
  input: UpdateReqLoanCredSlInput,
  condition?: ModelReqLoanCredSlConditionInput | null,
};

export type UpdateReqLoanCredSlMutation = {
  updateReqLoanCredSl?:  {
    __typename: "ReqLoanCredSl",
    id: string,
    loaneeEmail: string,
    businessNo: string,
    loaneePhone: string,
    loaneeName: string,
    itemName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReqLoanCredSlMutationVariables = {
  input: DeleteReqLoanCredSlInput,
  condition?: ModelReqLoanCredSlConditionInput | null,
};

export type DeleteReqLoanCredSlMutation = {
  deleteReqLoanCredSl?:  {
    __typename: "ReqLoanCredSl",
    id: string,
    loaneeEmail: string,
    businessNo: string,
    loaneePhone: string,
    loaneeName: string,
    itemName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSMAccountQueryVariables = {
  awsemail: string,
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
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    MaxTymsBL: number,
    MaxTymsIHvBL: number,
    MaxAcBal: number,
    TymsIHvGivnLn: number,
    TymsMyLnClrd: number,
    DefaultPenaltySM: number,
    loanStatus: Status,
    acStatus: Status,
    deActvtnReason: string,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSMAccountsQueryVariables = {
  awsemail?: string | null,
  filter?: ModelSMAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSMAccountsQuery = {
  listSMAccounts?:  {
    __typename: "ModelSMAccountConnection",
    items:  Array< {
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
      TtlActvLonsTmsLnrCov: number,
      TtlActvLonsTmsLneeCov: number,
      TtlActvLonsAmtLnrCov: number,
      TtlActvLonsAmtLneeCov: number,
      TtlBLLonsTmsLnrCov: number,
      TtlBLLonsTmsLneeCov: number,
      TtlBLLonsAmtLnrCov: number,
      TtlBLLonsAmtLneeCov: number,
      TtlClrdLonsTmsLnrCov: number,
      TtlClrdLonsTmsLneeCov: number,
      TtlClrdLonsAmtLnrCov: number,
      TtlClrdLonsAmtLneeCov: number,
      TtlActvLonsTmsLneeChmCov: number,
      TtlActvLonsAmtLneeChmCov: number,
      TtlBLLonsTmsLneeChmCov: number,
      TtlBLLonsAmtLneeChmCov: number,
      TtlClrdLonsTmsLneeChmCov: number,
      TtlClrdLonsAmtLneeChmCov: number,
      TtlActvLonsTmsSllrCov: number,
      TtlActvLonsTmsByrCov: number,
      TtlActvLonsAmtSllrCov: number,
      TtlActvLonsAmtByrCov: number,
      TtlBLLonsTmsSllrCov: number,
      TtlBLLonsTmsByrCov: number,
      TtlBLLonsAmtSllrCov: number,
      TtlBLLonsAmtByrCov: number,
      TtlClrdLonsTmsSllrCov: number,
      TtlClrdLonsTmsByrCov: number,
      TtlClrdLonsAmtSllrCov: number,
      TtlClrdLonsAmtByrCov: number,
      TtlActvLonsTmsLnrNonCov: number,
      TtlActvLonsTmsLneeNonCov: number,
      TtlActvLonsAmtLnrNonCov: number,
      TtlActvLonsAmtLneeNonCov: number,
      TtlBLLonsTmsLnrNonCov: number,
      TtlBLLonsTmsLneeNonCov: number,
      TtlBLLonsAmtLnrNonCov: number,
      TtlBLLonsAmtLneeNonCov: number,
      TtlClrdLonsTmsLnrNonCov: number,
      TtlClrdLonsTmsLneeNonCov: number,
      TtlClrdLonsAmtLnrNonCov: number,
      TtlClrdLonsAmtLneeNonCov: number,
      TtlActvLonsTmsLneeChmNonCov: number,
      TtlActvLonsAmtLneeChmNonCov: number,
      TtlBLLonsTmsLneeChmNonCov: number,
      TtlBLLonsAmtLneeChmNonCov: number,
      TtlClrdLonsTmsLneeChmNonCov: number,
      TtlClrdLonsAmtLneeChmNonCov: number,
      TtlActvLonsTmsSllrNonCov: number,
      TtlActvLonsTmsByrNonCov: number,
      TtlActvLonsAmtSllrNonCov: number,
      TtlActvLonsAmtByrNonCov: number,
      TtlBLLonsTmsSllrNonCov: number,
      TtlBLLonsTmsByrNonCov: number,
      TtlBLLonsAmtSllrNonCov: number,
      TtlBLLonsAmtByrNonCov: number,
      TtlClrdLonsTmsSllrNonCov: number,
      TtlClrdLonsTmsByrNonCov: number,
      TtlClrdLonsAmtSllrNonCov: number,
      TtlClrdLonsAmtByrNonCov: number,
      ttlNonLonsRecSM: number,
      ttlNonLonsSentSM: number,
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm: number,
      MaxTymsBL: number,
      MaxTymsIHvBL: number,
      MaxAcBal: number,
      TymsIHvGivnLn: number,
      TymsMyLnClrd: number,
      DefaultPenaltySM: number,
      loanStatus: Status,
      acStatus: Status,
      deActvtnReason: string,
      blStatus: Status,
      loanLimit: number,
      nonLonLimit: number,
      withdrawalLimit: number,
      depositLimit: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    loaneePhn: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    loanerPhn: string,
    advregnu: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
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
    items:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loaneePhn: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      loanerPhn: string,
      advregnu: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSMLoansNonCoveredQueryVariables = {
  id: string,
};

export type GetSMLoansNonCoveredQuery = {
  getSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneePhn: string,
    loanerPhn: string,
    loanerLoanee: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSMLoansNonCoveredsQueryVariables = {
  filter?: ModelSMLoansNonCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSMLoansNonCoveredsQuery = {
  listSMLoansNonCovereds?:  {
    __typename: "ModelSMLoansNonCoveredConnection",
    items:  Array< {
      __typename: "SMLoansNonCovered",
      id: string,
      loaneePhn: string,
      loanerPhn: string,
      loanerLoanee: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNonLoansQueryVariables = {
  id: string,
};

export type GetNonLoansQuery = {
  getNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderPhn: string,
    recPhn: string,
    RecName: string,
    SenderName: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNonLoansQueryVariables = {
  filter?: ModelNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNonLoansQuery = {
  listNonLoans?:  {
    __typename: "ModelNonLoansConnection",
    items:  Array< {
      __typename: "NonLoans",
      id: string,
      senderPhn: string,
      recPhn: string,
      RecName: string,
      SenderName: string,
      amount: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSokoAdQueryVariables = {
  id: string,
};

export type GetSokoAdQuery = {
  getSokoAd?:  {
    __typename: "SokoAd",
    id: string,
    sokoregno: string,
    sokokntct: string,
    sokoname: string,
    sokoprice: number,
    sokotown: string,
    sokolnprcntg: number,
    sokolpymntperiod: number,
    sokodesc: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSokoAdsQueryVariables = {
  filter?: ModelSokoAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSokoAdsQuery = {
  listSokoAds?:  {
    __typename: "ModelSokoAdConnection",
    items:  Array< {
      __typename: "SokoAd",
      id: string,
      sokoregno: string,
      sokokntct: string,
      sokoname: string,
      sokoprice: number,
      sokotown: string,
      sokolnprcntg: number,
      sokolpymntperiod: number,
      sokodesc: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRafikiLnAdQueryVariables = {
  id: string,
};

export type GetRafikiLnAdQuery = {
  getRafikiLnAd?:  {
    __typename: "RafikiLnAd",
    id: string,
    rafikiName: string,
    rafikicntct: string,
    rafikiEmail: string,
    rafikiamnt: number,
    rafikidesc: string,
    rafikiprcntg: number,
    rafikirpymntperiod: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRafikiLnAdsQueryVariables = {
  filter?: ModelRafikiLnAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRafikiLnAdsQuery = {
  listRafikiLnAds?:  {
    __typename: "ModelRafikiLnAdConnection",
    items:  Array< {
      __typename: "RafikiLnAd",
      id: string,
      rafikiName: string,
      rafikicntct: string,
      rafikiEmail: string,
      rafikiamnt: number,
      rafikidesc: string,
      rafikiprcntg: number,
      rafikirpymntperiod: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    sagentregno: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    bankName: string,
    bkAcNo: string,
    owner: string,
    town: string,
    MFNWithdrwlFee: number,
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
    items:  Array< {
      __typename: "Agent",
      phonecontact: string,
      sagentregno: string,
      nationalid: string,
      name: string,
      ttlEarnings: number,
      pw: string,
      email: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,
      status: Status,
      bankName: string,
      bkAcNo: string,
      owner: string,
      town: string,
      MFNWithdrwlFee: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFloatPurchaseQueryVariables = {
  transactId: string,
};

export type GetFloatPurchaseQuery = {
  getFloatPurchase?:  {
    __typename: "FloatPurchase",
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFloatPurchasesQueryVariables = {
  transactId?: string | null,
  filter?: ModelFloatPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFloatPurchasesQuery = {
  listFloatPurchases?:  {
    __typename: "ModelFloatPurchaseConnection",
    items:  Array< {
      __typename: "FloatPurchase",
      agentphone: string,
      amount: number,
      transactId: string,
      bankAdminID: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    amount: number,
    agentPhonecontact: string,
    agentName: string,
    userName: string,
    saName: string,
    saPhone: string,
    sagentId: string,
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
    items:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      amount: number,
      agentPhonecontact: string,
      agentName: string,
      userName: string,
      saName: string,
      saPhone: string,
      sagentId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    agContact: string,
    agentName: string,
    userName: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    items:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      agContact: string,
      agentName: string,
      userName: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAgentWithdrawalsQueryVariables = {
  id: string,
};

export type GetAgentWithdrawalsQuery = {
  getAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    bankName: string,
    bkAcNo: string,
    Amount: number,
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
    items:  Array< {
      __typename: "AgentWithdrawals",
      id: string,
      agentPhone: string,
      bankAdminId: string,
      bankName: string,
      bkAcNo: string,
      Amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSAgentQueryVariables = {
  saPhoneContact: string,
};

export type GetSAgentQuery = {
  getSAgent?:  {
    __typename: "SAgent",
    saPhoneContact: string,
    saNationalid: string,
    name: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    MFKWithdrwlFee: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSAgentsQueryVariables = {
  saPhoneContact?: string | null,
  filter?: ModelSAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSAgentsQuery = {
  listSAgents?:  {
    __typename: "ModelSAgentConnection",
    items:  Array< {
      __typename: "SAgent",
      saPhoneContact: string,
      saNationalid: string,
      name: string,
      pw: string,
      TtlEarnings: number,
      actvMFNdog: number,
      InctvMFNdog: number,
      email: string,
      saBalance: number,
      bankName: string,
      bkAcNo: string,
      status: Status,
      owner: string,
      MFKWithdrwlFee: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    saId: string,
    amount: number,
    bankAdmnId: string,
    bankName: string,
    bkAcNo: string,
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
    items:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      saId: string,
      amount: number,
      bankAdmnId: string,
      bankName: string,
      bkAcNo: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonelQueryVariables = {
  workerId: string,
};

export type GetPersonelQuery = {
  getPersonel?:  {
    __typename: "Personel",
    phoneKontact: string,
    BusinessRegNo: string,
    nationalid: string,
    BiznaName: string,
    name: string,
    ownrsss: string,
    email: string,
    workerId: string,
    workId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPersonelsQueryVariables = {
  workerId?: string | null,
  filter?: ModelPersonelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPersonelsQuery = {
  listPersonels?:  {
    __typename: "ModelPersonelConnection",
    items:  Array< {
      __typename: "Personel",
      phoneKontact: string,
      BusinessRegNo: string,
      nationalid: string,
      BiznaName: string,
      name: string,
      ownrsss: string,
      email: string,
      workerId: string,
      workId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBiznaQueryVariables = {
  BusKntct: string,
};

export type GetBiznaQuery = {
  getBizna?:  {
    __typename: "Bizna",
    BusKntct: string,
    busName: string,
    pw: string,
    TtlEarnings: number,
    earningsBal: number,
    netEarnings: number,
    email: string,
    status: string,
    owner: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBiznasQueryVariables = {
  BusKntct?: string | null,
  filter?: ModelBiznaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBiznasQuery = {
  listBiznas?:  {
    __typename: "ModelBiznaConnection",
    items:  Array< {
      __typename: "Bizna",
      BusKntct: string,
      busName: string,
      pw: string,
      TtlEarnings: number,
      earningsBal: number,
      netEarnings: number,
      email: string,
      status: string,
      owner: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    items:  Array< {
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
    } | null >,
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
    items:  Array< {
      __typename: "BankAdmWithdrawals",
      id: string,
      bankAdmNatId: string,
      amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    bankName: string,
    bkAcNo: string,
    officeLoc: string,
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
    items:  Array< {
      __typename: "Advocate",
      advregnu: string,
      nationalid: string,
      pwd: string,
      name: string,
      phonecontact: string,
      TtlEarnings: number,
      advBal: number,
      email: string,
      bankName: string,
      bkAcNo: string,
      officeLoc: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    bankName: string,
    bkAcNo: string,
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
    items:  Array< {
      __typename: "AdvocateWithdrawals",
      id: string,
      bankAdmnId: string,
      advregnu: string,
      amount: number,
      bankName: string,
      bkAcNo: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    AdvCompanyCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    chmMmbrTransferFee: number,
    chmTransferFee: number,
    biznaTransferFee: number,
    palpalLnRpymntFee: number,
    chmLnRpymntFee: number,
    crdSllrLnRpymntFee: number,
    userClearanceFee: number,
    CoverageFee: number,
    vat: number,
    ttlvat: number,
    enquiryFee: number,
    UsrWthdrwlFees: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlBLUsrs: number,
    ttlActiveChm: number,
    ttlInactvChm: number,
    ttlBLChm: number,
    ttlActiveChmUsers: number,
    ttlInactvChmUsrs: number,
    ttlBLChmUsrs: number,
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
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestPwnBrkr: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    maxMFNdogos: number,
    maxBLs: number,
    owner: string,
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
    items:  Array< {
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
      AdvCompanyCom: number,
      bankAdminCom: number,
      sawithdrawalFee: number,
      advuserwithdrawalFee: number,
      bankAdmuserwithdrawalFee: number,
      userLoanTransferFee: number,
      userTransferFee: number,
      chmMmbrTransferFee: number,
      chmTransferFee: number,
      biznaTransferFee: number,
      palpalLnRpymntFee: number,
      chmLnRpymntFee: number,
      crdSllrLnRpymntFee: number,
      userClearanceFee: number,
      CoverageFee: number,
      vat: number,
      ttlvat: number,
      enquiryFee: number,
      UsrWthdrwlFees: number,
      ttlNonLonssRecSM: number,
      ttlNonLonssSentSM: number,
      ttlNonLonssRecChm: number,
      ttlNonLonssSentChm: number,
      companyEarningBal: number,
      companyEarning: number,
      agentEarningBal: number,
      agentEarning: number,
      saEarningBal: number,
      saEarning: number,
      AdvEarningBal: number,
      AdvEarning: number,
      admEarningBal: number,
      admEarning: number,
      ttlUsrDep: number,
      ttlUserWthdrwl?: number | null,
      agentFloatIn: number,
      agentFloatOut: number,
      ttlActiveUsers: number,
      ttlInactvUsrs: number,
      ttlBLUsrs: number,
      ttlActiveChm: number,
      ttlInactvChm: number,
      ttlBLChm: number,
      ttlActiveChmUsers: number,
      ttlInactvChmUsrs: number,
      ttlBLChmUsrs: number,
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
      ttlSMLnsInAmtCov: number,
      ttlChmLnsInAmtCov: number,
      ttlSellerLnsInAmtCov: number,
      ttlSMLnsInActvAmtCov: number,
      ttlChmLnsInActvAmtCov: number,
      ttlSellerLnsInActvAmtCov: number,
      ttlSMLnsInClrdAmtCov: number,
      ttlChmLnsInClrdAmtCov: number,
      ttlSellerLnsInClrdAmtCov: number,
      ttlSMLnsInBlAmtCov: number,
      ttlChmLnsInBlAmtCov: number,
      ttlSellerLnsInBlAmtCov: number,
      ttlSMLnsInTymsCov: number,
      ttlChmLnsInTymsCov: number,
      ttlSellerLnsInTymsCov: number,
      ttlSMLnsInActvTymsCov: number,
      ttlChmLnsInActvTymsCov: number,
      ttlSellerLnsInActvTymsCov: number,
      ttlSMLnsInClrdTymsCov: number,
      ttlChmLnsInClrdTymsCov: number,
      ttlSellerLnsInClrdTymsCov: number,
      ttlSMLnsInBlTymsCov: number,
      ttlChmLnsInBlTymsCov: number,
      ttlSellerLnsInBlTymsCov: number,
      ttlCompTrnsfrEarningsCov: number,
      ttlCompBLClrncEarningsCov: number,
      ttlSMLnsInAmtNonCov: number,
      ttlChmLnsInAmtNonCov: number,
      ttlSellerLnsInAmtNonCov: number,
      ttlSMLnsInActvAmtNonCov: number,
      ttlChmLnsInActvAmtNonCov: number,
      ttlSellerLnsInActvAmtNonCov: number,
      ttlSMLnsInClrdAmtNonCov: number,
      ttlChmLnsInClrdAmtNonCov: number,
      ttlSellerLnsInClrdAmtNonCov: number,
      ttlSMLnsInBlAmtNonCov: number,
      ttlChmLnsInBlAmtNonCov: number,
      ttlSellerLnsInBlAmtNonCov: number,
      ttlSMLnsInTymsNonCov: number,
      ttlChmLnsInTymsNonCov: number,
      ttlSellerLnsInTymsNonCov: number,
      ttlSMLnsInActvTymsNonCov: number,
      ttlChmLnsInActvTymsNonCov: number,
      ttlSellerLnsInActvTymsNonCov: number,
      ttlSMLnsInClrdTymsNonCov: number,
      ttlChmLnsInClrdTymsNonCov: number,
      ttlSellerLnsInClrdTymsNonCov: number,
      ttlSMLnsInBlTymsNonCov: number,
      ttlChmLnsInBlTymsNonCov: number,
      ttlSellerLnsInBlTymsNonCov: number,
      ttlCompTrnsfrEarningsNonCov: number,
      ttlCompBLClrncEarningsNonCov: number,
      ttlCompCovEarnings: number,
      maxInterestSM: number,
      maxInterestPwnBrkr: number,
      maxInterestCredSllr: number,
      maxInterestGrp: number,
      maxMFNdogos: number,
      maxBLs: number,
      owner: string,
      totalLnsRecovered: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    itemName: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    lonBala: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
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
    items:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      lonBala: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNonCovCreditSellerQueryVariables = {
  id: string,
};

export type GetNonCovCreditSellerQuery = {
  getNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    lonBala: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNonCovCreditSellersQueryVariables = {
  filter?: ModelNonCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNonCovCreditSellersQuery = {
  listNonCovCreditSellers?:  {
    __typename: "ModelNonCovCreditSellerConnection",
    items:  Array< {
      __typename: "NonCovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      lonBala: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    regNo: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    oprtnArea: string,
    venture: string,
    signitory2Sub: string,
    WithdrawCnfrmtn: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    tymsChmHvBL: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
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
    items:  Array< {
      __typename: "Group",
      grpContact: string,
      regNo: string,
      signitoryContact: string,
      SignitoryNatid: string,
      signitoryName: string,
      grpName: string,
      signitoryPW: string,
      oprtnArea: string,
      venture: string,
      signitory2Sub: string,
      WithdrawCnfrmtn: string,
      grpEmail: string,
      grpBal: number,
      ttlGrpMembers: number,
      description?: string | null,
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm: number,
      ttlDpst: number,
      ttlWthdrwn: number,
      tymsChmHvBL: number,
      TtlActvLonsTmsLnrChmCov: number,
      TtlActvLonsAmtLnrChmCov: number,
      TtlBLLonsTmsLnrChmCov: number,
      TtlBLLonsAmtLnrChmCov: number,
      TtlClrdLonsTmsLnrChmCov: number,
      TtlClrdLonsAmtLnrChmCov: number,
      TtlActvLonsTmsLnrChmNonCov: number,
      TtlActvLonsAmtLnrChmNonCov: number,
      TtlBLLonsTmsLnrChmNonCov: number,
      TtlBLLonsAmtLnrChmNonCov: number,
      TtlClrdLonsTmsLnrChmNonCov: number,
      TtlClrdLonsAmtLnrChmNonCov: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChamaMembersQueryVariables = {
  ChamaNMember: string,
};

export type GetChamaMembersQuery = {
  getChamaMembers?:  {
    __typename: "ChamaMembers",
    MembaId: string,
    groupContact: string,
    regNo: string,
    ChamaNMember: string,
    groupName: string,
    memberContact: string,
    memberName: string,
    memberNatId: string,
    GrossLnsGvn: number,
    LonAmtGven: number,
    AmtRepaid: number,
    LnBal: number,
    NonLoanAcBal: number,
    ttlNonLonAcBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChamaMembersQueryVariables = {
  ChamaNMember?: string | null,
  filter?: ModelChamaMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChamaMembersQuery = {
  listChamaMembers?:  {
    __typename: "ModelChamaMembersConnection",
    items:  Array< {
      __typename: "ChamaMembers",
      MembaId: string,
      groupContact: string,
      regNo: string,
      ChamaNMember: string,
      groupName: string,
      memberContact: string,
      memberName: string,
      memberNatId: string,
      GrossLnsGvn: number,
      LonAmtGven: number,
      AmtRepaid: number,
      LnBal: number,
      NonLoanAcBal: number,
      ttlNonLonAcBal: number,
      AcStatus: Status,
      loanStatus: Status,
      blStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChamasNPwnBrkrsQueryVariables = {
  id: string,
};

export type GetChamasNPwnBrkrsQuery = {
  getChamasNPwnBrkrs?:  {
    __typename: "ChamasNPwnBrkrs",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChamasNPwnBrkrsQueryVariables = {
  filter?: ModelChamasNPwnBrkrsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChamasNPwnBrkrsQuery = {
  listChamasNPwnBrkrs?:  {
    __typename: "ModelChamasNPwnBrkrsConnection",
    items:  Array< {
      __typename: "ChamasNPwnBrkrs",
      id: string,
      contact: string,
      regNo: string,
      AcStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChamasRegConfirmQueryVariables = {
  id: string,
};

export type GetChamasRegConfirmQuery = {
  getChamasRegConfirm?:  {
    __typename: "ChamasRegConfirm",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChamasRegConfirmsQueryVariables = {
  filter?: ModelChamasRegConfirmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChamasRegConfirmsQuery = {
  listChamasRegConfirms?:  {
    __typename: "ModelChamasRegConfirmConnection",
    items:  Array< {
      __typename: "ChamasRegConfirm",
      id: string,
      contact: string,
      regNo: string,
      AcStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    loaneePhn: string,
    repaymentPeriod: number,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    description?: string | null,
    lonBala: number,
    memberId: string,
    advRegNu: string,
    loaneeName: string,
    LoanerName: string,
    timeExpBack: number,
    timeExpBack2: number,
    status: Status,
    owner: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
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
    items:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      repaymentPeriod: number,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      description?: string | null,
      lonBala: number,
      memberId: string,
      advRegNu: string,
      loaneeName: string,
      LoanerName: string,
      timeExpBack: number,
      timeExpBack2: number,
      status: Status,
      owner: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNonCvrdGroupLoansQueryVariables = {
  id: string,
};

export type GetNonCvrdGroupLoansQuery = {
  getNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    loanerLoanee: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    loaneeName: string,
    loanerName: string,
    memberId: string,
    lonBala: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNonCvrdGroupLoansQueryVariables = {
  filter?: ModelNonCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNonCvrdGroupLoansQuery = {
  listNonCvrdGroupLoans?:  {
    __typename: "ModelNonCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "NonCvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      loanerLoanee: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      loaneeName: string,
      loanerName: string,
      memberId: string,
      lonBala: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    recipientPhn: string,
    receiverName: string,
    SenderName: string,
    amountSent: number,
    memberId: string,
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
    items:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientPhn: string,
      receiverName: string,
      SenderName: string,
      amountSent: number,
      memberId: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGrpMembersContributionQueryVariables = {
  id: string,
};

export type GetGrpMembersContributionQuery = {
  getGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberPhn: string,
    mmberNme: string,
    GrpName: string,
    grpContact: string,
    contriAmount: number,
    memberId: string,
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
    items:  Array< {
      __typename: "GrpMembersContribution",
      id: string,
      memberPhn: string,
      mmberNme: string,
      GrpName: string,
      grpContact: string,
      contriAmount: number,
      memberId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReqLoanQueryVariables = {
  id: string,
};

export type GetReqLoanQuery = {
  getReqLoan?:  {
    __typename: "ReqLoan",
    id: string,
    loaneeEmail: string,
    loanerEmail: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReqLoansQueryVariables = {
  filter?: ModelReqLoanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReqLoansQuery = {
  listReqLoans?:  {
    __typename: "ModelReqLoanConnection",
    items:  Array< {
      __typename: "ReqLoan",
      id: string,
      loaneeEmail: string,
      loanerEmail: string,
      loaneePhone: string,
      loaneeName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReqLoanChamaQueryVariables = {
  id: string,
};

export type GetReqLoanChamaQuery = {
  getReqLoanChama?:  {
    __typename: "ReqLoanChama",
    id: string,
    loaneeEmail: string,
    chamaPhone: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    loaneeMemberId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReqLoanChamasQueryVariables = {
  filter?: ModelReqLoanChamaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReqLoanChamasQuery = {
  listReqLoanChamas?:  {
    __typename: "ModelReqLoanChamaConnection",
    items:  Array< {
      __typename: "ReqLoanChama",
      id: string,
      loaneeEmail: string,
      chamaPhone: string,
      loaneePhone: string,
      loaneeName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      loaneeMemberId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReqLoanCredSlQueryVariables = {
  id: string,
};

export type GetReqLoanCredSlQuery = {
  getReqLoanCredSl?:  {
    __typename: "ReqLoanCredSl",
    id: string,
    loaneeEmail: string,
    businessNo: string,
    loaneePhone: string,
    loaneeName: string,
    itemName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReqLoanCredSlsQueryVariables = {
  filter?: ModelReqLoanCredSlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReqLoanCredSlsQuery = {
  listReqLoanCredSls?:  {
    __typename: "ModelReqLoanCredSlConnection",
    items:  Array< {
      __typename: "ReqLoanCredSl",
      id: string,
      loaneeEmail: string,
      businessNo: string,
      loaneePhone: string,
      loaneeName: string,
      itemName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyDebtsQueryVariables = {
  loaneePhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyDebtsQuery = {
  VwMyDebts?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loaneePhn: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      loanerPhn: string,
      advregnu: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwLnrNLneesssssQueryVariables = {
  loanerLoanee: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwLnrNLneesssssQuery = {
  VwLnrNLneesssss?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loaneePhn: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      loanerPhn: string,
      advregnu: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwAdvNLnrNLneesssssQueryVariables = {
  loanerLoaneeAdv: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwAdvNLnrNLneesssssQuery = {
  VwAdvNLnrNLneesssss?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loaneePhn: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      loanerPhn: string,
      advregnu: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyDebtorsQueryVariables = {
  loanerPhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyDebtorsQuery = {
  VwMyDebtors?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loaneePhn: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      loanerPhn: string,
      advregnu: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AdvVwLnsClientQueryVariables = {
  advregnu: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AdvVwLnsClientQuery = {
  AdvVwLnsClient?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loaneePhn: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      loanerPhn: string,
      advregnu: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyDebtssQueryVariables = {
  loaneePhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansNonCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyDebtssQuery = {
  VwMyDebtss?:  {
    __typename: "ModelSMLoansNonCoveredConnection",
    items:  Array< {
      __typename: "SMLoansNonCovered",
      id: string,
      loaneePhn: string,
      loanerPhn: string,
      loanerLoanee: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyDebtorssQueryVariables = {
  loanerPhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansNonCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyDebtorssQuery = {
  VwMyDebtorss?:  {
    __typename: "ModelSMLoansNonCoveredConnection",
    items:  Array< {
      __typename: "SMLoansNonCovered",
      id: string,
      loaneePhn: string,
      loanerPhn: string,
      loanerLoanee: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwLnrNLneessssQueryVariables = {
  loanerLoanee: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansNonCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwLnrNLneessssQuery = {
  VwLnrNLneessss?:  {
    __typename: "ModelSMLoansNonCoveredConnection",
    items:  Array< {
      __typename: "SMLoansNonCovered",
      id: string,
      loaneePhn: string,
      loanerPhn: string,
      loanerLoanee: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountExpectedBackWthClrnc: number,
      amountrepaid: number,
      lonBala: number,
      loaneename: string,
      loanername: string,
      repaymentPeriod: number,
      DefaultPenaltySM: number,
      DefaultPenaltySM2: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMySntMnyQueryVariables = {
  senderPhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMySntMnyQuery = {
  VwMySntMny?:  {
    __typename: "ModelNonLoansConnection",
    items:  Array< {
      __typename: "NonLoans",
      id: string,
      senderPhn: string,
      recPhn: string,
      RecName: string,
      SenderName: string,
      amount: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyRecMnyQueryVariables = {
  recPhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyRecMnyQuery = {
  VwMyRecMny?:  {
    __typename: "ModelNonLoansConnection",
    items:  Array< {
      __typename: "NonLoans",
      id: string,
      senderPhn: string,
      recPhn: string,
      RecName: string,
      SenderName: string,
      amount: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DakaByNameQueryVariables = {
  sokoname: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSokoAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DakaByNameQuery = {
  DakaByName?:  {
    __typename: "ModelSokoAdConnection",
    items:  Array< {
      __typename: "SokoAd",
      id: string,
      sokoregno: string,
      sokokntct: string,
      sokoname: string,
      sokoprice: number,
      sokotown: string,
      sokolnprcntg: number,
      sokolpymntperiod: number,
      sokodesc: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PataByDescQueryVariables = {
  rafikidesc: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRafikiLnAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PataByDescQuery = {
  PataByDesc?:  {
    __typename: "ModelRafikiLnAdConnection",
    items:  Array< {
      __typename: "RafikiLnAd",
      id: string,
      rafikiName: string,
      rafikicntct: string,
      rafikiEmail: string,
      rafikiamnt: number,
      rafikidesc: string,
      rafikiprcntg: number,
      rafikirpymntperiod: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MFKVwMFNQueryVariables = {
  sagentregno: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MFKVwMFNQuery = {
  MFKVwMFN?:  {
    __typename: "ModelAgentConnection",
    items:  Array< {
      __typename: "Agent",
      phonecontact: string,
      sagentregno: string,
      nationalid: string,
      name: string,
      ttlEarnings: number,
      pw: string,
      email: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,
      status: Status,
      bankName: string,
      bkAcNo: string,
      owner: string,
      town: string,
      MFNWithdrwlFee: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyBghtFltQueryVariables = {
  agentphone: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyBghtFltQuery = {
  VwMyBghtFlt?:  {
    __typename: "ModelFloatPurchaseConnection",
    items:  Array< {
      __typename: "FloatPurchase",
      agentphone: string,
      amount: number,
      transactId: string,
      bankAdminID: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyUsrWthdrwlsQueryVariables = {
  withdrawerid: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyUsrWthdrwlsQuery = {
  VwMyUsrWthdrwls?:  {
    __typename: "ModelFloatAddConnection",
    items:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      amount: number,
      agentPhonecontact: string,
      agentName: string,
      userName: string,
      saName: string,
      saPhone: string,
      sagentId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMFNFltAddsQueryVariables = {
  agentPhonecontact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMFNFltAddsQuery = {
  VwMFNFltAdds?:  {
    __typename: "ModelFloatAddConnection",
    items:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      amount: number,
      agentPhonecontact: string,
      agentName: string,
      userName: string,
      saName: string,
      saPhone: string,
      sagentId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMFKEarningsFrmWthdrwlsQueryVariables = {
  saPhone: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMFKEarningsFrmWthdrwlsQuery = {
  VwMFKEarningsFrmWthdrwls?:  {
    __typename: "ModelFloatAddConnection",
    items:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      amount: number,
      agentPhonecontact: string,
      agentName: string,
      userName: string,
      saName: string,
      saPhone: string,
      sagentId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyUsrDpositsQueryVariables = {
  depositerid: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyUsrDpositsQuery = {
  VwMyUsrDposits?:  {
    __typename: "ModelFloatReductionConnection",
    items:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      agContact: string,
      agentName: string,
      userName: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMFNFltDeductnsQueryVariables = {
  agContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMFNFltDeductnsQuery = {
  VwMFNFltDeductns?:  {
    __typename: "ModelFloatReductionConnection",
    items:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      agContact: string,
      agentName: string,
      userName: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMFNWthdrwlsQueryVariables = {
  agentPhone: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMFNWthdrwlsQuery = {
  VwMFNWthdrwls?:  {
    __typename: "ModelAgentWithdrawalsConnection",
    items:  Array< {
      __typename: "AgentWithdrawals",
      id: string,
      agentPhone: string,
      bankAdminId: string,
      bankName: string,
      bkAcNo: string,
      Amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMFKWthdrwlsQueryVariables = {
  saId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMFKWthdrwlsQuery = {
  VwMFKWthdrwls?:  {
    __typename: "ModelSAgentWithdrawalsConnection",
    items:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      saId: string,
      amount: number,
      bankAdmnId: string,
      bankName: string,
      bkAcNo: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type WrkrsVwwQueryVariables = {
  phoneKontact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WrkrsVwwQuery = {
  WrkrsVww?:  {
    __typename: "ModelPersonelConnection",
    items:  Array< {
      __typename: "Personel",
      phoneKontact: string,
      BusinessRegNo: string,
      nationalid: string,
      BiznaName: string,
      name: string,
      ownrsss: string,
      email: string,
      workerId: string,
      workId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BusOwnrVwWrkrssQueryVariables = {
  BusinessRegNo: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusOwnrVwWrkrssQuery = {
  BusOwnrVwWrkrss?:  {
    __typename: "ModelPersonelConnection",
    items:  Array< {
      __typename: "Personel",
      phoneKontact: string,
      BusinessRegNo: string,
      nationalid: string,
      BiznaName: string,
      name: string,
      ownrsss: string,
      email: string,
      workerId: string,
      workId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BiznaVwwsQueryVariables = {
  busName: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBiznaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BiznaVwwsQuery = {
  BiznaVwws?:  {
    __typename: "ModelBiznaConnection",
    items:  Array< {
      __typename: "Bizna",
      BusKntct: string,
      busName: string,
      pw: string,
      TtlEarnings: number,
      earningsBal: number,
      netEarnings: number,
      email: string,
      status: string,
      owner: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SrchAdvCovLnsQueryVariables = {
  phonecontact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdvocateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SrchAdvCovLnsQuery = {
  srchAdvCovLns?:  {
    __typename: "ModelAdvocateConnection",
    items:  Array< {
      __typename: "Advocate",
      advregnu: string,
      nationalid: string,
      pwd: string,
      name: string,
      phonecontact: string,
      TtlEarnings: number,
      advBal: number,
      email: string,
      bankName: string,
      bkAcNo: string,
      officeLoc: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwAdvWthdrwlsQueryVariables = {
  advregnu: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdvocateWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwAdvWthdrwlsQuery = {
  VwAdvWthdrwls?:  {
    __typename: "ModelAdvocateWithdrawalsConnection",
    items:  Array< {
      __typename: "AdvocateWithdrawals",
      id: string,
      bankAdmnId: string,
      advregnu: string,
      amount: number,
      bankName: string,
      bkAcNo: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwLnrNLneesssQueryVariables = {
  loanerLoanee: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwLnrNLneesssQuery = {
  VwLnrNLneesss?:  {
    __typename: "ModelCovCreditSellerConnection",
    items:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      lonBala: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwAdvNLnrNLneesssQueryVariables = {
  loanerLoaneeAdv: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwAdvNLnrNLneesssQuery = {
  VwAdvNLnrNLneesss?:  {
    __typename: "ModelCovCreditSellerConnection",
    items:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      lonBala: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyCrdBysQueryVariables = {
  buyerContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyCrdBysQuery = {
  VwMyCrdBys?:  {
    __typename: "ModelCovCreditSellerConnection",
    items:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      lonBala: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMySalesQueryVariables = {
  sellerContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMySalesQuery = {
  VwMySales?:  {
    __typename: "ModelCovCreditSellerConnection",
    items:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      lonBala: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwAdvCrdSlsQueryVariables = {
  advregnu: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwAdvCrdSlsQuery = {
  VwAdvCrdSls?:  {
    __typename: "ModelCovCreditSellerConnection",
    items:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      lonBala: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwLnrNLneessQueryVariables = {
  loanerLoanee: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwLnrNLneessQuery = {
  VwLnrNLneess?:  {
    __typename: "ModelNonCovCreditSellerConnection",
    items:  Array< {
      __typename: "NonCovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      lonBala: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyCrdByssQueryVariables = {
  buyerContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyCrdByssQuery = {
  VwMyCrdByss?:  {
    __typename: "ModelNonCovCreditSellerConnection",
    items:  Array< {
      __typename: "NonCovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      lonBala: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMySalessQueryVariables = {
  sellerContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMySalessQuery = {
  VwMySaless?:  {
    __typename: "ModelNonCovCreditSellerConnection",
    items:  Array< {
      __typename: "NonCovCreditSeller",
      id: string,
      itemName: string,
      loanerLoanee: string,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      buyerName: string,
      SellerName: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      lonBala: number,
      repaymentPeriod: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      DefaultPenaltyCredSl: number,
      DefaultPenaltyCredSl2: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ViaChmAreaQueryVariables = {
  oprtnArea: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ViaChmAreaQuery = {
  ViaChmArea?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      grpContact: string,
      regNo: string,
      signitoryContact: string,
      SignitoryNatid: string,
      signitoryName: string,
      grpName: string,
      signitoryPW: string,
      oprtnArea: string,
      venture: string,
      signitory2Sub: string,
      WithdrawCnfrmtn: string,
      grpEmail: string,
      grpBal: number,
      ttlGrpMembers: number,
      description?: string | null,
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm: number,
      ttlDpst: number,
      ttlWthdrwn: number,
      tymsChmHvBL: number,
      TtlActvLonsTmsLnrChmCov: number,
      TtlActvLonsAmtLnrChmCov: number,
      TtlBLLonsTmsLnrChmCov: number,
      TtlBLLonsAmtLnrChmCov: number,
      TtlClrdLonsTmsLnrChmCov: number,
      TtlClrdLonsAmtLnrChmCov: number,
      TtlActvLonsTmsLnrChmNonCov: number,
      TtlActvLonsAmtLnrChmNonCov: number,
      TtlBLLonsTmsLnrChmNonCov: number,
      TtlBLLonsAmtLnrChmNonCov: number,
      TtlClrdLonsTmsLnrChmNonCov: number,
      TtlClrdLonsAmtLnrChmNonCov: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ViaChmVentureQueryVariables = {
  venture: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ViaChmVentureQuery = {
  ViaChmVenture?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      grpContact: string,
      regNo: string,
      signitoryContact: string,
      SignitoryNatid: string,
      signitoryName: string,
      grpName: string,
      signitoryPW: string,
      oprtnArea: string,
      venture: string,
      signitory2Sub: string,
      WithdrawCnfrmtn: string,
      grpEmail: string,
      grpBal: number,
      ttlGrpMembers: number,
      description?: string | null,
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm: number,
      ttlDpst: number,
      ttlWthdrwn: number,
      tymsChmHvBL: number,
      TtlActvLonsTmsLnrChmCov: number,
      TtlActvLonsAmtLnrChmCov: number,
      TtlBLLonsTmsLnrChmCov: number,
      TtlBLLonsAmtLnrChmCov: number,
      TtlClrdLonsTmsLnrChmCov: number,
      TtlClrdLonsAmtLnrChmCov: number,
      TtlActvLonsTmsLnrChmNonCov: number,
      TtlActvLonsAmtLnrChmNonCov: number,
      TtlBLLonsTmsLnrChmNonCov: number,
      TtlBLLonsAmtLnrChmNonCov: number,
      TtlClrdLonsTmsLnrChmNonCov: number,
      TtlClrdLonsAmtLnrChmNonCov: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ViaChmNMmbrQueryVariables = {
  MembaId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChamaMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ViaChmNMmbrQuery = {
  ViaChmNMmbr?:  {
    __typename: "ModelChamaMembersConnection",
    items:  Array< {
      __typename: "ChamaMembers",
      MembaId: string,
      groupContact: string,
      regNo: string,
      ChamaNMember: string,
      groupName: string,
      memberContact: string,
      memberName: string,
      memberNatId: string,
      GrossLnsGvn: number,
      LonAmtGven: number,
      AmtRepaid: number,
      LnBal: number,
      NonLoanAcBal: number,
      ttlNonLonAcBal: number,
      AcStatus: Status,
      loanStatus: Status,
      blStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwChamaMembersQueryVariables = {
  groupContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChamaMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwChamaMembersQuery = {
  VwChamaMembers?:  {
    __typename: "ModelChamaMembersConnection",
    items:  Array< {
      __typename: "ChamaMembers",
      MembaId: string,
      groupContact: string,
      regNo: string,
      ChamaNMember: string,
      groupName: string,
      memberContact: string,
      memberName: string,
      memberNatId: string,
      GrossLnsGvn: number,
      LonAmtGven: number,
      AmtRepaid: number,
      LnBal: number,
      NonLoanAcBal: number,
      ttlNonLonAcBal: number,
      AcStatus: Status,
      loanStatus: Status,
      blStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyChamasQueryVariables = {
  memberContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChamaMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyChamasQuery = {
  VwMyChamas?:  {
    __typename: "ModelChamaMembersConnection",
    items:  Array< {
      __typename: "ChamaMembers",
      MembaId: string,
      groupContact: string,
      regNo: string,
      ChamaNMember: string,
      groupName: string,
      memberContact: string,
      memberName: string,
      memberNatId: string,
      GrossLnsGvn: number,
      LonAmtGven: number,
      AmtRepaid: number,
      LnBal: number,
      NonLoanAcBal: number,
      ttlNonLonAcBal: number,
      AcStatus: Status,
      loanStatus: Status,
      blStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwViaPhonsQueryVariables = {
  contact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChamasNPwnBrkrsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwViaPhonsQuery = {
  VwViaPhons?:  {
    __typename: "ModelChamasNPwnBrkrsConnection",
    items:  Array< {
      __typename: "ChamasNPwnBrkrs",
      id: string,
      contact: string,
      regNo: string,
      AcStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwViaRegNoQueryVariables = {
  regNo: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChamasNPwnBrkrsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwViaRegNoQuery = {
  VwViaRegNo?:  {
    __typename: "ModelChamasNPwnBrkrsConnection",
    items:  Array< {
      __typename: "ChamasNPwnBrkrs",
      id: string,
      contact: string,
      regNo: string,
      AcStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwViaPhonssQueryVariables = {
  contact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChamasRegConfirmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwViaPhonssQuery = {
  VwViaPhonss?:  {
    __typename: "ModelChamasRegConfirmConnection",
    items:  Array< {
      __typename: "ChamasRegConfirm",
      id: string,
      contact: string,
      regNo: string,
      AcStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwViaRegNossQueryVariables = {
  regNo: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChamasRegConfirmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwViaRegNossQuery = {
  VwViaRegNoss?:  {
    __typename: "ModelChamasRegConfirmConnection",
    items:  Array< {
      __typename: "ChamasRegConfirm",
      id: string,
      contact: string,
      regNo: string,
      AcStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwChamaMemberssQueryVariables = {
  grpContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwChamaMemberssQuery = {
  VwChamaMemberss?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      repaymentPeriod: number,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      description?: string | null,
      lonBala: number,
      memberId: string,
      advRegNu: string,
      loaneeName: string,
      LoanerName: string,
      timeExpBack: number,
      timeExpBack2: number,
      status: Status,
      owner: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyChamassQueryVariables = {
  loaneePhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyChamassQuery = {
  VwMyChamass?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      repaymentPeriod: number,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      description?: string | null,
      lonBala: number,
      memberId: string,
      advRegNu: string,
      loaneeName: string,
      LoanerName: string,
      timeExpBack: number,
      timeExpBack2: number,
      status: Status,
      owner: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwLnrNLneeQueryVariables = {
  loanerLoanee: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwLnrNLneeQuery = {
  VwLnrNLnee?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      repaymentPeriod: number,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      description?: string | null,
      lonBala: number,
      memberId: string,
      advRegNu: string,
      loaneeName: string,
      LoanerName: string,
      timeExpBack: number,
      timeExpBack2: number,
      status: Status,
      owner: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwAdvNLnrNLneeQueryVariables = {
  loanerLoaneeAdv: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwAdvNLnrNLneeQuery = {
  VwAdvNLnrNLnee?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      repaymentPeriod: number,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      description?: string | null,
      lonBala: number,
      memberId: string,
      advRegNu: string,
      loaneeName: string,
      LoanerName: string,
      timeExpBack: number,
      timeExpBack2: number,
      status: Status,
      owner: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwChmLnClientsQueryVariables = {
  advRegNu: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwChmLnClientsQuery = {
  VwChmLnClients?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      repaymentPeriod: number,
      loanerLoanee: string,
      loanerLoaneeAdv: string,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      description?: string | null,
      lonBala: number,
      memberId: string,
      advRegNu: string,
      loaneeName: string,
      LoanerName: string,
      timeExpBack: number,
      timeExpBack2: number,
      status: Status,
      owner: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwChamaMembersssQueryVariables = {
  grpContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwChamaMembersssQuery = {
  VwChamaMembersss?:  {
    __typename: "ModelNonCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "NonCvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      loanerLoanee: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      loaneeName: string,
      loanerName: string,
      memberId: string,
      lonBala: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyChamasssQueryVariables = {
  loaneePhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyChamasssQuery = {
  VwMyChamasss?:  {
    __typename: "ModelNonCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "NonCvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      loanerLoanee: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      loaneeName: string,
      loanerName: string,
      memberId: string,
      lonBala: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwLnrNLneesQueryVariables = {
  loanerLoanee: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwLnrNLneesQuery = {
  VwLnrNLnees?:  {
    __typename: "ModelNonCvrdGroupLoansConnection",
    items:  Array< {
      __typename: "NonCvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneePhn: string,
      loanerLoanee: string,
      DefaultPenaltyChm: number,
      DefaultPenaltyChm2: number,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountExpectedBackWthClrnc: number,
      amountRepaid: number,
      timeExpBack: number,
      timeExpBack2: number,
      description?: string | null,
      loaneeName: string,
      loanerName: string,
      memberId: string,
      lonBala: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwChamaMemberssssQueryVariables = {
  grpContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwChamaMemberssssQuery = {
  VwChamaMemberssss?:  {
    __typename: "ModelGroupNonLoansConnection",
    items:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientPhn: string,
      receiverName: string,
      SenderName: string,
      amountSent: number,
      memberId: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyChamassssQueryVariables = {
  recipientPhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyChamassssQuery = {
  VwMyChamassss?:  {
    __typename: "ModelGroupNonLoansConnection",
    items:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientPhn: string,
      receiverName: string,
      SenderName: string,
      amountSent: number,
      memberId: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyChamasssssQueryVariables = {
  memberPhn: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyChamasssssQuery = {
  VwMyChamasssss?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items:  Array< {
      __typename: "GrpMembersContribution",
      id: string,
      memberPhn: string,
      mmberNme: string,
      GrpName: string,
      grpContact: string,
      contriAmount: number,
      memberId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwChamaMembersssssQueryVariables = {
  grpContact: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwChamaMembersssssQuery = {
  VwChamaMembersssss?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items:  Array< {
      __typename: "GrpMembersContribution",
      id: string,
      memberPhn: string,
      mmberNme: string,
      GrpName: string,
      grpContact: string,
      contriAmount: number,
      memberId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwMyLoaneeReqQueryVariables = {
  loaneeEmail: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReqLoanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwMyLoaneeReqQuery = {
  VwMyLoaneeReq?:  {
    __typename: "ModelReqLoanConnection",
    items:  Array< {
      __typename: "ReqLoan",
      id: string,
      loaneeEmail: string,
      loanerEmail: string,
      loaneePhone: string,
      loaneeName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VwLoaneeReqQueryVariables = {
  loanerEmail: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReqLoanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VwLoaneeReqQuery = {
  VwLoaneeReq?:  {
    __typename: "ModelReqLoanConnection",
    items:  Array< {
      __typename: "ReqLoan",
      id: string,
      loaneeEmail: string,
      loanerEmail: string,
      loaneePhone: string,
      loaneeName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByChmaLneeQueryVariables = {
  loaneeEmail: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReqLoanChamaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByChmaLneeQuery = {
  ByChmaLnee?:  {
    __typename: "ModelReqLoanChamaConnection",
    items:  Array< {
      __typename: "ReqLoanChama",
      id: string,
      loaneeEmail: string,
      chamaPhone: string,
      loaneePhone: string,
      loaneeName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      loaneeMemberId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByChmaNoDescQueryVariables = {
  chamaPhone: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReqLoanChamaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByChmaNoDescQuery = {
  ByChmaNoDesc?:  {
    __typename: "ModelReqLoanChamaConnection",
    items:  Array< {
      __typename: "ReqLoanChama",
      id: string,
      loaneeEmail: string,
      chamaPhone: string,
      loaneePhone: string,
      loaneeName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      loaneeMemberId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByBzLneeQueryVariables = {
  loaneeEmail: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReqLoanCredSlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByBzLneeQuery = {
  ByBzLnee?:  {
    __typename: "ModelReqLoanCredSlConnection",
    items:  Array< {
      __typename: "ReqLoanCredSl",
      id: string,
      loaneeEmail: string,
      businessNo: string,
      loaneePhone: string,
      loaneeName: string,
      itemName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByBzNoDescQueryVariables = {
  businessNo: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReqLoanCredSlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByBzNoDescQuery = {
  ByBzNoDesc?:  {
    __typename: "ModelReqLoanCredSlConnection",
    items:  Array< {
      __typename: "ReqLoanCredSl",
      id: string,
      loaneeEmail: string,
      businessNo: string,
      loaneePhone: string,
      loaneeName: string,
      itemName: string,
      amount: number,
      repaymentAmt: number,
      repaymentPeriod: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSMAccountSubscriptionVariables = {
  owner?: string | null,
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
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    MaxTymsBL: number,
    MaxTymsIHvBL: number,
    MaxAcBal: number,
    TymsIHvGivnLn: number,
    TymsMyLnClrd: number,
    DefaultPenaltySM: number,
    loanStatus: Status,
    acStatus: Status,
    deActvtnReason: string,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMAccountSubscriptionVariables = {
  owner?: string | null,
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
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    MaxTymsBL: number,
    MaxTymsIHvBL: number,
    MaxAcBal: number,
    TymsIHvGivnLn: number,
    TymsMyLnClrd: number,
    DefaultPenaltySM: number,
    loanStatus: Status,
    acStatus: Status,
    deActvtnReason: string,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMAccountSubscriptionVariables = {
  owner?: string | null,
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
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    MaxTymsBL: number,
    MaxTymsIHvBL: number,
    MaxAcBal: number,
    TymsIHvGivnLn: number,
    TymsMyLnClrd: number,
    DefaultPenaltySM: number,
    loanStatus: Status,
    acStatus: Status,
    deActvtnReason: string,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSMLoansCoveredSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSMLoansCoveredSubscription = {
  onCreateSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loaneePhn: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    loanerPhn: string,
    advregnu: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMLoansCoveredSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSMLoansCoveredSubscription = {
  onUpdateSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loaneePhn: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    loanerPhn: string,
    advregnu: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMLoansCoveredSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSMLoansCoveredSubscription = {
  onDeleteSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loaneePhn: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    loanerPhn: string,
    advregnu: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSMLoansNonCoveredSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSMLoansNonCoveredSubscription = {
  onCreateSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneePhn: string,
    loanerPhn: string,
    loanerLoanee: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMLoansNonCoveredSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSMLoansNonCoveredSubscription = {
  onUpdateSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneePhn: string,
    loanerPhn: string,
    loanerLoanee: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMLoansNonCoveredSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSMLoansNonCoveredSubscription = {
  onDeleteSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneePhn: string,
    loanerPhn: string,
    loanerLoanee: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountExpectedBackWthClrnc: number,
    amountrepaid: number,
    lonBala: number,
    loaneename: string,
    loanername: string,
    repaymentPeriod: number,
    DefaultPenaltySM: number,
    DefaultPenaltySM2: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNonLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNonLoansSubscription = {
  onCreateNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderPhn: string,
    recPhn: string,
    RecName: string,
    SenderName: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNonLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNonLoansSubscription = {
  onUpdateNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderPhn: string,
    recPhn: string,
    RecName: string,
    SenderName: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNonLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNonLoansSubscription = {
  onDeleteNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderPhn: string,
    recPhn: string,
    RecName: string,
    SenderName: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSokoAdSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSokoAdSubscription = {
  onCreateSokoAd?:  {
    __typename: "SokoAd",
    id: string,
    sokoregno: string,
    sokokntct: string,
    sokoname: string,
    sokoprice: number,
    sokotown: string,
    sokolnprcntg: number,
    sokolpymntperiod: number,
    sokodesc: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSokoAdSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSokoAdSubscription = {
  onUpdateSokoAd?:  {
    __typename: "SokoAd",
    id: string,
    sokoregno: string,
    sokokntct: string,
    sokoname: string,
    sokoprice: number,
    sokotown: string,
    sokolnprcntg: number,
    sokolpymntperiod: number,
    sokodesc: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSokoAdSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSokoAdSubscription = {
  onDeleteSokoAd?:  {
    __typename: "SokoAd",
    id: string,
    sokoregno: string,
    sokokntct: string,
    sokoname: string,
    sokoprice: number,
    sokotown: string,
    sokolnprcntg: number,
    sokolpymntperiod: number,
    sokodesc: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRafikiLnAdSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateRafikiLnAdSubscription = {
  onCreateRafikiLnAd?:  {
    __typename: "RafikiLnAd",
    id: string,
    rafikiName: string,
    rafikicntct: string,
    rafikiEmail: string,
    rafikiamnt: number,
    rafikidesc: string,
    rafikiprcntg: number,
    rafikirpymntperiod: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRafikiLnAdSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateRafikiLnAdSubscription = {
  onUpdateRafikiLnAd?:  {
    __typename: "RafikiLnAd",
    id: string,
    rafikiName: string,
    rafikicntct: string,
    rafikiEmail: string,
    rafikiamnt: number,
    rafikidesc: string,
    rafikiprcntg: number,
    rafikirpymntperiod: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRafikiLnAdSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteRafikiLnAdSubscription = {
  onDeleteRafikiLnAd?:  {
    __typename: "RafikiLnAd",
    id: string,
    rafikiName: string,
    rafikicntct: string,
    rafikiEmail: string,
    rafikiamnt: number,
    rafikidesc: string,
    rafikiprcntg: number,
    rafikirpymntperiod: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAgentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAgentSubscription = {
  onCreateAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    sagentregno: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    bankName: string,
    bkAcNo: string,
    owner: string,
    town: string,
    MFNWithdrwlFee: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAgentSubscription = {
  onUpdateAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    sagentregno: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    bankName: string,
    bkAcNo: string,
    owner: string,
    town: string,
    MFNWithdrwlFee: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAgentSubscription = {
  onDeleteAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    sagentregno: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    bankName: string,
    bkAcNo: string,
    owner: string,
    town: string,
    MFNWithdrwlFee: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatPurchaseSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFloatPurchaseSubscription = {
  onCreateFloatPurchase?:  {
    __typename: "FloatPurchase",
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFloatPurchaseSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFloatPurchaseSubscription = {
  onUpdateFloatPurchase?:  {
    __typename: "FloatPurchase",
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFloatPurchaseSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFloatPurchaseSubscription = {
  onDeleteFloatPurchase?:  {
    __typename: "FloatPurchase",
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatAddSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFloatAddSubscription = {
  onCreateFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    agentName: string,
    userName: string,
    saName: string,
    saPhone: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFloatAddSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFloatAddSubscription = {
  onUpdateFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    agentName: string,
    userName: string,
    saName: string,
    saPhone: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFloatAddSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFloatAddSubscription = {
  onDeleteFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    agentName: string,
    userName: string,
    saName: string,
    saPhone: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatReductionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFloatReductionSubscription = {
  onCreateFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    agentName: string,
    userName: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFloatReductionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFloatReductionSubscription = {
  onUpdateFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    agentName: string,
    userName: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFloatReductionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFloatReductionSubscription = {
  onDeleteFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    agentName: string,
    userName: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAgentWithdrawalsSubscription = {
  onCreateAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    bankName: string,
    bkAcNo: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAgentWithdrawalsSubscription = {
  onUpdateAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    bankName: string,
    bkAcNo: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAgentWithdrawalsSubscription = {
  onDeleteAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    bankName: string,
    bkAcNo: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSAgentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSAgentSubscription = {
  onCreateSAgent?:  {
    __typename: "SAgent",
    saPhoneContact: string,
    saNationalid: string,
    name: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    MFKWithdrwlFee: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSAgentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSAgentSubscription = {
  onUpdateSAgent?:  {
    __typename: "SAgent",
    saPhoneContact: string,
    saNationalid: string,
    name: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    MFKWithdrwlFee: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSAgentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSAgentSubscription = {
  onDeleteSAgent?:  {
    __typename: "SAgent",
    saPhoneContact: string,
    saNationalid: string,
    name: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    MFKWithdrwlFee: number,
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
    saId: string,
    amount: number,
    bankAdmnId: string,
    bankName: string,
    bkAcNo: string,
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
    saId: string,
    amount: number,
    bankAdmnId: string,
    bankName: string,
    bkAcNo: string,
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
    saId: string,
    amount: number,
    bankAdmnId: string,
    bankName: string,
    bkAcNo: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonelSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePersonelSubscription = {
  onCreatePersonel?:  {
    __typename: "Personel",
    phoneKontact: string,
    BusinessRegNo: string,
    nationalid: string,
    BiznaName: string,
    name: string,
    ownrsss: string,
    email: string,
    workerId: string,
    workId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePersonelSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePersonelSubscription = {
  onUpdatePersonel?:  {
    __typename: "Personel",
    phoneKontact: string,
    BusinessRegNo: string,
    nationalid: string,
    BiznaName: string,
    name: string,
    ownrsss: string,
    email: string,
    workerId: string,
    workId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePersonelSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePersonelSubscription = {
  onDeletePersonel?:  {
    __typename: "Personel",
    phoneKontact: string,
    BusinessRegNo: string,
    nationalid: string,
    BiznaName: string,
    name: string,
    ownrsss: string,
    email: string,
    workerId: string,
    workId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBiznaSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBiznaSubscription = {
  onCreateBizna?:  {
    __typename: "Bizna",
    BusKntct: string,
    busName: string,
    pw: string,
    TtlEarnings: number,
    earningsBal: number,
    netEarnings: number,
    email: string,
    status: string,
    owner: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBiznaSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBiznaSubscription = {
  onUpdateBizna?:  {
    __typename: "Bizna",
    BusKntct: string,
    busName: string,
    pw: string,
    TtlEarnings: number,
    earningsBal: number,
    netEarnings: number,
    email: string,
    status: string,
    owner: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBiznaSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBiznaSubscription = {
  onDeleteBizna?:  {
    __typename: "Bizna",
    BusKntct: string,
    busName: string,
    pw: string,
    TtlEarnings: number,
    earningsBal: number,
    netEarnings: number,
    email: string,
    status: string,
    owner: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBankAdminSubscriptionVariables = {
  owner?: string | null,
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

export type OnUpdateBankAdminSubscriptionVariables = {
  owner?: string | null,
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

export type OnDeleteBankAdminSubscriptionVariables = {
  owner?: string | null,
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
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdvocateSubscriptionVariables = {
  owner?: string | null,
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
    bankName: string,
    bkAcNo: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdvocateSubscriptionVariables = {
  owner?: string | null,
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
    bankName: string,
    bkAcNo: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdvocateSubscriptionVariables = {
  owner?: string | null,
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
    bankName: string,
    bkAcNo: string,
    officeLoc: string,
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
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    bankName: string,
    bkAcNo: string,
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
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    bankName: string,
    bkAcNo: string,
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
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    bankName: string,
    bkAcNo: string,
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
    AdvCompanyCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    chmMmbrTransferFee: number,
    chmTransferFee: number,
    biznaTransferFee: number,
    palpalLnRpymntFee: number,
    chmLnRpymntFee: number,
    crdSllrLnRpymntFee: number,
    userClearanceFee: number,
    CoverageFee: number,
    vat: number,
    ttlvat: number,
    enquiryFee: number,
    UsrWthdrwlFees: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlBLUsrs: number,
    ttlActiveChm: number,
    ttlInactvChm: number,
    ttlBLChm: number,
    ttlActiveChmUsers: number,
    ttlInactvChmUsrs: number,
    ttlBLChmUsrs: number,
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
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestPwnBrkr: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    maxMFNdogos: number,
    maxBLs: number,
    owner: string,
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
    AdvCompanyCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    chmMmbrTransferFee: number,
    chmTransferFee: number,
    biznaTransferFee: number,
    palpalLnRpymntFee: number,
    chmLnRpymntFee: number,
    crdSllrLnRpymntFee: number,
    userClearanceFee: number,
    CoverageFee: number,
    vat: number,
    ttlvat: number,
    enquiryFee: number,
    UsrWthdrwlFees: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlBLUsrs: number,
    ttlActiveChm: number,
    ttlInactvChm: number,
    ttlBLChm: number,
    ttlActiveChmUsers: number,
    ttlInactvChmUsrs: number,
    ttlBLChmUsrs: number,
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
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestPwnBrkr: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    maxMFNdogos: number,
    maxBLs: number,
    owner: string,
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
    AdvCompanyCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    chmMmbrTransferFee: number,
    chmTransferFee: number,
    biznaTransferFee: number,
    palpalLnRpymntFee: number,
    chmLnRpymntFee: number,
    crdSllrLnRpymntFee: number,
    userClearanceFee: number,
    CoverageFee: number,
    vat: number,
    ttlvat: number,
    enquiryFee: number,
    UsrWthdrwlFees: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlBLUsrs: number,
    ttlActiveChm: number,
    ttlInactvChm: number,
    ttlBLChm: number,
    ttlActiveChmUsers: number,
    ttlInactvChmUsrs: number,
    ttlBLChmUsrs: number,
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
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestPwnBrkr: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    maxMFNdogos: number,
    maxBLs: number,
    owner: string,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCovCreditSellerSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCovCreditSellerSubscription = {
  onCreateCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    lonBala: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCovCreditSellerSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCovCreditSellerSubscription = {
  onUpdateCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    lonBala: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCovCreditSellerSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCovCreditSellerSubscription = {
  onDeleteCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    lonBala: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNonCovCreditSellerSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNonCovCreditSellerSubscription = {
  onCreateNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    lonBala: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNonCovCreditSellerSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNonCovCreditSellerSubscription = {
  onUpdateNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    lonBala: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNonCovCreditSellerSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNonCovCreditSellerSubscription = {
  onDeleteNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    loanerLoanee: string,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    buyerName: string,
    SellerName: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    lonBala: number,
    repaymentPeriod: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    DefaultPenaltyCredSl: number,
    DefaultPenaltyCredSl2: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    grpContact: string,
    regNo: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    oprtnArea: string,
    venture: string,
    signitory2Sub: string,
    WithdrawCnfrmtn: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    tymsChmHvBL: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    grpContact: string,
    regNo: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    oprtnArea: string,
    venture: string,
    signitory2Sub: string,
    WithdrawCnfrmtn: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    tymsChmHvBL: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    grpContact: string,
    regNo: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    oprtnArea: string,
    venture: string,
    signitory2Sub: string,
    WithdrawCnfrmtn: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    tymsChmHvBL: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChamaMembersSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateChamaMembersSubscription = {
  onCreateChamaMembers?:  {
    __typename: "ChamaMembers",
    MembaId: string,
    groupContact: string,
    regNo: string,
    ChamaNMember: string,
    groupName: string,
    memberContact: string,
    memberName: string,
    memberNatId: string,
    GrossLnsGvn: number,
    LonAmtGven: number,
    AmtRepaid: number,
    LnBal: number,
    NonLoanAcBal: number,
    ttlNonLonAcBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChamaMembersSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateChamaMembersSubscription = {
  onUpdateChamaMembers?:  {
    __typename: "ChamaMembers",
    MembaId: string,
    groupContact: string,
    regNo: string,
    ChamaNMember: string,
    groupName: string,
    memberContact: string,
    memberName: string,
    memberNatId: string,
    GrossLnsGvn: number,
    LonAmtGven: number,
    AmtRepaid: number,
    LnBal: number,
    NonLoanAcBal: number,
    ttlNonLonAcBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChamaMembersSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteChamaMembersSubscription = {
  onDeleteChamaMembers?:  {
    __typename: "ChamaMembers",
    MembaId: string,
    groupContact: string,
    regNo: string,
    ChamaNMember: string,
    groupName: string,
    memberContact: string,
    memberName: string,
    memberNatId: string,
    GrossLnsGvn: number,
    LonAmtGven: number,
    AmtRepaid: number,
    LnBal: number,
    NonLoanAcBal: number,
    ttlNonLonAcBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChamasNPwnBrkrsSubscription = {
  onCreateChamasNPwnBrkrs?:  {
    __typename: "ChamasNPwnBrkrs",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChamasNPwnBrkrsSubscription = {
  onUpdateChamasNPwnBrkrs?:  {
    __typename: "ChamasNPwnBrkrs",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChamasNPwnBrkrsSubscription = {
  onDeleteChamasNPwnBrkrs?:  {
    __typename: "ChamasNPwnBrkrs",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChamasRegConfirmSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateChamasRegConfirmSubscription = {
  onCreateChamasRegConfirm?:  {
    __typename: "ChamasRegConfirm",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChamasRegConfirmSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateChamasRegConfirmSubscription = {
  onUpdateChamasRegConfirm?:  {
    __typename: "ChamasRegConfirm",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChamasRegConfirmSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteChamasRegConfirmSubscription = {
  onDeleteChamasRegConfirm?:  {
    __typename: "ChamasRegConfirm",
    id: string,
    contact: string,
    regNo: string,
    AcStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCvrdGroupLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCvrdGroupLoansSubscription = {
  onCreateCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    repaymentPeriod: number,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    description?: string | null,
    lonBala: number,
    memberId: string,
    advRegNu: string,
    loaneeName: string,
    LoanerName: string,
    timeExpBack: number,
    timeExpBack2: number,
    status: Status,
    owner: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCvrdGroupLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCvrdGroupLoansSubscription = {
  onUpdateCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    repaymentPeriod: number,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    description?: string | null,
    lonBala: number,
    memberId: string,
    advRegNu: string,
    loaneeName: string,
    LoanerName: string,
    timeExpBack: number,
    timeExpBack2: number,
    status: Status,
    owner: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCvrdGroupLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCvrdGroupLoansSubscription = {
  onDeleteCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    repaymentPeriod: number,
    loanerLoanee: string,
    loanerLoaneeAdv: string,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    description?: string | null,
    lonBala: number,
    memberId: string,
    advRegNu: string,
    loaneeName: string,
    LoanerName: string,
    timeExpBack: number,
    timeExpBack2: number,
    status: Status,
    owner: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNonCvrdGroupLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNonCvrdGroupLoansSubscription = {
  onCreateNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    loanerLoanee: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    loaneeName: string,
    loanerName: string,
    memberId: string,
    lonBala: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNonCvrdGroupLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNonCvrdGroupLoansSubscription = {
  onUpdateNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    loanerLoanee: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    loaneeName: string,
    loanerName: string,
    memberId: string,
    lonBala: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNonCvrdGroupLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNonCvrdGroupLoansSubscription = {
  onDeleteNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneePhn: string,
    loanerLoanee: string,
    DefaultPenaltyChm: number,
    DefaultPenaltyChm2: number,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountExpectedBackWthClrnc: number,
    amountRepaid: number,
    timeExpBack: number,
    timeExpBack2: number,
    description?: string | null,
    loaneeName: string,
    loanerName: string,
    memberId: string,
    lonBala: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupNonLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGroupNonLoansSubscription = {
  onCreateGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientPhn: string,
    receiverName: string,
    SenderName: string,
    amountSent: number,
    memberId: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupNonLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGroupNonLoansSubscription = {
  onUpdateGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientPhn: string,
    receiverName: string,
    SenderName: string,
    amountSent: number,
    memberId: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupNonLoansSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGroupNonLoansSubscription = {
  onDeleteGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientPhn: string,
    receiverName: string,
    SenderName: string,
    amountSent: number,
    memberId: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGrpMembersContributionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGrpMembersContributionSubscription = {
  onCreateGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberPhn: string,
    mmberNme: string,
    GrpName: string,
    grpContact: string,
    contriAmount: number,
    memberId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGrpMembersContributionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGrpMembersContributionSubscription = {
  onUpdateGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberPhn: string,
    mmberNme: string,
    GrpName: string,
    grpContact: string,
    contriAmount: number,
    memberId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGrpMembersContributionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGrpMembersContributionSubscription = {
  onDeleteGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberPhn: string,
    mmberNme: string,
    GrpName: string,
    grpContact: string,
    contriAmount: number,
    memberId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReqLoanSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateReqLoanSubscription = {
  onCreateReqLoan?:  {
    __typename: "ReqLoan",
    id: string,
    loaneeEmail: string,
    loanerEmail: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReqLoanSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateReqLoanSubscription = {
  onUpdateReqLoan?:  {
    __typename: "ReqLoan",
    id: string,
    loaneeEmail: string,
    loanerEmail: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReqLoanSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteReqLoanSubscription = {
  onDeleteReqLoan?:  {
    __typename: "ReqLoan",
    id: string,
    loaneeEmail: string,
    loanerEmail: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReqLoanChamaSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateReqLoanChamaSubscription = {
  onCreateReqLoanChama?:  {
    __typename: "ReqLoanChama",
    id: string,
    loaneeEmail: string,
    chamaPhone: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    loaneeMemberId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReqLoanChamaSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateReqLoanChamaSubscription = {
  onUpdateReqLoanChama?:  {
    __typename: "ReqLoanChama",
    id: string,
    loaneeEmail: string,
    chamaPhone: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    loaneeMemberId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReqLoanChamaSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteReqLoanChamaSubscription = {
  onDeleteReqLoanChama?:  {
    __typename: "ReqLoanChama",
    id: string,
    loaneeEmail: string,
    chamaPhone: string,
    loaneePhone: string,
    loaneeName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    loaneeMemberId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReqLoanCredSlSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateReqLoanCredSlSubscription = {
  onCreateReqLoanCredSl?:  {
    __typename: "ReqLoanCredSl",
    id: string,
    loaneeEmail: string,
    businessNo: string,
    loaneePhone: string,
    loaneeName: string,
    itemName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReqLoanCredSlSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateReqLoanCredSlSubscription = {
  onUpdateReqLoanCredSl?:  {
    __typename: "ReqLoanCredSl",
    id: string,
    loaneeEmail: string,
    businessNo: string,
    loaneePhone: string,
    loaneeName: string,
    itemName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReqLoanCredSlSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteReqLoanCredSlSubscription = {
  onDeleteReqLoanCredSl?:  {
    __typename: "ReqLoanCredSl",
    id: string,
    loaneeEmail: string,
    businessNo: string,
    loaneePhone: string,
    loaneeName: string,
    itemName: string,
    amount: number,
    repaymentAmt: number,
    repaymentPeriod: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
