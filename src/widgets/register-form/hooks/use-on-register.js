import { useDispatch } from "react-redux";
import { useServer } from "../../../app/providers/server-provider";
import { userAction } from "../../../app/store";

export const useOnRegister = () => {
	const dispatch = useDispatch();

	const { requestServer, serverError: registerError } = useServer();

	const onSubmit = async ({ login, password }) => {
		const createdUser = await requestServer.register(login, password);
		
		if (!createdUser) return;

		const authUser = await requestServer.authorize(login, password);

		if (!authUser) return;

		dispatch(userAction.setUser(authUser));
	};

	return { onSubmit, registerError };
};