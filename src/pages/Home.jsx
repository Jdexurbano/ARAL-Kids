import React from "react";
function Home() {
  return (
    <>
      <section
        id="Home"
        className="bg-primary font-poppins w-full h-screen pt-[40px]"
      >
        <div className="tablet:flex tablet:items-start tablet:justify-between">
          <div className=" tablet:w-[580px] tablet:ml-[130px] tablet:items-start flex flex-col items-center">
            <h1 className="tablet:text-[55px] tablet:text-left leading-[1.20] font-black text-eight text-[40px]">
              <span className="text-sixth">A</span>ugmented
            </h1>
            <h1 className="tablet:text-[55px] tablet:text-left leading-[1.20] font-black text-eight text-[40px]">
              <span className="text-fourth">R</span>eality
            </h1>
            <h1 className="tablet:text-[55px] tablet:text-left leading-[1.20] font-black text-eight text-[40px]">
              <span className="text-fifth">A</span>ndroid-Based
            </h1>
            <h1 className="tablet:text-[55px] tablet:text-left leading-[1.20] font-black text-eight text-[40px]">
              <span className="text-fourth">l</span>earning for
            </h1>
            <h1 className="tablet:text-[55px] tablet:text-left leading-[1.20] font-black text-seven text-[40px]">
              Kids
            </h1>
            <div className=" mobile:flex mobile:justify-around mobile:items-center">
              <button className="bg-fourth rounded-[17px] mt-[15px] px-[10px] py-[5px] tablet:h-[60px] tablet::w-[200px] mr-5">
                <h1 className="text-slate-200 font-bold tablet:text-[19px] text-[15px] tracking-tight px-[20px]">
                  Download Now
                </h1>
              </button>
              <button className="bg-slate-50 rounded-[17px] mt-[15px] px-[10px] py-[5px] tablet:h-[60px] tablet::w-[200px] outline outline-1 outline-fifth">
                <h1 className="text-fifth font-bold tablet:text-[20px] text-[15px] px-[20px] tracking-tight">
                  Try it for Free
                </h1>
              </button>
            </div>
            <p className="tablet:text-[22px] text-[15px] font-medium mt-[20px] tablet:text-left text-center">
              Ignite the power of technology by teaching kids <br /> using
              Augmented Reality
            </p>
          </div>
          <div
            className="bg-secondary rounded-l-[50px] flex justify-center items-center pt-[50px] pb-[20px] pl-[50px] pr-[25px] z-0"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              src="/images/UI_Screenshot.png"
              alt=""
              className="tablet:w-[611px] tablet:h-[434px] w-[300px] h-[200px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
