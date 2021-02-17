import Head from 'next/head';
import Footer from '../../components/Footer'
import Headerfive from '../../components/HeaderFive';
import WhiteWave from '../../components/NewComponents/WhiteWave';
import { UserConsumer } from '../../ContextApi/usercontext';
import { useRouter } from 'next/router';
import intlTelInput from 'intl-tel-input';
import { useEffect } from 'react';
const WebsiteSpeedReport = () => {


  const router = useRouter();
  console.log(router.route);
  const pagePath = router.asPath.toString();



  const formpopupReport = (event) => {
    event.preventDefault();
    let websiteurl = event.target.querySelector("#report-url").value;
    $('.formPopup-speed').css("display", "block");
  }


  /* form submit for website speed */
  const formSubmitSpeed = (event) => {


    console.log("are we submitting the form here");
    event.preventDefault();
    var countryCode = event.target.querySelector(".form-speed .iti__selected-dial-code").innerHTML;
    console.log(countryCode);
    event.target.querySelector(".form-speed  #countryCode").value = countryCode;



    fbq('trackCustom', 'FACEBOOK TRACKING CONVERSION', { promotion: 'share_discount_10%' });
    let service = event.target.querySelector('#serviceName').value;
    let websiteURL = event.target.querySelector('#website_url').value;
    let newURL = websiteURL;
    let finalURLLInk = event.target.querySelector("#website_url").value = newURL;
    console.log(finalURLLInk);
    console.log('final url link comes  here');


    var finalurl = 'https://staging.techbay.co/api/get-website-optimization-report';

    console.log($("#services7").serialize());
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
          console.log(data);
        },
        error: function () {
          console.log("so we have some issues here");
        }
      });
      $("#services7")[0].reset();
      $(".formPopup-speed .package  Form .msg").html("");
      $("#services7").css("display", "none");
      $(".formPopup-speed .packageForm .messageBox").fadeIn();
      $(".formPopup-speed .messageBox").css("display", "block");
    }
  }




  const avoidCloseFormPopup = (event) => {
    event.stopPropagation();
    console.log("do not close the popup as we are inside the form");
  }


  const closeFormPopup = () => {
    $('.formPopup-speed').css("display", "none");
    $(".formPopup-speed .messageBox").css("display", "none");
    $("#services7").css("display", "block");
    $("#services7")[0].reset();
  }

  useEffect(() => {

    const input = document.querySelector("#phone-report");
    intlTelInput(input, {
      separateDialCode: true,
      initialCountry: 'ae'
      // any initialisation options go here
    });

  }, []);



  return (
    <React.Fragment>

      <Head>

        <title>
          Techbay Solutions
      </title>


        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="" />
        {/* <link rel="canonical" href= "https://techbay.agency/ecommerce-services"/> */}
        {/* <link href="/css/newstyle.css" rel="stylesheet"/> */}
      </Head>
      <div className="main-content">

        <Headerfive />


        <div className="formPopup-speed" onClick={closeFormPopup}>
          <a onClick={closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
          <div className="formInner" onClick={avoidCloseFormPopup}>
            <form id="services7" onSubmit={formSubmitSpeed} encType="multipart/form-data">

              <div className="form-speed">
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
                <input type="hidden" name="websitePath" value={"https://techbay.co" + pagePath} />
                <input
                  name="websitename"
                  type="hidden"
                  value="techbayagency"
                />
                <div className="fields twoFields">
                  <input type="text" id="name" name="name" placeholder="Name" required />
                  <input type="email" id="email" name="email" placeholder="Email" required />
                  <input type="hidden" id="location" name="location" value="lahore" required />
                </div>
                <div className="fields">
                  <input id="countryCode" type="hidden" name="countrycode" />
                  <input type="text" id="phone-report" name="phone" placeholder="Phone" required />
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
                  <button type="submit" id="submit" name="submit" >Get Website Speed Report</button>
                </div>
                <div className="msg d-block pb-0 text-left">
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
              <p>You will receive an email shortly</p>
            </div>
            {/* <div className="msg"></div> */}
          </div>
        </div>




        {/*  The First section    */}
        <div className="full-banner">
          <div className="container text-center">
            <div className="mb-4 mb-md-5">
              <img src="images/web/website-speed.png" alt="image" className="img-fluid" />
            </div>

            <h1 className="light">
              Check website speed in 90 seconds for free
     </h1>
            <div className="mt-4 mt-md-5 zIndex-11">
              <div className="row d-flex flex-row justify-content-center">
                <form onSubmit={formpopupReport} style={{ display: "contents" }}>
                  <div className="col-md-5 pb-3 pb-md-0 ">
                    <UserConsumer>
                      {({ updateUserNameTwo }) => (
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">https://</span>
                          </div>
                          <input
                            id="report-url"
                            type="text"
                            className="form-control"
                            pattern="(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                            placeholder="example.com" required
                            onChange={event => {
                              updateUserNameTwo(event.target.value);
                            }}
                          />
                        </div>
                      )}
                    </UserConsumer>
                  </div>

                  <div className="col-md-2 text-center">
                    <button className="view-report" type="submit">Results</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <WhiteWave title="wave2-light.png" />

        </div>

        <div className="bottom-wave-bg content pt-5 pb-5">
          <div className="container">
            <p className="paragraph">
              Techbay's free website speed test gives you a snapshot of how your desktop or mobile users experience your webpage. You get everything you need to make smart performance-related decisions about your website and its content. You can see how your website performance compares across different devices and networks from regions all around the world.
             </p>
            <p className="paragraph">
              You may also catch some misbehaving third-party content providers in the act of slowing down your site. With the website speed check, you know the quantity and size of your page elements, the allocation of images, script files, CSS files, HTML files, and the domains the elements come from.
           </p>
            <p className="paragraph mb-5">
              The free report gives you the URL, the load progression, the request and response headers, and the connection details for each element. You can spot slow-loading elements, failed elements, and bottlenecks within your page, so you know where to apply your efforts to bring your performance budget back under control.
           </p>
          </div>

        </div>


      </div>



      <Footer />
      <style>
        {
          `
        html{
          overflow-y: auto;
        }
        `
        }

      </style>

      <style jsx>
        {
          `
              .mt-20{
                margin-top: 20px;
              }
              .zIndex-11{
                position: relative;
                z-index:15;   
              }
              #report-url{
                padding-top: 30px;
                padding-bottom: 30px;
                font-size: 21px;
              }
              .formPopup-speed .msg{
                font-weight:500;
                font-family:'Roboto', sans-serif;
              }
              button.view-report{
                padding: 15px 55px;
                cursor: pointer;
                font-size:21px;
                position: relative;
                z-index:11;
              }

              #basic-addon1{
                font-size: 21px;
              }
              .footers{
                background-color: #f1f1f1;
              }

            .full-banner{
                display: flex;
                position: relative;
                flex-direction: column;
                justify-content: center;
                background-color: grey;
                height: calc(100vh);
                background-image: url('/images/web/speedcheckbanner-small.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                font-family: 'Roboto', sans-serif;
            }
        
            
            .full-banner h1.light{
                color: #fff;
                text-transform: uppercase;
                text-align: center;
                font-size: 4rem;
                font-weight: 600;
                line-height: .9;
            }
            
            .full-banner h1.dark{
                color: #212121;
                text-transform: uppercase;
                text-align: center;
                font-size: 4.8rem;
                font-weight: 600;
                line-height: .9;
            }
            .full-banner h6.light{
                color: #fff;
                text-align: center;
                font-size: 1.2rem;
                margin-top: 20px;
                line-height: 1.5;
                font-weight: 350;
            }
            .full-banner h6.dark{
                color: #212121;
                text-align: center;
                font-size: 1.2rem;
                margin-top: 20px;
                line-height: 1.5;
                font-weight: 350;
            }



            @media screen and (max-width: 580px) {


              #report-url{
                padding-top: 9px;
                padding-bottom: 9px;
                font-size: 21px;
              }
              
              button.view-report{
                padding: 10px 51px;
              }





                .full-banner h1.light{
                    color: #fff;
                    text-transform: uppercase;
                    text-align: center;
                    font-size: 2.2rem;
                    font-weight: 600;
                    line-height: .9;


                }
                .full-banner h6.light{
                    color: #fff;
                    text-align: center;
                    font-size: 1rem;
                    margin-top: 10px;
                    line-height: 1.5;
                }
                .full-banner h1.dark{
                    color: #212121;
                    text-transform: uppercase;
                    text-align: center;
                    font-size: 2.2rem;
                    font-weight: 600;
                    line-height: .9;


                }
                .full-banner h6.dark{
                    color: #212121;
                    text-align: center;
                    font-size: 1rem;
                    margin-top: 10px;
                    line-height: 1.5;
                }




              }


            `
        }
      </style>


    </React.Fragment>
  );
}
export default WebsiteSpeedReport;
