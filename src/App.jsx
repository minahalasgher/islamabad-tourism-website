import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import "./App.css";
import Hero from "./components/hero/Hero";
import Community from "./components/our community/Community";
import Demo from "./components/our demo/Demo";
import Counter from "./components/counter/Counter";
import Path from "./components/path-to-success/Path";
import Explore from "./components/catagory/Explore";
import National from "./components/our national/National";
import Impact from "./components/impact/Impact";
import Islamabad from "./components/Islamabad/Islamabad";
import Hero1 from "./components/hero1/Hero1";
import Swezierland from "./components/swezierland/swezierland";
import StudentData from "./components/StudentData";
import Supabase from "./components/supabase/Supabase";
import Portfolio from "./components/portfolio/Portfolio";
import Japan from "./components/japan/Japan";
import TourismSection from "./components/TourismSection";
import TourismCards from "./components/TourismCards";
import TourismOrganizations from "./components/TourismOrganizations";
import TourismServices from "./components/TourismServices";
import Tourismvalleys from "./components/Tourismvalleys";
import TourismAbout from "./components/TourismAbout";
import HotelsSection from "./components/HotelsSection";
import TourSection from "./components/TourSection";
import IslamabadTourContact from "./components/IslamabadTourContact";
import TrendingTour from "./components/TrendingTour";
import CarSection from "./components/CarSection";
import TravelBlogs from "./components/TravelBlogs";
import ContributorsSection from "./components/ContributorsSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import TravelTips from "./components/TravelTips";
import Booking from "./pages/Booking";

function Home() {
  return (
    <>
      {/* <Header />
      <Hero/>
      <Community/>
      <Demo/>
      <Counter/>   
      <Explore/>
      <Path/>  
      <National/>
      <Impact/>   
      <StudentData /> 
      <Portfolio/> */}

      {/* <Islamabad/> */}
      {/* <Swezierland/> */}
      {/* <Lahore/> */}
      {/* <Supabase/> */}
      {/* <Japan/> */}
      {/* <StudentData /> */}

      <Navbar />
      <Hero1 />
      <TourismSection />
      <TourismCards />
      <TourismServices />
      <Tourismvalleys />
      <TourismAbout />
      <HotelsSection />
      <TourSection />
      <TourismOrganizations />
      <IslamabadTourContact />
      <TrendingTour />
      <CarSection />
      <TravelBlogs />
      <TravelTips />
      <ContributorsSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/booking" element={<Booking />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;