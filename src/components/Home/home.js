import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Loader } from 'react-loaders'
import LogoTitle from '../../assets/images/s-logo.png';
import AnimatedLetters from '../AnimatedLetters/animatedLetters.js';
import './home.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const introArray = "Hi there!".split()
    const nameArray = ['e', 'a', 'n', '!']
    const jobArray = ['F', 'r', 'e', 's', 'h', 'm', 'a', 'n', ' ', 'a', 't', ' ', 'S', 'M', 'U', '.']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
            <div className="container home-page">
                {/* Contains animated text on left side of home screen */}
                <div className="text-zone"> 
                    <h1>
                         <AnimatedLetters letterClass={`${letterClass} _12`}
                        strArray={introArray}
                        idx={15} />
                    <br/> 
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                        <br/>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
                    </h1>
                    <h2>Information Systems Major / Tech & AI Enthusiast / Author</h2>
                    <Link to="/projects" className='flat-button'>VIEW MY PROJECTS</Link>
                </div>
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default Home