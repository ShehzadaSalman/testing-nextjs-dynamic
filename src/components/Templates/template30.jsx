import PageBanner from '../NewComponents/PageBanner/PageBanner';
import Container from '@material-ui/core/Container';
import { Box, Grid, Button } from '@material-ui/core';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailOne from '../NewComponents/ThumbnailOne';
import ListItemTwo from '../NewComponents/ListItemTwo';
import BrandingForm from '../NewComponents/BrandingForm';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import {PopupText} from 'react-calendly';
import { useRouter } from 'next/router';
const ContentCreation = () => { 
  // open the branding form
 const openBrandingForm = () => {
  let form = document.querySelector(".formPopup-branding");
   form.style.display = 'block';
 }
 const openMarketingForm = () => {
  let form = document.querySelector(".formPopup-branding");
   form.style.display = 'block';
 }
 const router = useRouter();
 console.log(router.pathname);
 var pageurl = "https://techbay.co"+router.pathname;
  
  return(
  <React.Fragment>

 
<div className = "main-content">
    
  
{/*  The First section    */}
      <PageBanner
      category = "marketing"
       heading = "CONTENT FOR MARKETING"
       paragraph = "Get the content that navigates, engages, and compels!"
       bg = "/images/web/contentmarketing/content-marketing-dark.png"
       buttontext = "Get Started Today"
       wavename = "wave2-light.png"
        ></PageBanner>
  <SuccessDisplay/>

{/*  The second section    */}
        <div className = "bg-white padding-bottom-30">
        <Container>
       <div className = "padding-top-20"></div>
       <div className = "padding-top-20"></div>
       <h2 className = "heading padding-bottom-10">WE CREATE CONTENT THAT CONVERTS</h2>
       <p className = "paragraph">Your website’s content is the foundation on which customer engagement and the edifice of your digital marketing stands on. Techbay Solutions being a copywriting agency itself perceives content as the bedrock of digital marketing strategies. We have content experts with great intellect to articulate your business vision, mission, and goals into words that leave a powerful impact on your audience and the Google crawlers simultaneously. Techbay Solutions being a copywriting agency focuses on bringing the highest ROIs through sales-generating, attention-grabbing, and SEO-optimized content.</p>
       </Container>
       <div className = "margin-top-20"></div>
       <div className = "margin-top-20"></div>
       <div className = "text-center">
         <div className = "margin-top-20"></div>
       </div>
      </div>
{/*  The Third section    */}
<BgContentDiv bg = "/images/web/contentcreation/contentcreation-banner-two.png">
  <Container>

  <Grid container spacing = {1} className = "justify-center">

   <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/article.png" title  = "Article & Blog Posts"></ThumbnailOne>  </Grid>
   {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/resume.png" title  = "Resume Writing"></ThumbnailOne>  </Grid> */}
   <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/proofread.png" title  = "Proof Reading & Editing"></ThumbnailOne>  </Grid>
   {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/technical.png" title  = "Technical Writing"></ThumbnailOne>  </Grid> */}
   <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/proofreadandediting.png" title  = "Promotional Content"></ThumbnailOne>  </Grid>
   {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/linkedin.png" title  = "LinkedIn Profiles"></ThumbnailOne>  </Grid> */}
   {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/whitepaper.png" title  = "White Paper"></ThumbnailOne>  </Grid> */}
   <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/ux.png" title  = "UX Writing"></ThumbnailOne>  </Grid>
   {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/podcast.png" title  = "Podcast Writing"></ThumbnailOne>  </Grid> */}
   <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/casestudy.png" title  = "Case Studies"></ThumbnailOne>  </Grid>
   {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/grant.png" title  = "Grant Writing"></ThumbnailOne>  </Grid> */}
   {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/socialmediacopy.png" title  = "Social Media Copy"></ThumbnailOne>  </Grid> */}
   {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/salescopy.png" title  = "Sales Copy"></ThumbnailOne>  </Grid> */}

     <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/pressrelease.png" title  = "Press Release"></ThumbnailOne>  </Grid>
     {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/ebook.png" title  = "E-book Writing"></ThumbnailOne>  </Grid> */}
     {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/guide.png" title  = "Guide Writing"></ThumbnailOne>  </Grid> */}
     {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/webinar.png" title  = "Webinar"></ThumbnailOne>  </Grid> */}
     <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/website-content.png" title  = "Website Content"></ThumbnailOne>  </Grid>
     <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/Email.png" title  = "Email Copy"></ThumbnailOne>  </Grid>
     {/* <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/speech.png" title  = "Speech Writing"></ThumbnailOne>  </Grid> */}
     <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/creative-writing.png" title  = "Creative Writing"></ThumbnailOne>  </Grid>
     <Grid  xs = {6} md = {2} item><ThumbnailOne imgAddress  = "images/web/contentcreation/video-content.png" title  = "Video Content"></ThumbnailOne>  </Grid>

  </Grid>
  <div className="text-center mt-5">
  {/* <a onClick = {openMarketingForm}>
    <ButtonStyleTwo title = "Contact Subject Matter Experts!"></ButtonStyleTwo>
    </a> */}

    <span className = "meeting-button-light mb-3" style = {{ }}> 
<PopupText
  pageSettings={{
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }}
  styles={{}}
  text="Contact Subject Matter Experts"
  url="https://calendly.com/hashim-6/30min"  
  />
</span>

 <div className="mt-2 mb-2">
   
 </div>

  </div>
  </Container>
 
</BgContentDiv>

{/*  The Fourth section    */}
<div id = "" className  = "wave-layer-bg">
<Container>
  <div className = "padding-top-40"></div>
  <div className = "padding-top-20"></div>
<h2 className = "heading">ORGANIZED AND AGILE {'\n'} CONTENT FRAMEWORK </h2>
<p className = "paragraph">Content is not just some words written together. Content is a structured layout that describes your brand’s agenda in a convertible manner. It is a selling pitch that guides. An efficacious content demands in-depth research of your business, as well as the market of your business, and our copywriting services  mastered this aspect experientially. Constructing content frameworks covering all the bits of your business in a scalable manner is what you will get from our copywriting services in Dubai.</p>
  <div className = "padding-top-40"></div>
</Container>
</div>

{/*  The Fifth section    */}
<BgContentDiv bg = "/images/web/contentcreation/contentcreation-banner-three.png">
<Container>
  <h2 className = "white-heading pt-3">NO FLUFF! NO FILLER - JUST ENGAGING CONTENT</h2>
  <div className = "padding-top-20"></div>
  <div className = "text-center">
    <a onClick = {openMarketingForm}>
    <ButtonStyleTwo title = "Contact Now!"></ButtonStyleTwo>
    </a>
  </div>

</Container>
</BgContentDiv>

{/*  The Sixth section    */}

<div className = "bg-grey">
<Container>
<div className ="padding-top-50"></div>
<h1 className = "left-heading">OUR CONTENT CREATION PROCESS IS {'\n'} STRUCTURED YET CONTEMPORARY</h1>
<p className = "left-paragraph">We combine the creative power of in-house writers, designers, and videographers to create power-packed blogs and videos for your targeted audience. Our seo copywriting services involve  step by step planning and executing.</p>
<div className = "padding-top-20"></div>
<ListItemTwo title = "Content Objective" description = "content planning based on the objectives of your brand."></ListItemTwo>
<ListItemTwo title = "Analyze Buyer Persona" description = "an in-depth analysis of the buyer persona whether they are in the awareness, consideration or decision stage of their buying journey."></ListItemTwo>
<ListItemTwo title = "Outline of Content" description = "preparing an outline of the content considering the main points of your audience."></ListItemTwo>
<ListItemTwo title = "First Draft Edit" description = "checking grammatical errors, fact-checking, wordsmithing, and story gaps."></ListItemTwo>
<ListItemTwo title = "Design & Formatting" description = "converting your content into high-quality designs (creative+ engaging) and clean visuals."></ListItemTwo>
<ListItemTwo title = "Final Draft" description = "optimization of your content for search engines with keywords research by our SEO specialists."></ListItemTwo>
<ListItemTwo title = "Review System" description = " measuring the content accuracy and alignment with your company brand."></ListItemTwo>
<div className = "text-center padding-top-30 padding-bottom-50">
  <a onClick = {openMarketingForm} >
    <ButtonStyleOne title = "Explore Our Website Copywriting Services"></ButtonStyleOne>
  </a>
</div>
</Container>
<div className="pb-5">

</div>
</div>

{/*  The Sixth section    */}





</div>

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


 
    <style>
      {`
        html{
          overflow-y: auto;
        }
        .contentcreation-circularimg{
           max-width: 100%;
        }


        `}
      </style>


    </React.Fragment>
  );
  }
  export default ContentCreation;
