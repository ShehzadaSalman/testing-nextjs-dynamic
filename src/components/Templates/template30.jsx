import PageBanner from '../NewComponents/PageBanner/PageBanner';
import Container from '@material-ui/core/Container';
import { Box, Grid, Button } from '@material-ui/core';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import Headerfive from '../HeaderFive';
import ThumbnailOne from '../NewComponents/ThumbnailOne';
import ListItemTwo from '../NewComponents/ListItemTwo';
import BrandingForm from '../NewComponents/BrandingForm';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import {PopupText} from 'react-calendly';
import { useRouter } from 'next/router';
const ImagePath = process.env.ImagePath


const ContentCreation = ({finalData}) => {
  
  

  const router = useRouter();
  const { locale } = router;

  var pageurl = "https://techbay.co"+router.pathname;

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

  // open the branding form
 const openBrandingForm = () => {
  let form = document.querySelector(".formPopup-branding");
   form.style.display = 'block';
 }
 const openMarketingForm = () => {
  let form = document.querySelector(".formPopup-branding");
   form.style.display = 'block';
 }

  
  return(
  <React.Fragment>

 
<div className = "main-content">
   
  
{/*  The First section    */}
      <PageBanner
      category = "marketing"
       heading = {content.BannerHeading}
       paragraph = {content.BannerDescription}
       bg = {ImagePath + content.BannerImage}
       buttontext = {content.BannerButton}
       wavename = "wave2-light.png"
        ></PageBanner>
  <SuccessDisplay/>

{/*  The second section    */}
        <div className = "bg-white padding-bottom-30">
        <div className="container">
       <div className = "padding-top-20"></div>
       <div className = "padding-top-20"></div>
       <h2 className = "heading padding-bottom-10">
        {content.SubBannerHeading}
        </h2>
       <p className = "paragraph">
        {content.SubBannerParagraph}
        </p>
       </div>
       <div className = "margin-top-20"></div>
       <div className = "margin-top-20"></div>
       <div className = "text-center">
         <div className = "margin-top-20"></div>
       </div>
      </div>
{/*  The Third section    */}
<BgContentDiv bg = "/images/web/contentcreation/contentcreation-banner-two.png">
  <div className="container">
  <div className="row box-direction">
    {content.ListingOne.map(li => (
    <div className="col-6 col-md-2 mb-md-4 mb-2">
    <ThumbnailOne imgAddress  = {ImagePath + li.image}
     title  = {li.title}></ThumbnailOne> 
    </div>
    ))}

  </div>
  


  <div className="text-center mt-5">

    <span className = "meeting-button-light mb-3" style = {{ }}> 
<PopupText
  pageSettings={{
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }}
  styles={{}}
  text={content.Buttons[0].title}
  url="https://calendly.com/hashim-6/30min"  
  />
</span>

 <div className="mt-2 mb-2">
   
 </div>

  </div>
  </div>
 
</BgContentDiv>

{/*  The Fourth section    */}
<div id = "" className  = "wave-layer-bg">
<div className="container">
  <div className = "padding-top-40"></div>
  <div className = "padding-top-20"></div>
<h2 className = "heading">{content.Sections[0].title}</h2>
<p className = "paragraph">{content.Sections[0].description}</p>
  <div className = "padding-top-40"></div>
</div>
</div>

{/*  The Fifth section    */}
<BgContentDiv bg = "/images/web/contentcreation/contentcreation-banner-three.png">
<div className="container">
  <h2 className = "white-heading pt-3">
  {content.Sections[1].title}
    </h2>
  <div className = "padding-top-20"></div>
  <div className = "text-center">
    <a onClick = {openMarketingForm}>
      {content?.Sections[1]?.btn_txt && 
      <ButtonStyleTwo  title = {content.Sections[1].btn_txt} />}
    </a>
  </div>
</div>
</BgContentDiv>

{/*  The Sixth section    */}

<div className = "bg-grey">
<div className="container box-direction">
<div className ="padding-top-50"></div>
<h1 className = "left-heading text-direction">{content.Sections[2].title}</h1>
<p className = "left-paragraph text-direction">{content.Sections[2].description}</p>
<div className = "padding-top-20"></div>
{content.ListingTwo.map(li => (
  <ListItemTwo title = {li.title} description = {li.description}></ListItemTwo>
))}
<div className = "text-center padding-top-30 padding-bottom-50">
  <a onClick = {openMarketingForm} >
    {content.Buttons[1] && <ButtonStyleOne title = {content.Buttons[1].title}></ButtonStyleOne> }
  </a>
</div>
</div>
<div className="pb-5">

</div>
</div>

{/*  The Sixth section    */}





</div>

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
        .contentcreation-circularimg{
           max-width: 100%;
        }


        `}
      </style>


    </React.Fragment>
  );
  }
  export default ContentCreation;
