import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./Utility/main.css";
import HomePage from "./Screens/Component/HomePage";
import CasinoPage from "./Screens/Component/CasinoPage";
import Footer from "./Screens/Component/Footer";
import Header from "./Screens/Component/Header";
import Account from "./Screens/Component/Account";
import BFGStaking from "./Screens/Pages/BFGStaking";
import ReferralProgram from "./Screens/Pages/ReferralProgram";
import { useDispatch, useSelector } from "react-redux";
import { async_loaduser } from "./store/Actions/authActions";
import ProtectedRoute from "./helpers/ProtectedRoute";
import ReferralRegisteration from "./Screens/Component/ReferralRegisteration/ReferralRegisteration";
import DashBoardlayout from "./Dashboard/Components/DashBoard_layout";
import Dashboard from "./Dashboard/Pages/Dashboard";
import AlluserRewards from "./Dashboard/Pages/AlluserRewards";
import AlluserProfit from "./Dashboard/Pages/AlluserProfit";
import AlluserBalance from "./Dashboard/Pages/AlluserBalance";
import AlluserActivity from "./Dashboard/Pages/AlluserActivity";
import AlluserReferrals from "./Dashboard/Pages/AlluserReferrals";
import AllUser from "./Dashboard/Pages/AllUser";
import AlluserStatics from "./Dashboard/Pages/AlluserStatics";
import AlluserPayouts from "./Dashboard/Pages/AlluserPayouts";
import AllUserDetails from "./Dashboard/Pages/AllUserDetails";
import TotalPayouts from "./Dashboard/Pages/TotalPayouts";
import Subscriber from "./Dashboard/Pages/Subscriber";
import Logout from "./Dashboard/Pages/Logout";
import Slotmachine from "./Screens/SlotMachine/Slotmachine";
import HitandStay from "./Screens/HitAndStay/HitandStay";
import Aviator from "./Screens/Aviator/Aviator";
import Rouleta from "./Screens/RouletaComponents/Rouleta";
import Hunt from "./Screens/Hunt-the-Ace/Hunt";
import AllSlot_Game from "./Dashboard/Pages/AllSlot_Game";
import AllBlack_jack from "./Dashboard/Pages/AllBlack_jack";
import AllRoulleta from "./Dashboard/Pages/AllRoulleta";
import AllHunt_Game from "./Dashboard/Pages/AllHunt_Game";
import AllAvaiator from "./Dashboard/Pages/AllAvaiator";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(isAuthenticated);

  useEffect(() => {
    dispatch(async_loaduser());
  }, [dispatch]);

  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <div className="main-wrapper">
      {!isDashboardRoute && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/referral/:token" element={<ReferralRegisteration />} />
        <Route path="/casino" element={<CasinoPage />}></Route>
        <Route
          path="/slot"
          element={
            <ProtectedRoute>
              <Slotmachine />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blackjack"
          element={
            <ProtectedRoute>
              <HitandStay />
             </ProtectedRoute>
          }
        />
        <Route
          path="/Aviator"
          element={
            <ProtectedRoute>
              <Aviator />
             </ProtectedRoute>
          }
        />
        <Route
          path="/Rouleta"
          element={
            <ProtectedRoute>
              <Rouleta />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Hunt"
          element={
            <ProtectedRoute>
              <Hunt />
             </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BFGStaking"
          element={
            <ProtectedRoute>
              <BFGStaking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ReferralProgram"
          element={
            <ProtectedRoute>
              <ReferralProgram />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoardlayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/AlluserRewards"
            element={<AlluserRewards />}
          />
          <Route path="/dashboard/AlluserProfit" element={<AlluserProfit />} />
          <Route
            path="/dashboard/AlluserBalance"
            element={<AlluserBalance />}
          />
          <Route
            path="/dashboard/AlluserActivity"
            element={<AlluserActivity />}
          />
          <Route
            path="/dashboard/AlluserReferrals"
            element={<AlluserReferrals />}
          />
          <Route path="/dashboard/AllUser" element={<AllUser />} />
          <Route
            path="/dashboard/AllUser/userDetails/:user_id"
            element={<AllUserDetails />}
          />
          <Route
            path="/dashboard/AlluserStatics"
            element={<AlluserStatics />}
          />
          <Route path="/dashboard/TotalPayouts" element={<TotalPayouts />} />
          <Route
            path="/dashboard/AlluserPayouts"
            element={<AlluserPayouts />}
          />
          <Route path="/dashboard/Subscriber" element={<Subscriber />} />
          <Route path="/dashboard/Slot_Game" element={<AllSlot_Game />} />
          <Route path="/dashboard/Black_jack" element={<AllBlack_jack />} />
          <Route path="/dashboard/Roulleta" element={<AllRoulleta />} />
          <Route path="/dashboard/Hunt_Game" element={<AllHunt_Game />} />
          <Route path="/dashboard/Avaiator" element={<AllAvaiator />} />
          <Route path="/dashboard/Logout" element={<Logout />} />
        </Route>
      </Routes>
      {!isDashboardRoute && <Footer />}
    </div>
  );
};

export default App;
