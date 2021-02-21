import PageBanner from '../NewComponents/PageBanner/PageBanner';
import { useRouter } from 'next/router';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath
const PRIVACY = ({ finalData }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <React.Fragment>
      <div className="content-div">
        <Headerfive />
        <PageBanner
          category="marketing"
          heading={locale !== 'ar' ? finalData.header_title_arabic : finalData.header_title_english}
          paragraph={locale !== 'ar' ? finalData.header_desc_arabic : finalData.header_desc_english}
          bg={ImagePath + finalData.header_bg_image}
          wavename="wave2-light.png"
        ></PageBanner>
        <div id="privacy-policy-wrapper" className="container-div">
          <div className="container">

            <div className="padding-top-20 padding-bottom-30 box-direction text-direction">
              {locale === 'ar'
                ? <div
                  dangerouslySetInnerHTML={{
                    __html: finalData.sub_header_desc_arabic
                  }}></div>

                : <div
                  dangerouslySetInnerHTML={{
                    __html: finalData.sub_header_desc_english
                  }}></div>

              }
            </div>
          </div>

        </div>
      </div>
      <style>
        {`
            
            body{
                overflow-y: auto;
            }
            .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
            .text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
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
export default PRIVACY;