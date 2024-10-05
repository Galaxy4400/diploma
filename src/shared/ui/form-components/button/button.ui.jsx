import cn from 'classnames';
import { Button as ButtonComponent } from '../../components/button';
import { useFormContext } from 'react-hook-form';

export const Button = ({ className = '', type = 'button', children, label, isReset = false, ...rest }) => {
	const { reset } = useFormContext();

	const clickHandler = () => {
		if (isReset) reset();
	};

	return (
		<ButtonComponent className={cn(className)} type={type} onClick={clickHandler} {...rest}>
			{label || children}
		</ButtonComponent>
	);
};
