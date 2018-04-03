import React from 'react';
import ThemeContext from './theme_context';

export default
class ProviderComponent extends React.Component {
  state = {
    theme: 'dark'
  };

  clickHandler = () => {
    const {theme} = this.state;

    this.setState({theme: theme === 'dark' ? 'light' : 'dark'});
  }

  render(){
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
        <ThemeContext.Provider value={this.state.theme}>
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    );
  }
}