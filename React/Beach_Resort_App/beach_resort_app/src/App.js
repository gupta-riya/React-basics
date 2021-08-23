
import './App.css';
import Header from './MyComponents/Header'
import Home from './MyComponents/Home'
import AllRooms from './MyComponents/AllRooms';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/rooms' component={AllRooms}/>
      </Switch>
    </Router>
  );
}

export default App;
