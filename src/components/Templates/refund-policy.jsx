import Head from 'next/head';
import PageBanner from '../components/NewComponents/PageBanner/PageBanner';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer'
import Headerfive from '../components/HeaderFive';
import { useRouter } from 'next/router';
const REFUND = () =>
{
    const router = useRouter();
    console.log(router.pathname);
    var pageurl = "https://techbay.co"+router.pathname;
    return (
        <React.Fragment>
              <Head>
    <title>Techbay Solutions | Privacy Policy - Techbay Solutions </title>
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    ></link>
    
     {/* <link href="/css/newstyle.css" rel="stylesheet"/> */}
     <link rel="canonical" href= "https://techbay.co/refund-policy"/>
     <meta property="og:url" content={pageurl} />

  </Head>
        <div className = "content-div">
         <Headerfive/>
        <PageBanner
          category= "marketing"
          heading="REFUND POLICY"
          paragraph="Thank you for purchasing services at Techbay Solutions. If you are not entirely satisfied with the specific service you got, we are here to help. "
          bg="/images/web/pageassets/banner-one.png"
          wavename="wave2-light.png"
        ></PageBanner>
        <div id = "privacy-policy-wrapper" className = "container-div">
            <Container>
            
            <div className = "padding-top-20 padding-bottom-30">
            {/* <h2 className = "heading padding-bottom-50">TERMS & CONDITIONS</h2>   */}
            <h5 className = "secondary-heading">Refund</h5>
            <p className = "left-paragraph">
            All Techbay Solutions services come with a cashback guarantee. If as a customer, you find no significant results from our service then check the terms mentioned below to see how you qualify for the refund. The cashback guarantee will only apply to the below-mentioned packages. 
            </p>
            <ul>
                <li>
                    <p className="left-paragraph">
                    The Good package comes with a 25% cashback guarantee
                    </p>

                </li>
                <li>
                    <p className="left-paragraph">
                    The Very Good Package comes with a 50% cashback guarantee 
                    </p>
                </li>
                <li>
                <p className="left-paragraph">
                 The Best package comes with a full 100% cashback guarantee
                </p>
               </li>
            </ul>
             <p className="left-paragraph">
             All the guaranteed services must be conducted from the packages selected and continued within the minimum committed time, as mentioned in each package separately. 
             </p>
                <p className="left-paragraph">
                At Techbay Solutions, we believe in delivering the guaranteed results with high ROI which includes the detailed study of current marketing position, and for that Techbay Solutions will need some business information to initiate and improve your current sales status. 
                </p>

            <p className="left-paragraph">
            A Non-Disclosure Agreement will be signed between both parties (the client and the company) to maintain the confidentiality of the information given by either of them. 
            </p>
            <p className="left-paragraph">
            If you have any queries or concerns regarding the privacy policy or any conditions mentioned on the site, contact us at info@techbay.co.
            </p>
            <h2 className = "secondary-heading">Cancellation Policy</h2>
            <p className = "left-paragraph">
            
Techbay Solutions clients on an ongoing package may cancel their plan, but with a 30-days prior written notice. Techbay Solutions will not provide refund of partial month payments. The cancellation will apply after waiting for the cancellation period of 30-days. Techbay Solution will charge for any work that is done during the 30-day cancellation period. If you have signed up for our services but don’t intend on using them then you are still entitled to pay us. The amount of refund will be credited to the account from which the payment was made 30 days after the cancellation of the service. 
              
            </p>
            <p className="left-paragraph">
            ** Techbay Solutions reserves all the rights to change the above refund and cancellation policy at any given point without any prior notice. 
            </p>




          
          








            </div>
            </Container>

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
export default REFUND;