import { CategoryIcons, Icons } from '@/shared/types';
import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: Icons;
	size?: number;
}

export interface IconCategoryProps extends SVGProps<SVGSVGElement> {
	name: CategoryIcons;
	size?: number;
}
