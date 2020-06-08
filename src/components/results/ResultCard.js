import React from 'react';

import dnd from '../../api/dnd';

class ResultCard extends React.Component {

    state = { urlResult: [] };

    componentDidMount = async () => {
        if (this.props.result.hasOwnProperty('url')) {
            const result = await dnd.get(this.props.result.url);
            console.log(result);
            var getList = [];
            Object.keys(result.data).map(function (dndKey) {
                return getList.push({ key: dndKey, url: result.data[dndKey] });
            });
            console.log(getList);
        }
    };

    render() {
        return (
            <div>{this.props.result.name}</div>
        );
    }
}

export default ResultCard;