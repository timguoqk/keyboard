require("./Keyboard.css");

import React from 'react';
import helper from '../helper';
import Stats from 'Stats';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    // TODO: locations?
    this.state = {
      locations: ['a', 's', 'd', 'f', 'j', 'k', 'l', 'p'],
      dist: 0,
      letters: 0,
      current: 'a'
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({letters: this.state.letters + 1});
    var current = nextProps.next_letter;
    $('#' + current).click();
    if (this.state.locations[this.props.mapping[current]] != current) {
      this.setState({dist: this.state.dist + 1});
      this.state.dist += 1;
      var newLocations = this.state.locations.slice();
      newLocations[this.props.mapping[current]] = current;
      this.setState({locations: newLocations});
    }
  }

  classNameOf(letter) {
    return this.state.locations.indexOf(letter) == -1 ? 'letter ripple' : 'letter ripple active';
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul id="keyboard">
          <li className="symbol"><span className="off">{this.props.map['`']}</span><span className="on">{this.props.map['~']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['1']}</span><span className="on">{this.props.map['!']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['2']}</span><span className="on">{this.props.map['@']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['3']}</span><span className="on">{this.props.map['#']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['4']}</span><span className="on">{this.props.map['$']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['5']}</span><span className="on">{this.props.map['%']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['6']}</span><span className="on">{this.props.map['^']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['7']}</span><span className="on">&amp;</span></li>
          <li className="symbol"><span className="off">{this.props.map['8']}</span><span className="on">{this.props.map['*']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['9']}</span><span className="on">{this.props.map['(']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['0']}</span><span className="on">{this.props.map[')']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['-']}</span><span className="on">{this.props.map['_']}</span></li>
          <li className="symbol"><span className="off">{this.props.map['=']}</span><span className="on">{this.props.map['+']}</span></li>
          <li className="delete lastitem">delete</li>
          <li className="tab">tab</li>
          <li className={this.classNameOf('q')} id="q">{this.props.map['q']}</li>
          <li className={this.classNameOf('w')} id="w">{this.props.map['w']}</li>
          <li className={this.classNameOf('e')} id="e">{this.props.map['e']}</li>
          <li className={this.classNameOf('r')} id="r">{this.props.map['r']}</li>
          <li className={this.classNameOf('t')} id="t">{this.props.map['t']}</li>
          <li className={this.classNameOf('y')} id="y">{this.props.map['y']}</li>
          <li className={this.classNameOf('u')} id="u">{this.props.map['u']}</li>
          <li className={this.classNameOf('i')} id="i">{this.props.map['i']}</li>
          <li className={this.classNameOf('o')} id="o">{this.props.map['o']}</li>
          <li className={this.classNameOf('p')} id="p">{this.props.map['p']}</li>
          <li className="symbol"><span className="off">{this.props.map['[']}</span><span className="on">{"{"}</span></li>
          <li className="symbol"><span className="off">{this.props.map[']']}</span><span className="on">{"}"}</span></li>
          <li className="symbol lastitem"><span className="off">{this.props.map['\\']}</span><span className="on">{this.props.map['|']}</span></li>
          <li className="capslock">caps lock</li>
          <li className={this.classNameOf('a')} id="a">{this.props.map['a']}</li>
          <li className={this.classNameOf('s')} id="s">{this.props.map['s']}</li>
          <li className={this.classNameOf('d')} id="d">{this.props.map['d']}</li>
          <li className={this.classNameOf('f')} id="f">{this.props.map['f']}</li>
          <li className={this.classNameOf('g')} id="g">{this.props.map['g']}</li>
          <li className={this.classNameOf('h')} id="h">{this.props.map['h']}</li>
          <li className={this.classNameOf('j')} id="j">{this.props.map['j']}</li>
          <li className={this.classNameOf('k')} id="k">{this.props.map['k']}</li>
          <li className={this.classNameOf('l')} id="l">{this.props.map['l']}</li>
          <li className="symbol"><span className="off">{this.props.map[';']}</span><span className="on">{this.props.map[':']}</span></li>
          <li className="symbol"><span className="off">{this.props.map["'"]}</span><span className="on">&quot;</span></li>
          <li className="return lastitem">return</li>
          <li className="left-shift">shift</li>
          <li className={this.classNameOf('z')} id="z">{this.props.map['z']}</li>
          <li className={this.classNameOf('x')} id="x">{this.props.map['x']}</li>
          <li className={this.classNameOf('c')} id="c">{this.props.map['c']}</li>
          <li className={this.classNameOf('v')} id="v">{this.props.map['v']}</li>
          <li className={this.classNameOf('b')} id="b">{this.props.map['b']}</li>
          <li className={this.classNameOf('n')} id="n">{this.props.map['n']}</li>
          <li className={this.classNameOf('m')} id="m">{this.props.map['m']}</li>
          <li className="symbol"><span className="off">{this.props.map[',']}</span><span className="on">&lt;</span></li>
          <li className="symbol"><span className="off">{this.props.map['.']}</span><span className="on">&gt;</span></li>
          <li className="symbol"><span className="off">{this.props.map['/']}</span><span className="on">{this.props.map['?']}</span></li>
          <li className="right-shift lastitem">shift</li>
          <li className="space lastitem">&nbsp;</li>
        </ul>
        <Stats dist_stat={this.state.dist} dist_letters={this.state.letters} />
      </div>
    );
  }
}

var map = {}, all = "`~1!2@3#4$5%6^78*9(0)-_=+qwertyuiop[]\|asdfghjkl;:'zxcvbnm,./?";
for (var i = 0; i < all.length; i ++)
  map[all[i]] = all[i];

Keyboard.defaultProps = {
  map: map,
  layout: 'qwertyuiopasdfghjkl zxcvbnm   ',
  mapping: {
    'q': 0, 'a': 0, 'z': 0, 'w': 1, 's': 1, 'x': 1,
    'e': 2, 'd': 2, 'c': 2, 'r': 3, 'f': 3, 'v': 3,
    't': 3, 'g': 3, 'b': 3, 'y': 4, 'h': 4, 'n': 4,
    'u': 4, 'j': 4, 'm': 4, 'i': 5, 'k': 5, 'o': 6,
    'l': 6, 'p': 7
  }
}

export default Keyboard;
