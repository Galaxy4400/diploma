import { Link } from "react-router-dom";
import { OperationItem } from "../../entities/operation";
import { OperationDelete } from "../../features/operation";
import { ErrorHandler } from "../../shared/ui";
import { path } from "../../shared/lib/router";

export const OperationsList = ({ operations, accountId = null }) => {
	return (
		<div>
			<h2>СПИСОК ОПЕРАЦИЙ СЧЕТА</h2>
			<Link to={path.operation.create()} state={{from: { accountId }}} >Добавить операцию</Link>
			{operations?.length ? (
				<div>
					<ul style={{display: 'grid', gap: '10px'}}>
						{operations?.map(operation => (
							<OperationItem 
								key={operation.id} 
								operationData={operation}
								deleteSlot={<OperationDelete operationId={operation.id}/>}
							/>
						))}
					</ul>
				</div>
			) : (
				<ErrorHandler message="У счета нет операций"/>
			)}
		</div>
	)
};