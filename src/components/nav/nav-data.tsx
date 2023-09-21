import { NavData } from '@/interfaces/nav-data.interface';
import {
    HiHome,
    HiUser,
    HiRectangleGroup,
  } from 'react-icons/hi2';

  
export const navData: NavData[] = [
    {
      name: 'Início',
      path: '/',
      icon: <HiHome />
    },
    {
      name: 'Sobre',
      path: '/about',
      icon: <HiUser />
    },
    {
      name: 'Projetos',
      path: '/projects',
      icon: <HiRectangleGroup />
    },
  ];