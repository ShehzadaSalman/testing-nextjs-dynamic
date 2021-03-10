import PageBanner from '../NewComponents/PageBanner/PageBanner';
import BgContentDiv from '../NewComponents/BContentDiv';
import { useState } from 'react';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne';
import ListItemFive from '../NewComponents/ListItemFive';
import SuccessDisplay from '../NewComponents/successdisplay';
import intlTelInput from 'intl-tel-input';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree';
import Link from 'next/link';
import {useRef, useEffect} from 'react';
import { useRouter } from 'next/router';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath

const SEOPAGE = ({finalData}) => { 
const reportpopupRef = useRef(null);
const [websiteurl, setWebsiteUrl]  = useState('');
const router = useRouter();
const {locale} = router;
let pageurl = "https://techbay.co/"+router.pathname;
const seoServicesPhone = useRef(null);
// open marketing form 
const openMarketingForm = () => {
  let form = document.querySelector(".formPopup-branding");
  form.style.display = 'block';
} 
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




useEffect(() => {
  // Update the document title using the browser API
  intlTelInput(seoServicesPhone.current, {
    separateDialCode: true,
    initialCountry: 'AE'
    // any initialisation options go here
  });
}, []);


// get seo report here 

/* open the popup */

const openformpopupreport = (e) => {
  e.preventDefault();
  console.log(reportpopupRef.current);
  $('.formPopup-report ').css("display", "block");

}


  /* form submit for website speed */
  const formSubmitReport = (event) => {
    console.log("are we submitting the report form here");
    event.preventDefault();
    console.log($("#services7").serialize());
    var countryCode = event.target.querySelector(".iti__flag-container .iti__selected-flag .iti__selected-dial-code").innerHTML;
    console.log(`Country Code: ${countryCode}`);
    console.log(countryCode);
    event.target.querySelector("#countryCode").value = countryCode;


    var finalurl = 'https://staging.techbay.co/api/get-website-digital-marketing-seo-report';

    var x = $("#services7 #email").val();
    if (x == "") {
      $(".formPopup-speed .packageForm .msg").html("Please fill empty fileds.");
      console.log("the email field is empty");
    } else {
      $.ajax({
        type: "POST",
        url: finalurl,
        data: $("#services7").serialize(),
        success: function (data) {
          console.log("Form submitted successfully");
          console.log(data);
        },
        error: function () {
          console.log("so we have some issues here");
        }
      });
      $("#services7")[0].reset();
      $(".formPopup-report .package  Form .msg").html("");
      $("#services7").css("display", "none");
      $(".formPopup-report .packageForm .messageBox").fadeIn();
      $(".formPopup-report .messageBox").css("display", "block");
    }
  }

  // closing the seo services
  const closeFormPopup = () => {
    // closing the speed form
    console.log("closing the form here");
    $('.formPopup-report ').css("display", "none");
    $(".formPopup-report .messageBox").css("display", "none");
    $("#services7").css("display", "block");
    $("#services7")[0].reset();
  }
 const avoidCloseFormPopup = (event) => {
    event.stopPropagation();
  }


return(
<React.Fragment>
  <div className = "main-div  box-direction">

      <PageBanner
      category = "marketing"
      heading = {content.BannerHeading}
      paragraph = {content.BannerDescription}
      bg = {ImagePath + content.BannerImage}
      buttontext = {content.BannerButton}
       wavename = "wave2.png" /> 
      {/* SEO report form  */}
    
      <div ref={reportpopupRef}  className="formPopup-report" onClick={closeFormPopup}>
          <a onClick={closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
          <div className="formInner" onClick={avoidCloseFormPopup}>
            <form id="services7" onSubmit={formSubmitReport} encType="multipart/form-data">
              <div className="form-report">
                <input
                  name="api_key"
                  id="api_key"
                  type="hidden"
                  value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
                />
                <input
                  name="serviceName"
                  id="serviceName"
                  type="hidden"
                  value="marketing"
                />
                <input
                  name="websitename"
                  type="hidden"
                  value="techbayagency"
                />
                <div className="fields twoFields">
                  <input type="text" id="name" name="name" placeholder="Name" required />
                  <input type="email" id="email" name="email" placeholder="Email" required />
                  <input type="hidden" id="location" name="location" value="lahore" required />
                  <input type="hidden" name="websitePath" value={pageurl} />
                </div>
                <div className="fields">
                  <input id="countryCode" type="hidden" name="countrycode" />
                  <input type="text" ref={seoServicesPhone} name="phone" placeholder="Phone" required />
                </div>
                <div className="fields">
            
               <input      
                 type="hidden"
                      name="website"
                  value={websiteurl}
                  required
                    >
                    </input>
                
             
                </div>
                <div className="fields pt-1">
                  <button type="submit" id="submit" name="submit" >Get SEO Audit Report</button>
                </div>
                <div className="msg d-block text-left  pb-0">
                  <li className="pb-2 pb-md-0">
                    Be assured that Your details will NOT be shared with any 3rd party for marketing purposes.
               </li>

                  <div className="col-12 px-0 text-center pt-0 pt-md-1">
                    <img className="quality-icon" alt="quality assurance" src="/images/quality.png" />
                  </div>
                </div>
              </div>
            </form>

            <div className="messageBox">
              <a href="#" onClick={closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
              <i className="far fa-check-circle"></i>
              <h2>THANK YOU FOR CONTACTING US!</h2>
               <div className="mt-3 mb-3">
                 <Link href={"https://seopdf.techbay.co/"+websiteurl} ><a className="position-static" target="_blank"><ButtonStyleThree title = "Check SEO Report"/></a></Link>    
              </div>
              <p>You will receive an email shortly</p>
            </div>

          </div>
        </div>


    {/* SEO report ends here */}
      <SuccessDisplay />
     {/*   first section   */}
     <div className = "padding-top-40 padding-bottom-10  bg-grey">
       <div className = "container">
        <h2 className = "heading text-uppercase mb-4">{content.SubBannerHeading}</h2>
        <p className = "paragraph m-0">{content.SubBannerParagraph}</p>
      
       <div className="seo-services-report mt-5 mb-4">
         <form onSubmit={openformpopupreport}>
          <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-8">
          <div className="input-group" style={{ direction: 'ltr' }}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">https://</span>
        </div>
        <input
          id="report-url"
          type="text"
          value={websiteurl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          className="form-control"
          pattern="(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
          placeholder="example.com" required
        />
     
      </div>
          </div>
          <div className="col-md-4 col-lg-3  text-center mt-4 mt-md-0">
          <button className="view-report" type="submit">
            {locale === 'ar' 
            ? 'الحصول على تقرير سيو' 
            :  'Get SEO Report'}
          
            
            </button>
          </div>
        </div>
      </form>
       </div>

       </div>
    
    
     
    
     </div>





<div className = "padding-top-40 padding-bottom-30 "> 
  <div className = " container">
      <h2 className = "heading text-uppercase">
      {content.Sections[0].title}
      </h2>
      <p className = "paragraph">
      {content.Sections[0].description}
      </p>

      <div className="row d-flex justify-content-md-center mt-3 text-center">
             
             {content.ListingOne && content.ListingOne.map((li, key) => (
          <div className="col-6 col-md-3 col-lg-2 text-center d-flex justify-content-center" key={key}>
          <div className="ecommerce-thumbnail mt-2  mb-3 mb-md-3">
              <img src={ImagePath + li.image} alt = "ecommerce" className="" />
              <p className = "paragraph">{li.description}</p>
            </div>
          </div>
             ))}
   
          
         </div>
  </div>
</div>



        {/* the fifth section  */}
        <div className = " mb-4">
         <div className="container">
         <div className="row">
           {content.ListingTwo && content.ListingTwo.map((li, key) => (
      <div className="col-md-6 mb-4" key={key}>
      <div className="smm-casestudy text-center">
         <img src = {ImagePath + li.image} alt = "case study" className = "img-fluid" />
         <div className="caption">
           <p className = "paragraph">{li.title}</p>
           <a download={li.link} href={li.link}>Download</a>
         </div> 
      </div>
    </div>

           ))}
       
     
           </div>
           <div className="text-center mt-4 mb-5">

   {/* button missing in api */}          
         <Link href="case-studies">
         <a>
           <ButtonStyleOne title =  { locale === 'ar' ? 'عرض الجميع' : 'View All'} />
         </a>
         </Link>
       </div>
       
         </div>
        </div>
     {/* third section */}
     <BgContentDiv bg = "images/web/seo/seo-banner-two.png">
       <div className = "padding-top-30 container">
          <h2 className = "white-heading text-uppercase">
          {content.Sections[1].title}
          </h2>
          <p className="white-paragraph">
          {content.Sections[1].description} 
          </p>
           <div className="row mb-5 box-direction">
             {content.ListingThree && content.ListingThree.map((li, key) => (
           <div className="col-md-6" key={key}>

            <div className ="temp-list my-3">
                <img src = {ImagePath + li.image} alt = "list" className="mx-3" />
               <p className = "white-text text-direction">{li.title}</p> 
            </div>
         </div>
             ))}
  </div>    

          <div className="text-center mb-5 pb-5">
            {content.Buttons[0] && <a className="" onClick={openMarketingForm}>
              <ButtonStyleTwo title={content.Buttons[0].title} />
            </a> }
        
          </div>

       </div>
     </BgContentDiv>
    
     <ReportCardFooter
category = "branding"
imgAddress = {ImagePath + finalData.book.image}
title = {locale === 'ar' ? finalData.book.title_arabic  : finalData.book.title_english }
caption = {locale === 'ar' ? finalData.book.desc_arabic  : finalData.book.desc_english }
btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
   /> 


<style jsx> 

  {`
    .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
    .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
    button.view-report{ background-color: #4A91BD; color: #fff; }
    button.view-report:hover{background-color: #fff; color: #4A91BD;  }
    .link-class{
      color: #fff !important;
    }
    #report-url{ padding-top: 5px; padding-bottom: 5px; font-size:20px;}
    #report-url::placeholder{opacity: 0.5;}
    #basic-addon1{ font-size: 20px; }   
    `}


</style>

  <style>
  {`
   body{
     overflow-y: inherit;
     overflow-x: hidden;
   }
   .temp-list{ display:flex; }
   .secondlist-div.jsx-180064006 img.jsx-180064006{
     height: 42px;
     width: 42px;
   }
   .secondlist-div.jsx-180064006 p.white-text.jsx-180064006{
     margin-top: 8px;
   }
   .spanned-text{
       color: #A1A1A1;
       display: block;
       text-align: center;
       font-weight: 300;
       padding-top: 30px;
       font-size: .75rem;
       
   }
   .cms-thumbnail{
    padding: 30px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
 border: dashed #4A91BD;
  border-radius: 5px;
  min-height: 280px;
  overflow: hidden;
      
  }

  .smm-casestudy{
    background-color: #F4F9FB;
   }
   .smm-casestudy   img{

   }
   .smm-casestudy .caption{
 padding-top: 10px;
 padding-bottom: 20px;
   }
   .smm-casestudy .caption p{
     margin-bottom: 0;
     margin-top:10px;
   } 
   .smm-casestudy .caption a{
    color:  #4A91BD;
   } 



   .nda-text{
       text-align: center;
       display: block;
       color: #212121;

   }
   .bottom-head{
    background: #82BDE2;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    padding: 18px 15px;
   }
   #cropage-table{
    margin-bottom: 40px;
  }
   .cro-right-align{
     justify-content: flex-end;
   }
   .responsive-padding-top40{
    padding-top: 40px;
   }
   .slider-end-content{
    margin: 0 !important;
  }
  .table-banner{
    background: #82BDE2;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    padding: 18px 15px;
}
  }
   @media only screen and (max-width: 500px) {
    .cro-right-align{
      justify-content: center;
    }
    .cro-jc-center{
      justify-content: center;
     }
     .responsive-padding-top40{
       padding-top: 20px;
     }
     .slider-end-content{
       margin: 0 !important;
     }
     .packagesDiv .mids table tr td:nth-child(4) {
      box-shadow: none;
      position: relative; 
      border: 0px; 
      background-color: none;
   
  }

   #cropage-table .packagesDiv .mids table tr:nth-child(even) td{
    
     }
    //  #cropage-table .packagesDiv .mids table tr td{
    //   
    // }
    }
    .upper-wave-bg{
      background-image: url('images/web/upper-wave-blue.png');
      background-repeat: no-repeat;
    }
  `}
  </style>

  </div>

</React.Fragment>)
} 

export default React.memo(SEOPAGE);