import { OperationView } from "../../../entities/operation";
import { OperationDelete } from "../../../features/operation";
import { useOperatinNeededData } from "../lib";

export const Operation = ({ operationData }) => {
	const { account, category } = useOperatinNeededData(operationData);

	return (
		<OperationView 
			operationData={operationData} 
			account={account} 
			category={category}
			deleteSlot={<OperationDelete operationId={operationData.id}/>}
		/>
	)
};