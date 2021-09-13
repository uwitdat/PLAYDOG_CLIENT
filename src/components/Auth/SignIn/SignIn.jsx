import React, { useState } from 'react';
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";
// import Notifications from "../../General/Notifications/Notifications";
import "../Auth.scss";
import Copyright from 'components/Copyright/Copyright';

export default function SignIn() {
  const firebase = useFirebase();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    "email": "",
    "password": "",
    "error": ""
  });

  const signInWithProvider = async (event, provider) => {
    event.preventDefault()
    let userEmail = email.length >= 1 ? email : "";
    let userPassword = password.length >= 1 ? password : "";

    try {
      const response = await firebase
      .login({
        provider: provider === "email" ? null : provider,
        type: "popup",
        email: userEmail,
        password: userPassword,
      })

      console.log(response)
      const token = await firebase.auth().currentUser.getIdToken()
      localStorage.setItem('fb-token', token)
      history.push("/");

    } catch(err) {
      console.log(err)
      console.log(`Error: ${err.message}`)
      if (err.code?.includes('email')) {
        setErrors({
          "email": err.message,
          "password": errors.password,
          "error": errors.error
        });
      } else if (err.code?.includes('password')) {
        setErrors({
          "email": errors.email,
          "password": err.message,
          "error": errors.error
        });
      } else {
      setErrors({
        "email": errors.email,
        "password": errors.password,
        "error": err.message,
      });
    }
    }
  };

  return (
    <div>
      <div>
        {/* <Avatar className="lock-icon">
          <LockOutlinedIcon />
        </Avatar> */}
        LOCK ICON

        <h5>
          Sign in
        </h5>

        {errors.error.length > 0 && (
        <div severity="error" className="mt-2">
          <span>Error</span>
          {errors.error}
        </div>
        )}

        <form noValidate>
          <fieldset>
            <input
              required
              id="email"
              label={errors.email.length < 1 ? "Email Address" : "Email ERROR"}
              helperText={errors.email.length > 0 && errors.email}
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email.length > 0}
            />
          </fieldset>

          <fieldset>
            <input
              required
              name="password"
              label={errors.password.length < 1 ? "Password" : "Password ERROR"}
              helperText={errors.password.length > 0 && errors.password}
              id="password"
              autoComplete="current-password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password.length > 0}
            />
          </fieldset>

          <label htmlFor="checkbox">
            Remember Me
          </label>

          <input type="checkbox" value="remember" color="primary" />

          <button
            type="submit"
            fullWidth
            variant="contained"
            className="sign-in--email primary-bg"
            onClick={(event) => signInWithProvider(event, "email")}
          >
            Sign In
          </button>


          <div container>
            <div
              item
              xs={12}
            >
              <Link to="/forgot-password" variant="body2">
                <p>
                    Forgot Password?
                </p>
              </Link>
            </div>

            <div
              item
              xs={12}
              className="mt-2"
            >
              <Link to="/sign-up">
                <p
                  className="display-center"
                >
                    Don&apos;t have an account?
                    <button
                      color="primary"
                      className="ml-2">
                        Sign Up
                    </button>
                </p>
              </Link>
            </div>

            <div item xs={12} className="display-center p-3">
              <button
                className="sign-in--google primary-bg"
                onClick={(event) => signInWithProvider(event, "google")}
              >
                <i className="fa fa-google" aria-hidden="true"></i>

                <span className="pl-1">
                  Login with Google
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <Copyright />
    </div>
  );
}
