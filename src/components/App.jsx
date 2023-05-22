import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  handleIncrement = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <p>Please leave feed back</p>
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Bad
          </button>
        </div>
        <div>
          <p>Statistics</p>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
