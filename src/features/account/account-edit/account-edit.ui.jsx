import css from './account-edit.module.scss';
import { accountEditFormRules } from "./account-edit.rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { ACCOUNT_TYPES } from "../../../entities/account";
import { useAsyncValue, useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Button, Fieldset, Form, Input, Radio } from "../../../shared/ui/form-components";
import { useState } from "react";
import { server } from "../../../shared/bff";
import { Block } from "../../../shared/ui/components";


export const AccountEditForm = () => {
	const account = useAsyncValue();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	
	const submitHandler = async (editData) => {
		setIsLoading(true);

		await server.updateAccount(account.id, editData);

		setIsLoading(false);

		navigate(path.account.id(account.id));
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(accountEditFormRules)}>
				<Input type='text' name="name" defaultValue={account.name} label='Название счета' />
				<Input type='number' name="amount" defaultValue={account.amount} label='Сумма' />
				<Fieldset label="Тип счета">
					<div className={css['radiobuttons']}>
						{ACCOUNT_TYPES.map((type) => (
							<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={type.id === account?.typeId} />
						))}
					</div>
				</Fieldset>
				<Button type='submit' disabled={isLoading}>Внести изменения</Button>
			</Form>
		</Block>
	);
};



