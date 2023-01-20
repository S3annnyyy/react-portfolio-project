import { NavLink } from 'react-router-dom'
import './sideBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const SideBar = () => {
    const [showNav, setShowNav] = useState(false);


    return (
        <div className='nav-bar'>
        <a href='javascript:void(0)' className='toggle-button' onClick={() => setShowNav(true)}>
            <span className='bar'></span>
            <span className='bar2'></span>
            <span className='bar'></span>
        </a>
        <nav className={showNav ? 'mobile-show': ''} onClick={() => setShowNav(false)}>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link"to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link"to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/seanyckang/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/S3annnyyy/'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://medium.com/@seanyckang'>
                    <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default SideBar