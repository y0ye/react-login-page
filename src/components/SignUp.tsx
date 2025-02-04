//Componentize the signup
//I want to make App.tsx look clean

export function SignUp() {
    return (
        <div className='signup'>
            <h6>Need to Signup?</h6>
            <a href='https://github.com'><img src='src/img/github-logo.png' /></a>
            <a href='https://google.com'><img src='src/img/google-logo.png' /></a>
        </div>
    );
}