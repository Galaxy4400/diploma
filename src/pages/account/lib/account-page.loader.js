import { defer } from "react-router-dom";
import { server } from "../../../shared/bff";


const getAccount = async (id) => {
	const response = await server.getAccount(id);

	return response.data;
}


const getOperations = async (id) => {
	const response = await server.getOperations(id);

	return response.data;
}


export const accountPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		id,
		account: getAccount(id),
		operations: getOperations(id),
	});
}