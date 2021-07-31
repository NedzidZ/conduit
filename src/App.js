import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation.js';
import Login from './components/Login.js';
import Signup from'./components/SignUp.js';
import Homepage from './components/Homepage.js';


function App() {
  return (
<div>
  <Navigation/>
  <Switch>
    <Route path='/'exact><Homepage/></Route>
    <Route path='/login'><Login/></Route>
    <Route path='/signup'><Signup/></Route>
  </Switch>
</div>
  );
}

export default App;
