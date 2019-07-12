import React from 'react';
import { Route, Redirect } from "react-router-dom";
import ProtectedPage from './ProtectedPage';
import AnotherProtectedPage from './AnotherProtectedPage';
import ThirdProtectedPage from './ThirdProtectedPage'

class ProtectedRoutes extends React.Component {
  state = {isAuthSet: false}

  componentDidMount() {
    this.setState({
      isAuthSet: true,
      access: this.props.auth
    })
  }

  render() {
    if (!this.state.isAuthSet) {
      return null
    } else if (this.state.access) {
      return (
        <>
          <Route path="/protected/another" component={AnotherProtectedPage} />
          <Route path="/protected/third" component={ThirdProtectedPage} />    
          <Route exact path="/protected" component={ProtectedPage} />    
        </>
      )
    } else {
      return (
        <Redirect to='/login' />
      )
    }
  }
}

export default ProtectedRoutes;