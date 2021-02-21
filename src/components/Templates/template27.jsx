import { useRouter } from 'next/router';
import Headerfive from '../HeaderFive';
const ImagePath = process.env.ImagePath
const CaseStudy = ({ finalData }) => {
  const router = useRouter();
  const { locale } = router;

  let sectionLoop = 0;
  return (
    <React.Fragment>
      <Headerfive />
      <div className="content-div">
        <div className="slide-section mt-5">
          <div className="content container mt-5">
            <h2 className="heading mb-3 mt-5 ">
              {locale == 'ar'
                ? finalData.header_title_arabic
                : finalData.header_title_english}

            </h2>
            <p className="paragraph mt-0">
              {locale == 'ar'
                ? finalData.header_desc_arabic
                : finalData.header_desc_english}
            </p>
            <div className="case-study-content">

              {finalData.widget && finalData.widget.map(li => {
                sectionLoop = Math.floor(sectionLoop + 1);
                if (sectionLoop % 2 == 0) {
                  return (
                    <div className="row mb-md-5">
                      <div className="col-md-6">
                        <img src={ImagePath + li.image} className="img-fluid" />
                      </div>
                      <div className="col-md-6 ">
                        <h2 className="left-heading text-direction">
                          {locale === 'ar' ? li.title_arabic : li.title_english}
                        </h2>
                        <p className="left-paragraph  mt-3 mb-4 text-direction">
                          {locale === 'ar' ? li.desc_arabic : li.desc_english}
                        </p>
                        <div className="text-direction">
                          <a className="pr-1 pr-sm-2" href={li.link} target="_blank" >
                            <button className="landing-read-more-button mb-5 mb-md-0">
                              {locale === 'ar' ? 'عرض دراسة الحالة' : 'View Case Study'}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  )

                } else {
                  return (
                    <div className="row mb-md-5">
                      <div className="col-md-6">
                        <h2 className="left-heading text-direction">
                          {locale === 'ar' ? li.title_arabic : li.title_english}
                        </h2>
                        <p className="left-paragraph text-direction mt-3 mb-4">
                          {locale === 'ar' ? li.desc_arabic : li.desc_english}
                        </p>
                        <div className="text-direction">
                          <a className="pr-1 pr-sm-2" href={li.link} target="_blank" >
                            <button className="landing-read-more-button mb-5 mb-md-0">
                              {locale === 'ar' ? 'عرض دراسة الحالة' : 'View Case Study'}
                            </button>
                          </a>
                        </div>

                      </div>
                      <div className="col-md-6">
                        <img src={ImagePath + li.image} className="img-fluid" />
                      </div>

                    </div>
                  )

                }



              })}













            </div>
          </div>
        </div>


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
                .box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
.text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
            
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
            .case-study-content .col-md-6{
                margin-bottom:40px;
            }
            header#myHeader{
                background-color: none !important;
            }

            .case-study-content{
                padding-top: 80px;
                padding-bottom: 50px;
                padding-left: 40px;
                padding-right: 40px;
                background: #f2f2f2;
                box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
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
            background-attachment: fixed;
            font-family: 'Roboto', sans-serif;
           
            }
            ._2LpwQ___Wrapper__cls1._1cMla___Wrapper__media-tablet-up{
                margin-bottom:14px !important;
            }
            @media only screen and (max-width: 600px) {
              .case-study-content{padding-left: 20px; padding-right: 20px;}
            }
            
            .calendly-inline-widget{  height: 655px !important; }




            `}



      </style>
    </React.Fragment>
  );

}

export default CaseStudy;