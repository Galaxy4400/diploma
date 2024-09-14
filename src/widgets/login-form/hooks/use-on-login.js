import { useDispatch } from "react-redux";
import { useServer } from "../../../app/providers/server-provider";
import { userAction } from "../../../app/store";

export const useOnLogin = () => {
	const dispatch = useDispatch();

	const { requestServer, serverError: loginError } = useServer();

	const onSubmit = async ({ login, password }) => {
		const authUser = await requestServer.authorize(login, password);

		if (!authUser) return;

		dispatch(userAction.setUser(authUser));
	};

	return { onSubmit, loginError };
};