import AnimatedLetters from '../Animations/AnimatedLetters/animatedLetters';
import Loader from 'react-loaders';
import './about.scss';
import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { TextDecrypt } from '../Animations/TextDecrypt/textDecrypt';
import 'react-vertical-timeline-component/style.min.css';
import { workExperience } from "./experience.js";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

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
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Work experience".split("")}
                        idx={15}
                    />
                </h1>
            </div>
            <div className='timeline'>
                <VerticalTimeline>
                    {
                    workExperience.map(element => {
                        return (
                            <VerticalTimelineElement
                                key={ element.id }
                                className="vertical-timeline-element--work"
                                contentStyle={element.contentStyle}
                                contentArrowStyle={element.contentArrowStyle}
                                iconStyle={element.iconStyle}
                                icon={element.icon}
                            >
                            {/* <h1 className="vertical-timeline-element-title">{element.title}</h1> */}
                            <TextDecrypt text={element.title}/>
                            <h2 className="vertical-timeline-element-subtitle">{element.company}</h2>
                            <ul>
                                {element.points.map((point, index) => (
                                    <li key={`experience-points-${index}`}
                                        className='experience-points'>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <p className='experience-date'>{element.date}</p>
                            </VerticalTimelineElement>
                        )
                    })
                    }
                </VerticalTimeline>
        </div>
        </div>
        </>
    )
}

export default About