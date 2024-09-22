import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOperations, setOperations } from "../../../entities/operations";
import { server } from "../../../shared/bff";

export const useHistoryPageNeededData = () => {
	const dispatch = useDispatch();
	const operations = useSelector(selectOperations);

	useEffect(() => {
		const fetchData = async () => {
			const operationsResponse = await server.getOperations();

			dispatch(setOperations(operationsResponse.data));
		}
		
		fetchData();
	}, [dispatch]);

	return { operations };
};