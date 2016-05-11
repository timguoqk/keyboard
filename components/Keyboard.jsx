require("./Keyboard.css");

import React from 'react';
import helper from '../helper';
import Stats from 'Stats';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.posToKey = {};
    this.keyToPos = {};

    this.state = {
      locations: ['a', 's', 'd', 'f', 'j', 'k', 'l', 'p'],
      dist: 0,
      letters: 0,
      hand_alternations: 0,
      last_hand: 'left'
    };
  }

  componentWillMount() {
    var default_layout = "`~1!2@3#4$5%6^78*9(0)-_=+qwertyuiop[]\\|asdfghjkl;:'zxcvbnm,./?";
    for (var i = 0; i < default_layout.length; i ++) {
      this.posToKey[default_layout[i]] = this.props.layout[i];
      this.keyToPos[this.props.layout[i]] = default_layout[i];
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({letters: this.state.letters + 1});

    var currentPos = this.posToKey[nextProps.next_letter];
    $('#' + currentPos).click();
    if (this.state.locations[this.props.posToFinger[currentPos]] != currentPos) {
      var newLocations = this.state.locations.slice();
      newLocations[this.props.posToFinger[currentPos]] = currentPos;
      this.setState({
        locations: newLocations,
        dist: this.state.dist + 1
      });
    }
    var nextHand = this.props.posToFinger[currentPos] <= 3 ? 'left' : 'right';
    if (nextHand != this.state.last_hand)
      this.setState({
        last_hand: nextHand,
        hand_alternations: this.state.hand_alternations + 1
      });
  }

  classNameOf(letter) {
    return this.state.locations.indexOf(letter) == -1 ? 'letter ripple' : 'letter ripple active';
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul id="keyboard">
          <li className="symbol"><span className="off">{this.posToKey['`']}</span><span className="on">{this.posToKey['~']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['1']}</span><span className="on">{this.posToKey['!']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['2']}</span><span className="on">{this.posToKey['@']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['3']}</span><span className="on">{this.posToKey['#']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['4']}</span><span className="on">{this.posToKey['$']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['5']}</span><span className="on">{this.posToKey['%']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['6']}</span><span className="on">{this.posToKey['^']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['7']}</span><span className="on">&amp;</span></li>
          <li className="symbol"><span className="off">{this.posToKey['8']}</span><span className="on">{this.posToKey['*']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['9']}</span><span className="on">{this.posToKey['(']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['0']}</span><span className="on">{this.posToKey[')']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['-']}</span><span className="on">{this.posToKey['_']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey['=']}</span><span className="on">{this.posToKey['+']}</span></li>
          <li className="delete lastitem">delete</li>
          <li className="tab">tab</li>
          <li className={this.classNameOf('q')} id="q">{this.posToKey['q']}</li>
          <li className={this.classNameOf('w')} id="w">{this.posToKey['w']}</li>
          <li className={this.classNameOf('e')} id="e">{this.posToKey['e']}</li>
          <li className={this.classNameOf('r')} id="r">{this.posToKey['r']}</li>
          <li className={this.classNameOf('t')} id="t">{this.posToKey['t']}</li>
          <li className={this.classNameOf('y')} id="y">{this.posToKey['y']}</li>
          <li className={this.classNameOf('u')} id="u">{this.posToKey['u']}</li>
          <li className={this.classNameOf('i')} id="i">{this.posToKey['i']}</li>
          <li className={this.classNameOf('o')} id="o">{this.posToKey['o']}</li>
          <li className={this.classNameOf('p')} id="p">{this.posToKey['p']}</li>
          <li className="symbol"><span className="off">{this.posToKey['[']}</span><span className="on">{"{"}</span></li>
          <li className="symbol"><span className="off">{this.posToKey[']']}</span><span className="on">{"}"}</span></li>
          <li className="symbol lastitem"><span className="off">{this.posToKey['\\']}</span><span className="on">{this.posToKey['|']}</span></li>
          <li className="capslock">caps lock</li>
          <li className={this.classNameOf('a')} id="a">{this.posToKey['a']}</li>
          <li className={this.classNameOf('s')} id="s">{this.posToKey['s']}</li>
          <li className={this.classNameOf('d')} id="d">{this.posToKey['d']}</li>
          <li className={this.classNameOf('f')} id="f">{this.posToKey['f']}</li>
          <li className={this.classNameOf('g')} id="g">{this.posToKey['g']}</li>
          <li className={this.classNameOf('h')} id="h">{this.posToKey['h']}</li>
          <li className={this.classNameOf('j')} id="j">{this.posToKey['j']}</li>
          <li className={this.classNameOf('k')} id="k">{this.posToKey['k']}</li>
          <li className={this.classNameOf('l')} id="l">{this.posToKey['l']}</li>
          <li className="symbol"><span className="off">{this.posToKey[';']}</span><span className="on">{this.posToKey[':']}</span></li>
          <li className="symbol"><span className="off">{this.posToKey["'"]}</span><span className="on">&quot;</span></li>
          <li className="return lastitem">return</li>
          <li className="left-shift">shift</li>
          <li className={this.classNameOf('z')} id="z">{this.posToKey['z']}</li>
          <li className={this.classNameOf('x')} id="x">{this.posToKey['x']}</li>
          <li className={this.classNameOf('c')} id="c">{this.posToKey['c']}</li>
          <li className={this.classNameOf('v')} id="v">{this.posToKey['v']}</li>
          <li className={this.classNameOf('b')} id="b">{this.posToKey['b']}</li>
          <li className={this.classNameOf('n')} id="n">{this.posToKey['n']}</li>
          <li className={this.classNameOf('m')} id="m">{this.posToKey['m']}</li>
          <li className="symbol"><span className="off">{this.posToKey[',']}</span><span className="on">&lt;</span></li>
          <li className="symbol"><span className="off">{this.posToKey['.']}</span><span className="on">&gt;</span></li>
          <li className="symbol"><span className="off">{this.posToKey['/']}</span><span className="on">{this.posToKey['?']}</span></li>
          <li className="right-shift lastitem">shift</li>
          <li className="space lastitem"> </li>
        </ul>
        <Stats stat={this.props.stat} dist_stat={this.state.dist} dist_letters={this.state.letters} hand_alternations={this.state.hand_alternations} />
      </div>
    );
  }
}

Keyboard.defaultProps = {
  layout: "`~1!2@3#4$5%6^78*9(0)-_=+qwertyuiop[]\\|asdfghjkl;:'zxcvbnm,./?",
  posToFinger: {
    'q': 0, 'a': 0, 'z': 0, 'w': 1, 's': 1, 'x': 1,
    'e': 2, 'd': 2, 'c': 2, 'r': 3, 'f': 3, 'v': 3,
    't': 3, 'g': 3, 'b': 3, 'y': 4, 'h': 4, 'n': 4,
    'u': 4, 'j': 4, 'm': 4, 'i': 5, 'k': 5, 'o': 6,
    'l': 6, 'p': 7
  },
  posToKey: {},
  keyToPos: {}
}

export default Keyboard;
