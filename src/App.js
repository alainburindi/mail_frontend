import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Messages from './pages/Messages/messages';
import Sent from './pages/Messages/sent';

class App extends React.Component{
  render(){
      return (
          <div className="app">
      <HashRouter basename="/">
        {/* <Navbar /> */}
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path='/messages' exact component={Messages}/>
          <Route path='/messages/:what' exact component={Sent}/>

          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </HashRouter>
    </div>
      )
  }
}

export default App;