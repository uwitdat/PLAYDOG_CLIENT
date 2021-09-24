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
import { useState } from 'react';
import DogPage from 'pages/DogPage/DogPage';
import EditProfilePage from 'pages/EditProfilePage/EditProfilePage';
import Loader from 'components/Loader/Loader';
import Dashboard from 'pages/Dashboard/Dashboard';
import Profile from 'services/Profile';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';

function App({ firebaseProfile, authIsEmpty }) {


  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  //CONTROLS LOADER ANIM DURATION
  // useEffect(() => {
  //   setTimeout(function () {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    !firebaseProfile.isEmpty && Profile.getProfileByUserId(firebaseProfile.id)
    setLoading(false);
  }, [firebaseProfile]);

  useEffect(() => {
    dispatch({ type: SET_WINDOW_WIDTH })
    window.addEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))

    return () => window.removeEventListener('resize', () => dispatch({ type: SET_WINDOW_WIDTH }))
    // eslint-disable-next-line
  }, [])

  const [expandMenu, setExpandMenu] = useState(false);

  return (
    <div
      onClick={() => expandMenu && setExpandMenu(false)}
      className='App'
    >
      <div className={expandMenu ? 'expanded-menu' : null}></div>
      <script crossOrigin="anonymous" src="https://kit.fontawesome.com/831259ec93.js"></script>
      <>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <HeaderBar
              expandMenu={expandMenu}
              setExpandMenu={setExpandMenu}
            />

            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route path='/events' component={EventsPage} />

              {/* Protected */}
              <ProtectedRoute path="/profile" authIsEmpty={authIsEmpty}>
                <Route path="/profile" component={ProfilePage} />
              </ProtectedRoute>

              <ProtectedRoute path="/dashboard" authIsEmpty={authIsEmpty}>
                <Route path="/dashboard" component={Dashboard} />
              </ProtectedRoute>

              <ProtectedRoute path="/profile/edit" authIsEmpty={authIsEmpty}>
                <Route path="/profile/edit" component={EditProfilePage} />
              </ProtectedRoute>

              <ProtectedRoute path="/dogs" authIsEmpty={authIsEmpty}>
                <Route path="/dogs" component={DogsPage} />
              </ProtectedRoute>

              <ProtectedRoute path="/dogs/:id" authIsEmpty={authIsEmpty}>
                <Route path="/dogs/:id" component={DogPage} />
              </ProtectedRoute>

              <ProtectedRoute path="/new-event" authIsEmpty={authIsEmpty}>
                <Route path="/new-event" component={NewEventPage} />
              </ProtectedRoute>
            </Switch>

            <FooterBar />
          </div>
        )}
      </>
    </div>
  )
}

App.propTypes = {
}

const mapStateToProps = (state) => {
  return {
    authIsEmpty: state.firebase.auth.isEmpty,
    firebaseProfile: state.firebase.profile,
  }
};

export default withRouter(connect(mapStateToProps, {})(App));
