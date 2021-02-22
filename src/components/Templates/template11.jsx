import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ThumbnailOne from '../NewComponents/ThumbnailOne';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree';
import BgContentDiv from '../NewComponents/BContentDiv';
import DevelopmentForm from '../NewComponents/DevelopmentForm';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import {PopupText} from 'react-calendly';
import { useRouter } from 'next/router';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath;

const WebDesign = ({finalData}) => {
  // open the development form


let content;

  const openDevelopmentForm = () => {
  let form = document.querySelector("#formPopup-branding");
  form.style.display = 'block';
 }
 const router = useRouter();
 const {locale} = router;
 console.log(router.pathname);
 var pageurl = "https://techbay.co"+router.pathname;


 if(locale !== 'ar'){
  // getting the english headings
  let Sections = finalData.headings.map( data => {
    return {
     "id": data.id, 
     "title": data.title_english,
     "description": data.desc_english,
     "level": data.level,
     "btn_txt": data.btn_txt_english
     }  
 })

 let Widgets = finalData.widget.map( data => {
  return {
   "id": data.id, 
   "title": data.title_english,
   "description": data.desc_english,
   "level": data.level,
   "btn_txt": data.btn_txt_english,
   "image": data.image,
   "level": data.level,
   }})
let Buttons = finalData.widget_btn.map( data => {
 return {
   "id": data.id,
    "title": data.title_english,
    "level": data.level
 }})
let WidgetHeadings =  finalData.widget_headings ? finalData.widget_headings.map( data => {
 return {
   "id" : data.id,
   "title": data.desc_english,
    "level": data.level
 }
}) : '';


  content = {
    "BannerHeading" : finalData.header_title_english || "EMPTY",
    "BannerDescription" : finalData.header_desc_english || "EMPTY",
    "BannerImage": finalData.header_bg_image || "EMPTY",
    "BannerButton": finalData.header_btn_txt_english || "EMPTY",
    "FirstVideo": finalData.video_link || "",
    "SubBannerHeading": finalData.sub_header_title_english || "EMPTY",
    "SubBannerParagraph": finalData.sub_header_desc_english || "EMPTY",
    "SubBannerButton": finalData.sub_header_btn_txt_english || "EMPTY",
    "Sections": Sections,
    "ListingOne": Widgets.filter(service => service.level === 1), 
    "ListingTwo": Widgets.filter(service => service.level === 2),
    "ListingThree" : Widgets.filter(service => service.level === 3),
    "Buttons" : Buttons,
    "widget_headings": WidgetHeadings
}
}else { // when we set it to arabic

  // getting the arabic headings
  let Headings = finalData.headings.map( data => {
    return {
     "id": data.id, 
     "title": data.title_arabic,
     "description": data.desc_arabic,
     "level": data.level,
     "btn_txt": data.btn_txt_arabic
     }  
 })

 let Widgets = finalData.widget.map( data => {
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
let Buttons = finalData.widget_btn.map( data => {
  return {
     "id": data.id,
     "title": data.title_arabic,
     "level": data.level
  }
 })
 
 let WidgetHeadings = finalData.widget_headings ? finalData.widget_headings.map( data => {
  return {
     "id" : data.id,
     "title": data.desc_arabic,
     "level": data.level
  }
 }) : '';
content = {
    "BannerHeading" : finalData.header_title_arabic || "EMPTY",
    "BannerDescription" : finalData.header_desc_arabic || "EMPTY",
    "BannerImage": finalData.header_bg_image || "EMPTY",
    "BannerButton": finalData.header_btn_txt_arabic || "EMPTY",
    "FirstVideo": finalData.video_link || "",
    "SubBannerHeading": finalData.sub_header_title_arabic || "EMPTY",
    "SubBannerParagraph": finalData.sub_header_desc_arabic || "EMPTY",
    "SubBannerButton": finalData.sub_header_btn_txt_arabic || "EMPTY",
    "Sections": Headings,
    "ListingOne": Widgets.filter(service => service.level === 1), 
    "ListingTwo": Widgets.filter(service => service.level === 2),
    "ListingThree" : Widgets.filter(service => service.level === 3),
    "Buttons" : Buttons,
    "widget_headings": WidgetHeadings
}

}














 
    return (
        <React.Fragment>
            {/*  The First section    */}

            <PageBanner
            category = "development"
            heading = {content.BannerHeading}
            paragraph = {content.BannerDescription}
            bg = {ImagePath + content.BannerImage}
            wavename = "wave2.png">
            </PageBanner>
            <SuccessDisplay />
            <div className = "main-div">
            {/*  second section  */}
            <div className = "">
        </div>
                    {/*  third section for the table  */}




            {/* third section for the table ends here */}
                 
              <div className = "padding-top-50 padding-bottom-30 bg-grey">
             
                  <div className = "container">
                  <h2 className = "heading padding-top-30 padding-bottom-10 text-uppercase">
                 {content.SubBannerHeading}
                    </h2>
                  <p className = "paragraph">
                   {content.SubBannerParagraph}
                  </p>
                  <div className = "text-center padding-top-20 padding-bottom-40">
                    {content.SubBannerButton && 
                     <a onClick = {openDevelopmentForm}>
                     <ButtonStyleOne title = {content.SubBannerButton} />
                     </a>
                    }
                   
                  </div>
                 
                 </div>
              </div>   
              {/*   fourth section */}
              <BgContentDiv bg = "images/web/webdesign/web-banner-two.png">
                  <div className = "container padding-top-30 padding-bottom-30">
                    <div className="container">
                      <h2 className="white-heading">
                      {content.Sections[0].title}
                      </h2>
                      <p className="white-paragraph mb-5">
                      {content.Sections[0].description}
                      </p>

                      <div className="row d-flex justify-content-center">
             {content.ListingOne.map(li => (

<div className="col-6 col-md-2 mb-4" key={li.id}>
<ThumbnailOne imgAddress  = {ImagePath +li.image} title  = {li.title}></ThumbnailOne>
</div>
             ))}          
                       
                  
                       

                      </div>
                      <div className = "text-center mt-5">
                    <a onClick = {openDevelopmentForm}>
                    <ButtonStyleTwo title = {content.Buttons[0].title} />
                    </a>
                  </div>
                    </div>

                  </div>
              </BgContentDiv>
              {/*  sixth section  */}
              <div className = "padding-top-30 mt-5 bottom-wave-bg">
                <div className="container">
                  <h2 className="heading">
                   {content.Sections[1].title}
                  </h2>
                  <p className = "paragraph pb-2">{content.Sections[1].description}</p>
           <div className="text-center mb-5">
             <span className="link-class">
           
           
<PopupText
  pageSettings={{
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }}
  styles={{}}
  text={content.Sections[1].btn_txt}
  url="https://calendly.com/hashim-6/30min"  
  />
</span>
           </div>
                </div>
              </div>

   
              <ReportCardFooter
category = "development"
imgAddress = {ImagePath + finalData.book.image}
title = {locale === 'ar' ? finalData.book.title_arabic  : finalData.book.title_english }
caption = {locale === 'ar' ? finalData.book.desc_arabic  : finalData.book.desc_english }
btntext = "GET MY FREE REPORT"
   /> 
      
      

                <style>
                    {`
               
                    html{
                        overflow-y: auto;
                      }

                      .link-class a {
                        color: #4A91BD;
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
export default WebDesign;