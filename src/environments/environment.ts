// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientSettings: {
    authority: 'https://rsu-iam.71dev.com/',
    client_id: 'rsu-staff-login-dev-test2',
    redirect_uri: 'http://localhost:4200/load',
    post_logout_redirect_uri: 'http://localhost:4200',
    response_type:"id_token token",
    scope:"openid profile school.read school.write address.write address.read course.write course.read application.read",
    filterProtocolClaims: true,
    loadUserInfo: true
},


};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
