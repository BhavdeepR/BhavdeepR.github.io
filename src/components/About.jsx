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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At error autem, repellendus labore ad voluptas reiciendis vero aperiam fuga animi adipisci sint fugiat modi id saepe laudantium tempora, excepturi consectetur quaerat! Unde autem enim porro? Iusto quibusdam doloribus ipsum, nesciunt necessitatibus cumque, dolores nisi labore tempore fugiat accusantium iure fuga.
            </p>

            <br />
            <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit, aspernatur maiores possimus molestiae autem labore quisquam quaerat dolores adipisci numquam! Quidem deleniti illum at aperiam culpa praesentium expedita fuga tempore ad explicabo? At, iusto. Voluptates placeat, nihil voluptatibus ratione corporis esse odit similique suscipit pariatur doloremque ab, in provident!
            </p>
        </div>
    </div>
  )
}

export default About
