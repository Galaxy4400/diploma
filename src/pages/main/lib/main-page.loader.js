import { server } from "../../../shared/bff";

export const mainPageLoader = async () => {
	const [
		accountsResponse,
		categoriesResponse
	] = await Promise.all([
		server.getAccounts(),
		server.getCategories(),
	]);

	const accounts = accountsResponse.data;
	const categories = categoriesResponse.data;

	return { accounts, categories };
};