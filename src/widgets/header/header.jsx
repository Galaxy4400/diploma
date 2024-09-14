import { useSelector } from "react-redux";
import { userSelector } from "../../app/store";
import { Link } from "react-router-dom";

export const Header = () => {
	const authUser = useSelector(userSelector.user);

	return (
		<div>
			<div>Header</div>
			<Link to="/settings">{authUser.login}</Link>
		</div>
	)
};