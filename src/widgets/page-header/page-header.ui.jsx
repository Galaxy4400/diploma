import css from './page-header.module.scss';

export const PageHeader = ({ title, breadcrumbsSlot }) => {
	return (
		<div className={css['main']}>
			<h1>{title}</h1>
			{breadcrumbsSlot}
		</div>
	)
};