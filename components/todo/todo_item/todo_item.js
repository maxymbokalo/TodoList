import React from 'react';
import { ListItem, Text, CheckBox, Body, Button, Icon } from 'native-base';

export default class ToDoItem extends React.Component {    
  render() {      
    let { todo, deleteTodo, updateTodo } = this.props;
    // throw new Error(JSON.stringify(todo))

    return (
      <ListItem>        
        <CheckBox
          checked = { todo.isComplete }
          onPress = { () => updateTodo({
            ...todo,
            isComplete: !todo.isComplete
          }) }
        />
        <Body>
          <Text>{ todo.name }</Text>
        </Body>
        <Button
          transparent
          onPress = { () => deleteTodo( todo ) }
        >
          <Icon name = { 'md-trash' } />                
        </Button>
      </ListItem>
    );
  }
}