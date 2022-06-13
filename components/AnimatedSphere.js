import React, { useEffect, useState } from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {

  const [dark, setDark] = useState(false);

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.3}>
      <MeshDistortMaterial color={'#FF0000'} attach='material' distort={.4} roughness='1'/>
    </Sphere>
  )
}

export default AnimatedSphere