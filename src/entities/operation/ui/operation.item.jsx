import { Link, useLocation } from 'react-router-dom';
import { path } from '../../../shared/lib/router';

export const OperationItem = ({ operation, deleteSlot }) => {
	const location = useLocation();

	return (
		<li>
			<Link to={path.operation.id(operation.id)} state={{ from: location }}>
				{operation.name}
			</Link>
			{deleteSlot}
		</li>
	);
};
