import { categoryEditFormRules } from "./category-edit.rules";
import { useServer } from "../../../app/providers/server";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";
import { useEffect } from "react";
import { CATEGORY_TYPES, updateCategory } from "../../../entities/category";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";


export const CategoryEditForm = ({ categoryData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(categoryEditFormRules),
	});

	const submitHandler = async (editData) => {
		dispatch(updateCategory(requestServer, categoryData.id, editData));

		navigate(path.category.id(categoryData.id));
	};

	return (
		<>
			{categoryData &&
				<div style={{ width: "300px" }}>
					<form onSubmit={handleSubmit(submitHandler)} style={{ display: "grid", gap: "10px" }}>
						<input {...register('name')} type="text" defaultValue={categoryData.name} placeholder='Название категории...' />
						<div>
							{CATEGORY_TYPES.map((type) => (
								<label key={type.id}>
									<input {...register('typeId')} value={type.id} type="radio" defaultChecked={type.id === categoryData.typeId}/>
									<span>{type.name}</span>
								</label>
							))}
						</div>
						<select {...register('iconId')}>
							<option value="" disabled>Иконка категории...</option>
							<option value="1">Иконка 1</option>
							<option value="2">Иконка 2</option>
							<option value="3">Иконка 3</option>
						</select>
						<button type='submit'>Внести изменения</button>
					</form>
					<ErrorList formErrors={errors} />
				</div>
			}
		</>
	);
};



