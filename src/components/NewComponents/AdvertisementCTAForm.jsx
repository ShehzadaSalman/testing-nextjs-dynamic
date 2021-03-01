import Head from 'next/head';
import intlTelInput from 'intl-tel-input';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { useFormik } from 'formik';
const validationSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup.string().required("Please enter you email address").email("Please enter a valid email address"),
  phone: yup.number("Please enter a valid number").required("Please enter your phone number").min(99999999, "Enter more than 8").max(999999999999, "Enter less than 12"),
  company: yup.string().required("Please enter a company name"),
});
const AdvertisementPopup = (props) => {

  


  const router = useRouter();
  const {locale} = router;
  console.log(router.route);
  const pagePath = router.asPath.toString();

  const myInput = useRef();
  useEffect(() => {
    let phoneDevelopmentInput = myInput.current;
    // Update the document title using the browser API
    intlTelInput(phoneDevelopmentInput, {
      separateDialCode: true,
      initialCountry: 'AE'
      // any initialisation options go here
    });

  }, []);





  // form submit for marketing form 
  const formSubmitDevelopment = (event) => {

    event.preventDefault();
    /* get the country code */
    var countryCode = event.target.querySelector("#formPopup .formInner #services1 .iti__selected-dial-code").innerHTML;
    console.log(`Country Code: ${countryCode}`);
    console.log(countryCode);
    event.target.querySelector("#formPopup .formInner #services1 #countryCode").value = countryCode;


    var finalurl = '';
    if (props.type == 'branding') {
      finalurl = 'https://staging.techbay.co/api/get-branding-pdf';
    } else if (props.type == 'marketing') {
      finalurl = 'https://staging.techbay.co/api/get-marketing-pdf';
    } else if (props.type == 'development') {
      finalurl = 'https://staging.techbay.co/api/get-development-pdf';
    } else {
      finalurl = 'https://staging.techbay.co/api/get-development-pdf';
    }






    var x = $("#services1 #email").val();
    if (x == "") {
      $(".formPopup .packageForm .msg").html("Please fill empty fileds.");
      console.log("the email field is empty");
    } else {
      $.ajax({
        type: "POST",
        url: finalurl,
        data: $("#services1").serialize(),
        success: function (data) {
          console.log(data);
        },
      });
      $("#services1")[0].reset();
      $(".formPopup .msg").html("");
      $("#services1").css("display", "none");
      $(".formPopup .packageForm .messageBox").fadeIn();
      $(".formPopup .messageBox").css("display", "block");
    }
  }
  // closing the popup form here
  const closeFormPopup = (event) => {
    event.preventDefault();
    $('.formPopup').css("display", "none");
    $(".formPopup .messageBox").css("display", "none");
    $("#services1").css("display", "block");
    $("#services1")[0].reset();
  }

  const avoidClosePopupFromOutside = (event) => {
    event.stopPropagation();
    console.log("do not close the popup as we are inside the form");
  }

  return (
    <React.Fragment>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
          crossOrigin="anonymous"></script>
      </Head>
      {/* the development form starts here */}
      <div id="formPopup" className="formPopup brandings" onClick={closeFormPopup}>
        <a onClick={closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
        <div className="formInner" onClick={avoidClosePopupFromOutside}>
          <form id="services1" onSubmit={formSubmitDevelopment} className="box-direction"  encType="multipart/form-data">
            <input
              name="api_key"
              id="api_key"
              type="hidden"
              value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
            />
            <input type="hidden" name="websitePath" value={"https://techbay.co" + pagePath} />
            <input
              name="serviceName"
              id="serviceName"
              type="hidden"
              value={props.type}
            />
            <div className="fields twoFields">
              <input type="text" id="name" name="name" placeholder={locale === 'ar' ? 'اسم' : 'Name'} required />
              <input type="text" id="email" name="email" placeholder={locale === 'ar' ? 'بريد الالكتروني' : 'Email'} required />
            </div>
            <div className="fields">
              <input id="countryCode" type="hidden" name="countrycode" />
              <input type="text" ref={myInput} id="phone-outer-development" name="phone" 
              placeholder={locale === 'ar' ? 'هاتف' : 'Phone'} className="box-direction" required />
            </div>
            <div className="fields">
              <input
                type="text"
                id="company"
                name="company" className="mt-3"
                placeholder={locale === 'ar' ? 'شركة' : 'Company'} required
              />
            </div>
            <div className="fields">
              <button type="submit" id="submit" name="submit" >  {locale == 'ar' ? 'يقدم' : 'Submit'}</button>
            </div>
            <div className="msg d-block text-left">

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 px-0">
                    <li className="mb-1">
                      Be assured that Your details will NOT be shared with any 3rd party for marketing purposes.
                   </li>

                  </div>
                  <div className="col-12 px-0 text-center">
                    <img className="quality-icon" alt="quality assurance" src="/images/quality.png" />
                  </div>
                </div>
              </div>



            </div>
          </form>

          <div className="messageBox">
            <a href="#" onClick={closeFormPopup} className="closemsg"><i class="fa fa-times"></i></a>
            <i class="far fa-check-circle"></i>
            <h2>THANK YOU FOR CONTACTING US!</h2>
            <p>We will get in touch with you shortly</p>
          </div>

        </div>
      </div>
      {/* the development form ends here */}


      <style>
        {
          `
.formPopup-speed .msg{
    font-weight:500;
    font-family:'Roboto', sans-serif;
    padding-bottom:21px;
    margin-bottom:20px;   
    font-size:14px;

}
.box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
.text-direction{ text-align: ${locale === 'ar' ? 'right' : 'left'};} 
.quality-icon{
    // position: absolute;
    // bottom: 1px;
    // right: 1px;
}
#formPopup .form-inner{
    position: relative;
}

            `
        }
      </style>

    </React.Fragment>
  );


}
export default AdvertisementPopup;