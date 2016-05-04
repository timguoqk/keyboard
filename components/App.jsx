require("./App.css");

import React from 'react';
import helper from '../helper';
import * as _ from 'lodash';
import Keyboard from 'Keyboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_letter: this.props.letters[0],
      curr_lang_num: 0,
      textarea_text: ''
    };
    $.ajaxSetup({"async": false});
    for (var i = 0; i < this.props.lang.length; i ++)
      this.props.lang[i][1] = $.getJSON(this.props.lang[i][1]).responseJSON;
    $.ajaxSetup({"async": true});
  }

  componentWillMount() {
  }

  componentDidMount() {
    $('.ui.dropdown').dropdown();
    var that = this;
    window.setInterval(function() {that.simulate(that);}, 300);
  }

  simulate(that) {
    console.log('hit!');
    var freq = that.props.lang[this.state.curr_lang_num][1];
    this.setState({current_letter: helper.getRandomItem(this.props.letters, freq[this.state.current_letter.charCodeAt(0) - 'a'.charCodeAt(0)])});
    this.setState({textarea_text: this.state.textarea_text + this.state.current_letter});
  }

  onDropdownChange(e) {
    console.log(e);
  }

  render() {
    var current_letter = this.state.current_letter;
    return (
      <div>
      <h1>Keyboard: A visualization</h1>
      {this.props.lang.map(function(x) {
        return <Keyboard key={x[0]} name={x[0]} freq={x[1]} layout={x[2]} next_letter={current_letter} />
      })}
      <div className="row">
        <div className="nine wide column">
          <div className="ui inverted segment">
            <span id="textarea">{this.state.textarea_text}</span>
            <span className="typed-cursor">|</span>
          </div>
        </div>
        <div className="seven wide column">
          <div className="ui selection dropdown" onChange={this.onDropdownChange} >
            <input type="hidden" name="gender" />
            <i className="dropdown icon"></i>
            <div className="default text">Gender</div>
            <div className="menu">
              <div className="item" data-value="1">Male</div>
              <div className="item" data-value="0">Female</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row matrix">
        {'$$\\begin{bmatrix}' +
          this.props.lang[this.state.curr_lang_num][1].map(function(x) {
            return x.join('&') + '\\\\';
          }).join('') + '\\end{bmatrix}$$'}
      </div>
      </div>
    );
  }
}

App.defaultProps = {
  lang: [
    ['English', 'data/englishf.json', 'MCFW  UDYGSNRHLETOAIPBVK  XJQZ'],
    ['Chinese - Pinyin', 'data/pinyinf.json', 'OZSC  JXBTIAEUGNHDYLKFPV  MRWQ'],
    ['C', 'data/cf.json', 'UGXK  LFPMETIAORSNCDWYQJ  HVBZ']
  ],
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
};

export default App;
