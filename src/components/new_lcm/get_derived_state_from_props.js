import React from 'react';

class Num extends React.Component {

  constructor(props){
    super(props);
    this.state = {...props};
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);
    if (nextProps.number % 3 === 0) return null;
    return nextProps;
  }

  render(){
    return(
      <p>{this.state.number}</p>
    );
  }
}

export default
class GetDerivedStateFromProps extends React.Component {
  constructor(){
    super();
    this.state = {
      number: 0
    };
  }

  clickHandler = () => {
    this.setState({number: this.state.number+1});
  };

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>Click</button>
        <Num number={this.state.number} />
      </div>
    );
  }
}