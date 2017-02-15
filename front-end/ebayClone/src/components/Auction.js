import React, {Component} from 'react';

class Auction extends Component {
    render() {
      var auctionItem = this.props.item
        return (
            <div className="home">
                <h1>An auction</h1>
                {auctionItem.title}
                <img src={auctionItem.url} />
            </div>
        );
    }
}


export default Auction;
