import { Component } from 'react';
import { initShapeAnimation } from '../lib/shapeOverlays';
import Link from 'next/link';
// import { Container } from '@material-ui/core';
import { getDeviceName } from '../lib/helper';
let deviceName = getDeviceName();
export default class Headerfour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      isMenu: true,
      isServicesMenu: false,
      isPackagesMenu: false,
    };
  }
  componentDidMount() {
    initShapeAnimation();
    this.samePageClick();
  }

  samePageClick = () => {
     
    let URL = window.location.pathname;
    console.log(URL);
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

  openNewMenu = (event) => {
    event.currentTarget.querySelector('h1').style.color = '#1C5B82';
    event.currentTarget.querySelector('span').style.color = '#1C5B82';
    event.currentTarget.querySelector('.new-menu-sub').style.display = 'block';
    // getting the name of the menu
    let menuName = event.currentTarget.querySelector('h1').innerHTML;
    console.log(menuName);
    // changing the background text 
    // event.currentTarget.parentNode.parentNode.querySelector('.selected-bg-menu h1').innerHTML = menuName;

  }

  closeNewMenu = (event) => {
    event.currentTarget.querySelector('h1').style.color = '#212121';
    event.currentTarget.querySelector('span').style.color = '#212121';
    event.currentTarget.querySelector('.new-menu-sub').style.display = 'none';
  }


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






  render() {
    // const refreshPage = () => {
    //     window.location.reload();
    //   }

    const refreshPage = () => {
      console.log("we were c") 
      if (window.location.pathname == '/') {
        window.location.reload();
      } else {
        window.location.href = "/";
      }

    }
    const samePageRefresh = (event) => {
      console.log("Header Four: we clicked on samePAgeRefresh"); 
       let urlName = event.currentTarget.querySelector("a").getAttribute("href"); // get url of the clicked menu
       console.log(urlName);
       let currentURL = window.location.pathname;
     if(urlName == currentURL){
        window.location.reload();
     }
    }





    return (
      <header className="mg-main-header" id="myHeader" style={{
        position: this.state.isMenu ? "" : "fixed"
      }}>
        <div className="container-fluid p-0">
          <div className={`row ${this.state.addClass ? 'drop-menu-top-bar' : ''}`}>
            <div className="col-3 logos">
              <Link href="/">
                <a>
                  <img loading="lazy"  style={{ maxHeight: "40px" }} src={this.state.isMenu ? "/images/site-logos.svg" : "/images/site-logos.svg"} className="img-fluid dflts" alt="Tech Bay Solution" />
                  <img
                  loading="lazy"
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
                    <a href="tel:+97144257880" className={this.state.isMenu ? '' : ''}>
                      <i className={this.state.isMenu ? 'fa fa-phone' : 'fa fa-phone '}></i> +971 4 425 7880
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@techbay.co" className={this.state.isMenu ? '' : ''}>
                      <i className={this.state.isMenu ? 'far fa-envelope' : 'far fa-envelope '}></i> info@techbay.co
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 justyfiedMenu">
              <div className="mg-header-content-wrapper d-flex align-items-center justify-content-md-end justify-content-end">
                <div style={{ borderColor: "black" }}
                  className="mg-header-icon hamburger-icon"
                  onClick={this.toggleHeaderMenuClassHandler}
                >
                  <img src="/images/mg-menu-icon.svg" alt="icon" />
                </div>
                <span className="mg-menu-hr"></span>
                <div className="mg-menu-wrapper">
                  <button style={{ color: "#000" }}
                    type="button"
                    onClick={this.toggleHeaderMenuClassHandler}
                    className="btn mg-link-btn prox-font hamburger"
                  >
                    {this.state.isMenu ? 'Menu' : 'Close'}
                  </button>
                  <div className={`drop-menu-listing ${this.state.addClass ? 'show' : ''}`}>
                    <div id="menu-content-section" className="drop-menu-link">

                      <div className="menu-container-class container-fluid">
                        {/* <div className = "selected-bg-menu">
                            
                            <h1 className = "text-center">MENU</h1>
                            
                      </div>  */}
                        <div className="new-menu-wrapper">

                          <div onMouseEnter={this.openNewMenu} onMouseLeave={this.closeNewMenu} className="new-menu-item">
                            <h1 onClick={refreshPage}>
                              HOME
                              </h1>
                            
                            <div className="new-menu-sub">
                            </div>
                          </div>
                          <div onMouseEnter={this.openNewMenu} onMouseLeave={this.closeNewMenu} className="new-menu-item sub">

                            {deviceName != 'Mobile'
                              ? <h1><Link href="/services/branding-and-pr"><a> BRANDING</a></Link></h1>
                              : <h1>BRANDING</h1>
                            }

                            <span></span>
                            <div className="new-menu-sub">
                            <div onClick = {samePageRefresh}>
                               <Link href="/branding-design-services">
                                <a><li>DESIGN SERVICES</li></a>
                              </Link>
                               </div>

                              
                              <div onClick = {samePageRefresh}>
                              <Link href="/branding-services">
                                <a><li>BRANDING SERVICES</li></a>
                              </Link>
                              </div>
                        
                        
                             <div onClick = {samePageRefresh}>
                              <Link href="/media-relation-agency">
                                <a><li>MEDIA AGENCY</li></a>
                              </Link>
                              </div>

                               <div onClick = {samePageRefresh}>
                               <Link href="/pr-agency-dubai">
                                <a> <li>PUBLIC RELATION</li></a>
                              </Link>
                              </div> 

                              <div onClick = {samePageRefresh}>
                              <Link href="/motion-designing-services">
                                <a><li> MOTION DESIGNING</li></a>
                              </Link>      
                              </div>
                          
                              <div onClick  = {samePageRefresh}>
                              <Link href="/video-production-services">
                                <a> <li> VIDEO PRODUCTION    </li>
                                </a>
                              </Link>
                              </div>
                              <div onClick = {samePageRefresh}>
                              <Link href="/advertising-agency">
                                <a><li>ADVERTISING AGENCY</li>
                                </a>
                              </Link>
                              </div> 

                            </div>
                          </div>


                          <div onMouseEnter={this.openNewMenu} onMouseLeave={this.closeNewMenu} className="new-menu-item sub">

                            {deviceName != 'Mobile'
                              ? <h1><Link href="/services/web-and-app-development"><a> DEVELOPMENT</a></Link></h1>
                              : <h1>DEVELOPMENT</h1>
                            }

                            <span></span>
                            <div className="new-menu-sub">


                            <div onClick = {samePageRefresh}>
                            <Link href="/web-designing-services">
                                <a>
                                  <li>
                                    WEB DESIGNING
                                </li>
                                </a>
                              </Link>
                            </div>
                            <div onClick = {samePageRefresh}>
                            <Link href="/app-designing-services">
                                <a>
                                  <li>
                                    APP DESIGNING
                                </li>
                                </a>
                              </Link>
                            </div>

                            <div onClick = {samePageRefresh}>
                            <Link href="/web-development-services">
                                <a>
                                <li>
                                    WEB DEVELOPMENT
                               </li>
                                </a>
                              </Link>
                            </div>

                            <div onClick = {samePageRefresh}>
                            <Link href="/app-development-services">
                                <a>
                                <li>
                                    APP DEVELOPMENT
                               </li>
                                </a>
                              </Link>
                            </div>

                            <div onClick = {samePageRefresh}>
                            <Link href="/content-management-system">
                                <a>
                                  <li>
                                    CMS SOLUTIONS
                               </li>
                                </a>
                              </Link>
                            </div>
                            <div onClick = {samePageRefresh}>
                            <Link href="/erp-services">
                                <a>
                                  <li>
                                    ERP SOLUTIONS
                               </li>
                                </a>
                              </Link>
                            </div>

                    
                                             <div onClick = {samePageRefresh}>
                            <Link href="/ecommerce-services">
                                <a>
                                  <li>
                                    E-COMMERCE
                               </li>
                                </a>
                              </Link>
                            </div>
                            <div onClick = {samePageRefresh}>
                            <Link href="/crm-solutions">
                                <a>
                                  <li>
                                    CRM SOLUTIONS
                                 </li>
                                </a>

                              </Link>
                            </div>
                            <div onClick = {samePageRefresh}>
                            <Link href="/ui-ux-designing-services">
                                <a>
                                  <li>
                                    UI/UX DESIGNING
                               </li>
                                </a>
                            </Link>
                            </div>

                            </div>
                          </div>



                          <div onMouseEnter={this.openNewMenu} onMouseLeave={this.closeNewMenu} className="new-menu-item sub">

                            {deviceName != 'Mobile'
                              ? <h1><Link href="/services/digital-marketing-agency-dubai"><a> MARKETING</a></Link></h1>
                              : <h1>MARKETING</h1>
                            }
                            <span></span>
                            <div className="new-menu-sub">


                            <div onClick = {samePageRefresh}>
                                <Link href="/seo-services">
                                <a>
                                  <li>
                                    SEO SERVICES
                                 </li>
                                </a>
                              </Link>
                            </div>


                            <div onClick = {samePageRefresh}>
                              <Link href="/paid-media-marketing">
                                <a>
                                  <li>
                                    PAID MEDIA MARKETING
                                  </li>
                                </a>
                              </Link>
                              </div>

                              <div onClick = {samePageRefresh}>
                                <Link href="/cro-optimization-services">
                                <a>
                                  <li>
                                    CRO OPTIMIZATION
                              </li>
                                </a>
                              </Link>
                                </div>



                              <div onClick = {samePageRefresh}>
                              <Link href="/content-marketing-services">
                                <a>
                                  <li>
                                    CONTENT MARKETING
                               </li>
                                </a>
                              </Link>
                                </div>

                                <div onClick = {samePageRefresh}>                               
                              <Link href="/social-media-marketing-services">
                                <a>
                                  <li>
                                    SMM MARKETING
                                 </li>
                                </a>
                              </Link>
                              </div>


                              <div onClick = {samePageRefresh}>
                                <Link href="/remarketing-ppc-services">
                                <a><li>REMARKETING</li></a>
                              </Link>
                                </div>

                                <div onClick = {samePageRefresh}>
                                <Link href="/copywriting-services">
                                <a>
                                  <li>
                                    COPYWRITING
                               </li>
                                </a>
                              </Link>
                                </div>
             

       

         


                            </div>
                          </div>




                          {/* the packages menu */}

                          <div onMouseEnter={this.openNewMenu} onMouseLeave={this.closeNewMenu} className="new-menu-item sub">
                           
                            <h1>PACKAGES</h1>
                            <span></span>
                            <div className="new-menu-sub">

                            <div onClick = {samePageRefresh}>
                            <Link href="/seo-packages">
                                <a>
                                  <li>
                                    SEO Packages
                                 </li>
                                </a>
                            </Link>
                            </div>

                              <div onClick = {samePageRefresh}>
                              <Link href="/ppc-packages">
                                <a>
                                  <li>
                                    PPC Packages
                                 </li>
                                </a>
                              </Link>
                              
                              </div>

                              <div onClick = {samePageRefresh}>
                              <Link href="/social-media-packages">
                                <a>
                                  <li>
                                    SMM Packages
                                 </li>
                                </a>
                              </Link>
                              </div>
                              <div onClick = {samePageRefresh}>
                              <Link href="/startup-packages">
                                <a><li>STARTUP Packages</li></a>
                              </Link>
                              </div>
                            </div>
                          </div>

                          <div    onMouseEnter={this.openNewMenu} onMouseLeave={this.closeNewMenu} className="new-menu-item">
                            <h1>
                              <Link href="/contact-us">
                                CONTACT US
                           </Link>
                            </h1>
                            <span></span>
                            <div className="new-menu-sub">
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="headerFooter">
                        <div className="abouts">
                            {/* footer menu 1 */}
             {/* <Link href="/about-us"><a>About Us</a></Link> */}


             <div className="header-custom-dropdown">
            <a className="dropdown-title">
              About Us <i class="fas fa-chevron-down"></i>
            </a>
            <div className="custom-menu-list">
              <ul style={{ top: "-65px"  }}>
              <li><Link href="/about-us">About Us</Link></li>  
              <li>
            <a download="/images/Techbay-Solutions-Profile.pdf" href="/images/Techbay-Solutions-Profile.pdf">Corporate Profile</a> 
                {/* <Link href ="/terms-and-conditions">Corporate Profile</Link> */}
              </li>  
              </ul>
            </div> 
            </div>  





            
            {/* footer menu 2 */}
            {/* <a download="/images/Techbay-Solutions-Profile.pdf" href="/images/Techbay-Solutions-Profile.pdf">Corporate Profile</a> */}
            
            <div className="header-custom-dropdown">
            <a className="dropdown-title">
              Our Work <i class="fas fa-chevron-down"></i>
            </a>
            <div className="custom-menu-list">
              <ul style={{ top: "-65px"  }}>
              <li><Link href="/case-studies">Case Studies</Link></li>  
              <li>
               <a download="/images/Techbay-Solutions-Profile.pdf" href="/images/Techbay-Solutions-Profile.pdf">Portfolio</a> 
              </li>
              </ul>
            </div> 
            </div>  

            {/* footer menu 3 */}
            <div className="header-custom-dropdown">
            <a className="dropdown-title">
              Privacy Policies <i class="fas fa-chevron-down"></i>
            </a>
            <div className="custom-menu-list">
              <ul style={{ top: "-90px"  }}>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>  
              <li><Link href ="/terms-and-conditions">Terms & Conditions</Link></li>  
              <li><Link href="/refund-policy">Cancellation & Refund</Link> </li>  
              </ul>
            </div> 
       
       
            </div>   
       
                        </div>
                        <div className="socials">
                        <a href="https://www.facebook.com/techbay.co">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="https://pk.linkedin.com/company/techbayco">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="https://www.instagram.com/techbay.co/">
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a href="https://www.youtube.com/c/Techbayco/">
                            <i className="fab fa-youtube"></i>
                          </a>
                          <a href ="https://twitter.com/techbayco/">
                            <i className="fab fa-twitter"></i>
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
        .selected-bg-menu h1 a{
          color: #337093;
          text-decoration: none;
        }
        .new-menu-item .new-menu-sub a {
          width: 100%;
          padding-top: 4px;
          padding-bottom: 4px;
          display: block;
          color: #212121;
          font-family: 'Roboto', sans-serif;
          font-size: 1.3rem;
          cursor: pointer;
      }
        @media only screen and (max-width: 600px) {
          .drop-menu-link .headerFooter .abouts a{
            margin-right: 10px;
          }
          .drop-menu-link .headerFooter{
            padding: 0 15px;
          }
          .drop-menu-listing .custom-dropdown-menu.show{
            margin-left: 0;
            overflow: scroll;
            max-height: 193px;
          }
        }
        .position-fixed{
          position: fixed;
        }
        .new-menu-item a {
          color: inherit;
          text-decoration: none;
      }

        .white-color{color: #fff !important;}
        .dark-color{color: #212121;}
            
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

        @media screen and (max-width: 1300px) and (min-width: 920px) {

          .drop-menu-listing .custom-dropdown-menu.show{
            background-color: rgba(48, 120, 157, 0.6);
            max-height: 200px;
            overflow-y: auto;
          }

        }

        #menu-content-section{
          background-image: url('/images/new-menu-banner.png');
          background-color: #fff;
           background-position: center;
           background-size: cover;
           height: 100vh;
           background-repeat:no-repeat;
        }
       
        .new-menu-item{
          position: relative;
          display: inline-block;
          padding-left: 10px;
          padding-right: 10px;
          margin-top: 20vh;
          -webkit-transition: all .3s ease-in-out;
          -o-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
      
        }





        .new-menu-item h1{
          display: inline-block;
          padding-top: 20px; 
          color: #212121;
          font-weight: bold;
        }
        .new-menu-item span{
         position: absolute;
         left: 6px; 
        }
        .new-menu-wrapper{
          display: flex;
          justify-content: space-around; 
          position: relative;
          /* margin-top: -120px; */
        }
        .new-menu-item .new-menu-sub{
          display: none;
        }
       .new-menu-item:hover  .new-menu-item .new-menu-sub{
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;    
        -o-transition: all .3s ease-in-out;
         display: block;
       }
        .new-menu-item.sub:hover{
          margin-top: 0;
          -webkit-transition: all .3s ease-in-out;
          -o-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
      
        }


        .new-menu-item .new-menu-sub a{
         width: 100%;
         padding-top: 5px;
         padding-bottom: 5px;
         display: block;
         color: #212121;
         font-family: 'Roboto', sans-serif;
   
         cursor: pointer;
        }
        .new-menu-item .new-menu-sub a:hover{
          color: #337093;
        }
        .selected-bg-menu h1{
          font-size: 9rem;
          color: #337093;
          opacity: 0.07;
          /* margin-bottom: -13px; */
          position: relative;
          margin-bottom: 0;
        }

        @media only screen and (max-width: 600px) {
          .new-menu-item{
            margin-top: 0vh !important;
          }
          .new-menu-wrapper{
            display: flex;
            justify-content: space-around; 
            position: relative;
            margin-top: -120px;
            flex-direction: column;
            text-align: center;
            padding-top: 14vh;
          }
          .new-menu-item h1{
            font-size: 24px;
          }
          .new-menu-item span{
            display: none;
          }
          .selected-bg-menu h1{
            font-size: 70px;
            display: none;
          }
          .new-menu-item .new-menu-sub a{
            font-size: 14px;
          }
        }
        @media only screen and (max-width: 420px) {
          .new-menu-item h1{
            font-size: 19px;
          }
          .new-menu-item .new-menu-sub{
            max-height: 170px;
            overflow: auto;
          }
         }



      `}
        </style>
      </header>
    );
  }
}
