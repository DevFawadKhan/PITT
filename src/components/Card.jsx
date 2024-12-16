import React from 'react'

function Card() {
  return (
    <>
    <div className='w-[350px] h-[400px]  border border-gray-300 rounded-xl flex-wrap'>
        <div className='image w-full h-[215px]'><img className='border w-full h-full rounded-xl' src="https://images.pexels.com/photos/29114782/pexels-photo-29114782/free-photo-of-snow-covered-forest-path-in-zakopane-poland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></div>
        <div className='title font-bold text-sm pl-5 mt-3 flex justify-between'><p>Maldives Escape</p>
        <div className='icon mr-2'><p>5D/4N</p></div>
        </div>
        <div className='description pl-5  text-sm w-full pt-3'><p>Lorem, ipsum dolor sit amet consectetur adcing</p>
        <p className='mt-3'> Starting at<span className='text-red-600 font-bold'>$95</span>USD</p>
        </div>
        <div className='bg-red-600 text-white border rounded-2xl w-1/2 p-2 m-3 font-semibold text-sm text-center'><button >Book Now</button></div>
    </div>
    </>
  )
}

export default Card
