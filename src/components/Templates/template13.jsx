import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import SuccessDisplay from '../NewComponents/successdisplay';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import { openBrandingForm } from '../../lib/helper'
import { useRouter } from 'next/router';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath;
const SubWebDevelopment = ({ finalData }) => {

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
    let Buttons = finalData.widget_btn.map(data => {
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
        "level": data.level
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
      "widget_headings": WidgetHeadings
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
    let Buttons = finalData.widget_btn.map(data => {
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
        "level": data.level
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
      "widget_headings": WidgetHeadings
    }

  }


  return (

    <React.Fragment>
      <div className="main-content box-direction">
  
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

        {/*  The second section    */}
        <div className="bg-grey">
          <div className="container">
            <div className="padding-top-20"></div>
            <div className="padding-top-20"></div>
            <h2 className="heading text-uppercase">
              {content.SubBannerHeading}
            </h2>
            <p className="paragraph">
              {content.SubBannerParagraph}
            </p>
            <div className="row mt-5 box-direction">
              {content.ListingOne && content.ListingOne.map(li => (
                <div className="col-md-4 px-md-3 mb-5">
                  <div className="web-thumbnail d-flex align-items-center">
                    <img src={ImagePath + li.image} className="px-3" alt="web development" />
                    <h5 className=" font-weight-bold">{li.title}</h5>
                  </div>
                  <div className="web-thumbnailcaption">
                    <p className="left-paragraph text-direction">
                      {li.description}
                    </p>
                  </div>
                </div>

              ))}





            </div>
          </div>
          <div className="padding-bottom-20"></div>
        </div>




        {/*  The fifth section    */}
        <BgContentDiv bg="/images/web/webdevelopment/webdev-banner-two.png">
          <div className="container mt-4 mb-4">
            <h2 className="white-heading text-uppercase mb-4">
              {content.Sections[0] && content.Sections[0].title}
            </h2>
            <p className="white-paragraph mb-0 mt-0">
              {content.Sections[0] && content.Sections[0].description}
            </p>
            <div className="text-center mt-4">
              {content.Sections[0] && <a onClick={openBrandingForm}>
                <ButtonStyleTwo title={content.Sections[0].btn_txt} />
              </a>}

            </div>

          </div>
        </BgContentDiv>

        {/*   Sixth Section  */}

        <div className="wave-layer-bg pt-5">
          <h2 className="heading">
            {content.widget_headings[0].title}
          </h2>
          {/*  This is the first row  */}


          <div className="container mt-5">
            <div className="row">
              {content.ListingTwo.map(li => (
                <div className="col-md-2 col-6 d-flex justify-content-center align-items-center mt-5 mb-5">
                  <img src={ImagePath + li.image} className="img-fluid" alt="development" />
                </div>
              ))}
            </div>
          </div>
          <div className="bottom-wave-bg pb-5 pt-5">
            <div className="text-center pt-5 pb-5 mb-4">
              {content.Buttons[0] &&
                <a onClick={openBrandingForm}>
                  <ButtonStyleThree title={content.Buttons[0].title} />
                </a>
              }

            </div>
          </div>
        </div>

        <ReportCardFooter
          category="development"
          imgAddress={ImagePath + finalData.book.image}
          title={locale === 'ar' ? finalData.book.title_arabic : finalData.book.title_english}
          caption={locale === 'ar' ? finalData.book.desc_arabic : finalData.book.desc_english}
          btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
        />
      </div>
      <style>{`
  body{
    overflow:inherit;
  }
  .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
  .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
  .bottom-wave-width{
    max-width: 100%;
}
.web-thumbnailcaption p{
 line-height: 2.2;
}
.bottom-wave-bg{
  padding-bottom: 90px;
  background: url(/images/web/bottom-wave-blue.png);
  background-position: bottom;
  background-repeat: no-repeat;
}
.jc-center{
  justify-content: center;
}
.as-center{
  align-self: center;
}
.as-center{
  align-self: center;
}
.fd-column{
  flex-direction: column;
align-self: flex-end;
justify-content: center;
align-items: center;
}
.text-left{
  text-align: left;
}
.technologies-name{
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  padding-top: 20px;
  font-weight: 600;
  color: #565656;
}

        `}

      </style>
    </React.Fragment>
  );
}
export default React.memo(SubWebDevelopment);
