import WhiteWave from '../../components/NewComponents/WhiteWave';
import { UserConsumer } from '../../ContextApi/usercontext';
import { useRouter } from 'next/router';
import intlTelInput from 'intl-tel-input';
import { useEffect, useRef } from 'react';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath

const ReportLandingPage = ({data}) => {

  const myInput = useRef();
  const router = useRouter();
  const {locale} = router;
  console.log(router.route);
  const pagePath = router.asPath.toString();




  const formpopupReport = (event) => {
    console.log("Popup report");
    event.preventDefault();
    let websiteurl = event.target.querySelector("#report-url").value;
    $('.formPopup-report').css("display", "block");
  }

  // this one is not working

  /* form submit for website speed */
  const formSubmitReport = (event) => {
    console.log("are we submitting the report form here");
    event.preventDefault();
    var countryCode = event.target.querySelector(".form-report .iti__selected-dial-code").innerHTML;
    console.log(countryCode);
    event.target.querySelector(".form-report  #countryCode").value = countryCode;
    fbq('trackCustom', 'FACEBOOK TRACKING CONVERSION', { promotion: 'share_discount_10%' });
    let service = event.target.querySelector('#serviceName').value;
    let websiteURL = event.target.querySelector('#website_url').value;
    let newURL = websiteURL;
    let finalURLLInk = event.target.querySelector("#website_url").value = newURL;
    console.log($("#services7").serialize());
    var finalurl = 'https://staging.techbay.co/api/get-website-digital-marketing-seo-report';

    var x = $("#services7 #email").val();
    if (x == "") {
      $(".formPopup-report .packageForm .msg").html("Please fill empty fileds.");
      console.log("the email field is empty");
    } else {
      $.ajax({
        method: "POST",
        url: finalurl,
        data: $("#services7").serialize(),
        success: function (data) {
          console.log("we successfully submitted the Report");
          console.log(data);
        },
        error: function (xhr) {
          console.log(xhr.responseText);
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
    // closing the speed form
    $('.formPopup-report').css("display", "none");
    $(".formPopup-report .messageBox").css("display", "none");
    $("#services7").css("display", "block");
    $("#services7")[0].reset();
  }


  useEffect(() => {
    const input = document.querySelector("#phone-report");
    intlTelInput(input, {
      separateDialCode: true,
      initialCountry: 'ae'
    });
  }, []);

  return (
    <React.Fragment>


      <div className="main-content">
     


        <div className="formPopup-report" onClick={closeFormPopup}>
          <a onClick={closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
          <div className="formInner" onClick={avoidCloseFormPopup}>
            <form id="services7" onSubmit={formSubmitReport} encType="multipart/form-data">
              <div className="form-report">


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
                <input
                  name="websitename"
                  type="hidden"
                  value="techbayagency"
                />
                <div className="fields twoFields">
                  <input type="text" id="name" name="name" placeholder="Name" required />
                  <input type="email" id="email" name="email" placeholder="Email" required />
                  <input type="hidden" id="location" name="location" value="lahore" required />
                  <input type="hidden" name="websitePath" value={"https://techbay.co" + pagePath} />
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
                <div className="fields pt-1">
                  <button type="submit" id="submit" name="submit" >Get SEO Audit Report</button>
                </div>
                <div className="msg d-block text-left  pb-0">
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

          </div>
        </div>




        {/*  The First section    */}
        <div className="full-banner">
          <div className="container text-center">
            <div className="mb-4 mb-md-5">
              <img src={ImagePath + data.sub_header_image} alt="image" className="img-fluid" />
            </div>

            <h1 className="light">
             {data.header_title_english}
            </h1>
            <div className="zIndex-11  mt-4 mt-md-5">
              <div className="row d-flex flex-row justify-content-center">
                <form onSubmit={formpopupReport} style={{ display: "contents" }} className="p-relative ">
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
     
          </div>

        </div>



      </div>



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
              .formPopup-report .msg{
                font-weight:500;
                font-family:'Roboto', sans-serif;
              }
              #report-url{
                padding-top: 25px;
                padding-bottom: 25px;
                font-size: 21px;
              }
              button.view-report{
                padding: 10px 40px;
                cursor: pointer;
                font-size:21px;
                position: relative;
                z-index:11;
              }

@media only screen and (max-width: 670px){

  .formPopup-report .formInner {
    width: 96%;
    padding: 20px;
    top: 25%;
    margin-top: 0px;
    margin-left: 0px;
    left: 2%;
}
.formPopup-speed .formInner {
  width: 96%;
  padding: 20px;
  top: 25%;
  margin-top: 0px;
  margin-left: 0px;
  left: 2%;
}
}

              #basic-addon1{
                font-size: 21px;
              }
              .footers{
                background: #f1f1f1 !important;
              }

            .full-banner{
                display: flex;
                position: relative;
                flex-direction: column;
                justify-content: center;
                background-color: grey;
                height: calc(100vh);
                background-image: url(${ImagePath + data.header_bg_image});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                font-family: 'Roboto', sans-serif;
            }
        
            
            .full-banner h1.light{
                color: #fff;
                text-transform: uppercase;
                text-align: center;
                font-size: 3rem;
                font-weight: 600;
                line-height: .9;
            }
            
            .full-banner h1.dark{
                color: #212121;
                text-transform: uppercase;
                text-align: center;
                font-size: 4rem;
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
            .formPopup-speed .msg{
              font-weight:500;
              font-family:'Roboto', sans-serif;
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

export default  ReportLandingPage;