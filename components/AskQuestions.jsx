"use client";
import { useState } from "react";

const faqs = [
  {
    id: "faq-1",
    question: "How long does a project usually take?",
    answer:
      "Most projects are completed within 4–8 weeks, depending on complexity, revisions, and scope. I’ll always provide a clear timeline before starting.",
    defaultOpen: false,
  },
  {
    id: "faq-2",
    question: "Do you work with international clients?",
    answer:
      "Yes, I collaborate with clients worldwide using online meetings, project management tools, and shared design platforms to ensure smooth communication.",
    defaultOpen: true,
  },
  {
    id: "faq-3",
    question: "Can you help with both design and development?",
    answer:
      "Absolutely. I handle branding, UI/UX design, and no-code or coded development to deliver a complete end-to-end solution.",
    defaultOpen: false,
  },
  {
    id: "faq-4",
    question: "What’s your payment process?",
    answer:
      "I typically require a 50% deposit to begin work, with the remaining balance due upon project completion and approval.",
    defaultOpen: false,
  },
  {
    id: "faq-5",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. I offer maintenance, updates, and performance monitoring packages to keep your website or product running smoothly long-term.",
    defaultOpen: false,
  },
];

export default function AskQuestions() {
  const [activeId, setActiveId] = useState(
    faqs.find((faq) => faq.defaultOpen)?.id || null
  );

  const toggleAccordion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-faq flat-spacing">
      <div className="container">
        <div className="s-header d-block">
          <h2 className="text-display-2 letter-space--3 text-center effectFade fadeUp">
            Frequently <br />
            asked questions
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="accordion-faq_list" id="accordion-faq_list">
              {faqs.map((faq, idx) => (
                <div className="accordion-faq_item" key={faq.id}>
                  <div
                    className={`accordion-action text-body-1 letter-space--1 fw-medium ${
                      activeId === faq.id ? "" : "collapsed"
                    }`}
                    onClick={() => toggleAccordion(faq.id)}
                    role="button"
                    aria-expanded={activeId === faq.id}
                  >
                    <span className="accordion-order">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="accordion-text">{faq.question}</p>
                    <div className="ic-wrap d-flex">
                      <i className="icon icon-arrow-caret-down fs-10"></i>
                    </div>
                  </div>

                  <div
                    id={faq.id}
                    className={`collapse ${activeId === faq.id ? "show" : ""}`}
                    data-bs-parent="#accordion-faq_list"
                  >
                    <p className="accordion-content">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
