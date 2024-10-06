import 'react-datepicker/dist/react-datepicker.css';
import css from './daterange.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { forwardRef } from 'react';

export const DateRange = ({ name, label }) => {
	const { control } = useFormContext();

	const DatePickerInput = forwardRef(({ value, onClick }, ref) => (
		<input className={css['input']} onClick={onClick} value={value} readOnly ref={ref} />
	));

	DatePickerInput.displayName = 'DatePickerInput';

	return (
		<label className={css['wraper']}>
			{label && <span className={css['label']}>{label}</span>}
			<Controller
				name={name}
				control={control}
				defaultValue={[null, null]}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<ReactDatePicker
						wrapperClassName={css['container']}
						selectsRange={true}
						startDate={value[0]}
						endDate={value[1]}
						onChange={(update) => onChange(update)}
						onBlur={onBlur}
						customInput={<DatePickerInput />}
						locale="ru"
						ref={ref}
					/>
				)}
			/>
		</label>
	);
};
