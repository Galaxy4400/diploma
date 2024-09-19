import { OperationItem } from "../../entities/operation";
import { OperationDelete } from "../../features/operation";

export const OperationsList = ({ operations = [] }) => {
	return (
		<div>
			<h2>СПИСОК ОПЕРАЦИЙ СЧЕТА</h2>
			<div>
				<ul style={{display: 'grid', gap: '10px'}}>
					{operations.map(operation => (
						<OperationItem 
							key={operation.id} 
							operationData={operation}
							deleteSlot={<OperationDelete accountId={operation.id}/>}
						/>
					))}
				</ul>
			</div>
		</div>
	)
};