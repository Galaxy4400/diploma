import { CATEGORY_ICON } from "../../../lib/icons";
import Icon1 from "./icons/icon1.svg?react";
import Icon2 from "./icons/icon2.svg?react";
import Icon3 from "./icons/icon3.svg?react";
import Icon4 from "./icons/icon4.svg?react";


export const CategoryIcon = ({ name, className, size = 36, ...rest }) => {
	switch (name) {
		case CATEGORY_ICON.ICON1: return <Icon1 className={className} width={size} height={size} {...rest} />
		case CATEGORY_ICON.ICON2: return <Icon2 className={className} width={size} height={size} {...rest} />
		case CATEGORY_ICON.ICON3: return <Icon3 className={className} width={size} height={size} {...rest} />
		case CATEGORY_ICON.ICON4: return <Icon4 className={className} width={size} height={size} {...rest} />

		default:
			break;
	}
}