import { accountEditFormRules } from "./account-edit.rules";
import { useServer } from "../../../app/providers/server";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { ACCOUNT_TYPES, updateAccount } from "../../../entities/account";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Form, Input, Radio } from "../../../shared/ui/react-hook-form";


export const AccountEditForm = ({ accountData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	
	const submitHandler = async (editData) => {
		dispatch(updateAccount(requestServer, accountData.id, editData));

		navigate(path.account.id(accountData.id));
	};

	return (
		<>
		 {accountData &&
			<div style={{ width: "300px" }}>
				<Form onSubmit={submitHandler} resolver={yupResolver(accountEditFormRules)} style={{ display: "grid", gap: "10px" }}>
					<Input name="name" defaultValue={accountData.name} placeholder='Название счета...' />
					<div style={{display: 'grid', gap: '10px'}}>
						{ACCOUNT_TYPES.map((type) => (
							<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={type.id === accountData?.typeId} />
						))}
					</div>
					<button type='submit'>Внести изменения</button>
				</Form>
			</div>
		 }
		</>
	);
};



