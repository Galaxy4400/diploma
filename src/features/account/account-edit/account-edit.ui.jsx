import { accountEditFormRules } from "./account-edit.rules";
import { useServer } from "../../../app/providers/server";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";
import { updateAccount } from "../../../entities/account";
import { useEffect } from "react";


export const AccountEditForm = ({ accountData }) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		resolver: yupResolver(accountEditFormRules),
	});

	useEffect(() => {
		reset({
			name: accountData?.name,
			typeId: accountData?.typeId,
		});
	}, [accountData, reset]);

	const submitHandler = async (editData) => {
		dispatch(updateAccount(requestServer, accountData.id, editData));
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
				<button type='submit'>Внести изменения</button>
			</form>
			<ErrorList formErrors={errors} />
		</div>
	);
};



