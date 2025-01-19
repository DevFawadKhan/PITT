// import React from 'react'

function Choosecard({value}) {
  return (
    <>
    <div className='card w-[313px] h-[350px] border rounded-lg border-gray-300'>
     <div className='h-[222px] w-full'>< img className='w-full border rounded-xl h-full' src={`assets/${value}`} alt="" /></div>
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
