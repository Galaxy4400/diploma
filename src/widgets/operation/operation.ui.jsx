import { OperationView } from "../../entities/operation";
import { OperationDelete } from "../../features/operation";

export const Operation = ({ operationData }) => {
	return (
		<OperationView 
			operationData={operationData} 
			deleteSlot={<OperationDelete operationId={operationData.id}/>}
		/>
	)
};