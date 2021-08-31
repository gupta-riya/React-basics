
import './App.css';
import Dashboard from './MyComponents/Dashboard';
import Store from './MyComponents/Store';

function App() {
  return (
    <div className="App">
      <Store>
      <Dashboard/>
      </Store>
    </div>
  );
}

export default App;
