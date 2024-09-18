import { useServer } from "../../../app/providers/server";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";


export const AccountDelete = ({ accountId }) => {
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const deleteHandler = async (id) => {
		await requestServer.deleteAccount(id);

		navigate(path.home());
	}

	return (
		<button type="button" onClick={() => deleteHandler(accountId)}>Удалить</button>
	)
};