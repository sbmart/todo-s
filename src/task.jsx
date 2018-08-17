import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey; 
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px;
`;

export default class Task extends Component {
  render() {
    return <Container>{this.props.task.content}</Container>;
  }
}
