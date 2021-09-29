/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSMAccount = /* GraphQL */ `
  subscription OnCreateSMAccount {
    onCreateSMAccount {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSMAccount = /* GraphQL */ `
  subscription OnUpdateSMAccount {
    onUpdateSMAccount {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSMAccount = /* GraphQL */ `
  subscription OnDeleteSMAccount {
    onDeleteSMAccount {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSMLoansCovered = /* GraphQL */ `
  subscription OnCreateSMLoansCovered {
    onCreateSMLoansCovered {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSMLoansCovered = /* GraphQL */ `
  subscription OnUpdateSMLoansCovered {
    onUpdateSMLoansCovered {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSMLoansCovered = /* GraphQL */ `
  subscription OnDeleteSMLoansCovered {
    onDeleteSMLoansCovered {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSMNonLoans = /* GraphQL */ `
  subscription OnCreateSMNonLoans {
    onCreateSMNonLoans {
      id
      senderID
      amountgiven
      senderContact
      description
      receiverphonecontact
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSMNonLoans = /* GraphQL */ `
  subscription OnUpdateSMNonLoans {
    onUpdateSMNonLoans {
      id
      senderID
      amountgiven
      senderContact
      description
      receiverphonecontact
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSMNonLoans = /* GraphQL */ `
  subscription OnDeleteSMNonLoans {
    onDeleteSMNonLoans {
      id
      senderID
      amountgiven
      senderContact
      description
      receiverphonecontact
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent {
    onCreateAgent {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent {
    onUpdateAgent {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent {
    onDeleteAgent {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFloatPurchase = /* GraphQL */ `
  subscription OnCreateFloatPurchase {
    onCreateFloatPurchase {
      id
      agentphone
      amount
      nationalid
      bankAdmid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFloatPurchase = /* GraphQL */ `
  subscription OnUpdateFloatPurchase {
    onUpdateFloatPurchase {
      id
      agentphone
      amount
      nationalid
      bankAdmid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFloatPurchase = /* GraphQL */ `
  subscription OnDeleteFloatPurchase {
    onDeleteFloatPurchase {
      id
      agentphone
      amount
      nationalid
      bankAdmid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFloatAdd = /* GraphQL */ `
  subscription OnCreateFloatAdd {
    onCreateFloatAdd {
      id
      withdrawerid
      trnsactionCode
      amount
      agentPhonecontact
      sagentregno
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFloatAdd = /* GraphQL */ `
  subscription OnUpdateFloatAdd {
    onUpdateFloatAdd {
      id
      withdrawerid
      trnsactionCode
      amount
      agentPhonecontact
      sagentregno
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFloatAdd = /* GraphQL */ `
  subscription OnDeleteFloatAdd {
    onDeleteFloatAdd {
      id
      withdrawerid
      trnsactionCode
      amount
      agentPhonecontact
      sagentregno
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFloatReduction = /* GraphQL */ `
  subscription OnCreateFloatReduction {
    onCreateFloatReduction {
      id
      amount
      depositerid
      depositerPhn
      phonecontact
      status
      agentNationalid
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFloatReduction = /* GraphQL */ `
  subscription OnUpdateFloatReduction {
    onUpdateFloatReduction {
      id
      amount
      depositerid
      depositerPhn
      phonecontact
      status
      agentNationalid
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFloatReduction = /* GraphQL */ `
  subscription OnDeleteFloatReduction {
    onDeleteFloatReduction {
      id
      amount
      depositerid
      depositerPhn
      phonecontact
      status
      agentNationalid
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAgentWithdrawals = /* GraphQL */ `
  subscription OnCreateAgentWithdrawals {
    onCreateAgentWithdrawals {
      AgentPhone
      Amount
      id
      bankAdmId
      agentNationalid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAgentWithdrawals = /* GraphQL */ `
  subscription OnUpdateAgentWithdrawals {
    onUpdateAgentWithdrawals {
      AgentPhone
      Amount
      id
      bankAdmId
      agentNationalid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAgentWithdrawals = /* GraphQL */ `
  subscription OnDeleteAgentWithdrawals {
    onDeleteAgentWithdrawals {
      AgentPhone
      Amount
      id
      bankAdmId
      agentNationalid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSAgent = /* GraphQL */ `
  subscription OnCreateSAgent {
    onCreateSAgent {
      id
      agentNnationalid
      name
      phonecontact
      pw
      TtlEarnings
      email
      saBalance
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSAgent = /* GraphQL */ `
  subscription OnUpdateSAgent {
    onUpdateSAgent {
      id
      agentNnationalid
      name
      phonecontact
      pw
      TtlEarnings
      email
      saBalance
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSAgent = /* GraphQL */ `
  subscription OnDeleteSAgent {
    onDeleteSAgent {
      id
      agentNnationalid
      name
      phonecontact
      pw
      TtlEarnings
      email
      saBalance
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSAgentWithdrawals = /* GraphQL */ `
  subscription OnCreateSAgentWithdrawals($owner: String) {
    onCreateSAgentWithdrawals(owner: $owner) {
      id
      sagentphone
      sagentNatId
      sagentregno
      amount
      bankAdmid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSAgentWithdrawals = /* GraphQL */ `
  subscription OnUpdateSAgentWithdrawals($owner: String) {
    onUpdateSAgentWithdrawals(owner: $owner) {
      id
      sagentphone
      sagentNatId
      sagentregno
      amount
      bankAdmid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSAgentWithdrawals = /* GraphQL */ `
  subscription OnDeleteSAgentWithdrawals($owner: String) {
    onDeleteSAgentWithdrawals(owner: $owner) {
      id
      sagentphone
      sagentNatId
      sagentregno
      amount
      bankAdmid
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBankAdmin = /* GraphQL */ `
  subscription OnCreateBankAdmin {
    onCreateBankAdmin {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBankAdmin = /* GraphQL */ `
  subscription OnUpdateBankAdmin {
    onUpdateBankAdmin {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBankAdmin = /* GraphQL */ `
  subscription OnDeleteBankAdmin {
    onDeleteBankAdmin {
      nationalid
      name
      phonecontact
      TtlEarnings
      pw
      BankAdmBal
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBankAdmWithdrawals = /* GraphQL */ `
  subscription OnCreateBankAdmWithdrawals($owner: String) {
    onCreateBankAdmWithdrawals(owner: $owner) {
      id
      phoneContact
      bankAdmNatId
      amount
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBankAdmWithdrawals = /* GraphQL */ `
  subscription OnUpdateBankAdmWithdrawals($owner: String) {
    onUpdateBankAdmWithdrawals(owner: $owner) {
      id
      phoneContact
      bankAdmNatId
      amount
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBankAdmWithdrawals = /* GraphQL */ `
  subscription OnDeleteBankAdmWithdrawals($owner: String) {
    onDeleteBankAdmWithdrawals(owner: $owner) {
      id
      phoneContact
      bankAdmNatId
      amount
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAdvocate = /* GraphQL */ `
  subscription OnCreateAdvocate {
    onCreateAdvocate {
      nationalid
      name
      phonecontact
      advregnu
      TtlEarnings
      advBal
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAdvocate = /* GraphQL */ `
  subscription OnUpdateAdvocate {
    onUpdateAdvocate {
      nationalid
      name
      phonecontact
      advregnu
      TtlEarnings
      advBal
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAdvocate = /* GraphQL */ `
  subscription OnDeleteAdvocate {
    onDeleteAdvocate {
      nationalid
      name
      phonecontact
      advregnu
      TtlEarnings
      advBal
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAdvocateWithdrawals = /* GraphQL */ `
  subscription OnCreateAdvocateWithdrawals($owner: String) {
    onCreateAdvocateWithdrawals(owner: $owner) {
      id
      phoneContact
      advregnu
      amount
      advNatId
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAdvocateWithdrawals = /* GraphQL */ `
  subscription OnUpdateAdvocateWithdrawals($owner: String) {
    onUpdateAdvocateWithdrawals(owner: $owner) {
      id
      phoneContact
      advregnu
      amount
      advNatId
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAdvocateWithdrawals = /* GraphQL */ `
  subscription OnDeleteAdvocateWithdrawals($owner: String) {
    onDeleteAdvocateWithdrawals(owner: $owner) {
      id
      phoneContact
      advregnu
      amount
      advNatId
      status
      createdAt
      updatedAt
      owner
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
      pw1
      pw2
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
      pw1
      pw2
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
      pw1
      pw2
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
export const onCreateCovCreditSeller = /* GraphQL */ `
  subscription OnCreateCovCreditSeller {
    onCreateCovCreditSeller {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCovCreditSeller = /* GraphQL */ `
  subscription OnUpdateCovCreditSeller {
    onUpdateCovCreditSeller {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCovCreditSeller = /* GraphQL */ `
  subscription OnDeleteCovCreditSeller {
    onDeleteCovCreditSeller {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGrpMembers = /* GraphQL */ `
  subscription OnCreateGrpMembers {
    onCreateGrpMembers {
      id
      groupContact
      memberContact
      memberNatId
      acBal
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGrpMembers = /* GraphQL */ `
  subscription OnUpdateGrpMembers {
    onUpdateGrpMembers {
      id
      groupContact
      memberContact
      memberNatId
      acBal
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGrpMembers = /* GraphQL */ `
  subscription OnDeleteGrpMembers {
    onDeleteGrpMembers {
      id
      groupContact
      memberContact
      memberNatId
      acBal
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCvrdGroupLoans = /* GraphQL */ `
  subscription OnCreateCvrdGroupLoans {
    onCreateCvrdGroupLoans {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCvrdGroupLoans = /* GraphQL */ `
  subscription OnUpdateCvrdGroupLoans {
    onUpdateCvrdGroupLoans {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCvrdGroupLoans = /* GraphQL */ `
  subscription OnDeleteCvrdGroupLoans {
    onDeleteCvrdGroupLoans {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGroupNonLoans = /* GraphQL */ `
  subscription OnCreateGroupNonLoans {
    onCreateGroupNonLoans {
      id
      grpContact
      recipientContact
      amountSent
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGroupNonLoans = /* GraphQL */ `
  subscription OnUpdateGroupNonLoans {
    onUpdateGroupNonLoans {
      id
      grpContact
      recipientContact
      amountSent
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGroupNonLoans = /* GraphQL */ `
  subscription OnDeleteGroupNonLoans {
    onDeleteGroupNonLoans {
      id
      grpContact
      recipientContact
      amountSent
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGrpMembersContribution = /* GraphQL */ `
  subscription OnCreateGrpMembersContribution {
    onCreateGrpMembersContribution {
      id
      memberContact
      grpContact
      contriAmount
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGrpMembersContribution = /* GraphQL */ `
  subscription OnUpdateGrpMembersContribution {
    onUpdateGrpMembersContribution {
      id
      memberContact
      grpContact
      contriAmount
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGrpMembersContribution = /* GraphQL */ `
  subscription OnDeleteGrpMembersContribution {
    onDeleteGrpMembersContribution {
      id
      memberContact
      grpContact
      contriAmount
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAdvertisedSingleMemberLoans = /* GraphQL */ `
  subscription OnCreateAdvertisedSingleMemberLoans {
    onCreateAdvertisedSingleMemberLoans {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAdvertisedSingleMemberLoans = /* GraphQL */ `
  subscription OnUpdateAdvertisedSingleMemberLoans {
    onUpdateAdvertisedSingleMemberLoans {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAdvertisedSingleMemberLoans = /* GraphQL */ `
  subscription OnDeleteAdvertisedSingleMemberLoans {
    onDeleteAdvertisedSingleMemberLoans {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAdvertisedChamaLoans = /* GraphQL */ `
  subscription OnCreateAdvertisedChamaLoans {
    onCreateAdvertisedChamaLoans {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAdvertisedChamaLoans = /* GraphQL */ `
  subscription OnUpdateAdvertisedChamaLoans {
    onUpdateAdvertisedChamaLoans {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAdvertisedChamaLoans = /* GraphQL */ `
  subscription OnDeleteAdvertisedChamaLoans {
    onDeleteAdvertisedChamaLoans {
      id
      nameOfLoaner
      maximum
      contact
      repaymentPeriod
      interest
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePaidMultipleAds = /* GraphQL */ `
  subscription OnCreatePaidMultipleAds {
    onCreatePaidMultipleAds {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePaidMultipleAds = /* GraphQL */ `
  subscription OnUpdatePaidMultipleAds {
    onUpdatePaidMultipleAds {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePaidMultipleAds = /* GraphQL */ `
  subscription OnDeletePaidMultipleAds {
    onDeletePaidMultipleAds {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFreeBizAds = /* GraphQL */ `
  subscription OnCreateFreeBizAds {
    onCreateFreeBizAds {
      id
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFreeBizAds = /* GraphQL */ `
  subscription OnUpdateFreeBizAds {
    onUpdateFreeBizAds {
      id
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFreeBizAds = /* GraphQL */ `
  subscription OnDeleteFreeBizAds {
    onDeleteFreeBizAds {
      id
      item
      nameOfSeller
      buzType
      nearByTown
      contact
      description
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
