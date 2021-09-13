import React, { useState } from 'react';
import Copyright from 'components/Copyright/Copyright';
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";
import "../Auth.scss";

export default function SignUp() {
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
    if (provider === "email") {
      try {
        const response = await firebase
          .createUser({
            email,
            password,
          })

      console.log(response)
      const token = await firebase.auth().currentUser.getIdToken()
      localStorage.setItem('fb-token', token)
      history.push("/");
    } catch (err) {
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
    } else {
      try {
        const response = await firebase
          .login({
            provider: provider,
            type: "popup",
            email: userEmail,
            password: userPassword,
          })

        console.log(response)
        const token = await firebase.auth().currentUser.getIdToken()
        localStorage.setItem('fb-token', token)
        history.push("/");
    } catch (err) {
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
    }
  };

  return (
    <div component="main" maxWidth="xs">
      <div>
        {/* <Avatar className="lock-icon">
          <LockOutlinedIcon />
        </Avatar> */}
        LOCK ICON

        <h5>
          Sign up
        </h5>

        <form noValidate>
          <fieldset>
            <input
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

          <button
            type="submit"
            fullWidth
            variant="contained"
            className="sign-in--email primary-bg"
            onClick={(event) => signInWithProvider(event, "email")}
          >
            Sign Up
          </button>

          <div container justifyContent="flex-end">
            <div item>
              <Link to="/sign-in">
                <p
                  className="display-center"
                >
                  Already have an account?
                  <button
                    variant="text"
                    color="primary"
                    className="ml-2">
                      Sign In
                  </button>
                </p>
              </Link>
            </div>

          <div item xs={12} className="display-center mt-2">
              <button
                variant="contained"
                className="sign-in--google primary-bg"
                onClick={(event) => signInWithProvider(event, "google")}
              >
                <i className="fa fa-google" aria-hidden="true"></i>

                <span className="pl-1">
                  Sign Up with Google
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