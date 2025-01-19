// import React from 'react'
import Choosecard from './Choosecard'
function Whychoose() {
  const Data=[
    {
      id: 1,
      name: "LONDON",
      img: "DSC01814.JPG",
    },
    {
      id: 2,
      name: "LONDON",
      img: "e1a3398b-f4ee-48e8-946b-6420c3685b12.JPG",
    },{
      id: 3,
      name: "LONDON",
      img: "IMG_7762.JPG",
    },{
      id: 4,
      name: "LONDON",
      img: "IMG_7841.JPG",
    },
    {
      id: 5,
      name: "LONDON",
      img: "IMG-20240802-WA0111.jpg",
    },{
      id: 6,
      name: "LONDON",
      img: "IMG_8046.JPG",
    },
  ]

  return (
    <>
    <div className='container'>
<div><h2 className='text-center py-5 text-4xl font-bold text-black leading-tight'>Why Choose Us?</h2></div>
   <div className='flex flex-wrap gap-3 justify-center'>
   {
    Data.map((data)=>{
      return(<><Choosecard  value={data.img}></Choosecard> </>)
    })
   }
   </div>
    </div>
    </>
  )
}
export default Whychoose
