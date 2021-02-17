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

const ReportCTATwo = () => {
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
  
    <link rel="canonical" href= "https://techbay.agency/web-designing-services"/>
  </Head>
            <Headerfive/>
            
            {/*  The First section    */}
            <AdvertisementPopup type = "branding" /> 
            <SuccessDisplay />
            <div className = "main-div">
      <ReportCardFooterCTA
category = "branding"
  imgAddress = "/svg-pic/web/cro/14rules.svg"
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
 Branding isn’t an easy job to do. Some assume that it’s just slapping a logo onto a product and calling it a day, but so much more goes into creating a brand. 
 </p>
 <p className="paragraph">
 A brand is a company or a person’s personality made marketable and/or tangible. When you create a new business and need to work on branding, you’re crafting a very human aspect of a business and then figuring out how that human aspect appeals to an audience.
 </p>
 <p className="paragraph">
 Branding takes experience to truly get right, new entrepreneurs can easily fall into brand marketing traps and make rookie mistakes. Even seasoned entrepreneurs can easily make branding mistakes, so how can newbies avoid these pratfalls?
 </p>
<p className="paragraph mb-5">
Well, the key to avoiding mistakes is knowing what they are. While branding holds a lot of mistakes specific to the brand in question, there are a variety of general mistakes that you should know about and avoid.
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
export default ReportCTATwo;