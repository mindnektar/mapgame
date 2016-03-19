import React, {Component} from 'react';

export default class Intro extends Component {
    render() {
        return (
            <div id="intro">
                <p>Herzlichen Glückwunsch!</p>
                <p>
                    <img src="img/troll.png" />
                </p>
                <p>Ein Troll hat deine Geburtstagsgeschenke geklaut und sie in der ganzen Stadt verteilt! Freundlicherweise hat er einige Hinweise hinterlassen, mit deren Hilfe du sie finden kannst. Lass dich nicht trollen und mach dich auf die Suche!</p>
                <p>
                    <button onClick={this.props.start}>Aber sowas von!</button>
                </p>
            </div>
        );
    }
}
