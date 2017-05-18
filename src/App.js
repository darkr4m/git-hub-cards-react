import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (props) => {
    return (
        <div className="cardx row">
            <div className="col-3">
                <img className="gravicon" src="http://placehold.it/65" />
            </div>
            <div className="col-9 heading">
                <h4 className="card-name">Maxi Wright</h4>
                <p>darkr4m</p>
                <p>Athens, GA</p>
            </div>
        </div>
    )
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
