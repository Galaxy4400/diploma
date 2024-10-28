import { AccountDelete } from 'features/account';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { useParams } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { Loading } from 'shared/ui/components';
import {
	AccountView,
	fetchGetAccount,
	selectAccountData,
	selectAccountDataId,
	selectAccountDataLoading,
} from 'entities/account/account-data';

interface AccountProps {
	operationSectionSlot: ReactNode;
}

export const Account = ({ operationSectionSlot }: AccountProps) => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const account = useAppSelector(selectAccountData);
	const currentAccountId = useAppSelector(selectAccountDataId);
	const isLoading = useAppSelector(selectAccountDataLoading);

	useEffect(() => {
		if (id && id !== currentAccountId) dispatch(fetchGetAccount(id));
	}, [currentAccountId, dispatch, id]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />
			{operationSectionSlot}
		</>
	);
};
