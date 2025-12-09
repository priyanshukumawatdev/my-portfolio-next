
import Header from '../components/Header'; 
import Hero from '../components/Hero'; 
import SelectWork from '../components/SelectWork'; 
import Services from '../components/Services'; 
import Feature from '../components/Feature'; 
import Proccess from '../components/Proccess'; 
import AboutMe from '../components/AboutMe'; 
import TechStack from '../components/TechStack'; 
import BrandPartners from '../components/BrandPartners'; 
import Awards from '../components/Awards'; 
import TrustFunded from '../components/TrustFunded'; 
import PricingMadeEasy from '../components/PricingMadeEasy'; 
import AskQuestions from '../components/AskQuestions'; 
import Inquiry from '../components/Inquiry'; 

export default function Home() {
  return (<>

   <canvas className="cursor-trail d-none d-xl-block" id="trail"></canvas>

    <button id="goTop">
        <span className="border-progress"></span>
        <span className="ic-wrap">
            <span className="icon icon-arrow-caret-right"></span>
        </span>
    </button>
   
    <div className="preloader overflow-hidden">
        <div className="site-name"><span>DAVIES</span></div>
        <div className="preloader-gutters">
            <div className="bar">
                <div className="inner-bar"></div>
            </div>
            <div className="bar">
                <div className="inner-bar"></div>
            </div>
            <div className="bar">
                <div className="inner-bar"></div>
            </div>
            <div className="bar">
                <div className="inner-bar"></div>
            </div>
            <div className="bar">
                <div className="inner-bar"></div>
            </div>
            <div className="bar">
                <div className="inner-bar"></div>
            </div>
            <div className="bar">
                <div className="inner-bar"></div>
            </div>
            <div className="bar">
                <div className="inner-bar"></div>
            </div>
        </div>
    </div>
      <main id="wrapper">
        <div className="tf-left-bar">
            <a className="btn-setting-color" data-bs-toggle="offcanvas" href="#settingColorMenu"><i className="icon-gear"></i></a>
        </div>

         <Header />
         <Hero /> 
         <SelectWork /> 
         {/* <Feature />  */}
         <Services /> 
         <Proccess /> 
         <AboutMe /> 
         <TechStack /> 
         <BrandPartners /> 
         <Awards /> 
         {/* <TrustFunded />  */}
         {/* <PricingMadeEasy />  */}
         <AskQuestions /> 
         <Inquiry /> 
       
    </main>


   <div className="offcanvas-menu">
        <div className="offcanvas-content">
            <div className="container h-100">
                <div className="offcanvas-content_wrapin">
                    <div className="canvas_head">
                        <a href="index.html" className="logo-site">
                            <i className="icon icon-davies-logo"></i>
                        </a>
                        <div className="btn-mobile-menu close-mb-menu text-caption link">
                            <i className="icon icon-close"></i>
                            CLOSE
                        </div>
                    </div>
                    <div className="canvas_center">
                        <ul className="nav-ul-mb">
                            <li>
                                <div className="item close-mb-menu">
                                    <a href="#workScroll" className="mb-menu-link text-display-1">
                                        <span className="text">Works</span>
                                        <div className="infiniteSlide_text_main">
                                            <div className="infiniteSlide infiniteSlide_text" data-clone="5">
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Works
                                                </p>
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Works
                                                </p>
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Works
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="item close-mb-menu">
                                    <a href="#aboutScroll" className="mb-menu-link text-display-1">
                                        <span className="text">About</span>
                                        <div className="infiniteSlide_text_main">
                                            <div className="infiniteSlide infiniteSlide_text" data-clone="5">
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View About
                                                </p>
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View About
                                                </p>
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View About
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="item close-mb-menu">
                                    <a href="#serviceScroll" className="mb-menu-link text-display-1">
                                        <span className="text">Services</span>
                                        <div className="infiniteSlide_text_main">
                                            <div className="infiniteSlide infiniteSlide_text" data-clone="5">
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Services
                                                </p>
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Services
                                                </p>
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Services
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="item close-mb-menu">
                                    <a href="#contactScroll" className="mb-menu-link text-display-1">
                                        <span className="text">Contact</span>
                                        <div className="infiniteSlide_text_main">
                                            <div className="infiniteSlide infiniteSlide_text" data-clone="5">
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Contact
                                                </p>
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Contact
                                                </p>
                                                <p className="text-body-2 letter-space--1">
                                                    <span className="text-primary">//</span> View Contact
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="canvas_foot">
                        <div className="left">
                            <a href="mailto:davies@gmail.com" className="link text-caption">DAVIES@GMAIL.COM</a>
                            <p className="text-caption">
                                CUP <span className="clock"></span>
                            </p>
                        </div>
                        <div className="right">
                            <a href="#" className="tf-link-icon text-caption link">
                                <i className="icon icon-arrow-top-right"></i>
                                TWITTER (X)
                            </a>
                            <a href="#" className="tf-link-icon text-caption link">
                                <i className="icon icon-arrow-top-right"></i>
                                DRIBBBLE
                            </a>
                            <a href="#" className="tf-link-icon text-caption link">
                                <i className="icon icon-arrow-top-right"></i>
                                LINKEDIN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="offcanvas offcanvas-end offcanvas-color" id="settingColorMenu">
        <div className="offcanvas-content">
            <span className="icon-close-popup" data-bs-dismiss="offcanvas">
                <i className="icon-close"></i>
            </span>
            <div className="canvas-header">
                <h3 className="fw-semibold">Configuration</h3>
            </div>
            <div className="canvas-body">
                <h6 className="title fw-semibold">COLORS</h6>
                <div className="settings-color list-choose">
                    <button type="button" className="choose-item link-no-action active"></button>
                    <button type="button" className="choose-item link-no-action"></button>
                    <button type="button" className="choose-item link-no-action"></button>
                    <button type="button" className="choose-item link-no-action"></button>
                    <button type="button" className="choose-item link-no-action"></button>
                    <button type="button" className="choose-item link-no-action"></button>
                    <button type="button" className="choose-item link-no-action"></button>
                    <button type="button" className="choose-item link-no-action"></button>
                </div>
            </div>
        </div>
    </div>
  </>
  );
}
