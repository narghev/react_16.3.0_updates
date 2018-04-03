// React 16.0.0

import React from 'react';

export default
class ReturningArray extends React.Component {
  render(){
    return [
      <span key="A">A</span>,
      <span key="B">B</span>,
      <span key="C">C</span>,
      <span key="D">D</span>,
    ];
  };
}