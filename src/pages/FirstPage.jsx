import React, { useState } from 'react';

const FirstPage = () => {
  const [colors, setColors] = useState(Array(9).fill('bg-blue-500'));

  const handleSquareClick = (index) => {
    const updatedColors = [...colors];
    updatedColors[index] = 'bg-red-500';
    setColors(updatedColors);

    
    if (index === 8) {
      setTimeout(() => {
        let sequenceIndex = 0;
        const interval = setInterval(() => {
          if (sequenceIndex < updatedColors.length) {
            updatedColors[sequenceIndex] = 'bg-blue-500';
            setColors([...updatedColors]);
            sequenceIndex++;
          } else {
            clearInterval(interval);
          }
        }, 300);
      }, 300);
    }
  };

  return (
    <div className="p-8 space-y-8 md:space-y-0">
     
      <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        
        <div className="bg-gray-200 rounded-lg p-4 shadow-lg w-full lg:w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h2 className="text-2xl font-bold">Welcome to E-Cell</h2>
          <p className="text-gray-600">Empowering Entrepreneurs<br/>E-Cell MNNIT is a vibrant student-run organization that fosters innovation, entrepreneurship, and startup culture within the MNNIT community.<br/>With a focus on providing guidance and resources, E-Cell MNNIT supports students in turning their business ideas into successful startups.<br/>The goal of E-Cell MNNIT is to create a culture of innovation by empowering the youth with the knowledge and skills necessary for building successful ventures.</p>
        </div>

       
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full lg:w-2/3">
         
          <div className="bg-gray-200 rounded-lg p-4 shadow-lg flex items-center justify-center w-full md:w-1/2">
            <img src="https://media.glassdoor.com/sqll/3441039/e-cell-mnnit-squarelogo-1663839558030.png" alt="E-Cell Logo" className="w-full h-full object-cover" />
          </div>

          
          <div className="bg-gray-200 rounded-lg p-4 shadow-lg grid grid-cols-3 gap-2 w-full md:w-1/2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`${color} w-16 h-16 rounded-lg cursor-pointer`}
                onClick={() => handleSquareClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
