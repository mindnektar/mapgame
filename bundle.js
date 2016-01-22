(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _NextStep = require('./NextStep');

var _NextStep2 = _interopRequireDefault(_NextStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: 'Answer',
    render: function render() {
        var _this = this;

        return React.createElement(
            'div',
            { className: 'answer' + (this.props.answerValid ? ' valid' : '') },
            React.createElement('input', {
                ref: function ref(input) {
                    return _this.input = input;
                },
                onChange: function onChange(event) {
                    window.store.dispatch({
                        type: 'CHANGE_ANSWER',
                        answer: event.target.value
                    });
                },
                onKeyPress: function onKeyPress(event) {
                    if (event.which === 13 && _this.props.answerValid) {
                        window.store.dispatch({
                            type: 'NEXT_STEP'
                        });
                    }
                },
                disabled: this.props.disabled ? 'disabled' : ''
            })
        );
    },
    componentDidUpdate: function componentDidUpdate() {
        if (this.props.visible) {
            this.input.focus();
        }
    }
});

},{"./NextStep":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = React.createClass({
    displayName: 'Image',
    render: function render() {
        return React.createElement('img', { src: 'img/' + this.props.source + '.png' });
    }
});

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = React.createClass({
    displayName: 'Map',
    render: function render() {
        var _this = this;

        if (this.markers) {
            this.markers.forEach(function (marker) {
                marker.setMap(null);
            });
        }

        this.markers = [];

        this.props.markers.forEach(function (marker, key) {
            var icon = _this.props.answerValid || key < _this.props.step ? 'img/marker_correct.png' : 'img/marker.png';

            _this.markers.push(new google.maps.Marker({
                map: _this.map,
                icon: icon,
                position: new google.maps.LatLng(marker.lat, marker.lng)
            }));
        });

        return React.createElement('div', { id: 'map' });
    },
    componentDidMount: function componentDidMount() {
        var _this2 = this;

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 0, lng: 0 },
            zoom: 3
        });

        this.map.addListener('click', function (event) {
            console.log(event.latLng.lat(), event.latLng.lng());

            if (!_this2.props.hasLatLngAnswer) {
                return;
            }

            window.store.dispatch({
                type: 'SET_MARKER',
                step: _this2.props.step,
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            });
        });
    }
});

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = React.createClass({
    displayName: 'NextStep',
    render: function render() {
        return React.createElement(
            'button',
            {
                id: 'next-step',
                onClick: function onClick() {
                    window.store.dispatch({
                        type: 'NEXT_STEP'
                    });
                },
                disabled: !this.props.answerValid ? 'disabled' : ''
            },
            'Next step'
        );
    }
});

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = React.createClass({
    displayName: "Progress",
    render: function render() {
        return React.createElement(
            "div",
            {
                id: "progress",
                onClick: function onClick() {
                    window.store.dispatch({
                        type: 'NEXT_STEP'
                    });
                }
            },
            React.createElement(
                "div",
                { id: "progress-bar" },
                React.createElement("div", { style: { width: this.getWidth() } })
            ),
            React.createElement(
                "span",
                { id: "progress-text" },
                this.props.currentStep + 1 + '/' + this.props.stepCount
            )
        );
    },
    getWidth: function getWidth() {
        return (this.props.currentStep + 1) / this.props.stepCount * 100 + '%';
    }
});

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Progress = require('./Progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Steps = require('./Steps');

var _Steps2 = _interopRequireDefault(_Steps);

var _NextStep = require('./NextStep');

var _NextStep2 = _interopRequireDefault(_NextStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: 'Sidebar',
    render: function render() {
        var steps = this.props.levels[this.props.current.level].steps;

        return React.createElement(
            'div',
            { id: 'sidebar' },
            React.createElement(_Progress2.default, {
                stepCount: steps.length,
                currentStep: this.props.current.step
            }),
            React.createElement(_Steps2.default, {
                steps: steps,
                currentStep: this.props.current.step,
                answerValid: this.props.answerValid
            }),
            React.createElement(_NextStep2.default, {
                answerValid: this.props.answerValid
            })
        );
    }
});

},{"./NextStep":4,"./Progress":5,"./Steps":8}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Answer = require('./Answer');

var _Answer2 = _interopRequireDefault(_Answer);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: 'Step',
    render: function render() {
        return React.createElement(
            'li',
            { className: (this.props.current ? ' current' : '') + (this.props.visible ? ' visible' : '') },
            React.createElement(
                'span',
                { className: 'step-num' },
                'Step ',
                this.props.stepNum,
                ':'
            ),
            React.createElement('span', { className: 'text',
                dangerouslySetInnerHTML: { __html: this.props.text }
            }),
            this.props.image ? React.createElement(_Image2.default, { source: this.props.image }) : '',
            this.props.hasStringAnswer ? React.createElement(_Answer2.default, {
                disabled: !this.props.current,
                visible: this.props.visible,
                answerValid: this.props.answerValid
            }) : ''
        );
    }
});

},{"./Answer":1,"./Image":2}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: 'Steps',
    render: function render() {
        var _this = this;

        return React.createElement(
            'ul',
            {
                id: 'steps',
                ref: function ref(ul) {
                    return _this.ul = ul;
                }
            },
            this.props.steps.map(function (step, key) {
                return React.createElement(_Step2.default, {
                    key: key,
                    stepNum: key + 1,
                    text: step.text,
                    current: key === _this.props.currentStep,
                    visible: key <= _this.props.currentStep,
                    image: step.image,
                    hasStringAnswer: step.answer && step.answer.type === 'string',
                    answerValid: _this.props.answerValid
                });
            })
        );
    },
    componentDidUpdate: function componentDidUpdate() {
        this.ul.scrollTop = this.ul.scrollHeight;
    }
});

},{"./Step":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('./levels/01');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_2.default];

},{"./levels/01":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    steps: [{
        text: "Go to Sydney, Australia."
    }, {
        text: "Find Sydney Airport by the Botany Bay."
    }, {
        text: "Find the point where Airport Drive <em>crosses</em> the North Pond.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.92639828837397,
                lng: 151.1751902103424
            }
        }
    }, {
        text: "Go to the spot where the pond connects into the Alexandra Canal and follow it northwest until you come across the <em>second bridge</em>.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.920161993523735,
                lng: 151.17934226989746
            }
        }
    }, {
        text: "Get up onto the bridge, follow the road northwest and stop at the <em>axe-throwing venue</em>.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.913234096554376,
                lng: 151.172596514225
            }
        }
    }, {
        text: "Go into the alley and keep straight on until you come back out on the road, then head southeast until you see a <em>building with this shape</em> on your left:",
        image: '01-01',
        answer: {
            type: 'latLng',
            value: {
                lat: -33.91374049203933,
                lng: 151.17481470108032
            }
        }
    }, {
        text: "From here, fly across the map directly eastward and keep going until there's a <em>church</em> right below you.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.91367371478497,
                lng: 151.17696046829224
            }
        }
    }, {
        text: "Walk across the street to the <em>McDonald's</em>.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.914352614432644,
                lng: 151.17797166109085
            }
        }
    }, {
        text: "Across the parking lot, there's a hotel. What kind of bird is part of its name?",
        answer: {
            type: 'string',
            value: 'ibis'
        }
    }, {
        text: "Get onto the highway and follow it northeast until you can see the <em>railway station</em> on your left.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.90721388104591,
                lng: 151.1807182431221
            }
        }
    }, {
        text: "Board the train going northeast and get off at the second stop. Head over to the <em>police station</em> on your right.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.8919371648134,
                lng: 151.19988530874252
            }
        }
    }, {
        text: "Passing the south side of the police station is a street sharing the name of the railway station you just got off from. Follow it east until you can go no further, then head left and keep going that way until you come across a <em>checkerboard pattern</em> on the road.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.89180134961242,
                lng: 151.21053367853165
            }
        }
    }, {
        text: "Immediately to the east of here, there's a shopping mall. What's the first word in its name?",
        answer: {
            type: 'string',
            value: 'surry'
        }
    }, {
        text: "Passing the mall, there's a street named after a city in Ohio. Follow it east and stop by the four <em>tennis courts</em>.",
        answer: {
            type: 'latLng',
            value: {
                lat: -33.89238023257195,
                lng: 151.218523979187,
                tolerance: .0004
            }
        }
    }]
};

},{}],11:[function(require,module,exports){
'use strict';

var _Map = require('./components/Map');

var _Map2 = _interopRequireDefault(_Map);

var _Sidebar = require('./components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _reducers = require('./reducers');

var reducers = _interopRequireWildcard(_reducers);

var _levels = require('./levels');

var _levels2 = _interopRequireDefault(_levels);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.store = Redux.createStore(Redux.combineReducers(reducers));

var isAnswerValid = function isAnswerValid(answer, state) {
    if (!answer) {
        return true;
    }

    switch (answer.type) {
        case 'string':
            return state.current.answer.toLowerCase() === answer.value.toLowerCase();

        case 'latLng':
            var marker = state.map.markers[state.current.step];
            var tolerance = answer.value.tolerance || .0002;

            if (!marker) {
                return false;
            }

            return Math.abs(marker.lat - answer.value.lat) <= tolerance && Math.abs(marker.lng - answer.value.lng) <= tolerance;
    }

    return false;
};

var render = function render() {
    var state = window.store.getState();
    var step = _levels2.default[state.current.level].steps[state.current.step];

    ReactDOM.render(React.createElement(
        'div',
        null,
        React.createElement(_Map2.default, {
            markers: state.map.markers,
            step: state.current.step,
            hasLatLngAnswer: step.answer && step.answer.type === 'latLng',
            answerValid: isAnswerValid(step.answer, state)
        }),
        React.createElement(_Sidebar2.default, {
            levels: _levels2.default,
            current: state.current,
            answerValid: isAnswerValid(step.answer, state)
        })
    ), document.getElementById('app'));
};

window.store.subscribe(render);
render();

},{"./components/Map":3,"./components/Sidebar":6,"./levels":9,"./reducers":12}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = exports.current = undefined;

var _current = require('./reducers/current');

var _current2 = _interopRequireDefault(_current);

var _map = require('./reducers/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.current = _current2.default;
exports.map = _map2.default;

},{"./reducers/current":13,"./reducers/map":14}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialState = {
    answer: '',
    level: 0,
    step: 0
};

exports.default = function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    switch (action.type) {
        case 'NEXT_STEP':
            return Object.assign({}, state, { step: state.step + 1, answer: '' });

        case 'CHANGE_ANSWER':
            return Object.assign({}, state, { answer: action.answer });

        default:
            return state;
    }
};

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialState = {
    markers: []
};

exports.default = function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    switch (action.type) {
        case 'SET_MARKER':
            var markers = state.markers.slice();

            markers[action.step] = {
                lat: action.lat,
                lng: action.lng
            };

            return Object.assign({}, state, { markers: markers });

        default:
            return state;
    }
};

},{}]},{},[11]);
