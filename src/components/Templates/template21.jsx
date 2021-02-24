import PageBanner from '../NewComponents/PageBanner/PageBanner';
import Container from '@material-ui/core/Container';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree.jsx';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne';
import NewTermsOfServices from '../NewComponents/NewTermsOfService';
import ListItemSix from '../NewComponents/listItemSix'
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import BgContentDiv from '../NewComponents/BContentDiv';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo';
import { useRouter } from 'next/router';
import Headerfive from '../HeaderFive';
import Link from 'next/link';
const ImagePath = process.env.ImagePath

function SMMPAGE({finalData}) {

  const router = useRouter();
  const { locale } = router;
  var pageurl = "https://techbay.co"+router.pathname;

  let content;
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

    let Book = {
      "title": finalData.book.title_english,
      "description": finalData.book.desc_english,
      "image": finalData.book.image,
      "status": finalData.book.status
    };

    let Widgets = finalData.widget.map(data => {
      return {
        "id": data.id,
        "title": data.title_english,
        "description": data.desc_english,
        "level": data.level,
        "btn_txt": data.btn_text_english,
        "image": data.image,
      }
    })
    let Buttons = finalData.widget_btn && finalData.widget_btn.map(data => {
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
        "level": data.level,
        "image": data.image
      }
    }) : '';


    content = {
      "BannerHeading": finalData.header_title_english,
      "BannerDescription": finalData.header_desc_english,
      "BannerImage": finalData.header_bg_image,
      "BannerButton": finalData.header_btn_txt_english,
      "FirstVideo": finalData.video_link,
      "SubBannerHeading": finalData.sub_header_title_english,
      "SubBannerParagraph": finalData.sub_header_desc_english,
      "SubBannerButton": finalData.sub_header_btn_txt_english,
      "SubBannerImage": finalData.sub_header_image,
      "Sections": Sections,
      "ListingOne": Widgets.filter(service => service.level === 1),
      "ListingTwo": Widgets.filter(service => service.level === 2),
      "ListingThree": Widgets.filter(service => service.level === 3),
      "ListingFour": Widgets.filter(service => service.level === 4),
      "Buttons": Buttons,
      "widget_headings": WidgetHeadings,
      "Book": Book
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
    let Book = {
      "title": finalData.book.title_arabic,
      "description": finalData.book.desc_arabic,
      "image": finalData.book.image,
      "status": finalData.book.status
    };

    let Widgets = finalData.widget.map(data => {
      return {
        "id": data.id,
        "title": data.title_arabic,
        "description": data.desc_arabic,
        "level": data.level,
        "btn_txt": data.btn_text_arabic,
        "image": data.image,
        "level": data.level,
      }
    })
    let Buttons = finalData.widget_btn && finalData.widget_btn.map(data => {
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
        "level": data.level,
        "image": data.image
      }
    }) : '';
    content = {
      "BannerHeading": finalData.header_title_arabic,
      "BannerDescription": finalData.header_desc_arabic,
      "BannerImage": finalData.header_bg_image,
      "BannerButton": finalData.header_btn_txt_arabic,
      "FirstVideo": finalData.video_link,
      "SubBannerHeading": finalData.sub_header_title_arabic,
      "SubBannerParagraph": finalData.sub_header_desc_arabic,
      "SubBannerButton": finalData.sub_header_btn_txt_arabic,
      "SubBannerImage": finalData.sub_header_image,
      "Sections": Headings,
      "ListingOne": Widgets.filter(service => service.level  === 1),
      "ListingTwo": Widgets.filter(service => service.level  === 2),
      "ListingThree": Widgets.filter(service => service.level === 3),
      "ListingFour": Widgets.filter(service => service.level === 4),
      "Buttons": Buttons,
      "widget_headings": WidgetHeadings,
      "Book": Book
    }
  }





  const openMarketingForm = () => {
    let form = document.querySelector(".formPopup-branding");
    form.style.display = 'block';
  } 


  return (
    <React.Fragment>
      <div className="Content-div">
    
        {/*  the first section  */}
        <PageBanner
          category = "marketing"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          wavename="wave2.png"
        ></PageBanner>
        <SuccessDisplay />

        {/*  the second  section  */}
        <div className="bg-grey padding-top-30 padding-bottom-40">
          <div className="container">
            <h2 className="heading text-uppercase">
            {content.SubBannerHeading}
            </h2>
            <p className="paragraph">
           {content.SubBannerParagraph}
         </p> 
          </div>
      </div>


        {/*   the fourth section  */ }
        <div className="wave-upper-3 padding-bottom-30">
          <div className="container">
            <h2 className="heading padding-top-30 text-uppercase">
            {content?.Sections[0]?.title}
            </h2>
            <p className="paragraph mb-4">
            {content?.Sections[0]?.description}
            </p>
            <div className = "text-center mb-5">
             
            {content?.Sections[0]?.btn_txt && <a onClick = {openMarketingForm}>
        <ButtonStyleThree title =  {content?.Sections[0]?.btn_txt} /> 
        </a>  }    
    
      </div>
          <div className="row">
            {content.ListingOne.map(li => (
              <div className="col-md-3 px-1 mb-4">
              <div className="smm-thumbnail text-center">
                <img src={ImagePath + li.image}  alt = "social campaign"  />
                <div className="caption">
                  <p>{li.title}</p> 
                </div>
              </div>
             </div>
            ))}
    

          </div>
          </div>
        </div>
        
        {/* the fifth section  */}
        <div className = " mb-1">
         <div className="container">
           <div className="row">
             {content?.ListingTwo.map(li => (
      <div className="col-md-6 mb-4">
      <div className="smm-casestudy text-center">
         <img src = {ImagePath + li.image} alt = "case study" className = "img-fluid" />
         <div className="caption">
           <p className = "paragraph">{li.title}</p>
           <a download={li.link} href={li.link}>Download</a>
         </div> 
      </div>
    </div>

             ))}
       
           </div>
        
        <div className="text-center mt-4 mb-4">
        
        {content?.Buttons[0].title && <Link href="case-studies">
            <a>
              <ButtonStyleOne title=  {content.Buttons[0].title} />
            </a>
          </Link> }
      
        </div>
        
        
         </div>
        </div>


   <div>
   <img src = "/images/web/smm/smm-section-wave.png" alt = "wave" className = "img-fluid" />
 
  <div className = " grey-bg"> 

 <div className="container pt-3">
   <h2 className="heading text-uppercase">
{content?.Sections[1]?.title}
   </h2>
   <p className="paragraph mb-5">
   {content?.Sections[1]?.description} 
   </p>

<div className="row mt-3 pb-5 d-flex justify-content-center">
 {content.ListingThree.map(li => (
  <div className="col-md-2 col-6">
  <div className="social-div d-flex justify-content-center align-items-center align-content-center">
 <img src = {ImagePath + li.image} className = "img-fluid" alt = "social" />
  </div>
</div>

 ))}

  
</div>


 </div>
   </div>



  
  </div>   


<BgContentDiv  bg = "/images/web/smm/smm-banner-three.png">
   <div className="container">
      <h2 className="white-heading mb-5 mt-3 text-uppercase">
       {content.widget_headings[0].title}
      </h2>
      <div className="row">
        {content?.ListingFour.map(li => (
        <div className="col-md-6 mb-2">
         <ListItemSix dark imgAddress = {ImagePath+ li.image}
          description = {li.title} />
      </div>))}
   </div>
   <div className = "mb-4 mt-4 pt-sm-0 text-center">
      <a onClick = {openMarketingForm}>
        <ButtonStyleTwo title = "I Need Help!" />
      </a>
    </div>
   
   
   </div>

</BgContentDiv>



{/*  the sixth section  */}

{/* the seventh section  */}
<div className="bg-white padding-top-40 padding-bottom-30">
    <div className="container">
      <h2 className="heading padding-bottom-20 padding-top-30">
      {content?.Sections[2]?.title}
      </h2>
      <p className = "paragraph">
      {content?.Sections[2]?.description}
      </p>
    
    {content?.Sections[2]?.btn_txt &&
          <div className = "text-center padding-top-30">
          <a onClick = {openMarketingForm}>
          <ButtonStyleThree title = {content?.Sections[2]?.btn_txt}/> 
          </a>
        </div>
       }

    </div>
 </div>
 <div className="padding-bottom-50 padding-top-30"></div>
 <ReportCardFooter
  category="marketing"
  imgAddress={ImagePath + content.Book.image}
  title={content.Book.title}
  caption={content.Book.description}
  btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
/>

 </div>{' '}
      <style>
   {`
   
   html{
    overflow-y: auto;
  }
  .justify-center{
    justify-content: center;
  }
   
   `}
      </style>
      <style jsx>
        {`
        
        .smm-banner-two{
          background-image:  url('images/web/smm/smm-banner-two.png');
          background-position: center;
          background-size: cover;
          background-color: grey;
        }
        .wave-layer-bg-slides{
          padding-top: 30px;
        }
        .wave-upper-3{
          padding-top: 35px;
        }
        .smm-thumbnail .caption{
          background-color: rgba(181, 211, 229, 0.15);
          padding-top: 40px;
          padding-bottom: 15px;
          display: flex;
          position: relative;
          margin-top: -31px;
          justify-content:center;
          align-items: center;
          align-content: center;

        }
        .smm-thumbnail .caption p{
          margin: 0;
          color:  #1B1818;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .smm-casestudy{
         background-color: #F4F9FB;
        }
        .smm-casestudy   img{

        }
        .smm-casestudy .caption{
      padding-top: 10px;
      padding-bottom: 20px;
        }
        .smm-casestudy .caption p{
          margin-bottom: 0;
          margin-top:10px;
        } 
        .smm-casestudy .caption a{
         color:  #4A91BD;
        } 
        .grey-bg{
          background-color: #f6f6f6;
        }
        .social-div{
          min-height: 130px;
          border-radius: 2px;
          background: #fff;
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
          margin-bottom: 30px;
        }
        .sixlist-div.jsx-1463808104 p.jsx-1463808104{
          display: flex;
          align-items:center;
        }
        .sixlist-div.jsx-1463808104{
          margin-bottom: 35px;
          align-items: center;
        }
        


        `}
      </style>
    </React.Fragment>
  );
}
export default SMMPAGE;
