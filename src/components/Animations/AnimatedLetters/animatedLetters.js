// This component allows every single letter animation to be reused on every single page
// array of letters to animate parsed in and this function will return animated letters
import './animatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters