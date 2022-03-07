import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

/*NOTE: For use react-router-dom we need to wrap all inside the BrowserRouter and the use the Switch 
tag to add the route path. 
  //NOTE: Pagination : we need to add Redirect component 

  Inside the Route component , of all we're going to have a path just, which usually renders first on the 
  page, we don't want to render a home component there, what we want to do is call a callback function 
  which is going to call the redirect component and that redirect is going to redirect us to , and that's
  going to be /posts, 
  so we only want to see posts if we are on this specific path (path="/") and we 
  are going to be immediately redirected if we do this. also we need to have a new tag router and is going 
  to render the component called home in the path /posts/search

  //IMPORTANT: React router v6 change the redirect for a function called Redirect , and only you need 
  to add this function insde the route component.

*/

function Redirect({ to }) {
  let navigate = useNavigate();
  console.log(Redirect);
  console.log(useEffect);
  console.log(`redirect and useEffect`);
  useEffect(() => {
    navigate(to);
  });
  return null;
  console.log(`redirect and useEffect`);
}

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Redirect to="/posts" />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={PostDetails} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
