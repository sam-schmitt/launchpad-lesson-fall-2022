import { Link } from "react-router-dom";

export default function Nav({ title }) {
	return (
		<nav className="header home" id="my-header">
			<h1>{title}</h1>
			<ul>
				<li className="home selected">
					<Link to={`/`}>Home</Link>
				</li>
				<li className="selected">
					<Link to={`about`}>About</Link>
				</li>
			</ul>
			<button className="menu" onClick={() => console.log("menu clicked")}>
				Menu
			</button>
		</nav>
	);
}
