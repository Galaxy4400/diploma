import css from './account-create.module.scss';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { categoryCreateFormRules } from './account-create.rules';
import { path } from '../../../shared/lib/router';
import { Button, Form, Hidden, Input, Radio, Textarea } from '../../../shared/ui/form-components';
import { ACCOUNT_TYPES } from '../../../entities/account/lib/account-types';
import { useState } from 'react';
import { server } from '../../../shared/bff';
import { Block, Fieldset } from '../../../shared/ui/components';

export const AccountCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const { data: createdAccount } = await server.createAccount(submittedData);

		setIsLoading(false);

		navigate(path.account.id(createdAccount.id), { replace: true });
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(categoryCreateFormRules)}>
				<Hidden name="userId" defaultValue={userId} />
				<Input type="text" name="name" label="Название счета" />
				<Fieldset label="Тип счета">
					<div className={css['radiobuttons']}>
						{ACCOUNT_TYPES.map((type, i) => (
							<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={!i} />
						))}
					</div>
				</Fieldset>
				<Input type="number" name="amount" label="Сумма" />
				<Textarea name="comment" label="Комментарий" />
				<Button type="submit" disabled={isLoading}>
					Создать счет
				</Button>
			</Form>
		</Block>
	);
};
