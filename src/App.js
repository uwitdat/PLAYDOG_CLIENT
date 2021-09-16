import './Global.css';
import {
  Route, Switch
} from "react-router-dom";
import HomePage from 'pages/HomePage/HomePage';
import EventsPage from 'pages/EventsPage/EventsPage';
import DogsPage from 'pages/DogsPage/DogsPage';
import NewEventPage from 'pages/NewEventPage/NewEventPage';
import SignIn from "components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import ForgotPassword from "components/Auth/ForgotPassword/ForgotPassword";
import { SET_WINDOW_WIDTH } from "redux-store/types";
import { connect, useDispatch } from "react-redux";
import { useEffect } from 'react';
import HeaderBar from 'components/HeaderBar/HeaderBar';
import FooterBar from 'components/FooterBar/FooterBar';
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux'
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import { useState } from 'react';
import DogPage from 'pages/DogPage/DogPage';
import Loader from 'components/Loader/Loader';
import Dashboard from 'pages/Dashboard/Dashboard';

function App(props) {

  const profile = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);

  //CONTROLS LOADER ANIM DURATION
  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    dispatch({ type: SET_WINDOW_WIDTH })
    window.addEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))

    return () => window.removeEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <script crossOrigin="anonymous" src="https://kit.fontawesome.com/831259ec93.js"></script>
      <>
        {loading ? (
          <Loader />
        ) : (
          profile.isEmpty ? (
            <Switch>
              <Route exact path='/' component={SignIn} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
            </Switch>
          ) : (
            <>
              <HeaderBar />
              <Switch>
                <Route exact path='/' component={HomePage} />
                {/* <Route path="/welcome" component={LandingPage} /> */}
                <Route path='/events' component={EventsPage} />
                <Route exact path='/dogs' component={DogsPage} />
                <Route exact path="/dogs/:id" component={DogPage} />
                <Route path='/new-event' component={NewEventPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
              <FooterBar />
            </>
          )
        )}
      </>
    </div>
  )
}

App.propTypes = {
}

const mapStateToProps = (state) => {
  return {}
};

export default withRouter(connect(mapStateToProps, {})(App));
