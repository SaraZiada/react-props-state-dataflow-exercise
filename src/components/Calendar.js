import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar"><h3>Calendar</h3>
        {this.props.reservations.map(r => <div>{r.name} has a reservation on {r.day} @ {r.time}</div>)}
      </div>
    )
  }
}

export default Calendar