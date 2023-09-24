import React from "react";
import { feature } from "../data/data";
function FeatureCard() {
  return (
    <>
      {feature.map((item) => (
        <div
          key={item.id}
          className="flex items-start px-5 py-6 bg-secondary rounded-[30px] font-poppins w-[400px] h-[250px] m-[10px] hover:shadow-2xl duration-1000"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-start justify-between h-[150px] mt-[20px]">
            <h1 className="font-bold text-[30px]">{item.title}</h1>
            <p className={`font-normal text-[17px] leading-[25px] mt-[5px]`}>
              {item.description}
            </p>
          </div>
          <img
            src={item.image}
            alt={item.image}
            className="w-[150px] h-[150px]"
          />
        </div>
      ))}
    </>
  );
}

export default FeatureCard;
