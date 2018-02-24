import React, { Component } from 'react'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-91648771-3');
ReactGA.pageview(window.location.pathname + window.location.search);

const className = `Registry`;

class Registry extends Component {
    render() {
        return (
            <div
                className={`${className}__wrapper`}
            >
                {`Information Coming Soon`}
            </div>
        );
    }
}
export default Registry;
