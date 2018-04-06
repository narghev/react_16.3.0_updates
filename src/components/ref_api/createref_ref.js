import React from 'react';

class MyComp extends React.Component {
  render(){
    return(
      <p>Hello</p>
    );
  }
}

const MyFunc = () => <p>Bye</p>;

export default
class CreateRef extends React.Component {
  inputRef = React.createRef();
  myCompRef = React.createRef();
  myFuncRef = React.createRef();

  clickHandler = () => {
    console.log('input', this.inputRef.current);
    console.log('comp', this.myCompRef.current);
    console.log('func', this.myFuncRef.current);
    this.inputRef.current.value = '';
  }

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>get value</button>
        <input ref={this.inputRef} />
        <MyComp ref={this.myCompRef}/>
        <MyFunc ref={this.myFuncRef} />
      </div>
    );
  }
}