import React from 'react';
 
/**
 * Test of basic boilerplate setup. 
 * Counter button: tap the button to increase the count.
 */
class TestCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
    );
  }
}
export default TestCounter;