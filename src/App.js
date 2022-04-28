import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Edward',
      todoItems: [
        { action: 'Buy Milk', done: true },
        { action: 'Dentist at 5pm', done: false },
        { action: 'Go to Gym', done: false },
      ],
      newToDo: '',
    };
  }

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    })

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input type='checkbox' checked={item.done} onChange={() => this.toggleDone(item)} />
        </td>
      </tr>
    ));

  updateValue = (event) => {
    this.setState({ newToDo: event.target.value })
  }

  addTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newToDo, done: false },
      ],
    });
  }

  render = () => (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='bg-primary text-white text-center p2'>
            {this.state.userName} To do list
          </h2>
        </div>
        <div className='col-12'>
          <input className='form-control' value={this.state.newToDo} onChange={this.updateValue} />
          <button className='btn btn-primary' onClick={this.addTodo}>Add</button>
        </div>
        <div className='col-12'>
          <table className='table'>
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>
              {this.todoRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}