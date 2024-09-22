import { server } from "../../../shared/bff";

export const accountPageLoader = async ({ params }) => {
	const id = params.id;

	const [
		accountResponse,
		operationsResponse
	] = await Promise.all([
		server.getAccount(id),
		server.getOperations(id),
	]);

	const account = accountResponse.data;
	const operations = operationsResponse.data;

	return { id, account, operations };
}