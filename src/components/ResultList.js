import React from 'react';

const ResultList = ({ results }) => {
    const renderedList = results.map((result) => {
        return <p key={result.index}>{result.name}</p>
    });
    return (
        <div>{renderedList}</div>
    );
}

export default ResultList;