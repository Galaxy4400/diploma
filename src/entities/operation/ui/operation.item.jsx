import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const OperationItem = ({ operationData, deleteSlot }) => {
	return (
		<li>
			<Link to={path.operation.id(operationData.id)}>{operationData.name}</Link>
			{deleteSlot}
		</li>
	)
};
