// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import MainLayout from "./layouts/MainLayout";
import CricketDashboard from "./components/CricketDashboard";
import FootballDashboard from "./components/FootballDashboard";
import TennisDashboard from "./components/TennisDashboard";
import CasinoProviders from "./components/CasinoProviders";
import UpcomingEvents from "./components/UpcomingEvents";
import ReddyBookLandingPage from "./components/ReddyBookLandingPage"
import Footer from "./components/Footer";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard"; // You'll need to create this

// SPORT PAGES
import CricketPage from "./pages/CricketPage";
import FootballPage from "./pages/FootballPage";
import TennisPage from "./pages/TennisPage";
import InPlayPage from "./pages/in-play/page";
import Fantasy11Page from "./pages/Fantasy11Page";
import CasinoPage from "./pages/CasinoPage";
import SportsbookPage from "./pages/SportsbookPage";
import MmaPage from "./pages/MmaPage";
import GolfPage from "./pages/GolfPage";
import EsportsPage from "./pages/EsportsPage";
import KabaddiPage from "./pages/KabaddiPage";
import BasketballPage from "./pages/BasketballPage";
import BaseballPage from "./pages/BaseballPage";
import VolleyballPage from "./pages/VolleyballPage";
import BadmintonPage from "./pages/BadmintonPage";
import HockeyPage from "./pages/HockeyPage";
import RugbyPage from "./pages/RugbyPage";
import BoxingPage from "./pages/BoxingPage";
import HorseRacingPage from "./pages/HorseRacingPage";
import GreyhoundPage from "./pages/GreyhoundPage";
import DartsPage from "./pages/DartsPage";
import SnookerPage from "./pages/SnookerPage";
import CyclingPage from "./pages/CyclingPage";
import HandballPage from "./pages/HandballPage";
import FutsalPage from "./pages/FutsalPage";
import MotorsportPage from "./pages/MotorsportPage";
import Formula1Page from "./pages/Formula1Page";
import PoliticsPage from "./pages/PoliticsPage";
import CockFightPage from "./pages/CockFightPage";
import BinaryPage from "./pages/BinaryPage";

// ALL PAGES
import AboutUs from "./pages/about-us/page";
import ResponsibleGaming from "./pages/responsible-gaming/page";
import CustomerCare from "./pages/customer-care/page";
import Terms from "./pages/terms/page";
import PrivacyPolicy from "./pages/privacy/page";
import Blogs from "./pages/blogs/page";
import Categories from "./pages/categories/page";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import InstallAppPopup from "./components/InstallAppPopup";

// Protected Route Component
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  
  if (!token) {
    toast.error("Please login to access this page");
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Scroll to Top Component - Enhanced for all routes including footer pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top without animation for instant response
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "instant" for immediate scroll, or "smooth" for animated
    });
    
    // Also handle any delayed content rendering
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
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
                <ReddyBookLandingPage/>
                <Footer />
              </div>
            </MainLayout>
          }
        />

        {/* LOGIN & REGISTER */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ADMIN DASHBOARD - PROTECTED */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

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

        {/* IN-PLAY PAGE */}
        <Route
          path="/in-play"
          element={
            <MainLayout>
              <InPlayPage />
            </MainLayout>
          }
        />

        {/* FANTASY 11 */}
        <Route
          path="/fantasy-11"
          element={
            <MainLayout>
              <Fantasy11Page />
            </MainLayout>
          }
        />

        {/* CASINO */}
        <Route
          path="/casino"
          element={
            <MainLayout>
              <CasinoPage />
            </MainLayout>
          }
        />

        {/* SPORTSBOOK */}
        <Route
          path="/sportsbook"
          element={
            <MainLayout>
              <SportsbookPage />
            </MainLayout>
          }
        />

        {/* MMA */}
        <Route
          path="/mma"
          element={
            <MainLayout>
              <MmaPage />
            </MainLayout>
          }
        />

        {/* GOLF */}
        <Route
          path="/golf"
          element={
            <MainLayout>
              <GolfPage />
            </MainLayout>
          }
        />

        {/* ESPORTS */}
        <Route
          path="/esports"
          element={
            <MainLayout>
              <EsportsPage />
            </MainLayout>
          }
        />

        {/* KABADDI */}
        <Route
          path="/kabaddi"
          element={
            <MainLayout>
              <KabaddiPage />
            </MainLayout>
          }
        />

        {/* BASKETBALL */}
        <Route
          path="/basketball"
          element={
            <MainLayout>
              <BasketballPage />
            </MainLayout>
          }
        />

        {/* BASEBALL */}
        <Route
          path="/baseball"
          element={
            <MainLayout>
              <BaseballPage />
            </MainLayout>
          }
        />

        {/* VOLLEYBALL */}
        <Route
          path="/volleyball"
          element={
            <MainLayout>
              <VolleyballPage />
            </MainLayout>
          }
        />

        {/* BADMINTON */}
        <Route
          path="/badminton"
          element={
            <MainLayout>
              <BadmintonPage />
            </MainLayout>
          }
        />

        {/* HOCKEY */}
        <Route
          path="/hockey"
          element={
            <MainLayout>
              <HockeyPage />
            </MainLayout>
          }
        />

        {/* RUGBY */}
        <Route
          path="/rugby"
          element={
            <MainLayout>
              <RugbyPage />
            </MainLayout>
          }
        />

        {/* BOXING */}
        <Route
          path="/boxing"
          element={
            <MainLayout>
              <BoxingPage />
            </MainLayout>
          }
        />

        {/* HORSE RACING */}
        <Route
          path="/horse-racing"
          element={
            <MainLayout>
              <HorseRacingPage />
            </MainLayout>
          }
        />

        {/* GREYHOUND */}
        <Route
          path="/greyhound"
          element={
            <MainLayout>
              <GreyhoundPage />
            </MainLayout>
          }
        />

        {/* DARTS */}
        <Route
          path="/darts"
          element={
            <MainLayout>
              <DartsPage />
            </MainLayout>
          }
        />

        {/* SNOOKER */}
        <Route
          path="/snooker"
          element={
            <MainLayout>
              <SnookerPage />
            </MainLayout>
          }
        />

        {/* CYCLING */}
        <Route
          path="/cycling"
          element={
            <MainLayout>
              <CyclingPage />
            </MainLayout>
          }
        />

        {/* HANDBALL */}
        <Route
          path="/handball"
          element={
            <MainLayout>
              <HandballPage />
            </MainLayout>
          }
        />

        {/* FUTSAL */}
        <Route
          path="/futsal"
          element={
            <MainLayout>
              <FutsalPage />
            </MainLayout>
          }
        />

        {/* MOTORSPORT */}
        <Route
          path="/motorsport"
          element={
            <MainLayout>
              <MotorsportPage />
            </MainLayout>
          }
        />

        {/* FORMULA 1 */}
        <Route
          path="/formula1"
          element={
            <MainLayout>
              <Formula1Page />
            </MainLayout>
          }
        />

        {/* POLITICS */}
        <Route
          path="/politics"
          element={
            <MainLayout>
              <PoliticsPage />
            </MainLayout>
          }
        />

        {/* COCK FIGHT */}
        <Route
          path="/cock-fight"
          element={
            <MainLayout>
              <CockFightPage />
            </MainLayout>
          }
        />

        {/* BINARY */}
        <Route
          path="/binary"
          element={
            <MainLayout>
              <BinaryPage />
            </MainLayout>
          }
        />

        {/* ABOUT US - Fixed scroll to top */}
        <Route
          path="/about-us"
          element={
            <MainLayout>
              <AboutUs />
              <Footer />
            </MainLayout>
          }
        />

        {/* RESPONSIBLE GAMING - Fixed scroll to top */}
        <Route
          path="/responsible-gaming"
          element={
            <MainLayout>
              <ResponsibleGaming />
              <Footer />
            </MainLayout>
          }
        />

        {/* CUSTOMER CARE - Fixed scroll to top */}
        <Route
          path="/customer-care"
          element={
            <MainLayout>
              <CustomerCare />
              <Footer />
            </MainLayout>
          }
        />

        {/* TERMS - Fixed scroll to top */}
        <Route
          path="/terms"
          element={
            <MainLayout>
              <Terms />
              <Footer />
            </MainLayout>
          }
        />

        {/* PRIVACY - Fixed scroll to top */}
        <Route
          path="/privacy"
          element={
            <MainLayout>
              <PrivacyPolicy />
              <Footer />
            </MainLayout>
          }
        />

        {/* BLOGS - Fixed scroll to top */}
        <Route
          path="/blogs"
          element={
            <MainLayout>
              <Blogs />
              <Footer />
            </MainLayout>
          }
        />

        {/* CATEGORIES - Fixed scroll to top */}
        <Route
          path="/categories"
          element={
            <MainLayout>
              <Categories />
              <Footer />
            </MainLayout>
          }
        />

        {/* 404 - NOT FOUND */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;