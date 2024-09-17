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
			return path.account.root().concat('/', id, '/edit');
		},
	},
}
