import css from './operations-filter.module.scss';
import { Block } from '../../../shared/ui/components';
import { Fieldset, Form, Select } from '../../../shared/ui/form-components';
import { useLoadOptions } from '../../../shared/hooks';

export const OperationsFilter = () => {
	const { accountOptions, categoryOptions } = useLoadOptions();

	return (
		<Block className={css['block']}>
			<h4>Фильтр</h4>
			<Form className={css['form']}>
				<Fieldset label="По счету">
					<Select name="accountId" options={accountOptions} placeholder="" />
				</Fieldset>
				<Fieldset label="По категории">
					<Select name="accountId" options={categoryOptions} placeholder="" />
				</Fieldset>
			</Form>
		</Block>
	);
};
