import React from 'react';

const SearchDropDown = ({ searchTerms, onTypeSelect }) => {

    const typeSelect = (event) => {
        onTypeSelect(event.target.value);
    }

    const list = searchTerms.map((term) => {
        return <option key={term.url} value={term.key}>{term.key}</option>
    });

    return (
        <select onChange={typeSelect} className="form-control">{list}</select>
    );
}

export default SearchDropDown;