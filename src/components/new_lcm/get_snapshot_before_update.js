import React from 'react';

export default
class GetSnapshotBeforeUpdate extends React.Component {

  constructor(){
    super();
    this.inputRef = React.createRef();
    this.state = {
      array: []
    }
  }
  
  clickHandler = () => {
    const text = this.inputRef.current.value;
    this.setState({array: [...this.state.array, text]});
  };

  render(){
    return(
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
        <div>
          {this.state.array.map( (t, i) => <p key={i}>{`${i}. ${t}`}</p>)}
        </div>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot){}
}