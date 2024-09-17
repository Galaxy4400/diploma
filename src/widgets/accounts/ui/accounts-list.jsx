import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const AccountsList = () => {
	return (
		<div style={{padding: '10px', border: '1px solid black', maxWidth: '300px'}}>
			<h2>СПИСОК СЧЕТОВ</h2>
			<div>
				<ul>
					<li>
						<Link to={path.account.id(1)}>Ссылка на конкретный счет</Link>
					</li>
				</ul>
			</div>
			<div>
				<Link to={path.account.create()}>Добавить новый счет</Link>
			</div>
		</div>
	)
};