// import {React, useEffect, useRef} from 'react'
// import planeScene from '../assets/3d/plane.glb';
// import { useGLTF, useAnimations } from '@react-three/drei';

// const Plane = ({isRotating, ...props}) => {
//   const ref = useRef();
//     const {scene, animations} = useGLTF(planeScene);
//     const {actions} = useAnimations(animations, ref);

//     useEffect(()=>{
//       if(isRotating){
//         actions['Take 001'].play();
//       }else{
//         actions['Take 001'].stop();
//       }
//     })
//   return (
//     <mesh {...props} ref={ref}>
//         <primitive object={scene} />
//     </mesh>
//   )
// }

// export default Plane
// import React, { useEffect, useRef, useState } from 'react';
// import planeScene from '../assets/3d/plane.glb';
// import { useGLTF, useAnimations, Text, Billboard } from '@react-three/drei';

// const Plane = ({ isRotating, ...props }) => {
//   const ref = useRef();
//   const { scene, animations } = useGLTF(planeScene);
//   const { actions } = useAnimations(animations, ref);
//   const [hasRotatedOnce, setHasRotatedOnce] = useState(false);
//   const [arrowText, setArrowText] = useState('>>');

//   useEffect(() => {
//     if (isRotating && !hasRotatedOnce) {
//       setHasRotatedOnce(true);
//     }

//     if (isRotating) {
//       actions['Take 001']?.play();
//     } else {
//       actions['Take 001']?.stop();
//     }
//   }, [isRotating, actions, hasRotatedOnce]);

//   // Animate the arrows
//   useEffect(() => {
//     // const arrowFrames = ['>', '>>', '>>>', '>>>>'];
//     const arrowFrames = ['<', '<<', '<<<', '<<<<'];
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % arrowFrames.length;
//       setArrowText(arrowFrames[index]);
//     }, 300); // every 300ms

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <group {...props} ref={ref}>
//       <primitive object={scene} />
//       {!hasRotatedOnce && (
//         <Billboard position={[0, 0.8, 0]}>
//           <Text
//             font="/font/Poppins/Poppins-Bold.ttf" // optional
//             fontSize={0.25}
//             color="#000000"
            
//             anchorX="center"
//             anchorY="middle"
//           >
//             {`${arrowText} Drag to Explore ${arrowText}`}
//           </Text>
//         </Billboard>
//       )}
//     </group>
//   );
// };

// export default Plane;

import React, { useEffect, useRef, useState } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useGLTF, useAnimations, Text, Billboard } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const FloatingGlowingText = () => {
  const textRef = useRef();
  const [arrowText, setArrowText] = useState('<<');
  const [elapsed, setElapsed] = useState(0);

  // Floating animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (textRef.current) {
      textRef.current.position.z =  Math.sin(t * 6) * 0.05;
      
    }
    setElapsed(t);
  });

  // Arrow animation logic (moving right-to-left feel)
  useEffect(() => {
    // const frames = ['<','<<','<<<','<<<<'];
    const frames = ['<','<<','<<<','<<<<','<<<','<<'];

    let i = 0;
    const interval = setInterval(() => {
      setArrowText(frames[i]);
      i = (i + 1) % frames.length;
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <Billboard position={[0,-0.5,0]}>
      <Text
        // ref={textRef}
        font="/font/Poppins/Poppins-Bold.ttf"
        fontSize={0.25}
        color="black"
        anchorX="center"
        anchorY="middle"
        material-toneMapped={true}
        position={[0,0.1,0]}
      >
        {`${arrowText}`}
      </Text>
      <Text
        ref={textRef}
        font="/font/Poppins/Poppins-Bold.ttf"
        fontSize={0.15}
        color="black"
        anchorX="center"
        anchorY="middle"
        material-toneMapped={true}
        position={[0,-0.1 ,0]}
      >
        Let's Fly & Explore..!
      </Text>
    </Billboard>
  );
};

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);
  const [hasRotatedOnce, setHasRotatedOnce] = useState(false);

  useEffect(() => {
    if (isRotating && !hasRotatedOnce) {
      setHasRotatedOnce(true);
    }

    if (isRotating) {
      actions['Take 001']?.play();
    } else {
      actions['Take 001']?.stop();
    }
  }, [isRotating, actions, hasRotatedOnce]);

  return (
    <group {...props} ref={ref}>
      <primitive object={scene} />
      {!hasRotatedOnce && <FloatingGlowingText />}
    </group>
  );
};

export default Plane;

