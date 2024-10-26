import { useEffect, useState } from 'react';
import { request } from '../api/request';
import { AccountsResponse } from 'entities/account';
import { CategoriesResponse } from 'entities/category';
import { buildSelectOptions } from 'shared/utils';
import { OptionProps } from 'shared/types';

export const useLoadOptions = () => {
	const [accountOptions, setAccountOptions] = useState<OptionProps[]>([]);
	const [categoryOptions, setCategoryOptions] = useState<OptionProps[]>([]);

	useEffect(() => {
		const loadOptions = async () => {
			const [{ accounts }, { categories }] = await Promise.all([
				request<AccountsResponse>({ url: '/accounts' }),
				request<CategoriesResponse>({ url: '/categories' }),
			]);

			if (!accounts || !categories) return;

			const accountsOptions = buildSelectOptions(accounts, 'name', 'id');
			const categoriesOptions = buildSelectOptions(categories, 'name', 'id');

			setAccountOptions(accountsOptions);
			setCategoryOptions(categoriesOptions);
		};

		loadOptions();
	}, []);

	return { accountOptions, categoryOptions };
};
