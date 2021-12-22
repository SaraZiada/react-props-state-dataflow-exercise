import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
    <div id="register">
      <h3>You cannot reserve during these times:</h3>
      {console.log(this.props.reservations)}
        {this.props.reservations.map(r => <div>{r.day} @ {r.time}</div>)}
    </div>
    )
  }
}

export default Register