import css from './operation-create.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { operationCreateFormRules } from './operation-create.rules';
import { path } from 'shared/lib/router';
import { useFrom } from 'shared/lib/location';
import { Button, Form, Input, Select } from 'shared/ui/form-components';
import { Block } from 'shared/ui/components';
import { useLoadOptions } from 'shared/hooks';
import { request } from 'shared/api';
import { useToast } from 'app/providers/toast';
import { RequestData } from 'shared/types';
import { OperationResponse } from 'entities/operation';

export const OperationCreateForm = () => {
	const navigate = useNavigate();
	const from = useFrom();
	const { showToast } = useToast();
	const { accountOptions, categoryOptions } = useLoadOptions();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData: RequestData) => {
		setIsLoading(true);

		const { operation } = await request<OperationResponse>({
			url: '/operations',
			method: 'POST',
			data: submittedData,
		});

		setIsLoading(false);

		if (!operation) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: 'error' });
			return;
		}

		navigate(path.operation.id(operation.id), { replace: true });

		showToast({ message: 'Операция создана', type: 'success' });
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(operationCreateFormRules)}>
				<Input type="number" name="amount" label="Сумма операции" />
				<Select
					name="account"
					options={accountOptions}
					defaultValue={accountOptions.find((option) => option.value === from?.accountId)}
					label="Счет операции"
					placeholder=""
				/>
				<Select
					name="category"
					options={categoryOptions}
					defaultValue={null}
					label="Категория операции"
					placeholder=""
				/>
				<Input type="text" name="comment" label="Комментарий" />
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Создать операцию
				</Button>
			</Form>
		</Block>
	);
};
