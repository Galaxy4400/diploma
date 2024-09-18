import { useServer } from "../../../app/providers/server";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { useDispatch } from "react-redux";
import { loadAccounts } from "../../../entities/accounts";


export const AccountDelete = ({ accountId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const deleteHandler = async (id) => {
		await requestServer.deleteAccount(id);

		dispatch(loadAccounts(requestServer));
		
		navigate(path.home());
	}

	return (
		<button type="button" onClick={() => deleteHandler(accountId)}>Закрыть счет</button>
	)
};