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
      nextToken
    }
  }
`;
export const getSMNonLoans = /* GraphQL */ `
  query GetSMNonLoans($id: ID!) {
    getSMNonLoans(id: $id) {
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
export const listSMNonLoans = /* GraphQL */ `
  query ListSMNonLoans(
    $filter: ModelSMNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSMNonLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nationalid
      bankAdmid
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
        nationalid
        bankAdmid
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
        trnsactionCode
        amount
        agentPhonecontact
        sagentregno
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
        depositerPhn
        phonecontact
        status
        agentNationalid
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAgentWithdrawals = /* GraphQL */ `
  query GetAgentWithdrawals($id: ID!) {
    getAgentWithdrawals(id: $id) {
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
export const listAgentWithdrawals = /* GraphQL */ `
  query ListAgentWithdrawals(
    $filter: ModelAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgentWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const listSAgentWithdrawals = /* GraphQL */ `
  query ListSAgentWithdrawals(
    $filter: ModelSAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSAgentWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const listBankAdmWithdrawals = /* GraphQL */ `
  query ListBankAdmWithdrawals(
    $filter: ModelBankAdmWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBankAdmWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        phoneContact
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
export const listAdvocateWithdrawals = /* GraphQL */ `
  query ListAdvocateWithdrawals(
    $filter: ModelAdvocateWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdvocateWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $AdminId: String
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanies(
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
        timestamp
        description
        status
        advregnu
        advPhone
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
      status
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listGrpMembers = /* GraphQL */ `
  query ListGrpMembers(
    $filter: ModelGrpMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrpMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCvrdGroupLoans = /* GraphQL */ `
  query GetCvrdGroupLoans($id: ID!) {
    getCvrdGroupLoans(id: $id) {
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
export const listCvrdGroupLoans = /* GraphQL */ `
  query ListCvrdGroupLoans(
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCvrdGroupLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGroupNonLoans = /* GraphQL */ `
  query GetGroupNonLoans($id: ID!) {
    getGroupNonLoans(id: $id) {
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
export const listGroupNonLoans = /* GraphQL */ `
  query ListGroupNonLoans(
    $filter: ModelGroupNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupNonLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGrpMembersContribution = /* GraphQL */ `
  query GetGrpMembersContribution($id: ID!) {
    getGrpMembersContribution(id: $id) {
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
        memberContact
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
export const getAdvertisedSingleMemberLoans = /* GraphQL */ `
  query GetAdvertisedSingleMemberLoans($id: ID!) {
    getAdvertisedSingleMemberLoans(id: $id) {
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
export const listAdvertisedSingleMemberLoans = /* GraphQL */ `
  query ListAdvertisedSingleMemberLoans(
    $filter: ModelAdvertisedSingleMemberLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdvertisedSingleMemberLoans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAdvertisedChamaLoans = /* GraphQL */ `
  query GetAdvertisedChamaLoans($id: ID!) {
    getAdvertisedChamaLoans(id: $id) {
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
export const listAdvertisedChamaLoans = /* GraphQL */ `
  query ListAdvertisedChamaLoans(
    $filter: ModelAdvertisedChamaLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdvertisedChamaLoans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPaidMultipleAds = /* GraphQL */ `
  query GetPaidMultipleAds($id: ID!) {
    getPaidMultipleAds(id: $id) {
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
export const listPaidMultipleAds = /* GraphQL */ `
  query ListPaidMultipleAds(
    $filter: ModelPaidMultipleAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaidMultipleAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFreeBizAds = /* GraphQL */ `
  query GetFreeBizAds($id: ID!) {
    getFreeBizAds(id: $id) {
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
export const listFreeBizAds = /* GraphQL */ `
  query ListFreeBizAds(
    $filter: ModelFreeBizAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFreeBizAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const confrmMyLoaneeeee = /* GraphQL */ `
  query ConfrmMyLoaneeeee(
    $loanercontact: String
    $loaneecontactStatus: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    confrmMyLoaneeeee(
      loanercontact: $loanercontact
      loaneecontactStatus: $loaneecontactStatus
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
      nextToken
    }
  }
`;
export const checkbyAdvNLnar = /* GraphQL */ `
  query CheckbyAdvNLnar(
    $advregnu: String
    $loanercontact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkbyAdvNLnar(
      advregnu: $advregnu
      loanercontact: $loanercontact
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
      nextToken
    }
  }
`;
export const chckbyAdvNLnee = /* GraphQL */ `
  query ChckbyAdvNLnee(
    $advregnu: String
    $loaneecontact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chckbyAdvNLnee(
      advregnu: $advregnu
      loaneecontact: $loaneecontact
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
      nextToken
    }
  }
`;
export const checkSentNonLns = /* GraphQL */ `
  query CheckSentNonLns(
    $senderID: String
    $sortDirection: ModelSortDirection
    $filter: ModelSMNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkSentNonLns(
      senderID: $senderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const checkReceivedNonLns = /* GraphQL */ `
  query CheckReceivedNonLns(
    $receiverphonecontact: String
    $sortDirection: ModelSortDirection
    $filter: ModelSMNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkReceivedNonLns(
      receiverphonecontact: $receiverphonecontact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
    $nationalid: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstAgentFltPrchasss(
      nationalid: $nationalid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const lstBankAdmTransaaaaccttions = /* GraphQL */ `
  query LstBankAdmTransaaaaccttions(
    $bankAdmid: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstBankAdmTransaaaaccttions(
      bankAdmid: $bankAdmid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        trnsactionCode
        amount
        agentPhonecontact
        sagentregno
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
    $sagentregno: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatAddFilterInput
    $limit: Int
    $nextToken: String
  ) {
    readSAWithdrwls(
      sagentregno: $sagentregno
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const creatFltDeduc = /* GraphQL */ `
  query CreatFltDeduc(
    $agentNationalid: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatReductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    creatFltDeduc(
      agentNationalid: $agentNationalid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const creatFltDed = /* GraphQL */ `
  query CreatFltDed(
    $phonecontact: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatReductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    creatFltDed(
      phonecontact: $phonecontact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const reeeadAmtDpstd = /* GraphQL */ `
  query ReeeadAmtDpstd(
    $depositerPhn: String
    $sortDirection: ModelSortDirection
    $filter: ModelFloatReductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reeeadAmtDpstd(
      depositerPhn: $depositerPhn
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const checkAgentWthdrawls = /* GraphQL */ `
  query CheckAgentWthdrawls(
    $agentNationalid: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkAgentWthdrawls(
      agentNationalid: $agentNationalid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const lstAgentWithdrowals = /* GraphQL */ `
  query LstAgentWithdrowals(
    $AgentPhone: String
    $sortDirection: ModelSortDirection
    $filter: ModelAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstAgentWithdrowals(
      AgentPhone: $AgentPhone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const lstBankAdmTransactiooonnns = /* GraphQL */ `
  query LstBankAdmTransactiooonnns(
    $bankAdmId: String
    $sortDirection: ModelSortDirection
    $filter: ModelAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstBankAdmTransactiooonnns(
      bankAdmId: $bankAdmId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const checkingSABalBySA = /* GraphQL */ `
  query CheckingSABalBySA(
    $pw: String
    $saNationalid: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CheckingSABalBySA(
      pw: $pw
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
    $sagentregno: String
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstSAWithdrlls(
      sagentregno: $sagentregno
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const lstSAWithdrllls = /* GraphQL */ `
  query LstSAWithdrllls(
    $sagentNatId: String
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstSAWithdrllls(
      sagentNatId: $sagentNatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const lstBankAdmTranssactions = /* GraphQL */ `
  query LstBankAdmTranssactions(
    $bankAdmid: String
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lstBankAdmTranssactions(
      bankAdmid: $bankAdmid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const geetbankAdmdtlsByNatId = /* GraphQL */ `
  query GeetbankAdmdtlsByNatId(
    $phonecontact: String
    $sortDirection: ModelSortDirection
    $filter: ModelBankAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    geetbankAdmdtlsByNatId(
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
export const checkBankAdmWithdrawals = /* GraphQL */ `
  query CheckBankAdmWithdrawals(
    $phoneContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelBankAdmWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkBankAdmWithdrawals(
      phoneContact: $phoneContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        phoneContact
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
export const checkAdvByNatId = /* GraphQL */ `
  query CheckAdvByNatId(
    $nationalid: String
    $sortDirection: ModelSortDirection
    $filter: ModelAdvocateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkAdvByNatId(
      nationalid: $nationalid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
    $advNatId: String
    $sortDirection: ModelSortDirection
    $filter: ModelAdvocateWithdrawalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkAdvocateWithdrawalsss(
      advNatId: $advNatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const checkMyNonCovrrrrrrrrdSales = /* GraphQL */ `
  query CheckMyNonCovrrrrrrrrdSales(
    $sellerID: String
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMyNonCovrrrrrrrrdSales(
      sellerID: $sellerID
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
        timestamp
        description
        status
        advregnu
        advPhone
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkMyNonCovrrrrrrrrdSaleees = /* GraphQL */ `
  query CheckMyNonCovrrrrrrrrdSaleees(
    $advPhone: String
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMyNonCovrrrrrrrrdSaleees(
      advPhone: $advPhone
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
        timestamp
        description
        status
        advregnu
        advPhone
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const checkOurNonCovrredSMLoans = /* GraphQL */ `
  query CheckOurNonCovrredSMLoans(
    $sellerContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkOurNonCovrredSMLoans(
      sellerContact: $sellerContact
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
        timestamp
        description
        status
        advregnu
        advPhone
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
    $buyerContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMysalessDebts(
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
        timestamp
        description
        status
        advregnu
        advPhone
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
        timestamp
        description
        status
        advregnu
        advPhone
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
    $signitoryContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkGrpsICrtd(
      signitoryContact: $signitoryContact
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
      nextToken
    }
  }
`;
export const checkGrpBal = /* GraphQL */ `
  query CheckGrpBal(
    $signitoryContact: String
    $signitoryPW: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkGrpBal(
      signitoryContact: $signitoryContact
      signitoryPW: $signitoryPW
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
      nextToken
    }
  }
`;
export const checkMygroup = /* GraphQL */ `
  query CheckMygroup(
    $memberContact: String
    $groupContact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMygroup(
      memberContact: $memberContact
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
        status
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
    $memberContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMygrps(
      memberContact: $memberContact
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
        status
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
      nextToken
    }
  }
`;
export const cheeeckGrpNonLoansee = /* GraphQL */ `
  query CheeeckGrpNonLoansee(
    $recipientContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelGroupNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cheeeckGrpNonLoansee(
      recipientContact: $recipientContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        recipientContact
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
    $memberContact: String
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkAllMyGrpsContri(
      memberContact: $memberContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberContact
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
        memberContact
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
    $memberContact: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGrpMembersContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkMmbrContrInAGrpp(
      grpContact: $grpContact
      memberContact: $memberContact
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberContact
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
export const byMaximumAmntNinterest = /* GraphQL */ `
  query ByMaximumAmntNinterest(
    $repaymentPeriod: String
    $maximum: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAdvertisedSingleMemberLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byMaximumAmntNinterest(
      repaymentPeriod: $repaymentPeriod
      maximum: $maximum
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byMaximumAmntNinterestee = /* GraphQL */ `
  query ByMaximumAmntNinterestee(
    $repaymentPeriod: String
    $maximum: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAdvertisedChamaLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byMaximumAmntNinterestee(
      repaymentPeriod: $repaymentPeriod
      maximum: $maximum
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byBuznessType = /* GraphQL */ `
  query ByBuznessType(
    $buzType: String
    $sortDirection: ModelSortDirection
    $filter: ModelPaidMultipleAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byBuznessType(
      buzType: $buzType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byBuznesTypeee = /* GraphQL */ `
  query ByBuznesTypeee(
    $buzType: String
    $nearByTown: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaidMultipleAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byBuznesTypeee(
      buzType: $buzType
      nearByTown: $nearByTown
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byBusnessType = /* GraphQL */ `
  query ByBusnessType(
    $buzType: String
    $sortDirection: ModelSortDirection
    $filter: ModelFreeBizAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byBusnessType(
      buzType: $buzType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byBiznessType = /* GraphQL */ `
  query ByBiznessType(
    $buzType: String
    $nearByTown: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFreeBizAdsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byBiznessType(
      buzType: $buzType
      nearByTown: $nearByTown
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
