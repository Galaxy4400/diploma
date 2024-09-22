import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryCreateFormRules } from "./account-create.rules";
import { path } from "../../../shared/lib/router";
import { Form, Hidden, Input, Radio } from "../../../shared/ui/react-hook-form";
import { ACCOUNT_TYPES } from "../../../entities/account/lib/account-types";
import { useState } from "react";
import { WithLoader } from "../../../shared/ui/with-loader";
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
		<>
		 {userId && 
			<WithLoader isLoading={isLoading} style={{ width: "300px" }}>
				<Form onSubmit={submitHandler} resolver={yupResolver(categoryCreateFormRules)} style={{ display: "grid", gap: "10px" }}>
					<Hidden name="userId" defaultValue={userId} />
					<Hidden name="amount" defaultValue="0" />
					<Input name="name" placeholder='Название счета...' />
					<div style={{display: 'grid', gap: '10px'}}>
						{ACCOUNT_TYPES.map((type, i) => (
							<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={!i} />
						))}
					</div>
					<button type='submit'>Создать счет</button>
				</Form>
			</WithLoader>
		 }
		</>
	);
};