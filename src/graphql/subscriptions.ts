/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSMAccount = /* GraphQL */ `
  subscription OnCreateSMAccount($owner: String) {
    onCreateSMAccount(owner: $owner) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      pw
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSMAccount = /* GraphQL */ `
  subscription OnUpdateSMAccount($owner: String) {
    onUpdateSMAccount(owner: $owner) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      pw
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSMAccount = /* GraphQL */ `
  subscription OnDeleteSMAccount($owner: String) {
    onDeleteSMAccount(owner: $owner) {
      nationalid
      name
      phonecontact
      awsemail
      balance
      pw
      loanAcceptanceCode
      ttlDpstSM
      TtlWthdrwnSM
      TtlActvLonsTmsLnrCov
      TtlActvLonsTmsLneeCov
      TtlActvLonsAmtLnrCov
      TtlActvLonsAmtLneeCov
      TtlBLLonsTmsLnrCov
      TtlBLLonsTmsLneeCov
      TtlBLLonsAmtLnrCov
      TtlBLLonsAmtLneeCov
      TtlClrdLonsTmsLnrCov
      TtlClrdLonsTmsLneeCov
      TtlClrdLonsAmtLnrCov
      TtlClrdLonsAmtLneeCov
      TtlActvLonsTmsLneeChmCov
      TtlActvLonsAmtLneeChmCov
      TtlBLLonsTmsLneeChmCov
      TtlBLLonsAmtLneeChmCov
      TtlClrdLonsTmsLneeChmCov
      TtlClrdLonsAmtLneeChmCov
      TtlActvLonsTmsSllrCov
      TtlActvLonsTmsByrCov
      TtlActvLonsAmtSllrCov
      TtlActvLonsAmtByrCov
      TtlBLLonsTmsSllrCov
      TtlBLLonsTmsByrCov
      TtlBLLonsAmtSllrCov
      TtlBLLonsAmtByrCov
      TtlClrdLonsTmsSllrCov
      TtlClrdLonsTmsByrCov
      TtlClrdLonsAmtSllrCov
      TtlClrdLonsAmtByrCov
      TtlActvLonsTmsLnrNonCov
      TtlActvLonsTmsLneeNonCov
      TtlActvLonsAmtLnrNonCov
      TtlActvLonsAmtLneeNonCov
      TtlBLLonsTmsLnrNonCov
      TtlBLLonsTmsLneeNonCov
      TtlBLLonsAmtLnrNonCov
      TtlBLLonsAmtLneeNonCov
      TtlClrdLonsTmsLnrNonCov
      TtlClrdLonsTmsLneeNonCov
      TtlClrdLonsAmtLnrNonCov
      TtlClrdLonsAmtLneeNonCov
      TtlActvLonsTmsLneeChmNonCov
      TtlActvLonsAmtLneeChmNonCov
      TtlBLLonsTmsLneeChmNonCov
      TtlBLLonsAmtLneeChmNonCov
      TtlClrdLonsTmsLneeChmNonCov
      TtlClrdLonsAmtLneeChmNonCov
      TtlActvLonsTmsSllrNonCov
      TtlActvLonsTmsByrNonCov
      TtlActvLonsAmtSllrNonCov
      TtlActvLonsAmtByrNonCov
      TtlBLLonsTmsSllrNonCov
      TtlBLLonsTmsByrNonCov
      TtlBLLonsAmtSllrNonCov
      TtlBLLonsAmtByrNonCov
      TtlClrdLonsTmsSllrNonCov
      TtlClrdLonsTmsByrNonCov
      TtlClrdLonsAmtSllrNonCov
      TtlClrdLonsAmtByrNonCov
      ttlNonLonsRecSM
      ttlNonLonsSentSM
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      MaxTymsBL
      MaxTymsIHvBL
      MaxAcBal
      TymsIHvGivnLn
      TymsMyLnClrd
      DefaultPenaltySM
      loanStatus
      acStatus
      deActvtnReason
      blStatus
      loanLimit
      nonLonLimit
      withdrawalLimit
      depositLimit
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSMLoansCovered = /* GraphQL */ `
  subscription OnCreateSMLoansCovered($owner: String) {
    onCreateSMLoansCovered(owner: $owner) {
      id
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSMLoansCovered = /* GraphQL */ `
  subscription OnUpdateSMLoansCovered($owner: String) {
    onUpdateSMLoansCovered(owner: $owner) {
      id
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSMLoansCovered = /* GraphQL */ `
  subscription OnDeleteSMLoansCovered($owner: String) {
    onDeleteSMLoansCovered(owner: $owner) {
      id
      loaneeid
      loaneePhn
      loanerLoanee
      loanerLoaneeAdv
      loanerPhn
      advregnu
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSMLoansNonCovered = /* GraphQL */ `
  subscription OnCreateSMLoansNonCovered($owner: String) {
    onCreateSMLoansNonCovered(owner: $owner) {
      id
      loaneePhn
      loanerPhn
      loanerLoanee
      loaneeid
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSMLoansNonCovered = /* GraphQL */ `
  subscription OnUpdateSMLoansNonCovered($owner: String) {
    onUpdateSMLoansNonCovered(owner: $owner) {
      id
      loaneePhn
      loanerPhn
      loanerLoanee
      loaneeid
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSMLoansNonCovered = /* GraphQL */ `
  subscription OnDeleteSMLoansNonCovered($owner: String) {
    onDeleteSMLoansNonCovered(owner: $owner) {
      id
      loaneePhn
      loanerPhn
      loanerLoanee
      loaneeid
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
      repaymentPeriod
      DefaultPenaltySM
      DefaultPenaltySM2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNonLoans = /* GraphQL */ `
  subscription OnCreateNonLoans($owner: String) {
    onCreateNonLoans(owner: $owner) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNonLoans = /* GraphQL */ `
  subscription OnUpdateNonLoans($owner: String) {
    onUpdateNonLoans(owner: $owner) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNonLoans = /* GraphQL */ `
  subscription OnDeleteNonLoans($owner: String) {
    onDeleteNonLoans(owner: $owner) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      amount
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSokoAd = /* GraphQL */ `
  subscription OnCreateSokoAd($owner: String) {
    onCreateSokoAd(owner: $owner) {
      id
      sokoregno
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSokoAd = /* GraphQL */ `
  subscription OnUpdateSokoAd($owner: String) {
    onUpdateSokoAd(owner: $owner) {
      id
      sokoregno
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSokoAd = /* GraphQL */ `
  subscription OnDeleteSokoAd($owner: String) {
    onDeleteSokoAd(owner: $owner) {
      id
      sokoregno
      sokokntct
      sokoname
      sokoprice
      sokotown
      sokolnprcntg
      sokolpymntperiod
      sokodesc
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRafikiLnAd = /* GraphQL */ `
  subscription OnCreateRafikiLnAd($owner: String) {
    onCreateRafikiLnAd(owner: $owner) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      rafikiamnt
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRafikiLnAd = /* GraphQL */ `
  subscription OnUpdateRafikiLnAd($owner: String) {
    onUpdateRafikiLnAd(owner: $owner) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      rafikiamnt
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRafikiLnAd = /* GraphQL */ `
  subscription OnDeleteRafikiLnAd($owner: String) {
    onDeleteRafikiLnAd(owner: $owner) {
      id
      rafikiName
      rafikicntct
      rafikiEmail
      rafikiamnt
      rafikidesc
      rafikiprcntg
      rafikirpymntperiod
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent($owner: String) {
    onCreateAgent(owner: $owner) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent($owner: String) {
    onUpdateAgent(owner: $owner) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent($owner: String) {
    onDeleteAgent(owner: $owner) {
      phonecontact
      sagentregno
      nationalid
      name
      ttlEarnings
      pw
      email
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      bankName
      bkAcNo
      owner
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFloatPurchase = /* GraphQL */ `
  subscription OnCreateFloatPurchase($owner: String) {
    onCreateFloatPurchase(owner: $owner) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFloatPurchase = /* GraphQL */ `
  subscription OnUpdateFloatPurchase($owner: String) {
    onUpdateFloatPurchase(owner: $owner) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFloatPurchase = /* GraphQL */ `
  subscription OnDeleteFloatPurchase($owner: String) {
    onDeleteFloatPurchase(owner: $owner) {
      agentphone
      amount
      transactId
      bankAdminID
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFloatAdd = /* GraphQL */ `
  subscription OnCreateFloatAdd($owner: String) {
    onCreateFloatAdd(owner: $owner) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFloatAdd = /* GraphQL */ `
  subscription OnUpdateFloatAdd($owner: String) {
    onUpdateFloatAdd(owner: $owner) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFloatAdd = /* GraphQL */ `
  subscription OnDeleteFloatAdd($owner: String) {
    onDeleteFloatAdd(owner: $owner) {
      id
      withdrawerid
      amount
      agentPhonecontact
      agentName
      userName
      saName
      saPhone
      sagentId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFloatReduction = /* GraphQL */ `
  subscription OnCreateFloatReduction($owner: String) {
    onCreateFloatReduction(owner: $owner) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFloatReduction = /* GraphQL */ `
  subscription OnUpdateFloatReduction($owner: String) {
    onUpdateFloatReduction(owner: $owner) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFloatReduction = /* GraphQL */ `
  subscription OnDeleteFloatReduction($owner: String) {
    onDeleteFloatReduction(owner: $owner) {
      id
      amount
      depositerid
      agContact
      agentName
      userName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAgentWithdrawals = /* GraphQL */ `
  subscription OnCreateAgentWithdrawals($owner: String) {
    onCreateAgentWithdrawals(owner: $owner) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAgentWithdrawals = /* GraphQL */ `
  subscription OnUpdateAgentWithdrawals($owner: String) {
    onUpdateAgentWithdrawals(owner: $owner) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAgentWithdrawals = /* GraphQL */ `
  subscription OnDeleteAgentWithdrawals($owner: String) {
    onDeleteAgentWithdrawals(owner: $owner) {
      id
      agentPhone
      bankAdminId
      bankName
      bkAcNo
      Amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSAgent = /* GraphQL */ `
  subscription OnCreateSAgent($owner: String) {
    onCreateSAgent(owner: $owner) {
      saPhoneContact
      saNationalid
      name
      pw
      TtlEarnings
      actvMFNdog
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSAgent = /* GraphQL */ `
  subscription OnUpdateSAgent($owner: String) {
    onUpdateSAgent(owner: $owner) {
      saPhoneContact
      saNationalid
      name
      pw
      TtlEarnings
      actvMFNdog
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSAgent = /* GraphQL */ `
  subscription OnDeleteSAgent($owner: String) {
    onDeleteSAgent(owner: $owner) {
      saPhoneContact
      saNationalid
      name
      pw
      TtlEarnings
      actvMFNdog
      InctvMFNdog
      email
      saBalance
      bankName
      bkAcNo
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSAgentWithdrawals = /* GraphQL */ `
  subscription OnCreateSAgentWithdrawals($owner: String) {
    onCreateSAgentWithdrawals(owner: $owner) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSAgentWithdrawals = /* GraphQL */ `
  subscription OnUpdateSAgentWithdrawals($owner: String) {
    onUpdateSAgentWithdrawals(owner: $owner) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSAgentWithdrawals = /* GraphQL */ `
  subscription OnDeleteSAgentWithdrawals($owner: String) {
    onDeleteSAgentWithdrawals(owner: $owner) {
      id
      saId
      amount
      bankAdmnId
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePersonel = /* GraphQL */ `
  subscription OnCreatePersonel($owner: String) {
    onCreatePersonel(owner: $owner) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePersonel = /* GraphQL */ `
  subscription OnUpdatePersonel($owner: String) {
    onUpdatePersonel(owner: $owner) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePersonel = /* GraphQL */ `
  subscription OnDeletePersonel($owner: String) {
    onDeletePersonel(owner: $owner) {
      phoneKontact
      BusinessRegNo
      nationalid
      BiznaName
      name
      ownrsss
      email
      workerId
      workId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBizna = /* GraphQL */ `
  subscription OnCreateBizna($owner: String) {
    onCreateBizna(owner: $owner) {
      BusinessRegNo
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      email
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBizna = /* GraphQL */ `
  subscription OnUpdateBizna($owner: String) {
    onUpdateBizna(owner: $owner) {
      BusinessRegNo
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      email
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBizna = /* GraphQL */ `
  subscription OnDeleteBizna($owner: String) {
    onDeleteBizna(owner: $owner) {
      BusinessRegNo
      BusKntct
      busName
      pw
      TtlEarnings
      earningsBal
      netEarnings
      email
      status
      owner
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBankAdmin = /* GraphQL */ `
  subscription OnCreateBankAdmin($owner: String) {
    onCreateBankAdmin(owner: $owner) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBankAdmin = /* GraphQL */ `
  subscription OnUpdateBankAdmin($owner: String) {
    onUpdateBankAdmin(owner: $owner) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBankAdmin = /* GraphQL */ `
  subscription OnDeleteBankAdmin($owner: String) {
    onDeleteBankAdmin(owner: $owner) {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBankAdmWithdrawals = /* GraphQL */ `
  subscription OnCreateBankAdmWithdrawals($owner: String) {
    onCreateBankAdmWithdrawals(owner: $owner) {
      id
      bankAdmNatId
      amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBankAdmWithdrawals = /* GraphQL */ `
  subscription OnUpdateBankAdmWithdrawals($owner: String) {
    onUpdateBankAdmWithdrawals(owner: $owner) {
      id
      bankAdmNatId
      amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBankAdmWithdrawals = /* GraphQL */ `
  subscription OnDeleteBankAdmWithdrawals($owner: String) {
    onDeleteBankAdmWithdrawals(owner: $owner) {
      id
      bankAdmNatId
      amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAdvocate = /* GraphQL */ `
  subscription OnCreateAdvocate($owner: String) {
    onCreateAdvocate(owner: $owner) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdvocate = /* GraphQL */ `
  subscription OnUpdateAdvocate($owner: String) {
    onUpdateAdvocate(owner: $owner) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdvocate = /* GraphQL */ `
  subscription OnDeleteAdvocate($owner: String) {
    onDeleteAdvocate(owner: $owner) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      bankName
      bkAcNo
      officeLoc
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAdvocateWithdrawals = /* GraphQL */ `
  subscription OnCreateAdvocateWithdrawals($owner: String) {
    onCreateAdvocateWithdrawals(owner: $owner) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdvocateWithdrawals = /* GraphQL */ `
  subscription OnUpdateAdvocateWithdrawals($owner: String) {
    onUpdateAdvocateWithdrawals(owner: $owner) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdvocateWithdrawals = /* GraphQL */ `
  subscription OnDeleteAdvocateWithdrawals($owner: String) {
    onDeleteAdvocateWithdrawals(owner: $owner) {
      id
      bankAdmnId
      advregnu
      amount
      bankName
      bkAcNo
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      AdminId
      phoneContact
      companyEmail
      termsNconditions
      alert
      about
      policy
      privacy
      recom
      pw1
      pw2
      agentwithdrawalFee
      agentCom
      sagentCom
      companyCom
      AdvCom
      AdvCompanyCom
      bankAdminCom
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      chmMmbrTransferFee
      chmTransferFee
      biznaTransferFee
      palpalLnRpymntFee
      chmLnRpymntFee
      crdSllrLnRpymntFee
      userClearanceFee
      CoverageFee
      vat
      ttlvat
      enquiryFee
      UsrWthdrwlFees
      ttlNonLonssRecSM
      ttlNonLonssSentSM
      ttlNonLonssRecChm
      ttlNonLonssSentChm
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saEarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlInactvUsrs
      ttlBLUsrs
      ttlActiveChm
      ttlInactvChm
      ttlBLChm
      ttlActiveChmUsers
      ttlInactvChmUsrs
      ttlBLChmUsrs
      ttlKFNdgActv
      ttlKFNdgInActv
      ttlKNdgBLStts
      ttlKFKbwActv
      ttlKFKbwInActv
      ttlKKbwBLStts
      ttlKFAdvActv
      ttlKFAdvInActv
      ttlKAdvBLStts
      ttlKFAdmActv
      ttlKFAdmInActv
      ttlKAdmBLStts
      ttlSMLnsInAmtCov
      ttlChmLnsInAmtCov
      ttlSellerLnsInAmtCov
      ttlSMLnsInActvAmtCov
      ttlChmLnsInActvAmtCov
      ttlSellerLnsInActvAmtCov
      ttlSMLnsInClrdAmtCov
      ttlChmLnsInClrdAmtCov
      ttlSellerLnsInClrdAmtCov
      ttlSMLnsInBlAmtCov
      ttlChmLnsInBlAmtCov
      ttlSellerLnsInBlAmtCov
      ttlSMLnsInTymsCov
      ttlChmLnsInTymsCov
      ttlSellerLnsInTymsCov
      ttlSMLnsInActvTymsCov
      ttlChmLnsInActvTymsCov
      ttlSellerLnsInActvTymsCov
      ttlSMLnsInClrdTymsCov
      ttlChmLnsInClrdTymsCov
      ttlSellerLnsInClrdTymsCov
      ttlSMLnsInBlTymsCov
      ttlChmLnsInBlTymsCov
      ttlSellerLnsInBlTymsCov
      ttlCompTrnsfrEarningsCov
      ttlCompBLClrncEarningsCov
      ttlSMLnsInAmtNonCov
      ttlChmLnsInAmtNonCov
      ttlSellerLnsInAmtNonCov
      ttlSMLnsInActvAmtNonCov
      ttlChmLnsInActvAmtNonCov
      ttlSellerLnsInActvAmtNonCov
      ttlSMLnsInClrdAmtNonCov
      ttlChmLnsInClrdAmtNonCov
      ttlSellerLnsInClrdAmtNonCov
      ttlSMLnsInBlAmtNonCov
      ttlChmLnsInBlAmtNonCov
      ttlSellerLnsInBlAmtNonCov
      ttlSMLnsInTymsNonCov
      ttlChmLnsInTymsNonCov
      ttlSellerLnsInTymsNonCov
      ttlSMLnsInActvTymsNonCov
      ttlChmLnsInActvTymsNonCov
      ttlSellerLnsInActvTymsNonCov
      ttlSMLnsInClrdTymsNonCov
      ttlChmLnsInClrdTymsNonCov
      ttlSellerLnsInClrdTymsNonCov
      ttlSMLnsInBlTymsNonCov
      ttlChmLnsInBlTymsNonCov
      ttlSellerLnsInBlTymsNonCov
      ttlCompTrnsfrEarningsNonCov
      ttlCompBLClrncEarningsNonCov
      ttlCompCovEarnings
      maxInterestSM
      maxInterestPwnBrkr
      maxInterestCredSllr
      maxInterestGrp
      maxMFNdogos
      maxBLs
      owner
      totalLnsRecovered
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCovCreditSeller = /* GraphQL */ `
  subscription OnCreateCovCreditSeller($owner: String) {
    onCreateCovCreditSeller(owner: $owner) {
      id
      itemName
      itemSerialNumber
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      lonBala
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCovCreditSeller = /* GraphQL */ `
  subscription OnUpdateCovCreditSeller($owner: String) {
    onUpdateCovCreditSeller(owner: $owner) {
      id
      itemName
      itemSerialNumber
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      lonBala
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCovCreditSeller = /* GraphQL */ `
  subscription OnDeleteCovCreditSeller($owner: String) {
    onDeleteCovCreditSeller(owner: $owner) {
      id
      itemName
      itemSerialNumber
      loanerLoanee
      loanerLoaneeAdv
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      repaymentPeriod
      lonBala
      description
      status
      advregnu
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNonCovCreditSeller = /* GraphQL */ `
  subscription OnCreateNonCovCreditSeller($owner: String) {
    onCreateNonCovCreditSeller(owner: $owner) {
      id
      itemName
      itemSerialNumber
      loanerLoanee
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      lonBala
      repaymentPeriod
      description
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNonCovCreditSeller = /* GraphQL */ `
  subscription OnUpdateNonCovCreditSeller($owner: String) {
    onUpdateNonCovCreditSeller(owner: $owner) {
      id
      itemName
      itemSerialNumber
      loanerLoanee
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      lonBala
      repaymentPeriod
      description
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNonCovCreditSeller = /* GraphQL */ `
  subscription OnDeleteNonCovCreditSeller($owner: String) {
    onDeleteNonCovCreditSeller(owner: $owner) {
      id
      itemName
      itemSerialNumber
      loanerLoanee
      buyerContact
      sellerContact
      buyerID
      buyerName
      SellerName
      sellerID
      amountSold
      amountexpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      lonBala
      repaymentPeriod
      description
      DefaultPenaltyCredSl
      DefaultPenaltyCredSl2
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($owner: String) {
    onCreateGroup(owner: $owner) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      grpEmail
      grpBal
      ttlGrpMembers
      description
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($owner: String) {
    onUpdateGroup(owner: $owner) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      grpEmail
      grpBal
      ttlGrpMembers
      description
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($owner: String) {
    onDeleteGroup(owner: $owner) {
      grpContact
      regNo
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      oprtnArea
      venture
      signitory2Sub
      WithdrawCnfrmtn
      grpEmail
      grpBal
      ttlGrpMembers
      description
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
      tymsChmHvBL
      TtlActvLonsTmsLnrChmCov
      TtlActvLonsAmtLnrChmCov
      TtlBLLonsTmsLnrChmCov
      TtlBLLonsAmtLnrChmCov
      TtlClrdLonsTmsLnrChmCov
      TtlClrdLonsAmtLnrChmCov
      TtlActvLonsTmsLnrChmNonCov
      TtlActvLonsAmtLnrChmNonCov
      TtlBLLonsTmsLnrChmNonCov
      TtlBLLonsAmtLnrChmNonCov
      TtlClrdLonsTmsLnrChmNonCov
      TtlClrdLonsAmtLnrChmNonCov
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChamaMembers = /* GraphQL */ `
  subscription OnCreateChamaMembers($owner: String) {
    onCreateChamaMembers(owner: $owner) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChamaMembers = /* GraphQL */ `
  subscription OnUpdateChamaMembers($owner: String) {
    onUpdateChamaMembers(owner: $owner) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChamaMembers = /* GraphQL */ `
  subscription OnDeleteChamaMembers($owner: String) {
    onDeleteChamaMembers(owner: $owner) {
      MembaId
      groupContact
      regNo
      ChamaNMember
      groupName
      memberContact
      memberName
      memberNatId
      GrossLnsGvn
      LonAmtGven
      AmtRepaid
      LnBal
      NonLoanAcBal
      ttlNonLonAcBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChamasNPwnBrkrs = /* GraphQL */ `
  subscription OnCreateChamasNPwnBrkrs($owner: String) {
    onCreateChamasNPwnBrkrs(owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChamasNPwnBrkrs = /* GraphQL */ `
  subscription OnUpdateChamasNPwnBrkrs($owner: String) {
    onUpdateChamasNPwnBrkrs(owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChamasNPwnBrkrs = /* GraphQL */ `
  subscription OnDeleteChamasNPwnBrkrs($owner: String) {
    onDeleteChamasNPwnBrkrs(owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChamasRegConfirm = /* GraphQL */ `
  subscription OnCreateChamasRegConfirm($owner: String) {
    onCreateChamasRegConfirm(owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChamasRegConfirm = /* GraphQL */ `
  subscription OnUpdateChamasRegConfirm($owner: String) {
    onUpdateChamasRegConfirm(owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChamasRegConfirm = /* GraphQL */ `
  subscription OnDeleteChamasRegConfirm($owner: String) {
    onDeleteChamasRegConfirm(owner: $owner) {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCvrdGroupLoans = /* GraphQL */ `
  subscription OnCreateCvrdGroupLoans($owner: String) {
    onCreateCvrdGroupLoans(owner: $owner) {
      id
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      lonBala
      memberId
      advRegNu
      loaneeName
      LoanerName
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCvrdGroupLoans = /* GraphQL */ `
  subscription OnUpdateCvrdGroupLoans($owner: String) {
    onUpdateCvrdGroupLoans(owner: $owner) {
      id
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      lonBala
      memberId
      advRegNu
      loaneeName
      LoanerName
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCvrdGroupLoans = /* GraphQL */ `
  subscription OnDeleteCvrdGroupLoans($owner: String) {
    onDeleteCvrdGroupLoans(owner: $owner) {
      id
      grpContact
      loaneePhn
      repaymentPeriod
      loanerLoanee
      loanerLoaneeAdv
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      lonBala
      memberId
      advRegNu
      loaneeName
      LoanerName
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNonCvrdGroupLoans = /* GraphQL */ `
  subscription OnCreateNonCvrdGroupLoans($owner: String) {
    onCreateNonCvrdGroupLoans(owner: $owner) {
      id
      grpContact
      loaneePhn
      loanerLoanee
      DefaultPenaltyChm
      DefaultPenaltyChm2
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      loaneeName
      loanerName
      memberId
      lonBala
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNonCvrdGroupLoans = /* GraphQL */ `
  subscription OnUpdateNonCvrdGroupLoans($owner: String) {
    onUpdateNonCvrdGroupLoans(owner: $owner) {
      id
      grpContact
      loaneePhn
      loanerLoanee
      DefaultPenaltyChm
      DefaultPenaltyChm2
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      loaneeName
      loanerName
      memberId
      lonBala
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNonCvrdGroupLoans = /* GraphQL */ `
  subscription OnDeleteNonCvrdGroupLoans($owner: String) {
    onDeleteNonCvrdGroupLoans(owner: $owner) {
      id
      grpContact
      loaneePhn
      loanerLoanee
      DefaultPenaltyChm
      DefaultPenaltyChm2
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountExpectedBackWthClrnc
      amountRepaid
      description
      loaneeName
      loanerName
      memberId
      lonBala
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupNonLoans = /* GraphQL */ `
  subscription OnCreateGroupNonLoans($owner: String) {
    onCreateGroupNonLoans(owner: $owner) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupNonLoans = /* GraphQL */ `
  subscription OnUpdateGroupNonLoans($owner: String) {
    onUpdateGroupNonLoans(owner: $owner) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupNonLoans = /* GraphQL */ `
  subscription OnDeleteGroupNonLoans($owner: String) {
    onDeleteGroupNonLoans(owner: $owner) {
      id
      grpContact
      recipientPhn
      receiverName
      SenderName
      amountSent
      memberId
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGrpMembersContribution = /* GraphQL */ `
  subscription OnCreateGrpMembersContribution($owner: String) {
    onCreateGrpMembersContribution(owner: $owner) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGrpMembersContribution = /* GraphQL */ `
  subscription OnUpdateGrpMembersContribution($owner: String) {
    onUpdateGrpMembersContribution(owner: $owner) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGrpMembersContribution = /* GraphQL */ `
  subscription OnDeleteGrpMembersContribution($owner: String) {
    onDeleteGrpMembersContribution(owner: $owner) {
      id
      memberPhn
      mmberNme
      GrpName
      grpContact
      contriAmount
      memberId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReqLoan = /* GraphQL */ `
  subscription OnCreateReqLoan($owner: String) {
    onCreateReqLoan(owner: $owner) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReqLoan = /* GraphQL */ `
  subscription OnUpdateReqLoan($owner: String) {
    onUpdateReqLoan(owner: $owner) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReqLoan = /* GraphQL */ `
  subscription OnDeleteReqLoan($owner: String) {
    onDeleteReqLoan(owner: $owner) {
      id
      loaneeEmail
      loanerEmail
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReqLoanChama = /* GraphQL */ `
  subscription OnCreateReqLoanChama($owner: String) {
    onCreateReqLoanChama(owner: $owner) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      loaneeMemberId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReqLoanChama = /* GraphQL */ `
  subscription OnUpdateReqLoanChama($owner: String) {
    onUpdateReqLoanChama(owner: $owner) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      loaneeMemberId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReqLoanChama = /* GraphQL */ `
  subscription OnDeleteReqLoanChama($owner: String) {
    onDeleteReqLoanChama(owner: $owner) {
      id
      loaneeEmail
      chamaPhone
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      loaneeMemberId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReqLoanCredSl = /* GraphQL */ `
  subscription OnCreateReqLoanCredSl($owner: String) {
    onCreateReqLoanCredSl(owner: $owner) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReqLoanCredSl = /* GraphQL */ `
  subscription OnUpdateReqLoanCredSl($owner: String) {
    onUpdateReqLoanCredSl(owner: $owner) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReqLoanCredSl = /* GraphQL */ `
  subscription OnDeleteReqLoanCredSl($owner: String) {
    onDeleteReqLoanCredSl(owner: $owner) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      amount
      repaymentAmt
      repaymentPeriod
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
