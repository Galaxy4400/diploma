import { Link, useLocation } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const AccountItem = ({ accountData, deleteSlot }) => {
	const location = useLocation();

	return (
		<div>
			<Link to={path.account.id(accountData.id)} state={{from: location}}>{accountData.name}</Link>
			{/* {deleteSlot} */}
		</div>
	)
};
