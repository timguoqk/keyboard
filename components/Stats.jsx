import React from 'react';
import helper from '../helper';
import * as _ from 'lodash';

class Stats extends React.Component {
  render() {
    var keys = _.keys(this.props.stat);
    var stat = this.props.stat;
    return (
      <div className="ui statistics">
        {keys.map(function(key) {
          return (
            <div key={key} className="statistic" id="dist-stat">
              <div className="value">{stat[key]}</div>
              <div className="label">{key}</div>
            </div>
          );
        })}
        <div className="statistic" id="dist-stat">
          <div className="value">{this.props.dist_stat}</div>
          <div className="label">Units of distance moved</div>
        </div>
        <div className="statistic" id="dist-letters">
          <div className="value">{this.props.dist_letters}</div>
          <div className="label">Number of letters typed</div>
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
