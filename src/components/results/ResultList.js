import React from 'react';

import ResultCard from './ResultCard';

const ResultList = ({ results }) => {
    const renderedList = results.map((result) => {
        /*return <p key={result.index}>{result.name}</p>*/
        return <ResultCard key={result.index} result={result} />
    });
    return (
        <div>{renderedList}</div>
    );
}

export default ResultList;