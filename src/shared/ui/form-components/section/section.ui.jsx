import css from './section.module.scss';

export const Section = ({ label, children }) => {
	return (
		<div className={css['section']}>
			<span className={css['label']}>{label}</span>
			<div className={css['content']}>
				{children}
			</div>
		</div>
	)
};