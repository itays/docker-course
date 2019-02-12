import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1>Fib Calculator</h1>
						<Link to="/" className="App-link">
							Home
						</Link>
						<Link to="/otherpage" className="App-link">
							Other Page
						</Link>
					</header>
					<div>
						<Route exact path="/" component={Fib} />
						<Route path="/otherpage" component={OtherPage} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
