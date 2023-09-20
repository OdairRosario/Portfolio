import React from 'react';


const UnderConstruction: React.FC = () => {
 

  return (
    <div className="select-none non-interactive pointer-events-none min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <img
        src={`${process.env.BASE_PATH}/under_construction.gif`}
        alt="Em Construção"
        className=" w-64 md:w-96 mix-blend-luminosity rounded-2xl"
      />
      <h1 className="mt-10 text-xl md:text-3xl text-white font-bold">
        Módulo em Construção!
      </h1>
      <p className="mt-4 text-md md:text-lg text-gray-400">
        Desculpe o incômodo, volte em breve.
      </p>
    </div>
  );
};

export default UnderConstruction;
