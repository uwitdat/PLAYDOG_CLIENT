import './Global.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HeaderBar from './components/HeaderBar/HeaderBar';
<<<<<<< HEAD
import FooterBar from './components/FooterBar/FooterBar';
import HomePage from './components/pages/HomePage/HomePage';
import EventsPage from './components/pages/EventsPage/EventsPage';
import DogsPage from './components/pages/DogsPage/DogsPage';
import NewEventPage from './components/pages/NewEventPage/NewEventPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import LandingPage from './components/pages/LandingPage/LandingPage';

function App() {
  let path = window.location.pathname;

=======
import FooterBar from './components/FooterBar/FooterBar'
import HomePage from './pages/HomePage/HomePage'
import EventsPage from './pages/EventsPage/EventsPage'
import DogsPage from './pages/DogsPage/DogsPage'
import NewEventPage from './pages/NewEventPage/NewEventPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {
>>>>>>> 8076434 (desktop nav, mobile nav)

  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        {(!path.includes("/welcome") && (
          <>
            <HeaderBar />
            <Route path='/' exact component={HomePage} />
            <Route path='/events' component={EventsPage} />
            <Route path='/dogs' component={DogsPage} />
            <Route path='/new-event' component={NewEventPage} />
            <Route path='/login' component={LoginPage} />
            <FooterBar />
          </>
        ))}

        <Route path="/welcome" component={LandingPage} />

=======
        <HeaderBar />
        <Route path='/' exact component={HomePage} />
        <Route path='/events' component={EventsPage} />
        <Route path='/dogs' component={DogsPage} />
        <Route path='/new-event' component={NewEventPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/profile' component={ProfilePage} />
        <FooterBar />
>>>>>>> 8076434 (desktop nav, mobile nav)
      </div>
    </Router>
  );
}

export default App;
