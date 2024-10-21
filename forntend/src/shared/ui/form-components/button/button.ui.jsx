import { Button as ButtonComponent } from '../../components/button';
import { useFormContext } from 'react-hook-form';

export const Button = ({
	className = '',
	type = 'button',
	children,
	label,
	isReset = false,
	isTrigger = false,
	loading,
	...rest
}) => {
	const { reset, handleSubmit, onSubmit } = useFormContext();

	const clickHandler = () => {
		if (isReset) reset();

		if (isTrigger) handleSubmit(() => onSubmit({}))();
	};

	return (
		<ButtonComponent className={className} type={type} loading={loading} onClick={clickHandler} {...rest}>
			{label || children}
		</ButtonComponent>
	);
};
