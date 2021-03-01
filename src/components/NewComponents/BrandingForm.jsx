import { useRef, useEffect, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import $ from "jquery";


import { useFormik } from 'formik';
const validationSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup.string().required("Please enter you email address").email("Please enter a valid email address"),
  phone: yup.number("Please enter a valid number").required("Please enter your phone number").min(99999999, "Enter more than 8").max(999999999999, "Enter less than 12"),
  company: yup.string().required("Please enter a company name"),
});

const BrandingForm = ({ department }) => {




  // initializing all the variblaes here
  const [countrycode, setCountryCode] = useState('+971');
  const router = useRouter();
  const {locale} = router;
  const pagePath = router.asPath.toString();
  const brandingInputPhone = useRef();
  // form validation comes here
  const { handleSubmit, handleChange, handleBlur, values, resetForm, errors, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      department: department,
      countrycode: countrycode, // fetch the country code and get it here on submit
      websitePath: "https://techbay.co" + pagePath,
    },
    validationSchema,
    onSubmit(values) {
      var countryCode = document.querySelector("#formPopup-branding .formInner #services3 .iti__selected-dial-code").innerHTML;
      console.log(`Country Code: ${countryCode}`);
      console.log(countryCode);
      const newValues = {
        ...values,
        countrycode: countryCode,
      }

      FormSubmission(newValues);
      resetForm({});
      console.log(newValues);
    }
  });


  // use Effect for adding country code to the phone field
  useEffect(() => {
    let phoneBrandingInput = brandingInputPhone.current;
    // Update the document title using the browser API
    intlTelInput(phoneBrandingInput, {
      separateDialCode: true,
      initialCountry: 'AE'
    });
  }, []);


  // new form submission
  const FormSubmission = (formData) => {
    let finalurl = 'https://staging.techbay.co/api/get-in-touch';
    $.ajax({
      type: "POST",
      url: finalurl,
      data: formData,
      success: function (data) {
        console.log(data);
      },
      failure: function (data) {
        console.log(data);
      }
    });


    console.log("FORM SUBMITTED SUCCESSFULLY");
    resetForm({});
    document.querySelector('#formPopup-branding #services3').style.display = "none";
    $('#formPopup-branding .messageBox').css('display', 'block');

  }
  // closing the popup form here
  const closeFormPopup = (event) => {
     resetForm({});
     document.querySelector('#formPopup-branding  #services3').style.display = "block";
     document.querySelector('#formPopup-branding .messageBox').style.display = "none";
     document.querySelector('#formPopup-branding').style.display = "none";
  }

  const avoidClosePopupFromOutside = (event) => {
    event.stopPropagation();
    console.log("do not close the popup as we are inside the form");
  }



  return (
    <React.Fragment>
      <div id="formPopup-branding" className="formPopup-branding" onClick={closeFormPopup}>
        <a href="#" onClick={closeFormPopup} className="clsPopup"><i className="fa fa-times"></i></a>
        <div className="formInner" onClick={avoidClosePopupFromOutside}>
          <form id="services3" onSubmit={handleSubmit} encType="multipart/form-data" 
          className="box-direction">
            <input
              name="api_key"
              id="api_key"
              type="hidden"
              value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39" />
            <input type="hidden" name="websitePath" onChange={handleChange}
              value={"https://techbay.co" + pagePath} />
            <input
              name="department"
              id="serviceName"
              type="hidden"
              value={department} onChange={handleChange} />
            <div className="fields twoFields row">
              <div className="col-6 px-1">
                <input type="text" id="name" name="name" onBlur={handleBlur}
                  onChange={handleChange} value={values.name} 
                  placeholder=  {locale === 'ar' ? 'اسم' : 'Name'}  />
                {(errors.name && touched.name) ? <p className="popup-error-message">  {errors.name}  </p> : <p className="popup-error-message invisible">Error</p>}
              </div>
              <div className="col-6 px-1">
                <input type="text" id="email" name="email" onBlur={handleBlur}
                  onChange={handleChange} value={values.email} 
                  placeholder= {locale === 'ar' ? 'بريد الالكتروني' : 'Email'}  />
                {(errors.email && touched.email) ? <p className="popup-error-message">  {errors.email}  </p> : <p className="popup-error-message invisible">Error</p>}
              </div>
            </div>
            <div className="fields row">
              <div className="col-12 px-1">
              <input id="countryCode" type="hidden" onChange={handleChange} name="countrycode" />
              <input type="text" ref={brandingInputPhone} onBlur={handleBlur}
                onChange={handleChange} name="phone" className="box-direction"  value={values.phone} 
                placeholder={locale === 'ar' ? 'هاتف' : 'Phone'}/>
              {(errors.phone && touched.phone) ? <p className="popup-error-message">  {errors.phone}  </p> : <p className="popup-error-message invisible">Error Message</p>}
           
              </div>
            </div>
            <div className="fields row">
              <div className="col-12 px-1">
              <input
                type="text"
                id="company"
                name="company"
                value={values.company}
                placeholder={locale === 'ar' ? 'شركة' : 'Company'}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {(errors.company && touched.company) ? <p className="popup-error-message">  {errors.company}  </p> : <p className="popup-error-message invisible"> Error message</p>}
           
              </div>
            </div>
            <div className="fields">
              <button type="submit" id="submit" name="submit" >
                {locale == 'ar' ? 'يقدم' : 'Submit'}
                </button>
            </div>
          </form>

          <div className="messageBox">
            <a href="#" onClick={closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
            <i className="far fa-check-circle"></i>
            <h2>THANK YOU FOR CONTACTING US!</h2>
            <p>We will get in touch with you shortly</p>
          </div>
          <div className="msg"></div>
        </div>
      </div>
  <style jsx>{`
  .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
  .text-direction{ text-align: ${locale === 'ar' ? 'right' : 'left'};} 
  `}</style>
    </React.Fragment>
  );

}

export default BrandingForm;