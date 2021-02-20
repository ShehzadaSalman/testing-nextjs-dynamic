
import PageBanner from '../NewComponents/PageBanner/PageBanner';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailOne from '../NewComponents/ThumbnailOne';
import ThumbnailTwo from '../NewComponents/ThumbnailTwo';
import BrandingForm from '../NewComponents/BrandingForm';
import DevelopmentForm from '../NewComponents/DevelopmentForm';
import MarketingForm from '../NewComponents/MarketingForm';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import { useRouter } from 'next/router';
const Retargeting = () => { 


// open marketing form 
const openMarketingForm = () => {
  let form = document.querySelector(".formPopup-branding");
  form.style.display = 'block';
} 

const router = useRouter();
console.log(router.pathname);
var pageurl = "https://techbay.co"+router.pathname;
  
  
return (
<React.Fragment>

  <div className = "main-content">
  <Headerfive/>
{/*  The First section    */}
      <PageBanner
      category = "marketing"
       heading = "Bring Back Potential Customers with Our Remarketing Services"
       paragraph = "On average, only 2% of your website visitors will convert into a solid lead. Don’t give up on the other 98%, who visit your site for the first time buying nothing, and then they’re lost forever. Convince and bring them back, send them hyper-targeted ads and email campaigns via remarketing services today! "
       bg = "/images/web/retargeting/ppc-dark.png"
       buttontext = "Explore Our Remarketing Agency"
       wavename = "wave2.png">
     </PageBanner>
     <SuccessDisplay />
     
  {/*  The second section    */}
    <div className = "bg-grey padding-bottom-30">
          <Container>
         <div className = "padding-top-20"></div>
         <div className = "padding-top-20"></div>
         <h2 className = "heading">INCREASE LEADS WITH {'\n'} REMARKETING CAMPAIGNS</h2>
         <p className = "paragraph">Through our remarketing campaigns, we can help you reconnect to the audience who previously interacted with your website. Our goal is to create a customized and compelling ad copy according to your business goals and to show it to those potential users who have visited your website before. This way, our tempting ads will increase your brand awareness, and leave a substantial impact on potential buyers, compel them to revisit your website and make a purchase. While there are various remarketing platforms you can invest in, we provide remarketing on the Google Display Ad Network and social media channels like LinkedIn, Facebook and Instagram. </p>
          
    <div className="text-center mt-4"> 
     <a onClick={openMarketingForm}>
     <p className="link-class">
          Target Potential Customers with Paid Search Remarketing !  
     </p>
     </a>
    </div>


         </Container>
         <div className = "margin-top-20"></div>

        </div>
        {/*  The Fifth section    */}
        <div className  = "upper-wave-bg">
        <Container>
          <div className = "padding-top-40"></div>
          <div className = "padding-top-20"></div>
        <h2 className = "heading">BUILD CUSTOMER LOYALTY</h2>
      <p className = "paragraph pb-4">
      With a re-targeted campaign, we’ll remind your visitors of your products/services they once saw on your website and left buying nothing. We target those who have already done business with your brand or have interacted via information collected with a cookie. 
      </p>
        <div className = "padding-top-20"></div>
        </Container>
        </div>
          {/*  The Sixth section    */}
      <div className = "bg-grey padding-top-30 padding-bottom-30">
       <h2 className = "heading text-uppercase pt-3">Why Choose Google {'\n'} Remarketing Agency?</h2>
       <div className = "padding-top-40"></div>
<Container>
<Grid container spacing = {4} className = "justify-center">
  <Grid xs = {6} sm = {4} md = {2} item>
    <ThumbnailTwo imgAddress = "images/web/retargeting/google-specialist.png" title = "Google Certified Specialist" />
  </Grid>
  <Grid xs = {6} sm = {4} md = {2} item>
    <ThumbnailTwo imgAddress = "images/web/retargeting/speaker.png" title = "Remarketing Experience that Results in Sales boost" />
  </Grid>
  <Grid xs = {6} sm = {4} md = {2} item>
    <ThumbnailTwo imgAddress = "images/web/retargeting/designkiller.png" title = "Killer Remarketing Ads copy"/>
  </Grid>
  <Grid xs = {6} sm = {4} md = {2} item>
    <ThumbnailTwo imgAddress = "images/web/retargeting/attention.png" title = "Attention from Minor to Major Growth Hacking Details"/>
  </Grid>
  <Grid xs = {6} sm = {4} md = {2} item>
    <ThumbnailTwo imgAddress = "images/web/retargeting/retention.png" title = "High Client Retention Rate" />
  </Grid>
  {/* <Grid xs = {6} sm = {4} md = {2} item>
    <ThumbnailTwo imgAddress = "images/web/retargeting/team.png" title = "A Team of Designer, Writer and Marketers" />
  </Grid> */}


</Grid>
</Container>
 <div className = "padding-top-50"></div>
<div className = "text-center">
 <a onClick = {openMarketingForm}>
 <ButtonStyleThree title = "Get In Touch"></ButtonStyleThree>
 </a> 

</div>
</div>

    {/*  The Sevent section    */}

    <div className  = "upper-wave-bg">
    <Container>
      <div className = "padding-top-40"></div>
      <div className = "padding-top-20"></div>
    <h2 className = "heading">WHAT WE OFFER </h2>
  <p className = "paragraph">
  The best thing about super-segmenting your audiences is that you can make hyper-relevant ads that talk to your audience. Hence, we’ll create relevancy between your ads and the audience. Whether you have a long-term business that already has a following, want to promote the top-selling products, introduce a new collection, or brand awareness to stay on top of the mind of your potential customers, with us you can achieve all. 
  </p>
  <p className = "paragraph pb-3">
  If you’re ready to get started on growing your business and making more online sales through remarketing, contact us today. 
  </p>
    <div className = "padding-top-20"></div>
    </Container>
    </div>

  {/*  The Eigth section    */}
  <BgContentDiv bg = "/images/web/retargeting/retargeting-banner-three.png">
    <Container>
    <Grid container spacing = {4} >
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "/images/web/retargeting/email.png" title = "Email Marketing" />
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/video.png" title = "Video Remarketing Campaigns" />
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/retarget.png" title = "Dynamic Remarketing" />
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/ad.png" title = "Google Remarketing Services for Ads" />
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/sale.png" title = "Cross-sell  or Up-sell to Existing Customers"/>
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/campaign.png" title = "Campaign Set up" />
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/campaign-development.png" title = "Campaign Development"/>
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/copywriting.png" title = "Campaign Copywriting" />
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/bid.png" title = "Strategic Bid Management" />
      </Grid>
      <Grid xs = {6} sm = {4} md = {2} item>
        <ThumbnailOne imgAddress = "images/web/retargeting/monthly.png" title = "Monthly Performance Reporting"/>
      </Grid>
    </Grid>


    <div className = "text-center padding-top-40 padding-bottom-20">
      <a onClick = {openMarketingForm}>
      <ButtonStyleTwo title = "Help Me Generate Sales"/>
      </a>
    </div>


    </Container>
  </BgContentDiv>
  <div className="padding-top-50 padding-bottom-30"></div>
  <ReportCardFooter
  category = "marketing"
  imgAddress = "images/web/video-production/6tactics.png"
  title = "INSIDER TRADE-SECRETS THAT WILL OPEN THE FLOODGATES TO FREE WEBSITE TRAFFIC"
   caption = "This FREE Report reveals the most powerful trade secrets
for boosting your organic rankings and opening the
floodgates to organic traffic. Get for free what others have
paid $1000’s to receive."
  btntext = "GET MY FREE REPORT"
   /> 


  </div>
<style>{`
  body{
    overflow:inherit;
  }
  .upper-wave-bg{
    background-image: url('images/web/upper-wave-blue.png');
    background-repeat: no-repeat;
  }
  .justify-center{
    justify-content: center;
  }

        `}

</style>
</React.Fragment>
)
}
export default Retargeting;
