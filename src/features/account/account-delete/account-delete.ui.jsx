import { useServer } from "../../../app/providers/server";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadAccounts } from "../../../entities/accounts";
import { useAuth } from "../../../app/providers/auth";
import { useFrom } from "../../../shared/lib/location";


export const AccountDelete = ({ accountId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const from = useFrom();

	const deleteHandler = async (id) => {
		await requestServer.deleteAccount(id, authUser.id);

		dispatch(loadAccounts(requestServer, authUser.id));

		navigate(from?.pathname, { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(accountId)}>Удалить</button>
	)
};