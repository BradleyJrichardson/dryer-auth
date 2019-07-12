import React from 'react';
import './App.css';
import Routes from './Routes'

class App extends React.Component {
  state = {auth: null}

  componentDidMount() {
    this.setState({
      // this is where you should hit your backend
      // make auth true or false 
      auth: false
    })
  }

  render() {
    const { auth } = this.state
    if (this.state.auth === null) {
      return null
    } else {
      return (
        <Routes auth={auth} />
      )
    }
  }
}

export default App;
