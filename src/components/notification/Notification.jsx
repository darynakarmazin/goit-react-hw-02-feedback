import React, { Component } from 'react';
import { Message } from './Notification.styled';

export class Notification extends Component {
  render() {
    return (
      <>
        <Message>{this.props.message}</Message>
      </>
    );
  }
}
