import React from "react";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Footer from "./Footer";
import Header from "./Header";
import GoogleLogin from "../views/GoogleLogin";
import GoogleRedirect from "../views/GoogleRedirect";
import ResetPassword from "./auth/ResetPassword";
import PublicRoutes from "./helper/PublicRoutes.tsx";
import PrivateRoutes from "./helper/PrivateRoutes";
import Profile from "./profile/Profile";
import EditProfile from "./profile/EditProfile";
import Voting from "../views/Voting";
import Forum from "../views/Forum";
import Coindetail from "../views/Coindetail";
import Auction from "../views/Auction";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export function Routers() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route
          path="/Voting"
          element={
            <PublicRoutes>
              <Voting />
            </PublicRoutes>
          }
        />
        <Route
          path="/Forum"
          element={
            
              <Forum />
            
          }
        />
        <Route
          path="/Coindetail"
          element={
            
              <Coindetail />
            
          }
        />
        <Route
          path="/Auction"
          element={
            
              <Auction />
            
          }
        />
        <Route path="/google/redirect" element={<GoogleRedirect />} />
        <Route path="/" element={<Navigate to="/Dashboard" />} />
      </Route>
    </Routes>
  );
}

export default Routers;
