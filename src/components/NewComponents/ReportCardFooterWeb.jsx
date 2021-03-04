import ReportFooterButton from '../NewComponents/Buttons/ReportFooterButton'
import Link from 'next/link'
import Head from 'next/head';
import SuccessDisplay from '../NewComponents/successdisplay'
import {useState} from 'react';
import intlTelInput from 'intl-tel-input';
import {useEffect} from 'react';
import { useRouter } from 'next/router';
const ReportCardFooterWeb = (props) => { 
  
  const router = useRouter();
  const {locale} = router;
  const pagePath = router.asPath.toString();
  const [value, setValue] = useState();

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

 const closeFormPopup = () => {
   console.log("closing the popup message");
 }

 useEffect(() => {

  const input = document.querySelector("#report-input-field-web");
  intlTelInput(input, {
    separateDialCode: true,
    initialCountry: 'AE'
      // any initialisation options go here
  });



 }, []);

const formSubmitReport = (event) => {
    event.preventDefault();



    var countryCode =  event.target.querySelector("#ReportForm-Web .iti__selected-dial-code").innerHTML;
    console.log(countryCode);
    event.target.querySelector("#ReportForm-Web  #countryCode").value = countryCode;

   var formData = event.target.querySelector("#ReportCardFormWeb-inner"); 
   console.log("The form data is here");
   console.log(formData);
   console.log("THE SERIALIZED FORM DATA:")
   console.log($("#ReportForm-Web").serialize());

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
    $('.formPopup-success ').css("display","block");
  $.ajax({
        type: "POST",
        url: finalurl,
        data:  $('#ReportForm-Web').serialize(),
        success: function (data) {
          console.log(data);
       
        },
        error: function(data){
          console.log("failed to send the message");
        }
      });
     
      

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
 <Head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
    crossOrigin="anonymous"></script> 
  </Head>

<div className = "bg-div" onScroll = {avoidScrollEvent} >
   
   
   <div className="container">
     <div className="row">
       <div className="col-md-6">
       <div className = "techbaybook-div">
         <img src = {props.imgAddress} alt = "Techbay Report" loading="lazy"/>
       </div>
       </div>
       <div className="col-md-6 d-flex align-items-center">
         <div className="report-footer-content">
         <h1 className="text-direction mt-3 mt-md-0">{props.title}</h1>
            <p className="text-direction">{props.caption}</p>
            <form onSubmit = {formSubmitReport} id = "ReportForm-Web">
              <div className="row" id = "ReportCardFormWeb-inner">
                <div className="col-md-6 mb-3 px-1">
                <input style = {{visibility: "hidden", height: 0, width: 0, overflow: "hidden", padding: 0 }} type = "text" className = "report-inputfield"  name = "reportname"  value = {props.reportfile} />  
                    <input
                      name="api_key"
                      id="api_key"
                      type="hidden"
                      value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
                    />
                        {/* <input type="hidden" name="websitePath" value= {"https://techbay.co"+pagePath}/> */}
                  <input
                      name="category"
                      id="category"
                      type="hidden"
                      value={props.category}
                    />
                    <input type = "text" className = "report-inputfield"  name = "name"   
                         placeholder=
                        {locale === 'ar' ? 'الاسم' : 'Name*'} required/>
                </div>
                <div className="col-md-6 mb-3 px-1">
                <input type = "email" className = "report-inputfield" name = "email" 
                 placeholder=
                 {locale === 'ar' ? 'البريد الاكتروني' : 'Email*'}  required />
                  </div>
                  <div className="col-md-6 mb-3 px-1">
                  <input id ="countryCode" type="hidden" name="countrycode"/>
                  <input type="text" className = "report-inputfield box-direction"  id = "report-input-field-web" name = "phone" 
                  placeholder={locale === 'ar' ? 'الهاتف' : 'Phone*'}  required/>
                  
                  </div>
                  <div className="col-md-6 mb-3 px-1">
                  <input type = "text" className = "report-inputfield" name = "company" 
                   placeholder=  {locale === 'ar' ? 'الشركة' : 'Company*'}  required/>
                  <input type="hidden" name="websitePath" value= {"https://techbay.co"+pagePath}/>
                  </div>

              </div>
             
                <div className = "text-center mt-1 mt-lg-4">
               <ReportFooterButton name = {props.btntext}></ReportFooterButton>     
                </div>
            </form>
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
.bg-div .container .row{
  direction: ${locale === 'ar' ? 'rtl' : 'ltr'}
}
.text-direction{
  text-align:  ${locale === 'ar' ? 'right' : 'left'}
}
.box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}

 button#report-button {
    color-scheme: none;
    background-color: aliceblue;
}

    .bg-div{
        height: 630px;
        background-color: #2A6791;
        position: relative;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .techbaybook-div{
        position: relative;
        margin-top: -75px;
        display: flex;
        justify-content: center;

    }
    .techbaybook-div img{
      max-width: 100%;
      height: 690px;
    }
    @media only screen and (max-width: 600px) {
      .techbaybook-div img{
        height: auto;
        max-width: 100%;
      }
    }
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
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 17px;
           }

      .report-inputfield{
          border: none;
          padding 20px 20px;
          width: 100%;
          font-family: 'Open Sans', sans-serif;
          border-radius: 12px;

      }
      .report-footer-content .report-button{
       margin-top: 20px;
      }
      @media only screen and (max-width: 600px) {
        .bg-div{
          height: auto;
      }
      .report-footer-content p{
        margin-top: 10px;
        margin-bottom: 20px;
      }
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
       /* styling for ipad only */
       @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
         .techbaybook-div img{height: auto;}
         .report-footer-content h1{ font-size: 1.8rem;}
         .report-inputfield{padding: 15px 15px; }
         .bg-div{height: auto; }
         button#report-button { font-size: 1rem; }
        }   
    `}
</style>

</React.Fragment>
);
}

export default ReportCardFooterWeb;
