export const ErrorList = ({ formErrors }) => {
	const errors = Object.values(formErrors).map(({ message }) => message);

	return (
		<ul>
			{errors.map((error, i) => <li key={i}>{error}</li>)}
		</ul>
	);
}