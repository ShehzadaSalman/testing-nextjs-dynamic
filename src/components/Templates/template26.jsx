import { useRouter } from 'next/router';
const ImagePath = process.env.ImagePath
import Footer from '../Footer'

const ABOUT = ({finalData}) => {

  const router = useRouter();
  const {locale} = router;


  return (
    <React.Fragment>
      <div className="slide-section ">
        <div
          className="slide-content-wrapper p41 d-flex flex-column seoPackage">
          <div className="AboutBanner">
            <div className="container">
              <div className="row">
                <h3>{locale === 'ar' 
                 ?finalData.header_title_arabic  
                 :finalData.header_title_english}</h3>
              </div>
            </div>
          </div>
          <div className="flex-fill">
            <div className="mg-portfolio-wrapper slider-end-content text-center">
              <div className="packwraps container aboutUsDetail">
                <center>
                  <img alt = "ice berg" className="iceberg" 
                  src={ImagePath + finalData.header_bg_image}   />{' '}
                </center>
                  <div className="mt-5 mb-5">

   {locale === 'ar' 
     ?            <div
     dangerouslySetInnerHTML={{
       __html: finalData.header_desc_arabic
     }}></div>
     
     :           <div
     dangerouslySetInnerHTML={{
       __html: finalData.header_desc_english
     }}></div>
     
     }

       



                  </div>     
           
              </div>
            </div>
          </div>
         
           <Footer/>
          
        </div>
      </div>
      <style>
        {`
        
        .AboutBanner img{
          margin-bottom: 40px;
        }
        .iceberg{
          margin-bottom: 80px;
        }

        @media only screen and (max-width: 600px) {
          .AboutBanner h3{
            margin-top: 30px;

          }
          .iceberg{
            width: 100%;
            margin-bottom: 50px;
          }
        
        }

        
        
        `}
      </style>
    </React.Fragment>
  );
};




export default ABOUT;
