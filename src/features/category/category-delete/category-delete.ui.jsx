import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../app/providers/auth";
import { useFrom } from "../../../shared/lib/location";
import { loadCategories } from "../../../entities/categories";
import { server } from "../../../shared/bff";


export const CategoryDelete = ({ categoryId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { authUser } = useAuth();
	const from = useFrom();

	const deleteHandler = async (id) => {
		await server.deleteCategory(id, authUser.id);

		dispatch(loadCategories(authUser.id));

		navigate(from?.pathname, { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(categoryId)}>Удалить</button>
	)
};