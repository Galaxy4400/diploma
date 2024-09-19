import { useServer } from "../../../app/providers/server";
import { useMatch, useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { useDispatch } from "react-redux";
import { loadAccounts } from "../../../entities/accounts";
import { useAuth } from "../../../app/providers/auth";


export const AccountDelete = ({ accountId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const routeMatch = useMatch(path.account.id());
	const { requestServer } = useServer();
	const { authUser } = useAuth();

	const deleteHandler = async (id) => {
		await requestServer.deleteAccount(id);

		dispatch(loadAccounts(requestServer, authUser.id));

		if (routeMatch) navigate(path.home(), { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(accountId)}>Удалить</button>
	)
};