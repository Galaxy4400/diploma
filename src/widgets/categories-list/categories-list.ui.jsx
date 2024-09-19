import { Link } from "react-router-dom";
import { path } from "../../shared/lib/router";
import { AccountItem } from "../../entities/account";
import { AccountDelete } from "../../features/account";

export const CategoriesList = ({ categories = [] }) => {
	return (
		<div style={{padding: '10px', border: '1px solid #fff', maxWidth: '300px'}}>
			<h2>СПИСОК КАТЕГОРИЙ</h2>
			<div>
				{/* <ul style={{display: 'grid', gap: '10px'}}>
					{categories.map(account => (
						<AccountItem 
							key={account.id} 
							accountData={account}
							deleteSlot={<AccountDelete accountId={account.id}/>}
						/>
					))}
				</ul> */}
			</div>
			<div>
				<Link to={path.category.create()}>Добавить новую категорию</Link>
			</div>
		</div>
	)
};