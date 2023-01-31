import { useEffect, useState, useRef } from 'react'
import HALO from 'vanta/dist/vanta.halo.min'
import * as THREE from "three";
import "./halo.scss";

const Halo = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    let haloSize = window.innerWidth > 430 ? 4.0 : 1.2;
    let offSet = window.innerWidth > 430 ? 0.35 : -0.1;
    
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
               size: haloSize,
               xOffset: offSet,
               yOffset: 0.40,
               backgroundColor: "#181818",
               amplitudeFactor: 0,
             })
           );
         }
         return () => {
           if (vantaEffect) vantaEffect.destroy();
         };
       }, [vantaEffect, offSet, haloSize]);
    
    return (
        <div ref={vantaRef} className='halo-background'></div>
    )
}

export default Halo