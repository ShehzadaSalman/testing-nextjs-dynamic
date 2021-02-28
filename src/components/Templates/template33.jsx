import PageBanner from '../NewComponents/PageBanner/PageBanner'
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne'
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo'
import BgContentDiv from '../NewComponents/BContentDiv'
import {openBrandingForm} from '../../lib/helper'
import { useRouter } from 'next/router';
const ImagePath = process.env.ImagePath;

const Amazon = ({finalData}) => {

   

  let content;
  const router = useRouter();
  const { locale } = router;
  if (locale !== 'ar') {
    // getting the english headings
    let Sections = finalData.headings.map(data => {
      return {
        "id": data.id,
        "title": data.title_english,
        "description": data.desc_english,
        "level": data.level,
        "btn_txt": data.btn_txt_english
      }
    })

    let Widgets = finalData.widget.map(data => {
      return {
        "id": data.id,
        "title": data.title_english,
        "description": data.desc_english,
        "level": data.level,
        "btn_txt": data.btn_txt_english,
        "image": data.image,
        "level": data.level,
      }


    })

    let Buttons = finalData.widget_btn.map(data => {
      return {
        "id": data.id,
        "title": data.title_english,
        "level": data.level
      }
    })

    if (finalData.widget_headings) {
      let WidgetHeadings = finalData.widget_headings.map(data => {
        return {
          "id": data.id,
          "title": data.desc_english,
          "level": data.level
        }

      })
    }


    content = {
      "BannerHeading": finalData.header_title_english || "EMPTY",
      "BannerDescription": finalData.header_desc_english || "EMPTY",
      "BannerImage": finalData.header_bg_image || "EMPTY",
      "BannerButton": finalData.header_btn_txt_english || "EMPTY",
      "FirstVideo": finalData.video_link || "",
      "SubBannerHeading": finalData.sub_header_title_english || "EMPTY",
      "SubBannerParagraph": finalData.sub_header_desc_english || "EMPTY",
      "SubBannerButton": finalData.sub_header_btn_txt_english || "EMPTY",
      "Sections": Sections,
      "ListingOne": Widgets.filter(service => service.level === 1),
      "ListingTwo": Widgets.filter(service => service.level === 2),
      "ListingThree": Widgets.filter(service => service.level === 3),
      "Buttons": Buttons,
      // "widget_headings": WidgetHeadings
    }
  } else { // when we set it to arabic
    // getting the arabic headings
    let Headings = finalData.headings.map(data => {

      return {
        "id": data.id,
        "title": data.title_arabic,
        "description": data.desc_arabic,
        "level": data.level,
        "btn_txt": data.btn_txt_arabic
      }
    })

    let Widgets = finalData.widget.map(data => {
      return {
        "id": data.id,
        "title": data.title_arabic,
        "description": data.desc_arabic,
        "level": data.level,
        "btn_txt": data.btn_txt_arabic,
        "image": data.image,
        "level": data.level,
      }
    })


    let Buttons = finalData.widget_btn.map(data => {

      return {
        "id": data.id,
        "title": data.title_arabic,
        "level": data.level
      }
    })


    content = {
      "BannerHeading": finalData.header_title_arabic || "EMPTY",
      "BannerDescription": finalData.header_desc_arabic || "EMPTY",
      "BannerImage": finalData.header_bg_image || "EMPTY",
      "BannerButton": finalData.header_btn_txt_arabic || "EMPTY",
      "FirstVideo": finalData.video_link || "",
      "SubBannerHeading": finalData.sub_header_title_arabic || "EMPTY",
      "SubBannerParagraph": finalData.sub_header_desc_arabic || "EMPTY",
      "SubBannerButton": finalData.sub_header_btn_txt_arabic || "EMPTY",
      "Sections": Headings,
      "ListingOne": Widgets.filter(service => service.level === 1),
      "ListingTwo": Widgets.filter(service => service.level === 2),
      "ListingThree": Widgets.filter(service => service.level === 3),
      "Buttons": Buttons,
      // "widget_headings": WidgetHeadings
    }
  }







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
  
    <PageBanner
          category= "branding"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext = {content.BannerButton}
          wavename="wave2.png"
        ></PageBanner>
                {/*  the second  section  */}
                <div className="bg-grey pt-5 pb-5">
          <div className="container">
              <div className="row">
          
                  <div>
                  <h2 className="heading text-uppercase">
                   {content.SubBannerHeading}
                  </h2>
     
            <p className="left-paragraph">
                { content.SubBannerParagraph}
            </p>
    
            </div>
     
        
   
        
              </div>
              <div className="row mt-4">
        {content?.ListingOne?.map(li => (
       <div className="col-6 col-md-2">
       <div className="ecommerce-thumbnail mt-2  mb-3 text-center">
          <img src={ImagePath + li.image} alt = "ecommerce" className="img-fluid" />
          <p className = "paragraph pt-2 mt-0">{li.title}</p>
       </div>
      </div>
        ))}
        </div>    
          </div>

          
          <div className="margin-top-20"></div>
        </div>
        <BgContentDiv bg="/images/web/new-pages/amazon-banner-two.png">
            <div className="container pt-3 pb-3">
            <h2 className="white-heading">
         {content.Sections[0].title}
            </h2>
            <p className="white-paragraph">
            {content.Sections[0].description}
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