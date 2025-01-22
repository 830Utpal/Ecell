import React from 'react';

const SecondPage = () => {
  return (
    <div className="bg-pink-500 min-h-screen flex items-center justify-center p-8 relative flex-col sm:flex-row border-black">
      
      <div className="absolute sm:left-32 sm:top-1/3 left-12 top-16">
        <div
          className="bg-black w-0 h-0 border-l-[100px] border-r-[100px] border-b-[200px] border-l-transparent border-r-transparent border-b-white"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        >
          <img
            src="" 
            alt="Your Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      
      <div className="flex justify-center items-center absolute sm:top-16 top-32 sm:relative">
        <div className="rounded-full border-4 border-white bg-black w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center overflow-hidden">
          <img 
            src="https://ecellmnnita.netlify.app/static/media/logo1.aa59d10dce000c1b6a45.png" 
            alt="E-Cell Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      
      <div className="absolute sm:right-32 sm:top-1/3 right-12 top-1/4 bg-black text-white w-64 h-32 p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold">Utpal Yadav</h2>
        <p className="text-lg">20234174</p>
        <p className="text-lg">
          <a 
            href="https://www.instagram.com/utpal_y830" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
