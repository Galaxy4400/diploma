import { FieldsetHTMLAttributes } from 'react';
import css from './fieldset.module.scss';

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
	label: string;
}

export const Fieldset = ({ label, children }: FieldsetProps) => {
	return (
		<fieldset className={css['fieldset']}>
			<legend className={css['legend']}>{label}</legend>
			{children}
		</fieldset>
	);
};
