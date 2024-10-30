import css from './analytics.module.scss';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Block, Loading } from 'shared/ui/components';
import { getChartData, options } from './lib/get-chart-data';
import { ChartData } from 'chart.js';
import { buildSelectOptions } from 'shared/utils';
import { AccountType, getAccounts } from 'shared/api/account';
import { ID } from 'shared/types';
import ReactSelect from 'react-select';

export const Analytics = () => {
	const [data, setData] = useState<ChartData<'bar'>>();
	const [isLoading, setisLoading] = useState(false);
	const [accounts, setAccounts] = useState<AccountType[]>([]);
	const [selectedAccount, setSelectedAccount] = useState<ID | null>(null);

	useEffect(() => {
		setisLoading(true);
		getAccounts().then(({ accounts }) => setAccounts(accounts ?? []));
		getChartData(selectedAccount)
			.then((data) => setData(data))
			.finally(() => setisLoading(false));
	}, [selectedAccount]);

	return (
		<div className={css['main']}>
			<Block className={css['selectors']}>
				<ReactSelect
					options={buildSelectOptions(accounts, 'name', 'id')}
					onChange={(event) => setSelectedAccount(event!.value)}
				/>
			</Block>
			{data ? (
				<Block>
					<Bar data={data} options={options} />
				</Block>
			) : (
				<Loading />
			)}
		</div>
	);
};
