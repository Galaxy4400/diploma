import { AccountView } from "../../entities/account";
import { AccountDelete } from "../../features/account";

export const Account = ({ accountData }) => {
	return (
		<AccountView 
			accountData={accountData} 
			deleteSlot={<AccountDelete accountId={accountData.id}/>}
		/>
	)
};