import css from './account-edit.module.scss';
import { accountEditFormRules } from './account-edit.rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { ACCOUNT_TYPES, AccountResponse, AccountType } from 'entities/account';
import { useAsyncValue, useNavigate } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { Button, Form, Input, Radio, Textarea } from 'shared/ui/form-components';
import { useState } from 'react';
import { Block, Fieldset } from 'shared/ui/components';
import { request } from 'shared/api/request';
import { useToast } from 'app/providers/toast';
import { RequestData } from 'shared/types';

export const AccountEditForm = () => {
	const account = useAsyncValue() as AccountType;
	const navigate = useNavigate();
	const { showToast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (editData: RequestData) => {
		setIsLoading(true);

		const { error } = await request<AccountResponse>({
			url: `/accounts/${account.id}`,
			method: 'PATCH',
			data: editData,
		});

		setIsLoading(false);

		if (error) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: 'error' });
			return;
		}

		navigate(path.account.id(account.id));

		showToast({ message: 'Изменения внесены', type: 'success' });
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(accountEditFormRules)}>
				<Input type="text" name="name" defaultValue={account.name} label="Название счета" />
				<Fieldset label="Тип счета">
					<div className={css['radiobuttons']}>
						{ACCOUNT_TYPES.map((type) => (
							<Radio
								key={type.id}
								name="type"
								value={type.id}
								label={type.name}
								defaultChecked={type.id === account?.type}
							/>
						))}
					</div>
				</Fieldset>
				<Input type="number" name="amount" defaultValue={account.amount} label="Сумма" />
				<Textarea name="comment" label="Комментарий" defaultValue={account.comment} />
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Внести изменения
				</Button>
			</Form>
		</Block>
	);
};
