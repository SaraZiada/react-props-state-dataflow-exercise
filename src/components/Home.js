import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return(<div>                
            <h3>Store</h3>
            {this.props.shouldDiscount 
            ? this.props.store.map(s => <Item key={s.item} item={s.item} price={s.price*(1-s.discount)} discount={s.discount} hottest={s.hottest} />)
            : this.props.store.map(s => <Item key={s.item} item={s.item} price={s.price} discount={s.discount} hottest={s.hottest} />)
            }
            </div>
        )
    }
}

export default Home