
const ExpertsSection = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <div className="exp-content">
              <span className="cr-subtitle fw-semibold relative text-primary d-inline-block animate__animated animate__fadeInUp">
                50% discount on early purchase
              </span>
              <h2 className="mt-4 mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
                Work With Our Full Time
                <span className="text-primary bg-light-primary px-2">Experts</span>
              </h2>
              <p className="mb-5 animate__animated animate__fadeInUp" style={{ animationDelay: "0.3s" }}>
                Leo in taciti conubia, arcu dapibus convallis commodo. Bibendum tristique lacus aenean quisque ut{" "}
                <span className="text-primary">primis torquent dis eget</span>
              </p>
              <div className="cta-box bg-white rounded-3 shadow-lg p-4 animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
                <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                  <span className="icon-wrapper bg-light-primary rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10">
                    <i aria-hidden="true" className="fas fa-check"></i>
                  </span>
                  <div>
                    <h6 className="mb-4">The best agency solution 2023</h6>
                    <p className="mb-0">These tools will allow you to handle tasks such as hanging shelves and assembling furniture.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-10 flex-wrap">
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                  <a href="tel:(+25) 2158.2693">
                    <div className="cta-call-btn flex items-center gap-2">
                      <span className="icon-tel rounded-full">
                        <span className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white">
                          <i aria-hidden="true" className="fas fa-phone-alt"></i>
                        </span>
                      </span>
                      <div>
                        <span className="text-sm font-medium mb-2 block text-gray-700">Call Us 24/7</span>
                        <h5 className="mb-0 text-lg">(+25) 2158.2693</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="exp-right relative">
              <img
                decoding="async"
                src="https://crete.themepreview.xyz/home-one/wp-content/uploads/sites/2/2023/07/team-meeting-2.png"
                alt="not found"
                className="img-fluid"
              />
              <div className="exp-year-box absolute bg-primary rounded-full text-white text-center p-4">
                <h3 className="text-white text-4xl">
                  <span className="counter">25</span>+
                </h3>
                <h6 className="mb-0 text-white text-lg">Years of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
