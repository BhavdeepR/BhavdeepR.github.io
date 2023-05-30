import React from 'react';
import weatherApp from '../assets/portfolio/weather-app.png'
import portfolio from '../assets/portfolio/portfolio.png'
const Portfolio = () => {

    const portfolios = [
      {
        id: 1,
        src: weatherApp,
        code: 'https://github.com/BhavdeepR/weather-app',
        visit: 'https://BhavdeepR.github.io/weather-app',
      }
    ];
  
    return (
      <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
              Portfolio
            </p>
            <p className='py-8'>
              Checkout some of my work right here
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div className="shadow-md shadow-gray-500 rounded-lg">
              <img src={portfolio} alt="" className='rounded-md duration-300 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <a href='https://github.com/BhavdeepR/portfolio' 
                target='_blank' 
                className='flex items-center justify-center'
                rel="noreferrer">
                  <button className='w-full px-6 py-3 m-4 duration 200 hover:scale-105'>
                    Code
                  </button>
                </a>
              </div>
            </div>
  
            {portfolios.map(({ id, src, code, visit }) => (
              <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                <img src={src} alt="" className='rounded-md duration-300 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <a href={visit} target='_blank' className='w-1/2 flex items-center justify-center' rel="noreferrer">
                    <button className='px-6 py-3 m-4 duration 200 hover:scale-105'>
                      Visit
                    </button>
                  </a>
                  <a href={code} target='_blank' className='w-1/2 flex items-center justify-center' rel="noreferrer">
                    <button className='px-6 py-3 m-4 duration 200 hover:scale-105'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Portfolio