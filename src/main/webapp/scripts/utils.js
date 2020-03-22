        function hideElement(element) {
	    element.style.display = 'none';
        }

	function showElement(element, style) {
	    var displayStyle = style ? style : 'block';
	    element.style.display = displayStyle;
	}
	
	function clearLoginError() {
	    document.querySelector('#login-error').innerHTML = '';
	}

        function clearRegisterResult() {
	    document.querySelector('#register-result').innerHTML = '';
	}

function init() {

	document.querySelector('#login-form-btn').addEventListener('click',
			onSessionInvalid);

	document.querySelector('#register-form-btn').addEventListener('click',
			showRegisterForm);

	document.querySelector('#login-btn').addEventListener('click', login);
	validateSession();
}
function validateSession() {
	onSessionInvalid();

	// The request parameters
	var url = './login';
	var req = JSON.stringify({});

	// display loading message
	showLoadingMessage('Validating session...');

	// make AJAX call
	ajax('GET', url, req,
	// session is still valid
	function(res) {
		var result = JSON.parse(res);

		if (result.status === 'OK') {
			// case2: session valid
			console.log('ok')
		}
	}, function() {
		// case1: session invalid
		console.log('session is invalid');
	});
}

function onSessionInvalid() {
	var loginForm = document.querySelector('#login-form');
	var registerForm = document.querySelector('#register-form');
	var itemNav = document.querySelector('#item-nav');
	var itemList = document.querySelector('#item-list');
	var avatar = document.querySelector('#avatar');
	var welcomeMsg = document.querySelector('#welcome-msg');
	var logoutBtn = document.querySelector('#logout-link');

	hideElement(itemNav);
	hideElement(itemList);
	hideElement(avatar);
	hideElement(logoutBtn);
	hideElement(welcomeMsg);
	hideElement(registerForm);

	clearLoginError();
	showElement(loginForm);
}

function login() {
	var username = document.querySelector('#username').value;
	var password = document.querySelector('#password').value;
	password = md5(username + md5(password));

	// The request parameters
	var url = './login';
	var req = JSON.stringify({
		user_id : username,
		password : password,
	});

	ajax('POST', url, req,
	// successful callback
	function(res) {
		var result = JSON.parse(res);

		// successfully logged in
		if (result.status === 'OK') {
			console.log(result);
		}
	},
	// error
	function() {
		showLoginError();
	});
}

function ajax(method, url, data, successCallback, errorCallback) {
	var xhr = new XMLHttpRequest();

	xhr.open(method, url, true);

	xhr.onload = function() {
		if (xhr.status === 200) {
			successCallback(xhr.responseText);
		} else {
			errorCallback();
		}
	};

	xhr.onerror = function() {
		console.error("The request couldn't be completed.");
		errorCallback();
	};

	if (data === null) {
		xhr.send();
	} else {
		xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
		xhr.send(data);
	}
}

function showRegisterForm() {
	var loginForm = document.querySelector('#login-form');
	var registerForm = document.querySelector('#register-form');
	var itemNav = document.querySelector('#item-nav');
	var itemList = document.querySelector('#item-list');
	var avatar = document.querySelector('#avatar');
	var welcomeMsg = document.querySelector('#welcome-msg');
	var logoutBtn = document.querySelector('#logout-link');

	hideElement(itemNav);
	hideElement(itemList);
	hideElement(avatar);
	hideElement(logoutBtn);
	hideElement(welcomeMsg);
	hideElement(loginForm);

	clearRegisterResult();
	showElement(registerForm);
}

init();
