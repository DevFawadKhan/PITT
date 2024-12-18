import React from 'react'

function Choosecard() {
  return (
    <>
    <div className='card w-[313px] h-[350px] border rounded-lg border-gray-300'>
     <div className='h-[222px] w-full'>< img className='w-full border rounded-xl h-full' src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
     {/* title */}
     <div className='title text-center my-4 '>
    <h3 className='font-bold'>Expert Guidance</h3>
    <p>Your journey,Perfectly Guided</p>
     </div>
    </div>
    </>
  )
}

export default Choosecard
