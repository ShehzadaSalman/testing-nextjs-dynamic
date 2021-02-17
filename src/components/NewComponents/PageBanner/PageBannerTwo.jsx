import { Container, Grid } from '@material-ui/core'
import WhiteWave from '../WhiteWave';
import ButtonStyleTwo from '../Buttons/buttonStyleTwo.jsx';
import BrandingForm from '../BrandingForm';
import {useRouter} from 'next/router'
import $ from 'jquery'
const PageBannerTwo = (props) => {

  const router = useRouter();
  const {locale} = router;

  const openPopupForm = () => {
    if (props.category == 'branding') {
      $('.formPopup-branding').css("display", "block");
      console.log("this is the branding form opened");

    } else if (props.category == 'marketing') {
      $('.formPopup-branding').css("display", "block");
      console.log("this is the branding form opened");
    }
    else if (props.category == 'development') {
      $('.formPopup-branding').css("display", "block");
      console.log("this is the branding form opened");
    }
    else {
      $('.formPopup-branding').css("display", "block");
      console.log("this is the branding form opened");

    }

  }

  return (
    <React.Fragment>
      <div className="full-banner-two">
        <BrandingForm department={props.category} />
        <div className="container">

          <div className="row box-direction">

            <div className="col-md-6 px-md-3 d-flex flex-column justify-content-center">
              <h1 className="text-direction">{props.heading}</h1>
              <h6 className="text-direction">{props.paragraph}</h6>
              <div className="mt-20 text-direction">
              {props.buttontext ? <a onClick={openPopupForm}>
                <ButtonStyleTwo title={props.buttontext} /></a> : ""}
                </div>

            </div>

            <div className="col-md-6 px-md-3 d-flex flex-column justify-content-center">

              <div className="mobile-hide">
                <img src={props.contentImage} className="img-fluid" alt="Techbay Banner" />
              </div>

            </div>

          </div>

        </div>






        <WhiteWave title={props.wavename} />

      </div>
      <style>
        {
          `
              .mt-20{
                margin-top: 20px;
              }
              .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
              .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
             
            .full-banner-two{
                display: flex;
                position: relative;
                flex-direction: column;
                justify-content: center;
                background-color: #000;
                min-height: calc(100vh);
                background-color: ${props.color};
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                font-family: 'Roboto', sans-serif;
            }
            .full-banner-two h1{
                color: #1A1717;
                text-transform: uppercase;
                font-size: 3.3rem;
                font-weight: 600;
                line-height: .9;
            }
            .full-banner-two h6{
                color: #1A1717;
                font-size: 1.2rem;
                margin-top: 20px;
                line-height: 1.5;
                font-weight: 350;
            }



            @media screen and (max-width: 580px) {
              .mobile-hide{
                 display: none;
              }
                .full-banner-two h1{
                    color: #000;
                    text-transform: uppercase;

                    font-size: 2.2rem;
                    font-weight: 600;
                    line-height: .9;
                }
                .full-banner-two h6{
                    color: #000;

                    font-size: 1rem;
                    margin-top: 10px;
                    line-height: 1.5;
                }
              }
              @media screen and (max-width: 1300px) and (min-width: 800px) {
                .full-banner-two h1{
                  font-size: 4.1rem;
                  
                }

              }


            `
        }
      </style>
    </React.Fragment>
  );
}

export default PageBannerTwo;
