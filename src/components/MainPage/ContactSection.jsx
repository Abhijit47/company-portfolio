import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function ContactSection() {
  return (
    <section className="relative bg-[#111827] py-24 overflow-hidden">
        <span className="absolute w-[600px] h-[600px] -left-[400px] -bottom-[400px] bg-[#283140] rounded-full "></span>
        <span className="absolute w-[800px] h-[800px] -right-[200px] -top-[200px] bg-[#283140] rounded-full "></span>
        <span className="absolute w-[800px] h-[800px] -left-[440px] -bottom-[440px] bg-[#283140] rounded-full  border-2 border-gray-500"></span>
        <div className="container mx-auto relative z-1">
            <div className="flex items-center">
                <div className="md:w-1/2 px-6 mt-12 max-w-full">
                    <div className="contactInfo">
                        <span className="text-white text-xl border-b-2 relative font-semibold inline-block visible">100% discount on early purchase</span>
                        <h2 className="my-6 text-white font-bold text-7xl">Lets Work Together</h2>
                        <p className="text-xl leading-7 text-[#898989] font-medium">Interdum condimentum congue conubia netus neque lentesque curabitur etiam nisl montes, gravida luctus nec morbi dignissim ridiculus nam hendrerit ullamcorper, euismod</p>

                        <ul className="m-0 mt-12">
                            <ContactInfo
                                imgSrc="https://crete.themepreview.xyz/home-one/wp-content/themes/crete/assets/images/mail.svg"
                                title="Mail Us"
                                description="info@example.com"
                                />
                            <ContactInfo
                                imgSrc="https://crete.themepreview.xyz/home-one/wp-content/themes/crete/assets/images/phone.svg"
                                title="Call Us"
                                description="456 1122 7890"
                                />
                            <ContactInfo
                                imgSrc="https://crete.themepreview.xyz/home-one/wp-content/themes/crete/assets/images/location.svg"
                                title="Address"
                                description="214 Berlin, Germany"
                            />
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 px-6 mt-12 max-w-full">
                <div className='bg-white p-[60px] rounded-[30px]'>
                    <h3 className='text-5xl leading-[50px] mb-8 text-[#1f1f1f] font-bold '>Get a free <span className='text-[#5044EB] bg-[#EBEBFD] px-2'>quote now</span></h3>
                    <div className='overflow-hidden'>
                        <form >
                            <div className='form'>
                                <label className='block font-medium text-[#1f1f1f] mb-6 text-xl'>Name*
                                    <br/>
                                    <input size={40} type="text" className='w-full py-4 px-5 rounded-2xl border-2 text-[#1f1f1f] border-[#eceff2] bg-[#fff]' placeholder='John Smith'></input>
                                </label>
                                
                                <label className='block font-medium text-[#1f1f1f] mb-6 text-xl'>Email*
                                    <br/>
                                    <input size={40} type="text" className='w-full py-4 px-5 rounded-2xl border-2 text-[#1f1f1f] border-[#eceff2] bg-[#fff]' placeholder='info@example.com'></input>
                                </label>

                                <label className='block font-medium text-[#1f1f1f] mb-6 text-xl'>How we can help you?*
                                    <br/>
                                    <textarea size={1000} type="text" className='w-full py-4 px-5 rounded-2xl border-2 text-[#1f1f1f] border-[#eceff2] bg-[#fff]' placeholder='Type your message here'></textarea>
                                </label>

                                <button className='py-[22px] px-[38px] cursor-pointer text-xl font-semibold relative inline-block z-[1] text-white overflow-hidden rounded-2xl bg-[#5044EB] border-[#5044EB] leading-6'>Submit Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

const ContactInfo = ({imgSrc, title, description}) => {
    return (
        <li className='flex items-center gap-6 mb-2 mt-8'>
            <span className='text-[#6b6b6b] w-20 h-20 bg-white inline-flex items-center justify-center rounded-full flex-shrink-0'>
                <img src={imgSrc} alt="icon" className='h-auto max-w-full border-none border-0 shadow-none'/>
            </span>
            <div>
                <span className='font-medium text-xl text-[#6b6b6b]'>{title}</span>
                <Link to='#' className='shadow-none decoration-none text-[#000]'>
                    <h6 className='mb-0 text-white font-semibold mt-1 text-2xl'>{description}</h6>
                </Link>
            </div>
        </li>
    )
}


ContactInfo.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ContactSection
