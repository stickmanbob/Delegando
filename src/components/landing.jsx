import React from 'react';
import {Link} from 'react-router-dom';

export default function Landing () {

	return(
		<section>
			<header className="landing-one">
				<h3>Helping you delegate your tasks</h3>
				<img src="../public/delegando.gif"></img>
				<Link to="/boards">Start here</Link>
			</header>

			<article className="landing-two">
				<h2>Get yourself organized</h2>
				<p>create custom kanban boards to efficiently delegate tasks to everyone on your team</p>
				
			</article>
			
			<article className="landing-three">
				<h2>What is Delegando?</h2>
				<div>
					<p> <h3>Founders who care</h3>Delegando, founded in 2020 by Daniel Yee, Daniel Chau, and Ajay Rajamani, empowers teams to make rapid progress on their goals
					</p>
					<p><h3>A revolutionary company</h3> We're disrupting the kan-ban ecosystem with our revolutionary, "bare bones" technology, that stores all of your 
						data in the most secure place: Local Storage. Because we believe less, is more. </p>
					<p><h3>All about efficiency</h3> We help anyone and everyone with their efficiency goals, no matter how farfetched or unrealistic. Anything is possible.</p>
				</div>
			</article>

			
			
		</section>
	)
}