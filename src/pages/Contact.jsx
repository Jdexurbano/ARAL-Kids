import React from "react";

function Contact() {
  return (
    <section
      id="Contact"
      className="font-poppins w-full h-screen bg-third rounded-t-[50px] pt-[100px] px-[100px] flex justify-center items-start "
    >
      <div>
        <div className=" w-[1000px] flex flex-wrap gap-10">
          <div className=" pr-[50px]">
            <h1 className="font-bold text-[40px]">Get in touch with us</h1>
            <h2 className="font-normal text-[25px]">
              Feel Free to send us an email <br /> for more inquiries
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2 w-[500px]">
              <div>
                <h1 className="font-medium text-[20px]">
                  Your Name <span className="text-sixth">*</span>
                </h1>
                <input
                  type="text"
                  className="w-[220px] h-[40px] rounded-[5px] outline-none px-[10px] py-[5px]"
                />
              </div>
              <div>
                <h1 className="font-medium text-[20px]">
                  Email <span className="text-sixth">*</span>
                </h1>
                <input
                  type="text"
                  className="w-[220px] h-[40px] rounded-[5px] outline-none px-[10px] py-[5px]"
                />
              </div>
              <div>
                <h1 className="font-medium text-[20px]">
                  Subject <span className="text-sixth">*</span>
                </h1>
                <input
                  type="text"
                  className="w-[220px] h-[40px] rounded-[5px] outline-none px-[10px] py-[5px]"
                />
              </div>
            </div>
            <div className="mt-[5px]">
              <h1 className="font-medium text-[20px]">Message</h1>
              <textarea
                name="Message"
                id=""
                cols="62"
                rows="8"
                className="rounded-[5px] outline-none px-[10px] py-[5px] mt-[5px]"
              ></textarea>
            </div>
            <button className="bg-fifth w-[120px] h-[50px] rounded-lg font-bold text-[20px] text-slate-200 mt-[10px]">
              Submit
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Contact;
