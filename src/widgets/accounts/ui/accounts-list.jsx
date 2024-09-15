import { useEffect } from "react";
import { useServer } from "../../../app/providers/server-provider";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../app/store";
import { Link } from "react-router-dom";

export const AccountsList = () => {
	// const dispatch = useDispatch();
	// const { requestServer } = useServer();
	// const userId = useSelector(userSelector.userId);

	return (
		<div style={{padding: '10px', border: '1px solid black', maxWidth: '300px'}}>
			<h2>СПИСОК СЧЕТОВ</h2>
			<div>
				<Link to="/account/1">Ссылка на конкретный счет</Link>
			</div>
		</div>
	)
};