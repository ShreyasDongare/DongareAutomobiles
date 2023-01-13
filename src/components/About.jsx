import React from 'react'

const About = () => {
  const currrentYear = new Date().getFullYear()
  console.log(currrentYear)
  return (
    <section
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-slate-700  text-white"
    >
      <div className="max-w-screen-xl h-full  mx-auto px-4 flex flex-col justify-center ">
        <div>
          <h2 className="inline text-6xl  border-b-[1px] border-rose-700">
            Why Us
          </h2>
          <h2 className="text-3xl my-5">
            Why Choose Dongare Automobiles For Your Car Service?
          </h2>
          <div className="flex ">
            <h2 className="text-5xl font-mono">1965</h2>
            <div className="bg-rose-700 w-1  mx-4 rounded-xl h"></div>
            <p className='flex items-center'>
              {currrentYear - 1 - 1965}+ Years of experience in car repair and
              maintenance services.
            </p>
          </div>
          <p className="my-4">
            Dongare Automobiles provides a wide range of Car services to
            customers looking for reliable car maintenance services. We provide
            exceptional Service in Sangli that focuses on your car needs. We
            respect every vehicle as if it were our own.
          </p>
          <p className="my-4">
            Dongare Automobiles Workshop is your one-stop-shop for all car
            repair and maintenance needs, including car servicing, car repair,
            and custom car care. No task is too big or small for our Dongare
            Automobiles team, whether you have a damaged fan belt, oil change or need to
            replace your brake pads. For our customers, we provide excellent
            service and value for money. We provide the same level of care for
            your car, ensuring that your service warranty is not canceled. You
            can trust our team to diagnose and repair your car.
          </p>
          <button  className='px-4 py-2 bg-cyan-600 hover:bg-cyan-800 duration-300 rounded'><a className='' href="tel:9637212336">Call Us</a></button>
        </div>
      </div>
    </section>
  );
}

export default About
