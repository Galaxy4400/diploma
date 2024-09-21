import { useNavigate } from "react-router-dom";
import { useServer } from "../../../app/providers/server";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryCreateFormRules } from "./category-create.rules";
import { CATEGORY_TYPES } from "../../../entities/category";
import { Form, Hidden, Input, Select, Radio, RadioComponent } from "../../../shared/ui/react-hook-form";
import { CATEGORY_ICON } from "../../../shared/lib/icons";
import { CategoryIcon } from "../../../shared/ui/icons";


export const CategoryCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const submitHandler = async (submittedData) => {
		console.log(submittedData);

		// const { data: createdCategory } = await requestServer.createCategory(submittedData);

		// navigate(path.category.id(createdCategory.id));
	};

	return (
		<>
			{userId && 
				<div style={{ width: "300px" }}>
					<Form onSubmit={submitHandler} resolver={yupResolver(categoryCreateFormRules)} style={{ display: "grid", gap: "10px" }}>
						<Hidden name="userId" defaultValue={userId}/>
						<Input name="name" placeholder='Название категории...' />
						<div>
							{CATEGORY_TYPES.map((type, i) => (
								<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={!i} />
							))}
						</div>
						<div>
							{Object.values(CATEGORY_ICON).map((icon, i) => (
								<RadioComponent key={icon} name="icon" value={icon} defaultChecked={!i}>
									<CategoryIcon name={icon} />
								</RadioComponent>
							))}
						</div>
						<button type='submit'>Создать категорию</button>
					</Form>
				</div>
			}
		</>
	);
};