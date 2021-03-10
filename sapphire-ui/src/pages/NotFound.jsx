import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
	const history = useHistory();

	useEffect(() => {
		setTimeout(() => {
			history.push('/');
		}, 3500);
	}, [history]);

	return (
		<div>
			<h1>Error &mdash; 404 Page Not Found</h1>
			<h3>The resource you requested does not seem to exist.</h3>
			<p>You will be redirected in just a moment.</p>
		</div>
	);
};

export default NotFound;
