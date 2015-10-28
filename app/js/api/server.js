const tokenKey = 'token';

export default class server {
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

	queryRooms() {
		console.log('query rooms');
		let many = [
			{
				'availableForMinutes':600,
				'availableFrom':'2015-10-27T14:36:41.693Z',
				'id':'conferenceroom-scs-atrium@a.com',
				'name':'CONFERENCEROOM-SCS-ATRIUM (A-Americas,exgen1)'
			},
			{
				'availableForMinutes':600,
				'availableFrom':'2015-10-27T14:36:41.699Z',
				'id':'conferenceroom-scs-avogadro@a.com',
				'name':'CONFERENCEROOM-SCS-AVOGADRO (A-Americas,exgen1)'
			},
			{
				'availableForMinutes':23,
				'availableFrom':'2015-10-27T14:36:41.700Z',
				'id':'conferenceroom-scs-babbage@a.com',
				'name':'CONFERENCEROOM-SCS-BABBAGE (A-Americas,exgen1)'
			},
			{
				'availableForMinutes':516,
				'availableFrom':'2015-10-27T16:00:00.000Z',
				'id':'conferenceroom-scs-bacon@a.com',
				'name':'CONFERENCEROOM-SCS-BACON (A-Americas,exgen1)'
			}];
		return new Promise((resolve, reject) => resolve(many));
	}

	reserveRoom(id) {
		return new Promise((resolve, reject) => resolve(id));
	}
}
