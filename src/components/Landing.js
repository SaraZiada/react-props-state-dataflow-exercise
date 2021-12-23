import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */
    render() {
        let hot = this.props.store.filter(s => s.hottest===true)[0]
        return (
            <div>
            Welcome, {this.props.user}. The hottest item is {hot.item} for ${hot.price}
            </div>
        )

    }
}

export default Landing