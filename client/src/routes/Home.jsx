import { NavLink } from 'react-router-dom';

// TODO: Create a Header component to allow users to access available routes
//  Move the routes-related logic to the Header component and create a `constants` file for magic strings, etc.
export const Home = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/chat">Chat</NavLink>
					</li>
					<li>
						<NavLink to="/non-existent/route">404 Route</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				<h1>Welcome to Sapphire!</h1>
				<h3>This is the Home page</h3>
				<p>Secure, performant and anonymous chat service.</p>
				<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</div>
		</div>
	);
};

export default Home;
