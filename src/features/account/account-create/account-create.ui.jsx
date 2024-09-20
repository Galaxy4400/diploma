import { useNavigate } from "react-router-dom";
import { useServer } from "../../../app/providers/server";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryCreateFormRules } from "./account-create.rules";
import { path } from "../../../shared/lib/router";
import { Form, Hidden, Input, Radio } from "../../../shared/ui/react-hook-form";
import { ACCOUNT_TYPES } from "../../../entities/account/lib/account-types";


export const AccountCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const submitHandler = async (submittedData) => {
		const { data: createdAccount } = await requestServer.createAccount(submittedData);

		navigate(path.account.id(createdAccount.id));
	};

	return (
		<>
		 {userId && 
			<div style={{ width: "300px" }}>
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
			</div>
		 }
		</>
	);
};