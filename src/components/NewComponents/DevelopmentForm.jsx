import Head from 'next/head';
import intlTelInput from 'intl-tel-input';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';



const DevelopmentForm = () => {
  const myInput = useRef();
  const router = useRouter();
  console.log(router.route);
  const pagePath = router.asPath.toString();
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


    var countryCode = event.target.querySelector("#formPopup .formInner #services1 .iti__selected-dial-code").innerHTML;
    console.log(`Country Code: ${countryCode}`);
    console.log(countryCode);
    event.target.querySelector("#formPopup .formInner #services1 #countryCode").value = countryCode;




    let finalurl = 'https://staging.techbay.co/api/get-in-touch';
    var x = $("#services1 #email").val();
    if (x == "") {
      $(".formPopup .packageForm .msg").html("Please fill empty fileds.");
      console.log("the email field is empty");
    } else {
      $.ajax({
        type: "POST",
        contentType: "application/json",
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
          <form id="services1" onSubmit={formSubmitDevelopment} encType="multipart/form-data">
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
              value="development"
            />
            <div className="fields twoFields">
              <input type="text" id="name" name="name" placeholder="Name" required />
              <input type="text" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="fields">
              <input id="countryCode" type="hidden" name="countrycode" />
              <input type="text" ref={myInput} id="phone-outer-development" name="phone" placeholder="Phone" required />
            </div>
            <div className="fields">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company" required
              />
            </div>
            <div className="fields">
              <button type="submit" id="submit" name="submit" >Submit</button>
            </div>
          </form>

          <div className="messageBox">
            <a href="#" onClick={closeFormPopup} className="closemsg"><i class="fa fa-times"></i></a>
            <i class="far fa-check-circle"></i>
            <h2>THANK YOU FOR CONTACTING US!</h2>
            <p>We will get in touch with you shortly</p>
          </div>
          <div className="msg"></div>
        </div>
      </div>
      {/* the development form ends here */}




    </React.Fragment>
  );


}
export default DevelopmentForm;