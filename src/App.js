import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./App.css";
import AppLayoutA from "./components/Admin panel/Layout/AppLayoutA";
import Profile from "./components/Admin panel/Dashboard/Profile";
import Sidebar1 from "./components/Admin panel/Dashboard/Sidebar1";
import Login from "./components/Form/Login";
import Registration from "./components/Form/Registration";
import Home from "./components/Home/Home";
import Customers from "./components/Admin panel/Dashboard/Customers";

function App() {
  return (
    <BrowserRouter>
      <Sidebar1>
        <Routes>
          <Route path="/Panel" element={<AppLayoutA />}></Route>
        </Routes>
      </Sidebar1>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registration />} />
        {/* <Route path="/Dashboard" element={<Sidebar1/>}/> */}

        <Route path="/Profile" element={<Profile />} />
        <Route path="/Customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
