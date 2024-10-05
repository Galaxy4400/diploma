import css from './operations-filter.module.scss';
import { server } from '../../../shared/bff';
import { Block } from '../../../shared/ui/components';
import { Fieldset, Form, Select } from '../../../shared/ui/form-components';
import { useEffect, useState } from 'react';

export const OperationsFilter = () => {
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

	return (
		<Block className={css['block']}>
			<h4>Фильтр</h4>
			<Form className={css['form']}>
				<Fieldset label="По счету">
					<Select name="accountId" options={accountOptions} placeholder="" />
				</Fieldset>
				<Fieldset label="По категории">
					<Select name="accountId" options={categoryOptions} placeholder="" />
				</Fieldset>
			</Form>
		</Block>
	);
};
