import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryCreateFormRules } from "./category-create.rules";
import { CATEGORY_TYPES } from "../../../entities/category";
import { Form, Hidden, Input, Radio, RadioComponent } from "../../../shared/ui/react-hook-form";
import { ICON_CATEGORY } from "../../../shared/lib/icons";
import { path } from "../../../shared/lib/router";
import { useState } from "react";
import { Loader } from "../../../shared/ui/components";
import { server } from "../../../shared/bff";
import { IconCategory } from "../../../shared/ui/icons";


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
		<>
			{userId && 
				<Loader isLoading={isLoading}>
					<Form onSubmit={submitHandler} resolver={yupResolver(categoryCreateFormRules)}>
						<Hidden name="userId" defaultValue={userId}/>
						<Input name="name" placeholder='Название категории...' />
						<div>
							{CATEGORY_TYPES.map((type, i) => (
								<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={!i} />
							))}
						</div>
						<div>
							{Object.values(ICON_CATEGORY).map((icon, i) => (
								<RadioComponent key={icon} name="icon" value={icon} defaultChecked={!i}>
									<IconCategory name={icon} />
								</RadioComponent>
							))}
						</div>
						<button type='submit'>Создать категорию</button>
					</Form>
				</Loader>
			}
		</>
	);
};