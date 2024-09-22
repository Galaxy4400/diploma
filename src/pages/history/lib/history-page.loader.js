import { server } from "../../../shared/bff";

export const historyPageLoader = async () => {
	const response = await server.getOperations();

	return response.data;
};