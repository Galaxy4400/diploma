import { server } from "../../../shared/bff";

export const operationPageLoader = async ({ params }) => {
	const id = params.id;

	const response = await server.getOperation(id);

	return response.data;
};