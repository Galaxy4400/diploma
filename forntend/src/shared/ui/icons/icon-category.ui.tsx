import { SVGProps } from 'react';
import Expense from './svg/expense.svg?react';
import Swap from './svg/swap.svg?react';
import Income from './svg/income.svg?react';
import Wallet from './svg/wallet.svg?react';
import Cart from './svg/cart2.svg?react';
import Percent from './svg/percent.svg?react';
import { CategoryIcons } from '@/shared/types';

interface IconCategoryProps extends SVGProps<SVGSVGElement> {
	name?: CategoryIcons;
	size?: number;
}

export const IconCategory = ({ name, className, size = 36, ...rest }: IconCategoryProps) => {
	switch (name) {
		case CategoryIcons.expense:
			return <Expense className={className} width={size} height={size} {...rest} />;

		case CategoryIcons.swap:
			return <Swap className={className} width={size} height={size} {...rest} />;

		case CategoryIcons.income:
			return <Income className={className} width={size} height={size} {...rest} />;

		case CategoryIcons.wallet:
			return <Wallet className={className} width={size} height={size} {...rest} />;

		case CategoryIcons.cart:
			return <Cart className={className} width={size} height={size} {...rest} />;

		case CategoryIcons.percent:
			return <Percent className={className} width={size} height={size} {...rest} />;

		default:
			return null;
	}
};
