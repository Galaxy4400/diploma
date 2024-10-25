import { ID } from '@/shared/types';

export const path = {
	root: '/',
	home() {
		return path.root;
	},
	login() {
		return path.root.concat('login');
	},
	register() {
		return path.root.concat('register');
	},
	history() {
		return path.root.concat('history');
	},
	analytics() {
		return path.root.concat('analytics');
	},
	settings() {
		return path.root.concat('user/edit');
	},
	page404() {
		return path.root.concat('404');
	},
	others() {
		return path.root.concat('*');
	},
	account: {
		root() {
			return path.root.concat('account');
		},
		id(id: ID = ':id') {
			return path.account.root().concat('/', `${id}`);
		},
		create() {
			return path.account.root().concat('/create');
		},
		edit(id: ID = ':id') {
			return path.account.id(id).concat('/edit');
		},
	},
	operation: {
		root() {
			return path.root.concat('operation');
		},
		id(id: ID = ':id') {
			return path.operation.root().concat('/', `${id}`);
		},
		create() {
			return path.operation.root().concat('/create');
		},
	},
	category: {
		root() {
			return path.root.concat('category');
		},
		id(id: ID = ':id') {
			return path.category.root().concat('/', `${id}`);
		},
		create() {
			return path.category.root().concat('/create');
		},
		edit(id: ID = ':id') {
			return path.category.id(id).concat('/edit');
		},
	},
};
