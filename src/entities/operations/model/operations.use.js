// import { useEffect } from "react";
// import { useServer } from "../../../app/providers/server";
// import { useDispatch, useSelector } from "react-redux";
// import { loadOperations } from "./operations.thunks";
// import { selectOperations } from "./operations.selectors";

// export const useLoadOperations = (accountId = null) => {
// 	const dispatch = useDispatch();
// 	const { requestServer } = useServer();
// 	const operations = useSelector(selectOperations);

// 	useEffect(() => {
// 		dispatch(loadOperations(requestServer, accountId));
// 	}, [accountId, dispatch, requestServer]);

// 	return operations;
// }