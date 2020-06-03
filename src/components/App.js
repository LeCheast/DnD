import React from 'react';
/*import axios from 'axios';*/

import dogs from '../api/dogs';
import dnd from '../api/dnd';

import Header from './Header';
import Search from './Search';

class App extends React.Component {

  state = {
    image: "",
    display: "none",
    dnd: "",
    search: ""
  };

  onTermSubmit = (term, type) => {
    console.log(term + type);
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

    return (
      <div>
        <Header />
        <div className="container">
          <h1>Search the DnD Library</h1>
          <Search onFormSubmit={this.onTermSubmit} />
          <input type="text" onChange={(e) => this.getDndData(e.target.value)} value={this.state.search} />
          <p id="dndInfo">{this.state.dnd}</p>
        </div>
      </div>
    );
  }
}

export default App;