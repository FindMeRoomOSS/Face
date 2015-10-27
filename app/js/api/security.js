const tokenKey = 'token';

export default class security {
	activateAuth() {
		console.log('activate auth');
		let token = window.localStorage.getItem(tokenKey);
		return new Promise((resolve, reject) => {
			if (token === null) {
				resolve(); // TODO: it could be reject
			} else {
				let userObject = {
					id: token
				};
				console.log(token);
				resolve(userObject);
			}
		});
	}

	// TODO: note that redirects are not available in PhoneGap / Cordova

	login(username, password, email) {
		console.log('login');
		let token = 'faketoken'; // TODO: need call to server
		window.localStorage.setItem(tokenKey, token);
		let userObject = {
			id: token
		};
		return new Promise((resolve, reject) => resolve(userObject));
	}

	logout() {
		console.log('logout');
		window.localStorage.removeItem(tokenKey);
		return new Promise((resolve, reject) => resolve());
	}
}
