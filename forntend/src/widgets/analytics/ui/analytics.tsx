import css from './analytics.module.scss';
import ReactSelect from 'react-select';
import { Bar } from 'react-chartjs-2';
import { useEffect, useMemo, useState } from 'react';
import { Block, Button, Loading } from 'shared/ui/components';
import { buildSelectOptions } from 'shared/utils';
import { AccountType, getAccounts } from 'shared/api/account';
import { ID, OptionProps } from 'shared/types';
import { ChartData } from 'chart.js';
import {
	changeCurrentData,
	ChartRangeType,
	DataGeneratorFactory,
	options,
	rangeTypeOptions,
} from '../lib';

export const Analytics = () => {
	const [accounts, setAccounts] = useState<AccountType[]>([]);
	const [chartData, setChartData] = useState<ChartData<'bar'> | null>(null);
	const [selectedAccount, setSelectedAccount] = useState<ID | null>(null);
	const [selectedRangeType, setSelectedRangeType] = useState<ChartRangeType>(ChartRangeType.week);
	const dataGenerator = useMemo(() => DataGeneratorFactory.create(selectedRangeType), [selectedRangeType]);

	const accountOptions: OptionProps[] = useMemo(
		() => [{ label: 'Все операции', value: '' }, ...buildSelectOptions(accounts, 'name', 'id')],
		[accounts],
	);

	useEffect(() => {
		getAccounts().then(({ accounts }) => setAccounts(accounts ?? []));
	}, []);

	useEffect(() => {
		if (dataGenerator) dataGenerator.getData().then(setChartData);
	}, [dataGenerator, selectedAccount]);

	const prevHandler = () => {
		dataGenerator.getPrevData().then(setChartData);
	}

	const nextHandler = () => {
		dataGenerator.getNextData().then(setChartData);
	}

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
						<Button onClick={prevHandler}>
							Назад
						</Button>
						<h3 className={css['range-label']}>{dataGenerator.getRangeLabel()}</h3>
						<Button onClick={nextHandler}>
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
