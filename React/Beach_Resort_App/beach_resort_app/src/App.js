
import './App.css';
import Header from './MyComponents/Header'
import Home from './MyComponents/Home'
import Room from './MyComponents/Room';
import SpecificRoom from './MyComponents/SpecificRoom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/rooms/' component={Room}/>
        <Route exact path = '/rooms/:slug' component={SpecificRoom}/>
      </Switch>
    </Router>
  );
}

export default App;
