import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){

	return(
		<header className="nav-bar">
			<h1><Link to="/">Delegando</Link></h1>
			<h2><Link to="/boards">Boards</Link></h2>
		</header>
	)
}