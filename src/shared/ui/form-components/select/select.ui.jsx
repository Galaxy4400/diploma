import { Controller, useFormContext } from "react-hook-form"
import ReactSelect from "react-select";

export function Select({ name, options, defaultValue, ...rest }) {
	const { control } = useFormContext();

	return (
		<Controller name={name} control={control} defaultValue={defaultValue} render={({ field }) => (
			<ReactSelect 
				options={options}
				value={options.find(option => option.value === field.value) || null}
				onChange={(selectedOption) => field.onChange(selectedOption?.value || null)}
				onBlur={field.onBlur}
				{...rest}
			/>
		)} />
	)
}