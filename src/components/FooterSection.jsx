import { faFacebookF, faLinkedin, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FooterSection() {
  return (
    <footer className="bg-[#101727] relative z-[1] overflow-hidden pt-24 pb-3 px-5 ">
        <div className="border-[#242B3D] border-b mb-[100px] mx-auto">
            <div className="container relative  mx-auto z-[1] ">
                 <span className="absolute -left-[60px] -top-[100px] w-[50px] h-[405px] bg-[#242b3d] -z-[1]"></span>
                <span className="absolute -right-[60px] -top-[100px] w-[50px] h-[405px] bg-[#242b3d] -z-[1]"></span>
                <div className="flex mb-24 justify-center mx-auto">
                    <div className="w-7/12 flex-grow-0 flex-shrink-0 flex-basis-[auto]">
                    <div className="text-center">
                        <h2 className="text-white mb-6 text-[48px] leading-[3.25rem] font-extrabold">Have a Project in Mind?</h2>
                        <p className="mb-8 text-[#9097A9] text-xl">Luctus sapien pellentesque arcu fermentum accumsan tempus nam facilisis ullamcorper</p>
                        <a href="#" className='py-[22px] px-[46px] cursor-pointer text-xl font-semibold relative inline-block z-[1] text-white overflow-hidden rounded-2xl bg-[#5044EB] border-[#5044EB] leading-6'> Get Started </a>
                    </div>
                    </div> 
                </div>
            </div>
        </div>

        <div className="block">
            <div className="container mx-auto relative z-[1]">
                <div className="flex ">
                    <div className="w-1/4 flex-shrink-0 flex-grow-0 mr-2 pr-2">
                        <section className="text-white ">
                            <div className="mb-10 text-white">
                                <img src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/logo-white-1.png" alt="logo" className="max-w-full h-auto border-none "/>
                                <p className="my-8 text-white text-[19px]">Tempus nula rhoncus euismod curae masa cras justo quisque semper usto molestie primis porttitor</p>
                                <div className="">
                                    <a href="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center mr-[10px] ">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a href="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center mr-[10px] ">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center mr-[10px] ">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                    <a href="#" className="inline-flex w-11 h-11 bg-[#242b3d] rounded-full items-center justify-center mr-[10px] ">
                                    <FontAwesomeIcon icon={faSkype} />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="w-1/6 flex-shrink-0 flex-grow-0 mx-2 px-2">
                    <section className='text-white '>
                        <h2 className='text-[#9097A9] text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]'> Company </h2>
                        <div className='text-white'>
                            <ul className='m-0 p-0 list-none'>
                                <li className='text-white mb-4'>
                                    <a href='#' className='font-medium text-xl'>Help Center</a>
                                </li>
                                <li className='text-white mb-2'>
                                    <a href='#' className='font-medium text-xl'>Terms</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    </div>
                    <div className="w-1/4 flex-shrink-0 flex-grow-0 ">
                    <section className='text-white '>
                        <h2 className='text-[#9097A9] text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]'> Working Time </h2>
                        <div className='text-white'>
                            
                                <p className='text-white mb-3 m-0 p-0 font-medium text-xl'>
                                     Mon – Fri: 9:00 AM – 5:00 PM
                                </p>
                                <p className='text-white mb-3 m-0 p-0 font-medium text-xl'>
                                Saturday: 10:00 AM – 6:00 PM
                                </p>
                                <p className='text-white mb-3 m-0 p-0 font-medium text-xl'>
                                Sunday Closed
                                </p>
                            
                        </div>
                    </section>
                    </div>
                    <div className="w-1/3 flex-shrink-0 flex-grow-0 ">
                    <section className='text-white '>
                        <h2 className='text-[#9097A9] text-[24px] font-semibold pb-5 relative mb-8 leading-[34px]'> Sign Up for Newsletter </h2>
                        <div className='text-white'>
                            
                        </div>
                    </section>
                    </div>

                </div>
            </div>
        </div>

    </footer>
      
  )
}

export default FooterSection
