 import {useState} from "react";
export default function Getintouch() {
  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  const [msg, setmsg] = useState("")
  const OwnerNum="+923392111228"
  const HandleSubmit=(e)=>{
   e.preventDefault()
   console.log(name,phone,msg);
   const text=`Name:${name}\nEmail:${phone}\nMessage:${msg}`
   const encodedText = encodeURIComponent(text);
   const whatsappurl= `https://wa.me/${OwnerNum}?text=${encodedText}`;
   window.open(whatsappurl, "_blank", "noopener,noreferrer");
   setname("")
   setphone("")
   setmsg("")
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-[90%] max-w-md p-8 rounded-lg shadow-md border-t-4 border-t-red-600">
        <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
          Get in Touch with Us
        </h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          Were here to help! Have questions or need assistance?
        </p>

        <form className="space-y-4" onSubmit={HandleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" value={name} onChange={(e)=>setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" value={phone} onChange={(e)=>setphone(e.target.value)}
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500" value={msg} onChange={(e)=>setmsg(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
      
    </>
  );
}
