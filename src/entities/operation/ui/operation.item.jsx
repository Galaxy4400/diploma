import { Link, useLocation } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const OperationItem = ({ operationData, deleteSlot }) => {
	const location = useLocation();

	return (
		<li>
			<Link to={path.operation.id(operationData.id)} state={{from: location}}>{operationData.name}</Link>
			{deleteSlot}
		</li>
	)
};
