// import React from 'react'

function Detail() {
  return (
    <>
    {/* main image */}
    <div className="container min-height-">
<div ><button className="bg-red-600 text-white border rounded-md p-2 hover:bg-red-500 my-5 font-semibold font-serif">Back to home</button></div>
{/* image */}
    <div className="image">
     <h2 className="text-center my-5 font-bold text-2xl">Lorem ipsum dolor sit.</h2>
    <img className="mx-auto max-w-full max-h-fit border rounded-xl hover:shadow-blue-400 shadow-2xl " src="https://images.pexels.com/photos/18722862/pexels-photo-18722862/free-photo-of-view-of-apartment-buildings-and-the-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    </div>
    {/* cards */}
    <div className="flex  flex-wrap gap-16 mt-20 w-full justify-center items-center">
        <div>
        <img className="max-w-56 h-full border rounded-lg" src="https://images.pexels.com/photos/28966451/pexels-photo-28966451/free-photo-of-lokken-pier-at-sunset-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <p className="text-center text-xl font-bold">Pic With Friend</p>
        </div>
        <div> 
     <img className="max-w-56 h-full border rounded-lg" src="https://images.pexels.com/photos/29336398/pexels-photo-29336398/free-photo-of-berlin-fernsehturm-tower-against-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
     <p className="text-center text-xl font-bold">Nature</p>
        </div>
        <div>
        <img className="max-w-56 h-full border rounded-lg hover:shadow-xl shadow-slate-700" src="https://images.pexels.com/photos/29781699/pexels-photo-29781699/free-photo-of-couple-walking-on-serene-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <p className="text-center text-xl font-bold">Travelling</p>
        </div>
    </div>
    {/* description */}
    <div className="my-10 mx-8">
     <h2 className=" text-red-500 font-bold text-2xl">Description</h2>
     <p className="mt-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ducimus amet laboriosam, minima distinctio nihil nulla! Velit in minus inventore. lorem20 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur earum fuga hic quibusdam assumenda eum eius quos doloribus omnis magnam! </p>
    </div>
    </div>
    </>
  )
}

export default Detail
