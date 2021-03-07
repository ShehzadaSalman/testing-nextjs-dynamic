import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ThumbnailTwo from '../NewComponents/ThumbnailTwo';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import ImgCollage from '../NewComponents/ImgCollage';
import SuccessDisplay from '../NewComponents/successdisplay';
import BrandingForm from '../NewComponents/BrandingForm';
import { useRouter } from 'next/router';
import { openBrandingForm } from '../../lib/helper';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath;

const MotionGraphic = ({ finalData }) => {



  let content;
  const router = useRouter();
  const { locale } = router;
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

    if (finalData.widget_headings) {
      let WidgetHeadings = finalData.widget_headings.map(data => {
        return {
          "id": data.id,
          "title": data.desc_english,
          "level": data.level
        }

      })
    }


    content = {
      "BannerHeading": finalData.header_title_english || "EMPTY",
      "BannerDescription": finalData.header_desc_english || "EMPTY",
      "BannerImage": finalData.header_bg_image || "EMPTY",
      "BannerButton": finalData.header_btn_txt_english || "EMPTY",
      "FirstVideo": finalData.video_link || "",
      "SubBannerHeading": finalData.sub_header_title_english || "EMPTY",
      "SubBannerParagraph": finalData.sub_header_desc_english || "EMPTY",
      "SubBannerButton": finalData.sub_header_btn_txt_english || "EMPTY",
      "Sections": Sections,
      "ListingOne": Widgets.filter(service => service.level === 1),
      "ListingTwo": Widgets.filter(service => service.level === 2),
      "ListingThree": Widgets.filter(service => service.level === 3),
      "Buttons": Buttons,
      // "widget_headings": WidgetHeadings
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


    content = {
      "BannerHeading": finalData.header_title_arabic || "EMPTY",
      "BannerDescription": finalData.header_desc_arabic || "EMPTY",
      "BannerImage": finalData.header_bg_image || "EMPTY",
      "BannerButton": finalData.header_btn_txt_arabic || "EMPTY",
      "FirstVideo": finalData.video_link || "",
      "SubBannerHeading": finalData.sub_header_title_arabic || "EMPTY",
      "SubBannerParagraph": finalData.sub_header_desc_arabic || "EMPTY",
      "SubBannerButton": finalData.sub_header_btn_txt_arabic || "EMPTY",
      "Sections": Headings,
      "ListingOne": Widgets.filter(service => service.level === 1),
      "ListingTwo": Widgets.filter(service => service.level === 2),
      "ListingThree": Widgets.filter(service => service.level === 3),
      "Buttons": Buttons,
      // "widget_headings": WidgetHeadings
    }
  }









  return (
    <React.Fragment>
      <div className="main-content box-direction">
       
        {/*  The First section    */}
        <PageBanner
          dark
          category="branding"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext={content.BannerButton}
          wavename="wave2.png">
        </PageBanner>

        <BrandingForm />
        <SuccessDisplay />

        {/*  The second section    */}
        <div className="bg-grey">
          <div className="container">
            <div className="padding-top-20"></div>
            <div className="padding-top-20"></div>
            <h2 className="heading text-uppercase padding-bottom-10">
              {content.SubBannerHeading}
            </h2>
            <p className="paragraph pb-4 mb-0 mt-0">
              {content.SubBannerParagraph}
            </p>
            <div className="text-center pb-5">

              {content.SubBannerButton && <a onClick={openBrandingForm}>
                <ButtonStyleOne title={content.SubBannerButton} />
              </a>}

            </div>
          </div>
        </div>
        {/*   The third section   */}
        <div className="mc-bg pt-2">

          {/* displaying the first section here if the array is not empty */}
          {content.Sections.length > 0 &&
            <div className="container padding-top-40 padding-bottom-20">
              <h2 className="white-heading text-uppercase">
                {content.Sections[0].title}
              </h2>
              <p className="white-paragraph">
                {content.Sections[0].description}
              </p>
            </div>}




          <img src="images/web/motiongraphic/motiongraphic-greylayer.png" className="full-width" alt="motion graphic" />
        </div>


        {/*  The fourth section    */}
        <div className=" mc-bg-grey">
          <div className="container">
            <div className="row pt-5 box-direction">
              {content.ListingOne.length > 0 &&
                content.ListingOne.map(list => {
                  if (locale !== 'ar') {
                    return (
                      <div className="col-6 col-md-3 col-lg-2 mb-5 mb-md-5">
                        <ThumbnailTwo imgAddress={ImagePath + list.image} title={list.title} />
                      </div>)
                  } else {
                    return (
                      <div className="col-6 col-md-3 col-lg-2 mb-5 mb-md-5">
                        <ThumbnailTwo imgAddress={ImagePath + list.image} title={list.title} />
                      </div>)
                  }
                })
              }
            </div>
          </div>










        </div>



        {/*  The fifth section    */}
        <div className="mc-bg pb-3">
          <img src="images/web/motiongraphic/motiongraphic-greylayer-inverted.png" className="full-width" alt="motion graphic" />
          {/* displaying the second section here */}
          {content.Sections.length > 1 &&
            <div className="container padding-top-40 padding-bottom-20">
              <h2 className="white-heading text-uppercase">
                {content.Sections[1].title}</h2>
              <p className="white-paragraph">
                {
                  content.Sections[1].description
                }

              </p>
            </div>}





        </div>
        {/*   Sixth Section  */}
        <div className="padding-top-50 padding-bottom-40 mc-bg-curved">




          {/* checking and displaying the 3rd section here */}
          {content.Sections.length > 2 &&
            <>
              <h2 className="heading">{
                content.Sections[2].title
              }</h2>
              <p className="paragraph padding-bottom-40">
                {
                  content.Sections[2].description
                }</p>
            </>
          }


          <div className="container">
            <div className="pb-4">
              {content.ListingTwo.length > 0 && <ImgCollage ImagePath={ImagePath} images={content.ListingTwo} />}
            </div>
          </div>

          <div className="text-center pt-5">
            {content.Buttons.length > 0 && <a onClick={openBrandingForm}>
              <ButtonStyleOne title={
                content.Buttons[0].title
              } />
            </a>}


          </div>

        </div>


        <div className=" padding-top-50 padding-bottom-50">
          <div className="margin-top-50 margin-bottom-30"></div></div>




        {/*   report card footer section */}
        {finalData.book &&
          <ReportCardFooter
            category="branding"
            imgAddress={ImagePath + finalData.book.image}
            title={locale === 'ar' ? finalData.book.title_arabic : finalData.book.title_english}
            caption={locale === 'ar' ? finalData.book.desc_arabic : finalData.book.desc_english}
            btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
          />}



      </div>
      <style>{`
  body{
    overflow:inherit;
  }
  .bottom-wave-width{
    max-width: 100%;
}
.box-direction{
  direction: ${locale === 'ar' ? 'rtl' : 'ltr'};
 }
 .mc-bg{
   background-image: url('images/web/motiongraphic/motiongraphic-banner-two.png');
   background-size: cover;
   background-repeat: no-repeat;
   background-color: grey;
 }
 .mc-bg-grey{
   background-color: #ece9e9;
 }
 wave-layer-bg{
   position: bottom !important;
 }
 .mc-bg-curved{
   background-image: url('images/web/motiongraphic/mc-bg-curved.png');
  background-position: top;
   background-repeat: no-repeat;
 }
.full-width{
  width: 100%;
}

        `}

      </style>
    </React.Fragment>
  )
}


export default React.memo(MotionGraphic);
