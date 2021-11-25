/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSMAccount = /* GraphQL */ `
  query GetSMAccount($phonecontact: String!) {
    getSMAccount(phonecontact: $phonecontact) {
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
export const listSMAccounts = /* GraphQL */ `
  query ListSMAccounts(
    $phonecontact: String
    $filter: ModelSMAccountFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSMAccounts(
      phonecontact: $phonecontact
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
        ttlNonLonsRecChm
        ttlNonLonsSentChm
        MaxTymsBL
        MaxTymsIHvBL
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
      nextToken
    }
  }
`;
export const getSMLoansCovered = /* GraphQL */ `
  query GetSMLoansCovered($id: ID!) {
    getSMLoansCovered(id: $id) {
      id
      loaneeid
      loaneePhn
      loanerPhn
      loanerId
      amountgiven
      amountexpected
      amountExpectedBackWthClrnc
      amountrepaid
      lonBala
      loaneename
      loanername
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
        loaneePhn
        loanerPhn
        loanerId
        amountgiven
        amountexpected
        amountExpectedBackWthClrnc
        amountrepaid
        lonBala
        loaneename
        loanername
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
      loaneePhn
      loanerPhn
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
        loaneePhn
        loanerPhn
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
export const listNonLoanss = /* GraphQL */ `
  query ListNonLoanss(
    $filter: ModelNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonLoanss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAgent = /* GraphQL */ `
  query GetAgent($phonecontact: String!) {
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
      town
      MFNWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const listAgents = /* GraphQL */ `
  query ListAgents(
    $phonecontact: String
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
        town
        MFNWithdrwlFee
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
      agentName
      userName
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
        agentName
        userName
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
  query GetSAgent($saPhoneContact: String!) {
    getSAgent(saPhoneContact: $saPhoneContact) {
      saPhoneContact
      saNationalid
      name
      pw
      TtlEarnings
      actvMFNdog
      InctvMFNdog
      email
      saBalance
      status
      owner
      MFKWithdrwlFee
      createdAt
      updatedAt
    }
  }
`;
export const listSAgents = /* GraphQL */ `
  query ListSAgents(
    $saPhoneContact: String
    $filter: ModelSAgentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSAgents(
      saPhoneContact: $saPhoneContact
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        saPhoneContact
        saNationalid
        name
        pw
        TtlEarnings
        actvMFNdog
        InctvMFNdog
        email
        saBalance
        status
        owner
        MFKWithdrwlFee
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
        maxInterestCredSllr
        maxInterestGrp
        maxMFNdogos
        maxBLs
        owner
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
      nextToken
    }
  }
`;
export const getGrpMembers = /* GraphQL */ `
  query GetGrpMembers($id: ID!) {
    getGrpMembers(id: $id) {
      id
      groupContact
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
      nextToken
    }
  }
`;
export const getCvrdGroupLoans = /* GraphQL */ `
  query GetCvrdGroupLoans($id: ID!) {
    getCvrdGroupLoans(id: $id) {
      id
      grpContact
      loaneePhn
      repaymentPeriod
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
        loaneePhn
        repaymentPeriod
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
      loaneePhn
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
        loaneePhn
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
      nextToken
    }
  }
`;
export const getGroupNonLoans = /* GraphQL */ `
  query GetGroupNonLoans($id: ID!) {
    getGroupNonLoans(id: $id) {
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
      nextToken
    }
  }
`;
export const getGrpMembersContribution = /* GraphQL */ `
  query GetGrpMembersContribution($id: ID!) {
    getGrpMembersContribution(id: $id) {
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
      nextToken
    }
  }
`;
export const vwMyDebts = /* GraphQL */ `
  query VwMyDebts(
    $loaneePhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyDebts(
      loaneePhn: $loaneePhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loaneePhn
        loanerPhn
        loanerId
        amountgiven
        amountexpected
        amountExpectedBackWthClrnc
        amountrepaid
        lonBala
        loaneename
        loanername
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
export const vwMyDebtors = /* GraphQL */ `
  query VwMyDebtors(
    $loanerPhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyDebtors(
      loanerPhn: $loanerPhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loaneePhn
        loanerPhn
        loanerId
        amountgiven
        amountexpected
        amountExpectedBackWthClrnc
        amountrepaid
        lonBala
        loaneename
        loanername
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
export const advVwLnsClient = /* GraphQL */ `
  query AdvVwLnsClient(
    $advregnu: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AdvVwLnsClient(
      advregnu: $advregnu
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneeid
        loaneePhn
        loanerPhn
        loanerId
        amountgiven
        amountexpected
        amountExpectedBackWthClrnc
        amountrepaid
        lonBala
        loaneename
        loanername
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
export const vwMyDebtss = /* GraphQL */ `
  query VwMyDebtss(
    $loaneePhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansNonCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyDebtss(
      loaneePhn: $loaneePhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneePhn
        loanerPhn
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
export const vwMyDebtorss = /* GraphQL */ `
  query VwMyDebtorss(
    $loanerPhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansNonCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyDebtorss(
      loanerPhn: $loanerPhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loaneePhn
        loanerPhn
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
export const vwMyRecMny = /* GraphQL */ `
  query VwMyRecMny(
    $recPhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyRecMny(
      recPhn: $recPhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwMySntMny = /* GraphQL */ `
  query VwMySntMny(
    $senderPhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMySntMny(
      senderPhn: $senderPhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const mFKVwMFN = /* GraphQL */ `
  query MFKVwMFN(
    $sagentregno: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    MFKVwMFN(
      sagentregno: $sagentregno
      createdAt: $createdAt
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
        town
        MFNWithdrwlFee
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwMyBghtFlt = /* GraphQL */ `
  query VwMyBghtFlt(
    $agentphone: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFloatPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyBghtFlt(
      agentphone: $agentphone
      createdAt: $createdAt
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
export const vwMyUsrWthdrwls = /* GraphQL */ `
  query VwMyUsrWthdrwls(
    $withdrawerid: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFloatAddFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyUsrWthdrwls(
      withdrawerid: $withdrawerid
      createdAt: $createdAt
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
      nextToken
    }
  }
`;
export const vwMFNFltAdds = /* GraphQL */ `
  query VwMFNFltAdds(
    $agentPhonecontact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFloatAddFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMFNFltAdds(
      agentPhonecontact: $agentPhonecontact
      createdAt: $createdAt
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
      nextToken
    }
  }
`;
export const vwMFKEarningsFrmWthdrwls = /* GraphQL */ `
  query VwMFKEarningsFrmWthdrwls(
    $saPhone: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFloatAddFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMFKEarningsFrmWthdrwls(
      saPhone: $saPhone
      createdAt: $createdAt
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
      nextToken
    }
  }
`;
export const vwMyUsrDposits = /* GraphQL */ `
  query VwMyUsrDposits(
    $depositerid: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFloatReductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyUsrDposits(
      depositerid: $depositerid
      createdAt: $createdAt
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
        agentName
        userName
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const vwMFNFltDeductns = /* GraphQL */ `
  query VwMFNFltDeductns(
    $agContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFloatReductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMFNFltDeductns(
      agContact: $agContact
      createdAt: $createdAt
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
        agentName
        userName
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const vwMFNWthdrwls = /* GraphQL */ `
  query VwMFNWthdrwls(
    $agentPhone: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMFNWthdrwls(
      agentPhone: $agentPhone
      createdAt: $createdAt
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
export const vwMFKWthdrwls = /* GraphQL */ `
  query VwMFKWthdrwls(
    $saId: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMFKWthdrwls(
      saId: $saId
      createdAt: $createdAt
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
export const vwAdvWthdrwls = /* GraphQL */ `
  query VwAdvWthdrwls(
    $advregnu: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAdvocateWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwAdvWthdrwls(
      advregnu: $advregnu
      createdAt: $createdAt
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
export const vwMySales = /* GraphQL */ `
  query VwMySales(
    $sellerContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMySales(
      sellerContact: $sellerContact
      createdAt: $createdAt
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
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwMyCrdBys = /* GraphQL */ `
  query VwMyCrdBys(
    $buyerContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyCrdBys(
      buyerContact: $buyerContact
      createdAt: $createdAt
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
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwAdvCrdSls = /* GraphQL */ `
  query VwAdvCrdSls(
    $advregnu: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwAdvCrdSls(
      advregnu: $advregnu
      createdAt: $createdAt
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
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwMySaless = /* GraphQL */ `
  query VwMySaless(
    $sellerContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMySaless(
      sellerContact: $sellerContact
      createdAt: $createdAt
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
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwMyCrdByss = /* GraphQL */ `
  query VwMyCrdByss(
    $buyerContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyCrdByss(
      buyerContact: $buyerContact
      createdAt: $createdAt
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
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwChamaMembers = /* GraphQL */ `
  query VwChamaMembers(
    $groupContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwChamaMembers(
      groupContact: $groupContact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupContact
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
      nextToken
    }
  }
`;
export const vwMyChamas = /* GraphQL */ `
  query VwMyChamas(
    $memberContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyChamas(
      memberContact: $memberContact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupContact
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
      nextToken
    }
  }
`;
export const vwChamaMemberss = /* GraphQL */ `
  query VwChamaMemberss(
    $grpContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwChamaMemberss(
      grpContact: $grpContact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneePhn
        repaymentPeriod
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwMyChamass = /* GraphQL */ `
  query VwMyChamass(
    $loaneePhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyChamass(
      loaneePhn: $loaneePhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneePhn
        repaymentPeriod
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwChmLnClients = /* GraphQL */ `
  query VwChmLnClients(
    $advRegNu: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwChmLnClients(
      advRegNu: $advRegNu
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneePhn
        repaymentPeriod
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwChamaMembersss = /* GraphQL */ `
  query VwChamaMembersss(
    $grpContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwChamaMembersss(
      grpContact: $grpContact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneePhn
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
      nextToken
    }
  }
`;
export const vwMyChamasss = /* GraphQL */ `
  query VwMyChamasss(
    $loaneePhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyChamasss(
      loaneePhn: $loaneePhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grpContact
        loaneePhn
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
      nextToken
    }
  }
`;
export const vwChamaMemberssss = /* GraphQL */ `
  query VwChamaMemberssss(
    $grpContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwChamaMemberssss(
      grpContact: $grpContact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwMyChamassss = /* GraphQL */ `
  query VwMyChamassss(
    $recipientPhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyChamassss(
      recipientPhn: $recipientPhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwChamaMembersssss = /* GraphQL */ `
  query VwChamaMembersssss(
    $grpContact: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwChamaMembersssss(
      grpContact: $grpContact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwMyChamasssss = /* GraphQL */ `
  query VwMyChamasssss(
    $memberPhn: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyChamasssss(
      memberPhn: $memberPhn
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
