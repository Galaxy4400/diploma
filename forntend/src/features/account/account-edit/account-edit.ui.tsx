import css from './account-edit.module.scss';
import { accountEditFormRules } from './account-edit.rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input, Radio, Textarea } from 'shared/ui/form-components';
import { Block, Fieldset } from 'shared/ui/components';
import { RequestData } from 'shared/api';
import { useToast } from 'app/providers/toast';
import { ACCOUNT_TYPES } from 'shared/lib/account';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import {
	fetchEditAccount,
	selectAccountData,
	selectAccountDataError,
	selectAccountDataLoading,
} from 'entities/account/account-data';

export const AccountEditForm = () => {
	const account = useAppSelector(selectAccountData);
	const isLoading = useAppSelector(selectAccountDataLoading);
	const error = useAppSelector(selectAccountDataError);
	const dispatch = useAppDispatch();
	const { showToast } = useToast();

	const submitHandler = async (editData: RequestData) => {
		await dispatch(fetchEditAccount({ id: account.id, submittedData: editData }));

		showToast({ message: 'Изменения внесены', type: 'success' });
	};

	if (error) {
		showToast({ message: error, type: 'error' });
	}

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
