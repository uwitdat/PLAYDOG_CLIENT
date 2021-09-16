import React, { useState } from 'react';
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";
// import Notifications from "../../General/Notifications/Notifications";
import "../Auth.scss";
import { connect } from 'react-redux';
import GoogleIcon from 'assets/images/Google_Logo.png'

function SignIn({ responsive }) {
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

    } catch (err) {
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
      <div className='Auth'>
        <h5>
          Login
        </h5>

        {errors.error.length > 0 && (
          <p className='Auth__txt err'>{errors.error}</p>
        )}

        <p className='Auth__txt err'>
          {errors.password.length > 0 && errors.password}
        </p>

        <form
          className='Auth__form'
          noValidate>
          <fieldset>
            <input
              className='Auth__input'
              required
              id="email"
              label={errors.email.length < 1 ? "Email Address" : "Email ERROR"}
              name="email"
              autoComplete="email"
              placeholder='Email'
              autoFocus
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
              required
              placeholder='Password'
              name="password"
              label={errors.password.length < 1 ? "Password" : "Password ERROR"}
              id="password"
              autoComplete="current-password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password.length > 0 ? errors.password : ''}
            />


          </fieldset>

          {/*<label htmlFor="checkbox">
            Remember Me
        </label>

          <input type="checkbox" value="remember" color="primary" />*/}

          <button
            type="submit"
            className="Auth__btn"
            onClick={(event) => signInWithProvider(event, "email")}
          >
            Sign In
          </button>


          <div>
            <div>
              <Link to="/forgot-password" variant="body2">
                <p className="Auth__txt blue">
                  Forgot Password?
                </p>
              </Link>
            </div>

            <div className="mt-2">
              <Link to="/sign-up">
                <p
                  className="Auth__txt"
                >
                  Don&apos;t have an account? <span className='bold'>Signup</span>
                </p>
              </Link>
            </div>

            <div className="display-center mt-2">
              <img src={GoogleIcon} style={{ height: '5rem' }} alt='#' className="Auth__google-icon" onClick={(event) => signInWithProvider(event, "google")} />
              <i className="fa fa-google" aria-hidden="true"></i>

              {/* <AiFillGoogleCircle
                className="Auth__google-icon"
                onClick={(event) => signInWithProvider(event, "google")}
              >
                <i className="fa fa-google" aria-hidden="true"></i>

              </AiFillGoogleCircle>*/}
            </div>
            <p className='Auth__google-txt'>Login with Google</p>
          </div>
        </form>
      </div>
    </div>
  );
}

SignIn.propTypes = {
}

const mapStateToProps = (state) => {
  return {
    responsive: state.responsive
  }
};

export default connect(mapStateToProps, {})(SignIn);
