import React, { Component } from 'react';

import LCMChanges from './components/lcm_changes';

import ReturningArray from './components/returning_array';

import ErrorHandling from './components/error_handling';

import ThemedText from './components/context_api/consumer';
import ThemeProvider from './components/context_api/provider';

import GetDerivedStateFromProps from './components/new_lcm/get_derived_state_from_props';
import GetSnapshotBeforeUpdate from './components/new_lcm/get_snapshot_before_update';

import CallBackRef from './components/ref_api/callback_ref';
import CreateRef from './components/ref_api/createref_ref';
import ForwardRef from './components/ref_api/forward_ref';

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
          {/* <GetDerivedStateFromProps /> */}
          {/* <GetSnapshotBeforeUpdate /> */}
          {/* <CallBackRef /> */}
          {/* <CreateRef /> */}
          {/* <ForwardRef /> */}
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
