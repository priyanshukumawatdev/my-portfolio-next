"use client";
import Image from "next/image";

const brands = [
  { src: "/assets/images/brand/brand-1.svg", width: 76, height: 48, alt: "Brand 1" },
  { src: "/assets/images/brand/brand-2.svg", width: 125, height: 24, alt: "Brand 2" },
  { src: "/assets/images/brand/brand-3.svg", width: 57, height: 48, alt: "Brand 3" },
  { src: "/assets/images/brand/brand-4.svg", width: 142, height: 36, alt: "Brand 4" },
  { src: "/assets/images/brand/brand-5.svg", width: 84, height: 48, alt: "Brand 5" },
  { src: "/assets/images/brand/brand-6.svg", width: 140, height: 36, alt: "Brand 6" },
  { src: "/assets/images/brand/brand-7.svg", width: 48, height: 48, alt: "Brand 7" },
  { src: "/assets/images/brand/brand-8.svg", width: 138, height: 24, alt: "Brand 8" },
  { src: "/assets/images/brand/brand-9.svg", width: 63, height: 48, alt: "Brand 9" },
  { src: "/assets/images/brand/brand-10.svg", width: 133, height: 24, alt: "Brand 10" },
];

export default function BrandPartner() {
  return (
    <div className="section-brand flat-spacing">
      <div className="container">
        <h6 className="mini-title text-caption text-white-64 text-center">
          BRANDS AND PARTNERS
        </h6>

        <div className="brand-list">
          {brands.map((brand, index) => (
            <a href="#" className="img-brand" key={index}>
              <Image
                src={brand.src}
                width={brand.width}
                height={brand.height}
                alt={brand.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
