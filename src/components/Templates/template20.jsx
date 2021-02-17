
import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailTwo from '../NewComponents/ThumbnailTwo';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import SuccessDisplay from '../NewComponents/successdisplay';
const ImagePath = process.env.ImagePath

import { useRouter } from 'next/router';
const ContentMarketing = ({finalData}) => {
// open marketing form 

const openMarketingForm = () => {
  let form = document.querySelector(".formPopup-branding");
  form.style.display = 'block';
} 
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
       "SubBannerImage": finalData.sub_header_image,
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
       "SubBannerImage": finalData.sub_header_image,
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

return (
<React.Fragment>
  <div className = "main-content">
{/*  The First section    */}
      <PageBanner
     category = "marketing"
     heading = {content.BannerHeading}
     paragraph = {content.BannerDescription}
     bg = {ImagePath + content.BannerImage}
     buttontext = {content.BannerButton}
       wavename = "wave2-light.png">
     </PageBanner>

  {/*  The second section    */}
          <div className = "">
<SuccessDisplay/>
          <div className="container">
         <div className = "padding-top-20"></div>
         <div className = "padding-top-20"></div>
         <h2 className = "heading text-uppercase">
          {content.SubBannerHeading}
          </h2>
         <p className = "paragraph">
          {content.SubBannerParagraph}
          </p>

          <div className = "text-center padding-top-10">
            {content.SubBannerButton &&  <a onClick = {openMarketingForm}>
          <ButtonStyleOne title = {content.SubBannerButton} /> 
           </a>   }
          </div>


      </div>
         <div className = "margin-top-40"></div>
         </div>

{/*   The third section   */}
<BgContentDiv bg = "images/web/contentmarketing/contentmarketing-banner-two.png">
<div  className = "container mt-3 mb-3">
<h2 className = "white-heading">
{content.Sections[0].title}
</h2>
<p className = "white-paragraph pb-0 mb-0">
  {content.Sections[0].description}
</p>
</div>


</BgContentDiv>


{/*  The fourth section    */}
<div className = " padding-top-40 padding-bottom-30">

  <div className="container">
    <div className="row box-direction">
      {content.ListingOne.map(li => (
     <div className="col-lg-2 col-md-4 col-6 mb-4">
     <ThumbnailTwo imgAddress = {ImagePath + li.image} title = {li.title} />
     </div>
      ))}
 
    </div>
  </div>


<div className="text-center mt-4 mb-3">
  {content.Buttons[0] &&
  <a onClick = {openMarketingForm}>
  <ButtonStyleOne title = {content.Buttons[0].title}></ButtonStyleOne>
  </a>
  
  }

</div>

</div>



  {/*  The fifth section    */}
  <BgContentDiv bg = "images/web/contentmarketing/contentmarketing-banner-three.png">
  <div className="container mt-3 mb-3">
  <h2 className = "white-heading">
   {content.Sections[1].title}
  </h2>
  <p className = "white-paragraph pb-3">
    {content.Sections[1].description}
  </p>
<div className="text-center">
  {content.Sections[1].btn_txt &&
  <a onClick = {openMarketingForm}>
  <ButtonStyleTwo title = {content.Sections[1].btn_txt}></ButtonStyleTwo>
  </a>
  }
</div>
</div>
</BgContentDiv>

{/*   Sixth Section  */}

<div className = "padding-top-50 padding-bottom-40">
</div>

<ReportCardFooter
category = "marketing"
  imgAddress = {ImagePath + content.Book.image}
  title = {content.Book.title}
   caption = {content.Book.description}
  btntext = "GET MY FREE REPORT"
   />

  </div>
<style>{`
  body{
    overflow:inherit;
  }
  .bottom-wave-width{
    max-width: 100%;
}
.box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
.text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
.jc-center{
  justify-content: center;
}
.as-center{
  align-self: center;
}
.text-left{
  text-align: left;
}


        `}

</style>
</React.Fragment>
)
}
export default ContentMarketing;
