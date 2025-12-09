"use client";
import Image from "next/image";

export default function Services() {
  return (
    <section
      className="section-service-2 overflow-hidden flat-spacing"
      id="serviceScroll"
    >
      {/* Background images */}
      <div className="bg-image-list">
        {[
          "bg-service-1.jpg",
          "bg-service-2.jpg",
          "bg-service-3.jpg",
        ].map((img, i) => (
          <div className="bg-image" key={i}>
            <Image
              src={`/assets/images/section/${img}`}
              width={1440}
              height={938}
              loading="lazy"
              alt="Service Background"
            />
            <div className="img-item">
              <Image
                src="/assets/images/item/overlay.png"
                width={1440}
                height={938}
                loading="lazy"
                alt="Overlay"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Section Header */}
      <div className="container">
        <div className="s-header s-header-scroll">
          <h2 className="text-display-2 fw-semibold effectFade fadeUp">
            Services
          </h2>
        </div>
      </div>

      {/* Service Cards */}
      <div className="container">
        <div className="wrap-control position-relative">

          {/* SERVICE 1 */}
          <div className="wg-service-2">
            <div className="main-image">
              <div className="image">
                <Image
                  src="/assets/images/section/service-1.jpg"
                  width={424}
                  height={530}
                  loading="lazy"
                  alt="Branding"
                />
              </div>

              <div className="action tf-btn-2 cs-pointer">
                <i className="icon icon-arrow-long-right"></i>
              </div>
            </div>

            <div className="center">
              <h5 className="title">Branding</h5>

              <p className="desc">
                I create distinctive brand identities through strategy and
                visual design, helping businesses stand out, connect with
                audiences, and leave a lasting impression.
              </p>

              <div className="br-line d-flex"></div>

              <ul className="tf-list vertical">
                {[
                  "Brand Strategy",
                  "Visual Identity Design",
                  "Logo & Typography",
                  "Color Palette Creation",
                  "Brand Guidelines",
                ].map((item, index) => (
                  <li className="letter-space--1" key={index}>
                    <span className="text-primary">//</span> {item}
                  </li>
                ))}
              </ul>

              <a href="#contactScroll" className="tf-btn">
                START A PROJECT
              </a>
            </div>

            <div className="image-simu"></div>

            <div className="image-2">
              <Image
                src="/assets/images/section/service-mini-1.jpg"
                width={212}
                height={265}
                loading="lazy"
                alt="Mini Branding"
              />
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="wg-service-2">
            <div className="main-image">
              <div className="image">
                <Image
                  src="/assets/images/section/service-2.jpg"
                  width={424}
                  height={530}
                  loading="lazy"
                  alt="Web Design"
                />
              </div>

              <div className="action tf-btn-2 cs-pointer">
                <i className="icon icon-arrow-long-right"></i>
              </div>
            </div>

            <div className="center">
              <h5 className="title">Web Design</h5>

              <p className="desc">
                I design modern websites focused on user experience,
                scalability, and aesthetics. Each project is crafted to express
                the brand’s identity and deliver lasting value.
              </p>

              <div className="br-line d-flex"></div>

              <ul className="tf-list vertical">
                {[
                  "UI/UX Design",
                  "Responsive Layouts",
                  "Interaction & Animation",
                  "Accessibility Optimization",
                  "Design Systems",
                ].map((item, index) => (
                  <li className="letter-space--1" key={index}>
                    <span className="text-primary">//</span> {item}
                  </li>
                ))}
              </ul>

              <a href="#contactScroll" className="tf-btn">
                START A PROJECT
              </a>
            </div>

            <div className="image-simu"></div>
            <div className="image-2">
              <Image
                src="/assets/images/section/service-mini-2.jpg"
                width={212}
                height={265}
                loading="lazy"
                alt="Mini Web Design"
              />
            </div>
          </div>

          {/* SERVICE 3 */}
          <div className="wg-service-2">
            <div className="main-image">
              <div className="image">
                <Image
                  src="/assets/images/section/service-3.jpg"
                  width={424}
                  height={530}
                  loading="lazy"
                  alt="No-Code Development"
                />
              </div>

              <div className="action tf-btn-2 cs-pointer">
                <i className="icon icon-arrow-long-left"></i>
              </div>
            </div>

            <div className="center">
              <h5 className="title">No-Code Development</h5>

              <p className="desc">
                I build powerful websites using no-code platforms, ensuring
                fast deployment, easy management, and flexibility without
                compromising performance or security.
              </p>

              <div className="br-line d-flex"></div>

              <ul className="tf-list vertical">
                {[
                  "Framer Development",
                  "Webflow Development",
                  "CMS Setup & Integration",
                  "SEO & Performance Optimization",
                  "Post-Launch Support",
                ].map((item, index) => (
                  <li className="letter-space--1" key={index}>
                    <span className="text-primary">//</span> {item}
                  </li>
                ))}
              </ul>

              <a href="#contactScroll" className="tf-btn">
                START A PROJECT
              </a>
            </div>

            <div className="image-simu"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
