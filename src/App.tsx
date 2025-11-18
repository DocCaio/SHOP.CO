import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";

import ErrorPage from "./Pages/ErrorPage";

import "./App.css";
import Header from "./components/Header";

import Payments from "./Pages/Payments";
import Newsletter from "./components/Newsletter";
import { CouponSection } from "./components/CouponSection";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CouponSection/>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>        
      </main>
       <Newsletter/>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;