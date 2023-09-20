'use client'

// icons
import {
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiNestjs,
  SiDotnet,
  SiPython,
  SiTypescript
} from "react-icons/si";



// interfaces
interface AboutInformation {
  title: string
  info: Information[]
}

interface Information {
  title: string
  icons?: JSX.Element[]

  stage?: string
}

//  data
const aboutData: AboutInformation[] = [
  {
    title: 'Tecnolgias',
    info: [
      {
        title: 'Backend',
        icons: [
          <SiTypescript />,
          <SiNestjs />,
          <SiExpress />,
          <SiDotnet />,
          <SiPython />

        ],
      },
      {
        title: 'Frontend',
        icons: [
          <SiNextdotjs />,
          <FaReact />,
          <SiTailwindcss />
        ],
      },
    ],
  },
  {
    title: 'Experiência',
    info: [
      {
        title: 'Desenvolvedor Fullstack - Vision System',
        stage: '2021 - 2023',
      },
      {
        title: 'Freelancer',
        stage: '2020 - 2021',
      },
    ],
  },
  {
    title: 'Especializações',
    info: [
      {
        title: 'Bacharelado em Engenharia de Software - UNICID, SP',
        stage: '2025',
      },
      {
        title: 'Técnico Desenvolvimento Sistemas  - CEDUP, Chapecó, SC',
        stage: '2020',
      }
    ],
  },
];


import Person from "@/components/person/person";
import Circle from "@/components/circle/circle";
import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../../../public/utils/variant";
import CountUp from "react-countup";

const About = () => {

  const [index, setIndex] = useState(0)
  console.log(index)
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circle />
      
      {/*avatar image */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className=" hidden xl:flex absolute -left-[290px]">
        <Person />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        
        {/*text*/}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="h2"
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            <span className="text-teal-400">Evoluindo</span> junto com a tecnologia.
          </motion.h2>
          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:p-0"
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'>Desde meu primeiro contato com desenvolvimento de sistemas aos 17 anos, eu soube qual era a profissão em que eu queria trabalhar. A evolução constante e a mudança de tecnologias é o que me faz amar esta área.
          </motion.p>

          {/*counters*/}
          <motion.div
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'>

            <div className="flex flex-1 xl:gap-x-6">
              
              {/*experience*/}
              <div className="relative flex-1  after:h-full before:w-[1px] after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text4xl font-extrabold text-teal-400 mb-2">
                  <CountUp start={0} end={3} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]">  anos de experiência.</div>
              </div>

              {/* Projects */}
              <div className="relative flex-1  after:h-full before:w-[1px] after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text4xl font-semibold text-teal-400 mb-2">
                  <CountUp start={0} end={5} duration={4} /> +
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]">  Projetos construidos.</div>

              </div>
            </div>
          </motion.div>
        </div>

        {/*information*/}
        <motion.div
          className="flex flex-col w-full xl:max-w-[48%] h-[300px]"
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item: any, itemIndex: number) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index == itemIndex && 'text-teal-400 after:w-[100%] after:bg-teal-400 after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex)
                  }}
                >{item.title}</div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-6 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                
                {/*title*/}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div >{item.stage}</div>
                
                {/*icons*/}
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className="text-2xl text-white">
                      {icon}
                    </div>
                  })}
                </div>
              </div>
            })}
          </div>
        </motion.div>

      </div>
    </div >
  )
}

export default About;