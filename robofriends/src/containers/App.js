import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import './App.css';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	
	componentDidMount() {
		this.props.onRequestRobots();
	}	
	

	render() {
		const { isPending } = this.props;
		const FilterRobots = this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
		return isPending ?
			<h1>Loading </h1> :
			(
			<div className='tc'>
				<h1 className='f1'>RobotFriends</h1>
				<SearchBox searchQuery = {this.props.onSearchChange}/>
				<ScrollBar>
				<CardList robots={ FilterRobots }/>
				</ScrollBar>
			</div>	
		);
	}	
	
}
export default connect(mapStateToProps, mapDispatchToProps)(App);