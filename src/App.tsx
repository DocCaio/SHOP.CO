import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";

import ErrorPage from "./Pages/ErrorPage";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Payments from "./Pages/Payments";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Payments />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>        
      </main>
       <Newsletter/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;