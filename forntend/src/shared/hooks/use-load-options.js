import { useEffect, useState } from 'react';
import { server } from '../bff';

export const useLoadOptions = () => {
	const [accountOptions, setAccountOptions] = useState([]);
	const [categoryOptions, setCategoryOptions] = useState([]);

	useEffect(() => {
		const loadOptions = async () => {
			const { data: accounts } = await server.getAccounts();
			const { data: categories } = await server.getCategories();

			setAccountOptions(
				accounts.map((account) => ({
					value: account.id,
					label: account.name,
				})),
			);

			setCategoryOptions(
				categories.map((category) => ({
					value: category.id,
					label: category.name,
				})),
			);
		};

		loadOptions();
	}, []);

	return { accountOptions, categoryOptions };
};
