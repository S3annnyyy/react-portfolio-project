import './contactPage.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { TextDecrypt } from '../TextDecrypt/textDecrypt';
import AnimatedLetters from '../AnimatedLetters/animatedLetters.js';

const Contact = () => {

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
            <div className='container-contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'a', 'y', ' ', 'h',  'e', 'l', 'l', 'o']}
                            idx={15}
                        />
                    </h1>
                    <div className='divider'></div>
                </div>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li>
                                <input type="text" name="name" placeholder="Your name" required/>
                            </li>
                            <li>
                                <input type="email" name="email" placeholder="Your email" required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder='Say Hello!'required />
                            </li>
                            <li>
                                <input type="submit" className='submit-button' value="Send message" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact