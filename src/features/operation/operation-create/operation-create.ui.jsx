import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { operationCreateFormRules } from "./operation-create.rules";
import { path } from "../../../shared/lib/router";
import { useFrom } from "../../../shared/lib/location";
import { Form, Hidden, Input, Number, Select } from "../../../shared/ui/react-hook-form";
import { server } from "../../../shared/bff";
import { Loader } from "../../../shared/ui";
import { useState } from "react";


export const OperationCreateForm = ({ userId, accountOptions = [], categoryOptions = [] }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const { data: createdOperation } = await server.createOperation(submittedData);

		setIsLoading(false);

		navigate(path.operation.id(createdOperation.id));
	};

	return (
		<>
			{userId && 
				<Loader isLoading={isLoading} style={{ width: "300px" }}>
					<Form onSubmit={submitHandler} resolver={yupResolver(operationCreateFormRules)} style={{ display: "grid", gap: "10px" }}>
						<Hidden name="userId" defaultValue={userId} />
						<Input name="name" placeholder='Название операции...' />
						<Number name="amount" placeholder='Сумма операции...' />
						<Select name="accountId" options={accountOptions} defaultValue={from?.accountId || ''} />
						<Select name="categoryId" options={categoryOptions} defaultValue="" />
						<button type='submit'>Создать операцию</button>
					</Form>
				</Loader>
			}
		</>
	);
};