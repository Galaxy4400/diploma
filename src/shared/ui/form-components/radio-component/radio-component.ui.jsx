import css from './radio-component.module.scss';
import { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

export const RadioComponent = ({
	className = '',
	name,
	value,
	children,
	defaultChecked,
	...rest
}) => {
	const { register, setValue, watch } = useFormContext();

	const radioWrapperRef = useRef(null);
	const selectedValue = watch(name);

	useEffect(() => {
		const radioWrapper = radioWrapperRef.current;
		const input = radioWrapper.querySelector('input');

		const isChecked = selectedValue ? selectedValue === value : defaultChecked;

		isChecked
			? input.nextSibling.classList.add('checked')
			: input.nextSibling.classList.remove('checked');

		const clickHandler = () => {
			setValue(name, value);
		};

		radioWrapper.addEventListener('mousedown', clickHandler);

		return () => {
			radioWrapper.removeEventListener('mousedown', clickHandler);
		};
	}, [name, value, selectedValue, setValue, defaultChecked]);

	return (
		<div className={className} ref={radioWrapperRef}>
			<input
				className={css['input']}
				{...register(name)}
				value={value}
				type="radio"
				defaultChecked={defaultChecked}
				{...rest}
			/>
			{children}
		</div>
	);
};
