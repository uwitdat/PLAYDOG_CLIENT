import './Global.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import HomePage from 'pages/HomePage/HomePage';
import EventsPage from 'pages/EventsPage/EventsPage';
import DogsPage from 'pages/DogsPage/DogsPage';
import NewEventPage from 'pages/NewEventPage/NewEventPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import LandingPage from 'pages/LandingPage/LandingPage';
import SignIn from "components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import ForgotPassword from "components/Auth/ForgotPassword/ForgotPassword";
import { SET_WINDOW_WIDTH } from "redux-store/types";
import { connect, useDispatch } from "react-redux";
import { useEffect } from 'react';
import HeaderBar from 'components/HeaderBar/HeaderBar';
import FooterBar from 'components/FooterBar/FooterBar';
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: SET_WINDOW_WIDTH })

    window.addEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))

    return () => window.removeEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div className="App">
        <>
          {(location.pathname !== '/' && !location.pathname.includes('/welcome')) && (
            <HeaderBar />
          )}

          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/events' component={EventsPage} />
            <Route path='/dogs' component={DogsPage} />
            <Route path='/new-event' component={NewEventPage} />
            <Route path='/login' component={LoginPage} />
            <Route path="/welcome" component={LandingPage} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
          </Switch>

          {(location.pathname !== '/' && !location.pathname.includes('/welcome')) && (
            <FooterBar />
          )}
        </>
      </div>
    </Router>
  )
}

App.propTypes = {
}

const mapStateToProps = (state) => {
  return {
  }
};

export default connect(mapStateToProps, {})(App);
