import { useAsyncValue } from "react-router-dom";
import { AccountView } from "../../entities/account";
import { AccountDelete } from "../../features/account";
import { OperationsList } from "../operations-list";

export const Account = () => {
	const account = useAsyncValue();

	return (
		<div>
			<AccountView 
				accountData={account} 
				deleteSlot={<AccountDelete accountId={account.id}/>}
			/>
			<OperationsList operations={account.operations} accountId={account.id} />
		</div>
	)
};