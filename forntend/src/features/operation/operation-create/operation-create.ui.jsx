import css from './operation-create.module.scss';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { operationCreateFormRules } from './operation-create.rules';
import { path } from '../../../shared/lib/router';
import { useFrom } from '../../../shared/lib/location';
import { Button, Form, Hidden, Input, Select } from '../../../shared/ui/form-components';
import { Block } from '../../../shared/ui/components';
import { useState } from 'react';
import { useLoadOptions } from '../../../shared/hooks';

export const OperationCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const { accountOptions, categoryOptions } = useLoadOptions();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		// const { data: createdOperation } = await server.createOperation(submittedData);

		setIsLoading(false);

		// navigate(path.operation.id(createdOperation.id), { replace: true });
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(operationCreateFormRules)}>
				<Hidden name="userId" defaultValue={userId} />
				<Input type="number" name="amount" label="Сумма операции" />
				<Select
					name="accountId"
					options={accountOptions}
					defaultValue={from?.accountId || ''}
					label="Счет операции"
					placeholder=""
				/>
				<Select
					name="categoryId"
					options={categoryOptions}
					defaultValue=""
					label="Категория операции"
					placeholder=""
				/>
				<Input type="text" name="comment" label="Комментарий" />
				<Button type="submit" disabled={isLoading}>
					Создать операцию
				</Button>
			</Form>
		</Block>
	);
};
