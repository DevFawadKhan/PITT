// import React from 'react'
import Card from './Card'
import Viewbutton from './Viewbutton.jsx'
function Exclusive() {
  const Data=[
    {
      id: 1,
      name: "LONDON",
      img: "113.jpg",
    },
    {
      id: 2,
      name: "LONDON",
      img: "119.jpg",
    },{
      id: 3,
      name: "LONDON",
      img: "255362_454119241300232_752648457_n.jpg",
    },{
      id: 4,
      name: "LONDON",
      img: "292443_384938094893869_1134657751_n.jpg",
    },
    {
      id: 5,
      name: "LONDON",
      img: "319369_385185208202491_72987236_n.jpg",
    },{
      id: 6,
      name: "LONDON",
      img: "394578_384937891560556_1640998575_n.jpg",
    },
    {
      id: 7,
      name: "LONDON",
      img: "post-284-1177999117.jpg",
    },{
      id: 8,
      name: "LONDON",
      img: "Shangrila Skardu (g355).jpg",
    },{
      id: 9,
      name: "LONDON",
      img: "Shangrila Skardu g (347).jpg",
    },{
      id: 10,
      name: "LONDON",
      img: "Shangrila Skardu g(346).jpg",
    },
  ]

  return (
    <>
    <div className='container '>
<div className='heading py-4'><h5 className='text-center  text-4xl font-bold text-black leading-tight'>Our Exclusive Offers</h5></div>
 <div className='flex flex-wrap justify-center gap-3'>
 {
  Data.map((data)=>{
    return(
      <>
      <Card key={data.id} value={data.img} ></Card>
      </>
    )
  })
 }
 </div>
 <div className='flex justify-center mt-3'>
 <Viewbutton/>
 </div>

    </div>
    </>
  )
}
export default Exclusive
