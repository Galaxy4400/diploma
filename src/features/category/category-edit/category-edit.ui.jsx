import { categoryEditFormRules } from "./category-edit.rules";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { CATEGORY_TYPES, setCategory } from "../../../entities/category";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Form, Input, Radio, RadioComponent } from "../../../shared/ui/react-hook-form";
import { useState } from "react";
import { WithLoader } from "../../../shared/ui";
import { CategoryIcon } from "../../../shared/ui/icons";
import { CATEGORY_ICON } from "../../../shared/lib/icons";
import { server } from "../../../shared/bff";


export const CategoryEditForm = ({ categoryData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData) => {
		setIsLoading(true);

		const { data: category } = await server.updateCategory(categoryData.id, submittedData);

		dispatch(setCategory(category));

		setIsLoading(false);

		navigate(path.category.id(categoryData.id));
	};

	return (
		<>
			{categoryData &&
				<WithLoader isLoading={isLoading} style={{ width: "300px" }}>
					<Form onSubmit={submitHandler} resolver={yupResolver(categoryEditFormRules)} style={{ display: "grid", gap: "10px" }}>
						<Input name="name" defaultValue={categoryData.name} placeholder='Название категории...' />
						<div>
							{CATEGORY_TYPES.map((type) => (
								<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={type.id === categoryData.typeId} />
							))}
						</div>
						<div style={{display: 'flex', gap: '10px'}}>
							{Object.values(CATEGORY_ICON).map((icon) => (
								<RadioComponent key={icon} name="icon" value={icon} defaultChecked={icon === categoryData.icon}>
									<CategoryIcon name={icon} />
								</RadioComponent>
							))}
						</div>
						<button type='submit'>Внести изменения</button>
					</Form>
				</WithLoader>
			}
		</>
	);
};