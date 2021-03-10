import PageBanner from '../NewComponents/PageBanner/PageBanner';
import ButtonStyleTwo from '../NewComponents/Buttons/buttonStyleTwo.jsx';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailThree from '../NewComponents/ThumbnailThree';
import ThumbnailFour from '../NewComponents/ThumbnailFour';
import HorizontalTimeline from '../NewComponents/horizontal-timeline.jsx';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import { useRouter } from 'next/router';
import { openBrandingForm } from '../../lib/helper';
import Headerfive from '../HeaderFive';

const ImagePath = process.env.ImagePath;

const Agency = ({ finalData }) => {
  // have a condition to check if the language is english or arabic
  const router = useRouter();
  console.log(router.pathname);
  const { locale } = router;

  let content;
  if (locale === 'en-US') {
    content = {
      "BannerHeading": finalData.header_title_english,
      "BannerDescription": finalData.header_desc_english,
      "BannerImage": finalData.header_bg_image,
      "BannerButton": finalData.header_btn_txt_english,
      "FirstVideo": finalData.video_link,
      "SubBannerHeading": finalData.sub_header_title_english,
      "SubBannerParagraph": finalData.sub_header_desc_english,
      "SectionOneHeading": finalData.headings[0].title_english,
      "SectionOneParagraph": finalData.headings[0].desc_english,
      "SectionTwoHeading": finalData.headings[1].title_english,
      "SectionTwoParagraph": finalData.headings[1].desc_english,
      "SectionTwoImage": finalData.headings[1].heading_image,
      "SectionThreeHeading": finalData.headings[2].title_english,
      "SectionThreeParagraph": finalData.headings[2].desc_english,
      "SectionThreeButton": finalData.headings[2].btn_txt_english,
      "SectionFourHeading": finalData.headings[3].title_english,
      "SectionFourParagraph": finalData.headings[3].desc_english,
      "ListingOne": finalData.widget.filter(service => service.level === 1),
      "ListingTwo": finalData.widget.filter(service => service.level === 2),
      "ListingThree": finalData.widget.filter(service => service.level === 3),
      "ListingFour": finalData.widget.filter(service => service.level === 4),
      "HeadingOne": finalData.widget_headings[0].desc_english,

    }
  } else { // when we set it to arabic

    content = {
      "BannerHeading": finalData.header_title_arabic,
      "BannerDescription": finalData.header_desc_arabic,
      "BannerImage": finalData.header_bg_image,
      "BannerButton": finalData.header_btn_txt_arabic,
      "FirstVideo": finalData.video_link,
      "SubBannerHeading": finalData.sub_header_title_arabic,
      "SubBannerParagraph": finalData.sub_header_desc_arabic,
      "SectionOneHeading": finalData.headings[0].title_arabic,
      "SectionOneParagraph": finalData.headings[0].desc_arabic,
      "SectionTwoHeading": finalData.headings[1].title_arabic,
      "SectionTwoParagraph": finalData.headings[1].desc_arabic,
      "SectionTwoImage": finalData.headings[1].heading_image,
      "SectionThreeHeading": finalData.headings[2].title_arabic,
      "SectionThreeParagraph": finalData.headings[2].desc_arabic,
      "SectionThreeButton": finalData.headings[2].btn_txt_arabic,
      "SectionFourHeading": finalData.headings[3].title_arabic,
      "SectionFourParagraph": finalData.headings[3].desc_arabic,
      "ListingOne": finalData.widget.filter(service => service.level === 1),
      "ListingTwo": finalData.widget.filter(service => service.level === 2),
      "ListingThree": finalData.widget.filter(service => service.level === 3),
      "ListingFour": finalData.widget.filter(service => service.level === 4),
      "HeadingOne": finalData.widget_headings[0].desc_arabic,

    }
  }

  return (
    <React.Fragment>
      <div className="content-div box-direction">

        <PageBanner dark
          category="branding"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext={content.BannerButton}
          wavename="wave2-light.png"
        ></PageBanner>
        <SuccessDisplay />
        {/*  the second  section  */}
        <div className="bg-white padding-bottom-30">
          <div className="container">
            <div className="padding-top-20"></div>
            <div className="padding-top-20"></div>
            <h2 className="heading">{content.SubBannerHeading}</h2>
            <p className="paragraph">
              {content.SubBannerParagraph}
              {' '}
            </p>
          </div>

          <div className="margin-top-20"></div>
          <div className="margin-top-20"></div>
        </div>

        <div className="container mt-4">
          <div className="row box-direction">
            {content.ListingOne.map(list => {
              return (<div key={list.id} className="col-md-3">
                <ThumbnailThree imgAddress={ImagePath + list.image}
                  title={locale === 'ar' ? list.title_arabic : list.title_english} />
                <p className="paragraph">
                  {locale === 'ar' ? list.desc_arabic : list.desc_english}
                </p>
              </div>);

            })}
          </div>
        </div>


        <div className="campaign-div mt-5">
          <div className="bg-lightblue">
            <div className=" campaign-div pb-md-0 pb-3">
              <h3 className="padding-top-20">{content.SectionOneHeading}</h3>


              <ul className="m-0">
                {content.SectionOneParagraph}
              </ul>
            </div>
          </div>
          <img src="/svg-pic/web/pageassets/thin-blue-wave.svg" alt="thin blue wave" className="fullwidth" />
        </div>


        {/* Fifth Section */}
        <div className="mt-3 mb-5">
          <div className="container box-direction">
            <h2 className="heading text-uppercase">{content.SectionTwoHeading}</h2>
            <p className="paragraph">
              {content.SectionTwoParagraph}
            </p>
          </div>
        </div>


        {/* Sixth Section   */}
        <BgContentDiv bg="/svg-pic/web/pageassets/banner-two.svg">
      <div className="container">
      {/* need to render a list here */}
      {/* <p className="left-paragraph" style = {{ color: '#fff' }}>
      {content.SectionThreeParagraph}
      </p> */}
          

            <ul className="my-3 box-direction text-direction">
              {content.ListingFour.map(list =>
                <li key={list.id} className="white-listing">{
                  locale === 'ar' ? list.desc_arabic : list.desc_english
                }</li>)}
            </ul>
          </div>

          <div className="text-center pt-3">
            <a onClick={openBrandingForm}>
              <ButtonStyleTwo title={content.SectionThreeButton} />
            </a>
          </div>

        </BgContentDiv>
        <div className="section-wrapper bg-blue padding-bottom-30">
          {/*  Seventh Section  */}
          <div className="padding-top-40 bg-grey-second">
            <h2 className="heading remove-margin padding-bottom-50 padding-top-50">{content.HeadingOne}</h2>
            <div className="padding-bottom-30"></div>
            <div className="container box-direction">
              <div className="time-line-container row">
                {content.ListingTwo.map(list => (<div className="col-md-3">
                  <HorizontalTimeline imgAddress={ImagePath + list.image}
                    title={locale === 'ar' ? list.title_arabic : list.title_english} />
                </div>))}
              </div>
            </div>

          </div>
          <img src="/images/web/pageassets/circular-bottom-wave.png" alt="circular bottom wave" className="fullwidth" />

          {/* Eigth Section  */}
          <div className="padding-top-40">
            <div className="container">
              <h2 className="white-heading">
                {content.SectionFourHeading} </h2>
              <p className="white-paragraph">
                {content.SectionFourParagraph}
              </p>
            </div>
          </div>
        </div>


        {/* Ninth Section */}
        <div className="">
          <div className="bg-lightblue padding-top-40">
            <div className="container campaign-div">
              <div className="row box-direction">

                {content.ListingThree.map(list => (
                  <div className="col-md-3 mb-3">
                    <ThumbnailFour imgAddress={ImagePath + list.image}
                      title={locale === 'ar' ? list.title_arabic : list.title_english} />
                  </div>
                ))}

              </div>
              <div className="text-center mt-5">

              </div>
            </div>
            <div className="padding-top-50 padding-bottom-40"></div>
          </div>
        </div>

        <ReportCardFooter
          category="branding"
          imgAddress={ImagePath + finalData.book.image}
          title={locale === 'ar' ? finalData.book.title_arabic : finalData.book.title_english}
          caption={locale === 'ar' ? finalData.book.desc_arabic : finalData.book.desc_english}
          btntext={locale === 'ar' ? finalData.book.btn_title_arabic : finalData.book.btn_title_english}
        />

      </div>
      <style>{
        `
html{
  overflow-y: auto;
}
.remove-margin{ margin: 0;}
.bg-lightblue{ background-color: #EEF8FF;}
.fullwidth{ width: 100%;}
.box-direction{direction: ${locale === 'ar' ? 'rtl' : 'ltr'};}
.text-direction{text-align: ${locale === 'ar' ? 'rtl' : 'ltr'};}
.campaign-div{ padding-top: 20px; padding-bottom: 30px;}
.campaign-div h3{
  font-family: 'Roboto',sans-serif;
  margin: 0;
  color: #212121;
  text-align: center;
  padding-bottom: 30px;
}
.campaign-div ul{ text-align: center;}
.campaign-div ul li{
  display: inline-block; 
  font-family: 'Roboto',sans-serif; 
  font-size: 17px; 
  list-style-type: circle;
   margin-left: 10px;
   font-weight:600;
   margin-right: 10px;}


  .campaign-div ul li:before {
    content: "•"; /* Insert content that looks like bullets */
    padding-right: 8px;
    color: #1B1818; /* Or a color you prefer */
  }
 .banner-two-list ul li{
color: #fff;
}
.white-listing{
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.bg-blue{
background-color: #4A91BD;

}
.bg-grey-second{
  background-color: #F6F6F6;
}
.dotted-line{ border-top: dashed 2px;}
.time-line-container{ position: relative;}

`}

      </style>
    </React.Fragment>
  );
}
export default React.memo(Agency);
