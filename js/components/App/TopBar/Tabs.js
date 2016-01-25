import React, {Component} from 'react';
import Tab from './Tabs/Tab';

export default class Tabs extends Component {
    render() {
        return (
            <ul id="tabs">
                {this.props.items.map(item =>
                    <Tab
                        key={item.id}
                        id={item.id}
                        active={item.id === this.props.currentTab}
                        text={item.label}
                        changeTab={this.props.changeTab}
                    />
                )}
            </ul>
        );
    }
}
