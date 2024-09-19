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
	settings() {
		return path.root.concat('user/edit');
	},
	page404() {
		return path.root.concat('404');
	},
	account: {
		root() {
			return path.root.concat('account');
		},
		id(id = ':id') {
			return path.account.root().concat('/', id);
		},
		create() {
			return path.account.root().concat('/create');
		},
		edit(id = ':id') {
			return path.account.id(id).concat('/edit');
		},
	},
	operation: {
		root() {
			return path.root.concat('operation');
		},
		id(id = ':id') {
			return path.operation.root().concat('/', id);
		},
		create() {
			return path.operation.root().concat('/create');
		},
	},
}