import { accountEditFormRules } from "./account-edit.rules";
import { useServer } from "../../../app/providers/server";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { ACCOUNT_TYPES, updateAccount } from "../../../entities/account";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Form, Input, Radio } from "../../../shared/ui/react-hook-form";
import { useState } from "react";
import { WithLoader } from "../../../shared/ui/with-loader";


export const AccountEditForm = ({ accountData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	const [isLoading, setIsLoading] = useState(false);
	
	const submitHandler = async (editData) => {
		setIsLoading(true);

		dispatch(updateAccount(requestServer, accountData.id, editData))
			.then(() => {
				setIsLoading(false);
				navigate(path.account.id(accountData.id));
			});
	};

	return (
		<>
		 {accountData &&
			<WithLoader isLoading={isLoading} style={{ width: "300px" }}>
				<Form onSubmit={submitHandler} resolver={yupResolver(accountEditFormRules)} style={{ display: "grid", gap: "10px" }}>
					<Input name="name" defaultValue={accountData.name} placeholder='Название счета...' />
					<div style={{display: 'grid', gap: '10px'}}>
						{ACCOUNT_TYPES.map((type) => (
							<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={type.id === accountData?.typeId} />
						))}
					</div>
					<button type='submit'>Внести изменения</button>
				</Form>
			</WithLoader>
		 }
		</>
	);
};



