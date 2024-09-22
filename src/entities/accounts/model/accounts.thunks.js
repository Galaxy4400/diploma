import { server } from "../../../shared/bff";
import { resetAccounts, setAccounts } from "./accounts.actions";

export const loadAccounts = () => async (dispatch) => {
	dispatch(resetAccounts());

	const { data: accounts } = await server.getAccounts();

	dispatch(setAccounts(accounts));
}