import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                I am Junior year student studying at San Jose State University.
                I have taken core CS classes such Data Structures and Algorithms and
                Object Oriented Programming. I have also sharpened my problem-solving ability 
                through rigorous coursework in Physics and Mathematics.


            </p>

            <br />
            <p className="text-xl">
                Additionally I have expanded my skillset through projects outside of class.
                As a full stack developer, I have extensive experience and proficiency in
                MongoDB, Node.js, JavaScript, React, and Tailwind CSS. With my skillset,
                I possess the versatility to handle both frontend and backend development
                tasks.
            </p>
        </div>
    </div>
  )
}

export default About
