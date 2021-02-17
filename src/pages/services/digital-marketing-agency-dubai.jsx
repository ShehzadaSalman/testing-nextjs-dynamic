import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from '../../components/Layout';
const DigitalMarketing = dynamic(() => import('../../components/Slides/DigitalMarketing'), { ssr: false });
import { UserConsumer } from '../../ContextApi/usercontext';
import intlTelInput from 'intl-tel-input';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import BrandingForm from '../../components/NewComponents/BrandingForm';
import axios from 'axios'
export default ({finalData}) => {
  const router = useRouter();
  console.log(router.pathname);
  var pageurl = "https://techbay.co" + router.pathname;
  const brandingInputPhone = useRef();
  const marketingInputPhone = useRef();
  const developmentInputPhone = useRef();
  const speedInputPhone = useRef();
  const reportInputPhone = useRef();


  useEffect(() => {


  
 

    let phoneSpeedInput = speedInputPhone.current;
    // Update the document title using the browser API
    intlTelInput(phoneSpeedInput, {
      separateDialCode: true,
      initialCountry: 'AE'
      // any initialisation options go here
    });

    let phoneReportInput = reportInputPhone.current;
    // Update the document title using the browser API
    intlTelInput(phoneReportInput, {
      separateDialCode: true,
      initialCountry: 'AE'
      // any initialisation options go here
    });






  }, []);



  /* website speed */
  const formSubmitSpeed = (event) => {
    console.log("are we submitting the form here");
    event.preventDefault();
    var service = event.target.querySelector('#serviceName').value;
    var websiteURL = event.target.querySelector('#website_url').value;
    var newURL = 'https://' + websiteURL;
    let finalURLLInk = event.target.querySelector("#website_url").value = newURL;
    var finalurl = 'https://staging.techbay.co/api/get-website-optimization-report';
    var x = $("#services6 #email").val();
    if (x == "") {
      $(".formPopup-speed .packageForm .msg").html("Please fill empty fileds.");
      console.log("the email field is empty");
    } else {
      $.ajax({
        type: "POST",
        url: finalurl,
        data: $("#services6").serialize(),
        success: function (data) {
          console.log("we successfully submitted the speed form");
          console.log(data);
        },
        error: function () {
          console.log("so we have some issues here");
        }
      });
      $("#services6")[0].reset();
      $(".formPopup-speed .package  Form .msg").html("");
      $("#services6").css("display", "none");
      $(".formPopup-speed .packageForm .messageBox").fadeIn();
      $(".formPopup-speed .messageBox").css("display", "block");
    }
  }


  /* website seo report */
  const formSubmitReport = (event) => {
    console.log("are we submitting the report form here");
    event.preventDefault();
    var service = event.target.querySelector('#serviceName').value;



    console.log($("#services7").serialize());
    var countryCode = event.target.querySelector(".iti__flag-container .iti__selected-flag .iti__selected-dial-code").innerHTML;
    // event.target.querySelector("#formPopup-branding .formInner #services3 #countryCode").value = countryCode;
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
          console.log("we successfully submitted the Report form");
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

  const avoidCloseFormPopup = (event) => {    event.stopPropagation();}


  const closeFormPopup = () => {


    // closing the only success message
    console.log("closing the popup for the success message here");
    $('.formPopup-success ').css("display", "none");

    // closing the speed form
    $('.formPopup-speed ').css("display", "none");
    $(".formPopup-speed .messageBox").css("display", "none");
    $("#services6").css("display", "block");
    $("#services6")[0].reset();

    // closing the report form
    $('.formPopup-report ').css("display", "none");
    $(".formPopup-report .messageBox").css("display", "none");
    $("#services7").css("display", "block");
    $("#services7")[0].reset();
  }


  return (
    <Layout>
      <Head>
        <title>Digital Marketing Agency in Dubai | Provides SEO, PPC & SMM Services</title>
        <meta
          name="description"
          content="Techbay Solutions is one of the leading Digital Marketing Agencies in Dubai. Offers SEO, PPC, SMM services & more at affordable prices. Get a free quote"
        />
        <meta name="keywords" content="Digital Marketing Agency Dubai" />
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
        <meta property="og:url" content={pageurl} />
        <link rel="canonical" href="https://techbay.co/services/digital-marketing-agency-dubai" />

      </Head>




      {/* form submit report starts here */}

      <div className="formPopup-report" onClick={closeFormPopup}>
        <a onClick={closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
        <div className="formInner" onClick={avoidCloseFormPopup}>
          <form id="services7" onSubmit={formSubmitReport} encType="multipart/form-data">
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
            <div className="fields twoFields">
              <input type="hidden" name="websitePath" value="https://techbay.co/services/digital-marketing-agency-dubai" />

              <input type="text" id="name" name="name" placeholder="Name" required />
              <input type="text" id="email" name="email" placeholder="Email" required />
              <input type="hidden" id="location" name="location" value="lahore" required />
            </div>
            <div className="fields">
              <input id="countryCode" type="hidden" name="countrycode" />
              <input type="text" id="phone-report" ref={reportInputPhone} name="phone" placeholder="Phone" required />
            </div>
            <div className="fields">
              <UserConsumer>
                {({ username }) => <input
                  type="hidden"
                  id="website_url"
                  name="website"
                  value={username}
                  placeholder="Website url here"
                  required
                >
                </input>
                }
              </UserConsumer>
            </div>
            <div className="fields">
              <button type="submit" id="submit" name="submit" >Generate Report</button>
            </div>
          </form>

          <div className="messageBox">
            <a href="#" onClick={closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
            <i className="far fa-check-circle"></i>
            <h2>THANK YOU FOR CONTACTING US!</h2>
            <p>You will receive an email shortly</p>
          </div>
          <div className="msg"></div>
        </div>
      </div>
      {/* form submit speed starts here */}
      <div className="formPopup-speed" onClick={closeFormPopup}>
        <a onClick={closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
        <div className="formInner" onClick={avoidCloseFormPopup}>
          <form id="services6" onSubmit={formSubmitSpeed} encType="multipart/form-data">
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
            <div className="fields twoFields">
              <input type="hidden" name="websitePath" value="https://techbay.co/services/digital-marketing-agency-dubai" />

              <input type="text" id="name" name="name" placeholder="Name" required />
              <input type="text" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="fields">
              <input type="text" id="phone-speed" ref={speedInputPhone} name="phone" placeholder="Phone" required />
            </div>
            <div className="fields">

              <UserConsumer>
                {({ username }) => <input
                  type="hidden"
                  id="website_url"
                  name="website_url"
                  value={username}
                  placeholder="Website url here"
                  required
                >
                </input>
                }
              </UserConsumer>

            </div>
            <div className="fields">
              <button type="submit" name="Generate Report" >Generate Report</button>
            </div>
          </form>

          <div className="messageBox">
            <a href="#" onClick={closeFormPopup} className="closemsg"><i class="fa fa-times"></i></a>
            <i class="far fa-check-circle"></i>
            <h2>THANK YOU FOR CONTACTING US!</h2>
            <p>You will receive an email shortly</p>
          </div>
          <div className="msg"></div>
        </div>
      </div>

      {/* the success message popup */}
      <div className="formPopup-success" onClick={closeFormPopup}>
        <a onClick={closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
        <div className="formInner-success" onClick={avoidCloseFormPopup}>
          <div className="messageBox" style={{ display: "block" }}>
            <a href="#" onClick={closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
            <i className="far fa-check-circle"></i>
            <h2>THANK YOU FOR CONTACTING US!</h2>
            <p>You will receive an email shortly</p>
          </div>
          <div className="msg"></div>
        </div>
      </div>




     <BrandingForm department="marketing"/>     
      <DigitalMarketing 
        data = {finalData}
      />
      <style>
        {`
         html{
           overflow-x: hidden;
         } 
         .bg-grey-f3f3f3 {
          background-color: #f3f3f3;
      }
        
        `}
      </style>
    </Layout>
  );
};

export async function getStaticProps() {
  const result = axios.get('https://staging.techbay.co/api/get-sliders-with-content');
  const finalData =  (await result).data.response[3];
  const ImagePath = "https://staging.techbay.co//storage/app/";
  return {
    props: {
      finalData,
      ImagePath,
    }, // will be passed to the page component as props
  }
}