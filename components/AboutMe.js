"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="section-about-me flat-spacing" id="aboutScroll">

      {/* Background Image */}
      <div className="s-img-bg">
        <Image
          width={1440}
          height={906}
          src="/assets/images/section/bg-about.jpg"
          alt="Background"
          priority
        />
      </div>

      <div className="container position-relative z-5">
        <div className="row">

          {/* Left Column */}
          <div className="col-lg-5">
            <div className="col-left mb-lg-0">

              {/* Video */}
              <div className="davies-video">
                <video
                  className="video"
                  muted
                  autoPlay
                  loop
                  playsInline
                >
                  <source
                    src="/assets/images/video/davies-video.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Overlays */}
                <div className="overlay v1"></div>
                <div className="overlay mark-1"></div>
                <div className="overlay mark-2"></div>
              </div>

              {/* Signature */}
              <div className="signature">
                <Image
                  width={111}
                  height={40}
                  src="/assets/images/logo/davies-small.svg"
                  alt="Signature"
                />
              </div>

              {/* Badge */}
              <div className="badget">
                <Image
                  width={156}
                  height={156}
                  src="/assets/images/item/badge-design.png"
                  alt="Badge"
                />
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="offset-lg-1 col-lg-6 offset-xl-2 col-xl-5">
            <div className="col-right">

              <h6 className="mini-title text-caption text-white-64">
                ABOUT ME
              </h6>

              <div className="text-color-change">
                <h5 className="desc letter-space--2 fw-normal">
                  I’m a designer and no-code developer creating bold, functional,
                  and award-winning digital experiences that help brands connect
                  with their audience.
                </h5>
              </div>

              <div className="br-line"></div>

              {/* Experience List */}
              <ul className="experience-list overflow-hidden">
                <li>Work Experience</li>

                <li className="effectFade fadeRight">
                  <p className="exp_name">Independent Product Designer</p>
                  <p className="exp_year">2025</p>
                </li>

                <li className="effectFade fadeRight">
                  <p className="exp_name">Senior UX Designer at CloudForge</p>
                  <p className="exp_year">2024 - 2025</p>
                </li>

                <li className="effectFade fadeRight">
                  <p className="exp_name">Product Designer at Orbit Systems</p>
                  <p className="exp_year">2022 - 2024</p>
                </li>

                <li className="effectFade fadeRight">
                  <p className="exp_name">UI/UX Designer at PixelHaus</p>
                  <p className="exp_year">2021 - 2022</p>
                </li>

                <li className="effectFade fadeRight">
                  <p className="exp_name">Junior Designer at Brightline Studio</p>
                  <p className="exp_year">2020 - 2021</p>
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
