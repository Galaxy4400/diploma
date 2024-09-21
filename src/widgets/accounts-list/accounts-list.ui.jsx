import { Link } from "react-router-dom";
import { path } from "../../shared/lib/router";
import { AccountItem } from "../../entities/account";
import { AccountDelete } from "../../features/account";
import { WithLoader } from "../../shared/ui";


export const AccountsList = ({ accounts }) => {
	return (
		<div style={{padding: '10px', border: '1px solid #fff', maxWidth: '300px'}}>
			<h2>СПИСОК СЧЕТОВ</h2>
			<WithLoader isLoading={!accounts}>
				<ul style={{display: 'grid', gap: '10px'}}>
					{accounts?.map(account => (
						<AccountItem 
							key={account.id} 
							accountData={account}
							deleteSlot={<AccountDelete accountId={account.id}/>}
						/>
					))}
				</ul>
			</WithLoader>
			<div>
				<Link to={path.account.create()}>Добавить новый счет</Link>
			</div>
		</div>
	)
};