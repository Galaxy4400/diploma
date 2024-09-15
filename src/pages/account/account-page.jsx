import { useParams } from "react-router-dom";
import { Account } from "../../widgets/account";

export const AccountPage = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>СТРАНИЦА СЧЕТА</h1>
	
			<Account id={id} />
		</div>
	)
};