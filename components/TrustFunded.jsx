"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Ethan Morales",
    role: "Marketing Director, Horizon Apparel",
    text: "“Davies reimagined our digital presence. The site is striking, fast, and intuitive—engaging visitors while clearly expressing our brand.”",
    image: "/assets/images/section/tes-1.jpg",
  },
  {
    name: "Liam Carter",
    role: "Founder, Arcadia Tech",
    text: "“Working with Davies was seamless. He nailed our vision and delivered a modern, functional website that feels distinctly ours.”",
    image: "/assets/images/section/tes-2.jpg",
  },
  {
    name: "Sofia Carson",
    role: "Product Manager, Lumos Studio",
    text: "“From first concept to launch, Davies exceeded expectations. Every choice was intentional, making our platform beautiful and easy to use.”",
    image: "/assets/images/section/tes-3.jpg",
  },
  {
    name: "Ethan Morales",
    role: "Marketing Director, Horizon Apparel",
    text: "“Davies reimagined our digital presence. The site is striking, fast, and intuitive—engaging visitors while clearly expressing our brand.”",
    image: "/assets/images/section/tes-2.jpg",
  },
];

const indicators = [
  {
    title: "Projects Delivered",
    number: 40,
    suffix: "+",
    sub: "Creative work that drive real results",
  },
  {
    title: "Clients Satisfaction",
    number: 96,
    suffix: "%",
    sub: "I mostly focus on exceeding expectations",
  },
  {
    title: "Years of Experience",
    number: 10,
    suffix: "+",
    sub: "Mastering the art of animation content and design",
  },
];

export default function TrustFunded() {
  return (
    <section className="section-testimonial flat-spacing tf-btn-swiper-main">
      <h6 className="mini-title text-caption text-white-64 text-center">
        TRUSTED BY FOUNDED
      </h6>

      <div
        dir="ltr"
        className="swiper tf-swiper swiper-testimonial"
        data-preview="2.59"
        data-tablet="2.2"
        data-mobile-sm="1.5"
        data-mobile="1.2"
        data-loop="true"
        data-center="true"
        data-space-lg="40"
        data-space-md="30"
        data-space="15"
        data-init="1"
      >
        <div className="swiper-wrapper">
          {testimonials.map((item, idx) => (
            <div className="swiper-slide" key={idx}>
              <div className="testimonial-v01">
                <div className="tes-author">
                  <div className="author_image">
                    <Image
                      src={item.image}
                      width={437}
                      height={328}
                      alt={item.name}
                    />
                  </div>
                  <div className="author_info">
                    <h6 className="info__name text-body-1 letter-space--1">
                      {item.name}
                    </h6>
                    <p className="info__duty">{item.role}</p>
                  </div>
                </div>
                <div className="br-line"></div>
                <p className="tes-text text-body-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="group-btn-slider">
          <div className="nav-prev-swiper lh-1">
            <i className="icon icon-arrow-caret-left fs-8"></i>
          </div>
          <div className="sw-dot-default tf-sw-pagination"></div>
          <div className="nav-next-swiper lh-1">
            <i className="icon icon-arrow-caret-right fs-8"></i>
          </div>
        </div>
      </div>

      <div className="indicator-wrap flat-spacing">
        <div className="container">
          <div className="row">
            {indicators.map((ind, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="wg-indicator mb-md-0">
                  <p className="indicate-title text-body-1">
                    <span className="text-primary">//</span> {ind.title}
                  </p>
                  <p className="indicate-counter wg-counter text-display-1 fw-medium">
                    <span className="odometer" data-number={ind.number}>
                      {ind.number}
                    </span>{" "}
                    <span className="text-primary">{ind.suffix}</span>
                  </p>
                  <p className="indicate-sub">{ind.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-img-item">
        <Image
          src="/assets/images/item/grid.png"
          width={1440}
          height={800}
          alt="Background"
        />
      </div>
    </section>
  );
}
