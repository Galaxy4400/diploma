import 'react-datepicker/dist/react-datepicker.css';
import css from './date-picker.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { forwardRef } from 'react';

export const DatePicker = ({ name, label, defaultValue }) => {
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
				defaultValue={defaultValue}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<ReactDatePicker
						wrapperClassName={css['container']}
						selected={value}
						onChange={onChange}
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