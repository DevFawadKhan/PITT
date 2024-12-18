import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-[#383838]">
      <div className="container">
        <div className="flex flex-row flex-wrap  gap-8 py-10">
          <div className="flex-1 basis-0 text-white">
            <h2 className="text-2xl font-bold pb-5">About PITT</h2>
            <p>
              We offers personalized travel solutions designed to make every
              journey stress free and unforgettable. Explore the world with ease
              and confidence
            </p>
            <div className="flex flex-row gap-3 pt-5">
              <img
                src="/assets/trophy.png"
                className="w-[64px] h-[64px]"
                alt="trophy-icon"
              />
              <p>
                Global Award <br /> Winner
              </p>
            </div>
          </div>
          <div className="flex-1 basis-0 text-white ">
            <h2 className="text-2xl font-bold pb-5">Global Award Winner</h2>
            <div className="flex flex-col gap-5 px-5">
              <div className="flex flex-row gap-3">
                <img
                  src="/icons/location.png"
                  className="w-[14px] h-[20px]"
                  alt="trophy-icon"
                />
                <p className="text-sm">
                  456 Explorer Street, Horizon City, Journeyland, 78901
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="/icons/phone.png"
                  className="w-[14px] h-[20px]"
                  alt="trophy-icon"
                />
                <p className="text-sm">+1 (234) 567-8901</p>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="/icons/email.png"
                  className="w-[14px] h-[20px]"
                  alt="trophy-icon"
                />
                <p className="text-sm">contact@yourwebsite.com</p>
              </div>
              <div className="flex flex-row gap-3">
                <img
                  src="/icons/time.png"
                  className="w-[14px] h-[20px]"
                  alt="trophy-icon"
                />
                <p className="text-sm">Monday – Saturday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="flex-1 basis-0 text-white ">
            <h2 className="text-2xl font-bold pb-5">Follow Us</h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <span className="w-[32px] h-[31px] bg-[#F90B0B]  rounded-full flex justify-center items-center">
                  <img
                    src="/icons/facebook.png"
                    className=""
                    alt="trophy-icon"
                  />
                </span>
                <p className="text-sm">Facebook</p>
              </div>
              <div className="flex flex-row gap-3">
                <span className="w-[32px] h-[31px] bg-[#F90B0B]  rounded-full flex justify-center items-center">
                  <img
                    src="/icons/twitter.png"
                    className=""
                    alt="trophy-icon"
                  />
                </span>
                <p className="text-sm">Twitter</p>
              </div>
              <div className="flex flex-row gap-3">
                <span className="w-[32px] h-[31px] bg-[#F90B0B]  rounded-full flex justify-center items-center">
                  <img
                    src="/icons/linkedin.png"
                    className=""
                    alt="trophy-icon"
                  />
                </span>
                <p className="text-sm">Linkedin</p>
              </div>
              <div className="flex flex-row gap-3 ">
                <span className="w-[32px] h-[31px] bg-[#F90B0B]  rounded-full flex justify-center items-center">
                  <img
                    src="/icons/instagram.png"
                    className=""
                    alt="trophy-icon"
                  />
                </span>
                <p className="text-sm">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="flex w-100 h-[1px] bg-white "></span>
      <div className="container">
        <div className="flex justify-between py-5 text-white text-sm flex-wrap gap-4">
          <span className="text-sm">
            Privacy Policy | Terms & Conditions | FAQ
          </span>
          <span className="text-sm">
            Copyright &copy; 2024. All rights reserved{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}
