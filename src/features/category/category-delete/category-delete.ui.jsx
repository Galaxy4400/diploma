import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../app/providers/auth";
import { useFrom } from "../../../shared/lib/location";
import { server } from "../../../shared/bff";
import { useState } from "react";


export const CategoryDelete = ({ categoryId }) => {
	const navigate = useNavigate();
	const { authUser } = useAuth();
	const from = useFrom();
	const [isDeleted, setIsDeleted] = useState(false);

	const deleteHandler = async (id) => {
		setIsDeleted(true);

		const response = await server.deleteCategory(id, authUser.id);

		if (!response.ok) setIsDeleted(false);

		navigate(from?.pathname || false, { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(categoryId)} disabled={isDeleted}>Удалить</button>
	)
};