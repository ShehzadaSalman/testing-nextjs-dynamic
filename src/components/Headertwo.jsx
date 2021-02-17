import { Component } from 'react';
import { initShapeAnimation } from '../lib/shapeOverlays';
import Link from 'next/link';

export default class Headertwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      isMenu: true,
      isServicesMenu: false,
      isPackagesMenu: false,
      isBrandMenu: false,
    };
  }
  componentDidMount() {
    initShapeAnimation();
  }
  toggleHeaderMenuClassHandler = () => {
    this.setState({
      addClass: !this.state.addClass,
      isMenu: !this.state.isMenu,
    });
  };



  toggleServicesMenuHandler = () => {
    this.setState({
      isServicesMenu: !this.state.isServicesMenu,
    });
    {/* close Brand menu if open */ }
    if (this.state.isBrandMenu) {
      this.setState({
        isBrandMenu: !this.state.isBrandMenu,
      });
    }
    {/* close package menu if open */ }

    if (this.state.isPackagesMenu) {
      this.setState({
        isPackagesMenu: !this.state.isPackagesMenu,
      });
    }




  };

  togglePackagesMenuHandler = () => {
    this.setState({
      isPackagesMenu: !this.state.isPackagesMenu,
    });

    {/* close Brand menu if open */ }
    if (this.state.isBrandMenu) {
      this.setState({
        isBrandMenu: !this.state.isBrandMenu,
      });
    }

    {/* close Service  menu if open */ }
    if (this.state.isServicesMenu) {
      this.setState({
        isServicesMenu: !this.state.isServicesMenu,
      });
    }





  };

  toggleBrandMenuHandler = () => {
    this.setState({
      isBrandMenu: !this.state.isBrandMenu,
    });

    {/* close package menu if open */ }

    if (this.state.isPackagesMenu) {
      this.setState({
        isPackagesMenu: !this.state.isPackagesMenu,
      });
    }

    {/* close services menu if open */ }

    if (this.state.isServicesMenu) {
      this.setState({
        isServicesMenu: !this.state.isServicesMenu,
      });
    }




  };


  refreshPage = () => {
    window.location.reload();
  }

  render() {

    return (
      <header className={`mg-main-header ${this.state.addClass ? 'position-fixed' : ''}  `} id="myHeader">
        <div className="container-fluid p-0">
          <div className={`row ${this.state.addClass ? 'drop-menu-top-bar' : ''}`}>
            <div className="col-3 logos">
              <Link href="/">
                <a>
                  {/* <img src={this.state.isMenu ? "/images/logo_black.png" : "/images/logo.png" } className="img-fluid dflts" alt="Tech Bay Solution" />
                 */}
                      { this.state.isMenu 
                ?  <img src="/images/darklogo.png" className="img-fluid dflts" alt="Tech Bay Solution" />
                
                : <img style = {{ height: "45px"}} src="/images/logo.png" className="img-fluid dflts" alt="Tech Bay Solutions" />
                 
                 } 



                  <img
                    src="/images/site-logos.svg"
                    className="img-fluid sticks"
                    alt="Tech Bay Solution"
                  />
                </a>
              </Link>


            </div>
            <div className="col-6 d-flex contctDetails xs-hidden">
              <div className="mg-language-selector">
                <ul>
                  <li>
                    <a href="tel:+97144257880" className = {this.state.isMenu ? '' : 'white-color'}>
                      <i className = {this.state.isMenu ? 'fa fa-phone' : 'fa fa-phone white-color'}></i> +971 4 425 7880
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@techbay.co" className = {this.state.isMenu ? '' : 'white-color'}>
                      <i className={this.state.isMenu ? 'far fa-envelope' : 'far fa-envelope white-color'}></i> info@techbay.co
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 justyfiedMenu">
              <div className="mg-header-content-wrapper d-flex align-items-center justify-content-md-end justify-content-end">
                <div
                  className="mg-header-icon hamburger-icon"
                  onClick={this.toggleHeaderMenuClassHandler}
                >
                  <img src="/images/mg-menu-icon.svg" alt="icon" />
                </div>
                <span className="mg-menu-hr"></span>
                <div className="mg-menu-wrapper">
                  <button
                    type="button"
                    onClick={this.toggleHeaderMenuClassHandler}
                    className="btn mg-link-btn prox-font hamburger"
                  >
                    {this.state.isMenu ? 'Menu' : 'Close'}
                  </button>
                  <div className={`drop-menu-listing ${this.state.addClass ? 'show' : ''}`}>
                    <div className="drop-menu-link">

                      <ul className="list-inline menuNavMenu">
                        <li>
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>






                        <div id="brandingmenu" className="dropdown-custom d-flex- flex-column -align-items-center justify-content-center">
                          <button className="btn custom-dropdown-toggle"
                            onClick={this.toggleBrandMenuHandler}>
                            Branding
                             </button>
                          <div className={'custom-dropdown-menu d-flex flex-column ' + (this.state.isBrandMenu ? 'show' : '')}>
                          
                          <Link href="/advertising-agency">
                              <a>Advertisement</a>
                            </Link>
                            <Link href="/branding-services">
                              <a>Brand Marketing</a>
                            </Link>
                            <Link href="/branding-design-services">
                              <a>Marketing Media</a>
                            </Link>
                            <Link href="/media-relation-agency">
                              <a>Media Relation</a>
                            </Link>
                            <Link href="/pr-agency-dubai">
                              <a>PR Planning</a>
                            </Link>
                          
                          </div>
                        </div>


                        <div className="dropdown-custom d-flex- flex-column -align-items-center justify-content-center">
                          <button
                            className="btn custom-dropdown-toggle"
                            onClick={this.toggleServicesMenuHandler}
                          >
                            Development
                          </button>


                          <div
                            className={
                              'custom-dropdown-menu d-flex flex-column ' +
                              (this.state.isServicesMenu ? 'show' : '')
                            }>

                    <Link href="/database-management-services">
                              <a>MYSQL</a>
                            </Link>
                            <Link href="/web-designing-services">
                              <a>Web Design</a>
                            </Link>
                            <Link href="/3d-app-development-services">
                              <a>3d Application</a>
                            </Link>
                            <Link href="/cro-optimization-services">
                              <a>CRO Development</a>
                            </Link>
                            <Link href="/crm-solutions">
                              <a>CRM Development</a>
                            </Link>
                            <Link href="/web-app-development-services">
                              <a>Web development</a>
                            </Link>
                            <Link href="/motion-designing-services">
                              <a>Motion Graphics</a>
                            </Link>

                            <Link href="/ui-ux-designing-services">
                              <a>UI UX Designing</a>
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown-custom d-flex- flex-column -align-items-center justify-content-center">
                          <button
                            className="btn custom-dropdown-toggle"
                            onClick={this.togglePackagesMenuHandler}
                          >
                            Marketing
                          </button>
                          <div
                            className={
                              'custom-dropdown-menu d-flex flex-column ' +
                              (this.state.isPackagesMenu ? 'show' : '')
                            }>
                            
                            
                            <Link href="/seo-services">
                              <a>Search Engine Optimization</a>
                            </Link>
                            <Link href="/social-media-marketing-services">
                              <a>Social Media Marketing</a>
                            </Link>
                            <Link href="/startup">
                              <a>Start Up</a>
                            </Link>
                            <Link href="/copywriting-services">
                              <a>Content Creation</a>
                            </Link>
                            <Link href="/content-marketing-services">
                              <a>Content Marketing</a>
                            </Link>
                            <Link href="/paid-media-marketing">
                              <a>Pay Per Click</a>
                            </Link>
                            
                            <Link href="/video-production-services">
                              <a>Video Production</a>
                            </Link>
                            <Link href="/membership">
                              <a>Membership</a>
                            </Link>
                            <Link href="/remarketing-ppc-services">
                              <a>Re Targeting</a>
                            </Link>



                          </div>
                        </div>
                        <li>
                          <Link href="/contact-us">
                            <a>Contact Us</a>
                          </Link>
                        </li>
                      </ul>

                      <div className="headerFooter">
                        <div className="abouts">
                          <Link href="/about-us">
                            <a>About Us</a>
                          </Link>
                          <a download = "/images/Techbay-Solutions-Profile.pdf" href="/images/Techbay-Solutions-Profile.pdf">Corporate Profile</a>
                        </div>
                        <div className="socials">
                          <a href="https://www.facebook.com/techbay.co">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="https://www.linkedin.com/company/techbay/">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="https://www.instagram.com/techbay.co/">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <svg
                      className="shape-overlays"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="g1" x1=".5" y1="1" x2=".5">
                          <stop stopColor="#79bee8" />
                          <stop stopColor="#79bee8" />
                          <stop offset="1" stopColor="#356e96" />
                        </linearGradient>
                      </defs>
                      <path fill="#e7e6eb" className="shape-overlays__path"></path>
                      <path fill="url(#g1)" className="shape-overlays__path"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
        #brandingmenu{
       left: 45%;
       top: 45%;

        }
        @media only screen and (max-width: 600px) {
          .drop-menu-listing .custom-dropdown-menu.show{
            margin-left: 0;
            overflow: scroll;
            max-height: 193px;
          }
        }
        .position-fixed{
          position: fixed;
        }
        .white-color{
          color: #fff !important;
        }


        @media only screen and (min-width: 600px) {
          .drop-menu-listing .custom-dropdown-menu.show{
            background-color: rgba(48, 120, 157, 0.6);
            max-height: 270px;
            overflow-y: auto;
          }
          .drop-menu-listing .custom-dropdown-menu.show::-webkit-scrollbar{
            width: 8px;
            background-color: rgba(48, 120, 157, 0.3);
            
          }
          .drop-menu-listing .custom-dropdown-menu.show::-webkit-scrollbar-track{
            border-radius: 10px;
            background-color: rgba(48, 120, 157, 0.3);
          }
  
          .drop-menu-listing .custom-dropdown-menu.show::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background-color: rgba(241, 246, 249, 1);
  
          }
          .drop-menu-listing .custom-dropdown-menu.show a{
            padding-left: 10px;
            padding-right: 10px;
          }
  
  



        }
        

        @media screen and (max-width: 1300px) and (min-width: 920px) {

          .drop-menu-listing .custom-dropdown-menu.show{
            background-color: rgba(48, 120, 157, 0.6);
            max-height: 200px;
            overflow-y: auto;
          }

        }




      `}
        </style>
      </header>

    );
  }
}
