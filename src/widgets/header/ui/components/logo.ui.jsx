import css from "./logo.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "../../../../shared/ui/icon";
import { ICON_NAME } from "../../../../shared/lib/icons";
import { path } from "../../../../shared/lib/router";


export const Logo = () => {
	return (
		<Link className={css['logo']} to={path.home()}>
			<Icon className={css['icon']} name={ICON_NAME.WALLET} />
			<div className={css['label']}>Учет доходов и расходов</div>
		</Link>
	)
};