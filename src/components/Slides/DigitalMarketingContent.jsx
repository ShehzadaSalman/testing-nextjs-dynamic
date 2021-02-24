import Link from 'next/link';
import Footer from '../Footer';
import ReportCardFooterMarketing from '../NewComponents/ReportCardFooterMarketing';
import {UserConsumer} from '../../ContextApi/usercontext';
import { Container } from '@material-ui/core';
import {useRouter} from 'next/router'
import LandingThumbnail from '../NewComponents/LandingThumbnail';
let sectionLoop = 0;
const ImagePath = "https://staging.techbay.co/storage/app/";

function DigitalMarketingContent({data, services, books }){

  const router = useRouter();
  const {locale} = router;     
  const formpopupBranding = () => {
    $('#formPopup-branding').css("display", "block");
    console.log("this is branding popup")
  }
     
      const formpopupReport = (event) => {
        event.preventDefault();
        let websiteurl = event.target.querySelector("#report-url").value;
        console.log(websiteurl);
        $('.formPopup-report').css("display","block");
      }
   
     
       const scrolldownmethod = (targetdiv) =>{
        var targetid = '#' + targetdiv;
        $(targetid)[0].scrollIntoView({
        behavior: 'smooth'
          });
      }
    
    return (
    <>
  
          <div className="bottomS"  id = "dm-targetdiv">
                <div className="detail-content-trigger NewContent">
                  <div className="digitals">
                    <div className="whatwedo" id="whatwedo">

                    <div className="wave-effect wave-anim">
                        <div className="waves-shape shape-three">
                          <div className="wave wave-three"></div>
                        </div>
                      </div>





                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12 col-md-12">
                          <h3 className="heading">
                    {locale === 'en-US'
                      ?<>WHAT WE DO</>
                      : <>الذي نفعله</>
                      }
                      </h3>
                      <p className="paragraph">
                     {locale === 'en-US'
                      ?<>  {data.what_we_do}</>
                      : <>  {data.what_we_do_arabic}</>
                      }
                     </p>
                     
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="features bg-grey-f3f3f3" style = {{ paddingTop: "0px"}}>


      {/* new banner comes here  */}
 <div id = "report-bg" className = "" style = {{ position: "relative" , zIndex: "999" }}>
 <Container>
   <div id = "report-banner-div" className = "row pt-0 pt-lg-5">
     <form onSubmit = {formpopupReport} style = {{ display: "contents" }}>
    <div className="col-lg-1 text-center pb-3 pb-lg-0">
    <img loading="lazy" src = "/images/web/speed-icon.png" className = "d-inline-block"  alt = "Free Website audit" />
    </div>
     <div className="col-lg-4  pb-3 pb-lg-0">
       <h3 className="forpopup-report-title">
         {locale === 'ar'
          ? 'تدقيق SEO للموقع المجاني في 90 ثانية !!'
          : 'FREE WEBSITE SEO AUDIT IN 90-SECONDS!!'
         }
      </h3>
     </div>
     <div className="col-md-8 col-lg-4 pb-3 pb-lg-0">
     <UserConsumer>
      {({ updateUsername }) => (
  <div className="input-group">
          <div className="input-group-prepend">
          <span className="input-group-text"   id="basic-addon1">https://</span>
        </div>
        <input
            id = "report-url" 
            type = "text" 
            className = "form-control"
            placeholder = "example.com" required 
           pattern="(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"     
            onChange={event => {
              updateUsername(event.target.value);
            }}
          />
 </div>
      )}

    </UserConsumer>
    
     
     </div>
     <div className = "col-lg-2  text-center">
     <button className = "view-report" type = "submit">
     {locale === 'ar' 
      ? 'عرض التقرير'
      : 'View Report'
      }
       </button>
     </div>
     </form>
   </div>

 </Container>
 <img src = "/images/web/new-pages/Union-4.png" className = "full-img" alt = "Techbay Report" loading="lazy" />
 </div>







                        <div className="container">
                        <div className="row d-flex justify-content-center">
                          <div className="col-sm-12 col-md-12 pb-4">
                            <h3 className = "pb-sm-5 heading pt-4 pt-md-0" style = {{ fontSize: "3rem"}}>
                            {locale === 'en-US' 
                              ?<> FEATURES</>
                              :<> الميزات </>
                              }
                             </h3>
                          </div>
                {/* displaying the thumbnails here */}
                { services.length > 0 && services.map(
                  thumbnail => 
                    <div className="col-sm-4 col-lg-3 d-flex" key={thumbnail.id}>
                    {locale === 'en-US' 
                    ?<LandingThumbnail
                    img={"https://staging.techbay.co/storage/app/"+thumbnail.logo}
                    title={    thumbnail.title}
                    description={thumbnail.short_description}
                    scrolling={() => scrolldownmethod(thumbnail.id)}
                    btn_txt = "Details"
                    />
                    : <LandingThumbnail
                    img={"https://staging.techbay.co/storage/app/"+thumbnail.logo}
                    title={    thumbnail.title_arabic}
                    description={thumbnail.short_description_arabic}
                    scrolling={() => scrolldownmethod(thumbnail.id)}
                    btn_txt ="تفاصيل"
                    />
                    }
                  </div>
  ) }


                       </div>
                      </div>
                </div>
              </div>

              <div className="wave-layer-bg-slides">
              {services.length > 0 &&  services.map(section => {
  sectionLoop = Math.floor(sectionLoop + 1);
  console.log("WHAT WE ARE GETTING",sectionLoop/2);
  if(sectionLoop % 2 == 0){

    return (
      <div className="brandWrrap"  key={section.id}  id={section.id}>
      <div className="container pt-0 pt-md-5">
        <div className="row">
          <div className="col-sm-5">
            <div>
              <Link href={"/"+section.slug.toString()}>
                <img alt = "design services" className="cursor-pointer" 
                src={ImagePath + section.banner}
                 alt="branding serices" className="img-fluid" loading="lazy"/>
             </Link>
            </div>
          </div>
          <div className="col-sm-7 d-flex align-content-center">
            <div className="contentFet remove-paddtop-mobile pt-sm-5">
              <Link  href={"/"+section.slug.toString()}>
                <h5 className="cursor-pointer left-heading">
                {locale === 'en-US' 
                ?  <>{section.title}</>
                :  <>{section.title_arabic}</>
                } 
                </h5>
              </Link>
              <p className="left-paragraph padding-bottom-10">
              {locale === 'en-US' 
                ?  <>{section.description}</>
                :  <>{section.description_arabic}</>
                } 
               </p>
               <div className="box-align">
               <a onClick={formpopupBranding} className="px-sm-2 px-1">
                <button className="landing-read-more-button">
                {locale === 'en-US' 
                ? <>Get In Touch</>
                : <>ابقى على تواصل</>
                }
                  
                  </button>
              </a>
              <Link href={"/"+section.slug.toString()}>
                <a className="">
                  <button className="landing-read-more-button-outline">
                  {locale === 'en-US' 
                ? <>Read More</>
                : <>اقرأ أكثر</>
                }
                    
                    </button>
                </a>
              </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }else{
    return (
   
      <div className="brandWrrap rightalign" id={section.id}>
      <div className="container pt-0 pt-md-5">
        <div className="row">
          <div className="col-sm-7 d-flex align-content-center  order-12 order-md-1 ">
            <div className="contentFet remove-paddtop-mobile pt-sm-5">
               <Link  href={"/"+section.slug.toString()}>
                <h5 className="cursor-pointer left-heading">
                {locale === 'en-US' 
                ?  <>{section.title}</>
                :  <>{section.title_arabic}</>
                } 
                  </h5>
              </Link>
             <p className="left-paragraph padding-bottom-10">
             {locale=== 'en-US' 
              ? <>{section.description}</>
              : <>{section.description_arabic}</>
             } 
              </p>
              <div className="box-align">
              <a onClick={formpopupBranding} className="px-1 px-sm-2">
                <button className="landing-read-more-button">
                {locale === 'en-US' 
                ? <>Get In Touch</>
                : <>ابقى على تواصل</>
                }  
                </button>
              </a>

              <Link  href={"/"+section.slug.toString()}>
                <a className="">
                  <button className="landing-read-more-button-outline">
                  {locale === 'en-US' 
                  ? <>Read More</>
                  : <>اقرأ أكثر</>
                  }
                  </button>
                </a>
              </Link>
              </div>
       
            </div>
          </div>

          <div className="col-sm-5 order-1 order-md-12">
            <div className="">
              <Link href={"/"+section.slug.toString()}>
                <img loading="lazy" className="cursor-pointer" 
                src={ImagePath + section.banner}
                 alt="branding serices" className="img-fluid" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
  }
})}


</div>



 

</div>
  <div className = "wave-layer-bg-slides-bottom" style = {{ backgroundColor: "#fff"}}>
</div>
                
               {locale == 'ar'
               ?            <ReportCardFooterMarketing
               category = "marketing"
               imgAddress={ImagePath + books[0].image}
               title={books[0].title_arabic}
               caption={books[0].description_arabic}
               btntext={locale === 'ar' ? books[0].btn_title_arabic : books[0].btn_title_english}/>
               :   <ReportCardFooterMarketing
               category = "marketing"
               imgAddress={ImagePath + books[0].image}
               title={books[0].title_english}
               caption={books[0].description}
               btntext={locale === 'ar' ? books[0].btn_title_arabic : books[0].btn_title_english}/>
               } 
                
     
               
               
                <Footer />
              </div> 
              
              <style>
              {`

              #report-banner-div h3{
                color: yellow !important;  
                font-weight: bold;
              }           
                


              @media only screen and (max-width: 600px) {
                .remove-paddtop-mobile{
                  padding-top: 20px !important;  
                }
              }
              #report-bg{
                padding-top: 30px;
                background: url('/images/speed-banner.png');
                background-size: cover;
                background-position: center;
              }
              @media only screen and (min-width: 1023px) and (max-width: 1200px){
                .forpopup-report-title{
                  padding-left: 50px !important;}
                  button.view-report{font-size:14px; padding: 8px 23px;}
              }

              `}
              </style>
    
     </>);




}





export default React.memo(DigitalMarketingContent);