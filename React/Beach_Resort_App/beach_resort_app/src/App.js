
import './App.css';
import Header from './MyComponents/Header'
import Home from './MyComponents/Home'
import AllRooms from './MyComponents/AllRooms';
import SpecificRoom from './MyComponents/SpecificRoom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/rooms' component={AllRooms}/>
        <Route path = '/sroom' component={SpecificRoom}/>
      </Switch>
    </Router>
  );
}

export default App;
