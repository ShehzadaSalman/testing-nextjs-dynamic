
import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {openBrandingForm} from '../../lib/helper'
const ImagePath = process.env.ImagePath
const ECOMMERCE = ({finalData}) => { 
 

    
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
       wavename = "wave2.png"
        ></PageBanner>

{/*  The second section    */}
        <div className = "bg-grey">
        <div className = "container pt-5">
       <h2 className = "heading padding-bottom-10 text-uppercase">
      {content.SubBannerHeading}
       </h2>
       <p className = "paragraph pb-2">
        {content.SubBannerParagraph}
        </p>
         
         <div className="row d-flex justify-content-md-center mt-5  text-center box-direction">
            
            {content.ListingOne && content.ListingOne.map(li => (
      <div className="col-6 col-md-2 text-center d-flex justify-content-center" key={li.title}>
      <div className="ecommerce-thumbnail mt-2  mb-3 mb-md-5">
          <img src={ImagePath + li.image} alt = "ecommerce" className="img-fluid" />
          <p className = "paragraph">{li.title}</p>
      </div>
   </div>

            ))}
       


         </div>
      
         <div className="text-center mt-4 pb-5">
        {content.Buttons[0] && <a onClick = {openBrandingForm}>
<ButtonStyleOne title = {content.Buttons[0].title} />
</a> }   

</div>
       </div>
      </div>
<div className="wave-layer-bg-slides">
<div className="container">

 
 <h2 className="heading text-uppercase"> 
   {content.Sections[0].title}
 </h2>    
 <p className="paragraph mb-5">
   {content.Sections[0].description}  
 </p>
    <div className="row box-direction">

{content.ListingTwo && content.ListingTwo.map(li => { 
let list = 0;
 list = list +1;
return(
<div className="col-md-4 d-flex mb-5 flex-column" key={li.title}>
<div>
   <h2 className="text-center numeric-styling">
     {"0"+list}
   </h2>
  <div className="cms-thumbnail text-center">

      <h5>
          {li.title}
      </h5>
      <p className="paragraph">
        {li.description}
      </p>
      </div>
  </div>
</div>
) })}


    
   


      
 
   


    </div>

          
<div className="text-center">
  <Link href="case-studies">
  <a>
  <ButtonStyleOne title="Explore Our Work" />
  </a>
  </Link>
</div>
</div>
</div> 






<div className = "bottom-wave-bg pb-5 ">

<div className="container mb-5 mt-5">
   <h2 className="heading text-uppercase pt-3">
   {content.Sections[1].title}
   </h2>
   <p className="paragraph mb-4">
    {content.Sections[1].description}
   </p>
   <div className="text-center mt-1 mb-5 ">
     {content.Sections[1].btn_txt &&
         <a onClick = {openBrandingForm}>
         <ButtonStyleOne title = "Get In Touch" />
         </a>
     }

</div>
</div>
<div className="mb-5 pb-5">

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
    <style>
      {
        `
        html{
          overflow-y: auto;
        }
        `
      }

    </style>
 
    <style jsx>
      {`

.box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
.text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}

        .cms-thumbnail{
          padding: 30px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
       border: dashed #4A91BD;
        border-radius: 5px;
        min-height: 332px;
        overflow: hidden;
            
        }
        .numeric-styling{
          font-size: 3.3rem;
          font-family: serif;
          color: #4A91BD;

        }
        .wave-layer-bg-slides{
          padding-top: 80px;
        }
        


        `}
      </style>


    </React.Fragment>
  );
  }
  export default ECOMMERCE;
