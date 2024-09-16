import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";
import { useForm } from "react-hook-form";
import { accountCreateFormRules } from "../lib";
import { useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { useNavigate } from "react-router-dom";
import { selectAuthId } from "../../../entities";

export const AccountForm = () => {
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const userId = useSelector(selectAuthId);

	const { register, handleSubmit, formState: { errors } } = useForm(
		{
			resolver: yupResolver(accountCreateFormRules),
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