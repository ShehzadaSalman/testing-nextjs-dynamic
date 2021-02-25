
import PageBanner from '../NewComponents/PageBanner/PageBanner';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailOne from '../NewComponents/ThumbnailOne';
import ThumbnailTwo from '../NewComponents/ThumbnailTwo';
import BrandingForm from '../NewComponents/BrandingForm';
import DevelopmentForm from '../NewComponents/DevelopmentForm';
import MarketingForm from '../NewComponents/MarketingForm';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';

const ImagePath = process.env.ImagePath
import { useRouter } from 'next/router';
const Retargeting = ({finalData}) => { 

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


// open marketing form 
const openMarketingForm = () => {
  let form = document.querySelector(".formPopup-branding");
  form.style.display = 'block';
} 
  
return (
<React.Fragment>
  <div className = "main-content">
{/*  The First section    */}
      <PageBanner
      category = "marketing"
       heading = {content.BannerHeading}
       paragraph = {content.BannerDescription} 
       bg = {ImagePath+content.BannerImage}
       buttontext = {content.BannerButton}
       wavename = "wave2.png">
     </PageBanner>
     <SuccessDisplay />
     
  {/*  The second section    */}
    <div className = "bg-grey padding-bottom-30">
          <div className="container">
         <div className = "padding-top-20"></div>
         <div className = "padding-top-20"></div>
         <h2 className = "heading">
         {content.SubBannerHeading}
         </h2>
         <p className = "paragraph">
         {content.SubBannerParagraph}
         </p>
          
    <div className="text-center mt-4"> 
     <a onClick={openMarketingForm}>
     <p className="link-class">
         {content.SubBannerButton}
     </p>
     </a>
    </div>
         </div>
         <div className = "margin-top-20"></div>

        </div>
        {/*  The Fifth section    */}
        <div className  = "upper-wave-bg">
        <div className="container">
          <div className = "padding-top-40"></div>
          <div className = "padding-top-20"></div>
        <h2 className = "heading">{content.Sections[0].title}</h2>
      <p className = "paragraph pb-4">
        {content.Sections[0].description} 
      </p>
        <div className = "padding-top-20"></div>
        </div>
        </div>
          {/*  The Sixth section    */}
      <div className = "bg-grey padding-top-30 padding-bottom-30">
       <h2 className = "heading text-uppercase pt-3">{content.widget_headings[0].title}</h2>
       <div className = "padding-top-40"></div>
<div className="container">
  <div className = "row d-flex justify-content-between">
  {content?.ListingOne.map(li => (
 <div className="col-md-2 col-6">
 <ThumbnailTwo imgAddress = {ImagePath + li.image} title = {li.title} />
 </div>
 ))}
  </div>



 
</div>
 <div className = "padding-top-50"></div>
<div className = "text-center">
 <a onClick = {openMarketingForm}>
   {content.Buttons[0] &&  <ButtonStyleThree title = {content.Buttons[0].title}></ButtonStyleThree> }

 </a> 

</div>
</div>

    {/*  The Sevent section    */}

    <div className  = "upper-wave-bg">
    <div className="container">
      <div className = "padding-top-40"></div>
      <div className = "padding-top-20"></div>
    <h2 className = "heading">{content.Sections[1].title}</h2>
    <p className = "paragraph pb-3">
    {content.Sections[1].description}
    </p>
    <div className = "padding-top-20"></div>
    </div>
    </div>

  {/*  The Eigth section    */}
  <BgContentDiv bg = "/images/web/retargeting/retargeting-banner-three.png">
    <div className="container mt-3">
  <div className="row box-direction">
  {finalData.widget.map(li => { 
   if(li.level == 2){
    return(
      <div className="col-lg-2 col-md-4 col-6 mb-md-5">
       <ThumbnailOne imgAddress = {ImagePath + li.image} title = 
       {locale === 'ar' ? li.btn_text_arabic : li.btn_text_english}/>
      </div>
    );
   }else{
     return null;
   }

  })}



    {/* {content.ListingTwo.map(li => (
    
    ))} */}
  </div>

    <div className = "text-center padding-top-40 padding-bottom-20">
      <a onClick = {openMarketingForm}>
      {content.Buttons[1] &&   <ButtonStyleTwo 
      title = {content.Buttons[1].title}/> }
      </a>
    </div>
    </div>
  </BgContentDiv>
  <div className="padding-top-50 padding-bottom-30"></div>
  <ReportCardFooter
  category="marketing"
  imgAddress={ImagePath + content.Book.image}
  title={content.Book.title}
  caption={content.Book.description}
  btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
/>
</div>
<style>{`
  body{
    overflow:inherit;
  }
  .upper-wave-bg{
    background-image: url('images/web/upper-wave-blue.png');
    background-repeat: no-repeat;
  }
  .justify-center{
    justify-content: center;
  }
`}

</style>
</React.Fragment>
)
}
export default React.memo(Retargeting);
