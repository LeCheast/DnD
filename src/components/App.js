import React from 'react';

import dnd from '../api/dnd';

import Header from './Header';
import Search from './Search';
import ResultList from './ResultList';

class App extends React.Component {

  state = { dnd: [] };

  onTermSubmit = async (term, type) => {
    const response = await dnd.get(type, {
      params: { name: term }
    });

    this.setState({ dnd: response.data.results });
  };

  render() {

    return (
      <div>
        <Header />
        <div className="container">
          <h1>Search the DnD Library</h1>
          <Search onFormSubmit={this.onTermSubmit} />
          <ResultList results={this.state.dnd} />
        </div>
      </div>
    );
  }
}

export default App;