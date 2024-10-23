import { useEffect, useState } from 'react';
import { request } from '../api/request';

export const useLoadOptions = () => {
	const [accountOptions, setAccountOptions] = useState([]);
	const [categoryOptions, setCategoryOptions] = useState([]);

	useEffect(() => {
		const loadOptions = async () => {
			const [accountsResponse, categoriesResponse] = await Promise.all([
				request({ url: '/accounts' }),
				request({ url: '/categories' }),
			]);

			setAccountOptions(
				accountsResponse.accounts.map((account) => ({
					value: account.id,
					label: account.name,
				})),
			);

			setCategoryOptions(
				categoriesResponse.categories.map((category) => ({
					value: category.id,
					label: category.name,
				})),
			);
		};

		loadOptions();
	}, []);

	return { accountOptions, categoryOptions };
};
