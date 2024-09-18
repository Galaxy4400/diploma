import { Link } from "react-router-dom";
import { path } from "../../shared/lib/router";
import { AccountItem } from "../../entities/account";
import { AccountDelete } from "../../features/account";

export const AccountsList = ({ accounts = [] }) => {
	return (
		<div style={{padding: '10px', border: '1px solid black', maxWidth: '300px'}}>
			<h2>СПИСОК СЧЕТОВ</h2>
			<div>
				<ul>
					{accounts.map(account => (
						<AccountItem 
							key={account.id} 
							accountData={account}
							deleteSlot={<AccountDelete accountId={account.id}/>}
						/>
					))}
				</ul>
			</div>
			<div>
				<Link to={path.account.create()}>Добавить новый счет</Link>
			</div>
		</div>
	)
};