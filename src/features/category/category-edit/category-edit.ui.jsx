import css from './category-edit.module.scss';
import { categoryEditFormRules } from './category-edit.rules';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { CATEGORY_TYPES, setCategory } from '../../../entities/category';
import { useAsyncValue, useNavigate } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { Button, Form, Input, Radio, RadioComponent } from '../../../shared/ui/form-components';
import { useState } from 'react';
import { Block, Fieldset } from '../../../shared/ui/components';
import { ICON_CATEGORY } from '../../../shared/lib/icons';
import { server } from '../../../shared/bff';
import { IconCategory } from '../../../shared/ui/icons';

export const CategoryEditForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const category = useAsyncValue();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const response = await server.updateCategory(category.id, submittedData);

		dispatch(setCategory(response.data));

		setIsLoading(false);

		navigate(path.category.id(category.id));
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
								name="typeId"
								value={type.id}
								label={type.name}
								defaultChecked={type.id === category.typeId}
							/>
						))}
					</div>
				</Fieldset>
				<Fieldset label="Иконка категории">
					<div className={css['icons']}>
						{Object.values(ICON_CATEGORY).map((icon) => (
							<RadioComponent key={icon} name="icon" value={icon} defaultChecked={icon === category.icon}>
								<IconCategory className={css['icon']} name={icon} />
							</RadioComponent>
						))}
					</div>
				</Fieldset>
				<Button type="submit" disabled={isLoading}>
					Внести изменения
				</Button>
			</Form>
		</Block>
	);
};
