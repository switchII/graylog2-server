import React, {PropTypes} from 'react';

const StreamStateBadge = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired,
    stream: PropTypes.object.isRequired,
  },
  _onClick() {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(this.props.stream);
    }
  },
  render() {
    if (!this.props.stream.disabled) {
      return null;
    }

    return (
      <span className="badge alert-danger stream-stopped" onClick={this._onClick} style={{marginLeft: 5}}>stopped</span>
    );
  },
});

export default StreamStateBadge;
