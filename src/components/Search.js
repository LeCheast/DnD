import React from 'react';

class Search extends React.Component {
    state = { term: '', type: 'Type Test' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        //TODO: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term, this.state.type);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <select className="form-control my-1">
                        <option>Test</option>
                        <option>Test</option>
                    </select>
                    <input className="form-control my-1" type="text" value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        );
    }
}

export default Search;