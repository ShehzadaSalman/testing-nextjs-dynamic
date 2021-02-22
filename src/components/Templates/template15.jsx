import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailOne from '../NewComponents/ThumbnailOne';
import ListItemTwo from '../NewComponents/ListItemTwo';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import { useRouter } from 'next/router';
import {openBrandingForm} from '../../lib/helper'
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath

const CMS = ({finalData}) => { 
 
   const router = useRouter();
   const {locale} = router;
   let content;
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

  let Book = {
    "title": finalData.book.title_english,
    "description":finalData.book.desc_english,
    "image": finalData.book.image,
    "status": finalData.book.status
  };
 
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
 let Buttons =  finalData.widget_btn && finalData.widget_btn.map( data => {
  return {
    "id": data.id,
     "title": data.title_english,
     "level": data.level
  }})
 let WidgetHeadings =  finalData.widget_headings ? finalData.widget_headings.map( data => {
  return {
    "id" : data.id,
    "title": data.desc_english,
     "level": data.level,
     "image": data.image
  }
 }) : '';
 
 
   content = {
     "BannerHeading" : finalData.header_title_english,
     "BannerDescription" : finalData.header_desc_english,
     "BannerImage": finalData.header_bg_image,
     "BannerButton": finalData.header_btn_txt_english,
     "FirstVideo": finalData.video_link,
     "SubBannerHeading": finalData.sub_header_title_english,
     "SubBannerParagraph": finalData.sub_header_desc_english,
     "SubBannerButton": finalData.sub_header_btn_txt_english,
     "Sections": Sections,
     "ListingOne": Widgets.filter(service => service.level === 1), 
     "ListingTwo": Widgets.filter(service => service.level === 2),
     "ListingThree" : Widgets.filter(service => service.level === 3),
     "ListingFour" : Widgets.filter(service => service.level === 4),
     "Buttons" : Buttons,
     "widget_headings": WidgetHeadings,
     "Book":Book
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
  let Book = {
    "title": finalData.book.title_arabic,
    "description":finalData.book.desc_arabic,
    "image": finalData.book.image,
    "status": finalData.book.status
  };
 
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
 let Buttons = finalData.widget_btn && finalData.widget_btn.map( data => {
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
      "level": data.level,
      "image": data.image
   }
  }) : '';
 content = {
     "BannerHeading" : finalData.header_title_arabic,
     "BannerDescription" : finalData.header_desc_arabic,
     "BannerImage": finalData.header_bg_image,
     "BannerButton": finalData.header_btn_txt_arabic,
     "FirstVideo": finalData.video_link,
     "SubBannerHeading": finalData.sub_header_title_arabic,
     "SubBannerParagraph": finalData.sub_header_desc_arabic,
     "SubBannerButton": finalData.sub_header_btn_txt_arabic,
     "Sections": Headings,
     "ListingOne": Widgets.filter(service => service.level === 1), 
     "ListingTwo": Widgets.filter(service => service.level === 2),
     "ListingThree" : Widgets.filter(service => service.level === 3),
     "ListingFour" : Widgets.filter(service => service.level === 4),
     "Buttons" : Buttons,
     "widget_headings": WidgetHeadings,
     "Book": Book
 }
 }

  return(
  <React.Fragment>

<div className = "main-content">

{/*  The First section    */}
      <PageBanner
      category = "development"
       heading = {content.BannerHeading}
       paragraph = {content.BannerDescription}
       bg = {ImagePath + content.BannerImage}
       wavename = "wave2-light.png"
        ></PageBanner>

{/*  The second section    */}
        <div className = "bg-white padding-bottom-30">
        <div className = "container pt-5">
       <h2 className = "heading padding-bottom-10 text-uppercase">{content.SubBannerHeading}</h2>
       <p className = "paragraph">{content.SubBannerParagraph}</p>
         
         <div className="mt-4   mb-3 text-center">
           {content.SubBannerButton &&    <a onClick = {openBrandingForm}>
               <ButtonStyleOne title = {content.SubBannerButton} />
           </a> }
        
         </div> 
      
       </div>
 
      </div>
{/*  The Fifth section    */}
<BgContentDiv bg = "/images/web/CMS/cms-bannertwo.png">
<div className="container mb-3 mt-3">
   <h2 className="white-heading">
{content.Sections[0].title}
   </h2>
   <p className="white-paragraph">
   {content.Sections[0].description}
   </p>
</div>
</BgContentDiv>





{/*  The Sixth section    */}

<div className = "pt-5 pb-5">
    <div className="container">
        <h2 className="text-center heading text-uppercase mb-5">
          
         {content.widget_headings && content.widget_headings[0].title}
        </h2>
         <div className="text-center mb-5">
           <img src = {ImagePath + content.widget_headings[0].image} alt = "content management system" className = "img-fluid"/>
         </div>
        <div className="row box-direction">
      
        {content.ListingOne && content.ListingOne.map(li => (
   <div className="col-md-4 d-flex mb-4">
   <div className="cms-thumbnail text-center p-4">
           <img src = {ImagePath + li.image} alt = "magento" />
           <p className = "paragraph"><strong>{li.title}</strong></p>
           <p className="paragraph">
           {li.description}  
          </p>
       </div>
 </div>


        ))}
         
        </div>
    </div>


</div>


<div className = " bottom-wave-bg ">
  <div className = "mb-5">
  <div className="container text-center">

   <h2 className="heading mt-2 mb-4 text-uppercase">
    {content.Sections[1].title}
 
   </h2>
    
    {content.Sections[1].btn_txt &&
    
    <a onClick={openBrandingForm}>
    <ButtonStyleOne title = {content.Sections[1].btn_txt} />
</a>
    }
  
</div>

  </div>



</div>

</div>

<ReportCardFooter
category = "development"
  imgAddress = {ImagePath + content.Book.image}
  title = {content.Book.title}
   caption = {content.Book.description}
  btntext = "GET MY FREE REPORT"
   />
<style jsx>
  {`
  .cms-thumbnail{
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
  }
  
  
  `}
</style>


    <style>
      {`
        html{
          overflow-y: auto;
        }
        .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
        .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
        .contentcreation-circularimg{
           max-width: 100%;
        }
        .bottom-wave-bg{
          padding-bottom: 90px;
          background: url(/images/web/bottom-wave-blue.png);
          background-position: bottom;
          background-repeat: no-repeat;
        }

        `}
      </style>


    </React.Fragment>
  );
  }
  export default CMS;
