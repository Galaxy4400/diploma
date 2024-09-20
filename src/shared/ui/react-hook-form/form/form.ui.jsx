import { FormProvider, useForm } from "react-hook-form"
import { ErrorList } from "../../error-list";


export function Form({ defaultValues, resolver, onSubmit, children, ...rest }) { // TODO убрать отсюдастили
	const methods = useForm({ defaultValues, resolver });
	const { handleSubmit, formState: { errors } } = methods; // TODO перенести обработку ошибок в другое место

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} { ...rest }> {/* TODO убрать отсюдастили */}
				{children}
				{<ErrorList formErrors={errors} />} {/* TODO перенести обработку ошибок в другое место */}
			</form>
		</FormProvider>
	)
}