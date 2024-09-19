import { accountEditFormRules } from "./account-edit.rules";
import { useServer } from "../../../app/providers/server";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";
import { updateAccount } from "../../../entities/account";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";


export const AccountEditForm = ({ accountData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(accountEditFormRules),
	});

	const submitHandler = async (editData) => {
		dispatch(updateAccount(requestServer, accountData.id, editData));

		navigate(path.account.id(accountData.id));
	};

	return (
		<>
		 {accountData &&
			<div style={{ width: "300px" }}>
				<form onSubmit={handleSubmit(submitHandler)} style={{ display: "grid", gap: "10px" }}>
					<input {...register('name')} type="text" defaultValue={accountData.name} placeholder='Название счета...' />
					<select {...register('typeId')} defaultValue={accountData.typeId}>
						<option value="" disabled>Тип счета...</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<button type='submit'>Внести изменения</button>
				</form>
				<ErrorList formErrors={errors} />
			</div>
		 }
		</>
	);
};



