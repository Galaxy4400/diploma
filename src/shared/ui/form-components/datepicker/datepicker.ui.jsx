import css from './datepicker.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';

export const DatePicker = ({ name, label }) => {
	const { control } = useFormContext();

	const DatePickerInput = forwardRef(({ value, onClick }, ref) => (
		<input
			ref={ref}
			className="custom-input"
			onClick={onClick}
			value={value || 'Выберите дату'}
			readOnly
			placeholder="Выберите дату"
		/>
	));

	DatePickerInput.displayName = 'DatePickerInput';

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={null}
			render={({ field: { onChange, onBlur, value, ref } }) => (
				<ReactDatePicker
					selected={value}
					onChange={onChange}
					onBlur={onBlur}
					customInput={<DatePickerInput />}
					ref={ref}
					placeholderText="Выберите дату"
				/>
			)}
		/>
	);
};
