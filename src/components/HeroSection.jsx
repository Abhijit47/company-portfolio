import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Header from "./Header";

export default function HeroSection() {
    return (<>
        <div className="bg-cover bg-center bg-bottom header-bg -mt-52">
            <div className="relative z-1 overflow-hidden pt-96 pb-56 bg-no-repeat  z-1">
                <div className="w-max-[1320px]">
                    <div className="items-center flex mx-40">
                        <div className="w-1/2 px-3">
                            <div className="hero-content-l">
                                <span className="relative text-white inline-block">
                                    50% discount on early purchase
                                </span>
                                <h1 className="flex-2 mt-1 mb-8 font-semibold text-7xl text-white font-sans">Creating the best digital solution</h1>
                                <p className="mb-14 font-medium text-lg leading-7 text-white">Malesuada curabitur nascetur viverra sem pulvinar feugiat curae, posuere risus consequat velit bibendum at integer</p>
                                <div className="flex items-center flex-start gap-6 flex-wrap">
                                    <a href="#" className="text-purple-700 shadow-none bg-white py-3.5 px-9 text-lg font-bold relative inline-block rounded-xl overflow-hidden ">Learn More</a>
                                    <a href="#" className="text-white shadow-none bg-none border border-white py-3.5 px-9 text-lg font-bold relative inline-block rounded-xl overflow-hidden ">Get Started <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="right-80 bottom-0 absolute h-auto  border-none shadow-none" src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/hero-sm.png" alt="ima"/>
                    
                </div>                    
            </div>
            </div>
            </>
    )
}
