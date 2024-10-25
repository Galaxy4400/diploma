declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.svg?react' {
	const content: React.FC<React.SVGProps<SVGSVGElement>>;
	export default content;
}

declare type RootState = ReturnType<typeof import('../store').store.getState>;
declare type AppDispatch = typeof import('../store').store.dispatch;
