import "./App.css";
import { useState } from "react";
import FormTest from "./FormTest";
import Header from "./components/Header";
import Login from "./scenes/Login";

function App() {
  const [user, setUser] = useState();
  return (
    <>
      <Header user={user} setUser={setUser} />
      <FormTest />
      {!user && <Login setUser={setUser} />}
    </>
  );
}

export default App;
