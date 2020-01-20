import React from 'react';
const Warning = React.lazy(() => import('./Warning'));

import './App.css';

class App extends React.Component {
  state = {
    count : 0,
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h1>React Boilerplate</h1>
        <h2 style={{color: this.state.count > 10 ? 'crimson' : null}}>Count: {this.state.count}</h2>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
        {this.state.count > 10 && (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        )}
      </React.Fragment>
    )
  }
}

export default App;
