import Answer from './Answer';
import Image from './Image';

export default React.createClass({
    render() {
        return (
            <li className={(this.props.current ? ' current' : '') + (this.props.visible ? ' visible' : '')}>
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
                        /> :
                        ''
                }
            </li>
        );
    }
});
