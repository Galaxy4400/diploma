import css from './fieldset.module.scss';

export const Fieldset = ({ label, children }) => {
	return (
		<fieldset className={css['fieldset']}>
			<legend className={css['legend']}>{label}</legend>
			{children}
		</fieldset>
	)
};