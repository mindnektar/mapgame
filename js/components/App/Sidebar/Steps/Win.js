import React, {Component} from 'react';

export default class Win extends Component {
    render() {
        return (
            <li id="win" className={this.props.visible ? 'visible' : ''}>
                <span>✔</span>
            </li>
        );
    }
}
