import { useServer } from "../../../app/providers/server";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../app/providers/auth";
import { useFrom } from "../../../shared/lib/location";


export const CategoryDelete = ({ categoryId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const from = useFrom();

	const deleteHandler = async (id) => {
		await requestServer.deleteCategory(id, authUser.id);

		// dispatch(loadCategories(requestServer, authUser.id));

		navigate(from?.pathname, { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(categoryId)}>Удалить</button>
	)
};