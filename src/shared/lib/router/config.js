export const pathKey = {
	root: '/',
	home() {
		return pathKey.root;
	},
	login() {
		return pathKey.root.concat('login');
	},
	register() {
		return pathKey.root.concat('register');
	},
	settings() {
		return pathKey.root.concat('user/edit');
	},
	page404() {
		return pathKey.root.concat('404');
	},
	account: {
		root() {
			return pathKey.root.concat('account');
		},
		id(id = ':id') {
			return pathKey.account.root().concat('/', id);
		},
		create() {
			return pathKey.account.root().concat('/create');
		},
		edit(id = ':id') {
			return pathKey.account.root().concat('/', id, '/edit');
		},
	},
}
