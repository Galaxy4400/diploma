import { useEffect, useState } from 'react';
import { buildSelectOptions } from 'shared/utils';
import { OptionProps } from 'shared/types';
import { getAccounts } from 'shared/api/account';
import { getCategories } from 'shared/api/category';

export const useLoadOptions = () => {
	const [accountOptions, setAccountOptions] = useState<OptionProps[]>([]);
	const [categoryOptions, setCategoryOptions] = useState<OptionProps[]>([]);

	useEffect(() => {
		const loadOptions = async () => {
			const [{ accounts }, { categories }] = await Promise.all([getAccounts(), getCategories()]);

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
