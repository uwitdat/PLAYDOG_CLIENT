import './Global.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomePage from './components/pages/HomePage/HomePage';
import EventsPage from './components/pages/EventsPage/EventsPage';
import DogsPage from './components/pages/DogsPage/DogsPage';
import NewEventPage from './components/pages/NewEventPage/NewEventPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import LandingPage from './components/pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={HomePage} />
        <Route path='/events' component={EventsPage} />
        <Route path='/dogs' component={DogsPage} />
        <Route path='/new-event' component={NewEventPage} />
        <Route path='/login' component={LoginPage} />
        <Route path="/welcome" component={LandingPage} />
      </div>
    </Router>
  );
}

export default App;
