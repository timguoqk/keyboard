require("./Keyboard.css");

import React from 'react';
import helper from '../helper';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: ['a', 's', 'd', 'f', 'j', 'k', 'l', 'p'],
      this.state.distance: 0,
      count: 0,
      current: 'a'
    };
  }

  componentWillMount() {
    var all = "`~1!2@3#4$5%6^78*9(0)-_=+qwertyuiop[]\|asdfghjkl;:'zxcvbnm,./?";
    for (var i = 0; i < all.length; i ++)
      this.props.map[all[i]] = all[i];
  }

  componentDidMount() {
    $.getJSON(this.props.freqURL, function(data) {
      this.simulate(data);
    }.bind(this));
  }

  simulate(freq) {
    for (var i = 0; i < this.state.locations.length; i ++)
      $('#' + this.state.locations[i]).addClass('active');
    $('#matrix').text(freq.toString());
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    run();
  }

  run = function() {
    this.state.count += 1;
    current = helper.getRandomItem(letters, freq[current.charCodeAt(0) - 'a'.charCodeAt(0)]);
    $('#' + current).click();
    $('#' + current).addClass('active');
    $('#textarea').append(current);
    if (this.state.locations[this.props.mapping[current]] != current) {
      this.state.distance += 1;
      $('#' + this.state.locations[this.props.mapping[current]]).removeClass('active');
      this.state.locations[this.props.mapping[current]] = current
    }
    $('#dist-stat>.value').text(this.state.distance);
    $('#dist-letters>.value').text(this.state.count);
    window.setTimeout(run, 300);
  }

  render() {
    return (
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
        <li className="letter ripple" id="q">{this.props.map['q']}</li>
        <li className="letter ripple" id="w">{this.props.map['w']}</li>
        <li className="letter ripple" id="e">{this.props.map['e']}</li>
        <li className="letter ripple" id="r">{this.props.map['r']}</li>
        <li className="letter ripple" id="t">{this.props.map['t']}</li>
        <li className="letter ripple" id="y">{this.props.map['y']}</li>
        <li className="letter ripple" id="u">{this.props.map['u']}</li>
        <li className="letter ripple" id="i">{this.props.map['i']}</li>
        <li className="letter ripple" id="o">{this.props.map['o']}</li>
        <li className="letter ripple" id="p">{this.props.map['p']}</li>
        <li className="symbol"><span className="off">{this.props.map['[']}</span><span className="on">{"{"}</span></li>
        <li className="symbol"><span className="off">{this.props.map[']']}</span><span className="on">{"}"}</span></li>
        <li className="symbol lastitem"><span className="off">{this.props.map['\\']}</span><span className="on">{this.props.map['|']}</span></li>
        <li className="capslock">caps lock</li>
        <li className="letter ripple" id="a">{this.props.map['a']}</li>
        <li className="letter ripple" id="s">{this.props.map['s']}</li>
        <li className="letter ripple" id="d">{this.props.map['d']}</li>
        <li className="letter ripple" id="f">{this.props.map['f']}</li>
        <li className="letter ripple" id="g">{this.props.map['g']}</li>
        <li className="letter ripple" id="h">{this.props.map['h']}</li>
        <li className="letter ripple" id="j">{this.props.map['j']}</li>
        <li className="letter ripple" id="k">{this.props.map['k']}</li>
        <li className="letter ripple" id="l">{this.props.map['l']}</li>
        <li className="symbol"><span className="off">{this.props.map[';']}</span><span className="on">{this.props.map[':']}</span></li>
        <li className="symbol"><span className="off">{this.props.map["'"]}</span><span className="on">&quot;</span></li>
        <li className="return lastitem">return</li>
        <li className="left-shift">shift</li>
        <li className="letter ripple" id="z">{this.props.map['z']}</li>
        <li className="letter ripple" id="x">{this.props.map['x']}</li>
        <li className="letter ripple" id="c">{this.props.map['c']}</li>
        <li className="letter ripple" id="v">{this.props.map['v']}</li>
        <li className="letter ripple" id="b">{this.props.map['b']}</li>
        <li className="letter ripple" id="n">{this.props.map['n']}</li>
        <li className="letter ripple" id="m">{this.props.map['m']}</li>
        <li className="symbol"><span className="off">{this.props.map[',']}</span><span className="on">&lt;</span></li>
        <li className="symbol"><span className="off">{this.props.map['.']}</span><span className="on">&gt;</span></li>
        <li className="symbol"><span className="off">{this.props.map['/']}</span><span className="on">{this.props.map['?']}</span></li>
        <li className="right-shift lastitem">shift</li>
        <li className="space lastitem">&nbsp;</li>
      </ul>
    );
  }
}

Keyboard.defaultProps = {
  map: {},
  freqURL: 'data/englishf.json',
  layout: 'qwertyuiopasdfghjkl zxcvbnm   ',
  // order: 'qwertyuiopasdfghjklzxcvbnm',
  mapping: {
    'q': 0, 'a': 0, 'z': 0, 'w': 1, 's': 1, 'x': 1,
    'e': 2, 'd': 2, 'c': 2, 'r': 3, 'f': 3, 'v': 3,
    't': 3, 'g': 3, 'b': 3, 'y': 4, 'h': 4, 'n': 4,
    'u': 4, 'j': 4, 'm': 4, 'i': 5, 'k': 5, 'o': 6,
    'l': 6, 'p': 7
  }
}

export default Keyboard;
