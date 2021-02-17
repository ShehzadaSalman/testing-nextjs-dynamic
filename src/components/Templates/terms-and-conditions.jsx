import Head from 'next/head';
import PageBanner from '../components/NewComponents/PageBanner/PageBanner';;
import Headerfive from '../components/HeaderFive';
import { useRouter } from 'next/router';
const TERMSANDCONDITIONS = () =>
{
  const router = useRouter();
  console.log(router.pathname);
  var pageurl = "https://techbay.co"+router.pathname;

    return (
        <React.Fragment>
        <div className = "content-div">
         <Headerfive/>
        <PageBanner
          category= "marketing"
          heading="TERMS & CONDITIONS"
          paragraph="By accessing and using this site, you accept the following terms and conditions, without limitation or qualification."
          bg="/images/web/pageassets/banner-one.png"
          wavename="wave2-light.png"
        ></PageBanner>
        <div id = "privacy-policy-wrapper" className = "container-div">
            <div className = "container">
            <div className = "padding-top-20 padding-bottom-30">
            <h2 className = "heading padding-bottom-50">TERMS & CONDITIONS</h2>  
            <h5 className = "secondary-heading">Terms of use</h5>
            <p className = "left-paragraph">
            Except if or in any case expressed, the content on the site including, images text and their arrangements are thereby the property of Techbay Solutions. Trademarks used or mentioned on this website belong to their respective owners.
            Nothing contained in this site will be interpreted as estoppel, giving by suggestion, or else, any permit or option to any trademark, propriety, patent or other copyright of Techbay Solutions or any third party.
            </p>
            <div className = ""></div>
            <h2 className = "secondary-heading">Content on the Website</h2>
            <p className = "left-paragraph">
               This site and the content provided in this site, included, yet not restricted to, audio, graphic imageries, video, HTML code, and manuscript, buttons may not be copied, republished replicated, uploaded, transmitted, posted, or dispersed in any way, without the prior written agreement of Techbay Solutions, excluding that you may exhibit, download and print one copy of the resources exclusively for your non-commercial, personal use, on one computer providing you do not temper and modify the resources in any way, and you don't change all trademark, copyright, and proprietary notices.
            </p>
            <p className = "left-paragraph">
               The data on this site does not cost for instructive use and doesn't create a professional or business service connection between you and Techbay Solutions.
            </p>

            
             <h2 className = "secondary-heading">Links To Third Party Sites</h2>
             <p className = "left-paragraph">Links on this site may lead to third-party sites or services not done by Techbay Solutions. No guarantee or ruling is made in regards to other sites or services, and Techbay Solutions takes no accountability for such services or sites. </p> 
      
             <p className = "left-paragraph">We are not sanctioning another site or service through these links. Any usage of the material provided on this site, you may use or any service or site-related by this site, is at your own risk.</p> 
             <p className = "left-paragraph">This site and its contents are given "with no guarantees", and Techbay Solutions makes no portrayal or assurance of any sort as for this site or any site or services through this site. Techbay Solutions explicitly repudiates all express and inferred guarantees including, yet not restricted to, the suggested guarantees of merchantability, readiness for a specific reason, title, and non-encroachment.</p> 
             <p className = "left-paragraph">In no occasion will either Techbay Solutions or its third party be subject to any gathering for any indirect, immediate, special direct, coincidental, typical, considerable, or damages (including, however not restricted to, lost benefits, business interference, loss of programs or information) regardless of the type of activity and whether in agreement, carelessness, misdeed, liability, or otherwise, emerging out of or regarding this site, any content on or retrieved through this site or any site service connected to, or any replicating, showing, or use thereof.</p> 
          

            <h2 className = "secondary-heading">Laws Jurisdiction</h2>
            <p className = "left-paragraph">
            Techbay Solutions upholds this site in Dubai, United Arab Emirates and you concur that these terms of use and any lawful activity or happening related with this site will be administered by the laws of the UAE without position to its selection of law rules. On the off chance that you endeavour to bring any lawful procedures against Techbay Solutions you explicitly recognize that Techbay Solutions is allowed to pick the locale of its inclination with regards to where such activity against us might be held.
            </p>
            <p className = "left-paragraph">
            As you have established by using this site to pick the laws of the UAE to oversee any such procedures, we will likely decide to defend any such activity in Dubai, UAE and we can settle on this choice altogether as it suits us, regardless of where in the world you are situated.
            </p>
            <p className="left-paragraph">
            You are liable for conforming to the laws of the authority from which you are visiting this site, and you concur that you won't access or utilize the data on this site disregarding such laws. Except if explicitly expressed in any case; thus, any data put together by you through this site will be regarded as non-classified and non-restrictive.
            </p>
              <p className="left-paragraph">
              You signify that you have the legal right to submit such data and concur that you won't present any data except if you are legitimately qualified for such action. On account of the open idea of the Web, we suggest that you should not submit classified data. 
              </p>

              <h2 className="secondary-heading">
              Unapproved Idea or Proposal
              </h2>

              <p className="left-paragraph">
              Techbay Solutions doesn't acknowledge unapproved idea entries outside of set up business dealings. To ensure the interests of our present customers and us, we should treat the issue of such entries with incredible consideration.
Critically, without a reasonable business relationship, Techbay Solutions cannot and doesn't consider any such entries in certainty. Therefore, kindly don't convey unapproved idea proposals to Techbay Solutions through this website.
              </p>
          
           <p className="left-paragraph">
           Any thoughts unveiled to Techbay Solutions outside a previous recorded private business relationship are not secluded, and Techbay Solutions may, thus, create, utilize and unreservedly reveal or distribute same notions without reimbursing you or answerable to you. Techbay Solutions will put forth every sensible attempt to return or demolish any unapproved thought entries without evaluation of them.
           </p>
              <p className="left-paragraph">
              Notwithstanding, if an audit is fundamental for Techbay Solutions sole tact, it will be with the agreement that Techbay Solutions assumes no commitment to secure the privacy of your idea or recompense you for its divulgence or use. By presenting an idea or other itemized entries to Techbay Solutions through this site, you consent to be bound by the terms of this stated policy.
              </p>










            </div>
            </div>

        </div>
        </div>
        <Footer/>
        <style>
            {`
            
            body{
                overflow-y: auto;
            }
            #privacy-policy-wrapper{

            }
            #privacy-policy-wrapper .secondary-heading{
             margin-top: 40px;
            }
            #privacy-policy-wrapper .left-paragraph{
              margin-top: 10px;
            }
            
            `}
        </style>
        </React.Fragment>
    );




}
export default TERMSANDCONDITIONS;