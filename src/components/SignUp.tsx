//Componentize the signup
//I want to make App.tsx look clean

export function SignUp() {
    return (
        <div className='signup'>
            <h6>Need to Signup?</h6>
            <a href='https://github.com'><img src='/public/github-logo.png' /></a>
            <a href='https://google.com'><img src='/public/google-logo.png' /></a>
        </div>
    );
}