import { server } from "../../../shared/bff";

export const accountEditPageLoader = async ({ params }) => {
	const id = params.id;

	const response = await server.getAccount(id);

	return response.data;;
};