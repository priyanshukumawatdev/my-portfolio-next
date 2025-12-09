export default function Hero() {
  return (
    <section className="section-hero-v1">
      <div className="overlay"></div>

      {/* Background Video */}
      <div className="bg-video">
        <video muted autoPlay loop playsInline>
          <source src="/assets/images/video/corridor.webm" type="video/mp4" />
        </video>

        <div className="video-overlay"></div>
        <div className="video-overlay-2"></div>
        <div className="video-overlay-2"></div>
      </div>

      {/* Content */}
      <div className="content-wrap">
        <div className="container">
          <div className="row">

            {/* Left Side */}
            <div className="col-md-8">
              <div className="col-left">

                <ul className="tf-list vertical text-caption fw-medium">
                  <li>
                    <a className="link effectFade fadeUp" href="#">
                      WEB-DESIGNER
                    </a>
                  </li>
                  <li>
                    <a className="link effectFade fadeUp" href="#">
                      BLOGER
                    </a>
                  </li>
                  <li>
                    <a className="link effectFade fadeUp" href="#">
                      TREND ANALYST
                    </a>
                  </li>
                </ul>

                <div className="davies-large">
                  <div className="effectFade fadeRotateX">
                    DAVIES<span className="text-primary">_</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-4">
              <div className="col-right">

                <div className="top text-caption fw-medium d-flex justify-content-between align-items-center effectFade">
                  <p className="title text-has-dot">
                    <span className="br-dot"></span>
                    AVAILABLE FOR WORK
                  </p>
                  <span>© 2025</span>
                </div>

                <div className="bot">
                  <p className="desc text-white-64 effectFade fadeRight view-visible">
                    I craft bold brands and modern websites with purpose. Each detail balances design
                    and usability for impact. My work adapts as your vision grows.
                  </p>

                  <div className="effectFade fadeRight view-visible">
                    <a href="#contactScroll" className="tf-btn">
                      START A PROJECT
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
