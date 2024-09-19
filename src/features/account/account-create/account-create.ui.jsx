import { useNavigate } from "react-router-dom";
import { useServer } from "../../../app/providers/server";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";
import { accountCreateFormRules } from "./account-create.rules";
import { path } from "../../../shared/lib/router";


export const AccountCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(accountCreateFormRules),
		defaultValues: {
			userId: userId,
			typeId: '',
		}
	});

	const submitHandler = async (accountData) => {
		const { data: createdAccount } = await requestServer.createAccount(accountData);

		navigate(path.account.id(createdAccount.id));
	};

	return (
		<div style={{ width: "300px" }}>
			<form onSubmit={handleSubmit(submitHandler)} style={{ display: "grid", gap: "10px" }}>
				<input {...register('name')} type="text" placeholder='Название счета...' />
				<select {...register('typeId')}>
					<option value="" disabled>Тип счета...</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<button type='submit'>Создать счет</button>
			</form>
			<ErrorList formErrors={errors} />
		</div>
	);
};