import { useEffect, useState, useRef } from 'react'
import HALO from 'vanta/dist/vanta.halo.min'
import * as THREE from "three";

const Halo = () => {
     const [vantaEffect, setVantaEffect] = useState(0);
     const vantaRef = useRef(null);
 
     useEffect(() => {
         if (!vantaEffect) {
           setVantaEffect(
             HALO({
               el: vantaRef.current,
               THREE: THREE,
               mouseControls: true,
               touchControls: true,
               gyroControls: false,
               forceAnimate: true,
               minHeight: 1000,
               minWidth: 1000,
               scaleMobile: 1.0,
               color1: "#ff0000",
               color2: "#00ff00",
               size: 4.0,
               xOffset: 0.35,
               yOffset: 0.40,
               backgroundColor: "#181818"
             })
           );
         }
         return () => {
           if (vantaEffect) vantaEffect.destroy();
         };
       }, [vantaEffect]);
    
    return (
        <div ref={vantaRef} className='halo-background'>
        <p style={{ color: "#68e2fa", background: "#18181818"}}></p>
        </div>
    )
}

export default Halo