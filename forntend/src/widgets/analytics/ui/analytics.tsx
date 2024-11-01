import css from './analytics.module.scss';
import ReactSelect from 'react-select';
import { Bar } from 'react-chartjs-2';
import { useEffect, useMemo, useState } from 'react';
import { Block, Button, Loading } from 'shared/ui/components';
import { buildSelectOptions } from 'shared/utils';
import { AccountType, getAccounts } from 'shared/api/account';
import { ID, OptionProps } from 'shared/types';
import { useToast } from 'app/providers/toast';
import { ChartData } from 'chart.js';
import { changeCurrentData } from '../lib/change-current-data';
import {
	buildChartData,
	ChartRangeType,
	getRangeLabel,
	getWeekName,
	options,
	rangeTypeOptions,
} from '../lib';

export const Analytics = () => {
	const [accounts, setAccounts] = useState<AccountType[]>([]);
	const [chartData, setChartData] = useState<ChartData<'bar'>>();
	const [selectedAccount, setSelectedAccount] = useState<ID | null>(null);
	const [selectedRangeType, setSelectedRangeType] = useState<ChartRangeType>(ChartRangeType.week);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [rangeLabel, setRangeLabel] = useState(getWeekName());
	const { showToast } = useToast();

	const accountOptions: OptionProps[] = useMemo(
		() => [{ label: 'Все операции', value: '' }, ...buildSelectOptions(accounts, 'name', 'id')],
		[accounts],
	);

	useEffect(() => {
		getAccounts().then(({ accounts }) => setAccounts(accounts ?? []));
	}, []);

	useEffect(() => {
		const loadDataHandler = async () => {
			const data = await buildChartData(selectedAccount, currentDate, selectedRangeType);

			if (!data) showToast({ message: 'Что-то пошло не так', type: 'error' });

			setChartData(data);
		};

		loadDataHandler();

		setRangeLabel(getRangeLabel(currentDate, selectedRangeType));
	}, [currentDate, selectedAccount, selectedRangeType, showToast]);

	return (
		<div className={css['main']}>
			<Block className={css['selectors']}>
				<ReactSelect
					name="account"
					options={accountOptions}
					onChange={(event) => setSelectedAccount(event!.value)}
					defaultValue={accountOptions[0]}
				/>
				<ReactSelect
					name="rangeType"
					options={rangeTypeOptions}
					onChange={(event) => setSelectedRangeType(event!.value as ChartRangeType)}
					defaultValue={rangeTypeOptions[0]}
				/>
			</Block>
			{chartData ? (
				<Block>
					<div className={css['head']}>
						<Button onClick={() => setCurrentDate(changeCurrentData(currentDate, selectedRangeType, 'sub'))}>
							Назад
						</Button>
						<h3>{rangeLabel}</h3>
						<Button onClick={() => setCurrentDate(changeCurrentData(currentDate, selectedRangeType, 'add'))}>
							Вперед
						</Button>
					</div>
					<Bar options={options} data={chartData} />
				</Block>
			) : (
				<Loading />
			)}
		</div>
	);
};
