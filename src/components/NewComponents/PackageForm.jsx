import Head from 'next/head';
import { useRef, useEffect, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  name: yup.string().required("Your Name is Required"),
  email: yup.string().required("Your Email is empty").email("Your Email is Invalid"),
  phone: yup.number("Please enter a valid number").required("Your Phone is Required").min(99999999, "Enter more than 8").max(999999999999, "Enter less than 12"),
  company: yup.string().required("Company name is Required"),
});
const PackageForm = () => {
  const myInput = useRef();
  const router = useRouter();
  const pagePath = router.asPath.toString();
  const [countrycode, setCountryCode] = useState('+971');
  const [websitePath, setWebsitePath] = useState('https://techbay.co');
  const [packagename, setPackageName] = useState('Pacakge SEO: good');
  const departmentName = useRef(null);
  {/*   initializing the formik    */ }

  const { handleSubmit, handleChange, handleBlur, values, errors, resetForm, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      department: '',
      countrycode: countrycode, // fetch the country code and get it here on submit
      websitePath: "https://techbay.co" + pagePath,
    },
    validationSchema,
    onSubmit(values) {

      var countryCode = document.querySelector("#formPopup-package .formInner #services-package .iti__selected-dial-code").innerHTML;
      console.log(`Country Code: ${countryCode}`);

      values.department = departmentName.current.value;

      const newValues = {
        ...values,
        countrycode: countryCode,
      }
      FormSubmission(newValues);
      console.log(newValues);
    }
  });






  const packageInputPhone = useRef();
  useEffect(() => {
    let phonePackageInput = packageInputPhone.current;
    // Update the document title using the browser API
    intlTelInput(phonePackageInput, {
      separateDialCode: true,
      initialCountry: 'AE'
      // any initialisation options go here
    });

  }, []);




  const FormSubmission = (formData) => {
    let finalurl = 'https://staging.techbay.co/api/get-quotation';
    $.ajax({
      type: "POST",
      url: finalurl,
      data: formData,
      success: function (data) {
        console.log(data);
      },
    });
    $("#services-package")[0].reset();
    $(".formPopup-branding .msg").html("");
    $("#services-package").css("display", "none");
    $(".formPopup-package .packageForm .messageBox").fadeIn();
    $(".formPopup-package .messageBox").css("display", "block");

  }


  // closing the popup form here
  const closeFormPopup = (event) => {
    event.preventDefault();
    resetForm({}); // reset the form with validation errors and fields
    $('.formPopup-package').css("display", "none");
    $(".formPopup-package .messageBox").css("display", "none");
    $("#services-package").css("display", "block");
    $("#services-package")[0].reset();
  }


  const avoidClosePopupFromOutside = (event) => {
    event.stopPropagation();
    console.log("do not close the popup as we are inside the form");
  }



  return (
    <React.Fragment>
      <div id="formPopup-package" className="formPopup-package" onClick={closeFormPopup}>
        <a href="#" onClick={closeFormPopup} className="clsPopup"><i className="fa fa-times"></i></a>
        <div className="formInner container" onClick={avoidClosePopupFromOutside}>
          <form id="services-package" onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              name="api_key"
              id="api_key"
              type="hidden"
              value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
            />
            <input type="hidden" name="websitePath" value={"https://techbay.co" + pagePath} onChange={handleChange} />


            <input
              name="serviceName"
              id="serviceName"
              type="hidden"
              value="branding" />
            <input type="hidden" name="location" value="Package Location" />
            <input type="hidden" ref={departmentName} name="department" className="package-form" onChange={handleChange} />
            <input type="hidden" name="custom_field" value="Custom Field" />
            <input id="countryCode" type="hidden" name="countrycode" />
            <div className="fields twoFields row">

              <div className="col-6 px-1 mb-1">
                <input type="text" name="name" onBlur={handleBlur} className="mb-0" placeholder="Name" value={values.name} onChange={handleChange} />
                {(errors.name && touched.name) ? <p style={{ color: '#dc3545', fontWeight: 'bold', margin: '0px', padding: '0px', fontSize: '11px' }}>  {errors.name}  </p> : <p style={{ color: 'red', fontWeight: 'bold', margin: '0px', padding: '0px', fontSize: '11px', visibility: 'hidden' }}>Error messag here</p>}
              </div>
              <div className="col-6 px-1 mb-1">
                <input type="text" name="email" onBlur={handleBlur}  className="mb-0" value={values.email} placeholder="Email" style={{ width: '100%', }} onChange={handleChange} />
                {(errors.email && touched.email) ? <p style={{ color: '#dc3545', fontWeight: 'bold', margin: '0px', padding: '0px', fontSize: '11px' }}>  {errors.email}  </p> : <p style={{ color: 'red', fontWeight: 'bold', margin: '0px', padding: '0px', fontSize: '11px', visibility: 'hidden' }}>Error messag here</p>}
              </div>





            </div>
            <div className="fields row">
              <div className="col-md-12 px-1 mb-1">
                <input type="text" ref={packageInputPhone} onBlur={handleBlur} value={values.phone} className="mb-0" name="phone" placeholder="Phone" onChange={handleChange} />
                {(errors.phone && touched.phone) ? <p style={{ color: '#dc3545', fontWeight: 'bold', margin: '0px', padding: '0px', fontSize: '11px' }}>  {errors.phone}  </p> : <p style={{ color: 'red', fontWeight: 'bold', margin: '0px', padding: '0px', fontSize: '11px', visibility: 'hidden' }}>Error messag here</p>}
              </div>


            </div>
            <div className="fields row">
              <div className="col-md-12 px-1 mb-1">
                <input id="company" type="text" className="mb-0" value={values.company}  onBlur={handleBlur}
                 name="company" placeholder="Company" onChange={handleChange} />
                {(errors.company && touched.company) ? <p style={{ color: '#dc3545', fontWeight: 'bold', margin: '0px', padding: '0px', fontSize: '11px' }}>  {errors.company}  </p> : <p style={{ color: 'red', fontWeight: 'bold', margin: '0px', padding: '0px', fontSize: '11px', visibility: 'hidden' }}>Error messag here</p>}
              </div>

            </div>
            <div className="fields row">
              <div className="col-md-12 px-1">
                <input
                  disabled
                  type="text"
                  name="department"
                  className="package-title-form" />
                <h4 className="package-title"></h4>
              </div>
            </div>
            <div className="fields pl-0 ml-0">
              <button type="submit" id="submit" name="submit" >Submit</button>
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

      <style>
        {`
   .package-title-form{
     font-weight: 800;
   }
  
  
  `}
      </style>


    </React.Fragment>
  );

}

export default PackageForm;