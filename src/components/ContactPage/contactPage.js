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
                    <div className='contact-form'>
                    <form>
                        <div className='form-group'>
                            <input type="text" required="required" className='form-control' name='name'/>
                            <label className='form-label'>Your name</label>
                        </div>
                        <div className='form-group'>
                            <input type="text" required="required" className='form-control' name='email'/>
                            <label className='form-label'>Your email</label>
                        </div>
                        <div className='form-group'>
                            <input type="text" required="required" className='form-control' name='message'/>
                            <label className='form-label'>Your message</label>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact