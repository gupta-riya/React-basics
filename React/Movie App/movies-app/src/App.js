
import Movies from './Components/Movies';
import About from './Components/About';
import Home from './Components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Nav from './Nav';

// router renders all the subpath i.e it will render \ and \about for \about
// switch works until it finds first subpath i.e it can render \ for \about
// solution1: shift the smallest path component to the end
// solution2: use exact with / (smallest router)
function App() {
  return (
    <Router>
      {/* this Nav will add a Nav component to every other component */}
      <Nav/>
      <Switch>

        <Route path = '/' exact component={Home}/>
        <Route path = '/movies' component={Movies}/>
        <Route path = '/about' component={About}/>
    
      </Switch>
    </Router>
  );
}

export default App;