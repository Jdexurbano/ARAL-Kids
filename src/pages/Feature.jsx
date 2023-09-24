import React from "react";
import FeatureCard from "../components/FeatureCard";
function Feature() {
  return (
    <>
      <section
        id="Feature"
        className="w-full bg-primary pt-[20px] flex flex-col items-center font-poppins"
      >
        <h1 className="text-[60px] font-bold text-eight">Our Cool Featuress</h1>
        <div className="w-[500px] tablet:w-[1000px] flex flex-wrap items-center justify-center">
          <FeatureCard />
        </div>
        <div
          className="w-[800px] h-[150px] my-[100px] flex flex-col items-center justify-center gap-[10px] bg-secondary rounded-[50px] drop-shadow-xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div>
            <h1 className="font-bold text-eight text-[20px]">
              Made with Trusted Software Augmented Reality Platform
            </h1>
          </div>
          <div className="w-[500px] flex items-center justify-around">
            <div className="bg-primary w-[177px] h-[70px] p-[10px] rounded-[20px] outline outline-1 outline-gray-500">
              <img
                src="/images/Unity Logo 1.png"
                alt=""
                className="w-[154px] h-[54px]"
              />
            </div>
            <div className="bg-primary w-[229px] h-[70px] px-[10px] py-[15px] rounded-[20px] outline outline-1 outline-gray-500">
              <img
                src="/images/Vuforia Logo.png"
                alt=""
                className="w-[206px] h-[40px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
