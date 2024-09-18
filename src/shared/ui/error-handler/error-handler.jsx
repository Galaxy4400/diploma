import { useNavigate } from "react-router-dom";

export const ErrorHandler = ({ message }) => {
	const navigate = useNavigate();

	return (
		<>
			<div>Что-то пошло не так :(</div>
			<p>{message}</p>
			<button type="button" onClick={() => navigate(-1)}>Вернуться</button>
		</>
	)
};