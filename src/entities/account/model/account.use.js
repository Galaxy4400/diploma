// import { useDispatch, useSelector } from "react-redux";
// import { useServer } from "../../../app/providers/server";
// import { selectAccount } from "./account.selectors";
// import { useEffect } from "react";
// import { loadAccount } from "./account.thunks";

// export const useLoadAccount = (accountId) => {
// 	const dispatch = useDispatch();
// 	const { requestServer } = useServer();
// 	const account = useSelector(selectAccount);

// 	useEffect(() => {
// 		dispatch(loadAccount(requestServer, accountId ));
// 	}, [accountId, dispatch, requestServer]);

// 	return account.id ? account : null;
// }