export const config = {

    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-west-2:a0d91d71-ebfb-49de-8a1d-72e0d67362de',

    
    // REQUIRED - Amazon Cognito Region
    region: 'us-west-2',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-west-2_vrGN73trt',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '7u9sv3qmv6mbiill0c4q5b7nbd',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,
    
    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    cookieStorage: {
    // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        domain: '.yourdomain.com',
    // OPTIONAL - Cookie path
        path: '/',
    // OPTIONAL - Cookie expiration in days
        expires: 7,
    // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        sameSite: "strict",
    // OPTIONAL - Cookie secure flag
    // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        secure: true
    },
    
    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',

     // OPTIONAL - Hosted UI configuration
    oauth: {
        domain: 'https://schollortho.auth.us-west-2.amazoncognito.com',
        scope: ['phone', 'email', 'openid'],
        redirectSignIn: 'http://localhost:3000/,https://schollortho.com/',
        redirectSignOut: 'http://localhost:3000/,https://schollortho.com/',
        responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    }
}