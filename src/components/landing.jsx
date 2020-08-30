import React from 'react';
import {Link} from 'react-router-dom';

export default function Landing () {

	return(
		<section>
			<h1>Landing Page</h1>
			<Link to="/boards">My Boards</Link>
		</section>
	)
}