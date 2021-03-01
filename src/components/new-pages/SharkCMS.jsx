import HeaderFive from '../components/HeaderFive'
import PageBanner from '../components/NewComponents/PageBanner/PageBanner'
import ButtonStyleOne from '../components/NewComponents/Buttons/buttonStyleOne'
import Footer from '../components/Footer'

const Shark = () => {

return (
    <>
    <HeaderFive/>
    <PageBanner
          category= "branding"
          heading="A CMS to Meet Your 
          Website"
          paragraph="Shark CMS has all the qualities to build an advanced interactive website for your brand. "
          bg="/images/web/new-pages/sharkcms/banner.png"
          buttontext = "Get In Touch"
          wavename="wave2.png"
        ></PageBanner>
                {/*  the second  section  */}
                <div className="bg-grey pt-5 pb-5">
          <div className="container">
              <div className="row">
                <div className="col-md-7 d-flex justify-content-center flex-column">
                  <div>
                  <h2 className="left-heading text-uppercase">THE SHARK CMS</h2>
     
            <p className="left-paragraph">
            With the understanding of the latest requirements of a website, our developers created a CMS to meet the state-of-the-art needs of a website. Although at the moment the market is flooded with different CMS, most of the time there is an issue with the security and the multiple integrations. The best option is a CMS with built-in integrations and fool-proof security system and Shark is just that. The system makes sure you don’t have to add multiple plugins. With Shark management is on-point and no one can invade your system. 
            </p>
            <div className="pt-3">
                <a href="">
                <ButtonStyleOne title = "Learn More" />
                </a>
            </div>
        
            </div>
                </div>
                <div className="col-md-5">
               <img src="/images/web/new-pages/Shark-CMS.png"  alt = "crm"  className="img-fluid" />
                </div> 
              </div>
            
          </div>

          <div className="margin-top-20"></div>
          <div className="margin-top-20"></div>
        </div>

        <div className="wave-layer-bg-slides">
          <div className="container pb-5">
           <h2 className="heading text-uppercase"> 
           Build A Website
           With Our Advanced CMS 
           </h2>  
           <p className="paragraph">
           Whether you want a custom corporate website or an E-commerce website with several products and pages, you need specific features to make sure it works perfectly on every device. Shark makes sure your website doesn’t suffer from glitches and other development issues. In today’s world, where communication features are mandatory, integration can slow down the process. Shark has a built-in Calls Feature along with Leads Tracking and Management System, Appointments Scheduling, Customers Management and Employees Management. 
           </p>
 {/* thumbnai listing starts here */}
 <div className="row d-flex justify-content-md-center mt-5 text-center px-5">
             <div className="col-6 col-md-3 text-center d-flex justify-content-center">

                <div className="ecommerce-thumbnail mt-2  mb-3">
                    <img src="/images/web/new-pages/sharkcms/1.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph">Search Engine Friendly</p>
                </div>
             </div>
             <div className="col-6 col-md-3 text-center d-flex justify-content-center ">
             <div className="ecommerce-thumbnail mt-2 mb-3">
                    <img src="/images/web/new-pages/sharkcms/2.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph">Customizing Options</p>
                </div>
             </div>
             <div className="col-6 col-md-3 text-center d-flex justify-content-center">
             <div className="ecommerce-thumbnail mt-2 mb-3">
                    <img src="/images/web/new-pages/sharkcms/3.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph">Monetization Tools</p>
                </div>
             </div>
             <div className="col-6 col-md-3 text-center d-flex justify-content-center">
             <div className="ecommerce-thumbnail mt-2 mb-3">
                    <img src="/images/web/new-pages/sharkcms/4.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph">Optimized Features</p>
                </div>
             </div>
             <div className="col-6 col-md-3 text-center d-flex justify-content-center">
             <div className="ecommerce-thumbnail mt-2 mb-3">
                    <img src="/images/web/new-pages/sharkcms/5.png" alt = "ecommerce"  />
                    <p className = "paragraph">Accessible</p>
                </div>
             </div>
             <div className="col-6 col-md-3 text-center d-flex justify-content-center">
             <div className="ecommerce-thumbnail mt-2 mb-3">
                    <img src="/images/web/new-pages/sharkcms/6.png" alt = "ecommerce"  />
                    <p className = "paragraph">Flexible</p>
                </div>
             </div>
             <div className="col-6 col-md-3 text-center d-flex justify-content-center">
             <div className="ecommerce-thumbnail mt-2 mb-3">
                    <img src="/images/web/new-pages/sharkcms/7.png" alt = "ecommerce"  />
                    <p className = "paragraph">Secure</p>
                </div>
             </div>
             <div className="col-6 col-md-3 text-center d-flex justify-content-center">
             <div className="ecommerce-thumbnail mt-2 mb-3">
                    <img src="/images/web/new-pages/sharkcms/8.png" alt = "ecommerce"  />
                    <p className = "paragraph">Mobile Friendly</p>
                </div>
             </div>

         </div>


            <div className="text-center mt-4">
            <ButtonStyleOne title = "Get a Demo" />
            </div>
          </div>
         </div>
 <Footer/>



    <style>
        {`
    html{
        overflow-y: auto;
        }
        `}
    </style>
    <style jsx>
        {`
     .wave-layer-bg-slides{ padding-top: 100px}
     .ecommerce-thumbnail img{max-height: 140px}   
        `}
    </style>
    </>
)

}

export default Shark;