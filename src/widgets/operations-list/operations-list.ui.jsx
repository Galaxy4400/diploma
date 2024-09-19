import { Link } from "react-router-dom";
import { path } from "../../shared/lib/router";

export const OperationsList = ({ operations = [] }) => {
	return (
		<div>
			<h2>СПИСОК ОПЕРАЦИЙ СЧЕТА</h2>
			<div>
				<ul style={{display: 'grid', gap: '10px'}}>
					{operations.map(operation => (
						<li key={operation.id}><Link to={path.operation.id(operation.id)}>{operation.name}</Link></li>
					))}
					{/* {accounts.map(account => (
						<AccountItem 
							key={account.id} 
							accountData={account}
							deleteSlot={<AccountDelete accountId={account.id}/>}
						/>
					))} */}
				</ul>
			</div>
		</div>
	)
};