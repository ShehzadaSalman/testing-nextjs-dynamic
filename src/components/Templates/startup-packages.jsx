import Head from 'next/head';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { addStickyHeader } from '../lib/helper';
import TermOfServices from '../components/TermOfServices';
import Headerfive from '../components/HeaderFive';
import NewTermsOfService from '../components/NewComponents/NewTermsOfService';
import PackageForm from '../components/NewComponents/PackageForm';
import { useRouter } from 'next/router';
export default () => {

  const router = useRouter();
  console.log(router.pathname);
  var pageurl = "https://techbay.co"+router.pathname;

  const openPackageForm = (event) => {
    let valueForm = event.currentTarget.querySelector('span').innerHTML;
    
    if(valueForm  == 'Good'){
      // document.querySelector('#services-package .package-title').innerHTML = 'Package Startup: Good';
      document.querySelector('#services-package .package-title-form').value = 'Package Startup: Good';
      document.querySelector('#services-package .package-form').value = 'Package Startup: Good';
    
    }
    else if(valueForm  == 'Very Good'){
      // document.querySelector('#services-package .package-title').innerHTML = 'Package Startup: Very Good';
      document.querySelector('#services-package .package-title-form').value = 'Package Startup: Very Good';
      document.querySelector('#services-package .package-form').value = 'Package Startup: Very Good';
    
    }
    else if(valueForm  == 'The Best'){
      // document.querySelector('#services-package .package-title').innerHTML = 'Package Startup: The Best';
      document.querySelector('#services-package .package-title-form').value = 'Package Startup: The Best';
      document.querySelector('#services-package .package-form').value = 'Package Startup: The Best';
    
    }
    else if(valueForm  == 'Package PPC: Titanium'){
      // document.querySelector('#services-package .package-title').innerHTML = 'Package Startup: Titanium';
      document.querySelector('#services-package .package-title-form').value = 'Package Startup: Titanium';
      document.querySelector('#services-package .package-form').value = 'Package Startup: Titanium';
    
    }
    else{
      // document.querySelector('#services-package .package-title').innerHTML = 'Package PPC: Custom';
      document.querySelector('#services-package .package-title-form').value = 'Package PPC: Custom';
      document.querySelector('#services-package .package-form').value = 'Package PPC: Custom';
    
    }
  
  
    let formtwo = document.querySelector('.formPopup-package');
  
    formtwo.style.display = 'block';
  
  }
  










  
  return (
    <React.Fragment>
      <div className="slide-section ">
        <Head>
          <title>
            Business Start-Up Packages | Branding & PR | Web Development | SEO | SMM - Techbay
            Solutions
          </title>
          <meta
            name="description"
            content="Starting a new business is challenging. Techbay Solutions provides affordable business startup packages that cater to all your digital, promotional & engagement needs."
          />
          <meta name="keywords" content="Business Start-Up Packages Dubai" />
          <link rel="canonical" href= "https://techbay.co/startup-packages"/>
 <meta property="og:url" content={pageurl} />
          {/* <link href="/css/newstyle.css" rel="stylesheet"/> */}

        </Head>
        <div
          className="slide-content-wrapper p41 d-flex flex-column seoPackage"
          onScroll={(event) => addStickyHeader(event.target)}
        >
          <Headerfive/>
          <PackageForm/>
          <div className="packBanner startBnr">
            <div className="container">
              <div className="row">
                <div className="col-sm-1 col-lg-1"></div>
                <div className="col-lg-10 pkgInner flex-md-column flex-lg-row  ">
                  <h3 className="px-3 m-0">
                    Startup <span>Build your business with our startup package</span>
                  </h3>
                  <p className="px-3">We Focus On Achieving Your Startup Goals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mg-slide-content flex-fill pt-4">
            <div className="mg-portfolio-wrapper slider-end-content text-center">
              <div className="packwraps container">
                <div className="packagesDiv">
                  <div className="packageTop">
                    <table>
                      <tbody>
                        <tr>
                          <th>Services</th>
                          <th>Good</th>
                          <th>Very Good</th>
                          <th>The Best</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mids">
                    <h3>Branding and PR</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Brand Book</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Brand Identity creation</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Brand Awarness</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Brand and PR Strategy</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Media Relations Management</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h3>Design and Development</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Web-App Development</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Mobile App Development</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h3>Digital Marketing</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>SEO Services</td>
                          <td>
                            <a className="lnk" href="/seo-packages">
                              <span style = {{display: "none"}}>Good</span>
                              Good Package
                            </a>{' '}
                          </td>
                          <td>
                            <a className="lnk" href="/seo-packages">
                            <span style = {{display: "none"}}>Very Good</span>
                              Very Good Package
                            </a>{' '}
                          </td>
                          <td>
                            <a className="lnk" href="/seo-packages">
                            <span style = {{display: "none"}}>The Best</span>
                              The Best Package
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>SEA(PPC) Package</td>
                          <td>
                            <a className="lnk" href="/ppc-packages">
                            <span style = {{display: "none"}}>Good</span>
                              Good Package
                            </a>{' '}
                          </td>
                          <td>
                            <a className="lnk" href="/ppc-packages" >
                            <span style = {{display: "none"}}>Very Good</span>
                              Very Good Package
                            </a>{' '}
                          </td>
                          <td>
                            <a className="lnk" href="/ppc-packages">
                            <span style = {{display: "none"}}>The Best</span>
                              The Best Package
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>SMM Services</td>
                          <td>
                            <a className="lnk" href="/social-media-packages">
                            <span style = {{display: "none"}}>Good</span>
                              Good Package
                            </a>{' '}
                          </td>
                          <td>
                            <a className="lnk" href="/social-media-packages">
                            <span style = {{display: "none"}}>Very Good</span>
                              Very Good Package
                            </a>{' '}
                          </td>
                          <td>
                            <a className="lnk" href="/social-media-packages">
                            <span style = {{display: "none"}}>The Best</span>
                              The Best Package
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Conversation Rate Optimization</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>High Value Interactive Content</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>2 per Monthly</td>
                          <td>4 per Monthly</td>
                        </tr>
                        <tr>
                          <td>Email Funnel Design Management </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Email Newsletters</td>
                          <td>2 per Monthly</td>
                          <td>4 per Monthly</td>
                          <td>Unlimited</td>
                        </tr>
                        <tr>
                          <td>Reporting </td>
                          <td>Monthly</td>
                          <td>Bi-Monthly</td>
                          <td>Weekly</td>
                        </tr>
                        <tr>
                          <td>Dedicated Account Manager</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Cost Per Month</td>
                          <td>
                            <a  onClick = {openPackageForm} className="get" id="Startup Package (Good)">
                              <span style = {{display: "none"}}>Good</span>
                              Get Quotation
                            </a>
                          </td>
                          <td>
                            <a onClick = {openPackageForm} className="get" id="Startup Package (very Good)">
                            <span style = {{display: "none"}}>Very Good</span>
                              Get Quotation
                            </a>
                          </td>
                          <td>
                            <a href="#" className="get" id="Startup Package (The Best)" onClick = {openPackageForm}>
                            <span style = {{display: "none"}}>The Best</span>
                              Get Quotation
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Installment Option</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

 <div className = "text-center pt-1 pt-md-4">
 <NewTermsOfService/>
 
 </div>
   




          {/* <div className="termsOfUse">
            <TermOfServices />
            <Footer pkgFooter={true} />
          </div> */}
        </div>
        <style>
          {`
          
          .termsOfUse .bottomofUse {
            background: #efefef;
            padding: 40px 0px;
            margin: 60px 0px 0px;
            text-align: left;
        }
          
          `}
        </style>
      </div>
    </React.Fragment>
  );
};
