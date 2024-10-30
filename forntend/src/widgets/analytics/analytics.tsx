import css from './analytics.module.scss';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { Block } from 'shared/ui/components';
import ReactSelect from 'react-select';
import { AccountType, getAccounts } from 'shared/api/account';
import { buildSelectOptions } from 'shared/utils';

const selectOptions = [
	{ value: 1, label: 'За неделю' },
	{ value: 2, label: 'За месяц' },
	{ value: 3, label: 'За год' },
];

const chartOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Аналитика по счетам',
		},
	},
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const generateData = () => {
	return labels.map(() => faker.number.int({ min: 0, max: 1000 }));
};

export const Analytics = () => {
	const [accounts, setAccounts] = useState<AccountType[]>([]);

	useEffect(() => {
		getAccounts().then(({ accounts }) => setAccounts(accounts ?? []));
	}, []);

	const [data, setData] = useState({
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: generateData(),
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Dataset 2',
				data: generateData(),
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	});

	const handleUpdateData = () => {
		setData({
			labels,
			datasets: [
				{
					label: 'Dataset 1',
					data: generateData(),
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
				},
				{
					label: 'Dataset 2',
					data: generateData(),
					backgroundColor: 'rgba(53, 162, 235, 0.5)',
				},
			],
		});
	};

	return (
		<div className={css['main']}>
			<Block className={css['selectors']}>
				<ReactSelect options={selectOptions} onChange={handleUpdateData} />
				<ReactSelect options={buildSelectOptions(accounts, 'name', 'id')} onChange={handleUpdateData} />
			</Block>
			<Block>
				<Bar options={chartOptions} data={data} />
			</Block>
			<button onClick={handleUpdateData}>Обновить данные</button>
		</div>
	);
};
