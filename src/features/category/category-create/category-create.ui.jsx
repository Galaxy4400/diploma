import { useNavigate } from "react-router-dom";
import { useServer } from "../../../app/providers/server";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryCreateFormRules } from "./category-create.rules";
import { path } from "../../../shared/lib/router";
import { CATEGORY_TYPES } from "../../../entities/category";
import { Form, Hidden, Input, Select, Radio } from "../../../shared/ui/react-hook-form";


const options = [
	{ value: '', label: 'Иконка категории...'},
	{ value: '1', label: 'Иконка 1'},
	{ value: '2', label: 'Иконка 2'},
	{ value: '3', label: 'Иконка 3'},
];


export const CategoryCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const submitHandler = async (submittedData) => {
		const { data: createdCategory } = await requestServer.createCategory(submittedData);

		navigate(path.category.id(createdCategory.id));
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
						<Select name="iconId" options={options}/>
						<button type='submit'>Создать категорию</button>
					</Form>
				</div>
			}
		</>
	);
};