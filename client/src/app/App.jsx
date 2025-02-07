import { useState } from "react";
import "./App.css";
import Registration from "../components/Register/Registration";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import { ProtectedRoute } from "../components/ProtectedRoute";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/home" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route
          path="/register"
          element={<Registration token={token} setToken={setToken} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
