import { Auth, Amplify } from 'aws-amplify';
// import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

Amplify.configure({
    Auth: {
      identityPoolId: '729894398568-3mtkm1bb6dq34v2p3j8hdaa12q3ppksu.apps.googleusercontent.com',
      region: 'us-west-2',
      userPoolId: 'us-west-2_vrGN73trt',
      userPoolWebClientId: '7u9sv3qmv6mbiill0c4q5b7nbd',
      identityProvider: 'google',
      authenticationFlowType: 'USER_PASSWORD_AUTH',
      oauth: {
          domain: 'your_cognito_domain',
          scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
          redirectSignIn: 'http://localhost:3000/',
          redirectSignOut: 'http://localhost:3000/',
          responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
    },
  });

  async function login() {
    debugger;
    try {
      console.log('Starting login process...');
      const session = await Auth.federatedSignIn({ provider: 'Google' });
      console.log('User logged in: ', session);
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  }

const Login = (props) => {


    return (
        <main>
            <div id='login-wrapper'>
                <button onClick={() => window.location.replace(process.env.AWS_COGNITO_LOGIN_URI || 'https://schollortho.auth.us-west-2.amazoncognito.com/login?client_id=7u9sv3qmv6mbiill0c4q5b7nbd&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000')}>Login</button>
                <button onClick={() => login()}>Login</button>
            </div>
        </main>
    )
}

export default Login;