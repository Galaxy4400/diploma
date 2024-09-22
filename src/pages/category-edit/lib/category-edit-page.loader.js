import { server } from "../../../shared/bff";

export const categoryEditPageLoader = async ({ params }) => {
	const id = params.id;

	const response = await server.getCategory(id);

	return response.data;
};