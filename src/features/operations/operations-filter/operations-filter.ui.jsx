import css from './operations-filter.module.scss';
import { Block } from '../../../shared/ui/components';
import { Button, Fieldset, Form, Select } from '../../../shared/ui/form-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { operationsFilterRules } from './operations-filter.rules';
import { useLoadOptions } from '../../../shared/hooks';
import { server } from '../../../shared/bff';
import { useDispatch } from 'react-redux';
import { setOperations } from '../../../entities/operations';

export const OperationsFilter = () => {
	const dispatch = useDispatch();
	const { accountOptions, categoryOptions } = useLoadOptions();

	const filterHandler = async (submitedData) => {
		const { data: filteredOperations } = await server.getOperations(submitedData);

		dispatch(setOperations(filteredOperations));
	};

	return (
		<Block className={css['block']}>
			<h4>Фильтр</h4>
			<Form className={css['form']} onSubmit={filterHandler} resolver={yupResolver(operationsFilterRules)}>
				<div className={css['section']}>
					<Fieldset label="По счету">
						<Select name="accountId" options={accountOptions} placeholder="" />
					</Fieldset>
					<Fieldset label="По категории">
						<Select name="categoryId" options={categoryOptions} placeholder="" />
					</Fieldset>
				</div>
				<div className={css['actions']}>
					<Button type="button" isReset={true} isTrigger={true}>
						Сбросить
					</Button>
					<Button type="submit">Применить</Button>
				</div>
			</Form>
		</Block>
	);
};
