import React, {Component} from 'react';

export default class Notes extends Component {
    render() {
        return (
            <div
                id="notes"
                className={this.props.visible ? 'visible' : ''}
            >
                <div id="notebook">
                    <textarea></textarea>
                </div>
            </div>
        );
    }
}
