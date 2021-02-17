import PageBanner from '../NewComponents/PageBanner/PageBanner';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailOne from '../NewComponents/ThumbnailOne'
import ReportCardFooter from '../NewComponents/ReportCardFooter'
import MarketingForm from '../NewComponents/MarketingForm';
import SuccessDisplay from '../NewComponents/successdisplay';
import {PopupText} from 'react-calendly';
import { useRouter } from 'next/router';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne';
import {openBrandingForm} from '../../lib/helper';
import {useState} from 'react';
import Footer from '../Footer';

const ImagePath  = process.env.ImagePath;


const PRPLANNING = ({finalData}) => {

  
let content;
const router = useRouter();
const {locale} = router;
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
   }  


  })

let Buttons = finalData.widget_btn.map( data => {
 return {
   "id": data.id,
    "title": data.title_english,
    "level": data.level
 }
})

let WidgetHeadings = finalData.widget_headings.map( data => {
 return {
   "id" : data.id,
    "title": data.desc_english,
    "level": data.level
 }

})

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
   
   let WidgetHeadings = finalData.widget_headings.map( data => {
    return {
       "id" : data.id,
       "title": data.desc_arabic,
       "level": data.level
    }
   
   })
  
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
 <div className = "Content-div">
     <PageBanner
       category = "branding"
       heading = {content.BannerHeading}
       paragraph = {content.BannerDescription}
       bg = {ImagePath + content.BannerImage}
       buttontext = {content.BannerButton}
       wavename = "wave2.png"
        ></PageBanner>
      <MarketingForm />   
      <SuccessDisplay/>
  <div className = "FirstContentItem  Centerclass bg-grey padding-top-20 padding-bottom-20">
  <div className = "container">
  <h2 className ="heading">{content.SubBannerHeading}</h2>
 <p className = "paragraph">
 {content.SubBannerParagraph} 
 </p>
 
        <div className = "margin-top-40"></div>
        <span className = "meeting-button" style = {{ }}> 



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
</span>
      <div className = "padding-top-40"></div>
      </div>
      </div>
<div className = "margin-top-10"></div>


<div className = "padding-top-20 padding-bottom-20">
  <div className="container">
    {content.widget_headings.length > 0 &&    
    <h2 className ="heading text-uppercase">
     {content.widget_headings[0].title}
    </h2>}
 </div>
</div>

<BgContentDiv  bg = "/images/web/prplanning-banner-two.png">
<div className="container mt-5">
<div className="row d-flex justify-content-center">
  {content.ListingOne.length > 0 && content.ListingOne.map(list => (
  <div className="col-6 col-md-6 col-lg-3 mb-5 px-3" key={list.id}>
  <ThumbnailOne imgAddress  = {ImagePath + list.image}  title  = {list.title} ></ThumbnailOne> 
  </div>
  ))}
</div>


</div>


<div className = "padding-top-20"></div>

</BgContentDiv>
<div className = "p-relative">
<div className ="bg-grey">
<div className="container">
  <div className = "padding-top-40"></div>
  <div className = "text-center">
  {content.Buttons.length > 0 &&  
  <a onClick = {openBrandingForm}>
    <ButtonStyleOne title={content.Buttons[0].title} />
    </a> }
  
 
  </div>

  <div className = "margin-top-30"></div>


{content.Sections.length > 0 && 
  <h2 className="heading mt-3">
  {content.Sections[0].title}
  </h2>
}




{content.Sections.length > 0 && 
 <p className="paragraph">
 {content.Sections[0].description}
</p>
}  
 

  <div className = "text-center padding-top-10">

  {content.Sections.length > 0  && 
<a className ="link-class" onClick = {openBrandingForm} >
   {content.Sections[0].btn_text !== null &&  <ButtonStyleOne title = {content.Sections[0].btn_txt} />   }
</a> 
}


  </div>
</div>
</div>
<img className = "bottom-brown-wave" src = "/images/web/static-grey-bottom-wave.png" alt = "pr agency"/>
</div>




{/* This is the last section  */}
<div className=" padding-bottom-40 padding-top-20">
<div className="container">
  {content.Sections.length > 1 &&  
  <>
    <h2 className="heading mt-3">
    {content.Sections[1].title}
  </h2>
  <p className="paragraph">
    {content.Sections[1].description}
  </p>
<div className = "text-center">
 <a className ="link-class" onClick = {openBrandingForm} >
   {content.Sections[1].btn_txt}
  </a>  
</div>
  </>
  
  }

{/* <div className="margin-top-50">
</div> */}
<div className="padding-top-50 padding-bottom-30">
 </div> 
</div>

</div>

{finalData.book &&
  <ReportCardFooter
category = "branding"
imgAddress = {ImagePath + finalData.book.image}
title = {locale === 'ar' ? finalData.book.title_arabic  : finalData.book.title_english }
caption = {locale === 'ar' ? finalData.book.desc_arabic  : finalData.book.desc_english }
btntext = "GET MY FREE REPORT"
   /> }


{/* Last section ends here */}
<Footer/>
 </div>
 


   <style>
     {
       `body{
         overflow:inherit;
       }

       .MuiGrid-root.flex-end.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 {
        justify-content: flex-end;
    }
       .p-relative{
         position:relative;
       }
       .Content-div{
         height: 2000px;
       }
       .FirstContentItem{
         text-align: center;
       }
       .wave-div{
         height: 90px;

       }
       .bottom-brown-wave{
         width: 100%;
       }
       .bottom-wave-width{
           max-width: 100%;
       }
       .center-flex{
         display: flex;
         justify-content: center;
       }
       .heading{
         text-transform:uppercase;
       }
       .flex-align-items-center{
         align-items: center;
       }
       .flex-align-items-baseline{
         align-items: baseline;
       }

       .mysql-images{
         width: 300px;
         margin-left: 20px;
         margin-right: 20px;

       }
       .between-spacing{
         margin-left: 40px;
         margin-right: 40px;
       }
       .center-flex .secondList{
        margin-bottom: 0;
      }
      .center-flex .firstList{
        margin-bottom: 0;
      }

      .margin-top-20{
        margin-top: 20px;
      }
      .margin-top-30{
        margin-top: 30px;
      }
      .margin-top-40{
        margin-top: 40px;
      }
      .margin-top-50{
        margin-top: 50px;
      }
      .margin-top-25{
        margin-top: 25px;
      }
      .margin-top-35{
        margin-top: 35px;
      }
      .margin-bottom-20{
        margin-bottom: 20px;
      }
      .margin-bottom-30{
        margin-bottom: 30px;
      }
      .margin-bottom-40{
        margin-bottom: 40px;
      }
      .margin-bottom-25{
        margin-bottom: 25px;
      }
      .margin-bottom-35{
        margin-bottom: 35px;
      }
      .padding-top-20{
        padding-top: 20px;
      }
      .padding-top-30{
        padding-top: 30px;
      }
      .padding-top-40{
        padding-top: 40px;
      }
      .padding-top-25{
        padding-top: 25px;
      }
      .padding-top-35{
        padding-top: 35px;
      }
      .padding-bottom-20{
        padding-bottom: 20px;
      }
      .padding-bottom-30{
        padding-bottom: 30px;
      }
      .padding-bottom-40{
        padding-bottom: 40px;
      }
      .padding-bottom-25{
        padding-bottom: 25px;
      }
      .padding-bottom-35{
        padding-bottom: 35px;
      }

       @media only screen and (max-width: 600px) {
        .between-spacing{
          margin-left: 0px;
          margin-right: 0px;
        }
        .d-mobile-none{
          display: none;
        }
        .center-flex{
          justify-content: start;
          flex-direction: column;
        }
        .center-flex .secondList{
          margin-top: -24px;
          margin-bottom: 0;
        }
        .center-flex .firstList{
          margin-bottom: 0;
        }
        .mysql-images {

            margin-top: 20px;
            margin-bottom: 20px;
        }
        .MuiGrid-root.flex-end.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 {
          justify-content: center;
      }
      .MuiGrid-root.flex-start.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-4{
        justify-content: center;
      }





      }
       `
     }
     </style>
     
    </React.Fragment>
  );
};


export default PRPLANNING;
