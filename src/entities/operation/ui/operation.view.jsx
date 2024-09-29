export const OperationView = ({ operation, deleteSlot }) => {
	return (
		<div>
			<div>Идентификатор: {operation.id}</div>
			<div>Счета: {operation?.account?.name}</div>
			<div>Категория: {operation?.category?.name}</div>
			<div>Название: {operation.name}</div>
			<div>Сумма: {operation.amount} </div>
			<div>Дата: {operation.createdAt}</div>
			{deleteSlot}
		</div>
	);
};
