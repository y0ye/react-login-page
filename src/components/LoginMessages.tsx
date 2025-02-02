export function LoginMessages() {
    return (
        <div className='right-container'>
            <div className='message-missed'>
                <h6>See what you missed!</h6>
                <img src='./message_placeholder.webp' />
            </div>

            <div className='message-connect'>
                <h6>Connect with others!</h6>
                <img id='connect' src='./connect.webp' />
            </div>
        </div>
    );
}