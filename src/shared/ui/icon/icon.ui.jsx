import { ICON_NAME } from "../../lib/icons";
import Icon1 from "./icons/icon1.svg?react";
import Icon2 from "./icons/icon2.svg?react";
import Icon3 from "./icons/icon3.svg?react";
import Wallet from "./icons/wallet.svg?react";
import Wallet2 from "./icons/wallet2.svg?react";
import Exit from "./icons/exit.svg?react";
import Dock from "./icons/dock.svg?react";
import Dock2 from "./icons/dock2.svg?react";
import Card from "./icons/card.svg?react";
import Card2 from "./icons/card2.svg?react";
import Money from "./icons/money.svg?react";
import Safe from "./icons/safe.svg?react";
import Cart from "./icons/cart.svg?react";


export const Icon = ({ name, className, size = 36, ...rest }) => {
	switch (name) {
		case ICON_NAME.ICON1: return <Icon1 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.ICON2: return <Icon2 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.ICON3: return <Icon3 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.WALLET: return <Wallet className={className} width={size} height={size} {...rest} />
		case ICON_NAME.WALLET2: return <Wallet2 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.EXIT: return <Exit className={className} width={size} height={size} {...rest} />
		case ICON_NAME.DOCK: return <Dock className={className} width={size} height={size} {...rest} />
		case ICON_NAME.DOCK2: return <Dock2 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.CARD: return <Card className={className} width={size} height={size} {...rest} />
		case ICON_NAME.CARD2: return <Card2 className={className} width={size} height={size} {...rest} />
		case ICON_NAME.MONEY: return <Money className={className} width={size} height={size} {...rest} />
		case ICON_NAME.SAFE: return <Safe className={className} width={size} height={size} {...rest} />
		case ICON_NAME.CART: return <Cart className={className} width={size} height={size} {...rest} />

		default:
			break;
	}
}