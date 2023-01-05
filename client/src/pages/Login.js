const googleAuth = async () => {
    window.open(process.env.BACKEND_URL + '/auth/google/callback', '_self');
  }

const Login = (props) => {


    return (
        <main>
            <div id='login-wrapper'>
                <button onClick={googleAuth}>Login with Google</button>
            </div>
        </main>
    )
}

export default Login;