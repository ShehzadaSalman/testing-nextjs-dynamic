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


// 
const ReportCTAThree = () => {
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
  
    {/* <link rel="canonical" href= "https://techbay.agency/web-designing-services"/> */}
  </Head>
            <Headerfive/>
            
            {/*  The First section    */}
            <AdvertisementPopup type = "marketing" />
            <SuccessDisplay />
            <div className = "main-div">
      <ReportCardFooterCTA
category = "marketing"
  imgAddress = "images/web/video-production/6tactics.png"
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
    It’s time to pack away your old and overused marketing strategies and get ready for the influx of new tactics that come along the changing world. Social media marketing is a vital ingredient for the success of any business! Do you know where to begin with your strategy?
    </p>
    <p className="paragraph">
    Since social media and the way people use it is ever-evolving, it’s important for businesses to evolve with it. Using outdated or irrelevant social media tactics will result in your marketing efforts being left behind by mid-2021.
    </p>
    <p className="paragraph">
    Therefore, stay ahead of the curve and get ready to adapt to the changing of times with some highly useful social media tactics shared by top social media experts.
    </p>
    <p className="paragraph mb-5">
      <strong>
      Remember: “When you force people to act a certain way in social media that almost never works”
      </strong>
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
export default ReportCTAThree;