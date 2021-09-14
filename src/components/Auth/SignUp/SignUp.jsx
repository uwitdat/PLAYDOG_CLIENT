import React, { useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
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
    <div>
      <div className='Auth'>
        <h5>
          Sign up
        </h5>

        <form
          className='Auth__form'
          noValidate>
          <fieldset>
            <input
              className='Auth__input'
              id="email"
              label={errors.email.length < 1 ? "Email Address" : "Email ERROR"}
              name="email"
              autoComplete="email"
              autoFocus
              placeholder='Email'
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email.length > 0 ? errors.email : ''}
            />

            <span>
              {errors.email.length > 0 && errors.email}
            </span>
          </fieldset>

          <fieldset>
            <input
              className='Auth__input'
              name="password"
              label={errors.password.length < 1 ? "Password" : "Password ERROR"}
              id="password"
              autoComplete="current-password"
              type="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password.length > 0 ? errors.password : ''}
            />

            <span>
              {errors.password.length > 0 && errors.password}
            </span>
          </fieldset>

          <button
            type="submit"
            className="Auth__btn"
            onClick={(event) => signInWithProvider(event, "email")}
          >
            Sign Up
          </button>

          <div>
            <div>
              <Link to="/sign-in">
                <p
                  className="Auth__txt"
                >
                  Already have an account? <span className='bold'>Login</span>
                </p>
              </Link>
            </div>

            <div className="display-center mt-2">

              <AiFillGoogleCircle
                className="Auth__google-icon"
                onClick={(event) => signInWithProvider(event, "google")}
              >
                <i className="fa fa-google" aria-hidden="true"></i>
              </AiFillGoogleCircle>
            </div>
            <p className='Auth__google-txt'>Signup with Google</p>
          </div>
        </form>
      </div>

    </div>
  );
}