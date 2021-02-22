import { Component } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Slider from 'react-slick';
// const Slider = dynamic(() => import('react-slick'), { ssr: true });
import Layout from '../components/Layout';
import Sphere from '../components/Slides/Sphere';
import { UserConsumer } from '../ContextApi/usercontext';
import Link from 'next/link';
import intlTelInput from 'intl-tel-input';
import BrandingForm from '../components/NewComponents/BrandingForm';
const BrandingSlide = dynamic(() => import('../components/Slides/Branding'), { ssr: false });
const DiscoverSlide = dynamic(() => import('../components/Slides/Discover'), { ssr: false });
const WebDevelopment = dynamic(() => import('../components/Slides/WebDevelopment'), { ssr: false });
const DigitalMarketing = dynamic(() => import('../components/Slides/DigitalMarketing'), {ssr: false,});
const tawkTo = require("tawkto-react");
const ContactUs = dynamic(() => import('../components/Slides/ContactUs'), { ssr: false });
import ButtonStyleThree from '../components/NewComponents/Buttons/buttonStyleThree';
import axios from 'axios';
import $ from 'jquery'

let websitePath;
const tawkToPropertyId = '5f3132f1ed9d9d2627099312';


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 1,
      website: '',
      arrows: true,
      data: this.props.finalData,
    };
     this.handleSliderChange = this.handleSliderChange.bind(this);
  }











  componentDidMount() {
/* testing if we're gettig the data */
websitePath = window.location.href;
websitePath = websitePath.toString();
this.bindArrowKeys();
    tawkTo(tawkToPropertyId);
    const inputs = document.querySelector("#phone-speed");
    intlTelInput(inputs, {
      separateDialCode: true,
      initialCountry: 'AE'
    });

    this.next();

    const inputr = document.querySelector("#phone-report");
    intlTelInput(inputr, {
      separateDialCode: true,
      initialCountry: 'AE'
    });

  }
  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }
toggleArrows(val) {
    this.setState({ arrows: val });
  }
  goToSlide = (index) => {
    this.slider.slickGoTo(index);
  };
  handleSlideChange = (id, val) => {
    this.setState({
      [id]: val
    })
    if (this.state.activeSlide === 0) {

      this.next();

    } else if (this.state.activeSlide === 1) {
      if (val === 'left') {
        this.next();
      } else if (val === 'right') {
        this.previous();
      }

    }

    else if (this.state.activeSlide === 2) {
      if (val === 'left') {
        this.next();
      } else if (val === 'right') {
        this.previous();
      }
    }
    else if (this.state.activeSlide === 3) {
      if (val === 'left') {
        this.next();
      } else if (val === 'right') {
        this.previous();
      }
    }
    else if (this.state.activeSlide === 4) {
      if (val === 'left') {
        this.next();
      } else if (val === 'right') {
        this.previous();
      }
    }
    else if (this.state.activeSlide === 5) {
      if (val === 'left') {
        this.next();
      } else if (val === 'right') {
        this.previous();
      }
    }
  }
  handleSliderChange() {
    if (this.state.activeSlide === 0 && this.state.activeSphereTab === 1) {
      this.setState({
        activeSphereTab: 2,
      });
    }
  }
  bindArrowKeys = () => {
    let th = this;
    document.addEventListener('keydown', function (e) {
      if (!th.state.loading) {
        if (e.key == 37) {
          console.log("the left click");
          e.stopPropagation();
          console.log("slide right here")
        }
        if (e.key == 39) {
          console.log("the right click");
          e.stopPropagation();
          console.log("slide left here");
        }
      }
    });

    document.addEventListener('keypress', function (e) {
      if (!th.state.loading) {
        if (e.key == 37) {
          console.log("the left click");
          e.stopPropagation();
          console.log("slide right here")
        }
        if (e.key == 39) {
          console.log("the right click");
          e.stopPropagation();
          console.log("slide left here");
        }
      }
    });






  }
  closeVideo = () => {
    console.log("closing the video here")
    $(".videoWraps").fadeOut();
    $("#videos").remove();
  }
  formSubmitSpeed = (event) => {
    console.log("are we submitting the form here");
    event.preventDefault();
    let service = event.target.querySelector('#serviceName').value;
    let websiteURL = event.target.querySelector('#website_url').value;
    let newURL = websiteURL;
    let finalURLLInk = event.target.querySelector("#website_url").value = newURL;
    console.log(finalURLLInk);
    console.log('final url link comes  here');
    var countryCode = event.target.querySelector(".iti__flag-container .iti__selected-flag .iti__selected-dial-code").innerHTML;
    // event.target.querySelector("#formPopup-branding .formInner #services3 #countryCode").value = countryCode;
    console.log(`Country Code: ${countryCode}`);
    console.log(countryCode);
    event.target.querySelector("#countryCode").value = countryCode;


    var finalurl = 'https://staging.techbay.co/api/get-website-optimization-report';

    console.log($("#services6").serialize());

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
          console.log("we successfully submitted the speed form here..yahhooooo");
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
  formSubmitReport = (event) => {
    console.log("are we submitting the report form here");
    event.preventDefault();
    let service = event.target.querySelector('#serviceName').value;
    let websiteURL = event.target.querySelector('#website_url').value;
    let newURL = websiteURL;
    let finalURLLInk = event.target.querySelector("#website_url").value = newURL;
    console.log(finalURLLInk);
    console.log('final url link comes  here');

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
          console.log("we successfully submitted the Report form hrer in the report functionnnnn");
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
  avoidCloseFormPopup = (event) => {
    event.stopPropagation();
    console.log("do not close the popup as we are inside the form");
  }
  closeFormPopup = () => {
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


  /*  managing the swipe functionality  */
  touchEventfunc = () => {
    $("#main-div-touch").on("swipe", function () {
      console.log("the swipe event was triggered");
    });
  }


  render() {
    const settings = {
      accessibility: true,
      dots: false,
      infinite: false,
      swipeToSlide: false,
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchMove: false,
      arrows: false,
      fade: true,
      cssEase: 'rotate',
      draggable: false,
      adaptiveHeight: true,
      beforeChange: (current, next) => {
        this.setState({ activeSlide: next });
      },
    };

    return (
      <Layout>
        <Head>
          <title>
            Digital Marketing Agency | SEO, PPC, SMM, Web Development
          </title>
          <meta
            name="description"
            content="Techbay Solutions is one of the leading Digital Marketing Agency, which provides SEO, PPC, SMM, Web &amp; App Design &amp; Development Services. Get a quote"
          />
          <meta name="keywords" content="Digital Marketing Agency" />
          <link rel="canonical" href="https://techbay.co" />


        </Head>

        <div id="videoWraps" className="videoWraps" onClick={this.closeVideo} >
          <a onClick={this.closeVideo} href="#"><i className="fa fa-times"></i></a>
        </div>
        <div id="loader" className="span theme-loader  align-items-center jultify-content-center">
          <div className="typing_loader"></div>
        </div>




        {/* report form starts here */}
        <div className="formPopup-report" onClick={this.closeFormPopup}>
          <a onClick={this.closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
          <div className="formInner" onClick={this.avoidCloseFormPopup}>
            <form id="services7" onSubmit={this.formSubmitReport} encType="multipart/form-data">
              <input
                name="api_key"
                id="api_key"
                type="hidden"
                value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
              />
              <input type="hidden" name="websitePath" value="https://techbay.co/" />
              <input
                name="serviceName"
                id="serviceName"
                type="hidden"
                value="marketing"
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
              <a href="#" onClick={this.closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
              <i className="far fa-check-circle"></i>
              <h2>THANK YOU FOR CONTACTING US!</h2>
              <div className="check-seo-report">

                <UserConsumer>
                  {({ username }) => <Link href={"https://seopdf.techbay.co/" + username} ><a target="_blank"><ButtonStyleThree title="Check SEO Report" /></a></Link>}
                </UserConsumer>
              </div>


              <p>You will shortly receive your requested SEO audit report through email</p>
            </div>
            <div className="msg"></div>
          </div>
        </div>
        {/* speed form starts here */}
        <div className="formPopup-speed" onClick={this.closeFormPopup}>
          <a onClick={this.closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
          <div className="formInner" onClick={this.avoidCloseFormPopup}>
            <form id="services6" onSubmit={this.formSubmitSpeed} encType="multipart/form-data">
              <input
                name="api_key"
                id="api_key"
                type="hidden"
                value="d949f6d3c98adbb13c58a91793dc0b9d31e9ab39"
              />
              <input type="hidden" name="websitePath" value="https://techbay.co/" />
              <input
                name="serviceName"
                id="serviceName"
                type="hidden"
                value="marketing"
              />
              <div className="fields twoFields">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="fields">
                <input id="countryCode" type="hidden" name="countrycode" />
                <input type="text" id="phone-speed" name="phone" placeholder="Phone" required />
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
              <a href="#" onClick={this.closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
              <i className="far fa-check-circle"></i>
              <h2>THANK YOU FOR CONTACTING US!</h2>
              <p>You will receive an email shortly</p>
            </div>
            <div className="msg"></div>
          </div>
        </div>

        {/* the success message popup */}
        <div className="formPopup-success" onClick={this.closeFormPopup}>
          <a onClick={this.closeFormPopup} href="#" className="clsPopup"><i className="fa fa-times"></i></a>
          <div className="formInner-success" onClick={this.avoidCloseFormPopup}>
            <div className="messageBox d-block">
              <a href="#" onClick={this.closeFormPopup} className="closemsg"><i className="fa fa-times"></i></a>
              <i className="far fa-check-circle"></i>
              <h2>THANK YOU FOR CONTACTING US!</h2>
              <p>You will receive an email shortly</p>
            </div>
            <div className="msg"></div>
          </div>
        </div>

        <BrandingForm department="Branding"/>
       
        <div className="slider-slides-wrapper">
          <div id="main-div-touch">

            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <Sphere
                slideId={0}
                activeSlide={this.state.activeSlide}
                activeSphereTab={this.state.activeSphereTab}
                handleSlideChange={() => this.handleSliderChange()}
                discoverSlide={() => this.discoverSlide()}
              />
   

              <DiscoverSlide
                data = {this.props.finalData[0]}
                nextSlide={() => this.next()}
                prevSlide={() => this.previous()}
                activeSlide={this.state.activeSlide} slideId={1} brandingSlide={() => this.brandingSlide()} />

              <BrandingSlide
                data = {this.props.finalData[1]}
                nextSlide={() => this.next()}
                prevSlide={() => this.previous()}
                activeSlide={this.state.activeSlide} slideId={2} webSlide={() => this.webSlide()} />

              <WebDevelopment
                data = {this.props.finalData[2]}
                checkingmethod={() => this.checkingmethod()}
                nextSlide={() => this.next()}
                prevSlide={() => this.previous()}
                activeSlide={this.state.activeSlide} slideId={3} />

              <DigitalMarketing
                data = {this.props.finalData[3]}
                nextSlide={() => this.next()}
                prevSlide={() => this.previous()}
                activeSlide={this.state.activeSlide} slideId={4} />

             <ContactUs
                data = {this.props.finalData[5]}
                nextSlide={() => this.next()}
                prevSlide={() => this.previous()}
                activeSlide={this.state.activeSlide}
                slideId={5}
                toggleArrows={(val) => this.toggleArrows(val)}
              />
            </Slider>

          </div>

          <div className="slider-pagination d-inline-block m-auto desktop-view-arrow">
            {this.state.activeSlide === 5 && !this.state.arrows ? (
              ''
            ) : (
                <div className="slider-pagination-content d-flex flex-fill align-items-center justify-content-between vh-100">
                  <button
                    className={
                      'btn bnt-link slider-custom-arrow prev' +
                      (this.state.activeSlide === 1 ? ' event-disabled' : '')
                    }
                    onClick={this.previous}>
                    <img alt="Next arrow" src="/svg-pic/next.svg" className={this.state.activeSlide === 0 ? "next-arrow-indexpage d-none" : "next-arrow-indexpage d-block"} />
                  </button>
                  <button
                    className={
                      'btn bnt-link slider-custom-arrow next' +
                      (this.state.activeSlide === 5 ? ' event-disabled' : '')
                    }
                    onClick={this.next}>
                    <img src="/svg-pic/next.svg" alt="next arrow" className={this.state.activeSlide === 0 ? "next-arrow-indexpage-second d-none" : "next-arrow-indexpage-second d-block"} />
                  </button>
                </div>
              )}
          </div>
        </div>

        <div className="slide-footer xs-hidden menuNavMenu footsz ">
          <a href="/">
            <img src="/images/site-logo.svg" alt="Tech Bay Solution" />
          </a>
        </div>
        <style> {`
               .videoWraps .videos {
                width: 95%;
                height: 95%;
                left: 2%;
                top: 2%;
                margin: 0px;
                padding: 0px;
                border: 0px;
                overflow: hidden;
            }
        
        
        
        `}

        </style>


      </Layout>
    );
  }
}


export async function getStaticProps() {






  const result = axios.get('https://staging.techbay.co/api/get-sliders-with-content');
  const finalData =  (await result).data.response;
  const ImagePath = "https://staging.techbay.co//storage/app/";
  
  /////////////////////////fetching the footer menu
  let info = await  axios.get('https://staging.techbay.co/api/get-addresses');
  let finalCompanyInfoFooter = await  info.data.response;
  let footerData = finalCompanyInfoFooter;
  let infotwo = await  axios.get('https://staging.techbay.co/api/get-header-footer-content');
  let finalCompanyInfotwofooter = await  infotwo.data.response;
  let bottomFooter = finalCompanyInfoFooter; 
  
  
  
  return {
    props: {
      finalData,
      ImagePath,
    }, // will be passed to the page component as props
  }
}


