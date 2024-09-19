export const OperationView = ({ operationData, deleteSlot }) => {
	return (
		<div>
			<div>Идентификатор: {operationData.id}</div>
			<div>Идентификатор счета: {operationData.accountId}</div>
			<div>Идентификатор категории: {operationData.categoryId}</div>
			<div>Название: {operationData.name}</div>
			<div>Сумма: {operationData.amount}</div>
			<div>Дада: {operationData.createdAt}</div>
			{deleteSlot}
		</div>
	)
};