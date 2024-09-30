import css from './operation-create.module.scss';
import { useAsyncValue, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { operationCreateFormRules } from './operation-create.rules';
import { path } from '../../../shared/lib/router';
import { useFrom } from '../../../shared/lib/location';
import { Button, Fieldset, Form, Hidden, Input, Select } from '../../../shared/ui/form-components';
import { server } from '../../../shared/bff';
import { Block } from '../../../shared/ui/components';
import { useState } from 'react';

export const OperationCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const selectorsData = useAsyncValue();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const { data: createdOperation } = await server.createOperation(submittedData);

		setIsLoading(false);

		navigate(path.operation.id(createdOperation.id), { replace: true });
	};

	const accountOptions = selectorsData.accounts.map((account) => ({
		value: account.id,
		label: account.name,
	}));

	const categoryOptions = selectorsData.categories.map((category) => ({
		value: category.id,
		label: category.name,
	}));

	return (
		<Block className={css['block']}>
			<Form
				className={css['form']}
				onSubmit={submitHandler}
				resolver={yupResolver(operationCreateFormRules)}
			>
				<Hidden name="userId" defaultValue={userId} />
				<Input type="number" name="amount" label="Сумма операции" />
				<Fieldset label="Счет операции">
					<Select
						name="accountId"
						options={accountOptions}
						defaultValue={from?.accountId || ''}
						placeholder=""
					/>
				</Fieldset>
				<Fieldset label="Категория операции">
					<Select name="categoryId" options={categoryOptions} defaultValue="" placeholder="" />
				</Fieldset>
				<Input type="text" name="comment" label="Комментарий" />
				<Button type="submit" disabled={isLoading}>
					Создать операцию
				</Button>
			</Form>
		</Block>
	);
};
