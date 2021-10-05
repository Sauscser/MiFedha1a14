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
      ttlLnInSM
      ttlLnOutSM
      ttlLoanRecovered
      blTimesSM
      blClrdtmsSM
      clrdNnvrBLSM
      actvLnsSM
      ttlActiveLnsInAmtSM
      ttlBLLoansInAmtSM
      ttlClrdLnsInAmtSM
      ttlActiveLnsOutAmtSM
      ttlBLLoansOutAmtSM
      ttlClrdLnsOutAmtSM
      tmsIHvBrwdSM
      tmsIHvLndSM
      ttlDpstChm
      ttlWithdrwlChm
      ttlChmLnIn
      blChmTimes
      blChmClrdtms
      clrdNnvrBLChm
      actvLnsChm
      ttlActiveLnsInAmtChm
      ttlBLLoansInAmChmt
      ttlClrdLnsInAmtChm
      tmsIHvBrwdChm
      tmsIHvLndChm
      ttlLnInCrdSls
      ttlLnOutCrdSls
      blTimesCrdSls
      blClrdtmsCrdSls
      clrdNnvrBLCrdSls
      actvLnsCrdSls
      ttlActiveLnsInAmtCrdSls
      ttlBLLoansInAmtCrdSls
      ttlClrdLnsInAmtCrdSls
      ttlActiveLnsOutAmtCrdSls
      ttlBLLoansOutAmtCrdSls
      ttlClrdLnsOutAmtCrdSls
      tmsIHvBrwdCrdSls
      tmsIHvLndCrdSls
      TotalTymsBL
      acActivenessStatus
      blStatus
      loanStatus
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
      ttlLnInSM
      ttlLnOutSM
      ttlLoanRecovered
      blTimesSM
      blClrdtmsSM
      clrdNnvrBLSM
      actvLnsSM
      ttlActiveLnsInAmtSM
      ttlBLLoansInAmtSM
      ttlClrdLnsInAmtSM
      ttlActiveLnsOutAmtSM
      ttlBLLoansOutAmtSM
      ttlClrdLnsOutAmtSM
      tmsIHvBrwdSM
      tmsIHvLndSM
      ttlDpstChm
      ttlWithdrwlChm
      ttlChmLnIn
      blChmTimes
      blChmClrdtms
      clrdNnvrBLChm
      actvLnsChm
      ttlActiveLnsInAmtChm
      ttlBLLoansInAmChmt
      ttlClrdLnsInAmtChm
      tmsIHvBrwdChm
      tmsIHvLndChm
      ttlLnInCrdSls
      ttlLnOutCrdSls
      blTimesCrdSls
      blClrdtmsCrdSls
      clrdNnvrBLCrdSls
      actvLnsCrdSls
      ttlActiveLnsInAmtCrdSls
      ttlBLLoansInAmtCrdSls
      ttlClrdLnsInAmtCrdSls
      ttlActiveLnsOutAmtCrdSls
      ttlBLLoansOutAmtCrdSls
      ttlClrdLnsOutAmtCrdSls
      tmsIHvBrwdCrdSls
      tmsIHvLndCrdSls
      TotalTymsBL
      acActivenessStatus
      blStatus
      loanStatus
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
      ttlLnInSM
      ttlLnOutSM
      ttlLoanRecovered
      blTimesSM
      blClrdtmsSM
      clrdNnvrBLSM
      actvLnsSM
      ttlActiveLnsInAmtSM
      ttlBLLoansInAmtSM
      ttlClrdLnsInAmtSM
      ttlActiveLnsOutAmtSM
      ttlBLLoansOutAmtSM
      ttlClrdLnsOutAmtSM
      tmsIHvBrwdSM
      tmsIHvLndSM
      ttlDpstChm
      ttlWithdrwlChm
      ttlChmLnIn
      blChmTimes
      blChmClrdtms
      clrdNnvrBLChm
      actvLnsChm
      ttlActiveLnsInAmtChm
      ttlBLLoansInAmChmt
      ttlClrdLnsInAmtChm
      tmsIHvBrwdChm
      tmsIHvLndChm
      ttlLnInCrdSls
      ttlLnOutCrdSls
      blTimesCrdSls
      blClrdtmsCrdSls
      clrdNnvrBLCrdSls
      actvLnsCrdSls
      ttlActiveLnsInAmtCrdSls
      ttlBLLoansInAmtCrdSls
      ttlClrdLnsInAmtCrdSls
      ttlActiveLnsOutAmtCrdSls
      ttlBLLoansOutAmtCrdSls
      ttlClrdLnsOutAmtCrdSls
      tmsIHvBrwdCrdSls
      tmsIHvLndCrdSls
      TotalTymsBL
      acActivenessStatus
      blStatus
      loanStatus
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
      loanerId
      amountgiven
      amountexpected
      amountrepaid
      loanercontact
      loaneecontact
      repaymentPeriod
      advregnu
      timestamp
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
      loanerId
      amountgiven
      amountexpected
      amountrepaid
      loanercontact
      loaneecontact
      repaymentPeriod
      advregnu
      timestamp
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
      loanerId
      amountgiven
      amountexpected
      amountrepaid
      loanercontact
      loaneecontact
      repaymentPeriod
      advregnu
      timestamp
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createSMNonLoans = /* GraphQL */ `
  mutation CreateSMNonLoans(
    $input: CreateSMNonLoansInput!
    $condition: ModelSMNonLoansConditionInput
  ) {
    createSMNonLoans(input: $input, condition: $condition) {
      id
      senderID
      amountgiven
      senderContact
      description
      receiverphonecontact
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateSMNonLoans = /* GraphQL */ `
  mutation UpdateSMNonLoans(
    $input: UpdateSMNonLoansInput!
    $condition: ModelSMNonLoansConditionInput
  ) {
    updateSMNonLoans(input: $input, condition: $condition) {
      id
      senderID
      amountgiven
      senderContact
      description
      receiverphonecontact
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteSMNonLoans = /* GraphQL */ `
  mutation DeleteSMNonLoans(
    $input: DeleteSMNonLoansInput!
    $condition: ModelSMNonLoansConditionInput
  ) {
    deleteSMNonLoans(input: $input, condition: $condition) {
      id
      senderID
      amountgiven
      senderContact
      description
      receiverphonecontact
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
      nationalid
      name
      ttlEarnings
      pw
      email
      sagentregno
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      owner
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
      nationalid
      name
      ttlEarnings
      pw
      email
      sagentregno
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      owner
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
      nationalid
      name
      ttlEarnings
      pw
      email
      sagentregno
      TtlFltIn
      TtlFltOut
      floatBal
      latitude
      longitude
      agentEarningBal
      status
      owner
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
      id
      agentphone
      amount
      nationalid
      bankAdmid
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
      id
      agentphone
      amount
      nationalid
      bankAdmid
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
      id
      agentphone
      amount
      nationalid
      bankAdmid
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
      trnsactionCode
      amount
      agentPhonecontact
      sagentregno
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
      trnsactionCode
      amount
      agentPhonecontact
      sagentregno
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
      trnsactionCode
      amount
      agentPhonecontact
      sagentregno
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
      depositerPhn
      phonecontact
      status
      agentNationalid
      owner
      createdAt
      updatedAt
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
      depositerPhn
      phonecontact
      status
      agentNationalid
      owner
      createdAt
      updatedAt
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
      depositerPhn
      phonecontact
      status
      agentNationalid
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createAgentWithdrawals = /* GraphQL */ `
  mutation CreateAgentWithdrawals(
    $input: CreateAgentWithdrawalsInput!
    $condition: ModelAgentWithdrawalsConditionInput
  ) {
    createAgentWithdrawals(input: $input, condition: $condition) {
      AgentPhone
      Amount
      id
      bankAdmId
      agentNationalid
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
      AgentPhone
      Amount
      id
      bankAdmId
      agentNationalid
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
      AgentPhone
      Amount
      id
      bankAdmId
      agentNationalid
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
      id
      saNationalid
      name
      phonecontact
      pw
      TtlEarnings
      email
      saBalance
      status
      owner
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
      id
      saNationalid
      name
      phonecontact
      pw
      TtlEarnings
      email
      saBalance
      status
      owner
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
      id
      saNationalid
      name
      phonecontact
      pw
      TtlEarnings
      email
      saBalance
      status
      owner
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
      sagentphone
      sagentNatId
      sagentregno
      amount
      bankAdmid
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
      sagentphone
      sagentNatId
      sagentregno
      amount
      bankAdmid
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
      sagentphone
      sagentNatId
      sagentregno
      amount
      bankAdmid
      status
      owner
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
      phoneContact
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
      phoneContact
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
      phoneContact
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
      phoneContact
      advregnu
      amount
      advNatId
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
      phoneContact
      advregnu
      amount
      advNatId
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
      phoneContact
      advregnu
      amount
      advNatId
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
      bankAdminCom
      compComg
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      advocateCoverageFee
      userTransferFee
      userClearanceFee
      searchAdFee
      createBuzFee
      crtCompAdsFee
      crtParaAdsFee
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlnactvUsrs
      ttlBLUsrs
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
      ttlSMLnsIn
      ttlChmLnsIn
      ttlSellerLnsIn
      ttlSMLnsInActv
      ttlChmLnsInActv
      ttlSellerLnsInActv
      ttlSMLnsInClrd
      ttlChmLnsInClrd
      ttlSellerLnsInClrd
      ttlSMLnsInBl
      ttlChmLnsInBl
      ttlSellerLnsInBl
      ttlSMLnsInBlThnClr
      ttlChmLnsInBlThnClr
      ttlSellerLnsInBlThnClr
      ttlSMLnsInNvrBlThnClr
      ttlChmLnsInNvrBlThnClr
      ttlSellerLnsInNvrBlThnClr
      ttlCompTrnsfrEarnings
      ttlCompBLClrncfrEarnings
      ttlCompCovEarnings
      ttlCompEarnings
      ttlKFNdogoTrnsactionEarnings
      ttlKFKubwaTrnsactionEarnings
      ttlKFAdvTrnsactionEarnings
      ttlKFAdmTrnsactionEarnings
      maxInterest
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
      bankAdminCom
      compComg
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      advocateCoverageFee
      userTransferFee
      userClearanceFee
      searchAdFee
      createBuzFee
      crtCompAdsFee
      crtParaAdsFee
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlnactvUsrs
      ttlBLUsrs
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
      ttlSMLnsIn
      ttlChmLnsIn
      ttlSellerLnsIn
      ttlSMLnsInActv
      ttlChmLnsInActv
      ttlSellerLnsInActv
      ttlSMLnsInClrd
      ttlChmLnsInClrd
      ttlSellerLnsInClrd
      ttlSMLnsInBl
      ttlChmLnsInBl
      ttlSellerLnsInBl
      ttlSMLnsInBlThnClr
      ttlChmLnsInBlThnClr
      ttlSellerLnsInBlThnClr
      ttlSMLnsInNvrBlThnClr
      ttlChmLnsInNvrBlThnClr
      ttlSellerLnsInNvrBlThnClr
      ttlCompTrnsfrEarnings
      ttlCompBLClrncfrEarnings
      ttlCompCovEarnings
      ttlCompEarnings
      ttlKFNdogoTrnsactionEarnings
      ttlKFKubwaTrnsactionEarnings
      ttlKFAdvTrnsactionEarnings
      ttlKFAdmTrnsactionEarnings
      maxInterest
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
      bankAdminCom
      compComg
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      advocateCoverageFee
      userTransferFee
      userClearanceFee
      searchAdFee
      createBuzFee
      crtCompAdsFee
      crtParaAdsFee
      companyEarningBal
      companyEarning
      agentEarningBal
      agentEarning
      saEarningBal
      saarning
      AdvEarningBal
      AdvEarning
      admEarningBal
      admEarning
      ttlUsrDep
      ttlUserWthdrwl
      agentFloatIn
      agentFloatOut
      ttlActiveUsers
      ttlnactvUsrs
      ttlBLUsrs
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
      ttlSMLnsIn
      ttlChmLnsIn
      ttlSellerLnsIn
      ttlSMLnsInActv
      ttlChmLnsInActv
      ttlSellerLnsInActv
      ttlSMLnsInClrd
      ttlChmLnsInClrd
      ttlSellerLnsInClrd
      ttlSMLnsInBl
      ttlChmLnsInBl
      ttlSellerLnsInBl
      ttlSMLnsInBlThnClr
      ttlChmLnsInBlThnClr
      ttlSellerLnsInBlThnClr
      ttlSMLnsInNvrBlThnClr
      ttlChmLnsInNvrBlThnClr
      ttlSellerLnsInNvrBlThnClr
      ttlCompTrnsfrEarnings
      ttlCompBLClrncfrEarnings
      ttlCompCovEarnings
      ttlCompEarnings
      ttlKFNdogoTrnsactionEarnings
      ttlKFKubwaTrnsactionEarnings
      ttlKFAdvTrnsactionEarnings
      ttlKFAdmTrnsactionEarnings
      maxInterest
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
      itemSerialNumber
      buyerContact
      sellerContact
      buyerID
      sellerID
      amountSold
      amountexpectedBack
      amountRepaid
      repaymentPeriod
      timestamp
      description
      status
      advregnu
      advPhone
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
      itemSerialNumber
      buyerContact
      sellerContact
      buyerID
      sellerID
      amountSold
      amountexpectedBack
      amountRepaid
      repaymentPeriod
      timestamp
      description
      status
      advregnu
      advPhone
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
      itemSerialNumber
      buyerContact
      sellerContact
      buyerID
      sellerID
      amountSold
      amountexpectedBack
      amountRepaid
      repaymentPeriod
      timestamp
      description
      status
      advregnu
      advPhone
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
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      grpEmail
      grpBal
      ttlGrpMembers
      ttlLonsOut
      description
      ttlDpst
      ttlWthdrwn
      ttlBLMmbrs
      ttlMmbrsWthActvLns
      ttlMmbrsClrdNnvrBL
      ttlMmbrsWithActvLns
      ttlActiveLnsInAmt
      ttlMmbrsBLLoansInAmt
      ttlMmbrsClrdLnsInAmt
      ttlClrdLnsOutAmt
      tymsGrpHasLend
      ttlLonAmountRecovered
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
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      grpEmail
      grpBal
      ttlGrpMembers
      ttlLonsOut
      description
      ttlDpst
      ttlWthdrwn
      ttlBLMmbrs
      ttlMmbrsWthActvLns
      ttlMmbrsClrdNnvrBL
      ttlMmbrsWithActvLns
      ttlActiveLnsInAmt
      ttlMmbrsBLLoansInAmt
      ttlMmbrsClrdLnsInAmt
      ttlClrdLnsOutAmt
      tymsGrpHasLend
      ttlLonAmountRecovered
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
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      grpEmail
      grpBal
      ttlGrpMembers
      ttlLonsOut
      description
      ttlDpst
      ttlWthdrwn
      ttlBLMmbrs
      ttlMmbrsWthActvLns
      ttlMmbrsClrdNnvrBL
      ttlMmbrsWithActvLns
      ttlActiveLnsInAmt
      ttlMmbrsBLLoansInAmt
      ttlMmbrsClrdLnsInAmt
      ttlClrdLnsOutAmt
      tymsGrpHasLend
      ttlLonAmountRecovered
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createGrpMembers = /* GraphQL */ `
  mutation CreateGrpMembers(
    $input: CreateGrpMembersInput!
    $condition: ModelGrpMembersConditionInput
  ) {
    createGrpMembers(input: $input, condition: $condition) {
      id
      groupContact
      memberContact
      memberNatId
      acBal
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateGrpMembers = /* GraphQL */ `
  mutation UpdateGrpMembers(
    $input: UpdateGrpMembersInput!
    $condition: ModelGrpMembersConditionInput
  ) {
    updateGrpMembers(input: $input, condition: $condition) {
      id
      groupContact
      memberContact
      memberNatId
      acBal
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteGrpMembers = /* GraphQL */ `
  mutation DeleteGrpMembers(
    $input: DeleteGrpMembersInput!
    $condition: ModelGrpMembersConditionInput
  ) {
    deleteGrpMembers(input: $input, condition: $condition) {
      id
      groupContact
      memberContact
      memberNatId
      acBal
      status
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
      loaneeContact
      loaneeID
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountRepaid
      description
      timestamp
      advRegNu
      status
      owner
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
      loaneeContact
      loaneeID
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountRepaid
      description
      timestamp
      advRegNu
      status
      owner
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
      loaneeContact
      loaneeID
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountRepaid
      description
      timestamp
      advRegNu
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
      recipientContact
      amountSent
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
      recipientContact
      amountSent
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
      recipientContact
      amountSent
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
      memberContact
      grpContact
      contriAmount
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
      memberContact
      grpContact
      contriAmount
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
      memberContact
      grpContact
      contriAmount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createAdvertisedSingleMemberLoans = /* GraphQL */ `
  mutation CreateAdvertisedSingleMemberLoans(
    $input: CreateAdvertisedSingleMemberLoansInput!
    $condition: ModelAdvertisedSingleMemberLoansConditionInput
  ) {
    createAdvertisedSingleMemberLoans(input: $input, condition: $condition) {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateAdvertisedSingleMemberLoans = /* GraphQL */ `
  mutation UpdateAdvertisedSingleMemberLoans(
    $input: UpdateAdvertisedSingleMemberLoansInput!
    $condition: ModelAdvertisedSingleMemberLoansConditionInput
  ) {
    updateAdvertisedSingleMemberLoans(input: $input, condition: $condition) {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdvertisedSingleMemberLoans = /* GraphQL */ `
  mutation DeleteAdvertisedSingleMemberLoans(
    $input: DeleteAdvertisedSingleMemberLoansInput!
    $condition: ModelAdvertisedSingleMemberLoansConditionInput
  ) {
    deleteAdvertisedSingleMemberLoans(input: $input, condition: $condition) {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createAdvertisedChamaLoans = /* GraphQL */ `
  mutation CreateAdvertisedChamaLoans(
    $input: CreateAdvertisedChamaLoansInput!
    $condition: ModelAdvertisedChamaLoansConditionInput
  ) {
    createAdvertisedChamaLoans(input: $input, condition: $condition) {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateAdvertisedChamaLoans = /* GraphQL */ `
  mutation UpdateAdvertisedChamaLoans(
    $input: UpdateAdvertisedChamaLoansInput!
    $condition: ModelAdvertisedChamaLoansConditionInput
  ) {
    updateAdvertisedChamaLoans(input: $input, condition: $condition) {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdvertisedChamaLoans = /* GraphQL */ `
  mutation DeleteAdvertisedChamaLoans(
    $input: DeleteAdvertisedChamaLoansInput!
    $condition: ModelAdvertisedChamaLoansConditionInput
  ) {
    deleteAdvertisedChamaLoans(input: $input, condition: $condition) {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createPaidMultipleAds = /* GraphQL */ `
  mutation CreatePaidMultipleAds(
    $input: CreatePaidMultipleAdsInput!
    $condition: ModelPaidMultipleAdsConditionInput
  ) {
    createPaidMultipleAds(input: $input, condition: $condition) {
      id
      bizRegNo
      ownerNatId
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      latitude
      longitude
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updatePaidMultipleAds = /* GraphQL */ `
  mutation UpdatePaidMultipleAds(
    $input: UpdatePaidMultipleAdsInput!
    $condition: ModelPaidMultipleAdsConditionInput
  ) {
    updatePaidMultipleAds(input: $input, condition: $condition) {
      id
      bizRegNo
      ownerNatId
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      latitude
      longitude
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deletePaidMultipleAds = /* GraphQL */ `
  mutation DeletePaidMultipleAds(
    $input: DeletePaidMultipleAdsInput!
    $condition: ModelPaidMultipleAdsConditionInput
  ) {
    deletePaidMultipleAds(input: $input, condition: $condition) {
      id
      bizRegNo
      ownerNatId
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      latitude
      longitude
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createFreeBizAds = /* GraphQL */ `
  mutation CreateFreeBizAds(
    $input: CreateFreeBizAdsInput!
    $condition: ModelFreeBizAdsConditionInput
  ) {
    createFreeBizAds(input: $input, condition: $condition) {
      id
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateFreeBizAds = /* GraphQL */ `
  mutation UpdateFreeBizAds(
    $input: UpdateFreeBizAdsInput!
    $condition: ModelFreeBizAdsConditionInput
  ) {
    updateFreeBizAds(input: $input, condition: $condition) {
      id
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteFreeBizAds = /* GraphQL */ `
  mutation DeleteFreeBizAds(
    $input: DeleteFreeBizAdsInput!
    $condition: ModelFreeBizAdsConditionInput
  ) {
    deleteFreeBizAds(input: $input, condition: $condition) {
      id
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
