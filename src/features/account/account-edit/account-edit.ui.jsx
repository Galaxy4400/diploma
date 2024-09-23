import { accountEditFormRules } from "./account-edit.rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { ACCOUNT_TYPES } from "../../../entities/account";
import { useAsyncValue, useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Form, Input, Radio } from "../../../shared/ui/react-hook-form";
import { useState } from "react";
import { Loader } from "../../../shared/ui";
import { server } from "../../../shared/bff";


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
		<Loader isLoading={isLoading} >
			<Form onSubmit={submitHandler} resolver={yupResolver(accountEditFormRules)} >
				<Input name="name" defaultValue={account.name} placeholder='Название счета...' />
				<div>
					{ACCOUNT_TYPES.map((type) => (
						<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={type.id === account?.typeId} />
					))}
				</div>
				<button type='submit'>Внести изменения</button>
			</Form>
		</Loader>
	);
};



