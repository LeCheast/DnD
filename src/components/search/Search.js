import React from 'react';

import dnd from '../../api/dnd';
import SearchDropDown from './SearchDropDown';

class Search extends React.Component {
    state = { term: '', type: '', keys: {}, termList: [] };

    componentDidMount = async () => {
        const result = await dnd.get('/api/');
        this.setState({ keys: result.data });

        var getList = [];
        Object.keys(this.state.keys).map(function (dndKey) {
            return getList.push({ key: dndKey, url: result.data[dndKey] });
        });

        this.setState({ termList: getList });
        this.setState({ type: this.state.termList[0].key });
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        //TODO: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term, this.state.type);
    }

    onTypeSelect = (type) => {
        this.setState({ term: '', type: 'api/' + type });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <SearchDropDown onTypeSelect={this.onTypeSelect} searchTerms={this.state.termList} />
                    <input className="form-control my-1" type="text" value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        );
    }
}

export default Search;