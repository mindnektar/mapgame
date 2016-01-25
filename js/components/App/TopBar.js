import React, {Component} from 'react';
import Tabs from './TopBar/Tabs';

export default class TopBar extends Component {
    render() {
        return (
            <div id="topbar">
                <Tabs
                    items={this.props.tabs}
                    currentTab={this.props.currentTab}
                    changeTab={this.props.changeTab}
                />
            </div>
        );
    }
}
