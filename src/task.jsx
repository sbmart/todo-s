import React, { Component } from 'react'
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
    margin: 7px;
    border: 1px solid lightgrey; 
    border-radius: 3px;
    margin-bottom: 7px;
    padding: 7px;
    background-color: lightgrey;
`;

export default class Task extends Component {
  render() {
    return (
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
    {provided => (
    <Container
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      innerRef={provided.innerRef}
    >{this.props.task.content}</Container>
  )}
    </Draggable>
    );
  }
}
