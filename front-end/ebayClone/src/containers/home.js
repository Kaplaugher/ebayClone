import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import GetHomeAction from '../actions/GetHomeAction';
import Auction from '../components/Auction';

class Home extends Component {
  componentDidMount(){
    this.props.getHomeData;
  }
  render() {
    var homeAuctions = [];
    this.props.homeData.map((auction, index)=>{
      homeAuctions.push(<Auction key={index} item={auction} />);
    })
    // this.props.getHomeData();
    return (
      <div className="home">
        <h1>Home</h1>
        {homeAuctions}


      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      homeData: state.home
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getHomeData: GetHomeAction
  })
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
