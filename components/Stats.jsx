import React from 'react';
import helper from '../helper';
import * as _ from 'lodash';

class Stats extends React.Component {
  render() {
    var keys = _.keys(this.props.stat);
    var stat = this.props.stat;
    return (
      <div>
      <div className="ui statistics">
        <div className="statistic" id="dist-stat">
          <div className="value">{this.props.dist_stat}</div>
          <div className="label">Units of distance moved</div>
        </div>
        <div className="statistic" id="dist-letters">
          <div className="value">{this.props.dist_letters}</div>
          <div className="label">Number of letters typed</div>
        </div>
        <div className="statistic" id="dist-stat">
          <div className="value">{this.props.hand_alternations}</div>
          <div className="label">Number of hand alternations</div>
        </div>
      </div>
      <div className="ui statistics">
        {keys.map(function(key) {
          var s = {'font-size': '1rem'};
          return (
            <div key={key} className="ui mini statistic" id="dist-stat">
              <div className="value" style={s}>{stat[key]}</div>
              <div className="label" style={s}>{key}</div>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}

Stats.defaultProps = {
  dist_stat: 0,
  dist_letters: 0
}

export default Stats;
