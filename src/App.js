import React from 'react';
import axios from 'axios';
import Card from './Card';
import Header from './Header';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: 'miugel',
			userData: {},
			followerData: [],
			input: ''
		}
	}

	helperFunction = item => {
		this.setState({username: item});
	}

	componentDidMount() {
		axios.get(`https://api.github.com/users/${this.state.username}`)
			.then(response => {
				this.setState({
					userData: response.data
				})
			})
			.catch(error => {
				console.log(error);
			});
		
		axios.get(`https://api.github.com/users/${this.state.username}/followers`)
			.then(response => {
				this.setState({
					followerData: response.data
				})
			})
			.catch(error => {
				console.log(error);
			});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.username !== this.state.username) {
			axios.get(`https://api.github.com/users/${this.state.username}`)
				.then(response => {
					this.setState({
						userData: response.data
					})
				})
				.catch(error => {
					console.log(error);
				});

			axios.get(`https://api.github.com/users/${this.state.username}/followers`)
				.then(response => {
					this.setState({
						followerData: response.data
					})
				})
				.catch(error => {
					console.log(error);
				});
		}
	}

	render() {
		return (
			<>
				<Header helperFunction={this.helperFunction}/>
				<Card userData={this.state.userData} followerData={this.state.followerData}/>
			</>
		)
	}
}

export default App;
