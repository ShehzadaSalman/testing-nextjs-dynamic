import HeaderFive from '../components/HeaderFive'
import PageBanner from '../components/NewComponents/PageBanner/PageBanner'
import ButtonStyleOne from '../components/NewComponents/Buttons/buttonStyleOne'
import ButtonStyleTwo from '../components/NewComponents/Buttons/buttonStyleTwo'
import BgContentDiv from '../components/NewComponents/BContentDiv'
import {openBrandingForm} from '../lib/helper'
import Footer from '../components/Footer'

const Amazon = () => {
let stepList = [1,2,3,4,5,6,7,8]
let stepListTwo = [
   { 
      title: "Amazon Account Setup",
      description: "We will create a professional and customized account as per your requirements. ",
      img: "amazon-step1.png"

   },
   { 
      title: "Amazon Listing Setup",
      description: "We strategize a listing setup, which states how will the products be listed in the account in an optimized way. ",
      img: "amazon-step2.png"
   },
   { 
      title: "Amazon Keyword Analysis",
      description: "The next step is to find the keywords for SEO and PPC",
      img: "amazon-step3.png"
   },
   { 
      title: "Amazon SEO",
      description: "Amazon SEO is the perfect way to bring your products up in the Amazon searches. ",
      img: "amazon-step4.png"
   },
   { 
      title: "Amazon E-business Copywriting",
      description: "Writing for the products in an optimized way can bring you up in the searches easily. ",
      img: "amazon-step5.png"
   },
   { 
      title: "Amazon PPC Start-Up and Management",
      description: "We will create a professional and customized account as per your requirements. ",
      img: "amazon-step6.png"
   },
   { 
      title: "Amazon FBA Start-Up and Management",
      description: "Our team is expert in creating and managing FBA accounts on Amazon. ",
      img: "amazon-step7.png"
   },
   { 
      title: "Analysis and Reporting",
      description: "We provide monthly and weekly reports for your amazon account, which will show the real progress of your Amazon account.",
      img: "amazon-step8.png"
   },
]
return (
    <>
    <HeaderFive/>
    <PageBanner
          category= "branding"
          heading="AMAZON SELLER ACCOUNT AND FBA ACCOUNT MANAGEMENT"
          paragraph="Do You Feel Pressured by the Competition on Amazon? Worry Not! We will Pull You Through the Competition!"
          bg="/images/web/new-pages/amazon-banner.png"
          buttontext = "My Amazon Store"
          wavename="wave2.png"
        ></PageBanner>
                {/*  the second  section  */}
                <div className="bg-grey pt-5 pb-5">
          <div className="container">
              <div className="row">
          
                  <div>
                  <h2 className="heading text-uppercase">
                  Become A Product Leader With the Help
of Techbay Product Introducing Services</h2>
     
            <p className="left-paragraph">
            Managing an account on Amazon is no joke. There are several big and small vendors. who are selling what you are. How will you stand out and gain maximum sales can be a serious discussion. We can help you create an Amazon account that would attract more clients, and you will have a higher selling rate. Our amazon account management services consist of:
            </p>
     
        <div className="row">
                <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon1.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph pt-2 mt-0">Amazon Store Creation</p>
                 </div>
                </div>

                <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon2.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph pt-2 mt-0">Amazon Store Optimization</p>
                 </div>
                </div>

                <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon3.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph pt-2 mt-0">Product Listing Management</p>
                 </div>
                </div>

                <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon4.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph pt-2 mt-0">Product Optimization</p>
                 </div>
                </div>

                <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon5.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph pt-2 mt-0">Improving Conversion Rate</p>
                 </div>
                </div>

                <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon6.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "paragraph pt-2 mt-0">Analsis and Report</p>
                 </div>
                </div>
        </div>
        
            </div>
     
       
              </div>
            
          </div>

          
          <div className="margin-top-20"></div>
        </div>
        <BgContentDiv bg="/images/web/new-pages/amazon-banner-two.png">
            <div className="container pt-3 pb-3">
            <h2 className="white-heading">
            Amazon Product Launch
            and Account Management Services
            </h2>
            <p className="white-paragraph">
            Techbay provides the complete service to its clients for assisting them in building the Amazon business from the grass-root level, even if you don’t know how to even do it.Our company works by the formula that perfect product launch, creates higher internet ranking that leads to more sales and the company gains higher profits because of improvement in sales.
            </p>
            <div className="row d-flex justify-content-between">
            <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon21.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "white-paragraph pt-3 mt-0">Amazon Business Launch</p>
                 </div>
           </div>
           <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon22.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "white-paragraph pt-3 mt-0">Amazon Product Listing Services</p>
                 </div>
           </div>
           <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon23.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "white-paragraph pt-3 mt-0">Complete Amazon Marketing Services</p>
                 </div>
           </div>
           <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon24.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "white-paragraph pt-3 mt-0">Amazon PPC(Pay Per Click Services)</p>
                 </div>
           </div>
           <div className="col-6 col-md-2">
                 <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
                    <img src="/images/web/new-pages/amazon25.png" alt = "ecommerce" className="img-fluid" />
                    <p className = "white-paragraph pt-3 mt-0">Amazon SEO(Search Engine Marketing)</p>
                 </div>
           </div>

            </div>
            <div className="text-center mt-3 mt-md-0">
                <a onClick={openBrandingForm}>
                    <ButtonStyleTwo title = "Get Amazon PPC Services" />
                </a>
            </div>
           </div>

        </BgContentDiv>

        <div className="wave-layer-bg-slides">
          <div className="container pb-5">
           <h2 className="heading text-uppercase"> 
           Create My Amazon {'\n'}
           Store and Amazon FBA Account
           </h2>  
           <p className="paragraph">
             Being one of the extraordinary Amazon marketing firms, we have a complete grasp of the necessity of effective product launching. According to the latest Amazon updates, the products that are well analyzed and completely-optimized will have a fast pace top ranking. Our process for bringing your store to the top has the following steps.  
           </p>
           {/* thumbnai listing starts here */}
         <div className="row d-flex justify-content-md-center mt-5 text-center  bg-amazon-blue py-4 px-2">
           
        
      
          
       {stepListTwo.map(li => (
         <div className="col-md-3 my-1 my-md-4">
         <div className="steps-thumbnail">
             <div className="step-title text-center mb-1 mb-md-4">
             <img src={`/images/web/new-pages/${li.img}`}   alt = "steps" style={{ height: "55px" }}/>
             </div>
             <div className="caption d-flex ">
                <div>
                <img src="/images/web/new-pages/amazon-left-stick.png"   alt = "steps"/>
                </div>
                <div className="pl-3 d-flex flex-column justify-content-center">
                   <h5 className="text-left">{li.title}</h5>
                   <p className="text-left">{li.description}</p>
                </div>
               

             </div>
         </div>
         </div>

       ))}
  
     
   
       
       
      
      
        

         </div>
            <div className="text-center mt-5">
                <a onClick={openBrandingForm}>
                <ButtonStyleOne title = "Get In Touch" />
                </a>
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
     .bg-amazon-blue{background-color: rgba(181, 211, 229, 0.2)}  
        `}
    </style>
    </>
)

}

export default Amazon;