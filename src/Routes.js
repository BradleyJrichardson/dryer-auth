import React from 'react';
import { Switch, Route } from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes'
import Login from './Login'
import Public from './Public'

class Routes extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <Switch>
        <Route path="/home" component={Public} />
        <Route path="/login" component={Login} />
        <ProtectedRoutes path="/protected" component={ProtectedRoutes} auth={auth} />
      </Switch>
    )
  }
}

export default Routes;