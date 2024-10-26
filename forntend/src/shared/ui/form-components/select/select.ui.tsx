import css from './select.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import ReactSelect, { Props } from 'react-select';
import { OptionProps } from 'shared/types';

interface SelectProps extends Props<OptionProps> {
	name: string;
	label?: string;
	defaultValue?: OptionProps | null;
	options: OptionProps[];
}

export const Select = ({ name, options, label, defaultValue, ...rest }: SelectProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	console.log(defaultValue);

	return (
		<label className={css['wraper']}>
			{label && <span className={css['label']}>{label}</span>}
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue}
				render={({ field }) => (
					<ReactSelect
						options={options}
						value={options.find((option) => option.value === field.value) || null}
						// @ts-expect-error: Property 'value' does not exist on type 'OptionProps | MultiValue<OptionProps>'
						onChange={(selectedOption) => field.onChange(selectedOption?.value || null)}
						onBlur={field.onBlur}
						{...rest}
					/>
				)}
			/>
			{!!errors[name] && <p className={css['error']}>{String(errors[name]?.message)}</p>}
		</label>
	);
};
