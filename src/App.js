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
import ProfilePage from 'pages/ProfilePage/ProfilePage';
function App(props) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: SET_WINDOW_WIDTH })
    window.addEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))
    return () => window.removeEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <HeaderBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/events' component={EventsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path='/dogs' component={DogsPage} />
        <Route path='/new-event' component={NewEventPage} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </Switch>
      <FooterBar />
    </div>
  )
}

App.propTypes = {
}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, {})(App));
