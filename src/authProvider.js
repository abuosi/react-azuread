import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const tenantId = process.env.REACT_APP_TENANT_ID;
const clientId = process.env.REACT_APP_CLIENT_ID;

// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/' + tenantId,
    clientId: clientId,
    postLogoutRedirectUri: window.location.origin,
    redirectUri: 'http://localhost:3000'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
export const authenticationParameters = {
    scopes: [ 
    `${clientId}/.default`
    ]
}

// Options
const options = {
  loginType: LoginType.Redirect, //LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)