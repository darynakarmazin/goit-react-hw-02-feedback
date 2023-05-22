import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    this.setState((prevState) => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
    })
  };

  render() {
    return (
      <div>
        <div>
          <p>Please leave feed back</p>
          <button type="button" name="good" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.handleIncrement}>
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
