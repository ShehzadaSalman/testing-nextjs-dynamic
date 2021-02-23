import Head from 'next/head';
import PageBanner from '../NewComponents/PageBanner/PageBanner';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailTwo from '../NewComponents/ThumbnailTwo.jsx';
import { useState } from 'react';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import SuccessDisplay from '../NewComponents/successdisplay';
import { useRouter } from 'next/router';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath

const CROPAGE = ({ finalData }) => {


  // open marketing form 
  const openMarketingForm = () => {
    let form = document.querySelector(".formPopup-branding");
    form.style.display = 'block';
  }
  const router = useRouter();
  const { locale } = router;
  var pageurl = "https://techbay.co" + router.pathname;
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

      <div className="main-div">
 
        <PageBanner
          dark
          category="marketing"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext={content.BannerButton}
          wavename="wave2-light.png">
        </PageBanner>
        {/*   first section   */}
        <div className="padding-top-40 padding-bottom-30 margin-top-30">
          <div className="container">
            <h2 className="heading text-uppercase">
              {content.SubBannerHeading}
            </h2>
            <p className="paragraph">
              {content.SubBannerParagraph}
            </p>
          </div>
        </div>
        <SuccessDisplay />

        <BgContentDiv bg="images/web/cro/cro-banner-two.png">
          <div className="container">
            <h2 className="white-heading text-uppercase">
              {content.Sections[0].title}
            </h2>
            <p className="white-paragraph">
              {content.Sections[0].description}
            </p>
          </div>
        </BgContentDiv>
        {/*  fourth section  */}
        <div className="upper-wave-bg padding-top-40 padding-bottom-50">
          <div className="container">
            <h2 className="heading padding-top-10 padding-bottom-50">{content.widget_headings[0].title}</h2>
            <div className="row d-flex justify-content-center box-direction">
              {content.ListingOne && content.ListingOne.map(li => (
                <div className="col-md-3 mb-5 mt-3">
                  <ThumbnailTwo imgAddress={ImagePath + li.image} title={li.title} />
                </div>
              ))}


            </div>

          </div>
        </div>

        {/* Sixth Section */}
        <BgContentDiv bg="images/web/cro/cro-banner-three.png">
          <div>
            <h2 className="white-heading padding-top-20 text-uppercase">
              {content.Sections[1].title} </h2>
            <p className="white-paragraph">
              {content.Sections[1].description}
            </p>
            <div className="text-center mb-5">
              {content.Sections[1].btn_txt &&
                <a onClick={openMarketingForm}>
                  <ButtonStyleTwo title={content.Sections[1].btn_txt} />
                </a>
              }

            </div>

          </div>
        </BgContentDiv>


        <ReportCardFooter
          category="marketing"
          imgAddress={ImagePath + content.Book.image}
          title={content.Book.title}
          caption={content.Book.description}
          btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
        />


        <style>
          {`
     html{
      overflow-y: auto;
    }
    .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
    .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
   #cropage-table{
    margin-bottom: 40px;
  }
   .cro-right-align{
     justify-content: flex-end;
   }
   .responsive-padding-top40{
    padding-top: 40px;
   }
   .slider-end-content{
    margin: 0 !important;
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
     .packagesDiv .mids table tr td:nth-child(4) {
      box-shadow: none;
      position: relative; 
      border: 0px; 
      background-color: none;
   
     }

   #cropage-table .packagesDiv .mids table tr:nth-child(even) td{
    
     }
    //  #cropage-table .packagesDiv .mids table tr td{
    //   
    // }

  }
    .upper-wave-bg{
      background-image: url('images/web/upper-wave-blue.png');
      background-repeat: no-repeat;
    }
  `}
        </style>

      </div>

    </React.Fragment>
  );

}
export default CROPAGE;