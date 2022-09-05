/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSMAccount = /* GraphQL */ `
  mutation CreateSMAccount(
    $input: CreateSMAccountInput!
    $condition: ModelSMAccountConditionInput
  ) {
    createSMAccount(input: $input, condition: $condition) {
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
export const updateSMAccount = /* GraphQL */ `
  mutation UpdateSMAccount(
    $input: UpdateSMAccountInput!
    $condition: ModelSMAccountConditionInput
  ) {
    updateSMAccount(input: $input, condition: $condition) {
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
export const deleteSMAccount = /* GraphQL */ `
  mutation DeleteSMAccount(
    $input: DeleteSMAccountInput!
    $condition: ModelSMAccountConditionInput
  ) {
    deleteSMAccount(input: $input, condition: $condition) {
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
export const createSMLoansCovered = /* GraphQL */ `
  mutation CreateSMLoansCovered(
    $input: CreateSMLoansCoveredInput!
    $condition: ModelSMLoansCoveredConditionInput
  ) {
    createSMLoansCovered(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateSMLoansCovered = /* GraphQL */ `
  mutation UpdateSMLoansCovered(
    $input: UpdateSMLoansCoveredInput!
    $condition: ModelSMLoansCoveredConditionInput
  ) {
    updateSMLoansCovered(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteSMLoansCovered = /* GraphQL */ `
  mutation DeleteSMLoansCovered(
    $input: DeleteSMLoansCoveredInput!
    $condition: ModelSMLoansCoveredConditionInput
  ) {
    deleteSMLoansCovered(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createSMLoansNonCovered = /* GraphQL */ `
  mutation CreateSMLoansNonCovered(
    $input: CreateSMLoansNonCoveredInput!
    $condition: ModelSMLoansNonCoveredConditionInput
  ) {
    createSMLoansNonCovered(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateSMLoansNonCovered = /* GraphQL */ `
  mutation UpdateSMLoansNonCovered(
    $input: UpdateSMLoansNonCoveredInput!
    $condition: ModelSMLoansNonCoveredConditionInput
  ) {
    updateSMLoansNonCovered(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteSMLoansNonCovered = /* GraphQL */ `
  mutation DeleteSMLoansNonCovered(
    $input: DeleteSMLoansNonCoveredInput!
    $condition: ModelSMLoansNonCoveredConditionInput
  ) {
    deleteSMLoansNonCovered(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createNonLoans = /* GraphQL */ `
  mutation CreateNonLoans(
    $input: CreateNonLoansInput!
    $condition: ModelNonLoansConditionInput
  ) {
    createNonLoans(input: $input, condition: $condition) {
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
export const updateNonLoans = /* GraphQL */ `
  mutation UpdateNonLoans(
    $input: UpdateNonLoansInput!
    $condition: ModelNonLoansConditionInput
  ) {
    updateNonLoans(input: $input, condition: $condition) {
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
export const deleteNonLoans = /* GraphQL */ `
  mutation DeleteNonLoans(
    $input: DeleteNonLoansInput!
    $condition: ModelNonLoansConditionInput
  ) {
    deleteNonLoans(input: $input, condition: $condition) {
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
export const createLoanPayment = /* GraphQL */ `
  mutation CreateLoanPayment(
    $input: CreateLoanPaymentInput!
    $condition: ModelLoanPaymentConditionInput
  ) {
    createLoanPayment(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      lnId
      amount
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateLoanPayment = /* GraphQL */ `
  mutation UpdateLoanPayment(
    $input: UpdateLoanPaymentInput!
    $condition: ModelLoanPaymentConditionInput
  ) {
    updateLoanPayment(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      lnId
      amount
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteLoanPayment = /* GraphQL */ `
  mutation DeleteLoanPayment(
    $input: DeleteLoanPaymentInput!
    $condition: ModelLoanPaymentConditionInput
  ) {
    deleteLoanPayment(input: $input, condition: $condition) {
      id
      senderPhn
      recPhn
      RecName
      SenderName
      lnId
      amount
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createSokoAd = /* GraphQL */ `
  mutation CreateSokoAd(
    $input: CreateSokoAdInput!
    $condition: ModelSokoAdConditionInput
  ) {
    createSokoAd(input: $input, condition: $condition) {
      id
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
export const updateSokoAd = /* GraphQL */ `
  mutation UpdateSokoAd(
    $input: UpdateSokoAdInput!
    $condition: ModelSokoAdConditionInput
  ) {
    updateSokoAd(input: $input, condition: $condition) {
      id
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
export const deleteSokoAd = /* GraphQL */ `
  mutation DeleteSokoAd(
    $input: DeleteSokoAdInput!
    $condition: ModelSokoAdConditionInput
  ) {
    deleteSokoAd(input: $input, condition: $condition) {
      id
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
export const createRafikiLnAd = /* GraphQL */ `
  mutation CreateRafikiLnAd(
    $input: CreateRafikiLnAdInput!
    $condition: ModelRafikiLnAdConditionInput
  ) {
    createRafikiLnAd(input: $input, condition: $condition) {
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
export const updateRafikiLnAd = /* GraphQL */ `
  mutation UpdateRafikiLnAd(
    $input: UpdateRafikiLnAdInput!
    $condition: ModelRafikiLnAdConditionInput
  ) {
    updateRafikiLnAd(input: $input, condition: $condition) {
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
export const deleteRafikiLnAd = /* GraphQL */ `
  mutation DeleteRafikiLnAd(
    $input: DeleteRafikiLnAdInput!
    $condition: ModelRafikiLnAdConditionInput
  ) {
    deleteRafikiLnAd(input: $input, condition: $condition) {
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
export const createAgent = /* GraphQL */ `
  mutation CreateAgent(
    $input: CreateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    createAgent(input: $input, condition: $condition) {
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
export const updateAgent = /* GraphQL */ `
  mutation UpdateAgent(
    $input: UpdateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    updateAgent(input: $input, condition: $condition) {
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
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent(
    $input: DeleteAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    deleteAgent(input: $input, condition: $condition) {
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
export const createFloatPurchase = /* GraphQL */ `
  mutation CreateFloatPurchase(
    $input: CreateFloatPurchaseInput!
    $condition: ModelFloatPurchaseConditionInput
  ) {
    createFloatPurchase(input: $input, condition: $condition) {
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
export const updateFloatPurchase = /* GraphQL */ `
  mutation UpdateFloatPurchase(
    $input: UpdateFloatPurchaseInput!
    $condition: ModelFloatPurchaseConditionInput
  ) {
    updateFloatPurchase(input: $input, condition: $condition) {
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
export const deleteFloatPurchase = /* GraphQL */ `
  mutation DeleteFloatPurchase(
    $input: DeleteFloatPurchaseInput!
    $condition: ModelFloatPurchaseConditionInput
  ) {
    deleteFloatPurchase(input: $input, condition: $condition) {
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
export const createFloatAdd = /* GraphQL */ `
  mutation CreateFloatAdd(
    $input: CreateFloatAddInput!
    $condition: ModelFloatAddConditionInput
  ) {
    createFloatAdd(input: $input, condition: $condition) {
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
export const updateFloatAdd = /* GraphQL */ `
  mutation UpdateFloatAdd(
    $input: UpdateFloatAddInput!
    $condition: ModelFloatAddConditionInput
  ) {
    updateFloatAdd(input: $input, condition: $condition) {
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
export const deleteFloatAdd = /* GraphQL */ `
  mutation DeleteFloatAdd(
    $input: DeleteFloatAddInput!
    $condition: ModelFloatAddConditionInput
  ) {
    deleteFloatAdd(input: $input, condition: $condition) {
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
export const createFloatReduction = /* GraphQL */ `
  mutation CreateFloatReduction(
    $input: CreateFloatReductionInput!
    $condition: ModelFloatReductionConditionInput
  ) {
    createFloatReduction(input: $input, condition: $condition) {
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
export const updateFloatReduction = /* GraphQL */ `
  mutation UpdateFloatReduction(
    $input: UpdateFloatReductionInput!
    $condition: ModelFloatReductionConditionInput
  ) {
    updateFloatReduction(input: $input, condition: $condition) {
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
export const deleteFloatReduction = /* GraphQL */ `
  mutation DeleteFloatReduction(
    $input: DeleteFloatReductionInput!
    $condition: ModelFloatReductionConditionInput
  ) {
    deleteFloatReduction(input: $input, condition: $condition) {
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
export const createAgentWithdrawals = /* GraphQL */ `
  mutation CreateAgentWithdrawals(
    $input: CreateAgentWithdrawalsInput!
    $condition: ModelAgentWithdrawalsConditionInput
  ) {
    createAgentWithdrawals(input: $input, condition: $condition) {
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
export const updateAgentWithdrawals = /* GraphQL */ `
  mutation UpdateAgentWithdrawals(
    $input: UpdateAgentWithdrawalsInput!
    $condition: ModelAgentWithdrawalsConditionInput
  ) {
    updateAgentWithdrawals(input: $input, condition: $condition) {
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
export const deleteAgentWithdrawals = /* GraphQL */ `
  mutation DeleteAgentWithdrawals(
    $input: DeleteAgentWithdrawalsInput!
    $condition: ModelAgentWithdrawalsConditionInput
  ) {
    deleteAgentWithdrawals(input: $input, condition: $condition) {
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
export const createSAgent = /* GraphQL */ `
  mutation CreateSAgent(
    $input: CreateSAgentInput!
    $condition: ModelSAgentConditionInput
  ) {
    createSAgent(input: $input, condition: $condition) {
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
export const updateSAgent = /* GraphQL */ `
  mutation UpdateSAgent(
    $input: UpdateSAgentInput!
    $condition: ModelSAgentConditionInput
  ) {
    updateSAgent(input: $input, condition: $condition) {
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
export const deleteSAgent = /* GraphQL */ `
  mutation DeleteSAgent(
    $input: DeleteSAgentInput!
    $condition: ModelSAgentConditionInput
  ) {
    deleteSAgent(input: $input, condition: $condition) {
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
export const createSAgentWithdrawals = /* GraphQL */ `
  mutation CreateSAgentWithdrawals(
    $input: CreateSAgentWithdrawalsInput!
    $condition: ModelSAgentWithdrawalsConditionInput
  ) {
    createSAgentWithdrawals(input: $input, condition: $condition) {
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
export const updateSAgentWithdrawals = /* GraphQL */ `
  mutation UpdateSAgentWithdrawals(
    $input: UpdateSAgentWithdrawalsInput!
    $condition: ModelSAgentWithdrawalsConditionInput
  ) {
    updateSAgentWithdrawals(input: $input, condition: $condition) {
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
export const deleteSAgentWithdrawals = /* GraphQL */ `
  mutation DeleteSAgentWithdrawals(
    $input: DeleteSAgentWithdrawalsInput!
    $condition: ModelSAgentWithdrawalsConditionInput
  ) {
    deleteSAgentWithdrawals(input: $input, condition: $condition) {
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
export const createPersonel = /* GraphQL */ `
  mutation CreatePersonel(
    $input: CreatePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    createPersonel(input: $input, condition: $condition) {
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
export const updatePersonel = /* GraphQL */ `
  mutation UpdatePersonel(
    $input: UpdatePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    updatePersonel(input: $input, condition: $condition) {
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
export const deletePersonel = /* GraphQL */ `
  mutation DeletePersonel(
    $input: DeletePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    deletePersonel(input: $input, condition: $condition) {
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
export const createBizna = /* GraphQL */ `
  mutation CreateBizna(
    $input: CreateBiznaInput!
    $condition: ModelBiznaConditionInput
  ) {
    createBizna(input: $input, condition: $condition) {
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
export const updateBizna = /* GraphQL */ `
  mutation UpdateBizna(
    $input: UpdateBiznaInput!
    $condition: ModelBiznaConditionInput
  ) {
    updateBizna(input: $input, condition: $condition) {
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
export const deleteBizna = /* GraphQL */ `
  mutation DeleteBizna(
    $input: DeleteBiznaInput!
    $condition: ModelBiznaConditionInput
  ) {
    deleteBizna(input: $input, condition: $condition) {
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
export const createBankAdmin = /* GraphQL */ `
  mutation CreateBankAdmin(
    $input: CreateBankAdminInput!
    $condition: ModelBankAdminConditionInput
  ) {
    createBankAdmin(input: $input, condition: $condition) {
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
export const updateBankAdmin = /* GraphQL */ `
  mutation UpdateBankAdmin(
    $input: UpdateBankAdminInput!
    $condition: ModelBankAdminConditionInput
  ) {
    updateBankAdmin(input: $input, condition: $condition) {
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
export const deleteBankAdmin = /* GraphQL */ `
  mutation DeleteBankAdmin(
    $input: DeleteBankAdminInput!
    $condition: ModelBankAdminConditionInput
  ) {
    deleteBankAdmin(input: $input, condition: $condition) {
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
export const createBankAdmWithdrawals = /* GraphQL */ `
  mutation CreateBankAdmWithdrawals(
    $input: CreateBankAdmWithdrawalsInput!
    $condition: ModelBankAdmWithdrawalsConditionInput
  ) {
    createBankAdmWithdrawals(input: $input, condition: $condition) {
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
export const updateBankAdmWithdrawals = /* GraphQL */ `
  mutation UpdateBankAdmWithdrawals(
    $input: UpdateBankAdmWithdrawalsInput!
    $condition: ModelBankAdmWithdrawalsConditionInput
  ) {
    updateBankAdmWithdrawals(input: $input, condition: $condition) {
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
export const deleteBankAdmWithdrawals = /* GraphQL */ `
  mutation DeleteBankAdmWithdrawals(
    $input: DeleteBankAdmWithdrawalsInput!
    $condition: ModelBankAdmWithdrawalsConditionInput
  ) {
    deleteBankAdmWithdrawals(input: $input, condition: $condition) {
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
export const createAdvocate = /* GraphQL */ `
  mutation CreateAdvocate(
    $input: CreateAdvocateInput!
    $condition: ModelAdvocateConditionInput
  ) {
    createAdvocate(input: $input, condition: $condition) {
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
export const updateAdvocate = /* GraphQL */ `
  mutation UpdateAdvocate(
    $input: UpdateAdvocateInput!
    $condition: ModelAdvocateConditionInput
  ) {
    updateAdvocate(input: $input, condition: $condition) {
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
export const deleteAdvocate = /* GraphQL */ `
  mutation DeleteAdvocate(
    $input: DeleteAdvocateInput!
    $condition: ModelAdvocateConditionInput
  ) {
    deleteAdvocate(input: $input, condition: $condition) {
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
export const createAdvocateWithdrawals = /* GraphQL */ `
  mutation CreateAdvocateWithdrawals(
    $input: CreateAdvocateWithdrawalsInput!
    $condition: ModelAdvocateWithdrawalsConditionInput
  ) {
    createAdvocateWithdrawals(input: $input, condition: $condition) {
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
export const updateAdvocateWithdrawals = /* GraphQL */ `
  mutation UpdateAdvocateWithdrawals(
    $input: UpdateAdvocateWithdrawalsInput!
    $condition: ModelAdvocateWithdrawalsConditionInput
  ) {
    updateAdvocateWithdrawals(input: $input, condition: $condition) {
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
export const deleteAdvocateWithdrawals = /* GraphQL */ `
  mutation DeleteAdvocateWithdrawals(
    $input: DeleteAdvocateWithdrawalsInput!
    $condition: ModelAdvocateWithdrawalsConditionInput
  ) {
    deleteAdvocateWithdrawals(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createCovCreditSeller = /* GraphQL */ `
  mutation CreateCovCreditSeller(
    $input: CreateCovCreditSellerInput!
    $condition: ModelCovCreditSellerConditionInput
  ) {
    createCovCreditSeller(input: $input, condition: $condition) {
      id
      itemName
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
      timeExpBack
      timeExpBack2
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
export const updateCovCreditSeller = /* GraphQL */ `
  mutation UpdateCovCreditSeller(
    $input: UpdateCovCreditSellerInput!
    $condition: ModelCovCreditSellerConditionInput
  ) {
    updateCovCreditSeller(input: $input, condition: $condition) {
      id
      itemName
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
      timeExpBack
      timeExpBack2
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
export const deleteCovCreditSeller = /* GraphQL */ `
  mutation DeleteCovCreditSeller(
    $input: DeleteCovCreditSellerInput!
    $condition: ModelCovCreditSellerConditionInput
  ) {
    deleteCovCreditSeller(input: $input, condition: $condition) {
      id
      itemName
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
      timeExpBack
      timeExpBack2
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
export const createNonCovCreditSeller = /* GraphQL */ `
  mutation CreateNonCovCreditSeller(
    $input: CreateNonCovCreditSellerInput!
    $condition: ModelNonCovCreditSellerConditionInput
  ) {
    createNonCovCreditSeller(input: $input, condition: $condition) {
      id
      itemName
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
      timeExpBack
      timeExpBack2
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
export const updateNonCovCreditSeller = /* GraphQL */ `
  mutation UpdateNonCovCreditSeller(
    $input: UpdateNonCovCreditSellerInput!
    $condition: ModelNonCovCreditSellerConditionInput
  ) {
    updateNonCovCreditSeller(input: $input, condition: $condition) {
      id
      itemName
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
      timeExpBack
      timeExpBack2
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
export const deleteNonCovCreditSeller = /* GraphQL */ `
  mutation DeleteNonCovCreditSeller(
    $input: DeleteNonCovCreditSellerInput!
    $condition: ModelNonCovCreditSellerConditionInput
  ) {
    deleteNonCovCreditSeller(input: $input, condition: $condition) {
      id
      itemName
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
      timeExpBack
      timeExpBack2
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createChamaMembers = /* GraphQL */ `
  mutation CreateChamaMembers(
    $input: CreateChamaMembersInput!
    $condition: ModelChamaMembersConditionInput
  ) {
    createChamaMembers(input: $input, condition: $condition) {
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
export const updateChamaMembers = /* GraphQL */ `
  mutation UpdateChamaMembers(
    $input: UpdateChamaMembersInput!
    $condition: ModelChamaMembersConditionInput
  ) {
    updateChamaMembers(input: $input, condition: $condition) {
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
export const deleteChamaMembers = /* GraphQL */ `
  mutation DeleteChamaMembers(
    $input: DeleteChamaMembersInput!
    $condition: ModelChamaMembersConditionInput
  ) {
    deleteChamaMembers(input: $input, condition: $condition) {
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
export const createChamasNPwnBrkrs = /* GraphQL */ `
  mutation CreateChamasNPwnBrkrs(
    $input: CreateChamasNPwnBrkrsInput!
    $condition: ModelChamasNPwnBrkrsConditionInput
  ) {
    createChamasNPwnBrkrs(input: $input, condition: $condition) {
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
export const updateChamasNPwnBrkrs = /* GraphQL */ `
  mutation UpdateChamasNPwnBrkrs(
    $input: UpdateChamasNPwnBrkrsInput!
    $condition: ModelChamasNPwnBrkrsConditionInput
  ) {
    updateChamasNPwnBrkrs(input: $input, condition: $condition) {
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
export const deleteChamasNPwnBrkrs = /* GraphQL */ `
  mutation DeleteChamasNPwnBrkrs(
    $input: DeleteChamasNPwnBrkrsInput!
    $condition: ModelChamasNPwnBrkrsConditionInput
  ) {
    deleteChamasNPwnBrkrs(input: $input, condition: $condition) {
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
export const createChamasRegConfirm = /* GraphQL */ `
  mutation CreateChamasRegConfirm(
    $input: CreateChamasRegConfirmInput!
    $condition: ModelChamasRegConfirmConditionInput
  ) {
    createChamasRegConfirm(input: $input, condition: $condition) {
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
export const updateChamasRegConfirm = /* GraphQL */ `
  mutation UpdateChamasRegConfirm(
    $input: UpdateChamasRegConfirmInput!
    $condition: ModelChamasRegConfirmConditionInput
  ) {
    updateChamasRegConfirm(input: $input, condition: $condition) {
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
export const deleteChamasRegConfirm = /* GraphQL */ `
  mutation DeleteChamasRegConfirm(
    $input: DeleteChamasRegConfirmInput!
    $condition: ModelChamasRegConfirmConditionInput
  ) {
    deleteChamasRegConfirm(input: $input, condition: $condition) {
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
export const createCvrdGroupLoans = /* GraphQL */ `
  mutation CreateCvrdGroupLoans(
    $input: CreateCvrdGroupLoansInput!
    $condition: ModelCvrdGroupLoansConditionInput
  ) {
    createCvrdGroupLoans(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const updateCvrdGroupLoans = /* GraphQL */ `
  mutation UpdateCvrdGroupLoans(
    $input: UpdateCvrdGroupLoansInput!
    $condition: ModelCvrdGroupLoansConditionInput
  ) {
    updateCvrdGroupLoans(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const deleteCvrdGroupLoans = /* GraphQL */ `
  mutation DeleteCvrdGroupLoans(
    $input: DeleteCvrdGroupLoansInput!
    $condition: ModelCvrdGroupLoansConditionInput
  ) {
    deleteCvrdGroupLoans(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
      status
      owner
      DefaultPenaltyChm
      DefaultPenaltyChm2
      createdAt
      updatedAt
    }
  }
`;
export const createNonCvrdGroupLoans = /* GraphQL */ `
  mutation CreateNonCvrdGroupLoans(
    $input: CreateNonCvrdGroupLoansInput!
    $condition: ModelNonCvrdGroupLoansConditionInput
  ) {
    createNonCvrdGroupLoans(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
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
export const updateNonCvrdGroupLoans = /* GraphQL */ `
  mutation UpdateNonCvrdGroupLoans(
    $input: UpdateNonCvrdGroupLoansInput!
    $condition: ModelNonCvrdGroupLoansConditionInput
  ) {
    updateNonCvrdGroupLoans(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
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
export const deleteNonCvrdGroupLoans = /* GraphQL */ `
  mutation DeleteNonCvrdGroupLoans(
    $input: DeleteNonCvrdGroupLoansInput!
    $condition: ModelNonCvrdGroupLoansConditionInput
  ) {
    deleteNonCvrdGroupLoans(input: $input, condition: $condition) {
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
      timeExpBack
      timeExpBack2
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
export const createGroupNonLoans = /* GraphQL */ `
  mutation CreateGroupNonLoans(
    $input: CreateGroupNonLoansInput!
    $condition: ModelGroupNonLoansConditionInput
  ) {
    createGroupNonLoans(input: $input, condition: $condition) {
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
export const updateGroupNonLoans = /* GraphQL */ `
  mutation UpdateGroupNonLoans(
    $input: UpdateGroupNonLoansInput!
    $condition: ModelGroupNonLoansConditionInput
  ) {
    updateGroupNonLoans(input: $input, condition: $condition) {
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
export const deleteGroupNonLoans = /* GraphQL */ `
  mutation DeleteGroupNonLoans(
    $input: DeleteGroupNonLoansInput!
    $condition: ModelGroupNonLoansConditionInput
  ) {
    deleteGroupNonLoans(input: $input, condition: $condition) {
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
export const createGrpMembersContribution = /* GraphQL */ `
  mutation CreateGrpMembersContribution(
    $input: CreateGrpMembersContributionInput!
    $condition: ModelGrpMembersContributionConditionInput
  ) {
    createGrpMembersContribution(input: $input, condition: $condition) {
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
export const updateGrpMembersContribution = /* GraphQL */ `
  mutation UpdateGrpMembersContribution(
    $input: UpdateGrpMembersContributionInput!
    $condition: ModelGrpMembersContributionConditionInput
  ) {
    updateGrpMembersContribution(input: $input, condition: $condition) {
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
export const deleteGrpMembersContribution = /* GraphQL */ `
  mutation DeleteGrpMembersContribution(
    $input: DeleteGrpMembersContributionInput!
    $condition: ModelGrpMembersContributionConditionInput
  ) {
    deleteGrpMembersContribution(input: $input, condition: $condition) {
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
export const createReqLoan = /* GraphQL */ `
  mutation CreateReqLoan(
    $input: CreateReqLoanInput!
    $condition: ModelReqLoanConditionInput
  ) {
    createReqLoan(input: $input, condition: $condition) {
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
export const updateReqLoan = /* GraphQL */ `
  mutation UpdateReqLoan(
    $input: UpdateReqLoanInput!
    $condition: ModelReqLoanConditionInput
  ) {
    updateReqLoan(input: $input, condition: $condition) {
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
export const deleteReqLoan = /* GraphQL */ `
  mutation DeleteReqLoan(
    $input: DeleteReqLoanInput!
    $condition: ModelReqLoanConditionInput
  ) {
    deleteReqLoan(input: $input, condition: $condition) {
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
export const createReqLoanChama = /* GraphQL */ `
  mutation CreateReqLoanChama(
    $input: CreateReqLoanChamaInput!
    $condition: ModelReqLoanChamaConditionInput
  ) {
    createReqLoanChama(input: $input, condition: $condition) {
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
export const updateReqLoanChama = /* GraphQL */ `
  mutation UpdateReqLoanChama(
    $input: UpdateReqLoanChamaInput!
    $condition: ModelReqLoanChamaConditionInput
  ) {
    updateReqLoanChama(input: $input, condition: $condition) {
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
export const deleteReqLoanChama = /* GraphQL */ `
  mutation DeleteReqLoanChama(
    $input: DeleteReqLoanChamaInput!
    $condition: ModelReqLoanChamaConditionInput
  ) {
    deleteReqLoanChama(input: $input, condition: $condition) {
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
export const createReqLoanCredSl = /* GraphQL */ `
  mutation CreateReqLoanCredSl(
    $input: CreateReqLoanCredSlInput!
    $condition: ModelReqLoanCredSlConditionInput
  ) {
    createReqLoanCredSl(input: $input, condition: $condition) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
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
export const updateReqLoanCredSl = /* GraphQL */ `
  mutation UpdateReqLoanCredSl(
    $input: UpdateReqLoanCredSlInput!
    $condition: ModelReqLoanCredSlConditionInput
  ) {
    updateReqLoanCredSl(input: $input, condition: $condition) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
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
export const deleteReqLoanCredSl = /* GraphQL */ `
  mutation DeleteReqLoanCredSl(
    $input: DeleteReqLoanCredSlInput!
    $condition: ModelReqLoanCredSlConditionInput
  ) {
    deleteReqLoanCredSl(input: $input, condition: $condition) {
      id
      loaneeEmail
      businessNo
      loaneePhone
      loaneeName
      itemName
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
