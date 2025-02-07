import { useState } from "react";
import "./App.css";
import Registration from "../components/Register/Registration";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Registration token={token} setToken={setToken} />
    </>
  );
}

export default App;
