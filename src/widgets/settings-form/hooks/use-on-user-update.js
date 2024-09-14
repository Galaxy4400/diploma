import { useDispatch } from "react-redux";
import { useServer } from "../../../app/providers/server-provider";
import { userAction } from "../../../app/store";
import { removeEmptyValues } from "../../../shared/utils";

export const useOnUserUpdate = () => {
	const dispatch = useDispatch();

	const { requestServer, serverError: userUpdateError } = useServer();

	const onSubmit = async (userData) => {
		const fillingUserData = removeEmptyValues(userData);

		delete fillingUserData.passcheck;

		const { id, ...updatingUserData } = fillingUserData;

		const updatedUser = await requestServer.updateUser(id, updatingUserData);

		// dispatch(userAction.updateUser(id, updatingUserData));
	};

	return { onSubmit, userUpdateError };
};