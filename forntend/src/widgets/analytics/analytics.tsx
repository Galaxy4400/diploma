import css from './analytics.module.scss';
import { Bar } from 'react-chartjs-2';
import { useEffect, useMemo, useState } from 'react';
import { Block, Loading } from 'shared/ui/components';
import { getChartData, options } from './lib/get-chart-data';
import { ChartData } from 'chart.js';
import { buildSelectOptions } from 'shared/utils';
import { AccountType, getAccounts } from 'shared/api/account';
import { ID, OptionProps } from 'shared/types';
import ReactSelect from 'react-select';
import { useToast } from 'app/providers/toast';

export const Analytics = () => {
	const [data, setData] = useState<ChartData<'bar'>>();
	const [isLoading, setisLoading] = useState(false);
	const [date, setDate] = useState(new Date());
	const [accounts, setAccounts] = useState<AccountType[]>([]);
	const [selectedAccount, setSelectedAccount] = useState<ID | null>(null);
	const { showToast } = useToast();

	useEffect(() => {
		getAccounts().then(({ accounts }) => setAccounts(accounts ?? []));
	}, []);

	const accountOptions: OptionProps[] = useMemo(
		() => [{ label: 'Все операции', value: '' }, ...buildSelectOptions(accounts, 'name', 'id')],
		[accounts],
	);

	const timeOptions: OptionProps[] = [
		{ label: 'По неделям', value: '1' },
		{ label: 'По месяцам', value: '2' },
		{ label: 'По годам', value: '3' },
	];

	useEffect(() => {
		const loadDataHandler = async () => {
			setisLoading(true);

			const chartData = await getChartData(selectedAccount, date);

			if (!chartData) showToast({ message: 'Что-то пошло не так', type: 'error' });

			setData(chartData);

			setisLoading(false);
		};
		loadDataHandler();
	}, [date, selectedAccount, showToast]);

	return (
		<div className={css['main']}>
			<Block className={css['selectors']}>
				<ReactSelect
					name="account"
					options={accountOptions}
					onChange={(event) => setSelectedAccount(event!.value)}
					defaultValue={{ label: 'Все операции', value: 'test' }}
				/>
				<ReactSelect name="time" options={timeOptions} onChange={() => {}} defaultValue={timeOptions[0]} />
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
