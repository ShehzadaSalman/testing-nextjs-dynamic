import PageBanner from '../NewComponents/PageBanner/PageBanner';
import Container from '@material-ui/core/Container';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import ListItemFour from '../NewComponents/ListItemFour';
import NewTermsOfServices from '../NewComponents/NewTermsOfService';
import TermOfServices from '../TermOfServices';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath

const PpcPage = ({ finalData }) => {
  const openMarketingForm = () => {
    let form = document.querySelector(".formPopup-branding");
    form.style.display = 'block';
  }

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

      <div className="main-div">
 
        <PageBanner
          category="marketing"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext={content.BannerButton}
          wavename="wave2-light.png"
        ></PageBanner>
        <SuccessDisplay />
        {/* <MarketingForm/> */}
        {/* Section 1 */}
        <div className="padding-top-30 padding-bottom-30">
          <div className="container">
            <h2 className="heading text-uppercase">{content.SubBannerHeading}</h2>
            <p className="paragraph">
              {content.SubBannerParagraph}
            </p>
            <div className="text-center mt-4 mb-3">
              {content.SubBannerButton && <a onClick={openMarketingForm}>
                <ButtonStyleOne title={content.SubBannerButton} />
              </a>}
            </div>
          </div>

        </div>

        {/*  Section 2 */}
        <div className="">



        </div>


        <div className="ppc-bg-two padding-top-30">
          <Container>
            <h2 className="white-heading padding-top-40 text-uppercase text-direction">
              {content.Sections[0].title}
            </h2>
            <p className="padding-top-20 padding-bottom-10 left-paragraph text-direction" style={{ color: "#fff" }}>
              {content.Sections[0].description}
            </p>
            <div className="box-direction">
              {content.ListingOne && content.ListingOne.map(li => (

                <ListItemFour imgAddress={ImagePath + li.image} description={li.description} />

              ))}

            </div>

            <div className="text-center mt-5">

              {/* button missing from backend and link needed */}
              <Link href="case-studies">
                <a><ButtonStyleTwo title="Explore Our Work" /> </a>
              </Link>
            </div>


          </Container>
          <img src="images/web/ppc/ppc-bottom-layer-two.png" className="full-image img-fluid" alt="ppc bottom layer" />
        </div>


        <div className="padding-top-40 bg-grey padding-bottom-20"></div>
        <ReportCardFooter
          category="marketing"
          imgAddress={ImagePath + content.Book.image}
          title={content.Book.title}
          caption={content.Book.description}
          btntext="GET MY FREE REPORT"
        />


        <style>
          {`
  body{
    overflow-y: auto;
  }
  .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
  .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
    .ppc-bg-two{
      background-image: url("images/web/ppc/ppc-banner-two.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-color: grey;
    }



    `}</style>

      </div>

    </React.Fragment>
  );
}

export default PpcPage;
