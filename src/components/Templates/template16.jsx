import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ThumbnailOne from '../NewComponents/ThumbnailOne';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree';
import BgContentDiv from '../NewComponents/BContentDiv';
import SuccessDisplay from '../NewComponents/successdisplay';
import ListItemFive from '../NewComponents/ListItemFive';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import { PopupText } from 'react-calendly';
import { useRouter } from 'next/router';
import { openBrandingForm } from '../../lib/helper'
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath

const ERP = ({ finalData }) => {
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
        "image_2": data.image_2,
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
        "image_2": data.image_2,
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
        <div className=""></div>
        <div className="padding-top-50 padding-bottom-30 bg-grey">

          <div className="container">
            <h2 className="heading padding-top-30 padding-bottom-10 text-uppercase">
              {content.SubBannerHeading}
            </h2>
            <p className="paragraph">
              {content.SubBannerParagraph}
            </p>


          </div>
        </div>


        {/* THIRD section */}

        <div className="white-bg pb-5 pt-5">
          <div className="container">
            <h2 className="heading text-uppercase">{content.Sections[0].title}</h2>
            <p className="paragraph">{content.Sections[0].description}</p>

            <div className="text-center mb-4">
              {content.widget_headings[0].image && <img src={ImagePath + content.widget_headings[0].image} className="img-fluid" alt="erp" />}

            </div>

            <div className="d-flex row box-direction">

              {content.ListingOne && content.ListingOne.map(li => (
                <div className="col-md-4 px-md-5 d-flex mb-4 mb-md-0 ">
                  <div className="">
                    <img src="/images/web/erp/arrow-up.png" alt="arrows" className="img-fluid" />
                    <div className="erp-thumbnail text-center">
                      <img src={ImagePath + li.image} alt="implement" />
                      <h5 className="mt-4">{li.title}</h5>
                      <p className="paragraph mt-3 px-3">
                        {li.description}
                      </p>
                    </div>
                    <img src="/images/web/erp/arrow-down.png" alt="arrows" className="img-fluid" />
                  </div>
                </div>

              ))}




            </div>
          </div>

        </div>


        {/* the fourth section */}

        <img src="/images/web/erp/upperwave.png" alt="wave" className="img-fluid" />

        <div className="bg-grey pt-4 pb-4">

          <div className="container">
            <h2 className="heading text-uppercase">
              {content.Sections[1].title && content.Sections[1].title}
            </h2>
            <p className="paragraph mb-5">
              {content.Sections[1].description && content.Sections[1].description}
            </p>


            <div className="row d-flex justify-content-center position-relative">




              <div className="row d-flex justify-content-between box-direction">
                {content.ListingTwo && content.ListingTwo.map(li => (
                  <div className="col-6 col-md-2 text-center mb-4 px-0">
                    <img src={ImagePath + li.image} alt="numbers" className="mb-3" />
                    <div className="">
                      <img src={ImagePath + li.image_2} className="img-fluid" alt="image" />
                    </div>
                    <p className=" paragraph">
                      {li.description}
                    </p>
                  </div>
                ))}




              </div>

            </div>






          </div>




        </div>





        {/*   fifth section */}

        <div className="mt-5 mb-5">
          <div className="container">
            <h2 className="heading text-uppercase">
              {content.Sections[2].description}
            </h2>
            <div className="text-center mt-4">
              {content.Sections[2].btn_txt && <a onClick={openBrandingForm}>
                <ButtonStyleOne title={content.Sections[2].btn_txt} />
              </a>}

            </div>



          </div>

        </div>






        {/*  sixth section  */}
        <div className="pt-5 pb-5 bottom-wave-bg">
          <div className="container pt-5 pb-5">


          </div>
        </div>


        <ReportCardFooter
          category="development"
          imgAddress={ImagePath + content.Book.image}
          title={content.Book.title}
          caption={content.Book.description}
          btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
        />


        <style jsx>
          {`
        .icon-wrapper-erp{
 
            border-radius: 50%;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            padding: 40px;
            border: dashed #4A91BD;
            background-color: #f1f1f1;
        }
        .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
        .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}


         .hr-line-container{ 
            margin-top: 100px;
            position: relative;
            margin-bottom: -97px;
         }



        #border-line{ 
            border: dashed 2px #4A91BD;
        }
        .appdev{
            margin-bottom:10px;
        }
          .arrow-shape-div{
              border: solid 1px #eee;
              border-radius: 20px;
              width: 100%;
              height: 250px;
          }    
          .arrow-shape:before {
            border-bottom: 35px solid red;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            content: "";
            height: 0;
            left: 0;
            position: absolute;
            top: -35px;
            width: 0;
          }

          `}

        </style>

        <style>
          {`
               
                    html{
                        overflow-y: auto;
                      }

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
export default ERP;