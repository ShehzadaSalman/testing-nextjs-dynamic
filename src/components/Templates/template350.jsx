
import Layout from '../Layout'
import TermOfServices from '../TermOfServices';
import { addStickyHeader } from '../../lib/helper';
import MarketingForm from '../NewComponents/MarketingForm';
import NewTermsOfService from '../NewComponents/NewTermsOfService';
import PackageForm from '../NewComponents/PackageForm';
import { useRouter } from 'next/router';
import Headerfive from '../HeaderFive';

const SEO = ({ finalData }) => {
  let data = finalData;
  const router = useRouter();
  let locale = router.locale;
  var pageurl = "https://techbay.co" + router.pathname;


  const openPackageForm = (event) => {
    let valueForm = event.currentTarget.querySelector('span').innerHTML;

    if (valueForm == 'Good') {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package SEO: Good';
      document.querySelector('#services-package .package-title-form').value = 'Package SEO: Good';
      document.querySelector('#services-package .package-form').value = 'Package SEO: Good';

    }
    else if (valueForm == 'Very Good') {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package SEO: Very Good';
      document.querySelector('#services-package .package-title-form').value = 'Package SEO: Very Good';
      document.querySelector('#services-package .package-form').value = 'Package SEO: Very Good';

    }
    else if (valueForm == 'The Best') {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package SEO: The Best';
      document.querySelector('#services-package .package-title-form').value = 'Package SEO: The Best';
      document.querySelector('#services-package .package-form').value = 'Package SEO: The Best';

    }
    else if (valueForm == 'Custom') {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package SEO: Custom';
      document.querySelector('#services-package .package-title-form').value = 'Package SEO: Custom';
      document.querySelector('#services-package .package-form').value = 'Package SEO: Custom';

    }
    else {
      // document.querySelector('#services-package .package-title').innerHTML = 'Package SEO: Custom';
      document.querySelector('#services-package .package-title-form').value = 'Package SEO: Custom';
      document.querySelector('#services-package .package-form').value = 'Package SEO: Custom';

    }


    let formtwo = document.querySelector('.formPopup-package');

    formtwo.style.display = 'block';

  }


  return (
    <React.Fragment>
      <div className="slide-section ">
        <Headerfive />
        <div
          className="slide-content-wrapper p41 d-flex flex-column seoPackage"
          onScroll={(event) => addStickyHeader(event.target)}
        >
          <PackageForm />
          <div className="packBanner">
            <div className="container">
              <div className="row">
                <div className="col-sm-2 col-md-2"></div>
                <div className="col-lg-8 pkgInner flex-md-column flex-lg-row">
                  <div className="row">
                    <div className="col-lg-5 d-flex px-3 flex-column justify-content-center">
                      <h3 className="m-0" style={{ lineHeight: 1 }}>
                        {locale === 'ar'
                          ? <>{data.header_title_arabic}</>
                          : <>{data.header_title}</>
                        }
                      </h3>
                      <span className="d-block text-left">
                        {locale === 'ar'
                          ? <>{data.title_arabic}</>
                          : <>{data.title}</>
                        }
                      </span>
                    </div>
                    <div className="col-lg-7 d-flex px-3 flex-column justify-content-center">
                      <p className=" pt-md-4">
                        {locale === 'ar'
                          ? <>{data.description_arabic}</>
                          : <>{data.description}</>
                        }
                      </p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="mg-slide-content flex-fill pt-5 pt-md-3">
            <div className="mg-portfolio-wrapper slider-end-content text-center">
              <div className="packwraps container">
                <div className="packagesDiv  seoPack">
                  <div className="packageTop seos">
                    <div className="mids">

                      <table>
                        <tbody>
                          <tr>
                            <th>
                              {
                                locale == 'ar'
                                  ? 'خدمات'
                                  : 'Services'
                              }


                            </th>


                            {data.package_service_ranks.map(headings => (
                              <th>
                                { locale === 'ar'
                                  ? <>{headings.title_arabic}</>
                                  : <>{headings.title}</>
                                }
                              </th>
                            ))}
                          </tr>

                          {/* package template with sub menus */}
                          {data.package_services && data.package_services.map(pkg => {


                            return (
                              <>

                                <div className="table-subheading">


                                  {locale === 'ar'
                                    ? <>{pkg.title_arabic}</>
                                    : <>{pkg.title}</>
                                  }


                                </div>


                                {pkg.package_sub_services.map(pkg => (
                                  <>

                                    <tr>
                                      <td>

                                        {locale === 'ar'
                                          ? <>{pkg.title_arabic}</>
                                          : <>{pkg.title}</>
                                        }

                                      </td>
                                      {pkg.package_service_rank_details.map(pkg => (
                                        <>
                                          <td>

                                            {pkg.checkbox == ''
                                              ? <i className="fa fa-times"></i>
                                              : <> <i className="fa fa-check"></i>
                                                {locale === 'ar'
                                                  ? <>{pkg.title_arabic}</>
                                                  : <>{pkg.title}</>
                                                }

                                              </>
                                            }

                                          </td>
                                        </>
                                      ))}

                                    </tr>

                                  </>
                                ))}



                              </>
                            );


                          })}

                          {/* package template without submenu */}
                          {data.package_sub_services && data.package_sub_services.map(pkg => {

                            return <>

                              <tr>
                                <td>

                                  {locale === 'ar'
                                    ? <>{pkg.title_arabic}</>
                                    : <>{pkg.title}</>
                                  }
                                </td>
                                {pkg.package_service_rank_details.map(pkg => (
                                  <>
                                    <td>

                                      {pkg.checkbox == ''
                                        ? <i className="fa fa-times"></i>
                                        : <> <i className="fa fa-check"></i>
                                          {locale === 'ar'
                                            ? <>{pkg.title_arabic}</>
                                            : <>{pkg.title}</>
                                          }

                                        </>
                                      }

                                    </td>
                                  </>
                                ))}

                              </tr>

                            </>;

                          })}




                        </tbody>
                      </table>

                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-1 pt-md-4">
            <NewTermsOfService content={data.terms} />
          </div>
        </div>
      </div>
    </React.Fragment >
  );
};



export default SEO;
