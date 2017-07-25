import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import {getPeople} from './ducks/starwars';

class App extends Component {



  componentDidMount() {
    
  }


  render() {
    
    const people = this.props.people.map((person, i) => (
      <div key={i}>{person.name}</div>
    ))

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Promise Middleware</h2>
        </div>
        
        <button onClick={this.props.getPeople}>Get Star Wars People</button>
        <div>
          {this.props.loading ? 'fetching people...' : people}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.starwars.people,
    loading: state.starwars.loading
  }
}

export default connect(mapStateToProps, {getPeople})(App);
