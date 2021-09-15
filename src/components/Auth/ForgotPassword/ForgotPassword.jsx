import React, { useState } from 'react';

import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";
// import Notifications from "../../General/Notifications/Notifications";
import "../Auth.scss";


export default function ForgotPassword() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [successMessage, showSuccessMessage] = useState(false)

  const forgotPass = async (event) => {
    event.preventDefault()

    try {
      await firebase
        .auth()
        .sendPasswordResetEmail(email)
      showSuccessMessage(true)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <div className='Auth'>
        {successMessage ? (
          <h5>
            Please check your email to reset your password
          </h5>
        ) : (
          <>
            <h5>
              Enter your email to reset your password
            </h5>

            <form
              className='Auth__form'
              noValidate>
              <input
                placeholder='Enter Your Email'
                className='Auth__input'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className='Auth__btn'
                type="submit"
                variant="contained"
                onClick={(event) => forgotPass(event)}
              >
                Send email link
              </button>
            </form>
          </>
        )}

        <div className="pt-2">
          <Link to="/sign-in" className="forgot-password--back-to-sign-in space-between">

            <span className="Auth__txt">
              <p>
                &#8592; Back to Sign In?
              </p>
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
}