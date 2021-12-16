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
      
      CovCredSls:undefined;
      NonCovCredSlss:undefined;
      CredSlsHms:undefined;
      CreateChms:undefined;
      AddChmMembrsss:undefined;
      ChmCovLons:{id:string};
      ChmNonCovLons:{ChamaNMember:string};
      ChmContrs:{ContriToMmbrId:string};
      SndMbrsMnys:{id:string};
      
      BLChmMmberCovs:{id:string};
      BLChmMmberNonCovs:{id:string};

      RepyChmCovLns:{id:string};
      RepyChmNonCovLns:{id:string};

      
      SMGivCovLon:undefined;
      SMGivNonCovLon:undefined;
      
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
      ChmContris:{id:string};
      ChmMmbrss:{grpContact:string};
      ChamaMmbrRemts:{id:string};
      ChmMmbrContris:undefined;
      ChmMmbrMmbrss:undefined;
      CredSlsLneess:undefined;
      CredSlsLnerss:undefined;
      CredByrLneess:undefined;
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
      WelcomePgss:{awsEmail:null};

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
      SndToChmMbrss:undefined;
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
      ViewNonLnsRecChms:{grpContact:string};
      ViewNonLnsRecCredSlrs:undefined;
      ViewNonLnsRecSMs:undefined;
      ViewNonLnsSntChms:undefined;
      ViewNonLnsSntCredSlrs:undefined;
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
  Loans:undefined;
  CredSlsHms:undefined;
  Chama:undefined;
  SearchAdv:undefined
  RegMFNdgScrn:undefined;
  Homes:undefined
  
  
  
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type UserReg = {
  usr:String;
}
