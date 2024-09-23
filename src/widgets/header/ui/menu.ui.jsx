import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const Menu = () => {
	return (
		<nav className="menu">
			<ul className="list">
				<li className="item">
					<Link className="link" to={path.home()}>Главная</Link>
				</li>
				<li>
					<Link className="link" to={path.history()}>История</Link>
				</li>
			</ul>
		</nav>
	)
};