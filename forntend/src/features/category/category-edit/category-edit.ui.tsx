import css from './category-edit.module.scss';
import { useState } from 'react';
import { categoryEditFormRules } from './category-edit.rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { CATEGORY_TYPES, CategoryResponse, CategoryType } from 'entities/category';
import { useAsyncValue, useNavigate } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { Button, Form, Input, Radio, RadioComponent } from 'shared/ui/form-components';
import { Block, Fieldset } from 'shared/ui/components';
import { IconCategory } from 'shared/ui/icons';
import { request, RequestData } from 'shared/api';
import { useToast } from 'app/providers/toast';
import { CategoryIcons } from 'shared/types';

export const CategoryEditForm = () => {
	const navigate = useNavigate();
	const category = useAsyncValue() as CategoryType;
	const { showToast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData: RequestData) => {
		setIsLoading(true);

		const { error } = await request<CategoryResponse>({
			url: `/categories/${category.id}`,
			method: 'PATCH',
			data: submittedData,
		});

		setIsLoading(false);

		if (error) {
			showToast({ message: 'Ошибка! Попробуйте ещё раз', type: 'error' });
			return;
		}

		navigate(path.category.id(category.id));

		showToast({ message: 'Изменения внесены', type: 'success' });
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(categoryEditFormRules)}>
				<Input type="text" name="name" defaultValue={category.name} label="Название категории" />
				<Fieldset label="Тип категории">
					<div className={css['radiobuttons']}>
						{CATEGORY_TYPES.map((type) => (
							<Radio
								key={type.id}
								name="type"
								value={type.id}
								label={type.name}
								defaultChecked={type.id === category.type}
							/>
						))}
					</div>
				</Fieldset>
				<Fieldset label="Иконка категории">
					<div className={css['icons']}>
						{Object.values(CategoryIcons).map((icon) => (
							<RadioComponent key={icon} name="icon" value={icon} defaultChecked={icon === category.icon}>
								<IconCategory className={css['icon']} name={icon} />
							</RadioComponent>
						))}
					</div>
				</Fieldset>
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Внести изменения
				</Button>
			</Form>
		</Block>
	);
};
