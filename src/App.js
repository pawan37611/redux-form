import React, { Component } from 'react';
import './App.css';
import ContactForm from './list'


class App extends Component {

  handleSub(values){
    console.log("formmmmmmm",values);
    }
  render() {
    return (
      <div className="App">
        <ContactForm handleSub={this.handleSub}></ContactForm>
      </div>
    );
  }
}

export default App;
