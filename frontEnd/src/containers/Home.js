import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Navbar1 from './navbar';
import Featured from '../components/Featured';


// import actions
import GetHomeAction from '../actions/GetHomeAction';
import Auction from '../components/Auction';

class Home extends Component {

	componentDidMount() {
		this.props.getHomeData()
	}

	render(){
		// this.props.getHomeData();
		console.log(this.props.homeData);
		var homeAuctions = [];
		this.props.homeData.map((auction, index)=>{
			homeAuctions.push(<Auction key={index} item={auction} />);
		});
		return(
			<div>
				<Navbar1 />
				<div>
					<Featured />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-3 auction-item">{homeAuctions[0]}</div>
						<div className="col-sm-3 auction-item">{homeAuctions[1]}</div>
						<div className="col-sm-3 auction-item">{homeAuctions[2]}</div>
					</div>
				</div>
			</div>

		);
	}
}

function mapStateToProps(state){
	return{
		homeData: state.home
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getHomeData: GetHomeAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
