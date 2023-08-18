import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/App.css";
import Navbar from './components/widgets/Navbar';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import History from './components/pages/History';
import Register from './components/pages/Register';
import UserTransfer from './components/pages/UserTransfer'
import DepositeAndWithdraw from './components/pages/DepositeAndWithdraw';
import Login from './components/pages/Login';
import Error from './components/pages/Error';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        <Switch>
          <Route exact path="/home/user/:transfer" component={UserTransfer} />
          <Route exact path="/home/users" component={Users} />
          <Route exact path="/home/depositeandwithdraw" component={DepositeAndWithdraw} />
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
