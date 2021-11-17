import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BtmTbNav from '../BotTab';
import KFNdogo from "../../screens/MFNdogo"
import Homeie from "../../screens/HomeScrn"
import RegisterKFKubwaAcForm from '../../screens/MFKubwa/RegisterMFKubwa';
import CreateAcForm from '../../screens/MyAcc/CreateAc';

import RegMFNdogoFm from '../../screens/MFNdogo/RegisterMFNdogo';
import BuyFltForm from "../../screens/MFNdogo/Float/BuyFloat";
import DpstMny from "../../screens/MyAcc/DepositMny";
import CrtAdmn from "../../screens/MFAdmin/RegAdmin";
import SettnsHm from "../../screens/Settings/SettingsHome";
import MFAdm from "../../screens/MFAdmin";
import MFKbw from "../../screens/MFKubwa";
import MFN from "../../screens/MFNdogo";
import AdvcHm from "../../screens/Advocate/AdvocateHm";
import AdvHm from "../../screens/Advocate/AdvocateHm";
import AdvReg from "../../screens/Advocate/AdvReg";
import DActivtMFN from "../../screens/MFNdogo/DeactivateMFNdogo";
import DActivtMFK from "../../screens/MFKubwa/DeActRegMFK/DeactivateMFNdogo";
import DActivtMFUsr from "../../screens/MyAcc/DeActivtUsr/DeactivateMFNdogo";
import DActivtMFAdv from "../../screens/Advocate/DeactivtAdv/DeactivateMFAdmin/DeactivateMFNdogo";
import SMGvCovLon from "../../screens/MyAcc/Loans/GiveLoan/SM/Covered";
import SMASendNonCovLns from "../../screens/MyAcc/Loans/GiveLoan/SM/NonCov";
import SMAWthdrwForm from '../../screens/MyAcc/WithdrwFunds';
import SendNonLn from "../../screens/MyAcc/SendNonLons";
import RepayCovLns from "../../screens/MyAcc/Loans/RepayLoan/SM/CovLons";
import RepayNonCovLns from "../../screens/MyAcc/Loans/RepayLoan/SM/NonCovLns";
import BListSMLneeCov from "../../screens/MyAcc/Loans/BList/SMLoanee/Cov";
import BListSMLneeNonCov from "../../screens/MyAcc/Loans/BList/SMLoanee/NonCov";
import CovCredSls from "../../screens/MyAcc/Loans/GiveLoan/CredSlr/Cov";
import NonCovCredSls from "../../screens/MyAcc/Loans/GiveLoan/CredSlr/NonCov";
import CreateChm from "../../screens/Chama/CrtChm";
import AddChmMembrss from "../../screens/Chama/AddChmMembrs";
import ChmCovLon from "../../screens/Chama/Loan/LoanMember/Cov";
import ChmNonCovLon from "../../screens/Chama/Loan/LoanMember/NonCov";
import Contributionsss from "../../screens/Chama/Contribtns";
import SndMbrsMny from "../../screens/Chama/SendMmbrsMny";
import BLChmMmberCov from "../../screens/Chama/BL/Cov";
import BLChmMmberNonCov from "../../screens/Chama/BL/NonCov";
import RepyChmCovLn from "../../screens/MyAcc/Loans/RepayLoan/Chama/CovLons";
import RepyChmNonCovLn from "../../screens/MyAcc/Loans/RepayLoan/Chama/NonCovLons";
import BListCredByrCov from "../../screens/MyAcc/Loans/BList/CredLoanee/Cov";
import BListCredByrNonCov from "../../screens/MyAcc/Loans/BList/CredLoanee/NonCov";
import RpayCredSlrCov from "../../screens/MyAcc/Loans/RepayLoan/CredSlr/CovCredSls";
import RpayCredSlrNonCov from "../../screens/MyAcc/Loans/RepayLoan/CredSlr/NonCovCredSls";
import RemoveChmMbr from "../../screens/Chama/RmvChmMbr";
import DissolveChm from "../../screens/Chama/Dissolve";
import UpdateChm from "../../screens/Chama/Update";
import UpdateSMPW from "../../screens/MyAcc/UpdatePW";
import UpdateMFAdminPW from "../../screens/MFAdmin/Update";
import WithdwAdmn from "../../screens/MFAdmin/Withdraw";
import WithdwAdv from "../../screens/Advocate/Withdrw";
import UpdtMFAdvPW from "../../screens/Advocate/UpdatePW";
import BLUsrs from "../../screens/MyAcc/BLUsr";
import UpdtMFKPW from "../../screens/MFKubwa/UpdatPW";
import MFKWthdrw from "../../screens/MFKubwa/WithDrw";
import UpdtMFNPW from "../../screens/MFNdogo/UpdtMFNPW";
import WthdrwMFN from "../../screens/MFNdogo/Wthdrw";
import WthdrwMFNFlt from "../../screens/MFNdogo/WithdrwFlt";
import ViewMyLoanees from "../../screens/MyAcc/Loans/ViewSMLns/Cov/MyLoanees";
import ViewMyLoaners from "../../screens/MyAcc/Loans/ViewSMLns/Cov/MyLoaners";
import ViewMyNonCovLoanees from "../../screens/MyAcc/Loans/ViewSMLns/NonCov/MyLoanees";
import ViewMyNonCovLoaners from "../../screens/MyAcc/Loans/ViewSMLns/NonCov/MyLoaners";
import ViewSmAc from "../../screens/MyAcc/ViewMySMAcc";
import ViewSmAcs from "../../components/MyAc/ViewAc";
import VwNonLnsRec from "../../screens/MyAcc/ViewNonLnsRec";
import VwNonLnsSnt from "../../screens/MyAcc/ViewNonLnsSnt";
import ChmSignIns from "../../screens/Chama/ViewLns/ChamaSignIn";

import ChamSignIn2 from "../../screens/Chama/ViewLns/ChamaSignIn2";
import ChamSignIn3 from "../../screens/Chama/ViewLns/ChamaSignIn3";
import ChamSignIn4 from "../../screens/Chama/ViewLns/ChamaSignIn4";
import ChmLnsGvnOutCov from "../../screens/Chama/ViewLns/GivenOut/Cov";
import ChmLnsGvnOutNonCov from "../../screens/Chama/ViewLns/GivenOut/NonCov";
import ChmLnsRecCov from "../../screens/Chama/ViewLns/Received/Cov";
import ChmLnsRecNonCov from "../../screens/Chama/ViewLns/Received/NonCov";
import ChamaGenInfo from "../../screens/Chama/ViewLns/Generalnfo";
import ChmSignIn5 from "../../screens/Chama/ViewLns/ChamaSignIn5";
import ChmSignIn6 from "../../screens/Chama/ViewLns/ChamaSignIn6";
import ChamaRemt from "../../screens/Chama/ViewChamaActivities/ChmRemit/Chama";
import ChmContri from "../../screens/Chama/ViewChamaActivities/Contributions/Chama";
import ChmMmbrs from "../../screens/Chama/ViewChamaActivities/Membership/Chama";
import ChamaMmbrRemt from "../../screens/Chama/ViewChamaActivities/ChmRemit/Member";
import ChmMmbrContri from "../../screens/Chama/ViewChamaActivities/Contributions/Member";
import ChmMmbrMmbrs from "../../screens/Chama/ViewChamaActivities/Membership/Member";
import CredSlsLnees from "../../screens/MyAcc/Loans/ViewCredSls/Cov/Loanees";
import CredSlsLners from "../../screens/MyAcc/Loans/ViewCredSls/Cov/Loaners";
import CredByrLnees from "../../screens/MyAcc/Loans/ViewCredSls/NonCov/Loanees";
import CredByrLners from "../../screens/MyAcc/Loans/ViewCredSls/NonCov/Loaners";
import SMDpsits from "../../screens/MyAcc/DepositMny/VwSMDpsts";
import SMWthdrwls from "../../screens/MyAcc/WithdrwFunds/VwSMWthdrwls";
import VwMFNAccountSgnIn from "../../screens/MFNdogo/SignInMFN copy";
import UsrDpositSgnIn from "../../screens/MFNdogo/SignInMFN copy 2";
import MFNWithdrawlsSgnIn from "../../screens/MFNdogo/SignInMFN copy 3";
import UsrWthdrwlsSgnIn from "../../screens/MFNdogo/SignInMFN copy 4";
import FltWthdrwlsSgnIn from "../../screens/MFNdogo/SignInMFN copy 5";
import FloatBghtSgnIn from "../../screens/MFNdogo/SignInMFN copy 6";
import VwMFNAcs from "../../screens/MFNdogo/VwMFNAc";
import VwUsrDpsts from "../../screens/MFNdogo/VwUsrDpst";
import VwUsrWthdrwls from "../../screens/MFNdogo/VwUsrWthdrwl";
import VwFltWthdrwls from "../../screens/MFNdogo/WithdrwFlt/VwFltWthdrwl";
import VwMFNWthdrls from "../../screens/MFNdogo/Wthdrw/VwMFNWthdrl";
import VwMFNFltBuys from "../../screens/MFNdogo/Float/VwMFNFltBuy";
import SearchMFNs from "../../screens/MFNdogo/SearchMFN";

import AdvVwCrdSlsSgnIn from "../../screens/Advocate/AdvVwCrdSlsSgnIn";
import AdvVwSMSgnIn from "../../screens/Advocate/AdvVwSMSgnIn";
import AdvWthdrwlSgnIn from "../../screens/Advocate/AdvWthdrwlSgnIn";
import AdvVwAcSgnIn from "../../screens/Advocate/AdvVwAcSgnIn";
import AdvVwChmSgnIn from "../../screens/Advocate/AdvVwChmSgnIn";
import VwAdvAc from "../../screens/Advocate/VwAdvAc";
import VwAdvChamaCovLns from "../../screens/Advocate/VwAdvChamaCovLns";
import VwAdvCrdSlrCovLns from "../../screens/Advocate/VwAdvCrdSlrCovLns";
import VwAdvSMCovLns from "../../screens/Advocate/VwAdvSMCovLns";
import VwAdvWthdrwls from "../../screens/Advocate/VwAdvWthdrwls";
import VwMFKAcSgnIn from "../../screens/MFKubwa/VwMFKAcSgnIn";
import VwMFKWthdrwlsSgnIn from "../../screens/MFKubwa/VwMFKWthdrwlsSgnIn";
import VwMFKAc from "../../screens/MFKubwa/VwMFKAc";
import VwMFKWthdrwls from "../../screens/MFKubwa/VwMFKWthdrwls";
import MFKVwMFNSgnIns from "../../screens/MFKubwa/MFKVwMFNSgnIn";
import MFKVwMFNs from "../../screens/MFKubwa/MFKVwMFN";
import UpdateAccCodes from "../../screens/MyAcc/UpdateAccCode";
import WelcomePgs from "../../screens/MyAcc/WelcomePg";

import Abouts from "../../screens/Settings/About";
import Alerts from "../../screens/Settings/Alert";
import Contactss from "../../screens/Settings/Contacts";
import Maximums from "../../screens/Settings/Maximum";
import Passwordss from "../../screens/Settings/Passwords";
import Policys from "../../screens/Settings/Policy";
import Privacys from "../../screens/Settings/Privacy";
import Recommendationss from "../../screens/Settings/Recommendations";
import TCs from "../../screens/Settings/TC";
import TransactionFees from "../../screens/Settings/TransactionFees";
import VwCompDtls from "../../screens/Settings/VwCompDtls";
import Commissions from "../../screens/Settings/Commissions";
import SndChmMbrMny from "../../screens/Chama/ViewChamaActivities/Membership/SndToChmMbr";
import ChamaSndMbrMneys from "../../screens/Chama/ChamaSndMbrMney";
import SndToChmMbrs from "../../screens/Chama/ViewChamaActivities/Membership/SndToChmMbr";
import MmbrSndChms from "../../screens/Chama/MmbrSndChm";
import SgnIn2LnMmbr from "../../screens/Chama/SgnIn2LnMmbrCov";
import VwChmMbrs2Ln from "../../screens/Chama/VwChmMbrs2Ln";
import SgnIn2LnMmbrNonCov from "../../screens/Chama/SgnIn2LnMmbrNonCov";
import VwChmMbrs2NonCovLns from "../../screens/Chama/VwChmMbrs2NonCovLn";
import Vw2RpyCov from "../../screens/Chama/Vw2RpyChmLns/Cov";
import Vw2RpyNonCov from "../../screens/Chama/Vw2RpyChmLns/NonCov";
import SgnIn2BLCov from "../../screens/Chama/BL/SgnInToBL/MmbrCov";
import SgnIn2BLNonCov from "../../screens/Chama/BL/SgnInToBL/MmbrNonCov";
import Vw2BLCov from "../../screens/Chama/BL/View/Cov";
import Vw2BLNonCov from "../../screens/Chama/BL/View/NonCov";

import Vw2RepySMCovLn from "../../screens/MyAcc/Loans/Vw2Rpay/Cov";
import Vw2RepySMNonCovLn from "../../screens/MyAcc/Loans/Vw2Rpay/NonCov";
import Vw2BLCovSMLn from "../../screens/MyAcc/Loans/BList/View2BL/Cov";
import Vw2BLSMNonCov from "../../screens/MyAcc/Loans/BList/View2BL/NonCov";

import Vw2RepyCredSlsCovLn from "../../screens/MyAcc/VwCred/2Repay/Cov";
import Vw2RepyCredSlsNonCovLn from "../../screens/MyAcc/VwCred/2Repay/NonCov";
import Vw2BLCovCredSlsLn from "../../screens/MyAcc/VwCred/2BL/Cov";
import Vw2BLCredSlsNonCov from "../../screens/MyAcc/VwCred/2BL/NonCov";
import DeactAdm from "../../screens/MFAdmin/DeactivateMFAdmin/DeactivateMFNdogo";

import CompAbt from "../../screens/Settings/About";
import CompPolicy from "../../screens/Settings/Policy";
import CompPrivacy from "../../screens/Settings/Privacy";
import CompTC from "../../screens/Settings/TC";

import ViewAdv from "../../screens/Advocate/SearchAdvocate";





const Stack = createNativeStackNavigator();
const HomeNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'MyHome'} component={BtmTbNav} />

      <Stack.Screen name={'CompAbts'} component={CompAbt} />
      <Stack.Screen name={'CompPolicys'} component={CompPolicy} />
      <Stack.Screen name={'CompPrivacys'} component={CompPrivacy} />
      <Stack.Screen name={'CompTCs'} component={CompTC} />
      
      <Stack.Screen name={'ViewAdvs'} component={ViewAdv} />  
      
      <Stack.Screen name={'DeactAdms'} component={DeactAdm} />
      <Stack.Screen name={'Vw2RepyCredSlsCovLns'} component={Vw2RepyCredSlsCovLn} />
      <Stack.Screen name={'Vw2RepyCredSlsNonCovLns'} component={Vw2RepyCredSlsNonCovLn} />
      <Stack.Screen name={'Vw2BLCovCredSlsLns'} component={Vw2BLCovCredSlsLn} />
      <Stack.Screen name={'Vw2BLCredSlsNonCovs'} component={Vw2BLCredSlsNonCov} />
      
       <Stack.Screen name={'Vw2RepySMCovLns'} component={Vw2RepySMCovLn} />
      <Stack.Screen name={'Vw2RepySMNonCovLns'} component={Vw2RepySMNonCovLn} />
      <Stack.Screen name={'Vw2BLCovSMLns'} component={Vw2BLCovSMLn} />
      <Stack.Screen name={'Vw2BLSMNonCovs'} component={Vw2BLSMNonCov} />
      
      <Stack.Screen name={'SgnIn2BLCovs'} component={SgnIn2BLCov} />
      <Stack.Screen name={'SgnIn2BLNonCovs'} component={SgnIn2BLNonCov} />
      <Stack.Screen name={'Vw2BLCovs'} component={Vw2BLCov} />
      <Stack.Screen name={'Vw2BLNonCovs'} component={Vw2BLNonCov} />
      
      <Stack.Screen name={'Vw2RpyNonCovs'} component={Vw2RpyNonCov} />
      <Stack.Screen name={'Vw2RpyCovs'} component={Vw2RpyCov} />
      <Stack.Screen name={'VwChmMbrs2NonCovLnss'} component={VwChmMbrs2NonCovLns} />
      <Stack.Screen name={'SgnIn2LnMmbrNonCovs'} component={SgnIn2LnMmbrNonCov} />
      <Stack.Screen name={'SgnIn2LnMmbrs'} component={SgnIn2LnMmbr} />
      <Stack.Screen name={'VwChmMbrs2Ln'} component={VwChmMbrs2Ln} />
      <Stack.Screen name={'MmbrSndChmss'} component={MmbrSndChms} />
      <Stack.Screen name={'SndToChmMbrss'} component={SndToChmMbrs} />
      <Stack.Screen name={'ChamaSndMbrMneys'} component={ChamaSndMbrMneys} />
      <Stack.Screen name={'SndChmMbrMnys'} component={SndChmMbrMny} />
      <Stack.Screen name={'Commissionss'} component={Commissions} />
      <Stack.Screen name={'VwCompDtlss'} component={VwCompDtls} />
       <Stack.Screen name={'Aboutss'} component={Abouts} />
      <Stack.Screen name={'Alertss'} component={Alerts} />
      <Stack.Screen name={'Contactsss'} component={Contactss} />
      <Stack.Screen name={'Maximumss'} component={Maximums} />      
      <Stack.Screen name={'Passwordsss'} component={Passwordss} />
      <Stack.Screen name={'Policyss'} component={Policys} />
      <Stack.Screen name={'Privacyss'} component={Privacys} />
      <Stack.Screen name={'Recommendationsss'} component={Recommendationss} />
      <Stack.Screen name={'TCss'} component={TCs} />
      <Stack.Screen name={'TransactionFeess'} component={TransactionFees} />
      
      <Stack.Screen name={'WelcomePgss'} component={WelcomePgs} />
      <Stack.Screen name={'UpdateAccCodess'} component={UpdateAccCodes} />
      <Stack.Screen name={'MFKVwMFNSgnInss'} component={MFKVwMFNSgnIns} />
      <Stack.Screen name={'MFKVwMFNss'} component={MFKVwMFNs} />      
      <Stack.Screen name={'AdvVwCrdSlsSgnIns'} component={AdvVwCrdSlsSgnIn} />
      <Stack.Screen name={'AdvVwSMSgnIns'} component={AdvVwSMSgnIn} />
      <Stack.Screen name={'AdvWthdrwlSgnIns'} component={AdvWthdrwlSgnIn} />
      <Stack.Screen name={'AdvVwAcSgnIns'} component={AdvVwAcSgnIn} />
      <Stack.Screen name={'AdvVwChmSgnIns'} component={AdvVwChmSgnIn} />
      <Stack.Screen name={'VwAdvAcs'} component={VwAdvAc} />
      <Stack.Screen name={'VwAdvChamaCovLnss'} component={VwAdvChamaCovLns} />      
      <Stack.Screen name={'VwAdvCrdSlrCovLnss'} component={VwAdvCrdSlrCovLns} />
      <Stack.Screen name={'VwAdvSMCovLnss'} component={VwAdvSMCovLns} />
      <Stack.Screen name={'VwAdvWthdrwlss'} component={VwAdvWthdrwls} />
      <Stack.Screen name={'VwMFKAcSgnIns'} component={VwMFKAcSgnIn} />
      <Stack.Screen name={'VwMFKWthdrwlsSgnIns'} component={VwMFKWthdrwlsSgnIn} />
      <Stack.Screen name={'VwMFKAcs'} component={VwMFKAc} />
      <Stack.Screen name={'VwMFKWthdrwlss'} component={VwMFKWthdrwls} />

      <Stack.Screen name={'SearchMFNsssss'} component={SearchMFNs} />
      <Stack.Screen name={'VwMFNFltBuyss'} component={VwMFNFltBuys} />
      <Stack.Screen name={'VwMFNWthdrlss'} component={VwMFNWthdrls} />
      <Stack.Screen name={'VwFltWthdrwlss'} component={VwFltWthdrwls} />
      <Stack.Screen name={'VwUsrWthdrwlss'} component={VwUsrWthdrwls} />
      <Stack.Screen name={'VwUsrDpstss'} component={VwUsrDpsts} />
      <Stack.Screen name={'VwMFNAcss'} component={VwMFNAcs} />      
      <Stack.Screen name={'VwMFNAccountSgnIns'} component={VwMFNAccountSgnIn} />
      <Stack.Screen name={'FltWthdrwlsSgnIns'} component={FltWthdrwlsSgnIn} />
      <Stack.Screen name={'UsrWthdrwlsSgnIns'} component={UsrWthdrwlsSgnIn} />
      <Stack.Screen name={'MFNWithdrawlsSgnIns'} component={MFNWithdrawlsSgnIn} />
      <Stack.Screen name={'UsrDpositSgnIns'} component={UsrDpositSgnIn} />
      <Stack.Screen name={'FloatBghtSgnIns'} component={FloatBghtSgnIn} />
      <Stack.Screen name={'SMDpsitss'} component={SMDpsits} />
      <Stack.Screen name={'SMWthdrwlss'} component={SMWthdrwls} />
      <Stack.Screen name={'CredSlsLneess'} component={CredSlsLnees} />
      <Stack.Screen name={'CredSlsLnerss'} component={CredSlsLners} />
      <Stack.Screen name={'CredByrLneess'} component={CredByrLnees} />
      <Stack.Screen name={'CredByrLnerss'} component={CredByrLners} />
      <Stack.Screen name={'ChamaMmbrRemts'} component={ChamaMmbrRemt} />
      <Stack.Screen name={'ChmMmbrContris'} component={ChmMmbrContri} />
      <Stack.Screen name={'ChmMmbrMmbrss'} component={ChmMmbrMmbrs} />
      <Stack.Screen name={'ChamaRemts'} component={ChamaRemt} />
      <Stack.Screen name={'ChmContris'} component={ChmContri} />
      <Stack.Screen name={'ChmMmbrss'} component={ChmMmbrs} />
      <Stack.Screen name={'ChmSignIn5s'} component={ChmSignIn5} />
      <Stack.Screen name={'ChmSignIn6s'} component={ChmSignIn6} />
      <Stack.Screen name={'ChamaGenInfos'} component={ChamaGenInfo} />
      <Stack.Screen name={'ChamSignIn2s'} component={ChamSignIn2} />
      <Stack.Screen name={'ChamSignIn3s'} component={ChamSignIn3} />
      <Stack.Screen name={'ChamSignIn4s'} component={ChamSignIn4} />
      <Stack.Screen name={'ChmSignInss'} component={ChmSignIns} />
      <Stack.Screen name={'ChmLnsGvnOuts'} component={ChmLnsGvnOutCov} />
      <Stack.Screen name={'ChmLnsGvnOutNonCovs'} component={ChmLnsGvnOutNonCov} />
      <Stack.Screen name={'ChmLnsRecCovs'} component={ChmLnsRecCov} />
      <Stack.Screen name={'ChmLnsRecNonCovs'} component={ChmLnsRecNonCov} />
      <Stack.Screen name={'VwNonLnsSnts'} component={VwNonLnsSnt} />
      <Stack.Screen name={'VwNonLnsRecs'} component={VwNonLnsRec} />
      <Stack.Screen name={'ViewSmAcss'} component={ViewSmAcs} />
      <Stack.Screen name={'ViewSmAcs'} component={ViewSmAc} />
      <Stack.Screen name={'ViewMyNonCovLoaneess'} component={ViewMyNonCovLoanees} />
      <Stack.Screen name={'ViewMyNonCovLoanerss'} component={ViewMyNonCovLoaners} />
      <Stack.Screen name={'ViewMyCovLoanerss'} component={ViewMyLoaners} />
      <Stack.Screen name={'ViewMyCovLoaneess'} component={ViewMyLoanees} />
      <Stack.Screen name={'WthdrwMFNFlts'} component={WthdrwMFNFlt} />
      <Stack.Screen name={'AdvHms'} component={AdvHm} />
      <Stack.Screen name={'WthdrwMFNs'} component={WthdrwMFN} />
      <Stack.Screen name={'UpdtMFNPWs'} component={UpdtMFNPW} />
      <Stack.Screen name={'MFKWthdrws'} component={MFKWthdrw} />
      <Stack.Screen name={'UpdtMFKPWs'} component={UpdtMFKPW} />
      <Stack.Screen name={'BLUsrss'} component={BLUsrs} />
      <Stack.Screen name={'UpdtMFAdvPWs'} component={UpdtMFAdvPW} />
      <Stack.Screen name={'WithdwAdvs'} component={WithdwAdv} />
      <Stack.Screen name={'WithdwAdmns'} component={WithdwAdmn} />

      <Stack.Screen name={'MFNdogoo'} component={KFNdogo} />
      <Stack.Screen name={'MyHomeie'} component={Homeie} />
      <Stack.Screen name={'RegMFKbw'} component={RegisterKFKubwaAcForm} />
      <Stack.Screen name={'CreateSMAc'} component={CreateAcForm} />
      
      <Stack.Screen name={'RegMFNdgScrn'} component={RegMFNdogoFm}/>
      <Stack.Screen name={'BuyFltFm'} component={BuyFltForm}/>
      <Stack.Screen name={'DpstMney'} component={DpstMny}/>
      <Stack.Screen name={'CrtAdmin'} component={CrtAdmn}/>
      <Stack.Screen name={'SttinsHm'} component={SettnsHm}/>
      <Stack.Screen name={'MFAdminstrator'} component={MFAdm}/>
      <Stack.Screen name={'MFKbwa'} component={MFKbw}/>
      <Stack.Screen name={'MFNdogoss'} component={MFN}/>
      <Stack.Screen name={'MFAdvocateHome'} component={AdvcHm}/>
      <Stack.Screen name={'MFAdvocateReg'} component={AdvReg}/>
      <Stack.Screen name={'DActvteMFN'} component={DActivtMFN}/>
      <Stack.Screen name={'DActvteMFK'} component={DActivtMFK}/>
      <Stack.Screen name={'DActvteMFUsr'} component={DActivtMFUsr}/>
      <Stack.Screen name={'DActvteMFAd'} component={DActivtMFAdv}/>
      <Stack.Screen name={'SMGivCovLon'} component={SMGvCovLon}/>
      <Stack.Screen name={'SMGivNonCovLon'} component={SMASendNonCovLns}/>
      <Stack.Screen name={'SMWthdFm'} component={SMAWthdrwForm}/>
      <Stack.Screen name={'SendNonLnss'} component={SendNonLn}/>
      <Stack.Screen name={'RepayCovLnss'} component={RepayCovLns}/>
      <Stack.Screen name={'RepayNonCovLnss'} component={RepayNonCovLns}/>
     
      <Stack.Screen name={'CovCredSls'} component={CovCredSls}/>
      <Stack.Screen name={'NonCovCredSlss'} component={NonCovCredSls}/>
      <Stack.Screen name={'CredSlsHms'} component={NonCovCredSls}/>
      <Stack.Screen name={'CreateChms'} component={CreateChm}/>
      <Stack.Screen name={'AddChmMembrsss'} component={AddChmMembrss}/>
      <Stack.Screen name={'ChmCovLons'} component={ChmCovLon}/>
      <Stack.Screen name={'ChmNonCovLons'} component={ChmNonCovLon}/>
      <Stack.Screen name={'Contributionssss'} component={Contributionsss}/>
      <Stack.Screen name={'SndMbrsMnys'} component={SndMbrsMny}/>
      <Stack.Screen name={'BLChmMmberCovs'} component={BLChmMmberCov}/>
      <Stack.Screen name={'BLChmMmberNonCovs'} component={BLChmMmberNonCov}/>
    
     
      <Stack.Screen name={'RepyChmCovLns'} component={RepyChmCovLn}/>
      <Stack.Screen name={'RepyChmNonCovLns'} component={RepyChmNonCovLn}/>
      <Stack.Screen name={'BListCredByrCovs'} component={BListCredByrCov}/>
      <Stack.Screen name={'BListCredByrNonCovs'} component={BListCredByrNonCov}/>
      <Stack.Screen name={'RpayCredSlrCovs'} component={RpayCredSlrCov}/>
      <Stack.Screen name={'RpayCredSlrNonCovs'} component={RpayCredSlrNonCov}/>

      <Stack.Screen name={'BListSMLneeCovs'} component={BListSMLneeCov}/>
      <Stack.Screen name={'BListSMLneeNonCovs'} component={BListSMLneeNonCov}/>
      <Stack.Screen name={'RemoveChmMbrs'} component={RemoveChmMbr}/>
      <Stack.Screen name={'DissolveChms'} component={DissolveChm}/>
      <Stack.Screen name={'UpdateChms'} component={UpdateChm}/>
      <Stack.Screen name={'UpdateSMPWs'} component={UpdateSMPW}/>
      <Stack.Screen name={'UpdateMFAdminPWs'} component={UpdateMFAdminPW}/>

    </Stack.Navigator>
  );
};

export default HomeNavigator;