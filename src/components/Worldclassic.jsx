import {useNavigate} from 'react-router-dom'
function Worldclassic() {
  const Navigate=useNavigate()
  const data = [
    {
      id: 1,
      name: "KAGHAN",
      img: "DSC01606.JPG",
    },
    {
      id: 2,
      name: "SAWAT",
      img: "FB_IMG_1722304392713.jpg",
    },
    {
      id: 3,
      name: "NARAN",
      img: "DSC01610.JPG",
    },
  ];
  return (
    <>
      <div className="container bg-gray-100">
        <div className="text-center py-4 px-5">
          <h1 className="text-4xl font-bold text-black leading-tight">
            World Class Iconic Destinations
          </h1>
          <div className="flex justify-center py-3">
            <p className="w-fit max-w-[500px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              debitis iste. Obcaecati provident quo consequatur tempora illum
              quidem molestiae autem!
            </p>
          </div>
          {/* image card */}
          <div className="flex justify-center gap-4 mx-auto w-full my-3">
            <div className="relative w-full max-w-[1000px]">
              <img
                className="p-5 w-full h-auto mx-auto"
                src="public\assets\FB_IMG_1722304268696.jpg"
                alt="FRANCE"
              />
              <h2 className="absolute bottom-6 left-8 text-white font-bold text-xl md:text-2xl sm:text-lg">
                KUMRAT
              </h2>
            </div>
          </div>

          {/* three images */}
          <div className="flex flex-wrap justify-center gap-4 mx-auto w-full my-3">
            {/* pic1 */}
            {data.map((item, index) => (
              <div key={index} className="relative w-[350px]">
                <img src={`assets/${item.img}`}/>
                <h2 className="absolute bottom-2 left-2  font-bold text-white  text-xl">
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
          {/* explore more */}
          <button  onClick={()=>Navigate('/details')} className="bg-red-600 text-white font-bold rounded-lg p-2 my-3 mb-5">
            Explore more
          </button>
        </div>
      </div>
    </>
  );
}
export default Worldclassic
