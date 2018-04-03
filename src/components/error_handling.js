// React 16.0.0

/*
Error boundaries catch errors during rendering,
in lifecycle methods, and in constructors of the whole tree below them.
*/

import React from 'react';

class Err extends React.Component {
  constructor(){
    super();
    throw new Error('I do not work');
  }

  render(){
    return null;
  }
}

export default
class ErrorBoundary extends React.Component {
  state = {
    err: false
  };

  componentDidCatch(err, info){
    console.log(err, info);
    this.setState({err: true});
  }
  
  render() {
    return (
      this.state.err ? <p>Error</p> : <Err />
    );
  }
};
