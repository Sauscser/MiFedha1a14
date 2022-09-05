/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSMAccount = /* GraphQL */ `
  query GetSMAccount($awsemail: String!) {
    getSMAccount(awsemail: $awsemail) {
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
export const listSMAccounts = /* GraphQL */ `
  query ListSMAccounts(
    $awsemail: String
    $filter: ModelSMAccountFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSMAccounts(
      awsemail: $awsemail
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
export const listNonLoans = /* GraphQL */ `
  query ListNonLoans(
    $filter: ModelNonLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getLoanPayment = /* GraphQL */ `
  query GetLoanPayment($id: ID!) {
    getLoanPayment(id: $id) {
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
export const listLoanPayments = /* GraphQL */ `
  query ListLoanPayments(
    $filter: ModelLoanPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoanPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSokoAd = /* GraphQL */ `
  query GetSokoAd($id: ID!) {
    getSokoAd(id: $id) {
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
export const listSokoAds = /* GraphQL */ `
  query ListSokoAds(
    $filter: ModelSokoAdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSokoAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRafikiLnAd = /* GraphQL */ `
  query GetRafikiLnAd($id: ID!) {
    getRafikiLnAd(id: $id) {
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
export const listRafikiLnAds = /* GraphQL */ `
  query ListRafikiLnAds(
    $filter: ModelRafikiLnAdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRafikiLnAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAgent = /* GraphQL */ `
  query GetAgent($phonecontact: String!) {
    getAgent(phonecontact: $phonecontact) {
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
      nextToken
    }
  }
`;
export const getFloatPurchase = /* GraphQL */ `
  query GetFloatPurchase($transactId: String!) {
    getFloatPurchase(transactId: $transactId) {
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
    $transactId: String
    $filter: ModelFloatPurchaseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFloatPurchases(
      transactId: $transactId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        bankName
        bkAcNo
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
      bankName
      bkAcNo
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
      nextToken
    }
  }
`;
export const getPersonel = /* GraphQL */ `
  query GetPersonel($workerId: String!) {
    getPersonel(workerId: $workerId) {
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
export const listPersonels = /* GraphQL */ `
  query ListPersonels(
    $workerId: String
    $filter: ModelPersonelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPersonels(
      workerId: $workerId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBizna = /* GraphQL */ `
  query GetBizna($BusKntct: String!) {
    getBizna(BusKntct: $BusKntct) {
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
export const listBiznas = /* GraphQL */ `
  query ListBiznas(
    $BusKntct: String
    $filter: ModelBiznaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBiznas(
      BusKntct: $BusKntct
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBankAdmin = /* GraphQL */ `
  query GetBankAdmin($nationalid: String!) {
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
    $nationalid: String
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
  query GetAdvocate($advregnu: String!) {
    getAdvocate(advregnu: $advregnu) {
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
export const listAdvocates = /* GraphQL */ `
  query ListAdvocates(
    $advregnu: String
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
        bankName
        bkAcNo
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
      bankName
      bkAcNo
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
      nextToken
    }
  }
`;
export const getCovCreditSeller = /* GraphQL */ `
  query GetCovCreditSeller($id: ID!) {
    getCovCreditSeller(id: $id) {
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
      nextToken
    }
  }
`;
export const getNonCovCreditSeller = /* GraphQL */ `
  query GetNonCovCreditSeller($id: ID!) {
    getNonCovCreditSeller(id: $id) {
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
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($grpContact: String!) {
    getGroup(grpContact: $grpContact) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $grpContact: String
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
      nextToken
    }
  }
`;
export const getChamaMembers = /* GraphQL */ `
  query GetChamaMembers($ChamaNMember: String!) {
    getChamaMembers(ChamaNMember: $ChamaNMember) {
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
export const listChamaMembers = /* GraphQL */ `
  query ListChamaMembers(
    $ChamaNMember: String
    $filter: ModelChamaMembersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChamaMembers(
      ChamaNMember: $ChamaNMember
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getChamasNPwnBrkrs = /* GraphQL */ `
  query GetChamasNPwnBrkrs($id: ID!) {
    getChamasNPwnBrkrs(id: $id) {
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
export const listChamasNPwnBrkrs = /* GraphQL */ `
  query ListChamasNPwnBrkrs(
    $filter: ModelChamasNPwnBrkrsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChamasNPwnBrkrs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contact
        regNo
        AcStatus
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChamasRegConfirm = /* GraphQL */ `
  query GetChamasRegConfirm($id: ID!) {
    getChamasRegConfirm(id: $id) {
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
export const listChamasRegConfirms = /* GraphQL */ `
  query ListChamasRegConfirms(
    $filter: ModelChamasRegConfirmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChamasRegConfirms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contact
        regNo
        AcStatus
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
export const listNonCvrdGroupLoans = /* GraphQL */ `
  query ListNonCvrdGroupLoans(
    $filter: ModelNonCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonCvrdGroupLoans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const getReqLoan = /* GraphQL */ `
  query GetReqLoan($id: ID!) {
    getReqLoan(id: $id) {
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
export const listReqLoans = /* GraphQL */ `
  query ListReqLoans(
    $filter: ModelReqLoanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReqLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReqLoanChama = /* GraphQL */ `
  query GetReqLoanChama($id: ID!) {
    getReqLoanChama(id: $id) {
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
export const listReqLoanChamas = /* GraphQL */ `
  query ListReqLoanChamas(
    $filter: ModelReqLoanChamaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReqLoanChamas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReqLoanCredSl = /* GraphQL */ `
  query GetReqLoanCredSl($id: ID!) {
    getReqLoanCredSl(id: $id) {
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
export const listReqLoanCredSls = /* GraphQL */ `
  query ListReqLoanCredSls(
    $filter: ModelReqLoanCredSlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReqLoanCredSls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const vwNatIdentity = /* GraphQL */ `
  query VwNatIdentity(
    $nationalid: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwNatIdentity(
      nationalid: $nationalid
      createdAt: $createdAt
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
      nextToken
    }
  }
`;
export const vwPnCntct = /* GraphQL */ `
  query VwPnCntct(
    $phonecontact: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwPnCntct(
      phonecontact: $phonecontact
      createdAt: $createdAt
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
      nextToken
    }
  }
`;
export const vwMyDebts = /* GraphQL */ `
  query VwMyDebts(
    $loaneePhn: String!
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
      nextToken
    }
  }
`;
export const vwLnrNLneesssss = /* GraphQL */ `
  query VwLnrNLneesssss(
    $loanerLoanee: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwLnrNLneesssss(
      loanerLoanee: $loanerLoanee
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
      nextToken
    }
  }
`;
export const vwAdvNLnrNLneesssss = /* GraphQL */ `
  query VwAdvNLnrNLneesssss(
    $loanerLoaneeAdv: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwAdvNLnrNLneesssss(
      loanerLoaneeAdv: $loanerLoaneeAdv
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
      nextToken
    }
  }
`;
export const vwMyDebtors = /* GraphQL */ `
  query VwMyDebtors(
    $loanerPhn: String!
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
      nextToken
    }
  }
`;
export const advVwLnsClient = /* GraphQL */ `
  query AdvVwLnsClient(
    $advregnu: String!
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
      nextToken
    }
  }
`;
export const vwMyDebtss = /* GraphQL */ `
  query VwMyDebtss(
    $loaneePhn: String!
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
      nextToken
    }
  }
`;
export const vwMyDebtorss = /* GraphQL */ `
  query VwMyDebtorss(
    $loanerPhn: String!
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
      nextToken
    }
  }
`;
export const vwLnrNLneessss = /* GraphQL */ `
  query VwLnrNLneessss(
    $loanerLoanee: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMLoansNonCoveredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwLnrNLneessss(
      loanerLoanee: $loanerLoanee
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
      nextToken
    }
  }
`;
export const vwMySntMny = /* GraphQL */ `
  query VwMySntMny(
    $senderPhn: String!
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
export const vwMyRecMny = /* GraphQL */ `
  query VwMyRecMny(
    $recPhn: String!
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
export const vwMySntMnys = /* GraphQL */ `
  query VwMySntMnys(
    $senderPhn: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLoanPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMySntMnys(
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
        lnId
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
export const vwMyRecMnys = /* GraphQL */ `
  query VwMyRecMnys(
    $recPhn: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLoanPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyRecMnys(
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
        lnId
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
export const dakaByName = /* GraphQL */ `
  query DakaByName(
    $sokoname: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSokoAdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    DakaByName(
      sokoname: $sokoname
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const pataByDesc = /* GraphQL */ `
  query PataByDesc(
    $rafikidesc: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRafikiLnAdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PataByDesc(
      rafikidesc: $rafikidesc
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const mFKVwMFN = /* GraphQL */ `
  query MFKVwMFN(
    $sagentregno: String!
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
      nextToken
    }
  }
`;
export const vwNatIdentitys = /* GraphQL */ `
  query VwNatIdentitys(
    $nationalid: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwNatIdentitys(
      nationalid: $nationalid
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwMyBghtFlt = /* GraphQL */ `
  query VwMyBghtFlt(
    $agentphone: String!
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
    $withdrawerid: String!
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
    $agentPhonecontact: String!
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
    $saPhone: String!
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
    $depositerid: String!
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
    $agContact: String!
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
    $agentPhone: String!
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
        bankName
        bkAcNo
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
export const vwNatIdentityss = /* GraphQL */ `
  query VwNatIdentityss(
    $saNationalid: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwNatIdentityss(
      saNationalid: $saNationalid
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        bankName
        bkAcNo
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
export const vwMFKWthdrwls = /* GraphQL */ `
  query VwMFKWthdrwls(
    $saId: String!
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
        bankName
        bkAcNo
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const wrkrsVww = /* GraphQL */ `
  query WrkrsVww(
    $phoneKontact: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPersonelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    WrkrsVww(
      phoneKontact: $phoneKontact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const busOwnrVwWrkrss = /* GraphQL */ `
  query BusOwnrVwWrkrss(
    $BusinessRegNo: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPersonelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BusOwnrVwWrkrss(
      BusinessRegNo: $BusinessRegNo
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const biznaVwws = /* GraphQL */ `
  query BiznaVwws(
    $busName: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBiznaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BiznaVwws(
      busName: $busName
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const srchAdvCovLns = /* GraphQL */ `
  query SrchAdvCovLns(
    $phonecontact: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAdvocateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    srchAdvCovLns(
      phonecontact: $phonecontact
      createdAt: $createdAt
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
        bankName
        bkAcNo
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
export const vwAdvWthdrwls = /* GraphQL */ `
  query VwAdvWthdrwls(
    $advregnu: String!
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
        bankName
        bkAcNo
        status
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwLnrNLneesss = /* GraphQL */ `
  query VwLnrNLneesss(
    $loanerLoanee: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwLnrNLneesss(
      loanerLoanee: $loanerLoanee
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwAdvNLnrNLneesss = /* GraphQL */ `
  query VwAdvNLnrNLneesss(
    $loanerLoaneeAdv: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwAdvNLnrNLneesss(
      loanerLoaneeAdv: $loanerLoaneeAdv
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwMyCrdBys = /* GraphQL */ `
  query VwMyCrdBys(
    $buyerContact: String!
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
      nextToken
    }
  }
`;
export const vwMySales = /* GraphQL */ `
  query VwMySales(
    $sellerContact: String!
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
      nextToken
    }
  }
`;
export const vwAdvCrdSls = /* GraphQL */ `
  query VwAdvCrdSls(
    $advregnu: String!
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
      nextToken
    }
  }
`;
export const vwLnrNLneess = /* GraphQL */ `
  query VwLnrNLneess(
    $loanerLoanee: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCovCreditSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwLnrNLneess(
      loanerLoanee: $loanerLoanee
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwMyCrdByss = /* GraphQL */ `
  query VwMyCrdByss(
    $buyerContact: String!
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
      nextToken
    }
  }
`;
export const vwMySaless = /* GraphQL */ `
  query VwMySaless(
    $sellerContact: String!
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
      nextToken
    }
  }
`;
export const vwNatIdentitysz = /* GraphQL */ `
  query VwNatIdentitysz(
    $SignitoryNatid: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwNatIdentitysz(
      SignitoryNatid: $SignitoryNatid
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const viaChmArea = /* GraphQL */ `
  query ViaChmArea(
    $oprtnArea: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ViaChmArea(
      oprtnArea: $oprtnArea
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const viaChmVenture = /* GraphQL */ `
  query ViaChmVenture(
    $venture: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ViaChmVenture(
      venture: $venture
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const viaChmNMmbr = /* GraphQL */ `
  query ViaChmNMmbr(
    $MembaId: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChamaMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ViaChmNMmbr(
      MembaId: $MembaId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwChamaMembers = /* GraphQL */ `
  query VwChamaMembers(
    $groupContact: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChamaMembersFilterInput
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
      nextToken
    }
  }
`;
export const vwMyChamas = /* GraphQL */ `
  query VwMyChamas(
    $memberContact: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChamaMembersFilterInput
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
      nextToken
    }
  }
`;
export const vwViaPhons = /* GraphQL */ `
  query VwViaPhons(
    $contact: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChamasNPwnBrkrsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwViaPhons(
      contact: $contact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contact
        regNo
        AcStatus
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwViaRegNo = /* GraphQL */ `
  query VwViaRegNo(
    $regNo: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChamasNPwnBrkrsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwViaRegNo(
      regNo: $regNo
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contact
        regNo
        AcStatus
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwViaPhonss = /* GraphQL */ `
  query VwViaPhonss(
    $contact: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChamasRegConfirmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwViaPhonss(
      contact: $contact
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contact
        regNo
        AcStatus
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vwViaRegNoss = /* GraphQL */ `
  query VwViaRegNoss(
    $regNo: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChamasRegConfirmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwViaRegNoss(
      regNo: $regNo
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contact
        regNo
        AcStatus
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
    $grpContact: String!
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
      nextToken
    }
  }
`;
export const vwMyChamass = /* GraphQL */ `
  query VwMyChamass(
    $loaneePhn: String!
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
      nextToken
    }
  }
`;
export const vwLnrNLnee = /* GraphQL */ `
  query VwLnrNLnee(
    $loanerLoanee: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwLnrNLnee(
      loanerLoanee: $loanerLoanee
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
      nextToken
    }
  }
`;
export const vwAdvNLnrNLnee = /* GraphQL */ `
  query VwAdvNLnrNLnee(
    $loanerLoaneeAdv: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwAdvNLnrNLnee(
      loanerLoaneeAdv: $loanerLoaneeAdv
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
      nextToken
    }
  }
`;
export const vwChmLnClients = /* GraphQL */ `
  query VwChmLnClients(
    $advRegNu: String!
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
      nextToken
    }
  }
`;
export const vwChamaMembersss = /* GraphQL */ `
  query VwChamaMembersss(
    $grpContact: String!
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
      nextToken
    }
  }
`;
export const vwMyChamasss = /* GraphQL */ `
  query VwMyChamasss(
    $loaneePhn: String!
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
      nextToken
    }
  }
`;
export const vwLnrNLnees = /* GraphQL */ `
  query VwLnrNLnees(
    $loanerLoanee: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNonCvrdGroupLoansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwLnrNLnees(
      loanerLoanee: $loanerLoanee
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
      nextToken
    }
  }
`;
export const vwChamaMemberssss = /* GraphQL */ `
  query VwChamaMemberssss(
    $grpContact: String!
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
    $recipientPhn: String!
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
export const vwMyChamasssss = /* GraphQL */ `
  query VwMyChamasssss(
    $memberPhn: String!
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
export const vwChamaMembersssss = /* GraphQL */ `
  query VwChamaMembersssss(
    $grpContact: String!
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
export const vwMyLoaneeReq = /* GraphQL */ `
  query VwMyLoaneeReq(
    $loaneeEmail: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReqLoanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwMyLoaneeReq(
      loaneeEmail: $loaneeEmail
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const vwLoaneeReq = /* GraphQL */ `
  query VwLoaneeReq(
    $loanerEmail: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReqLoanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VwLoaneeReq(
      loanerEmail: $loanerEmail
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byChmaLnee = /* GraphQL */ `
  query ByChmaLnee(
    $loaneeEmail: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReqLoanChamaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByChmaLnee(
      loaneeEmail: $loaneeEmail
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byChmaNoDesc = /* GraphQL */ `
  query ByChmaNoDesc(
    $chamaPhone: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReqLoanChamaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByChmaNoDesc(
      chamaPhone: $chamaPhone
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byBzLnee = /* GraphQL */ `
  query ByBzLnee(
    $loaneeEmail: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReqLoanCredSlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByBzLnee(
      loaneeEmail: $loaneeEmail
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const byBzNoDesc = /* GraphQL */ `
  query ByBzNoDesc(
    $businessNo: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReqLoanCredSlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByBzNoDesc(
      businessNo: $businessNo
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
