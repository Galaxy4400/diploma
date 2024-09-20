import { categoryEditFormRules } from "./category-edit.rules";
import { useServer } from "../../../app/providers/server";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { CATEGORY_TYPES, updateCategory } from "../../../entities/category";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { Form, Input, Select } from "../../../shared/ui/react-hook-form";
import { Radio } from "../../../shared/ui/react-hook-form/radio/radio.ui";


const options = [
	{ value: '', label: 'Иконка категории...'},
	{ value: '1', label: 'Иконка 1'},
	{ value: '2', label: 'Иконка 2'},
	{ value: '3', label: 'Иконка 3'},
];


export const CategoryEditForm = ({ categoryData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const submitHandler = async (submittedData) => {
		dispatch(updateCategory(requestServer, categoryData.id, submittedData));

		navigate(path.category.id(categoryData.id));
	};
console.log(categoryData);
	return (
		<>
			{categoryData &&
				<div style={{ width: "300px" }}>
					<Form onSubmit={submitHandler} resolver={yupResolver(categoryEditFormRules)} style={{ display: "grid", gap: "10px" }}>
						<Input name="name" defaultValue={categoryData.name} placeholder='Название категории...' />
						<div>
							{CATEGORY_TYPES.map((type) => (
								<Radio key={type.id} name="typeId" value={type.id} label={type.name} defaultChecked={type.id === categoryData.typeId} />
							))}
						</div>
						<Select name="iconId" options={options} defaultValue={categoryData.iconId} />
						<button type='submit'>Внести изменения</button>
					</Form>
				</div>
			}
		</>
	);
};