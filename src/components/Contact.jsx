import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen flex flex-col items-center justify-cente text-white bg-gradient-to-b from-slate-700 to-black"
    >
      <div>
        <div className="flex justify-center">
          <h2 className="text-3xl my-3 border-b border-b-rose-600">
            Direaction
          </h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3818.193846714365!2d74.56933334325889!3d16.86630272206342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad3089bbdf6f87f1!2sDongare%20Automobiles!5e0!3m2!1sen!2sin!4v1673594287736!5m2!1sen!2sin"
          width="1280"
          height="300"
          className="px-4 md:px-0 md:h-[420px] max-w-full md:rounded-2xl"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-w-screen-xl mx-auto my-2 text-white">
        <div className="flex justify-center">
          <h2 className="text-3xl my-3 border-b border-b-rose-600">
            Contact Us
          </h2>
        </div>
        <form
          action="https://usebasin.com/f/be3912cea030"
          method="POST"
          className=""
        >
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col">
              <input
                type="text"
                name="fullName"
                required
                placeholder="Full Name"
                className="w-80 md:w-60 my-1 p-2 rounded bg-transparent border border-teal-500 focus:border-rose-700 outline-none duration-500"
              />
              <input
                type="text"
                name="contact"
                id=""
                required
                placeholder="Contact No."
                className="w-80 md:w-60 my-1 p-2 rounded bg-transparent border border-teal-500 focus:border-rose-700 outline-none duration-500"
              />
              
            </div>
            <textarea
              name="message"
              id=""
              required
              col="50"
              placeholder="Enter your Message here"
              className="w-80 md:w-96 h-44 md:h-auto my-1 p-2 rounded bg-transparent border border-teal-500 focus:border-rose-700 outline-none  duration-500 "
            ></textarea>
          </div>
          <div className="flex items-center justify-center ">
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-800 duration-300 my-2 px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
