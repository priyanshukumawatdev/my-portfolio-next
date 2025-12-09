"use client";
import Image from "next/image";

export default function Process() {
  return (
    <section className="section-process flat-spacing">
      <div className="container">
        <div className="s-header">
          <h2 className="title text-display-2 letter-space--3 fw-semibold effectFade fadeUp">
            The Process
          </h2>
        </div>

        <div className="process-list">
          <div dir="ltr" className="swiper swiper-process">
            <div className="swiper-wrapper">

              {/* ---------- Item 1 ---------- */}
              <div className="swiper-slide effectFade fadeUp no-div">
                <div className="wg-process">
                  <div className="bg-img">
                    <Image
                      width={509}
                      height={509}
                      src="/assets/images/item/bg-1.jpg"
                      alt="Image"
                    />
                  </div>

                  <div className="content position-relative z-5">
                    <div className="img-icon">
                      <Image
                        width={120}
                        height={120}
                        src="/assets/images/item/process-1.png"
                        alt="Image"
                      />
                    </div>

                    <div>
                      <h5 className="title letter-space--2">
                        <a href="#" className="link">
                          Discover the Essence <br className="d-none d-sm-block" />
                          that drives your brand
                        </a>
                      </h5>

                      <div className="br-line"></div>

                      <div className="bot">
                        <div className="img-item">
                          <Image
                            width={81}
                            height={68}
                            src="/assets/images/item/S1.svg"
                            alt="Image"
                          />
                        </div>

                        <p className="desc text-body-3 letter-space--1 text-white-64">
                          I begin by clarifying your goals, audience, and market fit.  
                          The insights set a clear direction and define what success means for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------- Item 2 ---------- */}
              <div className="swiper-slide effectFade fadeUp no-div">
                <div className="wg-process">
                  <div className="bg-img">
                    <Image
                      width={509}
                      height={509}
                      src="/assets/images/item/bg-1.jpg"
                      alt="Image"
                    />
                  </div>

                  <div className="content position-relative z-5">
                    <div className="img-icon">
                      <Image
                        width={120}
                        height={120}
                        src="/assets/images/item/process-2.png"
                        alt="Image"
                      />
                    </div>

                    <div>
                      <h5 className="title letter-space--2">
                        <a href="#" className="link">
                          Design Bold Ideas <br className="d-none d-sm-block" />
                          with clear intention
                        </a>
                      </h5>

                      <div className="br-line"></div>

                      <div className="bot">
                        <div className="img-item">
                          <Image
                            width={99}
                            height={68}
                            src="/assets/images/item/S2.svg"
                            alt="Image"
                          />
                        </div>

                        <p className="desc text-body-3 letter-space--1 text-white-64">
                          I translate strategy into visual identity and structure.  
                          Clean, accessible, and ready for growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------- Item 3 ---------- */}
              <div className="swiper-slide effectFade fadeUp no-div">
                <div className="wg-process">
                  <div className="bg-img">
                    <Image
                      width={509}
                      height={509}
                      src="/assets/images/item/bg-1.jpg"
                      alt="Image"
                    />
                  </div>

                  <div className="content position-relative z-5">
                    <div className="img-icon">
                      <Image
                        width={120}
                        height={120}
                        src="/assets/images/item/process-3.png"
                        alt="Image"
                      />
                    </div>

                    <div>
                      <h5 className="title letter-space--2">
                        <a href="#" className="link">
                          Deliver with Speed <br className="d-none d-sm-block" />
                          and lasting impact
                        </a>
                      </h5>

                      <div className="br-line"></div>

                      <div className="bot">
                        <div className="img-item">
                          <Image
                            width={99}
                            height={68}
                            src="/assets/images/item/S3.svg"
                            alt="Image"
                          />
                        </div>

                        <p className="desc text-body-3 letter-space--1 text-white-64">
                          I build and launch your site in Framer or Webflow  
                          with fast performance and room to scale.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Pagination */}
            <div className="sw-dot-default tf-pag-nav justify-content-center d-xl-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
