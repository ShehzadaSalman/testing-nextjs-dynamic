import Link from 'next/link'
import Footer from '../Footer';
import LandingThumbnail from '../NewComponents/LandingThumbnail';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import {useRouter} from 'next/router';
let sectionLoop = 0;
const ImagePath = "https://staging.techbay.co/storage/app/";








function BrandingContent({data, services, books, language }) {


 const router = useRouter();
 const {locale} = router;
  const formpopupBranding = () => {
    $('#formPopup-branding').css("display", "block");
    console.log("this is branding popup")
  }
  const closeFormPopup = () => {
    console.log("close the popup here")
  }

  const scrolldownmethod = (targetdiv) => {
    var targetid = '#' + targetdiv;
    $(targetid)[0].scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (<>

    <div className="bottomS" id="br-targetdiv">
      {/*  success message */}
      <div className="detail-content-trigger NewContent">
        <div className="brandings">
          <div className="whatwedo branding-what-we-do" id="whatwedo" style={{ paddingBottom: "0px !important" }} >
            <div className="wave-effect wave-anim">
              <div className="waves-shape shape-three">
                <div className="wave wave-three"></div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <h3 className="white-heading">
                    
                
                    {locale === 'en-US' 
                     ? <>WHAT WE DO</>
                      : <>الذي نفعله</>
                     }
                  </h3>
                  <p className="white-paragraph pb-5">
                  {locale === 'en-US' 
                     ? <> {data.what_we_do}</>
                      : <> {data.what_we_do_arabic} </>
                     }
                  


                  
                   </p>
                </div>
              </div>
            </div>
            <img src="/images/web/new-pages/Union-4.png" className="full-img" alt = "what we do" loading="lazy" />
          </div>

          <div className="features bg-grey-f3f3f3">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-12 pb-4">
                  <h3 className="pb-sm-5 heading pt-4 pt-md-0" style={{ fontSize: "3rem" }}>
           
                                  
                  {locale === 'en-US' 
                     ? <> FEATURES</>
                      : <> الميزات </>
                     }
                  </h3>
                </div>


      


{/* displaying the thumbnails here */}
  { services.length > 0 && services.map(
    thumbnail => 
      <div className="col-sm-4 col-lg-3 d-flex box-direction" key={thumbnail.id}>
      {locale === 'en-US' 
      ?<LandingThumbnail
      img={ImagePath+thumbnail.logo}
      title={    thumbnail.title}
      description={thumbnail.short_description}
      scrolling={() => scrolldownmethod(thumbnail.id)}
      btn_txt = "Details"
      />
      : <LandingThumbnail
      img={ImagePath+thumbnail.logo}
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



<div className="wave-layer-bg-slides">
{services.length > 0 &&  services.map(section => {

  sectionLoop = Math.floor(sectionLoop + 1);
  if(sectionLoop % 2 == 0){
    return (
      <div className="brandWrrap"  key={section.id}  id={section.id}>
      <div className="container pt-0 pt-md-5">
        <div className="row">
          <div className="col-sm-5">
            <div>
              <Link href={"/"+section.slug.toString()}>
                <img alt = "design services" className="cursor-pointer" 
                src={ImagePath+ section.banner}
                 alt="branding serices" className="img-fluid" loading="lazy"/>
             </Link>
            </div>
          </div>
          <div className="col-sm-7 d-flex align-content-center">
            <div className="contentFet remove-paddtop-mobile pt-sm-5">
              <Link href={"/"+section.slug.toString()}>
                <h5 className="cursor-pointer left-heading">
                {locale === 'en-US' 
                ?  <>{section.title}</>
                :  <>{section.title_arabic}</>
                } 
                </h5>
              </Link>

              <p className="left-paragraph">
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
               <Link href={"/"+section.slug.toString()}>
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

          <div className="col-sm-5 order-1 order-md-12">
            <div className="">
              <Link  href={"/"+section.slug.toString()}>
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
      </div>
      <div className="wave-layer-bg-slides-bottom" style={{ backgroundColor: "#fff" }}>

      </div>

<ReportCardFooter
category="branding"
imgAddress={ImagePath + books[0].image}
title={locale === 'ar' ? books[0].title_arabic : books[0].title_english}
caption={locale === 'ar' ? books[0].description_arabic : books[0].description}
btntext={locale === 'ar' ? books[0].btn_title_arabic : books[0].btn_title_english}
/>


     
      <Footer />
    </div>

    <style>
      {`
  @media only screen and (max-width: 600px) {
    .remove-paddtop-mobile{
      padding-top: 20px !important;  
    }
  }
  .left-paragraph{text-align: ${locale === 'ar' ? 'right' : 'left'}}
  .left-heading{text-align: ${locale === 'ar' ? 'right' : 'left'}}
  .box-align{text-align: ${locale === 'ar' ? 'right' : 'left'}}

  .branding-what-we-do{
     background-color: grey; 
     background-image: url('/svg-pic/web/new-pages/branding-new-banner1.svg');
     background-repeat: no-repeat;
     background-position: center;
     background-size: cover;
     padding-bottom: 0 !important;
}
.features{
  padding-top: 40px;
}
.bg-grey-f3f3f3{
  background-color: #f3f3f3;
}
  `}
    </style>
  </>);
}
export default React.memo(BrandingContent);