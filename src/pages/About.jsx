import React from "react";
function About() {
  return (
    <>
      <section
        id="About"
        className="w-full h-screen bg-secondary rounded-[50px] pt-[30px] flex items-center justify-center gap-10"
      >
        <div
          className="w-[450px] h-[450px] flex justify-center items-center rounded-[50px] bg-primary"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            src="/images/About Image.png"
            alt="About Image"
            className="w-[500px] h-[425px]"
          />
        </div>
        <div className=" font-poppins text-left w-[400px] h-[450px]">
          <h1 className="uppercase font-medium text-[20px]">about the app</h1>
          <h1 className="font-bold text-[35px] leading-[1.2] break-before-auto mt-[20px]">
            Learn Science Topic with Augmented Reality
          </h1>
          <h1 className="font-medium text-[20px] text-slate-600 mt-[30px]">
            ARAL Kids makes learning science super fun by using cool technology
            that lets you interact and learn about stuff like magic! You can
            even bring your science lessons to life by seeing cool 3D things
            right in your room with your phone!
          </h1>
          <button className="w-[170px] h-[70px] bg-nine rounded-[17px] mt-[30px]">
            <h1 className="text-gray-900 text-[20px] font-bold tracking-tight px-[20px]">
              Learn More
            </h1>
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
