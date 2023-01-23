import './contactPage.scss';
import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../Animations/AnimatedLetters/animatedLetters.js';
import emailjs from '@emailjs/browser';

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

    const refform = useRef()

    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                '<YOUR_SERVICE_ID', 
                '<TEMPLATE_ID>', 
                refform.current, 
                '<YOUR_API_KEY')
            .then(
                (result) => {
                alert(`Message successfully sent! ${result.text}`)
                window.location.reload(false)
            }, (error) => {
                alert(`Message failed to send: ${error.text}. Please try again.`)
            });
    }

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
                    <form ref={refform} onSubmit={sendEmail}>
                        <div className='form-group'>
                            <input type="text" placeholder=" " required="required" className='form-control' name='name'/>
                            <label className='form-label'>Your name</label>
                        </div>
                        <div className='form-group'>
                            <input type="email" placeholder=" " required="required" className='form-control' name='email'/>
                            <label className='form-label'>Your email</label>
                        </div>
                        <div className='form-group'>
                            <input type="text" placeholder=" " required="required" className='form-control' name='message'/>
                            <label className='form-label'>Your message</label>
                        </div>
                        &nbsp; <br/>
                        <button type='submit' className='submit-button' name='submit'>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"/>
                            </svg>
                        Send message
                        </button>
                    </form>
                </div>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact