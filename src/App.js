import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // This is called when the component in rendered on the DOM for the first time
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
