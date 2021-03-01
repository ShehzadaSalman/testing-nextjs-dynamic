// import HeaderFive from '../components/HeaderFive'
import PageBanner from '../NewComponents/PageBanner/PageBanner'
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne'
import {useRouter} from 'next/router'
import SharkbgThumbnail from '../NewComponents/shark-bg-thumbnail'
const ImagePath = process.env.ImagePath;
const Shark = ({finalData}) => {
    const router = useRouter();
    const { locale } = router;
  
    let content;
    if (locale !== 'ar') {
      // getting the english headings
      let Sections = finalData.headings.map(data => {
        return {
          "id": data.id,
          "title": data.title_english,
          "description": data.desc_english,
          "level": data.level,
          "btn_txt": data.btn_txt_english,
          "image": data.heading_image
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
      let WidgetHeadings = finalData.widget_headings ? finalData.widget_headings.map(data => {
        return {
          "id": data.id,
          "title": data.desc_english,
          "level": data.level
        }
      }) : '';
  
  
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
        "ListingFour": Widgets.filter(service => service.level === 4),
        "Buttons": Buttons,
        "widget_headings": WidgetHeadings
      }
    } else { // when we set it to arabic
  
      // getting the arabic headings
      let Headings = finalData.headings.map(data => {
        return {
          "id": data.id,
          "title": data.title_arabic,
          "description": data.desc_arabic,
          "level": data.level,
          "btn_txt": data.btn_txt_arabic,
          "image": data.heading_image
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
  
      let WidgetHeadings = finalData.widget_headings ? finalData.widget_headings.map(data => {
        return {
          "id": data.id,
          "title": data.desc_arabic,
          "level": data.level
        }
      }) : '';
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
        "ListingFour": Widgets.filter(service => service.level === 4),
        "Buttons": Buttons,
        "widget_headings": WidgetHeadings
      }
  
    }
  
return (
    <>
    {/* <HeaderFive/> */}
    <PageBanner
          category= "branding"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext = {content.BannerButton}
          wavename=""
        ></PageBanner>
                {/*  the second  section  */}
                <div className=" pt-5 pb-3 wave-layer-bg-slides">
          <div className="container pt-5">
      
                <div className=" d-flex justify-content-center flex-column">
                  <div>
                  <h2 className="heading text-uppercase">
                     {content.SubBannerHeading}
                  </h2>
     
            <p className="paragraph">
              {content.SubBannerParagraph}  
            </p>
      
        
            </div>
                </div>
          
            
          </div>

        
        </div>

        <div className="">
          <div className="container pb-5">
   
            <div className = "video-div">
              <iframe width="100%" height="555" src={content.FirstVideo}
               frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen></iframe>
            </div>
      


            <div className="text-center mt-5">
            <ButtonStyleOne title = {content.SubBannerButton} />
            </div>
          </div>
         </div>

{/* section four  */}
<div className="bg-grey pt-5 pb-5">
    <div className="container">
       <div className="row">
           <div className="col-md-6  d-flex flex-column justify-content-center">
               <img src={ImagePath + content.Sections[0].image} className="img-fluid" />
           </div>
           <div className="col-md-6 d-flex flex-column justify-content-center">
               <h2 className="left-heading mb-0 pb-0">{content.Sections[0].title}</h2>
               <p className="left-paragraph mb-4">
                {content.Sections[0].description}
               </p>
               <div>
                   {content.ListingOne.map(li => (
<div className="list__item d-flex align-items-start"  key={li.id}>
<img src="/images/web/new-pages/dot-circle.png" className="mt-1" />
<p className = "left-paragraph mt-0 mx-2">
{li.description}
</p>
</div>
                   ))}
           
                   

               </div>
               {content.Buttons[0] && 
                <div className=" mt-2">
                <ButtonStyleOne title = {content.Buttons[0].title} />
                </div>
               }
      


           </div>
       </div>
    </div>
</div>
{/* section five */}
<div className=" pt-5 pb-3 wave-layer-bg-slides">
    <div className="container pt-3">
      <h2 className="heading text-uppercase">
   {content.Sections[1].title}
      </h2>
      <p className="paragraph">
      {content.Sections[1].description}
      </p>
      
 <div className="row d-flex justify-content-md-center mt-5 text-center">
     {content.ListingTwo.map(li => (
<div className="col-6 col-md-3 px-1  mb-4 text-center d-flex justify-content-center"  key={li.id}>
<div className="shark-thumbnail mt-2  mb-3">
  <img src={ImagePath + li.image} alt = "ecommerce" className="img-fluid" />
  <p className = "paragraph mb-0"> <b>{li.title}</b></p>
  <p className="paragraph mt-2">
   {li.description}
  </p>
</div>
</div>
     ))}
        
          
           

         </div> 

         <div className="text-center mt-2 mb-5">
             {content.Buttons[1] && 
              <ButtonStyleOne title = {content.Buttons[1].title} />
             }
           
            </div>
    </div>
</div>

{/* Section Six  */}
<div className="bg-grey pt-5 pb-5">
    <div className="container">
       <div className="row">
  
           <div className="col-md-6 d-flex flex-column justify-content-center">
               <h2 className="left-heading mb-0 pb-0 text-uppercase"> 
                {content.Sections[2].title}
               </h2>
               <p className="left-paragraph mb-4">
               {content.Sections[2].description} 
               </p>
               <div>
                   {content.ListingThree.map(li => (
                    <div className="list__item d-flex align-items-start"  key={li.id}>
                    <img src="/images/web/new-pages/tick-circle.png" className="mt-1" />
                    <p className = "left-paragraph mt-0 mx-2">
                  {li.description}
                    </p>
                   </div>
                  ))}
            
                

               </div>
               {content.Buttons[2] && <div className=" mt-2">
                <ButtonStyleOne title = {content.Buttons[2].title} />
                </div>  }
          


           </div>
           <div className="col-md-6  px-3 d-flex flex-column justify-content-center">     
               <img src={ImagePath + content.Sections[2].image} className="img-fluid" />
           </div>
       </div>
    </div>
</div>


{/* Section Seven  */}
<div className=" pt-5 pb-3 wave-layer-bg-slides">
 <div className="container pt-4">
 <h2 className="heading text-uppercase">
{content.Sections[3].title}
 </h2>
 <p className="paragraph mb-5">
 {content.Sections[3].description}
 </p>
 </div>
<div className="container-fluid">
<div className="row">
    {content.ListingFour.map(li => (
   <div className="col-md-4 px-0"  key={li.id}>
   <SharkbgThumbnail title = {li.title} description = {li.description} bg={ImagePath + li.image} />
   </div>
    ))}
 

</div>
</div> 
</div>
 
{/* Section eight */ }


<div className=" pt-3 pb-5 bottom-wave-bg">
  <p className="paragraph">
{content.Sections[4].description} 
  </p>
  {content.Sections[4].btn_txt &&
   <div className=" mt-4 text-center mb-5">
   <ButtonStyleOne title = {content.Sections[4].btn_txt} />
</div>
  }
 

</div> 
{/* 
 <Footer/>
 */}


    <style>
        {`
    html{
        overflow-y: auto;
        }
        `}
    </style>
    <style jsx>
        {`
          .bottom-wave-bg{
            padding-bottom: 90px;
            background: url(/images/web/bottom-wave-blue.png);
            background-position: bottom;
            background-repeat: no-repeat;
          }
     .wave-layer-bg-slides{ padding-top: 100px}
     .ecommerce-thumbnail img{max-height: 140px}   
     
      `}
    </style>
    </>
)

}

export default Shark;