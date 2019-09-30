import React,{ Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ScrollBar from './ScrollBar';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			'robots':[],
			'searchfield':''
		}
	}
	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		}).then(users => {
			this.setState({ robots : users})
		})
	}	
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const FilterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className='tc'>
				<h1 className='f1'>RobotFriends</h1>
				<SearchBox searchQuery = {this.onSearchChange}/>
				<ScrollBar>
				<CardList robots={ FilterRobots }/>
				</ScrollBar>
			</div>	
		);
	}	
	
}
export default App;