import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName: 'Name1',
    };
  }

  render = () => (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='bg-primary text-white text-center p2'>
            {this.state.userName} To do list
          </h2>
        </div>
      </div>
    </div>
  );
}