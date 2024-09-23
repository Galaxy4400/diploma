import css from "./logo.module.scss";
import { Link } from "react-router-dom";
import { CategoryIcon } from "../../icons";
import { CATEGORY_ICON } from "../../../lib/icons";
import { path } from "../../../lib/router";

export const Logo = () => {
	return (
		<Link className={css['logo']} to={path.home()}>
			<CategoryIcon className={css['icon']} name={CATEGORY_ICON.ICON4} />
			<div className={css['label']}>У<span>чет </span>д<span>оходов и </span>р<span>асходов</span></div>
		</Link>
	)
};