import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import memories from "../../images/memories.png";
import decode from "jwt-decode";

import useStyles from "./styles";
import { LOGOUT } from "../../constants/actionTypes";

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
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/auth");
    setUser(null);
  };

  /*NOTE: JTW DECODE AND TOKEN EXPIRED: if token exist decode.
    if the decoded token is expired * 1000 (this is going to be a certain value in milliseconds) if that
    is lower than new Date() in that case we want to called logout() action.
  */
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
              Log Out
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
