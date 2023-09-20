import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import React, { useCallback } from 'react'
import { Background, Engine, ISize, Modes, RecursivePartial } from 'tsparticles-engine'
import { color } from 'framer-motion'
import { M_PLUS_1 } from 'next/font/google'


const ParticlesBlock = () => {
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
            options={{
                "particles": {
                  "number": {
                    "value": 90,
                    "density": {
                      "enable": true,
                      "value_area": 900
                    }
                  },
                  "color": {
                    "value": ["#325358","#C0FFEE","#31CCEC","#6A1A78"]
                  },
                  "shape": {
                    "type": ["circle","triangle","edge","polygon"],
                    "stroke": {
                      "width": 0,
                      "color":"#325358"
                     
                    },
                    "polygon": {
                      "nb_sides": 6
                    }
                  },
                  "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3.5,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#C0FFEE",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "right",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": true
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": ["bubble","grab"]
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 140,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 100,
                      "size": 5,
                      "duration": 5,
                      "opacity": 1,
                      "speed": 0.1
                    },
                    "push": {
                      "particles_nb": 4
                    }
                  }
                },
                "retina_detect": true
              }} />



    )

}

export default ParticlesBlock