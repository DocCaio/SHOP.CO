import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";

import ErrorPage from "./Pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;