import { useServer } from "../../../app/providers/server-provider";
import { useAuth } from "../../../app/providers/auth-provider";

export const useOnLogin = () => {
	const { authorize } = useAuth();

	const { requestServer, serverError: loginError } = useServer();

	const onSubmit = async ({ login, password }) => {
		const authUser = await requestServer.authorize(login, password);
		
		if (!authUser) return;

		authorize(authUser);
	};

	return { onSubmit, loginError };
};