import { useAuth } from "../../../app/providers/auth-provider";
import { useServer } from "../../../app/providers/server-provider";

export const useOnRegister = () => {
	const { register } = useAuth();

	const { serverError: registerError } = useServer();

	const onSubmit = async ({ login, password }) => {
		register(login, password);
	};

	return { onSubmit, registerError };
};