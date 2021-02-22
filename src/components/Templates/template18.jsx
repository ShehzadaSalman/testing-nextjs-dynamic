import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import SuccessDisplay from '../NewComponents/successdisplay';
import { useRouter } from 'next/router';
import { openBrandingForm } from '../../lib/helper'
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath
function CRM({ finalData }) {



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

      <div className="Content-div bg-grey">
     
        {/*  the first section  */}
        <PageBanner
          category="development"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext={content.BannerButton}
          wavename="wave2.png"
        ></PageBanner>


        <SuccessDisplay />
        {/*  the second  section  */}
        <div className="bg-grey padding-bottom-30">
          <div className="container">
            <div className="row box-direction">
              <div className="col-md-7 d-flex justify-content-center flex-column">
                <div>
                  <h2 class="left-heading text-uppercase text-direction">
                    <span>{content.SubBannerHeading}</span>
                  </h2>

                  <p className="left-paragraph text-direction">
                    {content.SubBannerParagraph}
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src={ImagePath + content.SubBannerImage} alt="crm" className="img-fluid" />
              </div>
            </div>

          </div>

          <div className="margin-top-20"></div>
          <div className="margin-top-20"></div>
        </div>
        {/*  the third section  */}
        <div className="bg-white">
          <div className="container padding-top-30 padding-bottom-30">
            <h2 className="heading text-uppercase pt-3">
              {content.Sections[0].title}
            </h2>
            <p className="paragraph">
              {content.Sections[0].description}
            </p>
            <div className="text-center mt-4">
              {content.Sections[0].btn_txt && <a onClick={openBrandingForm}>
                <ButtonStyleOne title={content.Sections[0].btn_txt} />
              </a>
              }
            </div>
          </div>

          <img src="/images/web/crm-page/crm-wave2.png" alt="waves" className="full-img" />
        </div>
        {/*  the third section  */}

        <div className="bg-grey">
          <div className="container">
            <h2 className="heading text-uppercase">
              {content.Sections[1].title}

            </h2>
            <p className="paragraph mb-5">
              {content.Sections[1].description}
            </p>


            <div className="row box-direction">

              {content.ListingOne && content.ListingOne.map(li => (
                <div className="col-md-6 d-flex">
                  <div className="crm-thumbnail p-4 d-flex mb-4 w-100">
                    <div className="img px-3">
                      <img src={ImagePath + li.image} alt="crm page" />
                    </div>
                    <div className="caption">
                      <h5 className="text-direction">{li.title}</h5>
                      <p className="left-paragraph text-direction">
                        {li.description}
                      </p>
                    </div>
                  </div>
                </div>

              ))}






            </div>

            {/* data missing from the backend */}
            <div className="text-center d-block mt-4 mb-5">
              <a onClick={openBrandingForm}>
                <ButtonStyleOne title="Let’s Integrate Your CRM!" />
              </a>
            </div>

          </div>

        </div>



        <div className="bottom-wave-bg bg-white pt-5">
          <h2 className="heading text-uppercase">
            {content.Sections[2].title}
          </h2>
          <p className="paragraph mb-5 ">
            {content.Sections[2].description}
          </p>

        </div>






        <div className="">
          <ReportCardFooter
            category="development"
            imgAddress={ImagePath + content.Book.image}
            title={content.Book.title}
            caption={content.Book.description}
            btntext="GET MY FREE REPORT"
          />

        </div>



      </div>{' '}
      {/* Content div ends here */}
      <style>
        {`
    html{
      overflow-y: auto;
    }
    .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
    .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
        .testimonial-div{
          padding-bottom: 90px;
          padding-top: 20px;
        }
        .justify-center{
          justify-content: center;
        }
        .slick-prev:before, .slick-next:before {
          font-family: 'slick';
          font-size: 34px;
          line-height: 1;
          /* opacity: .75; */
          color: #17a2b8;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
      }
      .slick-next:before {
        content: '';
    }
    .slick-prev:before {
      content: '';
  }
  .crm-thumbnail{

    border: 4px dashed #4a91bd;
    border-radius: 5px;

  }
  .fulll-img{
    width: 100%;
  }
        `}
      </style>
    </React.Fragment>
  );
}
export default CRM;
