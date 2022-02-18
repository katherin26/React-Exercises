import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import ChatImg from "../assets/chatCover.jpg";
import Chatwallpaper from "../assets/chatwallpaper3.png";

/* {isSignup && () = THis is the shorthand method for the ternary operator, use the ternary if you have 
two things that you want to show but you simply say is sign up and the and and if you only need to show
one thing based on this condition. }

NOTE: Line 100, In this paragraph we want to show a different message depending on if user is sign up or
if not so we can say if is isSignUp in that case we can display a message something like this is signUp 
and that's going to be already have an account ? but if it's not then we can say don't have an account?
we need to be able to switch between the modes and then we are gonne have a span element instead of that
p element and it's going to have the onClick property which is going to say switchMode 

NOTE: Handle The data with handleChange = inside the setForm we put an object and we need to spread all of 
the items from the form, so we spread all the other inputs because we're only changing one and we want to
keep all the other ones but then how do we change a specific one well we're gonna get a e.target.name , that's
the name of the input we're changing and then the value for that same input is under the e.target.value 
and why we are using square brackets right there because is a syntax error so you have to wrap the name of
this specific object key in the square brackets[e.target.name ] and then set that equal to : e.target.value that's going to 
update our state field and 
*/

//NOTE: CREATING COOKIES
const cookies = new Cookies();

const initialState = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //NOTE:Send the data to the backend.

  const handleSubmit = async (e) => {
    e.preventDefault(); //Because is gonna reload the page.
    const { username, password, phoneNumber, avatarURL } = form;
    const URL = "https://ailtbwowmd.execute-api.us-east-1.amazonaws.com/auth";
    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    });

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }
    /*NOTE:  Now we set the cookies we want to reload our browser */
    window.location.reload();
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Registrarse" : "Entrar a la cuenta"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Nombre</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Telefono</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar (Direccion de URL)</label>
                <input
                  name="avatarURL"
                  type="text"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Contraseña</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="confirmPassword"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Registrarse" : "Entrar a la cuenta"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Ya tienes una cuenta? " : "No tienes cuenta? "}
              <span onClick={switchMode}>
                {isSignup ? "Entrar a la cuenta" : "Registrarse"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={Chatwallpaper} alt="sign in" />
      </div>
    </div>
  );
};

export default Auth;
