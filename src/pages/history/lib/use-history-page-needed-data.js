import { useEffect } from "react";
import { useServer } from "../../../app/providers/server";
import { useDispatch, useSelector } from "react-redux";
import { selectOperations, setOperations } from "../../../entities/operations";

export const useHistoryPageNeededData = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const operations = useSelector(selectOperations);

	useEffect(() => {
		const fetchData = async () => {
			const operationsResponse = await requestServer.getOperations();

			dispatch(setOperations(operationsResponse.data));
		}
		
		fetchData();
	}, [requestServer, dispatch]);

	return { operations };
};