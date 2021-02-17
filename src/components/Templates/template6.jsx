import VideoProductionBanner from '../NewComponents/PageBanner/VideoProductionBanner';
import {Container, Grid } from '@material-ui/core';
import ButtonStyleFour from '../NewComponents/Buttons/buttonStyleFour.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import { addStickyHeader } from '../../lib/helper';
import BrandingForm from '../NewComponents/BrandingForm';
import SuccessDisplay from '../NewComponents/successdisplay';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import ThumbnailFive from '../NewComponents/ThumbnailFive';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {openBrandingForm} from '../../lib/helper';
const ImagePath = process.env.ImagePath;

function VideoProduction({finalData}) {

  let content;
  const router = useRouter();
  const {locale} = router;
 
 
  if(locale !== 'ar'){
 
    let Sections = finalData.headings.map( data => {
    return {
     "id": data.id, 
     "title": data.title_english,
     "description": data.desc_english,
     "level": data.level,
     "btn_txt": data.btn_text_english,
     "image": data.heading_image
     }  
 })

 let Widgets = finalData.widget.map( data => {
  return {
   "id": data.id, 
   "title": data.title_english,
   "description": data.desc_english,
   "level": data.level,
   "image": data.image,
   "link": data.link,
   "btn_txt": data.btn_text_english
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
      "BannerHeading" : finalData.header_title_english,
      "BannerDescription" : finalData.header_desc_english,
      "BannerImage": finalData.header_bg_image,
      "BannerButton": finalData.header_btn_txt_english,
      "FirstVideo": finalData.video_link || "",
      "SubBannerHeading": finalData.sub_header_title_english,
      "SubBannerParagraph": finalData.sub_header_desc_english,
      "SubBannerButton": finalData.sub_header_btn_txt_english,
      "Sections": Sections,
      "ListingOne": Widgets.filter(service => service.level === 1), 
      "ListingTwo": Widgets.filter(service => service.level === 2),
      "ListingThree" : Widgets.filter(service => service.level === 3),
      "Buttons" : Buttons,
      "widget_headings": WidgetHeadings
  }
  }else { 
  
    let Headings = finalData.headings.map( data => {
    
      return {
       "id": data.id, 
       "title": data.title_arabic,
       "description": data.desc_arabic,
       "level": data.level,
       "btn_txt": data.btn_text_arabic,
       "image": data.heading_image
       }  
   })
  
   let Widgets = finalData.widget.map( data => {
    return {
     "id": data.id, 
     "title": data.title_arabic,
     "description": data.desc_arabic,
     "level": data.level,
     "link": data.link,
     "btn_txt": data.btn_text_arabic,
     "image": data.image,
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
      "Buttons" : Buttons,
      "widget_headings": WidgetHeadings
  }



  }
  








  return (
    <React.Fragment>
    <div className = "main-div"  onScroll={(event) => addStickyHeader(event.target)}>
        <VideoProductionBanner
        bg={ImagePath + content.BannerImage}
        title={content.BannerHeading}
        description={content.BannerDescription}
        buttontext={content.BannerButton}
        openForm={()=> openBrandingForm()}
        wavename = "wave2-light.png" />
       
       
       
       
        <BrandingForm department = "branding"/>
        <SuccessDisplay />
        {/*  Section one  */}
        <div className = "padding-top-30 padding-bottom-30" >
          <div className="container">
            <div className = "video-div">

              <iframe width="100%" height="555" src={content.FirstVideo}
               frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen></iframe>
            </div>
        {/*  sUB SECTION 1   */}
        <div className = "text-center">
           { content.SubBannerHeading && <h2 className = "video-title-heading text-uppercase">
           {content.SubBannerHeading}
           </h2>   }
          
           {content.SubBannerParagraph.length > 0 && (<p className = "paragraph padding-top-20">
          {content.SubBannerParagraph}</p>)}
       </div>

          </div>
        </div>
        {/* Section two */}
        <div className = "padding-bottom-30">
          <div className="container">
          {content.Sections.length > 0 && 
          <h2 className = "heading text-uppercase">
          {content.Sections[0].title}
          </h2>  }
      

          {content.Sections.length > 0 && <p className = "paragraph">
               {content.Sections[0].description}
           </p> }  
       
          </div>



        </div>
       {/*   section three */}
       <BgContentDiv bg = "svg-pic/web/video-production/video-banner-two.svg">
         <div className="container mt-4">
           <div className="row">


{content.ListingOne.length > 0 && content.ListingOne.map(thumb => { 
    
    return(
     
      <div className="col-6 col-md-4 mb-5">
     
      <ThumbnailFive imgAddress = {ImagePath + thumb.image}
          title = {thumb.title} />
          <div className = "text-center padding-top-10">      
            {<a onClick = {openBrandingForm}>
            <ButtonStyleFour title = {thumb.btn_txt} />
            </a> }
          </div>
      </div>
    ) 
})}

           </div>
         </div>


      <div className="container">
      <div className = "padding-top-40"></div>
      <div className = "text-center pt-4 pb-2">
 
        {content.Buttons.length > 0 &&  (<a onClick = {openBrandingForm}>
        <ButtonStyleTwo title = {content.Buttons[0].title} />
        </a>)}

  
       </div>
         </div>
       </BgContentDiv>
  {/*   fourth section  */}
  <div className = "padding-top-50 padding-bottom-40 bg-grey box-direction">


    {content.Sections.length > 1 && <h2 className = "heading pb-md-4">{content.Sections[1].title}</h2> }
   <Container>
     <Grid container spacing = {4}>
         <Grid item md = {7} container>
        <div className = "">
        {content.Sections.length > 1 &&  (<p className = "left-paragraph mb-3">
        {content.Sections[1].description}
        </p> )} 
        {content.Buttons.length > 1 &&  
        <a onClick = {openBrandingForm}>
         <ButtonStyleOne title = {content.Buttons[1].title} />
         </a>}
       </div>
         </Grid>
         <Grid item md = {5}>
          <img src = {ImagePath + content.Sections[1].image}   className = "img-fluid" alt = "video"/>
         </Grid>
     </Grid>
   </Container>
  </div>

  {/*  Fifth section   */}
  <div className = "vp-tools-bg">
  <img src = "svg-pic/web/video-production/video-tools-waveup-svg.svg" className = "full-image" alt = "video production" />
     <div  className = "container padding-bottom-50 padding-top-20">
         <h2 className = "left-heading padding-bottom-40" style = {{ color: "#fff" }}>{content.HeadingTwo}</h2>
         <div className = "row">   
         {content.ListingTwo.length > 0 &&  content.ListingTwo.map(thumb => {
     
            return (
               <div className="col-md-3">
                <img src = {ImagePath + thumb.image}  className = "img-fluid" alt = "video production"/>
               </div>)
           
      
          } 
          ) 
         }
         
        
         </div>
     </div>
     <img src = "svg-pic/web/video-production/video-tools-wavedown-svg.svg" className = "full-image padding-top-40"  alt = "video production" />
  </div>

  {/*   Sixth Section  */}

  <div className = "padding-top-30 padding-bottom-30 footer-wavebg">
    <div className="container">
    <h2 className = "heading padding-bottom-10">{content.Sections[2].title}</h2>
    <p className = "paragraph padding-bottom-10">
     {content.Sections[2].description}
    </p>
    </div>

    <div className = "padding-top-20">

<div className="container">
<div className="row box-direction">
{content.ListingThree.length > 0 && content.ListingThree.map(thumb => {
return (<div className="col-md-6">
<iframe width="100%" height="335" src={thumb.link}  frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen></iframe>
<h4 className = "padding-top-30 text-direction">{thumb.title}</h4>
<p className = "left-paragraph text-direction" style = {{color: "#727272"}}>{thumb.description}</p>
</div> );
})}
</div>
<div className = "padding-top-40"></div>
<div className = "text-center pt-4 pb-2">
{content.ButtonThree &&  (<a onClick = {openBrandingForm}>
<ButtonStyleOne title = {content.ButtonThree} />
</a>) }
</div>
      </div>
    </div>
  </div>

  <ReportCardFooter
category = "branding"
imgAddress = {ImagePath + finalData.book.image}
title = {locale === 'ar' ? finalData.book.title_arabic  : finalData.book.title_english }
caption = {locale === 'ar' ? finalData.book.desc_arabic  : finalData.book.desc_english }
btntext = "GET MY FREE REPORT"
   /> 
    </div>
    <style>{`
        body{
             overflow-y: inherit;
            }
            .vp-tools-bg{
              background-image: url('svg-pic/web/video-production/tools-we-use.svg');
              background-position: center;
              background-size: cover;
              background-color: grey;

            }
            .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
            .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
            .video-div{
              display: flex;
              background-color: #F2F7FB;
              min-height: 50vh;
              justify-content: center;
              align-items: center;
            }
            .full-image{
              width: 100%;
            }
            .footer-wavebg{
              padding-bottom: 160px;
              background: url(/svg-pic/web/blue-thin-waves.svg);
              background-position: bottom;
              background-repeat: no-repeat;
            }
            .video-title-heading{
                color: #4A91BD;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                line-spacing: 56;
                font-size: 2.3rem;
                white-space: pre-wrap;
                white-space: pre-line;
                display: inline-block;
                position: relative;
                margin-top: -45px;
                -webkit-box-shadow: -2px 1px 41px -16px rgba(0,0,0,0.75);
                -moz-box-shadow: -2px 1px 41px -16px rgba(0,0,0,0.75);
                box-shadow: -2px 1px 41px -16px rgba(0,0,0,0.75);
                padding: 20px 30px;
                background-color: #fff;
            }
            .jc-center{
              justify-content: center;
            }
            @media only screen and (max-width: 500px) {
              .video-title-heading{
                color: #4A91BD;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                line-spacing: 56;
                font-size: 2.3rem;
                white-space: pre-wrap;
                white-space: pre-line;
                display: inline-block;
                position: relative;
                margin-top: 45px;
                -webkit-box-shadow: -2px 1px 41px -16px rgba(0,0,0,0.75);
                -moz-box-shadow: -2px 1px 41px -16px rgba(0,0,0,0.75);
                box-shadow: -2px 1px 41px -16px rgba(0,0,0,0.75);
                padding: 20px 30px;
                background-color: #fff;

              }

            }
            `}
    </style>
  </React.Fragment>
  )
}

export default VideoProduction;
