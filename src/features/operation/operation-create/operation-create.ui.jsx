import { useNavigate } from "react-router-dom";
import { useServer } from "../../../app/providers/server";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";
import { operationCreateFormRules } from "./operation-create.rules";
import { path } from "../../../shared/lib/router";
import { useAuth } from "../../../app/providers/auth";

export const OperationCreateForm = ({ accounts }) => {
	const navigate = useNavigate();
	const { requestServer } = useServer();
	const { authUser } = useAuth();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(operationCreateFormRules),
		defaultValues: {
			userId: authUser.id,
			accountId: '',
			categoryId: '',
		}
	});

	const onSubmit = async (operationData) => {
		const { data: createdOperation } = await requestServer.createOperation(operationData);

		navigate(path.operation.id(createdOperation.id));
	};

	return (
		<div style={{ width: "300px" }}>
			<form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: "10px" }}>
				<input {...register('name')} type="text" placeholder='Название операции...' />
				<input {...register('amount')} type="number" placeholder='Сумма операции...' />
				<select {...register('accountId')}>
					<option value="" disabled>Счет операции...</option>
					{accounts.map(account => (
						<option key={account.id} value={account.id}>{account.name}</option>
					))}
				</select>
				<select {...register('categoryId')}>
					<option value="" disabled>Категория операции...</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<button type='submit'>Создать операцию</button>
			</form>
			<ErrorList formErrors={errors} />
		</div>
	);
};