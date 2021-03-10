import Head from 'next/head';
import { useState } from 'react'
import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ThumbnailSeven from '../NewComponents/ThumbnaiSeven';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { openBrandingForm } from '../../lib/helper';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath;
function BRANDPAGE({ finalData }) {
 
  let content;

  const router = useRouter();
  const { locale } = router;
  if (locale !== 'ar') {
    content = {
      "BannerHeading": finalData.header_title_english || "EMPTY",
      "BannerDescription": finalData.header_desc_english || "EMPTY",
      "BannerImage": finalData.header_bg_image || "EMPTY",
      "BannerButton": finalData.header_btn_txt_english || "EMPTY",
      "FirstVideo": finalData.video_link || "",
      "SubBannerHeading": finalData.sub_header_title_english || "EMPTY",
      "SubBannerParagraph": finalData.sub_header_desc_english || "EMPTY",
      "SubBannerButton": finalData.sub_header_btn_txt_english || "EMPTY",
      "Sections": finalData.headings || "EMPTY",
      "ListingOne": finalData.widget.filter(service => service.level === 1),
      "ListingTwo": finalData.widget.filter(service => service.level === 2),
      "ListingThree": finalData.widget.filter(service => service.level === 3),
      "Buttons": finalData.widget_btn,
      "widget_headings": finalData.widget_headings,
      "book": finalData.book,
    }
  } else { // when we set it to arabic

    content = {
      "BannerHeading": finalData.header_title_arabic || "EMPTY",
      "BannerDescription": finalData.header_desc_arabic || "EMPTY",
      "BannerImage": finalData.header_bg_image || "EMPTY",
      "BannerButton": finalData.header_btn_txt_arabic || "EMPTY",
      "FirstVideo": finalData.video_link || "",
      "SubBannerHeading": finalData.sub_header_title_arabic || "EMPTY",
      "SubBannerParagraph": finalData.sub_header_desc_arabic || "EMPTY",
      "SubBannerButton": finalData.sub_header_btn_txt_arabic || "EMPTY",
      "Sections": finalData.headings || "EMPTY",
      "ListingOne": finalData.widget.filter(service => service.level === 1),
      "ListingTwo": finalData.widget.filter(service => service.level === 2),
      "ListingThree": finalData.widget.filter(service => service.level === 3),
      "Buttons": finalData.widget_btn,
      "widget_headings": finalData.widget_headings,
      "book": finalData.book,
    }

  }




  return (
    <React.Fragment>
      <div className="Content-div box-direction">
      
       
        <PageBanner
          category="branding"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          buttontext={content.BannerButton}
          bg={ImagePath + content.BannerImage}
          wavename="wave2-light.png"

        ></PageBanner>
        <SuccessDisplay />

        {/*  the second  section  */}
        <div className="bg-white padding-top-30 padding-bottom-30">
          <div className="container">
            <h2 className="heading">{content.SubBannerHeading}</h2>
            <p className="paragraph">{content.SubBannerParagraph}</p>

            <div className="text-center padding-bottom-30 pt-5 pt-md-0">

              {content.SubBannerButton &&
                <Link href="case-studies">
                  <a>
                    <ButtonStyleOne title={content.SubBannerButton}></ButtonStyleOne>
                  </a>
                </Link>}


            </div>

          </div>
        </div>
        {/* the third section */}

        <div className="brand-banner-two padding-top-30 padding-bottom-30">
          <div className="container box-direction">

            <div className="row">

              {content.ListingTwo && content.ListingTwo.map(
                list => {

                  if (locale !== 'ar') {
                    return (
                      <div className="col-md-4 my-2">
                        <li className="text-white padding-bottom-10 roboto-style">{list.desc_english}</li>
                      </div>
                    )
                  } else {
                    return (
                      <div className="col-md-4 my-2">
                        <li className="text-white padding-bottom-10 roboto-style">{list.desc_arabic}</li>
                      </div>
                    )
                  }



                }
              )}

            </div>
          </div>

          {content.Buttons.length > 0 ?
            <>
              <div className="container-fluid px-0">
                <div className="row">
                  <div className="col-md-6">
                    <a onClick={openBrandingForm}>
                      <div className="white-bg padding-top-10 padding-bottom-10" style={{
                        fontSize: "21px",
                        cursor: "pointer",
                        color: "#497FA4", textAlign: "right", borderRadius: "0px 50px 50px 0px",
                        paddingRight: "60px", paddingLeft: "30px"
                      }}>
                        <i>{
                          locale !== 'ar'
                            ? content.Buttons[0].title_english
                            : content.Buttons[0].title_arabic
                        }</i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </>

            : ""}


        </div>


        {/*   the fourth section  */}
        <div className="bg-white padding-bottom-40 padding-top-30">
          <div className="container">
            {content.Sections.length > 0 &&
              <>
                <h2 className="heading mt-4">{
                  locale !== 'ar'
                    ? content.Sections[0].title_english
                    : content.Sections[0].title_arabic
                }</h2>
                <p className="paragraph">{
                  locale !== 'ar'
                    ? content.Sections[0].desc_english
                    : content.Sections[0].desc_arabic
                }</p>
              </>
            }



          </div>

        </div>
        {/* the fifth section  */}
        <div className="brand-banner-two box-direction">
          <img src="images/web/smm/waves/smm-wave-up.png" className="img-fluid" alt="social media wave" />
          <div className="container mt-md-4 mb-md-4">
            {content.widget_headings.length > 0 &&
              <h2 className="white-heading padding-bottom-30 pt-3 pt-md-0 text-direction">
                {
                  locale !== 'ar'
                    ? content.widget_headings[0].desc_english
                    : content.widget_headings[0].desc_arabic
                }
              </h2>
            }
            <div className="row">
              {content.ListingOne.length > 0 && content.ListingOne.map(list => {
                if (locale !== 'ar') {
                  return (
                    <div className="col-md-6">
                      <li className="text-white padding-bottom-10 roboto-style">{list.desc_english}</li>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-md-6">
                      <li className="text-white padding-bottom-10 roboto-style">{list.desc_arabic}</li>
                    </div>
                  );
                }
              })}


            </div>
          </div>


          <div className="container-fluid px-0">
            <div className="row" style={{ direction: "ltr" }}>
              <div className="col-md-6">

              </div>
              <div className="col-md-6">

                {content.Buttons.length > 1 &&
                  <div onClick={openBrandingForm} className="white-bg padding-top-10 padding-bottom-10 mb-4 mb-md-0"
                    style={{
                      cursor: "pointer", fontSize: "19px", color: "#497FA4", textAlign: "left",
                      borderRadius: "50px 0px 0px 50px", paddingRight: "30px", paddingLeft: "60px"
                    }}>
                    <i>{
                      locale !== 'ar'
                        ? content.Buttons[1].title_english
                        : content.Buttons[1].title_arabic
                    }</i>
                  </div>
                }

              </div>

            </div>
          </div>
          <img src="images/web/smm/waves/smm-wave-down.png" className="img-fluid" alt="social media wave" />
        </div>
        {/*  the second section */}
        <div className="padding-bottom-30 padding-top-30" style={{ backgroundColor: "#f6f6f6" }}>
          < div className="container">
            {content.Sections.length > 1 &&
              <>
                <h2 className="heading text-uppercase">
                  {locale !== 'ar'
                    ? content.Sections[1].title_english
                    : content.Sections[1].title_arabic
                  }
                </h2>
                <p className="paragraph">
                  {locale !== 'ar'
                    ? content.Sections[1].desc_english
                    : content.Sections[1].desc_arabic
                  }
                </p>
              </>
            }



            <div className="row  d-flex justify-content-center">

              {content.ListingThree.length > 0 && content.ListingThree.map(list => {

                if (locale !== 'ar') {
                  return (
                    <div className="col-md-4 mb-4">
                      <ThumbnailSeven dark imgAddress={ImagePath + list.image}
                        title={list.title_english}
                        secondtitle={list.desc_english} />
                    </div>
                  )
                } else {
                  return (
                    <div className="col-md-4 mb-4">
                      <ThumbnailSeven dark imgAddress={ImagePath + list.image}
                        title={list.title_arabic}
                        secondtitle={list.desc_arabic} />
                    </div>
                  )
                }

              }
              )}


            </div>







            <div className="pt-md-5 pt-0"></div>
            <div className="pt-md-2 pt-0"></div>

            <div className="text-center padding-bottom-30 pt-5 pt-md-0">


              {content.Buttons.length > 2 &&
                <a onClick={openBrandingForm}>
                  <ButtonStyleOne title={
                    locale !== 'ar'
                      ? content.Buttons[2].title_english
                      : content.Buttons[2].title_arabic
                  }></ButtonStyleOne>
                </a>
              }
            </div>


          </div>





        </div>


        <div className="mt-5 mb-5 bg-white">
          <div className="pb-5">
            <div className="container">

              {content.Sections.length > 2 &&
                <h2 className="heading text-uppercase">
                  {
                    locale !== 'ar'
                      ? content.Sections[2].title_english
                      : content.Sections[2].title_arabic
                  }
                </h2>}
              {content.Sections.length > 2 &&
                <p className="paragraph">
                  {locale !== 'ar'
                    ? content.Sections[2].desc_english
                    : content.Sections[2].desc_arabic
                  }
                </p>}
              <div className="text-center padding-bottom-30 pt-5 pt-md-5">
                {content.Sections.length > 2 &&
                  <a onClick={openBrandingForm}>
                    {locale !== 'ar'
                      ? <ButtonStyleOne title={content.Sections[2].btn_txt_english}></ButtonStyleOne>
                      : <ButtonStyleOne title={content.Sections[2].btn_txt_arabic}></ButtonStyleOne>
                    }
                  </a>
                }
              </div>

            </div>
          </div>
        </div>

        {finalData.book &&
          <ReportCardFooter
            category="branding"
            imgAddress={ImagePath + finalData.book.image}
            title={locale === 'ar' ? finalData.book.title_arabic : finalData.book.title_english}
            caption={locale === 'ar' ? finalData.book.desc_arabic : finalData.book.desc_english}
            btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
          />

        }



      </div>{' '}
      {/* Content div ends here */}
      <style jsx global>{`
      
      html{
        overflow-y: auto;
      }
      
      `}

      </style>
      <style jsx>
        {`
        .table-head{
          background: #4A91BD;
          color: #fff;
          font-family: 'Open Sans', sans-serif;
          padding: 18px 15px;
        }
    
        .justify-center{
          justify-content: center;
        }
        .box-direction{
          direction: ${locale === 'ar' ? 'rtl' : 'ltr'}; 
         }
        .brand-banner-two{
          
          background-image:  url('images/web/smm/smm-banner-two.png');
          background-position: center;
          background-size: cover;
          background-color: grey;
        
        }
        .white-bg{
          background-color: #fff;
        }
        .roboto-style{
          font-family: 'Roboto', sans-serif;
          font-size: 1.1rem;
        }
        .jc-center{
          justify-content: center;
        }

        @media only screen and (max-width: 500px) {
        #brand-table .packagesDiv .packageTop.ppcss table tr th{
          min-width: 102px;
        } 
      }

        @media only screen and (max-width: 500px) {
          .cro-right-align{
            justify-content: center;
          }
          .cro-jc-center{
            justify-content: center;
           }
           .responsive-padding-top40{
             padding-top: 20px;
           }
           .slider-end-content{
             margin: 0 !important;
           }
           #brand-table .packagesDiv .mids table tr td:nth-child(4) {
            box-shadow: none;
            position: relative; 
            border: 0px; 
            background-color: none;
         
           }
      
         #cropage-table .packagesDiv .mids table tr:nth-child(even) td{
          
           }
            #cropage-table .packagesDiv .mids table tr td{
             
           }
      
        }


        `}
      </style>
    </React.Fragment>
  );
}

export default React.memo(BRANDPAGE);
