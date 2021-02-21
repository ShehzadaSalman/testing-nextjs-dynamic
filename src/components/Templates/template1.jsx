import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailSix from '../NewComponents/ThumbnailSix';
import ListItemThree from '../NewComponents/ListItemThree'; // for smooth scrolling
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { openBrandingForm } from '../../lib/helper';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath;


const MarketingMedia = ({ finalData }) => {
  const router = useRouter();
  console.log(router.pathname);
  const { locale } = router;

  let content;
  if (locale !== 'ar') {
    content = {
      "BannerHeading": finalData.header_title_english || "EMPTY",
      "BannerDescription": finalData.header_desc_english || "EMPTY",
      "BannerImage": finalData.header_bg_image || "EMPTY",
      "BannerButton": finalData.header_btn_txt_english || "EMPTY",
      "FirstVideo": finalData.video_link || "EMPTY",
      "SubBannerHeading": finalData.sub_header_title_english || "EMPTY",
      "SubBannerParagraph": finalData.sub_header_desc_english || "EMPTY",
      "SubBannerButton": finalData.sub_header_btn_txt_english || "EMPTY",
      "Sections": finalData.headings || "EMPTY",
      "ListingOne": finalData.widget.filter(service => service.level === 1),
      "ListingTwo": finalData.widget.filter(service => service.level === 2),
      "ListingThree": finalData.widget.filter(service => service.level === 3),
      "Buttons": finalData.widget_btn,
      "widget_headings": finalData.widget_headings,
      "book": finalData.book
    }
  } else { // when we set it to arabic
    content = {
      "BannerHeading": finalData.header_title_arabic || "EMPTY",
      "BannerDescription": finalData.header_desc_arabic || "EMPTY",
      "BannerImage": finalData.header_bg_image || "EMPTY",
      "BannerButton": finalData.header_btn_txt_arabic || "EMPTY",
      "FirstVideo": finalData.video_link || "EMPTY",
      "SubBannerHeading": finalData.sub_header_title_arabic || "EMPTY",
      "SubBannerParagraph": finalData.sub_header_desc_arabic || "EMPTY",
      "SubBannerButton": finalData.sub_header_btn_txt_arabic || "EMPTY",
      "Sections": finalData.headings || "EMPTY",
      "ListingOne": finalData.widget.filter(service => service.level === 1),
      "ListingTwo": finalData.widget.filter(service => service.level === 2),
      "ListingThree": finalData.widget.filter(service => service.level === 3),
      "Buttons": finalData.widget_btn,
      "widget_headings": finalData.widget_headings,
      "book": finalData.book
    }
  }


  return (
    <React.Fragment>
      <div className="main-content">
        <Headerfive/>
        {/*  The First section    */}
        <PageBanner
          dark
          category="branding"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext={content.BannerButton}
          wavename="wave2-light.png"
        ></PageBanner>
        {/* <MarketingForm />
        <BrandingForm /> */}
        <SuccessDisplay />
        {/*  The second section    */}
        <div className="bg-white padding-bottom-30">
          <div className="container">
            <div className="padding-top-20"></div>
            <div className="padding-top-20"></div>
            <h2 className="heading text-uppercase">{content.SubBannerHeading}</h2>
            <p className="paragraph">{content.SubBannerParagraph}</p>
          </div>

        </div>
        {/*  third section */}
        <BgContentDiv bg="/images/web/marketingmedia/marketingmedia-banner-two-small.png">

          <div className="container box-direction">
            <div className="row">
              {content.ListingOne && content.ListingOne.map(list =>
                locale !== 'ar'
                  ? (<div className="col-md-3">
                    <ListItemThree imgAddress={ImagePath + list.image} description={list.title_english} />
                  </div>)
                  : (<div className="col-md-3">
                    <ListItemThree imgAddress={ImagePath + list.image} description={list.title_arabic} />
                  </div>)
              )}
            </div>
            <div className="text-center padding-top-40">

              {content.Buttons.length > 0 &&
                <Link href="portfolio-page">
                  <a>
                    {locale !== 'ar'
                      ? <ButtonStyleTwo title={content.Buttons[0].title_english}></ButtonStyleTwo>
                      : <ButtonStyleTwo title={content.Buttons[0].title_arabic}></ButtonStyleTwo>
                    }
                  </a>
                </Link>
              }


            </div>
          </div>
        </BgContentDiv>

        {/*  The fourth section    */}
        <div className="bg-mm-grey">
          <div className="container box-direction">
            <div className="padding-top-40"></div>
            <div className="padding-top-20"></div>

            {content.Sections.length > 0 && <h2 className="heading text-uppercase">
              {locale !== 'ar'
                ? content.Sections[0].title_english
                : content.Sections[0].title_arabic
              }</h2>}

            {content.Sections.length > 0 && <p className="paragraph">
              {locale !== 'ar'
                ? content.Sections[0].desc_english
                : content.Sections[0].desc_arabic
              }
            </p>}

          </div>
          <div className="margin-top-20"></div>
          <div className="margin-top-30"></div>
          <div className="text-center pb-20 pb-sm-0">
            {(content.Sections.length > 0 && content.Sections[0].btn_txt_english != null) &&

              <Link href="case-studies">
                <a className="pb-4 pb-md-0">
                  {
                    locale !== 'ar'
                      ? <ButtonStyleOne title={content.Sections[0].btn_txt_english}></ButtonStyleOne>
                      : <ButtonStyleOne title={content.Sections[0].btn_txt_arabic}></ButtonStyleOne>
                  }
                </a>
              </Link>

            }



          </div>
        </div>
        {/*  the fifth section  */}
        <div className="marketingmedia-third-banner padding-bottom-40">
          <img src="images/web/white-layer.png" className="full-width img-fluid" alt="white layer" />
          <div className="container box-direction padding-top-40 padding-bottom-40">

            {content.Sections.length > 1 && <h2 className="white-heading text-uppercase">
              {locale !== 'ar'
                ? content.Sections[1].title_english
                : content.Sections[1].title_arabic
              }</h2>}

            {content.Sections.length > 1 && <p className="white-paragraph">
              {locale !== 'ar'
                ? content.Sections[1].desc_english
                : content.Sections[1].desc_arabic
              }</p>}

            <div className="row mt-5">
              {content.ListingTwo && content.ListingTwo.map(list => (
                locale !== 'ar'
                  ? <div className="col-md-3  d-flex flex-column justify-content-between">
                    <ThumbnailSix imgAddress={ImagePath + list.image} title={list.title_english} />
                    <div className="text-center padding-top-20">
                      <a onClick={openBrandingForm}>
                        <ButtonStyleTwo title={list.desc_english} />
                      </a>
                    </div>
                  </div>
                  : <div className="col-md-3  d-flex flex-column justify-content-between">
                    <ThumbnailSix imgAddress={ImagePath + list.image} title={list.title_arabic} />
                    <div className="text-center padding-top-20">
                      <a onClick={openBrandingForm}>
                        <ButtonStyleTwo title={list.desc_arabic} />
                      </a>
                    </div>
                  </div>

              ))}
            </div>






          </div>
        </div>
        {/* the sixth section  */}
        <div className="bg-grey padding-top-40">
          <div className="container">
            {content.Sections.length > 2 &&
              <>
                <h2 className="heading text-uppercase">{locale !== 'ar' ? content.Sections[2].title_english : content.Sections[2].title_arabic}</h2>
                <p className="paragraph"> {locale !== 'ar' ? content.Sections[2].desc_english : content.Sections[2].desc_arabic}</p>
                <div className="text-center padding-top-30 padding-bottom-40">

                  {locale !== 'ar'
                    ? <>{content.Sections[2].btn_txt_english && <a className="link-class" onClick={openBrandingForm}>
                      {content.Sections[2].btn_txt_english}
                    </a>} </>
                    : <>{content.Sections[2].btn_txt_arabic && <a className="link-class" onClick={openBrandingForm}>
                      {content.Sections[2].btn_txt_arabic}
                    </a>} </>
                  }

                </div>
              </>
            }

          </div>

        </div>
      </div>
      <div className="padding-top-50 padding-bottom-30 bg-grey"></div>


      {finalData.book &&
        <ReportCardFooter
          category="branding"
          imgAddress={ImagePath + finalData.book.image}
          title={locale === 'ar' ? finalData.book.title_arabic : finalData.book.title_english}
          caption={locale === 'ar' ? finalData.book.desc_arabic : finalData.book.desc_english}
          btntext="GET MY FREE REPORT"
        />


      }




      <style>{`
   body{
       overflow-y:inherit;
   }
   .marketingmedia-third-banner{
     background-image: url('images/web/marketingmedia/marketingmedia-banner-three-small.png');
     background-size: cover;
     background-color: grey;
     background-position: center;
     background-repeat: no-repeat;

   }
   .box-direction{
     direction: ${locale === 'ar' ? 'rtl' : 'ltr'};
     text-align: ${locale === 'ar' ? 'right' : 'left'};  
    }
 
   .bg-mm-grey{
     background-color: #F8F8F8;
   }
   .jc-center{
     justify-content: center;
   }
   .ac-spacebetween{
     align-content: space-between;
   }

           `}
      </style>
    </React.Fragment>

  );
}


// }
export default MarketingMedia;
