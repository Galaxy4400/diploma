import css from './category-create.module.scss';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { categoryCreateFormRules } from './category-create.rules';
import { CATEGORY_TYPES } from '../../../entities/category';
import { Button, Form, Input, Radio, RadioComponent } from '../../../shared/ui/form-components';
import { ICON_CATEGORY } from '../../../shared/lib/icons';
import { path } from '../../../shared/lib/router';
import { useState } from 'react';
import { Block, Fieldset } from '../../../shared/ui/components';
import { IconCategory } from '../../../shared/ui/icons';
import { request } from '../../../shared/api';
import { useToast } from '../../../app/providers/toast';
import { TOAST_TYPE } from '../../../shared/lib/toast';

export const CategoryCreateForm = () => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const { category, error } = await request({ url: '/categories', method: 'POST', data: submittedData });

		setIsLoading(false);

		if (error) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: TOAST_TYPE.ERROR });
			return;
		}

		navigate(path.category.id(category.id), { replace: true });

		showToast({ message: 'Категория создана', type: TOAST_TYPE.SUCCESS });
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(categoryCreateFormRules)}>
				<Input type="text" name="name" label="Название категории" />
				<Fieldset label="Тип категории">
					<div className={css['radiobuttons']}>
						{CATEGORY_TYPES.map((type, i) => (
							<Radio key={type.id} name="type" value={type.id} label={type.name} defaultChecked={!i} />
						))}
					</div>
				</Fieldset>
				<Fieldset label="Иконка категории">
					<div className={css['icons']}>
						{Object.values(ICON_CATEGORY).map((icon, i) => (
							<RadioComponent key={icon} name="icon" value={icon} defaultChecked={!i}>
								<IconCategory className={css['icon']} name={icon} />
							</RadioComponent>
						))}
					</div>
				</Fieldset>
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Создать категорию
				</Button>
			</Form>
		</Block>
	);
};
