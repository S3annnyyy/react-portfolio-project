import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import './about.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJsSquare, faAngular, faHtml5, faReact, faCss3 } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
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
                    <p>Intro 1</p>
                    <p>Intro 2</p>
                    <p>Intro 3</p>
                </div>
            </div>

            {/* <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'><FontAwesomeIcon icon={faAngular} color="#DD0031"/></div>
                    <div className='face2'><FontAwesomeIcon icon={faHtml5} color="#F06529"/></div>
                    <div className='face3'><FontAwesomeIcon icon={faCss3} color="#28A4D9"/></div>
                    <div className='face4'><FontAwesomeIcon icon={faReact} color="#5ED4F4"/></div>
                    <div className='face5'><FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/></div>
                    <div className='face6'><FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/></div>
                </div>
            </div> */}
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About