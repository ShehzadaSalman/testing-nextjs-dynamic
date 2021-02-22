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
      // document.querySelector('#services-package .package-title').innerHTML = 'Package SMM: Good';
      document.querySelector('#services-package .package-title-form').value = 'Package SMM: Good';
      document.querySelector('#services-package .package-form').value = 'Package SMM: Good';
    
    }
    else if(valueForm  == 'Very Good'){
      // document.querySelector('#services-package .package-title').innerHTML = 'Package SMM: Very Good';
      document.querySelector('#services-package .package-title-form').value = 'Package SMM: Very Good';
      document.querySelector('#services-package .package-form').value = 'Package SMM: Very Good';
    
    }
    else if(valueForm  == 'The Best'){
      // document.querySelector('#services-package .package-title').innerHTML = 'Package SMM: The Best';
      document.querySelector('#services-package .package-title-form').value = 'Package SMM: The Best';
      document.querySelector('#services-package .package-form').value = 'Package SMM: The Best';
    
    }
    else if(valueForm  == 'Package PPC: Titanium'){
      // document.querySelector('#services-package .package-title').innerHTML = 'Package PPC: Titanium';
      document.querySelector('#services-package .package-title-form').value = 'Package PPC: Titanium';
      document.querySelector('#services-package .package-form').value = 'Package PPC: Titanium';
    
    }
    else{
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
          <title>Social Media Packages Dubai - Best SMM Packages - Techbay Solutions</title>
          <meta
            name="description"
            content="Techbay Solutions, Dubai's #1 Social Media Marketing Agency offers the best Social Media packages that cater to all your promotional & engagement needs."
          />
           <meta property="og:url" content={pageurl} />
          <meta name="keywords" content="Social Media Packages Dubai" />
          <link rel="canonical" href= "https://techbay.co/social-media-packages"/>

          {/* <link href="/css/newstyle.css" rel="stylesheet"/> */}

        </Head>
        <div
          className="slide-content-wrapper p41 d-flex flex-column seoPackage"
          onScroll={(event) => addStickyHeader(event.target)}
        >
          <Headerfive/>
          <PackageForm/>
          <div className="packBanner SMMBnr">
            <div className="container">
              <div className="row">
                <div className="col-sm-2 col-md-2"></div>
                <div className="col-lg-8 pkgInner flex-md-column flex-lg-row ">
                  <h3 className="px-3">
                    SMM <span>Social Media Marketing</span>
                  </h3>
                  <p className="px-3 pt-4">
                    Our ads will beat your or we will give you up to <cite>100% Cashback*</cite>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mg-slide-content flex-fill pt-5 pt-md-0 pt-lg-0">
            <div className="mg-portfolio-wrapper slider-end-content text-center">
              <div className="packwraps container">
                <div className="packagesDiv smms pt-0">
                  <div className="packageTop ">
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <img src="/images/smmMen.png" className="d-none" alt="social media" />
                            Services
                          </th>
                          <th>
                            Good{' '}
                          </th>
                          <th>
                            Very Good{' '}
                 
                          </th>
                          <th>
                            The Best{' '}
                
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mids">
                    <table>
                      <tbody>
                        <tr>
                          <td>Social Media Strategy</td>
                          <td>
                            <i className="fa fa-check"></i>
                          </td>
                          <td>
                            <i className="fa fa-check"></i> (Detailed)
                          </td>
                          <td>
                            <i className="fa fa-check"></i> (Detailed)
                          </td>
                        </tr>
                        <tr>
                          <td>Account Setups</td>
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
                          <td>Profile Optimization</td>
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
                          <td>Business Page Creation</td>
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
                          <td>Total Posts/Week</td>
                          <td>2</td>
                          <td>4</td>
                          <td>6</td>
                        </tr>
                        <tr>
                          <td>Edited Image Posts</td>
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
                          <td>Boost a Popular Post</td>
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
                          <td>Lead Generation</td>
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
                          <td>Dynamic Creative Ads</td>
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
                          <td>Catalog Manager</td>
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
                          <td>Re-targeting(Facebook)</td>
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
                          <td>Looka Like Audience</td>
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
                          <td>Review Postings</td>
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
                          <td>Edited Video Posts</td>
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
                          <td>Create Paid Campgaign(s)</td>
                          <td>2/Monthly</td> <td>2/Week</td> <td>Unlimited</td>
                        </tr>
                        <tr>
                          <td>Pixel Installation</td>
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
                          <td>Manage Paid Campaign(s)</td>
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
                          <td>Reporting</td>
                          <td>Monthly</td> <td>Bi-Monthly</td> <td>Weekly</td>
                        </tr>
                        <tr>
                          <td>Create Animated Video Posts</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>1/Monthly</td> <td>3/Monthly</td>
                        </tr>
                        <tr>
                          <td>Content Creation/Videography</td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>
                            <i className="fa fa-times"></i>
                          </td>
                          <td>1/Monthly</td>
                        </tr>
                        <tr>
                          <td>Audience Engagement </td>
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
                          <td>Respond to Messages</td>
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
                          <td>Dedicated Account Strategist</td>
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
                          <td></td>
                          <td>
                            <a className="get" onClick = {openPackageForm} id="SMM Package (Good)">
                              <span style = {{ display: "none" }}>Good</span>
                              Get Quotation
                            </a>
                          </td>
                          <td>
                            <a  className="get" onClick = {openPackageForm} id="SMM Package (very Good)">
                            <span style = {{ display: "none" }}>Very Good</span>
                              Get Quotation
                            </a>
                          </td>
                          <td>
                            <a  className="get" onClick = {openPackageForm} id="SMM Package (The Best)">
                            <span style = {{ display: "none" }}>The Best</span>
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
          {/* <div className="termsOfUse">
            <TermOfServices />
            <Footer pkgFooter={true} />
          </div> */}


<div className = "text-center pt-1 pt-md-4">
 <NewTermsOfService/>

 </div>
   


        </div>
      </div>
    </React.Fragment>
  );
};
