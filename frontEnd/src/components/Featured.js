import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class Featured extends Component {
    render() {
        console.log(this.props.item);
        var auctionItem = this.props.item
        return (
            <div>
                <h1>Featured Auctions</h1>
                <Carousel>
                    <Carousel.Item>
                        <img className="carousel-image" alt="" src="http://www.pizzahut-tt.com/wp-content/uploads/2013/06/pizza-hut-trinidad-and-tobago-supreme-lovers.png"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-image" alt="" src="http://cdn2.gsmarena.com/vv/pics/zte/zte-axon-7-1.jpg" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-image" alt="" src="http://img.bbystatic.com/BestBuy_US/images/products/5596/5596711_sd.jpg"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        );
    }
}

export default Featured;
