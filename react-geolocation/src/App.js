import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import React, { useState } from "react";

function App() {
  const [auth, setAuth] = useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div className="App">
      <Header
        name="Geolocation Project"
        handleChange={handleChange}
        auth={auth}
      />
      {auth && <Content />}
    </div>
  );
}

export default App;
