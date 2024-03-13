import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Login from "./Components/Login";
import Registration from "./Components/Registration";
import UserProfile from "./Components/UserProfile";
import Navigation from "./Components/Navigation";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation/>} >
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/UserProfile/:userid" element={<UserProfile />}></Route>
            <Route exact path="/Registration" element={<Registration />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;