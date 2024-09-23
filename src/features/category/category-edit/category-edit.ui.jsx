import { categoryEditFormRules } from "./category-edit.rules";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { CATEGORY_TYPES, setCategory } from "../../../entities/category";
import { useAsyncValue, useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Form, Input, Radio, RadioComponent } from "../../../shared/ui/react-hook-form";
import { useState } from "react";
import { Loader } from "../../../shared/ui";
import { CategoryIcon } from "../../../shared/ui/icons";
import { CATEGORY_ICON } from "../../../shared/lib/icons";
import { server } from "../../../shared/bff";


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
		<Loader isLoading={isLoading}>
			<Form onSubmit={submitHandler} resolver={yupResolver(categoryEditFormRules)}>
				<Input name="name" defaultValue={category.name} placeholder='Название категории...' />
				<div>
					{CATEGORY_TYPES.map((type) => (
						<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={type.id === category.typeId} />
					))}
				</div>
				<div>
					{Object.values(CATEGORY_ICON).map((icon) => (
						<RadioComponent key={icon} name="icon" value={icon} defaultChecked={icon === category.icon}>
							<CategoryIcon name={icon} />
						</RadioComponent>
					))}
				</div>
				<button type='submit'>Внести изменения</button>
			</Form>
		</Loader>
	);
};