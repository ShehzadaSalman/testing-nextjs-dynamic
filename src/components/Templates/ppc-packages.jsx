import Head from 'next/head';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { addStickyHeader } from '../lib/helper';
import TermOfServices from '../components/TermOfServices';
import Header from '../components/Header';
import Headerfive from '../components/HeaderFive';
import NewTermsOfService from '../components/NewComponents/NewTermsOfService';
import PackageForm from '../components/NewComponents/PackageForm';
import { useRouter } from 'next/router';
const PPC = () => {
  const router = useRouter();
  console.log(router.pathname);
  var pageurl = "https://techbay.co"+router.pathname;
  const openPackageForm = (event) => {
    let valueForm = event.currentTarget.querySelector('span').innerHTML;

    if (valueForm == 'Package PPC: Good') {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package PPC: Good';
      document.querySelector('#services-package .package-title-form').value = 'Package PPC: Good';
      document.querySelector('#services-package .package-form').value = 'Package PPC: Good';

    }
    else if (valueForm == 'Package PPC: Very Good') {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package PPC: Very Good';
      document.querySelector('#services-package .package-title-form').value = 'Package PPC: Very Good';
      document.querySelector('#services-package .package-form').value = 'Package PPC: Very Good';

    }
    else if (valueForm == 'Package PPC: The Best') {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package PPC: The Best';
      document.querySelector('#services-package .package-title-form').value = 'Package PPC: The Best';
      document.querySelector('#services-package .package-form').value = 'Package PPC: The Best';

    }
    else if (valueForm == 'Package PPC: Titanium') {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package PPC: Unbeatable';
      document.querySelector('#services-package .package-title-form').value = 'Package PPC: Unbeatable';
      document.querySelector('#services-package .package-form').value = 'Package PPC: Unbeatable';

    }
    else {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package PPC: Custom';
      document.querySelector('#services-package .package-title-form').value = 'Package PPC: Custom';
      document.querySelector('#services-package .package-form').value = 'Package PPC: Custom';
    
    }


    let formtwo = document.querySelector('.formPopup-package');
    formtwo.style.display = 'block';  }
  return (
    <React.Fragment>
      <div className="slide-section ">
        <Head>
          <title>PPC Packages - Reasonable Prices - Google Ads, Pay Per Click Marketing</title>
          <meta
            name="description"
            content="Techbay Solutions offer low-cost PPC Packages in Dubai. Boost your sales quickly with our Pay Per Click Marketing Services. Call us to learn how"
          />
          <meta name="keywords" content="PPC Packages" />
          {/* <link href="/css/newstyle.css" rel="stylesheet" /> */}
          <link rel="canonical" href= "https://techbay.co/ppc-packages"/>
          <meta property="og:url" content={pageurl} />

        </Head>
        <Headerfive />
        <PackageForm />
        <div
          className="slide-content-wrapper p41 d-flex flex-column seoPackage"
          onScroll={(event) => addStickyHeader(event.target)}
        >

          <div className="packBanner">
            <div className="container">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 pkgInner ppcBnr flex-md-column flex-lg-row">
                  <h3 className="px-3 ">
                    PPC <span>Pay Per Click</span>
                  </h3>
                  <p className="px-3 pt-md-4">
                  INCREASE IN SALES  even during the pandemic or we will 
                    <cite> REFUND</cite> you back!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* the package table starts here  */}
          <div className="mg-slide-content flex-fill pt-5 pt-md-3">
            <div className="mg-portfolio-wrapper slider-end-content text-center">
              <div className="packwraps container">
                <div className="packagesDiv ppcsss">
                  <div className="packageTop ppcss">
                    <table>
                      <tbody>
                        <tr>
                          <th>Services</th>
                          <th>
                            Good{' '}
                          </th>
                          <th>
                            Very Good{' '}
                          </th>
                          <th>
                            The Best{' '}
                          </th>
                          <th>
                            Unbeatable
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mids">
                    <table>
                      <tbody>
                        <tr>
                          <td>Minimum Contract Period</td>
                          <td>3 Months</td> <td>3 Months</td> <td>3 Months</td> <td>3 Months</td>
                        </tr>
                        <tr>
                          <td>Google Adwords (Account Setup)</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
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
                          <td>Unlimited Budget changes </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
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
                          <td>Re-Targeting (Google)/Add set up </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
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
                          <td>Display Ad Networks</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
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
                          <td>Campaigns</td>
                          <td>4</td>
                          <td>6</td>
                          <td>10</td>
                          <td>Unlimited</td>
                        </tr>
                        <tr>
                          <td>Ad Group Optimization</td>
                          <td>2</td>
                          <td>6</td>
                          <td>8</td>
                          <td>Unlimited</td>
                        </tr>
                        <tr>
                          <td>Mobile Ad Copy</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
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
                          <td>Ad Extensions</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
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
                          <td>Landing Page Recommendation</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
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
                          <td>Custom Landing Pages</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
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
                          <td>Conversion Tracking </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
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
                          <td>Re-Targeting (Google)</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
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
                          <td>Keywords (Limit)</td>
                          <td>up 50</td> <td>up 200</td> <td>up 400</td> <td>Unlimited</td>
                        </tr>
                        <tr>
                          <td>Negative Keywords</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
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
                          <td>A/B Ad Testing</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>As Per Requirement</td>
                        </tr>
                        <tr>
                          <td>Google Analytic Set-up </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
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
                          <td>Campaign Reporting</td>
                          <td>Monthly</td> <td>Monthly </td>
                          <td>Monthly</td> <td>Bi-Weekly</td>
                        </tr>
                        <tr>
                          <td>Email Support</td>
                          <td>24/7</td> <td>24/7</td> <td>24/7</td> <td>24/7</td>
                        </tr>
                        <tr>
                          <td>Campaign Optimizations </td>
                          <td>Weekly</td> <td>Daily</td> <td>Daily</td> <td>Daily</td>
                        </tr>
                        <tr>
                          <td>Conference Calls/Meetings</td>
                          <td>Monthly</td> <td>Monthly</td> <td>Bi-Weekly</td> <td>Weekly</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <a onClick={openPackageForm} className="get" id="PPC Package (Good)">
                              <span style={{ display: "none" }}>
                                Package PPC: Good
                              </span>
                              Get Quotation
                            </a>
                          </td>
                          <td>
                            <a onClick={openPackageForm} className="get" id="PPC Package (very Good)">
                              <span style={{ display: "none" }}>
                                Package PPC: Very Good
                              </span>
                              Get Quotation
                            </a>
                          </td>
                          <td>
                            <a onClick={openPackageForm} className="get" id="PPC Package (The Best)">
                              <span style={{ display: "none" }}>
                                Package PPC: The Best
                              </span>
                              Get Quotation
                            </a>
                          </td>
                          <td>
                            <a  onClick={openPackageForm} className="get" id="PPC Package (Titanium)">
                              <span style={{ display: "none" }}>
                                Package PPC: Titanium
                              </span>
                              Get Quotation
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="text-center pt-1 pt-md-4">
            <NewTermsOfService />
        
          </div>



     




        </div>
      </div>
    </React.Fragment>
  );
};

export default PPC;
