import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AboutUs() {
  return (
<section className="py-24 overflow-hidden">
      <div className="flex flex-wrap items-center gap-5 reverse-info mx-56">
        <div className="w-full lg:w-1/2">
          <div className="relative m-5">
            <img
              decoding="async"
              src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/ab-1-2.jpg"
              alt="bulb"
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white p-10 absolute z-10 bottom-10 left-10 rounded-lg max-w-72">
              <h6 className="text-blue-600 m-0 font-bold text-2xl leading-8">We are since 2002! Over 200 Awards</h6>
            </div>
          </div>
        </div>
        <div className="width_48">
          <div className="m-2"></div>
        
          <span className="text-blue-600 font-semibold text-2xl relative inline-block ">50% discount on early purchase</span>
          <h2 className="text-black text-7xl mb-12 mt-6 line-height-h2 font-bold">We create digital Ideas that are 
            <span className="bg-purple-50 text-blue-600 px-2 text-6xl "> bigger </span>
          </h2>

          <p className="mb-10 text-lg text-gray-600">Leo in taciti conubia, arcu dapibus convallis commodo. Bibendum tristique lacus aenean quisque ut 
            <span className="text-blue-600 font-semibold "> primis torquent dis eget</span>
          </p>

          <div className="flex items-center gap-6 shadow-lg p-4">
            <img src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/ab-2-1.jpg" className="max-w-28 h-auto border-none shadow-none rounded-md overflow-clip "/>
            <p className="mb-0 text-lg text-gray-600 "> Leo in taciti conubia, arcu dapibus convallis commodo sour Bibendum tristique lacus aenean quisque ut primis torquent dis eget awesome company feewdbacks </p>
          </div>
          <div className="flex items-center gap-6 flex-wrap mt-20">
          <a href="#" className="text-white shadow-none bg-blue-700 py-5 px-12 text-xl font-bold relative inline-block rounded-xl overflow-hidden ">More About Us</a>
          <a href="#" className="text-blue-600 shadow-none bg-blue-50 border border-white py-5 px-12 text-xl font-bold relative inline-block rounded-xl overflow-hidden ">Get Started <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></a>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default AboutUs