import css from './category-create.module.scss';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { categoryCreateFormRules } from './category-create.rules';
import { CATEGORY_TYPES } from '../../../entities/category';
import {
	Button,
	Fieldset,
	Form,
	Hidden,
	Input,
	Radio,
	RadioComponent,
} from '../../../shared/ui/form-components';
import { ICON_CATEGORY } from '../../../shared/lib/icons';
import { path } from '../../../shared/lib/router';
import { useState } from 'react';
import { Block } from '../../../shared/ui/components';
import { server } from '../../../shared/bff';
import { IconCategory } from '../../../shared/ui/icons';

export const CategoryCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const { data: createdCategory } = await server.createCategory(submittedData);

		setIsLoading(false);

		navigate(path.category.id(createdCategory.id));
	};

	return (
		<Block className={css['block']}>
			<Form
				className={css['form']}
				onSubmit={submitHandler}
				resolver={yupResolver(categoryCreateFormRules)}
			>
				<Hidden name="userId" defaultValue={userId} />
				<Input type="text" name="name" label="Название категории" />
				<Fieldset label="Тип категории">
					<div className={css['radiobuttons']}>
						{CATEGORY_TYPES.map((type, i) => (
							<Radio
								key={type.id}
								name="typeId"
								value={type.id}
								label={type.name}
								defaultChecked={!i}
							/>
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
				<Button type="submit" disabled={isLoading}>
					Создать категорию
				</Button>
			</Form>
		</Block>
	);
};
