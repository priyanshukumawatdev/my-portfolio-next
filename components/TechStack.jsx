"use client";
import Image from "next/image";

export default function TechStack() {
  return (
    <section className="section-tech-stack flat-spacing">
      <div className="container">
        <h6 className="mini-title text-caption text-white-64 text-center">
          TECH STACK
        </h6>
      </div>

      <ul className="tech-stack-list main-action-active">

        {/* Figma */}
        <li className="wg-tech btn-active active">
          <div className="tech_text letter-space--2">
            <p className="h1 fw-normal">Figma</p>
            <h6 className="fw-normal">96%</h6>
          </div>

          <div className="infiniteSlide_tech_main">
            <div className="infiniteSlide infiniteSlide_tech" data-clone="5">

              {/* Clone group */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="clone-set">
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Figma</p>
                      <h6 className="process fw-normal">96%</h6>
                    </div>
                  </div>

                  <div className="app_icon">
                    <Image
                      width={136}
                      height={68}
                      src="/assets/images/section/app-figma.png"
                      alt="Figma"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </li>

        {/* Framer */}
        <li className="wg-tech btn-active">
          <div className="tech_text letter-space--2">
            <p className="h1 fw-normal">Framer</p>
            <h6 className="fw-normal">98%</h6>
          </div>

          <div className="infiniteSlide_tech_main">
            <div className="infiniteSlide infiniteSlide_tech" data-clone="5">

              {[1, 2, 3].map((i) => (
                <div key={i} className="clone-set">
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Framer</p>
                      <h6 className="process fw-normal">98%</h6>
                    </div>
                  </div>

                  <div className="app_icon">
                    <Image
                      width={136}
                      height={68}
                      src="/assets/images/section/app-framer.png"
                      alt="Framer"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </li>

        {/* Webflow */}
        <li className="wg-tech btn-active">
          <div className="tech_text letter-space--2">
            <p className="h1 fw-normal">Webflow</p>
            <h6 className="fw-normal">92%</h6>
          </div>

          <div className="infiniteSlide_tech_main">
            <div className="infiniteSlide infiniteSlide_tech" data-clone="5">

              {[1, 2, 3].map((i) => (
                <div key={i} className="clone-set">
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Webflow</p>
                      <h6 className="process fw-normal">92%</h6>
                    </div>
                  </div>

                  <div className="app_icon">
                    <Image
                      width={136}
                      height={68}
                      src="/assets/images/section/app-webflow.png"
                      alt="Webflow"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </li>

      </ul>
    </section>
  );
}
