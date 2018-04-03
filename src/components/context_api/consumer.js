import React from 'react';
import ThemeContext from './theme_context';

const Level1 = ({children}) => <div>{children}</div>;
const Level2 = ({children}) => <div>{children}</div>;
const Level3 = ({children}) => <div>{children}</div>;
const Level4 = ({children}) => <div>{children}</div>;

class ThemedText extends React.Component {
  render(){
    return(
      <ThemeContext.Consumer>
        {value => <span style={{color: value === 'dark' ? 'black' : 'blue'}}>ContextApi Text</span>}
      </ThemeContext.Consumer>
    );
  }
};

export default
class ConsumerComponent extends React.Component {
  render(){
    return(
      <Level1>
        <Level2>
          <Level3>
            <Level4>
              <ThemedText />
            </Level4>
          </Level3>
        </Level2>
      </Level1>
    );
  }
}