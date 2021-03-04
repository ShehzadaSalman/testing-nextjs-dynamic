import WhiteWave from '../WhiteWave';
import ButtonStyleTwo from '../Buttons/buttonStyleTwo.jsx';
import BrandingForm from '../../NewComponents/BrandingForm';



const PageBanner = (props) => {

  const openForm = () => {

    if (props.category == 'branding') {
      let brandingf = document.querySelector('#formPopup-branding')
      brandingf.style.display = "flex";
      // $('#formPopup-branding').css("display", "block");
      console.log(brandingf);

    } else if (props.category == 'marketing') {
      let brandingf = document.querySelector('#formPopup-branding')
      brandingf.style.display = "flex";
      // $('#formPopup-branding').css("display", "block");
      console.log(brandingf);
    }
    else if (props.category == 'development') {
      let brandingf = document.querySelector('#formPopup-branding')
      brandingf.style.display = "flex";
      // $('#formPopup-branding').css("display", "block");
      console.log(brandingf);
    }
    else {
      let brandingf = document.querySelector('#formPopup-branding')
      brandingf.style.display = "flex";
      // $('#formPopup-branding').css("display", "block");
      console.log(brandingf);

    }
  }



  return (
    <React.Fragment>
      <BrandingForm department={props.category} />
      {/* <MarketingForm />
      <DevelopmentForm /> */}
      <div className="full-banner">
        <div className="container">
          <h1 className={props.dark ? 'dark' : 'light'} >{props.heading}</h1>
          <h6 className={props.dark ? 'dark' : 'light'}>{props.paragraph}</h6>
          <div className="mt-20"></div>
          <div className="Centerclass">

            {props.buttontext ? <a onClick={openForm} >
              {props.dark
                ? <ButtonStyleTwo dark title={props.buttontext} />
                : <ButtonStyleTwo title={props.buttontext} />}
            </a> : ""}
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

            .full-banner{
                display: flex;
                position: relative;
                flex-direction: column;
                justify-content: center;
                background-color: grey;
                height: calc(100vh);
                background-image: url('${props.bg}');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                font-family: 'Roboto', sans-serif;
            }
        
            
            .full-banner h1.light{
                color: #fff;
                text-transform: uppercase;
                text-align: center;
                font-size: 4rem;
                font-weight: 600;
                line-height: 1.2;
            }
            
            .full-banner h1.dark{
                color: #212121;
                text-transform: uppercase;
                text-align: center;
                font-size: 4rem;
                font-weight: 600;
                line-height: 1.2;
            }
            .full-banner h6.light{
                color: #fff;
                text-align: center;
                font-size: 1.2rem;
                margin-top: 20px;
                line-height: 1.5;
                font-weight: 350;
            }
            .full-banner h6.dark{
                color: #212121;
                text-align: center;
                font-size: 1.2rem;
                margin-top: 20px;
                line-height: 1.5;
                font-weight: 350;
            }



            @media screen and (max-width: 580px) {
                .full-banner h1.light{
                    color: #fff;
                    text-transform: uppercase;
                    text-align: center;
                    font-size: 2.2rem;
                    font-weight: 600;
                    line-height: .9;


                }
                .full-banner h6.light{
                    color: #fff;
                    text-align: center;
                    font-size: 1rem;
                    margin-top: 10px;
                    line-height: 1.5;
                }
                .full-banner h1.dark{
                    color: #212121;
                    text-transform: uppercase;
                    text-align: center;
                    font-size: 2.2rem;
                    font-weight: 600;
                    line-height: .9;


                }
                .full-banner h6.dark{
                    color: #212121;
                    text-align: center;
                    font-size: 1rem;
                    margin-top: 10px;
                    line-height: 1.5;
                }




              }


            `
        }
      </style>
    </React.Fragment>
  );
}

export default PageBanner;
