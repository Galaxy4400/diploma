import { Link, useLocation } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const CategoryItem = ({ categoryData, deleteSlot }) => {
	const location = useLocation();

	return (
		<li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
			<Link to={path.category.id(categoryData.id)} state={{from: location}}>{categoryData.name}</Link>
			{deleteSlot}
		</li>
	)
};
