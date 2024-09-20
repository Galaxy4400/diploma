import { useNavigate } from "react-router-dom";
import { useServer } from "../../../app/providers/server";
import { yupResolver } from "@hookform/resolvers/yup";
import { operationCreateFormRules } from "./operation-create.rules";
import { path } from "../../../shared/lib/router";
import { useFrom } from "../../../shared/lib/location";
import { Form, Hidden, Input, Number, Select } from "../../../shared/ui/react-hook-form";


export const OperationCreateForm = ({ userId, accounts = [] }) => {
	const navigate = useNavigate();
	const { requestServer } = useServer();
	const from = useFrom();

	const submitHandler = async (submittedData) => {
		const { data: createdOperation } = await requestServer.createOperation(submittedData);

		navigate(path.operation.id(createdOperation.id));
	};

	const accountOptions = [
		{ value: "", label: "Счет операции..." },
		...accounts.map(account => ({ value: account.id, label: account.name }))
	];

	return (
		<>
			{userId && 
				<div style={{ width: "300px" }}>
					<Form onSubmit={submitHandler} resolver={yupResolver(operationCreateFormRules)} style={{ display: "grid", gap: "10px" }}>
						<Hidden name="userId" defaultValue={userId} />
						<Input name="name" placeholder='Название операции...' />
						<Number name="amount" placeholder='Сумма операции...' />
						<Select name="accountId" options={accountOptions} defaultValue={from?.accountId || ''} />
						<button type='submit'>Создать операцию</button>
					</Form>
				</div>
			}
		</>
	);
};