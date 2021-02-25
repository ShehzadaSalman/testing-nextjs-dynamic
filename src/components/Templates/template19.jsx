import PageBannerTwo from '../NewComponents/PageBanner/PageBannerTwo';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ListItemFour from '../NewComponents/ListItemFour';
import ThumbnailTwo from '../NewComponents/ThumbnailTwo';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import BrandingForm from '../NewComponents/BrandingForm';
import FilterGallery from '../NewComponents/FilterGallery'
import SuccessDisplay from '../NewComponents/successdisplay';
import { PopupText } from 'react-calendly'
import { useRouter } from 'next/router';
import Headerfive from '../HeaderFive';
import Link from 'next/link';
const ImagePath = process.env.ImagePath;

const UIUX = ({ finalData }) => {
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
      "ListingFour": Widgets.filter(service => service.level === 4),
      "Buttons": Buttons,
      "widget_headings": WidgetHeadings
    }

  }



  // open the branding for
  const openDevelopmentForm = () => {
    let form = document.querySelector(".formPopup-branding");
    form.style.display = 'block';
  }

  return (
    <React.Fragment>
    
      <div className="content-div">
        <PageBannerTwo
          dark
          category="development"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          color="rgba(211, 211, 211, 1)"
          buttontext={content.BannerButton}
          contentImage={ImagePath + content.BannerImage}
          wavename="wave2.png"
        ></PageBannerTwo>
        <SuccessDisplay />
        {/*   The third section  */}
        <div className="padding-top-40 padding-bottom-40 bg-grey">
          <div className="container">
            <h2 className="heading text-uppercase">{content.SubBannerHeading}</h2>
            <p className="paragraph">
              {content.SubBannerParagraph}
            </p>
            <div className="text-center padding-top-20">
              <span className="meeting-button" style={{}}>
                {content.SubBannerButton &&
                  <PopupText
                    pageSettings={{
                      backgroundColor: 'ffffff',
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: '00a2ff',
                      textColor: '4d5055'
                    }}
                    styles={{}}
                    text={content.SubBannerButton}
                    url="https://calendly.com/hashim-6/30min"
                  />

                }


              </span>
            </div>
          </div>
        </div>

        {/* fourth section */}
        <div className="padding-top-50 padding-bottom-40 ">
          <div className="container">
            <h2 className="heading padding-top-20 text-uppercase">
              {content.Sections[0].title}
            </h2>
            <p className="paragraph">
              {content.Sections[0].description}
            </p>
          </div>
        </div>
        {/* fifth section  */}

        <BgContentDiv bg="images/web/ui/ui-banner-two.png">
          <div className="container">
            <div className="row box-direction text-direction">
              {content.ListingOne.map(li => (
                <div className="col-md-6" key={li.title}>
                  <ListItemFour imgAddress={ImagePath + li.image} description={li.title} />
                </div>
              ))}
            </div>
          </div>
        </BgContentDiv>

        {/* Sixth Sectio   */}


        <div className="wave-layer-bg-thin padding-top-50 padding-bottom-50">
          <h2 className="heading padding-bottom-50">{content.widget_headings[0].title}</h2>
          <div className="container">
            <div className="row">
              {content.ListingTwo.map(li => (
                <div className="col-md-2 px-3 mb-5">
                  <ThumbnailTwo imgAddress={ImagePath + li.image} title={li.title} />
                </div>
              ))}

            </div>
          </div>
          <div className="text-center pt-5">
            {content.Buttons[0] && <a onClick={openDevelopmentForm}>
              <ButtonStyleOne title={content.Buttons[0].title} />
            </a>}

          </div>

        </div>

        {/*  Seventh Section   */}
        <BgContentDiv bg="images/web/ui/ui-banner-three.png">
          <div className="container">
            <div className="padding-top-20">
              <h2 className="white-heading text-uppercase">{content.Sections[1].title}</h2>
              <p className="white-paragraph">{content.Sections[1].description}</p>
              <div className="text-center mt-4 mb-3">
                <Link href="portfolio-page">
                  <a href="">
                    <ButtonStyleTwo title="Explore Our Portfolio" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

        </BgContentDiv>

        {/*  Eigth Section   */}
        <div className="wave-layer-bg-thin padding-top-50 padding-bottom-50">
          <div className="container">
            <h2 className="heading padding-bottom-30">PORTFOLIO</h2>
            <FilterGallery tags={content.ListingThree} images={content.ListingFour} />
          </div>
        </div>


        <div className="padding-top-20 padding-bottom-50 bottom-wave-bg">
          {/* <h2 className = "heading">HIRE DYNAMIC USER INTERFACE DESIGNERS FOR A SEAMLESS {'\n'} END-TO-END PRODUCT EXPERIENCE FOR YOUR USERS</h2> */}
          <div className="text-center padding-top-20 pb-5">

            {content.Buttons[1].title &&
              <a onClick={openDevelopmentForm}>
                <ButtonStyleOne title={content.Buttons[1].title} />
              </a>}
          </div>
        </div>



        <ReportCardFooter
          category="development"
          imgAddress={ImagePath + finalData.book.image}
          title={locale === 'ar' ? finalData.book.title_arabic : finalData.book.title_english}
          caption={locale === 'ar' ? finalData.book.desc_arabic : finalData.book.desc_english}
          btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
        />

        {/*  the page ends here */}
      </div>
      <style>
        {`
 body{
   overflow-y: inherit;
 }
 .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
 .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}


.tools-second{margin-top: 50px; margin-bottom: 30px;}
.dfooter-wavebg{
  padding-bottom: 90px;
  background: url(/images/web/3dapp/blue-thin-waves.png);
  background-position: bottom;
  background-repeat: no-repeat;
}
.MuiGrid-root.tools-one.MuiGrid-container.MuiGrid-spacing-xs-4 {
    justify-content: center;
}
.MuiGrid-root.tools-second.MuiGrid-container.MuiGrid-spacing-xs-4{ justify-content: center;}


  `}</style>


    </React.Fragment>
  );
}
export default React.memo(UIUX);
