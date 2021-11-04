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
import ChmContr from "../../screens/Chama/Contribtns";
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



const Stack = createNativeStackNavigator();
const HomeNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'MyHome'} component={BtmTbNav} />

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
      <Stack.Screen name={'ChmContrs'} component={ChmContr}/>
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