const fakeUser = {
	id : 'fake:1'
};

export default class fbase {
	activateAuth() { // TODO: this is mess, need better wrapper of firebase to Promises
		console.log('activate auth');
		return new Promise((resolve, reject) => resolve(fakeUser));
	}

	// Redirects are not available in PhoneGap / Cordova
	login(method = 'facebook') {
		console.log('login');
		return new Promise((resolve, reject) => resolve(fakeUser));
	}

	logout() {
		console.log('logout');
		return new Promise((resolve, reject) => resolve());
	}
}
