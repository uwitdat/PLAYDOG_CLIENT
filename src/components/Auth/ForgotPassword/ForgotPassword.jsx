import React, { useState } from 'react';

import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";
// import Notifications from "../../General/Notifications/Notifications";
import "../Auth.scss";
import Copyright from 'components/Copyright/Copyright';

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
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <div component="main" maxWidth="xs">
      <div>
        {successMessage ? (
          <h5>
            Please check your email to reset your password
          </h5>
        ) : (
          <>
            <h5>
              Enter your email to reset your password
            </h5>

            <form noValidate>
              <input
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                fullWidth
                variant="contained"
                className="forgot-password--email primary-bg"
                onClick={(event) => forgotPass(event)}
              >
                Send email link
              </button>
            </form>
          </>
        )}

        <div item className="pt-2">
          <Link to="/sign-in" variant="body2" className="forgot-password--back-to-sign-in space-between">
            {/* <ArrowBackIcon /> */}
            {"<"}
              <span className="pl-1">
                <h6>
                  Back to Sign In?
                </h6>
              </span>
          </Link>
        </div>
      </div>

      <Copyright />
    </div>
  );
}