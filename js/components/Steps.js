import Step from './Step';

export default React.createClass({
    render() {
        return (
            <ul
                id="steps"
                ref={ul => this.ul = ul}
            >
                {this.props.steps.map((step, key) =>
                    <Step
                        key={key}
                        stepNum={key + 1}
                        text={step.text}
                        current={key === this.props.currentStep}
                        visible={key <= this.props.currentStep}
                        image={step.image}
                        hasStringAnswer={step.answer && step.answer.type === 'string'}
                        answerValid={this.props.answerValid}
                    />
                )}
            </ul>
        );
    },

    componentDidUpdate() {
        this.ul.scrollTop = this.ul.scrollHeight;
    }
});
