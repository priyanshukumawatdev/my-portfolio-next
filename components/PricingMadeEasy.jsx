"use client";
import Image from "next/image";

const pricingTabs = [
  {
    id: "monthly",
    label: "Monthly",
    plans: [
      {
        name: "Basic",
        price: "$640",
        period: "/month",
        desc: "Perfect for early-stage teams or startups ready to launch their first online presence.",
        btnClass: "style-troke",
        benefits: [
          "Custom website design",
          "Responsive layouts",
          "Basic SEO setup",
          "Tool integrations",
          "Ongoing support",
        ],
      },
      {
        name: "Pro",
        price: "$1,280",
        period: "/month",
        desc: "Ideal for growing brands that require added features and enhanced creative flexibility.",
        btnClass: "style-fill",
        benefits: [
          "Advanced web design",
          "Interactive elements",
          "Full SEO services",
          "E-commerce setup",
          "Monthly reports",
        ],
        style2: true,
        bgImage: "/assets/images/item/bg-2.png",
      },
      {
        name: "Max",
        price: "$2,560",
        period: "/month",
        desc: "Designed for established companies seeking a completely bespoke digital solution.",
        btnClass: "style-fill-white",
        benefits: [
          "Complete branding",
          "Premium visuals",
          "Enterprise systems",
          "Dedicated manager",
          "Priority support",
        ],
        style2: true,
      },
    ],
  },
  {
    id: "annual",
    label: "Annually - Save 20%",
    plans: [
      {
        name: "Basic",
        price: "$6,400",
        period: "/annual",
        desc: "Perfect for early-stage teams or startups ready to launch their first online presence.",
        btnClass: "style-troke",
        benefits: [
          "Custom website design",
          "Responsive layouts",
          "Basic SEO setup",
          "Tool integrations",
          "Ongoing support",
        ],
      },
      {
        name: "Pro",
        price: "$12,800",
        period: "/annual",
        desc: "Ideal for growing brands that require added features and enhanced creative flexibility.",
        btnClass: "style-fill",
        benefits: [
          "Advanced web design",
          "Interactive elements",
          "Full SEO services",
          "E-commerce setup",
          "Monthly reports",
        ],
        style2: true,
        bgImage: "/assets/images/item/bg-2.png",
      },
      {
        name: "Max",
        price: "$25,600",
        period: "/annual",
        desc: "Designed for established companies seeking a completely bespoke digital solution.",
        btnClass: "style-fill-white",
        benefits: [
          "Complete branding",
          "Premium visuals",
          "Enterprise systems",
          "Dedicated manager",
          "Priority support",
        ],
        style2: true,
      },
    ],
  },
];

export default function PricingMadeEasy() {
  return (
    <section className="section-pricing flat-spacing flat-animate-tab">
      <div className="bg-img">
        <Image
          src="/assets/images/item/bg-4.png"
          width={1440}
          height={1081}
          alt="Background"
        />
      </div>
      <div className="container">
        <div className="s-header justify-content-center">
          <h2 className="text-display-2 letter-space--3 effectFade fadeUp">
            Pricing made easy
          </h2>
        </div>

        {/* Tabs */}
        <ul className="pricing-tab_btn" role="tablist">
          {pricingTabs.map((tab, idx) => (
            <li className="nav-tab-item" role="presentation" key={tab.id}>
              <a
                href={`#${tab.id}`}
                data-bs-toggle="tab"
                className={`tf-btn-tab fw-medium letter-space--1 ${
                  idx === 0 ? "active" : ""
                }`}
              >
                <span className="dot-active"></span>
                {tab.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {pricingTabs.map((tab, idx) => (
            <div
              className={`tab-pane ${idx === 0 ? "active show" : ""}`}
              id={tab.id}
              role="tabpanel"
              key={tab.id}
            >
              <div className="tf-grid-layout md-col-2 lg-col-3">
                {tab.plans.map((plan, i) => (
                  <div
                    className={`wg-plan ${plan.style2 ? "style-2" : ""}`}
                    key={i}
                  >
                    {plan.bgImage && (
                      <div className="bg-img bg-img_2">
                        <Image
                          src={plan.bgImage}
                          width={416}
                          height={625}
                          alt={plan.name}
                        />
                      </div>
                    )}
                    <div
                      className={`br-line ${
                        plan.btnClass === "style-fill" ? "bg-primary" : plan.btnClass === "style-fill-white" ? "bg-white" : ""
                      }`}
                    ></div>
                    <p className="plan-name letter-space--1 fw-medium">
                      {plan.name}
                    </p>
                    <h4 className="plan-price">
                      {plan.price}{" "}
                      <span className="text-body-2 fw-normal text-white-64 letter-space--1">
                        {plan.period}
                      </span>
                    </h4>
                    <p className="plan-desc text-white-64">{plan.desc}</p>
                    <a
                      href="#contactScroll"
                      className={`btn-action tf-btn ${plan.btnClass} w-100 animate-btn animate-dark`}
                    >
                      <span className="text-caption fw-medium">
                        CHOOSE THIS PLAN
                      </span>
                    </a>
                    <ul className="benefit-list tf-list vertical">
                      <li className="benefit_title text-white-64">What’s included:</li>
                      {plan.benefits.map((b, j) => (
                        <li key={j}>
                          <span>{plan.btnClass.includes("fill") ? "//" : "//"}</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
