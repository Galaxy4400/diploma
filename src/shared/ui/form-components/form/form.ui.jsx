import { FormProvider, useForm } from "react-hook-form"
import { ErrorList } from "../../components/error-list";


export function Form({ className = '', defaultValues, resolver, onSubmit, children, ...rest }) {
	const methods = useForm({ defaultValues, resolver });
	const { handleSubmit, formState: { errors } } = methods; // TODO перенести обработку ошибок в другое место

	return (
		<FormProvider {...methods}>
			<form className={className} onSubmit={handleSubmit(onSubmit)} { ...rest }>
				{children}
				{/* {<ErrorList formErrors={errors} />}  TODO перенести обработку ошибок в другое место */}
			</form>
		</FormProvider>
	)
}