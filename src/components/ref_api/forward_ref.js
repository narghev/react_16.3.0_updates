import React from 'react';

const Child = React.forwardRef((props, ref) => (
  <div>
    <div>
      <div>
        <input {...{ref}} />
      </div>
    </div>
  </div>
));

export default
class Parent extends React.Component {
  childInput = React.createRef();

  clickHandler = () => {
    console.log(this.childInput.current.value);
  }

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>Click</button>
        <Child ref={this.childInput}/>
      </div>
    );
  }
}