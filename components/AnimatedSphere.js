import React, { useEffect, useState } from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {

  const [sphereScale, setSphereScale] = useState(2.3);

  useEffect(() => {
    function handleResize() {
        if (window.innerWidth < 1300){
            setSphereScale(window.innerWidth / 500);
        }
    }
    window.addEventListener('resize', handleResize)
})



  return (
    <Sphere visible args={[1, 100, 200]} scale={sphereScale}>
      <MeshDistortMaterial color='#3020F2' attach='material' distort={.4} roughness='1'/>
    </Sphere>
  )
}

export default AnimatedSphere