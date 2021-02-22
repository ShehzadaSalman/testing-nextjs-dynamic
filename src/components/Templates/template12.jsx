import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import BgContentDiv from '../NewComponents/BContentDiv';
import DevelopmentForm from '../NewComponents/DevelopmentForm';
import SuccessDisplay from '../NewComponents/successdisplay';
import ListItemFive from '../NewComponents/ListItemFive';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import Link from 'next/link';
import { PopupText } from 'react-calendly';
import { useRouter } from 'next/router';
import { openBrandingForm } from '../../lib/helper'
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath

const AppDesign = ({ finalData }) => {
  // open the development form
  const router = useRouter();
  const { locale } = router;
  let content;
  if (locale !== 'ar') {
    // getting the english headings
    let Sections = finalData.headings.map(data => {
      return {
        "id": data.id,
        "title": data.title_english,
        "description": data.desc_english,
        "level": data.level,
        "btn_txt": data.btn_txt_english
      }
    })

    let Book = {
      "title": finalData.book.title_english,
      "description": finalData.book.desc_english,
      "image": finalData.book.image,
      "status": finalData.book.status
    };

    let Widgets = finalData.widget.map(data => {
      return {
        "id": data.id,
        "title": data.title_english,
        "description": data.desc_english,
        "level": data.level,
        "btn_txt": data.btn_txt_english,
        "image": data.image,
        "level": data.level,
      }
    })
    let Buttons = finalData.widget_btn && finalData.widget_btn.map(data => {
      return {
        "id": data.id,
        "title": data.title_english,
        "level": data.level
      }
    })
    let WidgetHeadings = finalData.widget_headings ? finalData.widget_headings.map(data => {
      return {
        "id": data.id,
        "title": data.desc_english,
        "level": data.level,
        "image": data.image
      }
    }) : '';


    content = {
      "BannerHeading": finalData.header_title_english,
      "BannerDescription": finalData.header_desc_english,
      "BannerImage": finalData.header_bg_image,
      "BannerButton": finalData.header_btn_txt_english,
      "FirstVideo": finalData.video_link,
      "SubBannerHeading": finalData.sub_header_title_english,
      "SubBannerParagraph": finalData.sub_header_desc_english,
      "SubBannerButton": finalData.sub_header_btn_txt_english,
      "SubBannerImage": finalData.sub_header_image,
      "Sections": Sections,
      "ListingOne": Widgets.filter(service => service.level === 1),
      "ListingTwo": Widgets.filter(service => service.level === 2),
      "ListingThree": Widgets.filter(service => service.level === 3),
      "ListingFour": Widgets.filter(service => service.level === 4),
      "Buttons": Buttons,
      "widget_headings": WidgetHeadings,
      "Book": Book
    }
  } else { // when we set it to arabic

    // getting the arabic headings
    let Headings = finalData.headings.map(data => {
      return {
        "id": data.id,
        "title": data.title_arabic,
        "description": data.desc_arabic,
        "level": data.level,
        "btn_txt": data.btn_txt_arabic
      }
    })
    let Book = {
      "title": finalData.book.title_arabic,
      "description": finalData.book.desc_arabic,
      "image": finalData.book.image,
      "status": finalData.book.status
    };

    let Widgets = finalData.widget.map(data => {
      return {
        "id": data.id,
        "title": data.title_arabic,
        "description": data.desc_arabic,
        "level": data.level,
        "btn_txt": data.btn_txt_arabic,
        "image": data.image,
        "level": data.level,
      }
    })
    let Buttons = finalData.widget_btn && finalData.widget_btn.map(data => {
      return {
        "id": data.id,
        "title": data.title_arabic,
        "level": data.level
      }
    })

    let WidgetHeadings = finalData.widget_headings ? finalData.widget_headings.map(data => {
      return {
        "id": data.id,
        "title": data.desc_arabic,
        "level": data.level,
        "image": data.image
      }
    }) : '';
    content = {
      "BannerHeading": finalData.header_title_arabic,
      "BannerDescription": finalData.header_desc_arabic,
      "BannerImage": finalData.header_bg_image,
      "BannerButton": finalData.header_btn_txt_arabic,
      "FirstVideo": finalData.video_link,
      "SubBannerHeading": finalData.sub_header_title_arabic,
      "SubBannerParagraph": finalData.sub_header_desc_arabic,
      "SubBannerButton": finalData.sub_header_btn_txt_arabic,
      "SubBannerImage": finalData.sub_header_image,
      "Sections": Headings,
      "ListingOne": Widgets.filter(service => service.level === 1),
      "ListingTwo": Widgets.filter(service => service.level === 2),
      "ListingThree": Widgets.filter(service => service.level === 3),
      "ListingFour": Widgets.filter(service => service.level === 4),
      "Buttons": Buttons,
      "widget_headings": WidgetHeadings,
      "Book": Book
    }
  }


  return (
    <React.Fragment>
     
      {/*  The First section    */}
      <PageBanner
        category="development"
        heading={content.BannerHeading}
        paragraph={content.BannerDescription}
        bg={ImagePath + content.BannerImage}
        buttontext={content.BannerButton}
        wavename="wave2.png">
      </PageBanner>
      <SuccessDisplay />
      <div className="main-div">
        {/*  second section  */}
        <div className="">


        </div>
        {/*  third section for the table  */}




        {/* third section for the table ends here */}

        <div className="padding-top-50 padding-bottom-30 bg-grey">

          <div className="container">
            <h2 className="heading padding-top-30 padding-bottom-10 text-uppercase">
              {content.SubBannerHeading}</h2>
            <p className="paragraph">
              {content.SubBannerParagraph}
            </p>

            <div className="row box-direction">
              {content.ListingOne && content.ListingOne.map(li => (
                <div className="col-md-4 mb-2">
                  <ListItemFive imgAddress={ImagePath + li.image} description={li.title} />
                </div>
              ))}


            </div>
            <div className="text-center mt-4 mb-4">
              {content.Buttons[0] && <Link href="portfolio-page">
                <a>
                  <ButtonStyleOne title={content.Buttons[0].title} />
                </a>
              </Link>}


            </div>

          </div>
        </div>
        {/*   fourth section */}
        <BgContentDiv bg="images/web/appdesign/appdesign-banner-two.png">
          <div className="container padding-top-30 padding-bottom-30">
            <div className="container">
              <h2 className="white-heading text-uppercase">
                {content.Sections[0].title}
              </h2>
              <p className="white-paragraph">
                {content.Sections[0].description}
              </p>

              <div className="text-center mt-4 ">
                {content.Sections[0].btn_txt &&
                  <a onClick={openBrandingForm}>
                    <ButtonStyleTwo title={content.Sections[0].btn_txt} />
                  </a>
                }

              </div>
            </div>

          </div>
        </BgContentDiv>
        {/*  sixth section  */}
        <div className="padding-top-30 mt-4 bottom-wave-bg">
          <div className="container">
            <h2 className="heading text-uppercase">
              {content.Sections[1].description}

            </h2>
            <div className="text-center mt-3 mt-5">

              {content.Sections[1].btn_txt &&
                <a onClick={openBrandingForm}>
                  <ButtonStyleOne title={content.Sections[1].btn_txt} />
                </a>
              }


            </div>
          </div>
        </div>
        <ReportCardFooter
          category="development"
          imgAddress={ImagePath + content.Book.image}
          title={content.Book.title}
          caption={content.Book.description}
          btntext="GET MY FREE REPORT"
        />




        <style>
          {`
        .secondlist-div img{
          height: 52px;
          width: 52px;
        }
        html{
          overflow-y: auto;
        }
        

          `}

        </style>

        <style jsx>
          {`
                   .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
                   .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
                   .secondlist-div img{ height: 52px !important; width: 52px !important;}

                      .link-class a {
                        color: #4A91BD;
                      }
                    .secondlist-div.jsx-180064006{
                        align-items: center;
                    }
                    .secondlist-div.jsx-180064006 img.jsx-180064006{
                        height: 45px;
                        width: 45px;
                    }
                    .secondlist-div.jsx-180064006 p.jsx-180064006{
                        margin: 0;
                    }
                    .upper-wave-bg{
                      background-image: url('images/web/upper-wave-blue.png');
                      background-repeat: no-repeat;
                    }
                    .bottom-wave-bg{
                        padding-bottom: 90px;
                        background: url(/images/web/bottom-wave-blue.png);
                        background-position: bottom;
                        background-repeat: no-repeat;
                      }
                      @media only screen and (max-width: 500px) {
                        .cro-right-align{
                          justify-content: center;
                        }
                         #brand-table .packagesDiv .mids table tr td:nth-child(4) {
                          box-shadow: none;
                          position: relative; 
                          border: 0px; 
                          background-color: none;
                       
                         }
                        }
                   
                   `}
        </style>
      </div>

    </React.Fragment>
  );
}
export default AppDesign;