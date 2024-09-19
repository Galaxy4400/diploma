import { OperationView } from "../../entities/operation";

export const Operation = ({ operationData }) => {
	return (
		<OperationView 
			operationData={operationData} 
			// deleteSlot={<AccountDelete accountId={operationData.id}/>}
		/>
	)
};