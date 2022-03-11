import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Application from "./components/application/Application";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        {auth ? (
          <Routes>
            <Route path="/" element={<Application />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
