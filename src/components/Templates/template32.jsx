
import SuccessDisplay from '../NewComponents/successdisplay';
import {useRouter} from 'next/router'
const ImagePath = process.env.ImagePath
import ReportCardFooterCTA from '../NewComponents/ReportCardFooterCTA';
import AdvertisementPopup from '../NewComponents/AdvertisementCTAForm';

const ReportCTAOne = ({finalData}) => {
const router = useRouter();
const {locale} = router;
  // open the development form
const openDevelopmentForm = () => {
  let form = document.querySelector(".formPopup");
   form.style.display = 'block';
 }
    return (
        <React.Fragment>
      
            
            {/*  The First section    */}
 
            <SuccessDisplay />
            <div className = "main-div">
    <AdvertisementPopup type = "development" />
      <ReportCardFooterCTA
  category = "development"
  imgAddress = {ImagePath + finalData.header_bg_image}
  title = {locale === 'ar' ?   finalData.header_title_arabic : finalData.header_title_english }
   caption = {locale === 'ar' ? finalData.header_desc_arabic : finalData.header_desc_english}
  btntext = {locale === 'ar' ? finalData.header_btn_txt_arabic : finalData.header_btn_txt_english }
   />

<div className = "pt-5 pb-5 bottom-wave-bg">
  <div className="container">

    <p className="paragraph mb-5">
     {locale === 'ar' ? finalData.sub_header_desc_english : finalData.sub_header_desc_arabic } 
    </p>

  </div>
</div>



   
  
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
export default ReportCTAOne;