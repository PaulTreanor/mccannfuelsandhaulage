import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p
          className="text-sm text-gray-500 sm:text-center"
        >
          McCann Fuels and Haulage 2020
        </p>
        </div>
    </footer>
  );
};

export default Footer;
