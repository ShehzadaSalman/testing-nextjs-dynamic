import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from '../../components/Layout';
const Branding = dynamic(() => import('../../components/Slides/Branding'), { ssr: false });
import { UserConsumer } from '../../ContextApi/usercontext';
import intlTelInput from 'intl-tel-input';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import BrandingForm from '../../components/NewComponents/BrandingForm';

export default ({finalData, ImagePath}) => {
  
  const router = useRouter();
  console.log(router.pathname);
  var pageurl = "https://techbay.co" + router.pathname;
  const speedInputPhone = useRef();
  const reportInputPhone = useRef();


  useEffect(() => {
 let phoneSpeedInput = speedInputPhone.current;
    intlTelInput(phoneSpeedInput, {
      separateDialCode: true,
      initialCountry: 'AE'
    });

    let phoneReportInput = reportInputPhone.current;
    intlTelInput(phoneReportInput, {
      separateDialCode: true,
      initialCountry: 'AE'
    });

  }, []);



  const formSubmitSpeed = (event) => {
    console.log("are we submitting the form here");
    event.preventDefault();
    var service = event.target.querySelector('#serviceName').value;
    var websiteURL = event.target.querySelector('#website_url').value;
    var newURL = 'https://' + websiteURL;
    let finalURLLInk = event.target.querySelector("#website_url").value = newURL;
    console.log(finalURLLInk);
    var finalurl = 'https://cms.techbay.co/home/siteOptimization';
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



  const formSubmitReport = (event) => {
    console.log("are we submitting the report form here");
    event.preventDefault();
    var service = event.target.querySelector('#serviceName').value;
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

  const avoidCloseFormPopup = (event) => {
    event.stopPropagation();
    console.log("do not close the popup as we are inside the form");
  }


  const closeFormPopup = () => {
    console.log("close the popup here");
    $('.formPopup ').css("display", "none");
    $(".formPopup .messageBox").css("display", "none");
    $("#services1").css("display", "block");
    $("#services1")[0].reset();


    console.log("close the popup here");
    $('.formPopup-marketing ').css("display", "none");
    $(".formPopup-marketing .messageBox").css("display", "none");
    $("#services2").css("display", "block");
    $("#services2")[0].reset();

  

    console.log("close the popup here");
    $('.formPopup-branding ').css("display", "none");
    $(".formPopup-branding .messageBox").css("display", "none");
    $("#services3").css("display", "block");
    $("#services3")[0].reset();


 
    console.log("closing the popup for the success message here");
    $('.formPopup-success ').css("display", "none");

  

    $('.formPopup-speed ').css("display", "none");
    $(".formPopup-speed .messageBox").css("display", "none");
    $("#services6").css("display", "block");
    $("#services6")[0].reset();


    $('.formPopup-report ').css("display", "none");
    $(".formPopup-report .messageBox").css("display", "none");
    $("#services7").css("display", "block");
    $("#services7")[0].reset();
  }



  return (
    <Layout>
      <Head>
        <title>Company Branding Services for all Business | Brand Creation Services</title>
        <meta
          name="description"
          content="Get reasonably priced company Branding Services for businesses. Let us know we'll design everything you need to convey your new-found brand identity."
        />
        <meta name="keywords" content="Company Branding Services" />
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
        <meta property="og:url" content={pageurl} />
        <link rel="canonical" href="https://techbay.co/services/branding-and-pr" />

      </Head>

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
              <input type="hidden" name="websitePath" value="https://techbay.co/services/branding-and-pr/" />
              <input type="text" id="name" name="user_name" placeholder="Name" required />
              <input type="text" id="email" name="email" placeholder="Email" required />
              <input type="hidden" id="location" name="location" value="lahore" required />
            </div>
            <div className="fields">
              <input id="countryCode" type="hidden" name="countrycode" />
              <input type="text" id="phone-report" ref={reportInputPhone} name="phone" placeholder="Phone" required />
            </div>
            <div className="fields">
              <UserConsumer>
                {({ usernametwo }) => <input
                  type="hidden"
                  id="website_url"
                  name="website"
                  value={usernametwo}
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
              <input type="hidden" name="websitePath" value="https://techbay.co/services/branding-and-pr/" />
              <input type="text" id="name" name="name" placeholder="Name" required />
              <input type="text" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="fields">
              <input id="countryCode" type="hidden" name="countrycode" />
              <input type="text" id="phone-speed" ref={speedInputPhone} name="phone" placeholder="Phone" required />
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
              <button type="submit" name="Generate Report" >Generate Report</button>
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

<BrandingForm department="branding"/>
      <Branding 
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
  const finalData =  (await result).data.response[1];
  const ImagePath = "https://staging.techbay.co//storage/app/";
  return {
    props: {
      finalData,
      ImagePath,
    }, // will be passed to the page component as props
  }
}
