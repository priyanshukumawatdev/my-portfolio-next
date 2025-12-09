export default function SelectWork() {
  return (
    <div className="section-selected-work flat-spacing pb-0" id="workScroll">
      <div className="bg-img effectFade fadeUp">
        <img
          loading="lazy"
          width="1440"
          height="720"
          src="assets/images/item/mountain.png"
          alt="Image"
        />
      </div>

      <div className="content-wrap-1 wrap-list-btn">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="col-left mb-md-0">
                <p className="mini-title text-caption text-white-64 effectFade fadeUp">
                  SELECTED WORKS
                </p>

                <div className="position-relative effectFade fadeUp no-div">
                  <div className="slick-nav">
                    <div>
                      <p className="text-slide text-display-2 fw-semibold">
                        Future
                      </p>
                    </div>
                    <div>
                      <p className="text-slide text-display-2 fw-semibold">
                        NexoPay
                      </p>
                    </div>
                    <div>
                      <p className="text-slide text-display-2 fw-semibold">
                        Seeson
                      </p>
                    </div>
                  </div>

                  <div className="image-award">
                    <img
                      loading="lazy"
                      width="80"
                      height="80"
                      src="assets/images/item/award.svg"
                      alt="Award"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="col-right">
                <div className="slick-for">
                  <div>
                    <div className="image effectFade fadeZoom">
                      <img
                        src="assets/images/section/work-1.jpg"
                        alt="Work 1"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="image">
                      <img
                        src="assets/images/section/work-2.jpg"
                        alt="Work 2"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="image">
                      <img
                        src="assets/images/section/work-3.jpg"
                        alt="Work 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrap-2">
        <div className="container position-relative z-5">
          <div className="row">
            <div className="col-md-4">
              <ul className="work-tag">
                <li>
                  <div className="group-btn">
                    <a href="#" className="tf-btn style-2">
                      BRANDING
                    </a>
                    <a href="#" className="tf-btn style-2">
                      VISUAL IDENTITY
                    </a>
                  </div>
                </li>
                <li>
                  <div className="group-btn">
                    <a href="#" className="tf-btn style-2">
                      WEBSITE DESIGN
                    </a>
                    <a href="#" className="tf-btn style-2">
                      BRANDING
                    </a>
                    <a href="#" className="tf-btn style-2">
                      VISUAL IDENTITY
                    </a>
                  </div>
                </li>
                <li>
                  <div className="group-btn">
                    <a href="#" className="tf-btn style-2">
                      BRANDING
                    </a>
                    <a href="#" className="tf-btn style-2">
                      VISUAL IDENTITY
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4">
              <div className="group-btn-slider">
                <div className="btn-nav-swiper cs-pointer text-caption fw-medium link nav-prev-swiper">
                  <i className="icon icon-arrow-long-left"></i> PREV
                </div>
                <div className="btn-nav-swiper cs-pointer text-caption fw-medium link nav-next-swiper">
                  NEXT <i className="icon icon-arrow-long-right"></i>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="col-right">
                <p className="text-display-2 letter-space--3 fw-semibold">
                  20<span className="text-primary">25</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
