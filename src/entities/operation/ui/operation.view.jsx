export const OperationView = ({ operationData, account, category, deleteSlot }) => {
	return (
		<div>
			<div>Идентификатор: {operationData.id}</div>
			<div>Счета: {account?.name}</div>
			<div>Категория: {category?.name}</div>
			<div>Название: {operationData.name}</div>
			<div>Сумма: {operationData.amount} руб.</div>
			<div>Дата: {operationData.createdAt}</div>
			{deleteSlot}
		</div>
	)
};