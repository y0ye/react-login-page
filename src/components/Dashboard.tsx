import '/src/dashboard.css'
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

export function Dashboard() {
    return (
        <>
            <div className="messages-container">
                <div className="toolbar">
                    <h2>USERNAME</h2>
                    <ul>
                        <li><PersonIcon /> Profile</li>
                        <li><MailIcon /> Messages</li>
                        <li><SettingsIcon /> Settings</li>
                        <li><HelpIcon /> Support</li>
                    </ul>
                </div>
                <div className="friend-panel">

                    <div className='title-search'>
                        <h2>Friends</h2>
                        <input placeholder="Search" type="text"></input>
                    </div>

                    <div className='friend'>

                        <div className='friend-info'>
                            <div className='primary-info'>
                                <img src='src/img/pfp-placeholder.jpg'></img>
                                <div className='friend-name-user'>
                                    <h4>Dustin Blake</h4>
                                    <h5>@dustin.blake</h5>
                                </div>
                            </div>
                            <p className='last-message'>10 min ago</p>
                        </div>

                        <div className='recent-message'>
                            <p>Recent Message Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nihil voluptatum eius dignissimos
                                quas fugit
                            </p>
                        </div>

                    </div>

                </div>
                <div className="message-panel">
                    <div className='message-top'>
                        <div className='lhs-info'>
                            <div className='primary-info'>
                                <img src='src/img/pfp-placeholder.jpg'></img>
                                <div className='friend-name-user'>
                                    <h4>Dustin Blake</h4>
                                    <h5>@dustin.blake</h5>
                                </div>
                            </div>
                            <div className='buttons-call'>
                                <button>Call</button>
                                <button>Video Call</button>
                            </div>
                        </div>
                    </div>
                    <div className='message-middle'>
                        <div className='message-display'>
                            <div className='received-message'>
                                <div><p>Hey How are you!?</p></div>
                            </div>
                            <div className='sent-message'>
                                <div><p>Hey How are you!?</p></div>
                            </div>
                        </div>
                        <div className='message-bottom'>
                            <div className='text-field-message'><input type='text' placeholder='Enter Message'></input></div>
                            <div className='message-effects-submit'>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}