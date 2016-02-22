import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Subscriber from '../components/subscriber';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribers: ['first', 'second', 'third']
    }
  }

  removeSubscriber(name) {
    const { subscribers } = this.state;

    let newSubscribers = subscribers.filter((item) => {
      return item !== name;
    });

    this.setState({
      subscribers: newSubscribers
    });
  }

  renderSubscribers() {
    const { subscribers } = this.state;

    return subscribers.map((name) => {
      return (
        <Subscriber
            name={name}
            onClick={this.removeSubscriber.bind(this, name)}
        />
      );
    });
  }

  render() {
    const { subscribers } = this.state;

    return (
      <div>
        {this.renderSubscribers()}
      </div>);
  }
}

export default AppContainer;
