import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ThumbnailOne from '../NewComponents/ThumbnailOne';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree';
import BgContentDiv from '../NewComponents/BContentDiv';
import SuccessDisplay from '../NewComponents/successdisplay';
import ListItemFive from '../NewComponents/ListItemFive';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import {openBrandingForm} from '../../lib/helper'
import {PopupText} from 'react-calendly';
import { useRouter } from 'next/router';
let index = 0;

const ImagePath = process.env.ImagePath

const AppDevelopment = ({finalData}) => {
  // open the development form
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


    return (
        <React.Fragment>
            {/*  The First section    */}
            <PageBanner
            category = "development"
            heading = {content.BannerHeading}
            paragraph = {content.BannerDescription}
            bg = {ImagePath + content.BannerImage}
            buttontext = {content.BannerButton}
            wavename = "wave2.png">
            </PageBanner>
            <SuccessDisplay />
            <div className = "main-div">
            {/*  second section  */}
            <div className = "">
            </div>     
              <div className = "padding-top-50 padding-bottom-30 bg-grey">
             
                  <div className = "container box-direction">
                  <h2 className = "heading padding-top-30 padding-bottom-10 text-uppercase">
                    {content.SubBannerHeading}
                    </h2>
                  <p className = "paragraph">
                     {content.SubBannerParagraph}
                 </p>

                 
                 </div>
              </div>   
      

        {/* THIRD section */}

<div className="white-bg pb-5 pt-5">

<h2 className="heading mb-5">{content.widget_headings[0].title}</h2>
   <div className="container">
       <div className="row box-direction">
        {content.ListingOne.map(li =>{ 
          return (
         <div className="col-md-4 d-flex flex-row mb-4"  >
         <div className="arrow-shape-div p-4 mr-3">
              <div className="first-div d-flex justify-content-between ">
               <h2 className="heading" style = {{ fontSize: '3.3rem' }}>
              </h2> 
              <img src = {ImagePath + li.image}  alt = "iamge" />

              </div> 
              <div className="second-div">
              <h4 className="mt-5 text-direction">
               {li.title}
              </h4>
              <p className="left-paragraph text-direction">
               {li.description} 
              </p>
            </div>  
         </div>
         <img src="/images/web/appdevelopment/right-arrow.png" alt = "arrow" className="img-fluid d-none d-md-block rotated"  />
      </div>
     )
     })} 
  
       
       </div>
   
   
   
   <div className="text-center mt-5">
     {content.Buttons[0] && <a onClick = {openBrandingForm}>   
     <ButtonStyleOne title = {content.Buttons[0].title} />
     </a>  }
 
   </div>
   
   </div>

</div>


     {/*   fourth section */}
<BgContentDiv bg = "images/web/appdevelopment/appdev-bannertwo-small.png">
<div className = "container padding-top-30 padding-bottom-30">
<div className="container">
<h2 className="white-heading text-uppercase">
{content.Sections[0].title}
</h2>
<p className="white-paragraph">
{content.Sections[0].description}     
</p>
<div className="row d-flex justify-content-center mt-5 box-direction">
{content.ListingTwo && content.ListingTwo.map(li => (
 <div className="appdev col-md-3 text-center" key={li.title}>
 <img src={ImagePath + li.image} /> 
 <p className="white-paragraph">
  {li.title}
</p>    
</div> 
))}









</div>


<div className="text-center mt-4">

 {content.Buttons[0] && <a onClick = {openBrandingForm}>
        <ButtonStyleTwo title = {content.Buttons[0].title} />
    </a>  }

</div>

                    </div>
    </div>
              </BgContentDiv>





              {/*  sixth section  */}
              <div className = "pt-5 pb-5  mt-5 bottom-wave-bg">
                <div className="container pt-5 pb-5 mt-4 ">

 
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
        .appdev{margin-bottom:10px;}
        .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
        .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
        .rotated {transform:  ${locale === 'ar' ? 'rotate(180deg)' : 'rotate(180deg)' };}  
        .arrow-shape-div{ border: solid 1px #eee; border-radius: 20px;
              width: 100%;height: 100%;
          }    
          
          .arrow-shape:before {
            border-bottom: 35px solid red;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            content: "";
            height: 0;
            left: 0;
            position: absolute;
            top: -35px;
            width: 0;
          }

          `}

          </style>

                <style>
                    {`
               
                    html{
                        overflow-y: auto;
                      }

                      .link-class a {
                        color: #4A91BD;
                    }
                    .secondlist-div.jsx-180064006{
                        align-items: center;
                    }
                    .secondlist-div.jsx-180064006 img.jsx-180064006{
                        height: 45px;
                        width: 45px;
                    }
                    .secondlist-div.jsx-180064006 p.jsx-180064006{
                        margin: 0;
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
export default AppDevelopment;