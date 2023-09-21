import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import React, { useCallback } from 'react'
import {  Engine } from 'tsparticles-engine'
import { ParticlesOptions } from './particles-options'


const ParticlesBlock: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        <Particles
            className='w-full h-full absolute translate-z-0'
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesOptions} />
    )
}

export default ParticlesBlock