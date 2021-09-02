import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from './Component/Topbar/Topbar';


function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route to="/">
          <Home/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
