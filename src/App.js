import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: {
      name: '',
      last: '',
      age: '',
      registered: '',
    },
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({response: res})
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/test');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log('submit button hit', e);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          It has been a long time since I wrote react.
        </div>
        <div>
          My name is {this.state.response.name} {this.state.response.last} and I am {this.state.response.age}.  My registration status is: {this.state.response.registered}
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server: </strong>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
