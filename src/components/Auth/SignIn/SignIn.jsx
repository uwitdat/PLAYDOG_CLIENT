import React, { useState } from 'react';
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";
// import Notifications from "../../General/Notifications/Notifications";
import "../Auth.scss";
import { connect } from 'react-redux';
import { Container, Row, Form, Col } from 'react-bootstrap';

function SignIn({responsive}) {
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
    <Container>
      <Row>
        <div className="login">
          <h2 className="text-center">Login</h2><br/>
          {errors.error.length > 0 && (
            <div className="mt-2">
              <span>Error</span>
              {errors.error}
            </div>
          )}

          <Form className="px-4" noValidate={true}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">Email</Form.Label>
              <Col sm="10">
                <input
                  required
                  id="email"
                  className="form-control"
                  label={errors.email.length < 1 ? "Email Address" : "Email ERROR"}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email.length > 0 ? errors.email : ''}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <input
                  required
                  name="password"
                  className="form-control"
                  label={errors.password.length < 1 ? "Password" : "Password ERROR"}
                  id="password"
                  autoComplete="current-password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password.length > 0 ? errors.password : ''}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="12" className="text-center">
                Remember Me
                <input type="checkbox" value="remember" id="rememberMe" color="primary" />
              </Form.Label>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="6" className="text-center">
                <Link to="/forgot-password" variant="body2">
                  <p>Forgot Password?</p>
                </Link>
              </Form.Label>
              <Form.Label column sm="6" className="text-center">
                <Link to="/sign-up">
                  <p className="display-center">Don&apos;t have an account?</p>
                </Link>
              </Form.Label>
            </Form.Group>

            <button
              type="submit"
              className="btn btn-lg btn-success"
              onClick={(event) => signInWithProvider(event, "email")}>
                Sign In
            </button>

            <hr/>
            

            <button
              className="btn btn-lg btn-danger"
              onClick={(event) => signInWithProvider(event, "google")}>
                <i className="fa fa-google" aria-hidden="true"></i>
                Login with Google
            </button>
          </Form>
        </div>
      </Row>
    </Container>
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
