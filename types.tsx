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
      RepayCovLnss:undefined;
      RepayNonCovLnss:undefined;
      BListLneess:undefined;
      
      CovCredSls:undefined;
      NonCovCredSlss:undefined;
      CredSlsHms:undefined;
      CreateChms:undefined;
      AddChmMembrsss:undefined;
      ChmCovLons:undefined;
      ChmNonCovLons:undefined;
      ChmContrs:undefined;
      SndMbrsMnys:undefined;
      BLChmMmberCovs:undefined;
      BLChmMmberNonCovs:undefined;
      RepyChmCovLns:undefined;
      RepyChmNonCovLns:undefined;
      RpayCredSlrCovs:undefined;
      RpayCredSlrNonCovs:undefined;
      BListCredByrCovs:undefined;
      BListCredByrNonCovs:undefined;
      SMGivCovLon:undefined;
      SMGivNonCovLon:undefined;
      BListSMLneeCovs:undefined;
      BListSMLneeNonCovs:undefined;
      RemoveChmMbrs:undefined;
      DissolveChms:undefined;
      UpdateChms:undefined;
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
  Search:undefined;
  RegMFNdgScrn:undefined;
  
  
  
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type UserReg = {
  usr:String;
}
