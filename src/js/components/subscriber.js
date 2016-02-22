import React from 'react';
import { Component } from 'react';

class Subscriber extends Component {
  handleClick() {
    const { name, onClick } = this.props;

    onClick(name);
  }

  render() {
    const { name } = this.props;

    return (
      <div
        onClick={this.handleClick.bind(this)}
      >
        { name }
      </div>
    );
  }
}

export default Subscriber;
