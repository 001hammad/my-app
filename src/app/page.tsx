import React from 'react'
const Home = () => {
  return (
    <div className=' rounded-full bg-yellow-500 h-screen'>
      <h1 className='flex justify-center items-center text-5xl font-bold shadow-2xl shadow-red-900'>FunNow MindFresher</h1>
    <div className='flex justify-center items-center p-9 h-auto'>
    <div  className='h-60 w-60 border-2 border-black bg-teal-600 p-10 shadow-2xl shadow-teal-950  hover:h-96 duration-700 rounded-full'>
      <div className='h-56 w-56 bg-teal-800 border-2 border-black p-11 shadow-2xl shadow-green-400 hover:h-80 duration-700 rounded-full'>
        <div className='h-52 w-52 bg-green-600 p-12 border-2 border-black shadow-2xl shadow-teal-600 hover:h-96 duration-700 rounded-full'>
          <div className='h-48 w-48 bg-red-600 p-14 border-2 border-black shadow-2xl shadow-blue-600 hover:h-80 duration-700 rounded-full'>
            <div className='h-44 w-44 bg-yellow-600 border-2 border-black p-14 shadow-2xl shadow-pink-950 hover:h-80 duration-700 rounded-full'>
              <div className='h-40 w-40 bg-blue-600 border-2 border-black p-15 shadow-2xl shadow-yellow-500 hover:h-96 duration-700 rounded-full'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home
