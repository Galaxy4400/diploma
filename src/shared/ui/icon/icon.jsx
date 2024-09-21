import Icon1 from "./icons/icon1.svg?react";
import Icon2 from "./icons/icon2.svg?react";
import Icon3 from "./icons/icon3.svg?react";
import Icon4 from "./icons/icon4.svg?react";

export const Icon = ({ name, className, size, ...rest }) => {
	switch (name) {
		case 'icon1': return <Icon1 className={className} width={size} height={size} {...rest} />
		case 'icon2': return <Icon2 className={className} width={size} height={size} {...rest} />
		case 'icon3': return <Icon3 className={className} width={size} height={size} {...rest} />
		case 'icon4': return <Icon4 className={className} width={size} height={size} {...rest} />

		default:
			break;
	}
}