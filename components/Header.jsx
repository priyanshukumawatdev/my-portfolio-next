"use client";

export default function Header() {
  return (
    <header className="tf-header">
      <div className="header-inner">
        <div className="container">
          <div className="row">

            {/* Logo */}
            <div className="col-6 col-md-1">
              <a href="/" className="logo-site">
                <i className="icon icon-davies-logo"></i>
              </a>
            </div>

            {/* Navigation */}
            <div className="col-7 d-none d-md-block">
              <div className="box-navigation">
                <ul className="nav-menu-main">
                  <li className="menu-item">
                    <a href="#workScroll" className="item-link link text-caption">
                      <span>01 /</span> WORKS
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#serviceScroll" className="item-link link text-caption">
                      <span>02 /</span> SERVICES
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#aboutScroll" className="item-link link text-caption">
                      <span>03 /</span> ABOUT
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#contactScroll" className="item-link link text-caption">
                      <span>04 /</span> CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Email + Clock */}
            <div className="col-3 col-md-2 d-none d-sm-block">
              <div className="header-contact">
                <a href="mailto:davies@gmail.com" className="link text-caption">
                  DAVIES@GMAIL.COM
                </a>
                <p className="text-caption">
                  CUP <span className="clock"></span>
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="col-6 col-sm-3 col-md-2 d-flex justify-content-end align-items-start">
              <button
                type="button"
                className="btn-mobile-menu open-mb-menu text-caption text-white link"
              >
                <i className="icon icon-menu"></i>
                MENU
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
