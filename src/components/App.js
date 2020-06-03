import React from 'react';
/*import axios from 'axios';*/

import dogs from '../api/dogs';
import dnd from '../api/dnd';

import Header from './Header';
import Search from './Search';

class App extends React.Component {

  state = {
    dnd: ""
  };

  onTermSubmit = (term, type) => {
    dnd.get(type, {
      params: { name: term },
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
          <p id="dndInfo">{this.state.dnd}</p>
        </div>
      </div>
    );
  }
}

export default App;