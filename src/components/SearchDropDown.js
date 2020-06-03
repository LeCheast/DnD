import React from 'react';

const SearchDropDown = ({ searchTerms }) => {
    const list = searchTerms.map((term) => {
        return <option key={term.url} value={term.url}>{term.key}</option>
    });
    return (
        <select className="form-control">{list}</select>
    );
}

export default SearchDropDown;