import ReportFooterButton from '../NewComponents/Buttons/ReportFooterButton'
import Link from 'next/link'
import Head from 'next/head';
import SuccessDisplay from '../NewComponents/successdisplay'
import {useState} from 'react';
import intlTelInput from 'intl-tel-input';
import {useEffect} from 'react';
import { useRouter } from 'next/router';
import $ from 'jquery'
const ReportCardFooterCTA = (props) => { 
  const [value, setValue] = useState();


  const router = useRouter();
  const {locale} = router;
  const pagePath = router.asPath.toString();


const getReport = (event) =>{
    event.preventDefault();
    var uri;
    let nameval = event.target.querySelector('[name = "fname"]').value;
    let emailval = event.target.querySelector('[name = "email"]').value;
    let phoneval = event.target.querySelector('[name = "phone"]').value;
    let website = event.target.querySelector('[name = "website"]').value;
    let report = event.target.querySelector('[name = "reportname"]').value;
   // download the file by implementing anchor click with href of the file address
     if(report){
       uri = report;
     }else{
      uri = '/images/Techbay-Solutions-Profile.pdf'; 
     }
   var link = document.createElement('a');
   link.href = uri;
   link.click();
}    

const openDevelopmentForm = () => {
  console.log("open the development form here ");
  let form = document.querySelector(".formPopup");
   form.style.display = 'block';
 }







 useEffect(() => {

  const input = document.querySelector("#report-input-field-marketing");
  intlTelInput(input, {
    separateDialCode: true,
    initialCountry: 'ae'
      // any initialisation options go here
  });
  console.log('initialized intelInput again and again')


 

}, [] );






const formSubmitReport = (event) => {
    event.preventDefault();
    var countryCode =  event.target.querySelector("#ReportForm  #phoneNumberField .iti__selected-dial-code").innerHTML;
    console.log(countryCode);
    event.target.querySelector("#ReportForm  #countryCode").value = countryCode;
 /* get the country code */
//  var countryCode =  event.target.querySelector("#report-input-field-marketing").innerHTML;
//  event.target.querySelector(".row #report-input-field-marketing .iti__selected-dial-code").value = countryCode;
    fbq('trackCustom', 'FACEBOOK TRACKING CONVERSION', {promotion: 'share_discount_10%'});
    console.log("let's see if the form is being submitted");
    let category = event.target.querySelector('#category').value;
    var finalurl;
    
    if(category == 'marketing'){
      finalurl = 'https://staging.techbay.co/api/get-marketing-pdf';
    } else if(category == 'branding'){
        finalurl = 'https://staging.techbay.co/api/get-branding-pdf';
    }else if(category == 'development'){
      finalurl = 'https://staging.techbay.co/api/get-development-pdf';  
    }
  $.ajax({
        type: "POST",
        url: finalurl,
        data: $("#ReportForm").serialize(),
        success: function (data) {
          console.log(data);
        },
        error: function(data){
          console.log("failed to send the message");
        }
      });
      $('.formPopup-success ').css("display","block");
   event.target.querySelector("[name = 'name']").value = '';
   event.target.querySelector("[name = 'email']").value = '';
   event.target.querySelector("[name = 'phone']").value = '';
   event.target.querySelector("[name = 'company']").value = '';


  }
  const avoidScrollEvent = (event) => {
    event.stopPropagation();
    console.log("do not make the scroll event go up to the parent div");
  }
   
return(
<React.Fragment>
<div className = "bg-div" onScroll = {avoidScrollEvent} >
    <div className = "container">  
    <div className = "row box-direction">
    <div className = "col-md-6  order-lg-2 flex-column-reverse mt-4  d-md-flex d-none ">
          <div className = "report-footer-content margin-bottom">
          <h1 className="text-direction">{props.title}</h1>
          <p className="text-direction">{props.caption}</p>
<form onSubmit = {formSubmitReport} id = "ReportForm">
<div className = "row">
<div className="col-md-6 mb-3 px-2">
<input type = "hidden" className = "report-inputfield"  name = "reportname"  value = {props.reportfile} />  
      <input
      name="api_key"
      id="api_key"
      type="hidden"
      value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
    />
     <input type="hidden" name="websitePath" value= {"https://techbay.co"+pagePath}/>
    <input
    name="websitename"
    type="hidden"
    value="techbayagency"
            />
  <input
      name="category"
      id="category"
      type="hidden"
      value={props.category}
    />
  <input type = "text" className = "report-inputfield"  name = "name"  
  placeholder =    {locale === 'ar' ? 'اسم' : 'Name*'}  required/>
  </div>

  <div className = "col-md-6 mb-3 px-2">
  <input type = "email" className = "report-inputfield" name = "email" 
  placeholder  =  {locale === 'ar' ? 'بريد الالكتروني' : 'Email*'} required />
  </div>
        
    <div className="col-md-6 px-2 mb-3" id="phoneNumberField" >
    <input id ="countryCode" type="hidden" name="countrycode"/>
    <input type="text" className = "report-inputfield box-direction"  id = "report-input-field-marketing"
     name = "phone"  placeholder={locale === 'ar' ? 'هاتف' : 'Phone*'} required/>                       
  </div>    


    <div className="col-md-6 mb-3 px-2">
    <input type = "text" className = "report-inputfield" name = "company" 
    placeholder=  {locale === 'ar' ? 'شركة' : 'Company*'} 
     required/>
    </div>

              </div>
              <div className = "text-center margin-top">
             <ReportFooterButton name = {props.btntext}></ReportFooterButton>     
              </div>
          </form>
          </div>
         
      </div>
  
  
       <div className = "col-md-6 order-lg-1">
       <div className = "techbaybook-div  px-5 px-md-5 ">
            <img src = {props.imgAddress} alt = "Techbay Report" loading="lazy" />
       
       <div className = "text-center mt-5 d-md-none ">

         <a onClick={openDevelopmentForm}>
         <button className= "report-button-mobile">
         DOWNLOAD ARTICLE
       </button>
         </a>

       </div>
   

       </div>
       </div>
    
    
    
    
    </div>
    </div>
</div>
<style jsx>
    {`


.success-popup{
  position: fixed;
  padding: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999999999;
  background: rgba(54, 132, 161, 0.53);
  display: none;
  top: 0px;
}

.report-button-mobile{
  background-color: #e0e0e0 !important;
  color: #212121;
  padding: 10px 30px;
  border-radius: 12px;
  font-size: 1.1rem !important;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800 !important;
  left: 0 !important;
  border: none;

}
// .report-button-mobile:hover{
//   background-color: #f5f5f5 !important;
//   color: #424242;
// }


@media only screen and (max-width: 380px) {
  .report-button-mobile{
    font-size: 1rem !important;
    padding: 10px 25px;
   
  
  }
}

 button#report-button {
    color-scheme: none;
    background-color: aliceblue;
}

    .bg-div{
        min-height: 100vh;
        background-color: #2A6791;
       padding-top: 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 30px;
        background-image: url('/images/web/new-pages/white-page-wave-1.png');
        background-position: right 55px;
        background-repeat:no-repeat;
       
    }
    .techbaybook-div{
        position: relative;
    
    }
    .white-wave-layer-bg-slides{
      
      
      }
    .techbaybook-div img{
      max-width: 100%;
    }
    @media only screen and (max-width: 600px) {
        .bg-div{
            padding-top: 80px;
            padding-bottom: 50px;
    
    } }
    .report-footer-content h1{
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 1;
        }
    .report-footer-content p{
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 17px;
           }

      .report-inputfield{
          border: none;
          padding 25px 20px;
          width: 100%;
          font-family: 'Open Sans', sans-serif;
          border-radius: 12px;

      }
      .report-footer-content .report-button{
       margin-top: 20px;
      }
      .text-center .MuiButton-contained{
          align-text:center;
          margin-top: 20px;
      }

      ::placeholder {
        color: #C5C2C2;
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
       color: #C5C2C2;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
       color: #C5C2C2;
      }
       .margin-top{
           margin-top: 15px;
       }
       .margin-bottom{
           margin-bottom: 50px;
       }
    `}
</style>

</React.Fragment>
);
}

export default ReportCardFooterCTA;
