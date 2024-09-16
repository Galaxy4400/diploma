import { useNavigate } from "react-router-dom";
import { createAccountFormRules } from "./create-account.rules";
import { useServer } from "../../../app/providers/server";
import { useSelector } from "react-redux";
import { selectAuthId } from "../../../entities/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";

export const CreateAccountForm = () => {
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const userId = useSelector(selectAuthId);

	const { register, handleSubmit, formState: { errors } } = useForm(
		{
			resolver: yupResolver(createAccountFormRules),
			defaultValues: {
				userId,
				typeId: '',
			}
		}
	);

	const onSubmit = async (accountData) => {
		const { data: createdAccount } = await requestServer.createAccount(accountData);

		navigate(`/account/${createdAccount.id}`);
	};

	return (
		<div style={{ width: "300px" }}>
			<form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: "10px" }}>
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