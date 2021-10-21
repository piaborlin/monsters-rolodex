import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // This is called when the component in rendered on the DOM for the first time
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1 className='h1'>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          onChangeHandler={(e) =>
            this.setState({ searchField: e.target.value })
          }
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
