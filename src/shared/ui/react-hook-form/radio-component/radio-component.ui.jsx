import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

export const RadioComponent = ({ name, value, children, ...rest }) => {
	const { register } = useFormContext();

	const radioWrapperRef = useRef(null);

	useEffect(() => {
		const radioWrapper = radioWrapperRef.current;
		const currentRadio = radioWrapper.querySelector('input');
		const radioGroup = document.querySelectorAll(`input[name="${name}"]`);

		const processActiveClass = (radio) => {
			radio.checked 
				? radio.parentElement.classList.add('active')
				: radio.parentElement.classList.remove('active');
		}

		const clickHandler = () => {
			currentRadio.checked = true;
			radioGroup.forEach(radio => radio.dispatchEvent(new Event("change")));
		};

		const changeHandler = (event) => {
			const eventRadio = event.target;

			processActiveClass(eventRadio);
		};

		processActiveClass(currentRadio);

		radioWrapper.addEventListener('mousedown', clickHandler);
		currentRadio.addEventListener('change', changeHandler);

		return () => {
			radioWrapper.removeEventListener('mousedown', clickHandler);
			currentRadio.removeEventListener('change', changeHandler);
		};
	}, [name]);

	return (
		<div ref={radioWrapperRef}>
			<input {...register(name)} value={value} type="radio" {...rest} />
			{children}
		</div>
	)
};