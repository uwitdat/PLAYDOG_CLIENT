import './Global.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HeaderBar from './components/HeaderBar/HeaderBar';
import FooterBar from './components/FooterBar/FooterBar'
import HomePage from './pages/HomePage/HomePage'
import EventsPage from './pages/EventsPage/EventsPage'
import DogsPage from './pages/DogsPage/DogsPage'
import NewEventPage from './pages/NewEventPage/NewEventPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {

  return (
    <Router>
      <div className="App">
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

      </div>
    </Router>
  );
}

export default App;
