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
import {
	buildChartData,
	ChartRangeType,
	getRangeLabel,
	getWeekName,
	options,
	rangeTypeOptions,
} from '../lib';
import {
	addMonths,
	addWeeks,
	addYears,
	startOfMonth,
	startOfWeek,
	startOfYear,
	subMonths,
	subWeeks,
	subYears,
} from 'date-fns';

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

	const prevHandler = () => {
		switch (selectedRangeType) {
			case ChartRangeType.week: {
				setCurrentDate(startOfWeek(subWeeks(currentDate, 1)));
				break;
			}
			case ChartRangeType.month: {
				setCurrentDate(startOfMonth(subMonths(currentDate, 1)));
				break;
			}
			case ChartRangeType.year: {
				setCurrentDate(startOfYear(subYears(currentDate, 1)));
				break;
			}
		}
	};

	const nextHandler = () => {
		switch (selectedRangeType) {
			case ChartRangeType.week: {
				setCurrentDate(startOfWeek(addWeeks(currentDate, 1)));
				break;
			}
			case ChartRangeType.month: {
				setCurrentDate(startOfMonth(addMonths(currentDate, 1)));
				break;
			}
			case ChartRangeType.year: {
				setCurrentDate(startOfYear(addYears(currentDate, 1)));
				break;
			}
		}
	};

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
						<Button onClick={prevHandler}>Назад</Button>
						<h3>{rangeLabel}</h3>
						<Button onClick={nextHandler}>Вперед</Button>
					</div>
					<Bar options={options} data={chartData} />
				</Block>
			) : (
				<Loading />
			)}
		</div>
	);
};
