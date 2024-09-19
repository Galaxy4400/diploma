import { useNavigate } from "react-router-dom";
import { useServer } from "../../../app/providers/server";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";
import { categoryCreateFormRules } from "./category-create.rules";
import { path } from "../../../shared/lib/router";
import { CATEGORY_TYPES } from "../../../entities/category";


export const CategoryCreateForm = ({ userId }) => {
	const navigate = useNavigate();
	const { requestServer } = useServer();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(categoryCreateFormRules),
	});

	const submitHandler = async (categoryData) => {
		const { data: createdCategory } = await requestServer.createCategory(categoryData);

		navigate(path.category.id(createdCategory.id));
	};

	return (
		<>
			{userId && 
				<div style={{ width: "300px" }}>
					<form onSubmit={handleSubmit(submitHandler)} style={{ display: "grid", gap: "10px" }}>
						<input {...register('userId')} type="hidden" defaultValue={userId}/>
						<input {...register('name')} type="text" placeholder='Название категории...' />
						<div>
							{CATEGORY_TYPES.map((type, i) => (
								<label key={type.id}>
									<input {...register('typeId')} value={type.id} type="radio" defaultChecked={!i}/>
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
						<button type='submit'>Создать категорию</button>
					</form>
					<ErrorList formErrors={errors} />
				</div>
			}
		</>
	);
};