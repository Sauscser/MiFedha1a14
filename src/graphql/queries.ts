/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSMAccount = /* GraphQL */ `
  query GetSMAccount($nationalid: ID!) {
    getSMAccount(nationalid: $nationalid) {
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
      MaxTymsBL
      loanStatus
      acStatus
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
export const listSMAccounts = /* GraphQL */ `
  query ListSMAccounts(
    $nationalid: ID
    $filter: ModelSMAccountFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSMAccounts(
      nationalid: $nationalid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        MaxTymsBL
        loanStatus
        acStatus
        blStatus
        loanLimit
        nonLonLimit
        withdrawalLimit
        depositLimit
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSMLoansCovered = /* GraphQL */ `
  query GetSMLoansCovered($id: ID!) {
    getSMLoansCovered(id: $id) {
      id
      loaneeid
      loanerId
      amountgiven
      amountexpected
      amountrepaid
      repaymentPeriod
      advregnu
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listSMLoansCovereds = /* GraphQL */ `
  query ListSMLoansCovereds(
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSMLoansCovereds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        advregnu
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSMLoansNonCovered = /* GraphQL */ `
  query GetSMLoansNonCovered($id: ID!) {
    getSMLoansNonCovered(id: $id) {
      id
      loaneeid
      loanerId
      amountgiven
      amountexpected
      amountrepaid
      repaymentPeriod
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listSMLoansNonCovereds = /* GraphQL */ `
  query ListSMLoansNonCovereds(
    $filter: ModelSMLoansNonCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSMLoansNonCovereds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNonLoans = /* GraphQL */ `
  query GetNonLoans($id: ID!) {
    getNonLoans(id: $id) {
      id
      senderID
      recId
      amount
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listNonLoanss = /* GraphQL */ `
  query ListNonLoanss(
    $filter: ModelNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonLoanss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderID
        recId
        amount
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAgent = /* GraphQL */ `
  query GetAgent($phonecontact: ID!) {
    getAgent(phonecontact: $phonecontact) {
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
export const listAgents = /* GraphQL */ `
  query ListAgents(
    $phonecontact: ID
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAgents(
      phonecontact: $phonecontact
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getFloatPurchase = /* GraphQL */ `
  query GetFloatPurchase($id: ID!) {
    getFloatPurchase(id: $id) {
      id
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
export const listFloatPurchases = /* GraphQL */ `
  query ListFloatPurchases(
    $filter: ModelFloatPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFloatPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        agentphone
        amount
        transactId
        bankAdminID
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFloatAdd = /* GraphQL */ `
  query GetFloatAdd($id: ID!) {
    getFloatAdd(id: $id) {
      id
      withdrawerid
      amount
      agentPhonecontact
      sagentId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listFloatAdds = /* GraphQL */ `
  query ListFloatAdds(
    $filter: ModelFloatAddFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFloatAdds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        withdrawerid
        amount
        agentPhonecontact
        sagentId
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFloatReduction = /* GraphQL */ `
  query GetFloatReduction($id: ID!) {
    getFloatReduction(id: $id) {
      id
      amount
      depositerid
      agContact
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFloatReductions = /* GraphQL */ `
  query ListFloatReductions(
    $filter: ModelFloatReductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFloatReductions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        depositerid
        agContact
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAgentWithdrawals = /* GraphQL */ `
  query GetAgentWithdrawals($id: ID!) {
    getAgentWithdrawals(id: $id) {
      id
      agentPhone
      bankAdminId
      Amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listAgentWithdrawalss = /* GraphQL */ `
  query ListAgentWithdrawalss(
    $filter: ModelAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgentWithdrawalss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        agentPhone
        bankAdminId
        Amount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSAgent = /* GraphQL */ `
  query GetSAgent($id: ID!) {
    getSAgent(id: $id) {
      id
      saNationalid
      name
      phonecontact
      pw
      TtlEarnings
      actvMFNdog
      InctvMFNdog
      email
      saBalance
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listSAgents = /* GraphQL */ `
  query ListSAgents(
    $filter: ModelSAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        saNationalid
        name
        phonecontact
        pw
        TtlEarnings
        actvMFNdog
        InctvMFNdog
        email
        saBalance
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSAgentWithdrawals = /* GraphQL */ `
  query GetSAgentWithdrawals($id: ID!) {
    getSAgentWithdrawals(id: $id) {
      id
      saId
      amount
      bankAdmnId
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listSAgentWithdrawalss = /* GraphQL */ `
  query ListSAgentWithdrawalss(
    $filter: ModelSAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSAgentWithdrawalss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        saId
        amount
        bankAdmnId
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBankAdmin = /* GraphQL */ `
  query GetBankAdmin($nationalid: ID!) {
    getBankAdmin(nationalid: $nationalid) {
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
export const listBankAdmins = /* GraphQL */ `
  query ListBankAdmins(
    $nationalid: ID
    $filter: ModelBankAdminFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBankAdmins(
      nationalid: $nationalid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBankAdmWithdrawals = /* GraphQL */ `
  query GetBankAdmWithdrawals($id: ID!) {
    getBankAdmWithdrawals(id: $id) {
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
export const listBankAdmWithdrawalss = /* GraphQL */ `
  query ListBankAdmWithdrawalss(
    $filter: ModelBankAdmWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBankAdmWithdrawalss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bankAdmNatId
        amount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdvocate = /* GraphQL */ `
  query GetAdvocate($advregnu: ID!) {
    getAdvocate(advregnu: $advregnu) {
      advregnu
      nationalid
      pwd
      name
      phonecontact
      TtlEarnings
      advBal
      email
      officeLoc
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listAdvocates = /* GraphQL */ `
  query ListAdvocates(
    $advregnu: ID
    $filter: ModelAdvocateFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAdvocates(
      advregnu: $advregnu
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        advregnu
        nationalid
        pwd
        name
        phonecontact
        TtlEarnings
        advBal
        email
        officeLoc
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdvocateWithdrawals = /* GraphQL */ `
  query GetAdvocateWithdrawals($id: ID!) {
    getAdvocateWithdrawals(id: $id) {
      id
      bankAdmnId
      advregnu
      amount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listAdvocateWithdrawalss = /* GraphQL */ `
  query ListAdvocateWithdrawalss(
    $filter: ModelAdvocateWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdvocateWithdrawalss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bankAdmnId
        advregnu
        amount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($AdminId: String!) {
    getCompany(AdminId: $AdminId) {
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
      sawithdrawalFee
      advuserwithdrawalFee
      bankAdmuserwithdrawalFee
      userLoanTransferFee
      userTransferFee
      userClearanceFee
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
      maxInterestCredSllr
      maxInterestGrp
      totalLnsRecovered
      createdAt
      updatedAt
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $AdminId: String
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanys(
      AdminId: $AdminId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        sawithdrawalFee
        advuserwithdrawalFee
        bankAdmuserwithdrawalFee
        userLoanTransferFee
        userTransferFee
        userClearanceFee
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
        maxInterestCredSllr
        maxInterestGrp
        totalLnsRecovered
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCovCreditSeller = /* GraphQL */ `
  query GetCovCreditSeller($id: ID!) {
    getCovCreditSeller(id: $id) {
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
      description
      status
      advregnu
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCovCreditSellers = /* GraphQL */ `
  query ListCovCreditSellers(
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCovCreditSellers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        description
        status
        advregnu
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNonCovCreditSeller = /* GraphQL */ `
  query GetNonCovCreditSeller($id: ID!) {
    getNonCovCreditSeller(id: $id) {
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
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listNonCovCreditSellers = /* GraphQL */ `
  query ListNonCovCreditSellers(
    $filter: ModelNonCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonCovCreditSellers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($grpContact: ID!) {
    getGroup(grpContact: $grpContact) {
      grpContact
      signitoryContact
      SignitoryNatid
      signitoryName
      grpName
      signitoryPW
      grpEmail
      grpBal
      ttlGrpMembers
      description
      ttlNonLonsRecChm
      ttlNonLonsSentChm
      ttlDpst
      ttlWthdrwn
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $grpContact: ID
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroups(
      grpContact: $grpContact
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        grpContact
        signitoryContact
        SignitoryNatid
        signitoryName
        grpName
        signitoryPW
        grpEmail
        grpBal
        ttlGrpMembers
        description
        ttlNonLonsRecChm
        ttlNonLonsSentChm
        ttlDpst
        ttlWthdrwn
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
      nextToken
    }
  }
`;
export const getGrpMembers = /* GraphQL */ `
  query GetGrpMembers($id: ID!) {
    getGrpMembers(id: $id) {
      id
      groupContact
      memberContact
      memberNatId
      acBal
      AcStatus
      loanStatus
      blStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listGrpMemberss = /* GraphQL */ `
  query ListGrpMemberss(
    $filter: ModelGrpMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrpMemberss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupContact
        memberContact
        memberNatId
        acBal
        AcStatus
        loanStatus
        blStatus
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCvrdGroupLoans = /* GraphQL */ `
  query GetCvrdGroupLoans($id: ID!) {
    getCvrdGroupLoans(id: $id) {
      id
      grpContact
      loaneeID
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountRepaid
      description
      advRegNu
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCvrdGroupLoanss = /* GraphQL */ `
  query ListCvrdGroupLoanss(
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCvrdGroupLoanss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        advRegNu
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNonCvrdGroupLoans = /* GraphQL */ `
  query GetNonCvrdGroupLoans($id: ID!) {
    getNonCvrdGroupLoans(id: $id) {
      id
      grpContact
      loaneeID
      repaymentPeriod
      amountGiven
      amountExpectedBack
      amountRepaid
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listNonCvrdGroupLoanss = /* GraphQL */ `
  query ListNonCvrdGroupLoanss(
    $filter: ModelNonCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonCvrdGroupLoanss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupNonLoans = /* GraphQL */ `
  query GetGroupNonLoans($id: ID!) {
    getGroupNonLoans(id: $id) {
      id
      grpContact
      recipientId
      amountSent
      description
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listGroupNonLoanss = /* GraphQL */ `
  query ListGroupNonLoanss(
    $filter: ModelGroupNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupNonLoanss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        grpContact
        recipientId
        amountSent
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGrpMembersContribution = /* GraphQL */ `
  query GetGrpMembersContribution($id: ID!) {
    getGrpMembersContribution(id: $id) {
      id
      memberId
      grpContact
      contriAmount
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listGrpMembersContributions = /* GraphQL */ `
  query ListGrpMembersContributions(
    $filter: ModelGrpMembersContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrpMembersContributions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        grpContact
        contriAmount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkUserrrBalance = /* GraphQL */ `
  query CheckUserrrBalance(
    $phonecontact: String
    $pw: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkUserrrBalance(
      phonecontact: $phonecontact
      pw: $pw
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        MaxTymsBL
        loanStatus
        acStatus
        blStatus
        loanLimit
        nonLonLimit
        withdrawalLimit
        depositLimit
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const accessingPersonalAc = /* GraphQL */ `
  query AccessingPersonalAc(
    $name: String
    $phonecontact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AccessingPersonalAc(
      name: $name
      phonecontact: $phonecontact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        MaxTymsBL
        loanStatus
        acStatus
        blStatus
        loanLimit
        nonLonLimit
        withdrawalLimit
        depositLimit
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMyDetors = /* GraphQL */ `
  query CheckMyDetors(
    $loanerId: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMyDetors(
      loanerId: $loanerId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        advregnu
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMyLenders = /* GraphQL */ `
  query CheckMyLenders(
    $loaneeid: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMyLenders(
      loaneeid: $loaneeid
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        advregnu
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const confrmMyLoaneeeee = /* GraphQL */ `
  query ConfrmMyLoaneeeee(
    $loanerId: String
    $loaneeidStatus: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    confrmMyLoaneeeee(
      loanerId: $loanerId
      loaneeidStatus: $loaneeidStatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        advregnu
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkbyAdvNLnar = /* GraphQL */ `
  query CheckbyAdvNLnar(
    $advregnu: String
    $loanerId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyAdvNLnar(
      advregnu: $advregnu
      loanerId: $loanerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        advregnu
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkbyAdvNLnars = /* GraphQL */ `
  query CheckbyAdvNLnars(
    $advregnu: String
    $loanerIdLoaneeid: ModelSMLoansCoveredSearchAdvLoanerCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyAdvNLnars(
      advregnu: $advregnu
      loanerIdLoaneeid: $loanerIdLoaneeid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        advregnu
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const chckbyAdvNLnee = /* GraphQL */ `
  query ChckbyAdvNLnee(
    $advregnu: String
    $loaneeid: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chckbyAdvNLnee(
      advregnu: $advregnu
      loaneeid: $loaneeid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        advregnu
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMyDetorss = /* GraphQL */ `
  query CheckMyDetorss(
    $loanerId: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansNonCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMyDetorss(
      loanerId: $loanerId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMyLenderss = /* GraphQL */ `
  query CheckMyLenderss(
    $loaneeid: ID
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansNonCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMyLenderss(
      loaneeid: $loaneeid
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const confrmMyLoaneeeees = /* GraphQL */ `
  query ConfrmMyLoaneeeees(
    $loanerId: String
    $loaneeidStatus: ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansNonCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    confrmMyLoaneeeees(
      loanerId: $loanerId
      loaneeidStatus: $loaneeidStatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loanerId
        amountgiven
        amountexpected
        amountrepaid
        repaymentPeriod
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkNonLonsbySender = /* GraphQL */ `
  query CheckNonLonsbySender(
    $senderID: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkNonLonsbySender(
      senderID: $senderID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderID
        recId
        amount
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkReceivedNonLns = /* GraphQL */ `
  query CheckReceivedNonLns(
    $recId: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkReceivedNonLns(
      recId: $recId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderID
        recId
        amount
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkBySenderReciever = /* GraphQL */ `
  query CheckBySenderReciever(
    $senderID: String
    $recId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkBySenderReciever(
      senderID: $senderID
      recId: $recId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderID
        recId
        amount
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const updtAgentBalbyUser = /* GraphQL */ `
  query UpdtAgentBalbyUser(
    $name: String
    $pw: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    updtAgentBalbyUser(
      name: $name
      pw: $pw
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchMyAgents = /* GraphQL */ `
  query SearchMyAgents(
    $sagentregno: String
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    searchMyAgents(
      sagentregno: $sagentregno
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const lstAgentFltPrchasss = /* GraphQL */ `
  query LstAgentFltPrchasss(
    $agentphone: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstAgentFltPrchasss(
      agentphone: $agentphone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        agentphone
        amount
        transactId
        bankAdminID
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lstBankAdmTransaaaaccttions = /* GraphQL */ `
  query LstBankAdmTransaaaaccttions(
    $bankAdminID: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstBankAdmTransaaaaccttions(
      bankAdminID: $bankAdminID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        agentphone
        amount
        transactId
        bankAdminID
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const createWythdrawals = /* GraphQL */ `
  query CreateWythdrawals(
    $agentPhonecontact: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatAddFilterInput
    $limit: Int
    $nextToken: String
  ) {
    createWythdrawals(
      agentPhonecontact: $agentPhonecontact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        withdrawerid
        amount
        agentPhonecontact
        sagentId
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const createWythdrawalsss = /* GraphQL */ `
  query CreateWythdrawalsss(
    $withdrawerid: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatAddFilterInput
    $limit: Int
    $nextToken: String
  ) {
    createWythdrawalsss(
      withdrawerid: $withdrawerid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        withdrawerid
        amount
        agentPhonecontact
        sagentId
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const readSAWithdrwls = /* GraphQL */ `
  query ReadSAWithdrwls(
    $sagentId: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatAddFilterInput
    $limit: Int
    $nextToken: String
  ) {
    readSAWithdrwls(
      sagentId: $sagentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        withdrawerid
        amount
        agentPhonecontact
        sagentId
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const creatFltDeduc = /* GraphQL */ `
  query CreatFltDeduc(
    $agContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatReductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    creatFltDeduc(
      agContact: $agContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        depositerid
        agContact
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const reeeadAmtDpstd = /* GraphQL */ `
  query ReeeadAmtDpstd(
    $depositerid: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatReductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reeeadAmtDpstd(
      depositerid: $depositerid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        depositerid
        agContact
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const lstAgentWithdrowals = /* GraphQL */ `
  query LstAgentWithdrowals(
    $agentPhone: String
    $sortDirection: ModelSortDirection
    $filter: ModelAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstAgentWithdrowals(
      agentPhone: $agentPhone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        agentPhone
        bankAdminId
        Amount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lstBankAdmTransactiooonnns = /* GraphQL */ `
  query LstBankAdmTransactiooonnns(
    $bankAdminId: String
    $sortDirection: ModelSortDirection
    $filter: ModelAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstBankAdmTransactiooonnns(
      bankAdminId: $bankAdminId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        agentPhone
        bankAdminId
        Amount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkingSA = /* GraphQL */ `
  query CheckingSA(
    $saNationalid: String
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CheckingSA(
      saNationalid: $saNationalid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        saNationalid
        name
        phonecontact
        pw
        TtlEarnings
        actvMFNdog
        InctvMFNdog
        email
        saBalance
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lstSAWithdrlls = /* GraphQL */ `
  query LstSAWithdrlls(
    $saId: String
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstSAWithdrlls(
      saId: $saId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        saId
        amount
        bankAdmnId
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lstBankAdmTranssactions = /* GraphQL */ `
  query LstBankAdmTranssactions(
    $bankAdmnId: String
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstBankAdmTranssactions(
      bankAdmnId: $bankAdmnId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        saId
        amount
        bankAdmnId
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkBankAdmWithdrawals = /* GraphQL */ `
  query CheckBankAdmWithdrawals(
    $bankAdmNatId: String
    $sortDirection: ModelSortDirection
    $filter: ModelBankAdmWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkBankAdmWithdrawals(
      bankAdmNatId: $bankAdmNatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bankAdmNatId
        amount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkAdvocateWithdrawalsss = /* GraphQL */ `
  query CheckAdvocateWithdrawalsss(
    $advregnu: String
    $sortDirection: ModelSortDirection
    $filter: ModelAdvocateWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkAdvocateWithdrawalsss(
      advregnu: $advregnu
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bankAdmnId
        advregnu
        amount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkAdvocateWithdrawalsssAdmin = /* GraphQL */ `
  query CheckAdvocateWithdrawalsssAdmin(
    $bankAdmnId: String
    $sortDirection: ModelSortDirection
    $filter: ModelAdvocateWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkAdvocateWithdrawalsssAdmin(
      bankAdmnId: $bankAdmnId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bankAdmnId
        advregnu
        amount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkbyComppw = /* GraphQL */ `
  query CheckbyComppw(
    $pw1: String
    $pw2: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyComppw(
      pw1: $pw1
      pw2: $pw2
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        sawithdrawalFee
        advuserwithdrawalFee
        bankAdmuserwithdrawalFee
        userLoanTransferFee
        userTransferFee
        userClearanceFee
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
        maxInterestCredSllr
        maxInterestGrp
        totalLnsRecovered
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMyNonCovrrrrrrrrdSales = /* GraphQL */ `
  query CheckMyNonCovrrrrrrrrdSales(
    $sellerID: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMyNonCovrrrrrrrrdSales(
      sellerID: $sellerID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        description
        status
        advregnu
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMysalessDebts = /* GraphQL */ `
  query CheckMysalessDebts(
    $buyerID: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMysalessDebts(
      buyerID: $buyerID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        description
        status
        advregnu
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkbyAdvNCredddSseller = /* GraphQL */ `
  query CheckbyAdvNCredddSseller(
    $advregnu: String
    $sellerContactBuyerContact: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyAdvNCredddSseller(
      advregnu: $advregnu
      sellerContactBuyerContact: $sellerContactBuyerContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        description
        status
        advregnu
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMyNonCovrrrrrrrrdSaless = /* GraphQL */ `
  query CheckMyNonCovrrrrrrrrdSaless(
    $sellerID: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMyNonCovrrrrrrrrdSaless(
      sellerID: $sellerID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMysalessDebtss = /* GraphQL */ `
  query CheckMysalessDebtss(
    $buyerID: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMysalessDebtss(
      buyerID: $buyerID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkbyAdvNCredddSsellers = /* GraphQL */ `
  query CheckbyAdvNCredddSsellers(
    $sellerContact: String
    $buyerContact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyAdvNCredddSsellers(
      sellerContact: $sellerContact
      buyerContact: $buyerContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkGrpsICrtd = /* GraphQL */ `
  query CheckGrpsICrtd(
    $SignitoryNatid: String
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkGrpsICrtd(
      SignitoryNatid: $SignitoryNatid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        grpContact
        signitoryContact
        SignitoryNatid
        signitoryName
        grpName
        signitoryPW
        grpEmail
        grpBal
        ttlGrpMembers
        description
        ttlNonLonsRecChm
        ttlNonLonsSentChm
        ttlDpst
        ttlWthdrwn
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
      nextToken
    }
  }
`;
export const checkMygroupMembers = /* GraphQL */ `
  query CheckMygroupMembers(
    $groupContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMygroupMembers(
      groupContact: $groupContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupContact
        memberContact
        memberNatId
        acBal
        AcStatus
        loanStatus
        blStatus
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMygrps = /* GraphQL */ `
  query CheckMygrps(
    $memberNatId: String
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMygrps(
      memberNatId: $memberNatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupContact
        memberContact
        memberNatId
        acBal
        AcStatus
        loanStatus
        blStatus
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cheeeeckGrpCovrdLonDflts = /* GraphQL */ `
  query CheeeeckGrpCovrdLonDflts(
    $grpContact: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cheeeeckGrpCovrdLonDflts(
      grpContact: $grpContact
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        advRegNu
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const updatAmaounntrepaid = /* GraphQL */ `
  query UpdatAmaounntrepaid(
    $loaneeID: String
    $grpContact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    updatAmaounntrepaid(
      loaneeID: $loaneeID
      grpContact: $grpContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        advRegNu
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const clearloaneriiiiifongoing = /* GraphQL */ `
  query Clearloaneriiiiifongoing(
    $loaneeID: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clearloaneriiiiifongoing(
      loaneeID: $loaneeID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        advRegNu
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkbyAdvNGrrrpp = /* GraphQL */ `
  query CheckbyAdvNGrrrpp(
    $advRegNu: String
    $grpContact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyAdvNGrrrpp(
      advRegNu: $advRegNu
      grpContact: $grpContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        advRegNu
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkbyAdvNGrrrppNLonie = /* GraphQL */ `
  query CheckbyAdvNGrrrppNLonie(
    $advRegNu: String
    $grpContactLoaneeID: ModelCvrdGroupLoansSearchAdvGrpCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyAdvNGrrrppNLonie(
      advRegNu: $advRegNu
      grpContactLoaneeID: $grpContactLoaneeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        advRegNu
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkbyAdvNLoaneeeeeei = /* GraphQL */ `
  query CheckbyAdvNLoaneeeeeei(
    $advRegNu: String
    $loaneeID: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyAdvNLoaneeeeeei(
      advRegNu: $advRegNu
      loaneeID: $loaneeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        advRegNu
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cheeeeckGrpCovrdLonDfltss = /* GraphQL */ `
  query CheeeeckGrpCovrdLonDfltss(
    $grpContact: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cheeeeckGrpCovrdLonDfltss(
      grpContact: $grpContact
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const updatAmaounntrepaids = /* GraphQL */ `
  query UpdatAmaounntrepaids(
    $loaneeID: String
    $grpContact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    updatAmaounntrepaids(
      loaneeID: $loaneeID
      grpContact: $grpContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const clearloaneriiiiifongoings = /* GraphQL */ `
  query Clearloaneriiiiifongoings(
    $loaneeID: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clearloaneriiiiifongoings(
      loaneeID: $loaneeID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneeID
        repaymentPeriod
        amountGiven
        amountExpectedBack
        amountRepaid
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cheeeckGrpMemberNonLoansee = /* GraphQL */ `
  query CheeeckGrpMemberNonLoansee(
    $recipientId: String
    $sortDirection: ModelSortDirection
    $filter: ModelGroupNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cheeeckGrpMemberNonLoansee(
      recipientId: $recipientId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        recipientId
        amountSent
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cheeeckGrpNonLoanse = /* GraphQL */ `
  query CheeeckGrpNonLoanse(
    $grpContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelGroupNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cheeeckGrpNonLoanse(
      grpContact: $grpContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        recipientId
        amountSent
        description
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkAllMyGrpsContri = /* GraphQL */ `
  query CheckAllMyGrpsContri(
    $memberId: String
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkAllMyGrpsContri(
      memberId: $memberId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        grpContact
        contriAmount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkAllGrpContributorssss = /* GraphQL */ `
  query CheckAllGrpContributorssss(
    $grpContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkAllGrpContributorssss(
      grpContact: $grpContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        grpContact
        contriAmount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMmbrContrInAGrpp = /* GraphQL */ `
  query CheckMmbrContrInAGrpp(
    $grpContact: String
    $memberId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMmbrContrInAGrpp(
      grpContact: $grpContact
      memberId: $memberId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        grpContact
        contriAmount
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
