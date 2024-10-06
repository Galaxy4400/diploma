import css from './operations-filter.module.scss';
import { Block } from '../../../../shared/ui/components';
import { Button, Fieldset, Form, Select } from '../../../../shared/ui/form-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoadOptions } from '../../../../shared/hooks';
import { useOperationsFilter } from '../model/use-operations-filter';
import { operationsFilterRules } from '../lib';

export const OperationsFilter = () => {
	const { accountOptions, categoryOptions } = useLoadOptions();
	const { filterHandler, isLoading } = useOperationsFilter();

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
					<Button className={css['reset']} type="button" isReset={true} isTrigger={true}>
						Сбросить
					</Button>
					<Button type="submit" disabled={isLoading}>
						Применить
					</Button>
				</div>
			</Form>
		</Block>
	);
};
