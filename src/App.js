import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/App.css";
import Navbar from './components/widgets/Navbar';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import History from './components/pages/History';
import Register from './components/pages/Register';
import Demo from './components/pages/Demo';
import Deposite from './components/pages/Deposite';
import Login from './components/pages/Login';
import Error from './components/pages/Error';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        <Switch>
          <Route exact path="/home/user/:transfer" component={Demo} />
          <Route exact path="/home/users" component={Users} />
          <Route exact path="/home/depositeandwithdraw" component={Deposite} />
          <Route exact path="/home/history" component={History} />
          <Route exact path="/home/register" component={Register} />
          <Route exact path="/home" component={Home} />
          {/* <Route path="/" exact component={Login} /> */}
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;