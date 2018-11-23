import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/palette';

class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false, color: '#343a40' },
      { id: 1, text: '리액트 소개', checked: true, color: '#343a40' },
      { id: 2, text: '리액트 소개', checked: false, color: '#343a40' }
    ],
    colors: {
      color: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
      active: '#343a40'
    }
  }
  handleChange = e => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos, colors } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: colors.active
      })
    });
  }
  handleToggle = id => {
    const { todos } = this.state;
    const copyTodos = [...todos];

    copyTodos[id] = {
      ...todos[id],
      checked: !todos[id].checked
    }

    this.setState({
      todos: copyTodos
    })
  }
  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  handleColorClick = code => {
    const { colors } = this.state;
    let copyColors = { ...colors };

    copyColors = {
      color: [...colors.color],
      active: code
    }
    
    this.setState({
      colors: copyColors
    })

    // this.setState({
    //   colors: {
    //     color: [...colors.color],
    //     active: code
    //   }
    // })
  }
  render() {
    const { input, colors, todos } = this.state;

    const { handleChange, handleCreate,handleToggle,handleRemove, handleColorClick } = this;

    return (
     <div>
       <TodoListTemplate 
       form={<Form 
        value={input}
        onChange={handleChange}
        onCreate={handleCreate}
        color={colors.active}
       ></Form>}
       palette={<Palette
        colors={colors}
        ColorClick={handleColorClick}
       ></Palette>}
       
       >
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}></TodoItemList>
       </TodoListTemplate>
     </div>
    );
  }
}

export default App;
