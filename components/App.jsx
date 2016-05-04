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
    var that = this;
    $('.ui.dropdown').dropdown({onChange: function(value, text, $choice) {
      that.setState({
        current_letter: that.props.letters[0],
        textarea_text: '',
        curr_lang_num: value
      });
      MathJax.Hub.Typeset();
    }});
    window.setInterval(function() {that.simulate(that);}, 300);
  }

  simulate(that) {
    var freq = that.props.lang[this.state.curr_lang_num][1];
    this.setState({current_letter: helper.getRandomItem(this.props.letters, freq[this.state.current_letter.charCodeAt(0) - 'a'.charCodeAt(0)])});
    this.setState({textarea_text: this.state.textarea_text + this.state.current_letter});
  }

  onDropdownChange(e) {
    console.log(e);
  }

  render() {
    var current_letter = this.state.current_letter;
    var curr_lang_num = this.state.curr_lang_num;
    return (
      <div>
      <h1>Keyboard: A visualization</h1>
      {this.props.lang.map(function(x) {
        return <Keyboard key={x[0] + curr_lang_num} name={x[0]} freq={x[1]} layout={x[2]} next_letter={current_letter} />
      })}
      <div className="row">
        <div className="nine wide column">
          <div className="ui inverted segment">
            <span id="textarea">{this.state.textarea_text}</span>
            <span className="typed-cursor">|</span>
          </div>
        </div>
        <div className="seven wide column">
          <div className="ui selection dropdown" >
            <input type="hidden" name="lang" />
            <i className="dropdown icon"></i>
            <div className="default text">Choose corpus</div>
            <div className="menu">
              {this.props.lang.map(function(x, i) {
                return (<div className="item" data-value={i}>{x[0]}</div>);
              })}
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
