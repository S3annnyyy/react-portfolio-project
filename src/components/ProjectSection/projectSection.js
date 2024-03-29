import { useState, useEffect, React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AnimatedLetters from '../Animations/AnimatedLetters/animatedLetters.js';
import "./projectSection.scss";
import { projectData } from './projectData.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Loader } from 'react-loaders';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
        ]
      };

    return (
        <div className="container project-page">
            <div className="text-zoneP">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e',  'c', 't', 's']}
                        idx={15}
                    />
                </h1>
            </div>
            <div className='carousel'>
            <Slider {...settings}>
                {projectData.map((item) => (
                    <div className='card'>
                        <div className='card-top'>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                        <div className='card-bottom'>
                            <p className='desc'>{item.description}</p>
                            <a href={item.urlLink} className="button-link" target="_blank" rel="noreferrer">
                                View Project
                                <FontAwesomeIcon icon={faArrowRight} color="#181818" className='i'/>
                            </a>
                            <img src={item.stack} alt={item.title} className='stack'/>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    )
}

export default Projects