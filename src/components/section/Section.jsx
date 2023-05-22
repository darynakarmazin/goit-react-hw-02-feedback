import React, { Component } from 'react';
import { Title, SectionDiv } from 'components/section/Section.styled';

export class Section extends Component {
  render() {
    return (
      <SectionDiv>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </SectionDiv>
    );
  }
}
