import { Link } from "react-router-dom";
import { path } from "../../shared/lib/router";

export const AccountsList = ({ accounts = [] }) => {
	return (
		<div style={{padding: '10px', border: '1px solid black', maxWidth: '300px'}}>
			<h2>СПИСОК СЧЕТОВ</h2>
			<div>
				<ul>
					{accounts.map(account => (
						<li key={account.id}>
							<Link to={path.account.id(account.id)}>{account.name}</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<Link to={path.account.create()}>Добавить новый счет</Link>
			</div>
		</div>
	)
};