import css from './account-create.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { accountCreateFormRules } from './account-create.rules';
import { path } from 'shared/lib/router';
import { Button, Form, Input, Radio, Textarea } from 'shared/ui/form-components';
import { ACCOUNT_TYPES } from 'entities/account/lib/account-types';
import { Block, Fieldset } from 'shared/ui/components';
import { useToast } from 'app/providers/toast';
import { RequestData } from 'shared/api';
import { createAccount } from 'shared/api/account';

export const AccountCreateForm = () => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData: RequestData) => {
		setIsLoading(true);

		const { account, error } = await createAccount(submittedData);

		setIsLoading(false);

		if (error) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: 'error' });
			return;
		}

		navigate(path.account.id(account?.id), { replace: true });

		showToast({ message: 'Счет создан', type: 'success' });
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(accountCreateFormRules)}>
				<Input type="text" name="name" label="Название счета" />
				<Fieldset label="Тип счета">
					<div className={css['radiobuttons']}>
						{ACCOUNT_TYPES.map((type, i) => (
							<Radio key={type.id} name="type" value={type.id} label={type.name} defaultChecked={!i} />
						))}
					</div>
				</Fieldset>
				<Input type="number" name="amount" label="Сумма" />
				<Textarea name="comment" label="Комментарий" />
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Создать счет
				</Button>
			</Form>
		</Block>
	);
};
