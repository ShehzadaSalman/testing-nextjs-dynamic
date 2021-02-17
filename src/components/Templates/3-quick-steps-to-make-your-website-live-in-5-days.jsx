import Head from 'next/head';
import PageBanner from '../components/NewComponents/PageBanner/PageBanner';
import ButtonStyleOne from '../components/NewComponents/Buttons/buttonStyleOne.jsx';
import ThumbnailOne from '../components/NewComponents/ThumbnailOne';
import Footer from '../components/Footer'
import ButtonStyleTwo from '../components/NewComponents/Buttons/buttonStyleTwo';
import ButtonStyleThree from '../components/NewComponents/Buttons/buttonStyleThree';
import BgContentDiv from '../components/NewComponents/BContentDiv';
import DevelopmentForm from '../components/NewComponents/DevelopmentForm';
import SuccessDisplay from '../components/NewComponents/successdisplay';
import Headerfive from '../components/HeaderFive';
import {PopupText} from 'react-calendly';
import ReportCardFooterCTA from '../components/NewComponents/ReportCardFooterCTA';
import AdvertisementPopup from '../components/NewComponents/AdvertisementCTAForm';

const ReportCTAOne = () => {
  // open the development form
const openDevelopmentForm = () => {
  let form = document.querySelector(".formPopup");
   form.style.display = 'block';
 }
    return (
        <React.Fragment>
              <Head>
    <title> 
      Techbay Solutions
    </title>
    <meta name="robots" content="noindex"/>
    <meta
      name="description"
      content=""
      />
  </Head>
            <Headerfive/>
            
            {/*  The First section    */}
 
            <SuccessDisplay />
            <div className = "main-div">
    <AdvertisementPopup type = "development" />
      <ReportCardFooterCTA
category = "development"
  imgAddress = "images/web/3dapp/3d-book.png"
  title = "INSIDER TRADE-SECRETS THAT WILL OPEN THE FLOODGATES TO FREE WEBSITE TRAFFIC"
   caption = "This FREE Report reveals the most powerful trade secrets
for boosting your organic rankings and opening the
floodgates to organic traffic. Get for free what others have
paid $1000’s to receive."
  btntext = "GET MY FREE REPORT"
   />

<div className = "pt-5 pb-5 bottom-wave-bg">
  <div className="container">
    <p className="paragraph">
    Many people plan to develop a website but then change their minds because they find it difficult although it is as easy as to bake a cake. It usually comes down to your business needs and personal preferences that will influence your choice between a website template and custom web design. Should you go for a custom web design or a website template? We understand taking every decision can be difficult. Remember, everyone struggles a bit to build their first website and most struggle while building their first few. You will get better, the more that you practice.
    </p>
    <p className="paragraph mb-5">
    If you’re getting frustrated with something, take a deep breath, relax for a minute, find a solution. If you stick to the tips mentioned in this guide you can develop your dream web-based project in no time. Don’t give up, get working! 
    </p>

  </div>
</div>



      <Footer/>
  
    <style>
      {`
        html{
          overflow-y: auto;
        }
        .formPopup-speed .msg{
          font-weight:500;
          font-family:'Roboto', sans-serif;
        }
      `}
    </style>

    
            </div>

        </React.Fragment>
    );
}
export default ReportCTAOne;