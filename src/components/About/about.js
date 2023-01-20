import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import './about.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import { TextDecrypt } from '../TextDecrypt/textDecrypt';
import portraitPhoto from '../../assets/images/Me.JPG';

const About = () => {
    const intro1 = "Hi there! I'm Sean, currently a Year 1 undergraduate studying at Singapore Management University majoring in Information Systems. I previously interned at Foodpanda as a Commercial Analyst where I drove the creation of interactive dashboards to provide insights and optimize promotion strategy."
    const intro2 = "In my free time, I like to increase my technical knowledge through personal projects and participating in hackathons. I’m always down for hearing about new projects, so feel free to drop me a line."
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
        <div className='container-about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't',  ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <div className='intro'>
                    <p>
                        {`${intro1}`}
                        <TextDecrypt text={`${intro2}`}/>
                    </p>
                    <Link to="/contact" className='flat-button'>
                        Send me a message
                        <FontAwesomeIcon icon={faChevronRight} color="#181818" className='rightA'/>
                        </Link>
                </div>
            </div>
            <div>
                <img src={portraitPhoto} alt='Portrait Photo' className='portrait'/>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About