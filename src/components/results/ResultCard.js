import React from 'react';

import dnd from '../../api/dnd';

class ResultCard extends React.Component {

    state = { urlResult: [] };

    componentDidMount = async () => {
        this.setState({ test: 'Hello' });
        if (this.props.result.hasOwnProperty('url')) {
            console.log(this.props.result.url);
            const result = await dnd.get(this.props.result.url);
            console.log(result);
        }
    };

    render() {
        return (
            <div>{this.props.result.name}</div>
        );
    }
}

export default ResultCard;