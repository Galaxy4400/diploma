import { useNavigate } from "react-router-dom";
import { useServer } from "../../../app/providers/server";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryCreateFormRules } from "./account-create.rules";
import { path } from "../../../shared/lib/router";
import { Form, Hidden, Input, Select } from "../../../shared/ui/react-hook-form";


const options = [
	{ value: '', label: 'Тип счета...'},
	{ value: '1', label: 'Тип 1'},
	{ value: '2', label: 'Тип 2'},
	{ value: '3', label: 'Тип 3'},
];


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
					<Select name="typeId" options={options} defaultValue="" />
					<button type='submit'>Создать счет</button>
				</Form>
			</div>
		 }
		</>
	);
};