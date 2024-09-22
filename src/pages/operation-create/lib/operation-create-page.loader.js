import { server } from "../../../shared/bff";

export const operationCreatePageLoader = async () => {
	const [
		accountsResponse,
		categoriesResponse
	] = await Promise.all([
		await server.getAccounts(),
		await server.getCategories(),
	]);

	const accounts = accountsResponse.data;
	const categories = categoriesResponse.data;

	return { accounts, categories };
};