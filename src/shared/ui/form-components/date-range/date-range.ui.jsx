import 'react-datepicker/dist/react-datepicker.css';
import css from './date-range.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { forwardRef } from 'react';

export const DateRange = ({ name, label, from, to }) => {
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
				defaultValue={[from, to]}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<ReactDatePicker
						wrapperClassName={css['container']}
						selectsRange={true}
						startDate={value[0]}
						endDate={value[1]}
						onChange={(newValue) => onChange(newValue)}
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
