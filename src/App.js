import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Nav from "./components/nav";

function App() {
	return (
		<div className='App'>
			{/* <Nav title='Home' /> */}
			<h1>Hello World!</h1>
		</div>
	);
}

export default App;
