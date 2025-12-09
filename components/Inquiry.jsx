"use client";
import { useState } from "react";

const services = ["Web Development", "UI/UX Design", "Digital Marketing"];
const budgets = ["$0 – $100", "$100 – $500", "$500 – $1,000"];

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Thank you for your inquiry!");
    setFormData({
      name: "",
      email: "",
      service: "",
      budget: "",
      details: "",
    });
  };

  return (
    <section className="section-cta flat-spacing" id="contactScroll">
      <div className="bg-img">
        <img
          loading="lazy"
          width="1440"
          height="1081"
          src="assets/images/item/bg-3.png"
          alt="Background"
        />
      </div>

      <div className="s-header d-block">
        <div className="container">
          <div className="row">
            <div className="col-2 offset-lg-2 col-lg-2">
              <div className="col-left">
                <a href="index.html" className="logo-custom">
                  <div className="logo-site-sv">
                    {/* SVG Logo */}
                    <svg
                      width="34"
                      height="41"
                      viewBox="0 0 34 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.21094 0.400391C15.9908 0.392629 21.8983 0.597548 27.1426 5.65918C35.1922 13.4293 35.2468 26.7035 27.5312 34.7549C22.0053 40.1145 16.6295 40.3989 9.48535 40.4004L0.75 40.3945L0.751953 0.407227L9.21094 0.400391ZM21.5244 6.83496C16.6613 3.86011 10.4273 4.54391 4.91113 4.55664L17.2607 22.3262C19.5017 25.5466 21.7744 28.9254 24.0615 32.0889C24.847 31.468 25.7087 30.3488 26.2646 29.5088C28.7144 25.5207 29.444 20.7119 28.2871 16.1777C27.305 12.2252 25.0035 8.9637 21.5244 6.83496Z"
                        fill="#07C42C"
                      />
                    </svg>
                  </div>
                  <span className="line-vertical left"></span>
                  <span className="line-vertical right"></span>
                  <span className="line-horizontal top"></span>
                  <span className="line-horizontal bottom"></span>
                </a>
              </div>
            </div>

            <div className="col-10 col-lg-6">
              <h2 className="text-display-2 letter-space--3 text-end effectFade fadeUp">
                Let’s start <br />
                creating together
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form className="form-cta" onSubmit={handleSubmit}>
              <div className="form-content">
                <div className="tf-grid-layout sm-col-2">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                     
                      required
                    />
                    <label className="tf-lable">
                      Name <span className="text-primary">*</span>
                    </label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input
                      className="tf-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    
                      required
                    />
                    <label className="tf-lable">
                      Email <span className="text-primary">*</span>
                    </label>
                  </fieldset>
                </div>

                <div className="tf-grid-layout sm-col-2">
                  <fieldset className="tf-field">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Select an option --</option>
                      {services.map((s, idx) => (
                        <option key={idx} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <label className="tf-lable">
                      You are interested in <span className="text-primary">*</span>
                    </label>
                  </fieldset>

                  <fieldset className="tf-field">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Select your budget --</option>
                      {budgets.map((b, idx) => (
                        <option key={idx} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <label className="tf-lable">
                      Budget in USD <span className="text-primary">*</span>
                    </label>
                  </fieldset>
                </div>

                <fieldset className="tf-field">
                  <input
                    className="tf-input"
                    type="text"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                   
                  />
                  <label className="tf-lable">Project details</label>
                </fieldset>
              </div>

              <div className="form-action">
                <button type="submit" className="tf-btn">
                  <span className="text-caption">SUBMIT MESSAGE</span>
                </button>
                <p className="text-body-1">
                  say hello -{" "}
                  <a href="mailto:davies@gmail.com" className="text-primary">
                    davies@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
