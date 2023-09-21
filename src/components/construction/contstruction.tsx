'use client'

import { NEXT_PUBLIC_BASE_PATH } from '@/utils/constants';
import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from '../../utils/variant';

const UnderConstruction: React.FC = () => {
  return (
    <motion.div
      className="select-none non-interactive pointer-events-none min-h-screen flex flex-col items-center justify-center bg-gray-900"
      variants={fadeIn('left', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <motion.img
        src={`${NEXT_PUBLIC_BASE_PATH}under_construction.gif`}
        alt="Em Construção"
        className=" w-64 md:w-96 mix-blend-luminosity rounded-2xl"
        variants={fadeIn('right', 0.9)}
        initial='hidden'
        animate='show'
        exit='hidden'
      />
      <motion.h1
        className="mt-10 text-xl md:text-3xl text-white font-bold"
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'>
        Módulo em Construção!

      </motion.h1>
      <motion.p
        className="mt-4 text-md md:text-lg text-gray-400"
        variants={fadeIn('right', 0.9)}
        initial='hidden'
        animate='show'
        exit='hidden'>
        Desculpe o incômodo, volte em breve.
      </motion.p>
    </motion.div>
  );
};

export default UnderConstruction;
