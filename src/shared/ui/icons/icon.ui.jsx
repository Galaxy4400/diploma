import { ICON } from '../../lib/icons';
import Wallet from './svg/wallet2.svg?react';
import Exit from './svg/exit.svg?react';
import Dock from './svg/dock.svg?react';
import Dock2 from './svg/dock2.svg?react';
import Card from './svg/card.svg?react';
import Card2 from './svg/card2.svg?react';
import Money from './svg/money.svg?react';
import Safe from './svg/safe.svg?react';
import Cart from './svg/cart.svg?react';
import Back from './svg/arrow-back.svg?react';
import Edit from './svg/edit.svg?react';

export const Icon = ({ name, className, size = 36, ...rest }) => {
	switch (name) {
		case ICON.WALLET:
			return <Wallet className={className} width={size} height={size} {...rest} />;
		case ICON.EXIT:
			return <Exit className={className} width={size} height={size} {...rest} />;
		case ICON.DOCK:
			return <Dock className={className} width={size} height={size} {...rest} />;
		case ICON.DOCK2:
			return <Dock2 className={className} width={size} height={size} {...rest} />;
		case ICON.CARD:
			return <Card className={className} width={size} height={size} {...rest} />;
		case ICON.CARD2:
			return <Card2 className={className} width={size} height={size} {...rest} />;
		case ICON.MONEY:
			return <Money className={className} width={size} height={size} {...rest} />;
		case ICON.SAFE:
			return <Safe className={className} width={size} height={size} {...rest} />;
		case ICON.CART:
			return <Cart className={className} width={size} height={size} {...rest} />;
		case ICON.BACK:
			return <Back className={className} width={size} height={size} {...rest} />;
		case ICON.EDIT:
			return <Edit className={className} width={size} height={size} {...rest} />;

		default:
			break;
	}
};
