import React from 'react';
import helper from '../helper';

class Stats extends React.Component {
  render() {
    return (
      <div className="ui statistics">
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
