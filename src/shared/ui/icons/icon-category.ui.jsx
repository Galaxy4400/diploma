import { ICON_CATEGORY } from "../../lib/icons/icon-category";
import Expense from "./svg/expense.svg?react";
import Swap from "./svg/swap.svg?react";
import Income from "./svg/income.svg?react";
import Wallet from "./svg/wallet.svg?react";
import Cart from "./svg/cart2.svg?react";
import Percent from "./svg/percent.svg?react";


export const IconCategory = ({ name, className, size = 36, ...rest }) => {
	switch (name) {
		case ICON_CATEGORY.EXPENSE: return <Expense className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.SWAP: return <Swap className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.INCOME: return <Income className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.WALLET: return <Wallet className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.CART: return <Cart className={className} width={size} height={size} {...rest} />
		case ICON_CATEGORY.PERCENT: return <Percent className={className} width={size} height={size} {...rest} />

		default:
			break;
	}
}