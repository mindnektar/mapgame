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
                        <img src={'img/' + this.props.items[this.props.selected].image} />
                    }
                </div>

                <div className="list">
                    {this.props.items.map((item, index) =>
                        <div
                            key={index}
                            className="item"
                            onClick={event => this.props.select(index)}
                        >
                            <img src={'img/' + item.image} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
