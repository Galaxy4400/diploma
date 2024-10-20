import { defer } from 'react-router-dom';
import { request } from '../../../shared/api';

const getOperation = async (opeartionId) => {
	const { operation } = await request({ url: `/operations/${opeartionId}` });

	return operation;
};

export const operationPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		operation: getOperation(id),
	});
};
