import React, {Component} from 'react';

export default class Tab extends Component {
    render() {
        return (
            <li
                className={this.props.active ? 'active': ''}
                onClick={() => this.props.changeTab(this.props.id)}
            >
                {this.props.text}
            </li>
        );
    }
}
