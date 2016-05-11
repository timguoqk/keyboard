require("./App.css");

import React from 'react';
import helper from '../helper';
import * as _ from 'lodash';
import Keyboard from 'Keyboard';
import layout from '../layout';

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
    // $('.ripple').on('click', function (event) {
    //   event.preventDefault();

    //   var $div = $('<div/>'),
    //   btnOffset = $(this).offset(),
    //   xPos = event.pageX - btnOffset.left,
    //   yPos = event.pageY - btnOffset.top;

    //   var $ripple = $div.addClass('ripple-effect');;

    //   $ripple.css('height', $(this).height());
    //   $ripple.css('width', $(this).height());
    //   $div.css({
    //     top: yPos - ($ripple.height()/2),
    //     left: xPos - ($ripple.width()/2),
    //     background: '#ffffff'
    //   })
    //   .appendTo($(this));

    //   window.setTimeout(function() { $div.remove(); }, 500);
    // });
    window.setInterval(function() {that.simulate(that);}, 550);
  }

  simulate(that) {
    var freq = that.props.lang[this.state.curr_lang_num][1];
    var cl = helper.getRandomItem(this.props.letters, freq[this.state.current_letter.charCodeAt(0) - 'a'.charCodeAt(0)]);
    this.setState({
      current_letter: cl,
      textarea_text: this.state.textarea_text + cl
    });
  }

  render() {
    var current_letter = this.state.current_letter;
    var curr_lang_num = this.state.curr_lang_num;
    return (
      <div>
      <div className="ui grid">
        <h1>Keyboard: A visualization</h1>
        {this.props.lang.map(function(x) {
          return <Keyboard key={x[0] + curr_lang_num} name={x[0]} freq={x[1]} layout={x[2]} stat={x[3]} next_letter={current_letter} />
        })}
        <div className="row">
          <div className="twelve wide column">
            <div className="ui inverted segment">
              <span id="textarea">{this.state.textarea_text}</span>
              <span className="typed-cursor">|</span>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui selection dropdown" >
              <input type="hidden" name="lang" />
              <i className="dropdown icon"></i>
              <div className="default text">Choose a language</div>
              <div className="menu">
                {this.props.lang.map(function(x, i) {
                  return (<div key={i} className="item" data-value={i}>{x[0]}</div>);
                })}
              </div>
            </div>
          </div>
        </div>
        <h2>Transition matrix for the current language</h2>
      </div>
      <div className="row matrix">
        {'$$\\begin{matrix}' +
          this.props.lang[this.state.curr_lang_num][1].map(function(x) {
            return x.join('&') + '\\\\';
          }).join('') + '\\end{matrix}$$'}
      </div>
      </div>
    );
  }
}

App.defaultProps = {
  lang: layout,
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
};

export default App;
