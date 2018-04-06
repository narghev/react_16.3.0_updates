import React from 'react';

export default
class CallBackRef extends React.Component {
  inputRef = null;

  clickHandler = () => {
    console.log(this.inputRef.value);
    this.inputRef.value = '';
  }

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>get value</button>
        <input ref={el => this.inputRef = el} />
      </div>
    );
  }
}