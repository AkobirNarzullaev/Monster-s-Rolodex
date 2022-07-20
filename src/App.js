import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  componentDidMount(){ //lifecycle method
    fetch('https://jsonplaceholder.typicode.com/users') //making a request to a url
    .then(response => response.json()) //taking the response in json format
    .then(users => this.setState({monsters: users})) //taking the users and setting monsters to them
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    /*const monsters = this.state.monsters;*/
    /*const searchField = this.state.searchField;  These two lines of code is the same as in line 23 */ 
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
