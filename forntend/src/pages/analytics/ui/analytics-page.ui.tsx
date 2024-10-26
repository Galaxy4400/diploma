import css from './analytics-page.module.scss';
import { Block, Container } from '../../../shared/ui/components';
import { PageHeader } from '../../../widgets/page-header';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Chart.js Bar Chart',
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const generateData = () => {
	return labels.map(() => faker.number.int({ min: 0, max: 1000 }));
};

export const AnalyticsPage = () => {
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
		<Container>
			<PageHeader title="Аналитика" />
			<Block>
				<Bar options={options} data={data} />
			</Block>
			<button onClick={handleUpdateData}>Обновить данные</button>
		</Container>
	);
};
