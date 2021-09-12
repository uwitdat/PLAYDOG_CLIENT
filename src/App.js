import './Global.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import FooterBar from './components/FooterBar/FooterBar'
import HomePage from './components/HomePage/HomePage'
import EventsPage from './components/EventsPage/EventsPage'
import DogsPage from './components/DogsPage/DogsPage'
import NewEventPage from './components/NewEventPage/NewEventPage'
import LoginPage from './components/LoginPage/LoginPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={HomePage} />
        <Route path='/events' component={EventsPage} />
        <Route path='/dogs' component={DogsPage} />
        <Route path='/new-event' component={NewEventPage} />
        <Route path='/login' component={LoginPage} />
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
