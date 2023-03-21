/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      PayPalDposit:undefined;
      VwAcBfDpst:undefined;
      ViewNonLnsRecChm : {id:string}
      ChmLoanersDtls: {id:string};
      ChmLoaneesDtls: {id:string};
      
      SgnIn2TransferBiz:undefined;
      
      CredRPyBiz2Biz: {id:string};
      CredRPyBiz2Pal: {id:string};
      CredRPyPal2Biz: {id:string};
      CredRPyPal2Pal:{id:string};

      BLCredBiz2Biz: {id:string};
      BLCredBiz2Pal: {id:string};
      BLCredPal2Biz: {id:string};
      BLCredPal2Pal:{id:string};
      
      CredB2PSent: {id:string};
      CredB2PReceived: {id:string};
      CredP2BReceived: {id:string};
      CredP2BSent:{id:string};

      CredB2BSent: {id:string};
      CredB2BReceived: {id:string};
      CredP2PReceived: {id:string};
      CredP2PSent:{id:string};

      VwB2PMyLoanersDtld: {id:string};
      VwB2PMyLoaneesDtld: {id:string};
      VwP2PMyLoaneesDtld: {id:string};
      VwP2PMyLoanersDtld:{id:string};
      
      SI2VwBiz2BizLoanees:undefined;
      SI2VwBiz2PalLoaners:undefined;
      SI2VwBiz2BizLoaners:undefined;
      SI2VwBiz2PalLoanees:undefined;

      VwBiz2PalLnees: {ChmDesc:string};
      VwBiz2PalLners: {ChmDesc:string};
      VwPal2BizLnees: undefined;
      VwPal2BizLners:undefined;
      VwMyBiz2PalLoaneesDtld: {id:string};
      VwMyBiz2PalLoanersDtld: {id:string};
      VwMyPal2BizLoaneesDtld: {id:string};
      VwMyPal2BizLoanersDtld:{id:string};
      
      
      VwBizLnees: {ChmDesc:string};
      VwBizLners: {ChmDesc:string};
      VwPalLnees: undefined;
      VwPalLners:undefined;
      VwMyBizLoaneesDtld: {id:string};
      VwMyBizLoanersDtld: {id:string};
      VwMyPalLoaneesDtld: {id:string};
      VwMyPalLoanersDtld:{id:string};
      
      PlaceLnReqP2P: undefined;
      PlaceLnReqB2P: undefined;
      PalProdsRequest: undefined;
      SI2VwB2PLoanees:undefined;
      VwB2PMyLoanees:{memberPhn:string};
      VwP2PMyLoanees:undefined;
      VwP2PMyLoaners:undefined;
      VwB2PMyLoaners:undefined;

      SignIn2VwLR:undefined;
      VwB2PReceived:{id:string};
      VwB2PLRSent:{id:string};
      VwP2PReceived:{id:string};
      VwP2PSent:{id:string};
      
      SISgnInToBLB2P:undefined;
      Vw2BLBiz2Pal:{memberPhn:string};
      Vw2BLPal2Pal:undefined;
      BLBiz2Pal:{id:string};
      BLPal2Pal:{id:string};
      
      SIBiz2Pal2Repay:undefined;
      Vw2RpyB2P:{memberPhn:string};
      Vw2RpyP2P:undefined;
      RpyBiz2Pal:{id:string};
      RpyPal2Pal:{id:string};
      PalLnStsB2PLnee:undefined;

      PersonelVw2GrntB2B:undefined;
      PersonelVw2GrntB2P:undefined;
      
      Vw2GrntBiz2Biz:{MFNId:string};
      Vw2GrntBiz2Pal:{MFNId:string};
      Vw2GrntPal2Biz:undefined;
      Vw2GrntPal2Pal:undefined;
      
      BizPalLn:{id:string};
      PalPalLn: {id:string};

      SignIn2GrntLnReq:undefined;
      CompVw2GrantLnReq2:{MFNId:string};
      PalVw2GrantLnReq2:undefined;
      
      BiznaReqstPage1:undefined;
      BiznaReqstPage2:undefined;
      PlaceLnReq:undefined;
      PlaceLnReq2:undefined;
      PlaceLnReq3:undefined;
      PlaceLnReq4:undefined;
      
      SIBiz2Biz:undefined;
      SIBiz2Pal:undefined;
      VwBiz2Biz:undefined;
      VwBiz2Pal:undefined;
      VwPal2Biz:undefined;
      GrantPal2BizCrdSl:{id:string};
      GrantBiz2PalCrdSl:{id:string};
      GrantBiz2BizCrdSl:{id:string};
      GrantPal2PalCrdSl:{id:string};
      TakeOverBizna: undefined;
      giveBizna: undefined;
      VwBusAc2TakeUp:{id:string};


      VwGrp2LnNonCov: undefined;
      VwGrp2LnCov: undefined;
      DeclChamaReq:{id:string};
     
      DeclCredSls:{id:string};
      DeclPalLn:{id:string};
      
    
      VwMFNAcDtls:{phonecontact:string};
      ApplyMFKubwa:undefined;
      ViewAlertDtls:undefined;
      ViewBiznaShareSent:{MFNId:string};
      SgnIn2VwRevenueShare:undefined;
      ViewBiznaShareRec:undefined;
      RequestLoansPage:undefined;
      LnsScreen:undefined;
      CredSlsScreen:undefined;
      ChamaScreen:undefined;
      Homeie:undefined;
      MFNdogoo:undefined;
      RegMFNdogo:undefined;
      RegMFKbw:undefined;

      MyHomeie:undefined;
      RegKFKbw:undefined;
      BuyFltFm:undefined;
      DpstMney:undefined;
      RegUsrScrn:undefined;
      CrtAdmin:undefined;
      SttinsHm:undefined;
      MFAdminstrator:undefined;
      MFAdminstrators:undefined;
      MFKbwa:undefined;
      MFKubwa:undefined;
      MFNdogooo:undefined;
      MFNdogos:undefined;
      MFAdvocate:undefined;
      MFAdvocateHome:undefined;
      RegMFNdgScrn:undefined;
      MFAdvocateReg:undefined;
      Homeee:undefined;
      DActvteMFN:undefined;
      DActvteMFK:undefined;
      DActvteMFUsr:undefined;
      DActvteMFAd:undefined;
      
      SMWthdFm:undefined;
      Homes:undefined;
      MFNdogoss:undefined;
      SendNonLnss:undefined;
      CreateSMAc:undefined;
      
      BListLneess:undefined;
      
      CovCredSls:{id:string};
      NonCovCredSlss:{id:string};
      CredSlsHms:undefined;
      CreateChms:undefined;
      AddChmMembrsss:undefined;
      ChmCovLons:{id:string};
      ChmNonCovLons:{id:string};
      ChmContrs:{ContriToMmbrId:string};
      SndMbrsMnys:{id:string};
      
      BLChmMmberCovs:{id:string};
      BLChmMmberNonCovs:{id:string};

      RepyChmCovLns:{id:string};
      RepyChmNonCovLns:{id:string};

      
      SMGivCovLon:{id:string};
      SMGivNonCovLon:{id:string};
      
      RemoveChmMbrs:{id:string};
      DissolveChms:undefined;
      UpdateChms:undefined;
      UpdateSMPWs:undefined;
      UpdateMFAdminPWs:undefined;
      WithdwAdvs:undefined;
      WithdwAdmns:undefined;
      UpdtMFAdvPWs:undefined;
      BLUsrss:undefined;
      UpdtMFKPWs:undefined;
      MFKWthdrws:undefined;
      UpdtMFNPWs:undefined;
      WthdrwMFNs:undefined;
      AdvHms:undefined;
      WthdrwMFNFlts:undefined;
      ViewMyCovLoaneess:undefined;
      ViewMyCovLoanerss:undefined;
      ViewMyNonCovLoaneess:undefined;
      ViewMyNonCovLoanerss:undefined;
      ViewSmAcs:undefined;
      ViewSmAcss:undefined;
      ViewMySMAcs:undefined;
      VwNonLnsRecs:undefined;
      VwNonLnsSnts:undefined;
      ChmSignInss:undefined;
      
      ChamSignIn3s:undefined;
      ChamSignIn2s:undefined;
      ChmLnsGvnOuts:{grpContact:string};
      ChmLnsGvnOutNonCovs:{grpContact:string};
      ChmLnsRecCovs:undefined;
      ChmLnsRecNonCovs:undefined;
      ChamaGenInfos:{grpContact:string};
      ChamSignIn4s:undefined;
      ChmSignIn5s:undefined;
      ChmSignIn6s:undefined;
      ChamaRemts:{grpContact:string};
      ChmContris:{grpContact:string};
      ChmMmbrss:{grpContact:string};
      ChamaMmbrRemts:{id:string};
      ChmMmbrContris:undefined;
      ChmMmbrMmbrss:undefined;
      CredSlsLneess:{MFNId:string};
      CredSlsLnerss:undefined;
      CredByrLneess:{MFNId:string};
      CredByrLnerss:undefined;
      SMDpsitss:undefined;
      SMWthdrwlss:undefined;

      VwMFNAccountSgnIns:undefined;
      FltWthdrwlsSgnIns:undefined;
      UsrWthdrwlsSgnIns:undefined;
      MFNWithdrawlsSgnIns:undefined;
      UsrDpositSgnIns:undefined;
      FloatBghtSgnIns:undefined;

      VwMFNFltBuyss:{MFNId:string};
      VwMFNWthdrlss:{MFNId:string};
      VwFltWthdrwlss:{MFNId:string};
      VwUsrWthdrwlss:{MFNId:string};
      VwUsrDpstss:{MFNId:string};
      VwMFNAcss:{MFNId:string};
      SearchMFNsssss:{town:string};

      VwAdvAcs:{AdvReNo:string};
      VwAdvChamaCovLnss:{AdvChmMmbr:string};
      VwAdvCrdSlrCovLnss:{AdvChmMmbr:string};
      VwAdvSMCovLnss:{AdvChmMmbr:string};
      VwAdvWthdrwlss:{AdvReNo:string};
      VwMFKAcs:{MFKPhn:string};
      VwMFKWthdrwlss:{MFKPhn:string};

      AdvVwCrdSlsSgnIns:undefined;
      AdvVwSMSgnIns:undefined;
      AdvWthdrwlSgnIns:undefined;
      AdvVwAcSgnIns:undefined;
      AdvVwChmSgnIns:undefined;
      VwMFKAcSgnIns:undefined;
      VwMFKWthdrwlsSgnIns:undefined;

      MFKVwMFNSgnInss:undefined;
      MFKVwMFNss:{MFKPhn:string};

      UpdateAccCodess:undefined;
      WelcomePgss:undefined;

      Aboutss:undefined;
      Alertss:undefined;
      Contactsss:undefined;
      Maximumss:undefined;
      Passwordsss:undefined;
      Policyss:undefined;
      Privacyss:undefined;
      Recommendationsss:undefined;
      TCss:undefined;
      TransactionFeess:undefined;
      VwCompDtlss:undefined;
      Commissionss:undefined;
      SndChmMbrMnys:{grpContact:string};
      ChamaSndMbrMneys:undefined;
      SndToChmMbrss:{ChmNMmbrPhns:string};
      MmbrSndChmss:undefined;
      Contributionssss:{ChamaNMember:string}
      SgnIn2LnMmbrs:undefined;
      VwChmMbrs2Ln:{ChmNMmbrPhns:string};
      SgnIn2LnMmbrNonCovs:undefined;
      VwChmMbrs2NonCovLnss:{ChmNMmbrPhns:string}
      Vw2RpyCovs:undefined;
      Vw2RpyNonCovs:undefined;
      SgnIn2BLCovs:undefined;
      SgnIn2BLNonCovs:undefined
      Vw2BLCovs:{ChmNMmbrPhns:string};
      Vw2BLNonCovs:{ChmNMmbrPhns:string};

      Vw2RepySMCovLns:undefined;
      Vw2RepySMNonCovLns:undefined
      Vw2BLCovSMLns:{ChmNMmbrPhns:string};
      Vw2BLSMNonCovs:{ChmNMmbrPhnss:string};

      RepayCovLnss:{id:string};
      RepayNonCovLnss:{id:string};
      BListSMLneeCovs:{id:string};
      BListSMLneeNonCovs:{id:string};

      RpayCredSlrCovs:{id:string};
      RpayCredSlrNonCovs:{id:string};
      BListCredByrCovs:{id:string};
      BListCredByrNonCovs:{id:string};

      Vw2RepyCredSlsCovLns:undefined;
      Vw2RepyCredSlsNonCovLns:undefined
      Vw2BLCovCredSlsLns:{ChmNMmbrPhns:string};
      Vw2BLCredSlsNonCovs:{ChmNMmbrPhns:string};
      DeactAdms:undefined;

      ViewAdvs:{town:string};

      VwCompAbts:undefined
      VwCompPolicys:undefined;
      VwCompPrivacys:undefined;
      VwCompTCs:undefined;
     
      UpdateMFKComs:undefined;
      UpdateMFNComs:undefined;
      UpdtVatComss:undefined;
      AdjustUsrLimitss:undefined;
      AdvPy2VwChms:undefined;
      AdvPy2VwCredSlrs:undefined;
      AdvPy2VwSMs:undefined;

      

      ChamaSignIn2VwLnRpymnts:undefined;
     
      ViewNonLnsRecCredSlrs:{MFNId:string};
      ViewNonLnsRecSMs:undefined;
      ViewNonLnsSntChms:{id:string};
      ViewNonLnsSntCredSlrs:{MFNId:string};
      ViewNonLnsSntSMs:undefined;

      PwnBrkrRegss:undefined;
      ChamaRegss:undefined;

      ChmVwMmbr2Removes:{ChmNMmbrPhns:string};

      Vw2BLChmCovs:{grpContact:string};
      Vw2BLChmNonCovs:{grpContact:string};
    
      SgnIn2RemoveMmbrs:undefined;

      ChmVwMmbrss:{grpContact:string};
      SgnIn2BLSMCovs:undefined;
      SgnIn2BLSMNonCovs:undefined;
      
      SgnIn2BLCredSlCovs:undefined;
      SgnIn2BLCredSlNonCovs:undefined;
      BuyFloatFrmUsrAcs:undefined;
      RegPwnBrkrs:undefined;
      ElimAcs:undefined;

      ElimNonLnsSents:undefined;
      ElimNonLnsRecs:undefined;
      ElimWthdrwlss:undefined;
      ElimDpstss:undefined;

      ElimLnsCvLnrs:undefined;      
      ElimLnsCvLnees:undefined;
      ElimLnsNonCvLnrs:undefined;
      ElimLnsNonCvLnees:undefined;
      ElimLPSMSents:undefined;
      ElimLPSMRecs:undefined;
      ElimLPChmSents:undefined;
      ElimLPChmRecs:undefined;
      ElimLPCredRecs:undefined;
      ElimLPCredSents:undefined;

      ElimRpyChmNonCvs:undefined;
      ElimRpyChmCvs:undefined;
      ElimRpySMNonCovs:undefined;
      ElimRpySMCovs:undefined;
      ElimRpyCredCovs:undefined;
      ElimRpyCredNonCovs:undefined;

      ElimCredCvLnees:undefined;
      ElimCredCvLnrs:undefined;
      ElimCredNonCvLnees:undefined;
      ElimCredNonCvLnrs:undefined;

      ElimChmVwMbrshpMembrs:undefined;
      ElimChmVwNonCvLns:undefined;
      ElimChmVwRmtncMembrs:undefined;
      ElimChmVwCovLnss:undefined;
      ElimChmVwCntrMembrs:undefined;

      SendNonLonsRev:{id:string};
      SendNonLonsRevSgnIn:undefined;
      SendNonLonsRevVw:{phoneContacts:string};
      ViewNonLnsRecs:undefined;
      ViewNonLnsSents:undefined;
      AddMFNdogos:undefined; 
      AddMFKubwas:undefined;    
      SignitoryWthdrwFndsss:undefined;
      SignitoryDepositss:undefined; 
      Sgn2CnfrmWthdrwlsss:undefined; 
      

      AddPersonels:undefined; 
      CrtBusinesss:undefined; 

      VwBusAcss:{BusinessRegNos:string}; 
      DissolveBizss:undefined; 
      RmvPersonnelss:undefined; 
      Vw2CredSellCovs:undefined;
      Vw2CredSellNonCovs:undefined;
      SgnIn2VwBiznass:undefined; 
      ShareCredSlsRevss:undefined; 

      SgnIn2VwCovCrdSlsLneesss:undefined; 
      SgnIn2VwNCCrdSlsLneess:undefined; 
      SnIn2VwCrdSlLPs:undefined;
      SignInAdms:undefined;
      
      SgnIn2VwChmDpstss:undefined;

      VwChmDpstss:{grpContact:string}; 
      SgnIn2VwChmWthdrwlss:undefined;
      VwChmWthdrwlss:{grpContact:string};
      Loans:undefined;

      ItemAds:undefined;
      LoanAds:undefined;
      DetailedChmPrfl: {grpContact:string};
      DtldPalLnInfo: {id:string};
      DtldSalesInfo: {id:string};

      SgnIn2RemoveSlAd: undefined;
      VwSlsAds2Remove: {BiznaContact:string};
      VwPlLn2Remove:undefined;
      AutomaticRepayAllTyps:undefined;
      VwMakeLnReq:undefined;
      
      Vw2GrantLnReq:undefined;
      Vw2DelLnReqs:undefined;
      Vw2GrantLnReq2:undefined;
      EntrAdvLoc:undefined;
      ChamaPlaceLnReq:undefined;
      ChamaVw2DelLnReqs:undefined;
      ChamaVw2GrantLnReqCov: {grpContact:string};
      ChamaVw2GrantLnReqNonCov: {grpContact:string};
      CrdSlPlaceLnReq:undefined;
      CrdSlVw2DelLnReqs:undefined;
      CrdSlVw2GrantLnReqCov:{BusinessRegNo:string};
      CrdSlVw2GrantLnReqNonCov:{BusinessRegNo:string};

      PayCash: undefined;
      VwCashPayRec: {MFNId:string};
      VwCashPaySent:undefined;
      SgnIn2VwCashSales:undefined;
      
    }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  
};


export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  
  Home:undefined;
  MFNdogo:undefined;
  MyAc:undefined;
  PalLoan:undefined;
  CredSale:undefined;
  Chama:undefined;
  Advocate:undefined
  RegMFNdgScrn:undefined;
  Homes:undefined;
  LoanChmz:undefined; 
      SrchItemAdz:undefined; 
      SrchLoanAdz:undefined;
      
      MyHome:undefined;
  
  
  
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type UserReg = {
  usr:String;
}
