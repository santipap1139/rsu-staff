export const environment = {
  production: true,
  clientSettings: {
    authority: 'https://rsu-iam.71dev.com/',
    client_id: 'rsu-staff-login-product-test2',
    redirect_uri: 'http://rsu-staff.giftver.com/load',
    post_logout_redirect_uri: 'http://rsu-staff.giftver.com',
    response_type:"id_token token",
    scope:"openid profile school.read school.write address.write address.read course.write course.read application.read",
    filterProtocolClaims: true,
    loadUserInfo: true
  }

};
