import Head from 'next/head';
import PageBanner from '../components/NewComponents/PageBanner/PageBanner';
import PageBannerTwo from '../components/NewComponents/PageBanner/PageBannerTwo'
import Footer from '../components/Footer'
import Headerfive from '../components/HeaderFive';
import ReportCardFooter from '../components/NewComponents/ReportCardFooter';
// import ButtonStyleTwo from '../components/NewComponents/ButtonStyleTwo';
import WhiteWave from '../components/NewComponents/WhiteWave';
import ImgCollage from '../components/NewComponents/ImgCollage';
import PortfolioGallery from '../components/NewComponents/PortfolioGallery'
import SuccessDisplay from '../components/NewComponents/successdisplay';
const PortfolioPage = () => {
  // open the development form

  return (
    <React.Fragment>
      <Head>
        <title>
          Techbay Portfolio
      </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet">
        </link>
        <meta
          name="description"
          content="Techbay is an app design company in London that designs apps that wows customers. Set yourself apart from the competitors with our app development agency." />
        <link rel="canonical" href="https://techbay.co/portfolio-page" />

      </Head>
      <Headerfive />
      <div className="video-banner">
        <div className="container">
          <h1>PORTFOLIO</h1>
          <div className="row">
            <div className="col-md-5">
              <h6>
              Techbay always strives to get past the expectation of it’s client. Our goal is to be unique and unpredictable. Our Portfolio states the true potential of our team and the possibilities of where we can take your brand.
                  </h6>
           </div>
         </div>


          <div className="mt-20"></div>

          {/* <ButtonStyleTwo title="Learn More"/>  */}
        </div>
        <WhiteWave title="wave2-light.png" />
      </div>

      <SuccessDisplay />


      <div className="portfolio-content pt-5 pb-5">
        <div className="container pb-5">
          <PortfolioGallery />
        </div>
      </div>


    
 
      <style jsx>
        {`
      .secondlist-div img{
        height: 52px;
        width: 52px;
      }
    `}

      </style>

      <style>
        {`
        html{overflow-y: auto; }
             `}
      </style>
      <style jsx>
        {
          `
              .mt-20{
                margin-top: 20px;
              }

            .video-banner{
                display: flex;
                position: relative;
                flex-direction: column;
                justify-content: center;
                background-color: #eee;
                height: calc(100vh);
                background-image: url('images/new-svg-images/portfolio-page.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-color: grey;
                background-size: cover;
                font-family: 'Roboto', sans-serif;
            }
            .video-banner h1{
                color: #212121;
                text-transform: uppercase;
                word-wrap: break-word;
                font-size: 4.8rem;
                font-weight: 600;
                line-height: .9;


            }
            .video-banner h6{
                color: #212121;
                font-size: 1.2rem;
                margin-top: 20px;
                line-height: 1.5;
                font-weight: 350;
            }



            @media screen and (max-width: 580px) {
                .video-banner h1{
                
                    text-transform: uppercase;
                    text-align: center;
                    font-size: 2.2rem;
                    font-weight: 600;
                    line-height: .9;


                }
                .video-banner h6{
                    
                    text-align: center;
                    font-size: 1rem;
                    margin-top: 10px;
                    line-height: 1.5;
                }
              }
            `}
      </style>
    </React.Fragment>
  );
}
export default PortfolioPage;
