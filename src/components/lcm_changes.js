// React 16.2.0

import React from 'react';

export default
class LCMChanges extends React.Component {
  componentWillMount(){
    console.log('mounting');
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps);
  }

  componentWillUpdate(){
    console.log('updating');
  }

  render(){
    return(
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}