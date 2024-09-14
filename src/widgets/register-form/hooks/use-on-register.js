import { useAuth } from "../../../app/providers/auth-provider";
import { useServer } from "../../../app/providers/server-provider";

export const useOnRegister = () => {
	const { authorize } = useAuth();

	const { requestServer, serverError: registerError } = useServer();

	const onSubmit = async ({ login, password }) => {
		const createdUser = await requestServer.register(login, password);
		
		if (!createdUser) return;
		
		const authUser = await requestServer.authorize(login, password);
		
		if (!authUser) return;
		
		authorize(authUser);
	};

	return { onSubmit, registerError };
};