export const getAvatarPlug = (string, color = 'ffffff', background = '9b5de5') => {
	const firstLetter = [...string][0].toUpperCase();

	return `https://ui-avatars.com/api/?name=${firstLetter}&background=${background}&color=${color}`;
};