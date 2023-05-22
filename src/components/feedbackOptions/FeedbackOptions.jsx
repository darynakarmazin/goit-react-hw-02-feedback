import React, { Component } from 'react';
import { Buttons, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <Buttons>
        <Button type="button" name="good" onClick={this.props.onLeaveFeedback}>
          Good
        </Button>
        <Button
          type="button"
          name="neutral"
          onClick={this.props.onLeaveFeedback}
        >
          Neutral
        </Button>
        <Button type="button" name="bad" onClick={this.props.onLeaveFeedback}>
          Bad
        </Button>
      </Buttons>
    );
  }
}
