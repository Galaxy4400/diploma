import { accountEditFormRules } from "./account-edit.rules";
import { useServer } from "../../../app/providers/server";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateAccount } from "../../../entities/account";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Form, Input, Select } from "../../../shared/ui/react-hook-form";



const options = [
	{ value: '', label: 'Тип счета...'},
	{ value: '1', label: 'Тип 1'},
	{ value: '2', label: 'Тип 2'},
	{ value: '3', label: 'Тип 3'},
];


export const AccountEditForm = ({ accountData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	
	const submitHandler = async (editData) => {
		dispatch(updateAccount(requestServer, accountData.id, editData));

		navigate(path.account.id(accountData.id));
	};

	return (
		<>
		 {accountData &&
			<div style={{ width: "300px" }}>
				<Form onSubmit={submitHandler} resolver={yupResolver(accountEditFormRules)} style={{ display: "grid", gap: "10px" }}>
					<Input name="name" defaultValue={accountData.name} placeholder='Название счета...' />
					<Select name="typeId" options={options} defaultValue={accountData.typeId} />
					<button type='submit'>Внести изменения</button>
				</Form>
			</div>
		 }
		</>
	);
};



