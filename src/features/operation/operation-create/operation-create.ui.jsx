import { useAsyncValue, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { operationCreateFormRules } from "./operation-create.rules";
import { path } from "../../../shared/lib/router";
import { useFrom } from "../../../shared/lib/location";
import { Form, Hidden, Input, Number, Select } from "../../../shared/ui/form-components";
import { server } from "../../../shared/bff";
import { Loader } from "../../../shared/ui/components";
import { useState } from "react";


export const OperationCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const selectorsData = useAsyncValue();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const { data: createdOperation } = await server.createOperation(submittedData);

		setIsLoading(false);

		navigate(path.operation.id(createdOperation.id));
	};

	const accountOptions = selectorsData.accounts.map(account => ({ value: account.id, label: account.name }));
	const categoryOptions = selectorsData.categories.map(category => ({ value: category.id, label: category.name }));

	return (
		<Loader isLoading={isLoading}>
			<Form onSubmit={submitHandler} resolver={yupResolver(operationCreateFormRules)}>
				<Hidden name="userId" defaultValue={userId} />
				<Input name="name" placeholder='Название операции...' />
				<Number name="amount" placeholder='Сумма операции...' />
				<Select name="accountId" options={accountOptions} defaultValue={from?.accountId || ''} />
				<Select name="categoryId" options={categoryOptions} defaultValue="" />
				<button type='submit'>Создать операцию</button>
			</Form>
		</Loader>
	);
};