import React from 'react'
import Choosecard from './Choosecard'
function Whychoose() {
  return (
    <>
    <div className='container'>
<div><h2 className='flex justify-center font-bold'>Why Choose Us?</h2></div>
   <div className='flex flex-wrap gap-3 justify-center'>
   <Choosecard></Choosecard>
   <Choosecard></Choosecard>
   <Choosecard></Choosecard>
   <Choosecard></Choosecard>
   <Choosecard></Choosecard>
   </div>
    </div>
    </>
  )
}
export default Whychoose
