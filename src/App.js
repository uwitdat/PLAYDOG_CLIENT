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
import { useLocation, withRouter } from "react-router-dom";
import { useSelector } from 'react-redux'

function App(props) {

  const profile = useSelector((state) => state.firebase.auth);

  const location = useLocation()
  const pathName = location.pathname
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: SET_WINDOW_WIDTH })
    window.addEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))
    return () => window.removeEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <>
        {profile.isEmpty ? (
          <Switch>
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
              <Route path='/dogs' component={DogsPage} />
              <Route path='/new-event' component={NewEventPage} />
            </Switch>
            <FooterBar />
          </>
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
