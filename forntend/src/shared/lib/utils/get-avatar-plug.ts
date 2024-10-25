import { URL } from 'shared/types';

export const getAvatarPlug = (string: string, color = 'ffffff', background = '9b5de5'): URL | null => {
	if (!string) return null;

	const firstLetter = [...string][0].toUpperCase();

	return `https://ui-avatars.com/api/?name=${firstLetter}&background=${background}&color=${color}`;
};
