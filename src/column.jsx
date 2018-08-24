import React, { Component } from 'react';
import styled from 'styled-components';
import Task from './task';
import { Droppable } from "react-beautiful-dnd";


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey; 
    border-radius: 3px;
`;

const Title = styled.h3`
    padding: 8px;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 8px;
`;


export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                {provided => (
                        <TaskList 
                        {...provided.droppableProps}
                        innerRef={provided.innerRef}
                        >
                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                {provided.placeholder}
                        </TaskList>
                )}

                </Droppable>
            </Container>
        ); 
    }
}