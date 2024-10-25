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
import Abort from './svg/abort.svg?react';
import Cross from './svg/cross.svg?react';
import { Icons } from '@/shared/types';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
	name?: Icons;
	size?: number;
}

export const Icon = ({ name, className, size = 36, ...rest }: IconProps) => {
	switch (name) {
		case Icons.wallet:
			return <Wallet className={className} width={size} height={size} {...rest} />;

		case Icons.exit:
			return <Exit className={className} width={size} height={size} {...rest} />;

		case Icons.dock:
			return <Dock className={className} width={size} height={size} {...rest} />;

		case Icons.dock2:
			return <Dock2 className={className} width={size} height={size} {...rest} />;

		case Icons.card:
			return <Card className={className} width={size} height={size} {...rest} />;

		case Icons.card2:
			return <Card2 className={className} width={size} height={size} {...rest} />;

		case Icons.money:
			return <Money className={className} width={size} height={size} {...rest} />;

		case Icons.safe:
			return <Safe className={className} width={size} height={size} {...rest} />;

		case Icons.cart:
			return <Cart className={className} width={size} height={size} {...rest} />;

		case Icons.back:
			return <Back className={className} width={size} height={size} {...rest} />;

		case Icons.edit:
			return <Edit className={className} width={size} height={size} {...rest} />;

		case Icons.abort:
			return <Abort className={className} width={size} height={size} {...rest} />;

		case Icons.cross:
			return <Cross className={className} width={size} height={size} {...rest} />;

		default:
			return null;
	}
};
