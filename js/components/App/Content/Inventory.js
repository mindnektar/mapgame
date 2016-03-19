import React, {Component} from 'react';

export default class Inventory extends Component {
    render() {
        return (
            <div
                id="inventory"
                className={this.props.visible ? 'visible' : ''}
            >
                <div
                    className={'maximized' + (this.props.selected !== null ? ' visible' : '')}
                    onClick={event => this.props.select(null)}
                >
                    {this.props.selected !== null &&
                        <div>
                            <img src={'img/' + this.props.items[this.props.selected].image} />

                            {this.props.items[this.props.selected].text &&
                                <span>{this.props.items[this.props.selected].text}</span>
                            }
                        </div>
                    }
                </div>

                <div className="list">
                    {this.props.items.map((item, index) =>
                        item.owned &&
                            <div
                                key={index}
                                className="item"
                                onClick={event => this.props.select(index, !!item.triggersNextStep)}
                            >
                                <img src={'img/' + item.image} />

                                {item.text && <span>{item.text}</span>}
                            </div>
                    )}
                </div>
            </div>
        );
    }
}
