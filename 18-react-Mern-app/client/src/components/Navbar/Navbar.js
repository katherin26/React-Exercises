import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import memories from "../../images/memories.png";

import useStyles from "./styles";

/*NOTE: Component={Link} to="/" this point to our main route.
2. if user exits then we are going to show his information and if not we show nothing.

Another change in react router v5 is the useHistory === to useNavigate. and we use this hook
when in log out return to the root page.
*/

function Navbar() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  // useEffect(() => {
  //   const token = user?.token;
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, []);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">
          <Link to="/">Memories</Link>
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="contained" color="primary">
            <Link to="/auth">Sing In</Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
