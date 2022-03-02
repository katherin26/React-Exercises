import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

/*NOTE: For use react-router-dom we need to wrap all inside the BrowserRouter and the use the Switch 
tag to add the route path. */
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Routes>
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;
