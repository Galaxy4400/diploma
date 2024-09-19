import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const AccountItem = ({ accountData, deleteSlot }) => {
	return (
		<li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
			<Link to={path.account.id(accountData.id)}>{accountData.name}</Link>
			{deleteSlot}
		</li>
	)
};
