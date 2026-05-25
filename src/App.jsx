import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import CricketDashboard from "./components/CricketDashboard";
import FootballDashboard from "./components/FootballDashboard";
import TennisDashboard from "./components/TennisDashboard";
import CasinoProviders from "./components/CasinoProviders";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer from "./components/Footer";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// SPORT PAGES
import CricketPage from "./pages/CricketPage";
import FootballPage from "./pages/FootballPage";
import TennisPage from "./pages/TennisPage";

// ALL PAGES
import AboutUs from "./pages/about-us/page";
import ResponsibleGaming from "./pages/responsible-gaming/page";
import CustomerCare from "./pages/customer-care/page";
import Terms from "./pages/terms/page";
import PrivacyPolicy from "./pages/privacy/page";
import Blogs from "./pages/blogs/page";
import Categories from "./pages/categories/page";

// 👇 ADD THIS
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import InstallAppPopup from "./components/InstallAppPopup";

// 👇 SCROLL TO TOP COMPONENT
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      {/* 👇 ADD THIS */}
      <ScrollToTop />
       <InstallAppPopup />
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <MainLayout>
              <div className="max-w-7xl mx-auto p-4 space-y-4">
                <CricketDashboard />
                <FootballDashboard />
                <TennisDashboard />
                <CasinoProviders />
                <UpcomingEvents />
                <Footer />
              </div>
            </MainLayout>
          }
        />

        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* REGISTER */}
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* CRICKET PAGE */}
        <Route
          path="/cricket-page"
          element={
            <MainLayout>
              <CricketPage />
            </MainLayout>
          }
        />

        {/* FOOTBALL PAGE */}
        <Route
          path="/football-page"
          element={
            <MainLayout>
              <FootballPage />
            </MainLayout>
          }
        />

        {/* TENNIS PAGE */}
        <Route
          path="/tennis-page"
          element={
            <MainLayout>
              <TennisPage />
            </MainLayout>
          }
        />

        {/* ABOUT US */}
        <Route
          path="/about-us"
          element={
            <MainLayout>
              <AboutUs />
              <Footer />
            </MainLayout>
          }
        />

        {/* RESPONSIBLE GAMING */}
        <Route
          path="/responsible-gaming"
          element={
            <MainLayout>
              <ResponsibleGaming />
              <Footer />
            </MainLayout>
          }
        />

        {/* CUSTOMER CARE */}
        <Route
          path="/customer-care"
          element={
            <MainLayout>
              <CustomerCare />
              <Footer />
            </MainLayout>
          }
        />

        {/* TERMS */}
        <Route
          path="/terms"
          element={
            <MainLayout>
              <Terms />
              <Footer />
            </MainLayout>
          }
        />

        {/* PRIVACY */}
        <Route
          path="/privacy"
          element={
            <MainLayout>
              <PrivacyPolicy />
              <Footer />
            </MainLayout>
          }
        />

        {/* BLOGS */}
        <Route
          path="/blogs"
          element={
            <MainLayout>
              <Blogs />
              <Footer />
            </MainLayout>
          }
        />

        {/* CATEGORIES */}
        <Route
          path="/categories"
          element={
            <MainLayout>
              <Categories />
              <Footer />
            </MainLayout>
          }
        />

      </Routes>
    </>
  );
}

export default App;

