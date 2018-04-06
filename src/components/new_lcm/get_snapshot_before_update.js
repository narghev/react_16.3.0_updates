import React from 'react';
import styled from 'styled-components';

const TextsDiv = styled.div`
  max-height: 100px;
  width: 100px;
  overflow-y: auto;
  background-color: yellow;
`;

class Texts extends React.Component {

  divRef = React.createRef();
  
  getSnapshotBeforeUpdate(prevProps, prevState){
    if (prevProps.array.length < this.props.array.length){
      return {scrollPosition: this.divRef.current.scrollTop};
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (snapshot !== null){
      this.divRef.current.scrollTop = snapshot.scrollPosition;
    }
  }

  render(){
    return(
      <TextsDiv ref={this.divRef} >
        {this.props.array.map( (t, i) => <p key={i}>{`${i}. ${t}`}</p>)}
      </TextsDiv>
    );
  }
}

export default
class GetSnapshotBeforeUpdate extends React.Component {

    inputRef = React.createRef();
    state = {
      array: []
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
        <Texts array={this.state.array} />
      </div>
    );
  }
}