import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';


// validation schema for the form
const validationSchema = yup.object({
  name: yup.string().required("Your Name is Required"),
  email: yup.string().required("Your Email is empty").email("Your Email is Invalid"),
  phone: yup.number("Please enter a valid number").required("Your Phone is Required").min(99999999, "Enter more than 8").max(999999999999, "Enter less than 12"),
  company: yup.string().required("Company name is Required"),
});


const MarketingForm = () => {

  // initializing the variables and useState hooks
  const PopupFormRef = useRef(null);
  const PopupMessageRef = useRef(null);
  const [countrycode, setCountryCode] = useState('+971');
  const router = useRouter();
  const pagePath = router.asPath.toString();
  const MarketingInputPhone = useRef();

  // form validation comes here
  const { handleSubmit, handleChange, values, resetForm, errors, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      department: 'branding',
      countrycode: countrycode, // fetch the country code and get it here on submit
      websitePath: "https://techbay.co" + pagePath,
    },
    validationSchema,
    onSubmit(values) {
      let countryCode = document.querySelector("#formPopup-marketing .formInner #services2 .iti__selected-dial-code").innerHTML;
      const newValues = {
        ...values,
        countrycode: countryCode,
      }
      FormSubmission(newValues);
      console.log(newValues);
    }
  });







  // new form submission
  const FormSubmission = (formData) => {
    let finalurl = 'https://staging.techbay.co/api/get-in-touch';
    // posting the data back to the server
    axios({
      method: 'post',
      headers: { "Access-Control-Allow-Origin": "*" },
      url: finalurl,
      data: formData
    }).then((response) => {
      console.log(response.status) // status
      console.log(response.data); // response from the server
    }, (error) => {
      console.log(error); // display the error here
    });

    // $.ajax({
    //   type: "POST",
    //   url: finalurl,
    //   data: formData,
    //   success: function (data) {
    //     console.log(data);
    //   },
    // });


    PopupFormRef.current.style.display = "none"; // hide the form
    PopupMessageRef.current.style.display = "block"; // display the success message in the form


    // $("#services2").css("display", "none"); 
    // $(".formPopup-marketing .packageForm .messageBox").fadeIn();
    // $(".formPopup-marketing .messageBox").css("display", "block");

  }




  // closing the popup form here
  const closeFormPopup = (event) => {
    event.preventDefault();
    resetForm();
    PopupFormRef.current.style.display = "block"; // hide the form
    PopupMessageRef.current.style.display = "none"; // display the success message in the form

    // $('.formPopup-marketing').css("display", "none");
    // $(".formPopup-marketing .messageBox").css("display", "none");
    // $("#services2").css("display", "block");
    // $("#services2")[0].reset();
  }
  const avoidClosePopupFromOutside = (event) => { event.stopPropagation(); }
  // adding the country code to the input field
  useEffect(() => {
    let phoneMarketingInput = MarketingInputPhone.current;
    // Update the document title using the browser API
    intlTelInput(phoneMarketingInput, {
      separateDialCode: true,
      initialCountry: 'AE'
      // any initialisation options go here
    });

  }, []);



  return (
    <React.Fragment>
      <div id="formPopup-marketing" className="formPopup-marketing" onClick={closeFormPopup}>
        <a onClick={closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
        <div className="formInner" onClick={avoidClosePopupFromOutside}>
          <form id="services2" ref={PopupFormRef} onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              name="api_key"
              id="api_key"
              type="hidden"
              value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
            />
            <input type="hidden" name="websitePath" value={"https://techbay.co" + pagePath} />
            <input
              name="department"
              id="serviceName"
              type="hidden"
              value="marketing"
            />
            <div className="fields twoFields row">
              <div className="col-6 pr-1">
                <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} />
                {(errors.name && touched.name) ? <p className="popup-error-message">
                  {errors.name}  </p> : <p className="popup-error-message invisible">Error</p>}
              </div>
              <div className="col-6 pl-1">
                <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} />
                {(errors.email && touched.email) ? <p className="popup-error-message">
                  {errors.email}  </p> : <p className="popup-error-message invisible">Error</p>}
              </div>


            </div>
            <div className="fields">
              <input id="countryCode" type="hidden" name="countrycode" onChange={handleChange} />
              <input ref={MarketingInputPhone} name="phone" placeholder="Phone" onChange={handleChange} />
              {(errors.phone && touched.phone) ? <p className="popup-error-message">
                {errors.phone}  </p> : <p className="popup-error-message invisible">Error</p>}
            </div>
            <div className="fields">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company" onChange={handleChange}
              />
              {(errors.company && touched.company) ? <p className="popup-error-message">
                {errors.company}  </p> : <p className="popup-error-message invisible">Error message</p>}
            </div>
            <div className="fields">
              <button type="submit" id="submit" name="submit" >Submit</button>
            </div>
          </form>

          <div className="messageBox" ref={PopupMessageRef}>
            <a href="#" onClick={closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
            <i className="far fa-check-circle"></i>
            <h2>THANK YOU FOR CONTACTING US!</h2>
            <p>We will get in touch with you shortly</p>
          </div>
          <div className="msg"></div>
        </div>
      </div>
      {/* branding form starts here */}



    </React.Fragment>
  );
}
export default MarketingForm;