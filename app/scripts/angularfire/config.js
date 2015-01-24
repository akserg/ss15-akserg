angular.module('firebase.config', [])
  .constant('FBURL', 'https://virtualboard.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','github'])

  .constant('loginRedirectPath', '/login');
