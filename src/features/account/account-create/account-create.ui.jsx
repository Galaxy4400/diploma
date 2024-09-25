import css from './account-create.module.scss';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryCreateFormRules } from "./account-create.rules";
import { path } from "../../../shared/lib/router";
import { Button, Form, Hidden, Input, Number, Radio } from "../../../shared/ui/form-components";
import { ACCOUNT_TYPES } from "../../../entities/account/lib/account-types";
import { useState } from "react";
import { server } from "../../../shared/bff";


export const AccountCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const { data: createdAccount } = await server.createAccount(submittedData);

		setIsLoading(false);

		navigate(path.account.id(createdAccount.id));
	};

	return (
		<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(categoryCreateFormRules)}>
			<Hidden name="userId" defaultValue={userId} />
			<Input name="name" placeholder='Название счета...' />
			<Number name="amount" defaultValue="0" placeholder='Сумма...' />
			<div>
				{ACCOUNT_TYPES.map((type, i) => (
					<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={!i} />
				))}
			</div>
			<Button type='submit' disabled={isLoading}>Создать счет</Button>
		</Form>
	);
};