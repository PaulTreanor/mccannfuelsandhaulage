import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow dark:bg-stone-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p
          className="text-stone-600 sm:text-center"
        >
          McCann Fuels and Haulage {new Date().getFullYear()}
        </p>
        </div>
    </footer>
  );
};

export default Footer;
