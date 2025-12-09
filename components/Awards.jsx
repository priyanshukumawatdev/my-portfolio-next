"use client";
import Image from "next/image";

const awards = [
  { name: "Behance", count: 28 },
  { name: "Awwwards", count: 41 },
  { name: "CSS Design Awards", count: 67 },
  { name: "Behance", count: 28 },
  { name: "Awwwards", count: 41 },
  { name: "CSS Design Awards", count: 67 },
];

const flipImages = [
  "/assets/images/section/award-1.jpg",
  "/assets/images/section/award-2.jpg",
  "/assets/images/section/award-3.jpg",
  "/assets/images/section/award-4.jpg",
  "/assets/images/section/award-5.jpg",
  "/assets/images/section/award-6.jpg",
];

export default function Awards() {
  return (
    <section className="section-award flat-spacing">
      <div className="container">
        <div className="row">
          <div className="col-md-5 ms-auto">
            <div className="col-right">
              <h6 className="mini-title text-caption text-white-64">AWARDS</h6>
              <h5 className="fw-normal letter-space--2 text-color-change">
                Since 2020, my work has been honored by leading design platforms
                around the world. Each award represents a project where
                creativity, precision, and impact came together.
              </h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <div className="col-left">
              <p className="desc text-white-64 mini-title">
                157 industry awards. <br />
                Bold ideas. Flawless execution.
              </p>

              <div dir="ltr" className="swiper tf-swiper" 
                   data-preview="3" data-tablet="3" data-mobile="3" 
                   data-mobile-sm="3" data-loop="true" data-auto="true" 
                   data-delay="1000" data-speed="1000" data-direction="vertical" data-space="4">
                <div className="swiper-wrapper">
                  {awards.map((award, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="award-item h4 letter-space--2">
                        {award.name}
                        <span className="text-body-1 letter-space--1">x{award.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="wrap-flip-image flat-spacing">
        <div className="container">
          <div className="flip-image-list gsap-anime-2">
            {flipImages.map((src, index) => (
              <div className="flip-image" key={index}>
                <Image
                  src={src}
                  width={300}
                  height={300}
                  alt={`Award ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
