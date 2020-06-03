import React from 'react';
/*import axios from 'axios';*/

import logo from './logo.svg';
import './App.css';
import dogs from './api/dogs';
import dnd from './api/dnd';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: "",
      display: "none",
      dnd: "",
      search: ""
    };
  }

  componentDidMount() {
    dnd.get('/spells', {
      params: { name: "A" },
    }).then(response => {
      this.setState({ dnd: response.data.results[0].name });
    });
  }

  getImageUrl = async () => {
    /*axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.setState({image: response.data.message, display: "block"});
      console.log(response);
    })*/
    const response = await dogs.get();
    this.setState({ image: response.data.message, display: "block" });
  }

  getDndData(searchTerm) {
    this.setState({ search: searchTerm });
    dnd.get('/spells', {
      params: { name: searchTerm },
    }).then(response => {
      this.setState({ dnd: response.data.results[0].name });
    });
  }

  render() {
    const style = {
      display: this.state.display,
      marginTop: "20px"
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Search a DnD Spell</p>
          <input type="text" onChange={(e) => this.getDndData(e.target.value)} value={this.state.search} />
          <p id="dndInfo">{this.state.dnd}</p>
          <button onClick={this.getImageUrl}>Click Me!</button>
          <img style={style} alt="Rand-Imag" src={this.state.image} />
        </header>
      </div>
    );
  }
}

export default App;