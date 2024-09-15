import { useServer } from "../../../app/providers/server-provider";
import { useAuth } from "../../../app/providers/auth-provider";

export const useOnLogin = () => {
	const { authorize } = useAuth();

	const { serverError: loginError } = useServer();

	const onSubmit = async ({ login, password }) => {
		authorize(login, password);
	};

	return { onSubmit, loginError };
};