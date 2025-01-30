// import React from 'react'
import {useNavigate}  from 'react-router-dom'
function Detail() {
  const data = [
    {
      id: 1,
      name: "Friends ",
      img: "2024_09_13_12_43_IMG_0554.JPG",
    },
    {
      id: 2,
      name: "Lunch",
      img: "2024_09_14_13_11_IMG_0722.JPG",
    },
    {
      id: 3,
      name: "Dessert",
      img: "2024_09_14_16_33_IMG_0760.JPG",
    },
    {
      id: 4,
      name: "Skardu",
      img: "2024_09_14_17_36_IMG_0764.JPG",
    },{
      id: 5,
      name: "Skardu",
      img: "2024_09_14_17_38_IMG_0769.JPG",
    },{
      id: 6,
      name: "Foreigner",
      img: "20240802_103715.jpg",
    },{
      id: 7,
      name: "Lake",
      img: "DSC01813.JPG",
    },{
      id: 8,
      name: "Kumrat",
      img: "e1a3398b-f4ee-48e8-946b-6420c3685b12.JPG",
    },{
      id: 9,
      name: "Naran",
      img: "IMG_7762.JPG",
    },{
      id: 10,
      name: "Siri paye",
      img: "IMG_7839.JPG",
    },
    {
      id: 11,
      name: "Kallam",
      img: "IMG_7879.JPG",
    },{
      id: 12,
      name: "Jheel",
      img: "IMG_8040.JPG",
    },{
      id: 13,
      name: "China",
      img: "IMG-20240802-WA0111.jpg",
    },
  ];
    const navigate=useNavigate();
  return (
    <>
    {/* main image */}
    <div className="container min-height-">
<div ><button onClick={()=>navigate('/')} className="bg-red-600 text-white border rounded-md p-2 hover:bg-red-500 my-5 font-semibold font-serif">Back to home</button></div>
{/* image */}
    <div className="image">
     <h2 className="text-center my-5 font-bold text-2xl">Enjoyment with friends at Dessert </h2>
    <img className="mx-auto max-w-full max-h-96 border rounded-xl hover:shadow-blue-400 shadow-2xl " src="assets\2024_09_14_16_24_IMG_0757.JPG" alt="" />
    </div>
    {/* cards */}
    <div className="flex flex-wrap gap-2 mt-20 w-full justify-center items-center">
  {data.map((value, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        className="w-80 h-72 object-cover border rounded-lg hover:shadow-xl shadow-slate-700"
        src={`assets/${value.img}`}
        alt=""
      />
      <p className="text-center text-xl font-bold mt-2">{value.name}</p>
    </div>
  ))}
</div>

    {/* <div className="flex  flex-wrap gap-16 mt-20 w-full justify-center items-center">
        <div>
        <img className="max-w-56 h-full border rounded-lg hover:shadow-xl shadow-slate-700" src="https://images.pexels.com/photos/28966451/pexels-photo-28966451/free-photo-of-lokken-pier-at-sunset-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <p className="text-center text-xl font-bold">Pic With Friend</p>
        </div>
        <div> 
     <img className="max-w-56 h-full border rounded-lg hover:shadow-xl shadow-slate-700" src="public\assets\DSC01606.JPG" alt="" />
     <p className="text-center text-xl font-bold">Nature</p>
        </div>
        <div>
        <img className="max-w-56 h-full border rounded-lg hover:shadow-xl shadow-slate-700" src="https://images.pexels.com/photos/29781699/pexels-photo-29781699/free-photo-of-couple-walking-on-serene-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <p className="text-center text-xl font-bold">Travelling</p>
        </div>
        <div>
        <img className="max-w-56 h-full border rounded-lg hover:shadow-xl shadow-slate-700" src="https://images.pexels.com/photos/29781699/pexels-photo-29781699/free-photo-of-couple-walking-on-serene-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <p className="text-center text-xl font-bold">Travelling</p>
        </div>
    </div> */}
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
