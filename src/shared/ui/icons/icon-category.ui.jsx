import { ICON_CATEGORY } from "../../lib/icons/icon-category";
import Icon1 from "./svg/icon1.svg?react";
import Icon2 from "./svg/icon2.svg?react";
import Icon3 from "./svg/icon3.svg?react";
import Wallet from "./svg/wallet.svg?react";
import Cart from "./svg/cart2.svg?react";
import Percent from "./svg/percent.svg?react";


export const IconCategory = ({ name, className, size = 36, ...rest }) => {
	switch (name) {
		case ICON_CATEGORY.ICON1: return <Icon1 className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.ICON2: return <Icon2 className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.ICON3: return <Icon3 className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.WALLET: return <Wallet className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.CART: return <Cart className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.PERCENT: return <Percent className={className} width={size} height={size} {...rest} />

		default:
			break;
	}
}