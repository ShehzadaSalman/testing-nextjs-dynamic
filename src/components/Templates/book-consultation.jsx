import Head from 'next/head';
import Footer from '../components/Footer';
import Headerfive from '../components/HeaderFive';
import ReportCardFooter from '../components/NewComponents/ReportCardFooter';
import { InlineWidget } from "react-calendly";
import SuccessDisplay from '../components/NewComponents/successdisplay';
const Consultation = () => {

    return (
        <React.Fragment>
            <Head>
                <title>
                    Consultation Services
        </title>
                <meta
                    name="description"
                    content=""
                />
                <link rel="canonical" href="https://techbay.agency/consultation-services" />

                {/* <link href="/css/newstyle.css" rel="stylesheet"/> */}

            </Head>
            <div className="content-div">
                <Headerfive />
                <div className="slide-section">
                    <div className="content container mt-5 mt-md-0">
                        <h2 className="heading mb-5 mt-5">
                            KEY CONSULTING SERVICES
                </h2>
                        <div className="row">
                            <div className="col-md-4 consultation-thumbnail text-center mb-4">
                                <img src="/images/new-svg-images/consultation-3.svg" className="img-fluid" />
                                <h4 className="text-center mb-1">
                                    Strategy
                      </h4>
                                <p className="paragraph mt-3">
                                    The strategy consulting service focuses on bringing
                                    profitable support to small and medium-sized
                                    businesses with a focus on digital, functional,
                                    operational, and business model strategies.
                       </p>

                            </div>
                            <div className="col-md-4 consultation-thumbnail text-center mb-4 ">
                                <img src="/images/new-svg-images/consultation-2.svg" className="img-fluid" />
                                <h4 className="text-center mb-1">
                                    Process Improvement
                      </h4>
                                <p className="paragraph mt-3">
                                    Process improvement service brings about change
                                    to a small or medium-sized business through agile
                                    methodologies and digital audits.
                       </p>

                            </div>
                            <div className="col-md-4 consultation-thumbnail text-center mb-4 ">
                                <img src="/images/new-svg-images/consultation-1.svg" className="img-fluid" />
                                <h4 className="text-center mb-1">
                                    Business Analysis
                      </h4>
                                <p className="paragraph mt-3">
                                    Using business analysis tools and methods to identify the key areas of inefficiency in your business with proposed solutions to optimize your business.
                       </p>
                            </div>
                        </div>

                    </div>
                </div>
                <SuccessDisplay />
                <div className="mb-5" id="meeting-container-consultation">
                    <InlineWidget url="https://calendly.com/ibrahim-hashem/30min" />
                </div>

                <div className="mt-5">
                    <ReportCardFooter
                        category="marketing"
                        imgAddress="images/web/video-production/6tactics.png"
                        title="THE SECRETS OF SOCIAL MEDIA MARKETING REVEALED!"
                        caption="Social Media Marketing has become one of the most required marketing strategies to stay at the top of the market. The only problem is that the trend keeps changing. Here is a guide that will provide you all the secrets that would help you stay ahead of trends."
                        btntext="GET MY FREE REPORT"
                    />
                </div>
                <Footer />
            </div>
            <style> {`
                body{
                    overflow-y: auto;
                }
                .calendly-inline-widget, .calendly-inline-widget *, .calendly-badge-widget, .calendly-badge-widget *, .calendly-overlay, .calendly-overlay * {
                    font-size: 16px;
                    min-height: 1100px !important;
                    overflow: hidden;
                    line-height: 1.2em;
                }
            
                @media only screen and (min-width: 600px) {
                    .calendly-inline-widget, .calendly-inline-widget *, .calendly-badge-widget, .calendly-badge-widget *, .calendly-overlay, .calendly-overlay * {
                        font-size: 16px;
                        min-height: 655px !important;
                        line-height: 1.2em;
                    }

                }
        `}

            </style>
            <style jsx>
                {`
            #meeting-container-consultation html{
                overflow: hidden;
            }

    
            .consultation-thumbnail img{
                max-height: 180px;
                margin-bottom: 30px;
            }
            .slide-section{
                
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            background-color: grey;
            min-height: calc(100vh);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            font-family: 'Roboto', sans-serif;
           
            }
            ._2LpwQ___Wrapper__cls1._1cMla___Wrapper__media-tablet-up{
                margin-bottom:14px !important;
            }
            @media only screen and (max-width: 600px) {
            
            }
            
            .calendly-inline-widget{  height: 655px !important; }




            `}



            </style>
        </React.Fragment>
    );

}

export default Consultation;