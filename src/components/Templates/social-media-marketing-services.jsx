import Head from 'next/head';
import PageBanner from '../components/NewComponents/PageBanner/PageBanner';
import Container from '@material-ui/core/Container';
import ButtonStyleThree from '../components/NewComponents/Buttons/buttonStyleThree.jsx';
import ButtonStyleOne from '../components/NewComponents/Buttons/buttonStyleOne';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer'
import Headertwo from '../components/Headertwo';
import NewTermsOfServices from '../components/NewComponents/NewTermsOfService';
import ListItemSix from '../components/NewComponents/listItemSix'
import SuccessDisplay from '../components/NewComponents/successdisplay';
import Headerthree from '../components/HeaderThree';
import Headerfive from '../components/HeaderFive';
import ReportCardFooter from '../components/NewComponents/ReportCardFooter';
import BgContentDiv from '../components/NewComponents/BContentDiv';
import ButtonStyleTwo from '../components/NewComponents/Buttons/buttonStyleTwo';
import { useRouter } from 'next/router';
import Link from 'next/link';
function SMMPAGE() {
  const openMarketingForm = () => {
    let form = document.querySelector(".formPopup-branding");
    form.style.display = 'block';
  } 
  const router = useRouter();
  console.log(router.pathname);
  var pageurl = "https://techbay.co"+router.pathname;
  return (
    <React.Fragment>
      <Head>
        <title> Social Media Marketing Company in Dubai|SMM Services|Techbay 
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content=" Gather all your potential leads and make them your permanent clients with the modernized SMM services of Techbay Social Media Marketing Company in Dubai. "
        />
      <link rel="canonical" href= "https://techbay.co/social-media-marketing-services"/>
         {/* <link href="/css/newstyle.css" rel="stylesheet"/> */}
      </Head>
      <div className="Content-div">
  <Headerfive/>
        {/*  the first section  */}
        <PageBanner
          category = "marketing"
          heading="Let’s Set Trends!"
          paragraph="Love it or hate it, social media has become one of the fastest-growing cultural pillars, and it is the first place where people go when creating and sharing content, sourcing news and much more."
          bg="/images/web/smm/smm-bannerone.png"
          wavename="wave2.png"
        ></PageBanner>
        <SuccessDisplay />

        {/*  the second  section  */}
        <div className="bg-grey padding-top-30 padding-bottom-40">
          <Container>
            <h2 className="heading text-uppercase">Broadcast Your Business {'\n'} on Social Platforms</h2>
            <p className="paragraph">
            Is your business socially competitive? If not, then regain the momentum with professional social media marketing services. Get dedicated account strategist, business page creation, content production, social media post creation, publishing, popular post-boost, dynamic creative ads, and animated video posts to generate more convertible leads in the shortest possible time. 
            {/* <h2 className = "heading padding-top-30">BEST SOCIAL MEDIA {'\n'} PACKAGES OF ALL-TIME</h2>  
         */}
         </p> 
          </Container>



        </div>


        {/*   the fourth section  */ }
        <div className="wave-upper-3 padding-bottom-30">
          <Container>
            <h2 className="heading padding-top-30 text-uppercase">What To Expect From Our {'\n'} Social Media Marketing Company in Dubai</h2>
            <p className="paragraph mb-4">
            Want better Facebook and Instagram ad results? Our team of specialists keeps up-to-date with the latest social trends, and we offer a full range of Social Media Services. From original posts to custom graphics and ad campaigns, we cover it all on different social media channels. 
            </p>
            <div className = "text-center mb-5">
        <a onClick = {openMarketingForm}>
        <ButtonStyleThree title = " Our SMM Services"/> 
        </a>
      </div>
          <div className="row">
            <div className="col-md-3 px-1 mb-4">
                <div className="smm-thumbnail text-center">
                   <img src="/images/web/smm/campaign1.png"  alt = "social campaign"  />
                   <div className="caption">
                    <p>Social Campaign Planning</p> 
                   </div>
                </div>
            </div>
            <div className="col-md-3 px-1 mb-4">
            <div className="smm-thumbnail text-center">
                   <img src="/images/web/smm/campaign4.png"  alt = "social campaign"  />
                   <div className="caption">
                      <p>Campaign Content Creation</p> 
                   </div>
                </div>
              </div>
              <div className="col-md-3 px-1 mb-4">
              <div className="smm-thumbnail text-center">
                   <img src="/images/web/smm/campagin2.png"  alt = "social campaign"  />
                   <div className="caption">
                    <p>
                      Audience Growth Strategies
                    </p> 
                   </div>
                </div>
              </div>
              <div className="col-md-3 px-1 mb-4">
              <div className="smm-thumbnail text-center">
                   <img src="/images/web/smm/campagin3.png"  alt = "social campaign"  />
                   <div className="caption">
                    <p>Reporting and Analysis</p> 
                   </div>
                </div>
              </div>
          </div>


          </Container>
        </div>
        
        {/* the fifth section  */}
        <div className = " mb-1">
         <div className="container">
           <div className="row">
             <div className="col-md-6 mb-4">
               <div className="smm-casestudy text-center">
                  <img src = "/images/web/smm/casestudy.png" alt = "case study" className = "img-fluid" />
                  <div className="caption">
                    <p className = "paragraph">RentMyRide CaseStudy</p>
                    <a download="/rentmyride.pdf" href="/rentmyride.pdf">Download</a>
                  </div> 
               </div>

             </div>
             <div className="col-md-6 mb-4">
             <div className="smm-casestudy text-center">
                  <img src = "/images/web/smm/Fixahome-Case-Study.png" alt = "case study" className = "img-fluid" />
                  <div className="caption">
                    <p className = "paragraph">Fix a Home CaseStudy</p>
                    <a download="/Fixahome.pdf" href="/Fixahome.pdf">Download</a>
                  </div> 
               </div>
               </div>
           </div>
        
        <div className="text-center mt-4 mb-4">
          <Link href="case-studies">
            <a>
              <ButtonStyleOne title="Explore Our Work" />
            </a>
          </Link>
        </div>
        
        
         </div>
        </div>


   <div>
   <img src = "/images/web/smm/smm-section-wave.png" alt = "wave" className = "img-fluid" />
 
  <div className = " grey-bg"> 

 <div className="container pt-3">
   <h2 className="heading text-uppercase">
   Which Social Platforms {'\n'}
Are Best For Your Brand Marketing?
   </h2>
   <p className="paragraph mb-5">
   Not all social platforms are equally beneficial when it comes to advertising different brands. Therefore, our strategy for successful campaigns includes prioritizing the social mediums based on your brand and product, then implementing a dedicated plan for each platform. 
   </p>

<div className="row mt-3 pb-5">
  <div className="col-0 col-md-1"></div>
  <div className="col-md-2 col-6">
    <div className="social-div d-flex justify-content-center align-items-center align-content-center">
   <img src = "/images/web/smm/youtube.png" className = "img-fluid" alt = "social" />
    </div>
  </div>
  <div className="col-md-2 col-6">
    <div className="social-div d-flex justify-content-center align-items-center align-content-center">
   <img src = "/images/web/smm/twitter.png" className = "img-fluid" alt = "social" />
    </div>
  </div>
  <div className="col-md-2 col-6">
    <div className="social-div d-flex justify-content-center align-items-center align-content-center">
   <img src = "/images/web/smm/facebook.png" className = "img-fluid" alt = "social" />
    </div>
  </div>
  <div className="col-md-2 col-6">
    <div className="social-div d-flex justify-content-center align-items-center align-content-center">
   <img src = "/images/web/smm/linkedin.png" className = "img-fluid" alt = "social" />
    </div>
  </div>
  <div className="col-md-2 col-6">
    <div className="social-div d-flex justify-content-center align-items-center align-content-center">
   <img src = "/images/web/smm/insta.png" className = "img-fluid" alt = "social" />
    </div>
  </div>
</div>


 </div>
   </div>



  
  </div>   


<BgContentDiv  bg = "/images/web/smm/smm-banner-three.png">
   <div className="container">
      <h2 className="white-heading mb-4 mt-2 text-uppercase">
       Benefits of Working with Our {'\n'} Social Media Marketing Agency
      </h2>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-5">
          <ListItemSix dark imgAddress = "images/web/smm/money.png"  description = "Increase The Customer Average Order Value (AOV)" />

          </div>
          <div className="mb-5">
        <ListItemSix dark imgAddress = "images/web/smm/accounting.png"  description = "Dedicated Account Manager" />
            
            </div>
            <div className="mb-5">
        <ListItemSix dark imgAddress = "images/web/smm/moneydown.png"  description = "Low CPA (Cost Per Acquisition)"/>
            
            </div>
            <div className="mb-5">
        <ListItemSix dark imgAddress = "images/web/smm/roi.png"  description = "Guaranteed ROI " />
            
            </div>
  
        
        </div>
        <div className="col-md-6">
        <div className="mb-5">
        <ListItemSix dark  imgAddress = "images/web/smm/budget.png"  description = "Sell more products within the same budget" />
            
            </div>
            <div className="mb-5">
        <ListItemSix dark imgAddress = "images/web/smm/research.png"  description = "In-depth Competitor Analysis " />
            
            </div>
            <div className="mb-5">
        <ListItemSix dark imgAddress = "images/web/smm/planning.png"  description = "Custom data-driven strategy" />
            
            </div>
        <div className = "pb-4 pt-4 pt-sm-0">
      <a onClick = {openMarketingForm}>
        <ButtonStyleTwo title = "I Need Help!" />
      </a>
    </div>
          </div>

      </div>
   </div>

</BgContentDiv>



{/*  the sixth section  */}

{/* the seventh section  */}
<div className="bg-white padding-top-40 padding-bottom-30">
    <Container>
      <h2 className="heading padding-bottom-20 padding-top-30">WHY YOU NEED A SOCIAL MEDIA {'\n'} PROMOTION COMPANY ?</h2>
      <p className = "paragraph">
      When it comes to social media, you should not put all your eggs in one basket. You must have an effective SMM strategy on more than one social media network. 

      </p>
    
      <p className = "paragraph">
      Doesn’t it sound time-consuming? Yes, only if you do it yourself. That is why you need a Social Media Marketing Agency in Dubai.
      Our social media promotion service has a proven track record of helping businesses achieve their social media marketing goals.   
      </p>
      <div className = "text-center padding-top-30">
        <a onClick = {openMarketingForm}>
        <ButtonStyleThree title = " Explore Our Social Media Marketing Company in Dubai"/> 
        </a>
      </div>
    </Container>
 </div>
 <div className="padding-bottom-50 padding-top-30"></div>
 <ReportCardFooter
category = "marketing"
  imgAddress = "images/web/video-production/6tactics-small.png"
  title = "INSIDER TRADE-SECRETS THAT WILL OPEN THE FLOODGATES TO FREE WEBSITE TRAFFIC"
   caption = "This FREE Report reveals the most powerful trade secrets
for boosting your organic rankings and opening the
floodgates to organic traffic. Get for free what others have
paid $1000’s to receive."
  btntext = "GET MY FREE REPORT"
   />

      <Footer />
      
      </div>{' '}
      {/* Content div ends here */}
      <style>
   {`
   
   html{
    overflow-y: auto;
  }
  .justify-center{
    justify-content: center;
  }
   
   `}
      </style>
      <style jsx>
        {`
        
        .smm-banner-two{
          background-image:  url('images/web/smm/smm-banner-two.png');
          background-position: center;
          background-size: cover;
          background-color: grey;
        }
        .wave-layer-bg-slides{
          padding-top: 30px;
        }
        .wave-upper-3{
          padding-top: 35px;
        }
        .smm-thumbnail .caption{
          background-color: rgba(181, 211, 229, 0.15);
          padding-top: 40px;
          padding-bottom: 15px;
          display: flex;
          position: relative;
          margin-top: -31px;
          justify-content:center;
          align-items: center;
          align-content: center;

        }
        .smm-thumbnail .caption p{
          margin: 0;
          color:  #1B1818;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .smm-casestudy{
         background-color: #F4F9FB;
        }
        .smm-casestudy   img{

        }
        .smm-casestudy .caption{
      padding-top: 10px;
      padding-bottom: 20px;
        }
        .smm-casestudy .caption p{
          margin-bottom: 0;
          margin-top:10px;
        } 
        .smm-casestudy .caption a{
         color:  #4A91BD;
        } 
        .grey-bg{
          background-color: #f6f6f6;
        }
        .social-div{
          min-height: 130px;
          border-radius: 2px;
          background: #fff;
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
          margin-bottom: 30px;
        }
        .sixlist-div.jsx-1463808104 p.jsx-1463808104{
          display: flex;
          align-items:center;
        }
        .sixlist-div.jsx-1463808104{
          margin-bottom: 35px;
          align-items: center;
        }
        


        `}
      </style>
    </React.Fragment>
  );
}
export default SMMPAGE;
