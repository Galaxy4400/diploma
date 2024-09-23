import { ICON_NAME } from "../../lib/icons";
import Icon1 from "./icons/icon1.svg?react";
import Icon2 from "./icons/icon2.svg?react";
import Icon3 from "./icons/icon3.svg?react";
import Icon4 from "./icons/icon4.svg?react";
import Exit from "./icons/exit.svg?react";


export const Icon = ({ name, className, size = 36, ...rest }) => {
	switch (name) {
		case ICON_NAME.ICON1: return <Icon1 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.ICON2: return <Icon2 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.ICON3: return <Icon3 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.ICON4: return <Icon4 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.EXIT: return <Exit className={className} width={size} height={size} {...rest} />

		default:
			break;
	}
}