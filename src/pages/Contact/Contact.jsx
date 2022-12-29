import { Card } from '@material-ui/core';
import { Link } from "react-router-dom";
import './Contact.css';
export const Contact = () => {
    const getSessionInfo = JSON.parse(localStorage.getItem('sessionInfo'));
    return (
        <div className='contact-container'>
            <header className='header'>
                <nav>
                    <ul>
                        <li><Link to="/dashboard" className='link' component="button" variant="body2">Dashboard</Link></li>
                        <li><Link to="/contact" className='link active' component="button" variant="body2">Contact Info</Link></li>
                    </ul>
                </nav>
                <div className='profile-info'>{getSessionInfo.name} |&nbsp;<Link to="/signin" className='link'>Logout</Link></div>
            </header>
            <div className='contact-content'>
                <Card className='contact-card'>
                    <h4>Banzeaen</h4>
                    <p><address> 3rd Floor, Sind layout</address></p>
                    <p><address>New delhi, contact info - 9856323650.</address></p>
                </Card>
            </div>
        </div>
    )
}