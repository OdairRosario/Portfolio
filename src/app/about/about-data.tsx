// icons
import { AboutInformation } from "@/interfaces/about-Information.interface";
import {
  FaReact,
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

export const aboutData: AboutInformation[] = [
  {
    title: 'Tecnolgias',
    info: [
      {
        title: 'Backend',
        icons: [
          <SiTypescript key="typescript" />,
          <SiNestjs key="nestjs" />,
          <SiExpress key="express" />,
          <SiDotnet key="dotnet" />,
          <SiPython key="python" />

        ],
      },
      {
        title: 'Frontend',
        icons: [
          <SiNextdotjs key="nextjs" />,
          <FaReact key="react" />,
          <SiTailwindcss key="tailwindcss" />
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