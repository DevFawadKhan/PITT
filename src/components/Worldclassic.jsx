
function Worldclassic() {
  return (
    <>
    <div className="container bg-gray-100">
     <div className="text-center"><h1 className="font-bold text-xl">World Class Iconic Destinations</h1>
     <div className="flex justify-center py-3"><p className="w-fit max-w-[500px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, debitis iste. Obcaecati provident quo consequatur tempora illum quidem molestiae autem!</p></div>
     {/* image card */}
     <div className="flex justify-center gap-4 mx-auto w-full my-3">
  <div className="relative w-full max-w-[1000px]">
    <img className="p-5 w-full h-auto mx-auto" src="/assets/Rectangle.png" alt="FRANCE" />
    <h2 className="absolute bottom-6 left-8 text-white font-bold text-xl md:text-2xl sm:text-lg">
      FRANCE
    </h2>
  </div>
</div>


     {/* three images */}
     <div className="flex flex-wrap justify-center gap-4 mx-auto w-full my-3">
        {/* pic1 */}
      <div className="relative w-[350px]">
        <img src="assets/pic1.png" alt="LONDON" />
        <h2 className="absolute bottom-2 left-2  font-bold text-white  text-xl">LONDON</h2>
      </div>
       {/* pic2 */}
       <div className="relative w-[350px]">
        <img src="assets/pic3.png" alt="CANADA" />
        <h2 className="absolute bottom-2 left-2  font-bold text-white  text-xl">CANADA</h2>
       </div>
       {/* pic3 */}
       <div className="relative w-[350px]">
<img src="assets/pic2.png" alt="" />
<h2 className="absolute bottom-2 left-2  font-bold text-white text-xl">AUSTRALIA</h2>
       </div>
     </div>
     {/* explore more */}
     <button className="bg-red-600 text-white font-bold rounded-lg p-2">Explore more</button>
     </div>
    </div>
    </>
  )
}
export default Worldclassic
