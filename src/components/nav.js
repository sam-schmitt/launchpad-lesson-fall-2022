import { Outlet, Link } from "react-router-dom";

export default function Nav({ title }) {
	return (
		<nav>
			<h1>{title}</h1>
			<ul>
				<li>
					<Link to={`/`}>Home</Link>
				</li>
				<li>
					<Link to={`about`}>About</Link>
				</li>
			</ul>
		</nav>
	);
}
