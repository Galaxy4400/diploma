import css from './operations-filter.module.scss';
import { Block } from '../../../shared/ui/components';
import { Button, Fieldset, Form, Select } from '../../../shared/ui/form-components';
import { useLoadOptions } from '../../../shared/hooks';

export const OperationsFilter = () => {
	const { accountOptions, categoryOptions } = useLoadOptions();

	const filterHandler = (submitedData) => {
		console.log(submitedData);
	};

	return (
		<Block className={css['block']}>
			<h4>Фильтр</h4>
			<Form className={css['form']} onSubmit={filterHandler}>
				<div className={css['section']}>
					<Fieldset label="По счету">
						<Select name="accountId" options={accountOptions} placeholder="" />
					</Fieldset>
					<Fieldset label="По категории">
						<Select name="categoryId" options={categoryOptions} placeholder="" />
					</Fieldset>
				</div>
				<div className={css['actions']}>
					<Button type="button" isReset={true}>
						Сбросить
					</Button>
					<Button type="submit">Применить</Button>
				</div>
			</Form>
		</Block>
	);
};
