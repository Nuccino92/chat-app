import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Application from "./components/application/Application";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Application />} />
            <Route path="/*" element={<Application />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Login />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
