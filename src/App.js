import React, { Component } from 'react';

import LCMChanges from './components/lcm_changes';

import ReturningArray from './components/returning_array';

import ErrorHandling from './components/error_handling';

import ThemedText from './components/context_api/consumer';
import ThemeProvider from './components/context_api/provider';

import GetDerivedStateFromProps from './components/get_derived_state_from_props';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="App">
          {/* <LCMChanges /> */}
          {/* <ReturningArray /> */}
          {/* <ErrorHandling /> */}
          {/* <ThemeProvider>
            <ThemedText />
          </ThemeProvider> */}
          <GetDerivedStateFromProps />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
