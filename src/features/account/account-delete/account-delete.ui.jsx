import css from './account-delete.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFrom } from '../../../shared/lib/location';
import { server } from '../../../shared/bff';
import { Icon } from '../../../shared/ui/icons';
import { ICON } from '../../../shared/lib/icons';

export const AccountDelete = ({ accountId }) => {
	const navigate = useNavigate();
	const from = useFrom();

	const deleteHandler = async () => {
		await server.deleteAccount(accountId);

		navigate(from?.pathname || false, { replace: true });
	};

	return (
		<>
			<button className={css['button']} type="button" onClick={deleteHandler}>
				<Icon className={css['icon']} name={ICON.CART}></Icon>
			</button>
		</>
	);
};
