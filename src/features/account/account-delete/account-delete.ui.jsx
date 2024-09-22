import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadAccounts } from "../../../entities/accounts";
import { useFrom } from "../../../shared/lib/location";
import { server } from "../../../shared/bff";


export const AccountDelete = ({ accountId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const from = useFrom();

	const deleteHandler = async (id) => {
		await server.deleteAccount(id);

		dispatch(loadAccounts());

		navigate(from?.pathname, { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(accountId)}>Удалить</button>
	)
};