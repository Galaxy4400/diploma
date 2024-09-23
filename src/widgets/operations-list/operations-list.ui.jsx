import { Link } from "react-router-dom";
import { OperationItem } from "../../entities/operation";
import { OperationDelete } from "../../features/operation";
import { path } from "../../shared/lib/router";

export const OperationsList = ({ operations, accountId }) => {
	return (
		<div>
			<h2>СПИСОК ОПЕРАЦИЙ СЧЕТА</h2>
			<Link to={path.operation.create()} state={{from: { accountId }}} >Добавить операцию</Link>
			<div>
				<ul>
					{operations?.map(operation => (
						<OperationItem 
							key={operation.id} 
							operation={operation}
							deleteSlot={<OperationDelete operationId={operation.id}/>}
						/>
					))}
				</ul>
			</div>
		</div>
	)
};