import Steps from './Steps';
import NextStep from './NextStep';
import Skip from './Skip';

export default React.createClass({
    render() {
        const steps = this.props.levels[this.props.current.level].steps;

        return (
            <div id="sidebar">
                <Steps
                    steps={steps}
                    currentStep={this.props.current.step}
                    answerValid={this.props.answerValid}
                />
                <NextStep
                    answerValid={this.props.answerValid}
                />
                <Skip />
            </div>
        );
    }
});
