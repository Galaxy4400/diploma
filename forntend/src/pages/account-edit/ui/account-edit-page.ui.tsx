import { useParams } from 'react-router-dom';
import { AccountEditForm } from 'features/account';
import { Loading, LoadingComponent } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import {
	fetchGetAccount,
	selectAccountDataId,
	selectAccountDataLoading,
} from 'entities/account/account-data';
import { useEffect } from 'react';

export const AccountEditPage = () => {
	return (
		<Container>
			<PageHeader title="Редактирование счета" />
			<AccountEditForm />
		</Container>
	);
};
