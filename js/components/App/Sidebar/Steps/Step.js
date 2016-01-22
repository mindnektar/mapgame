import React, {Component} from 'react';
import Answer from './Step/Answer';
import Image from './Step/Image';

export default class Step extends Component {
    render() {
        return (
            <li className={(this.props.visible ? 'visible' : '') + (this.props.current ? ' current' : '')}>
                <span className="step-num">
                    Step {this.props.stepNum}:
                </span>

                <span className="text"
                    dangerouslySetInnerHTML={{__html: this.props.text}}
                >
                </span>

                {
                    this.props.image ?
                        <Image source={this.props.image} /> :
                        ''
                }

                {
                    this.props.hasStringAnswer ?
                        <Answer
                            disabled={!this.props.current}
                            visible={this.props.visible}
                            answerValid={this.props.answerValid}
                            nextStep={this.props.nextStep}
                            changeAnswer={this.props.changeAnswer}
                        /> :
                        ''
                }
            </li>
        );
    }
}
