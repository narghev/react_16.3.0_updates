import React from 'react';

export default
class GetSnapshotBeforeUpdate extends React.Component {
  state = {
    n: 0
  }
  
  clickHandler = () => {
    this.setState({n: this.state.n+1});
  };

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>Click</button>
        <p>{this.state.n}</p>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot){}
}