import { Link, useAsyncValue } from "react-router-dom";
import { path } from "../../shared/lib/router";
import { AccountItem } from "../../entities/account";
import { AccountDelete } from "../../features/account";


export const AccountsList = () => {
	const accounts = useAsyncValue();

	return (
		<div>
			<h2>СПИСОК СЧЕТОВ</h2>
			<div>
				<ul>
					{accounts?.map(account => (
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