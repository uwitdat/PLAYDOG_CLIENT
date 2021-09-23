import local from 'api/local';
import React, { useState } from 'react';
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";
import GoogleIcon from 'assets/images/Google_Logo.png'
import "../Auth.scss";

export default function SignUp() {
  const firebase = useFirebase();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState({
    state: false,
    msg: ''
  })
  const [errors, setErrors] = useState({
    "email": "",
    "password": "",
    "error": ""
  });

  const signInWithProvider = async (event, provider) => {
    event.preventDefault()
    let userEmail = email.length >= 1 ? email : "";
    let userPassword = password.length >= 1 ? password : "";
    if (password !== confirmPassword) {
      setErr({
        state: true,
        msg: 'Your passwords do not match'
      })
      setConfirmPassword('')
      setPassword('')
    }
    else if (provider === "email") {
      try {
        const response = await firebase
          .createUser({
            email,
            password,
          })

          const newUser = await local.post('/users/', {
            username: email,
            email,
            avatar_url: {
              url: response.profile.avatarUrl
            }
          })

        if (newUser.data.id) {
          await firebase.updateProfile({
            "id": newUser.data.id
          })
        }

        const token = await firebase.auth().currentUser.getIdToken()
        localStorage.setItem('fb-token', token)
        history.push("/");
      } catch (err) {
        if (err.code?.includes('email')) {
          setErrors({
            ...errors,
            "email": err.message,
          });
        } else if (err.code?.includes('password')) {
          setErrors({
            ...errors,
            "password": err.message,
          });
        } else {
          setErrors({
            ...errors,
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

        const newUserEmail = response.profile.email || ''

        if (newUserEmail.length > 0) {
          try {
            const newUser = await local.post('/users/', {
              username: newUserEmail,
              email: newUserEmail,
              avatar_url: {
                url: response.profile.avatarUrl
              }
            })

            if (newUser.data.id) {
              await firebase.updateProfile({
                "id": newUser.data.id
              })
            }

            if (newUser.data.status !== 409) {
              const token = await firebase.auth().currentUser.getIdToken()
              localStorage.setItem('fb-token', token)
              history.push("/");
            } else {
              setErrors({
                ...errors,
                "error": "User already exists."
              });
            }
          } catch (err) {
            setErrors({
              ...errors,
              "error": err
            });
          }
        }

      } catch (err) {
        if (err.code?.includes('email')) {
          setErrors({
            ...errors,
            "email": err.message
          });
        } else if (err.code?.includes('password')) {
          setErrors({
            ...errors,
            "password": err.message,
          });
        } else {
          setErrors({
            ...errors,
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
        {err.state === true ? <p className='Auth__txt err'>{err.msg}</p> : null}
        <p className='Auth__txt err'>{errors.email.length > 0 && errors.email}</p>
        <p className='Auth__txt err'>{errors.password.length > 0 && errors.password}</p>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password.length > 0 ? errors.password : ''}
            />


          </fieldset>
          <input
            className='Auth__input'
            name="password-confirm"
            placeholder='Confirm Password'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

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
              <img src={GoogleIcon} style={{ height: '5rem' }} alt='#' className="Auth__google-icon" onClick={(event) => signInWithProvider(event, "google")} />
              <i className="fa fa-google" aria-hidden="true"></i>

              {/*<AiFillGoogleCircle
                className="Auth__google-icon"
                onClick={(event) => signInWithProvider(event, "google")}
              >
                <i className="fa fa-google" aria-hidden="true"></i>
              </AiFillGoogleCircle>*/}
            </div>
            <p className='Auth__google-txt'>Signup with Google</p>
          </div>
        </form>
      </div>

    </div>
  );
}