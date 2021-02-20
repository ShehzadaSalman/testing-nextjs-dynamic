import PageBanner from '../NewComponents/PageBanner/PageBanner';
import { Grid } from '@material-ui/core';
import ButtonStyleOne from '../NewComponents/Buttons/buttonStyleOne.jsx';
import ButtonStyleThree from '../NewComponents/Buttons/buttonStyleThree.jsx';
import BgContentDiv from '../NewComponents/BContentDiv';
import ThumbnailTwo from '../NewComponents/ThumbnailTwo';
import SuccessDisplay from '../NewComponents/successdisplay';
import ReportCardFooter from '../NewComponents/ReportCardFooter';
import { PopupText } from 'react-calendly';
import { useRouter } from 'next/router';
import { openBrandingForm } from '../../lib/helper';
import { useState } from 'react'
const ImagePath = process.env.ImagePath;

const MediaRelation = ({ finalData }) => {
  const router = useRouter();
  const { locale } = router;
  // checking the data
  console.info(finalData);
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
    let WidgetHeadings = finalData.widget_headings.map(data => {
      return {
        "id": data.id,
        "title": data.desc_english,
        "level": data.level
      }
    })
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

    let WidgetHeadings = finalData.widget_headings.map(data => {
      return {
        "id": data.id,
        "title": data.desc_arabic,
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
      "widget_headings": WidgetHeadings
    }

  }

  return (
    <React.Fragment>
      <div className="main-content">

        <PageBanner
          category="branding"
          heading={content.BannerHeading}
          paragraph={content.BannerDescription}
          bg={ImagePath + content.BannerImage}
          buttontext={content.BannerButton}
          wavename="wave2.png">
        </PageBanner>
        {/* <BrandingForm/> */}
        <SuccessDisplay />

        {/*  The second section    */}
        <div className="bg-grey padding-bottom-10">
          <div className="container">
            <div className="padding-top-20"></div>
            <div className="padding-top-20"></div>
            {content.SubBannerHeading && <h2 className="heading padding-bottom-10 text-uppercase">
              {content.SubBannerHeading}
            </h2>
            }
            {content.SubBannerParagraph && <p className="paragraph"> {content.SubBannerParagraph} </p>}
          </div>

        </div>

        {/*  The fourth section    */}
        <div className="bg-grey padding-top-20 padding-bottom-30">

          <div className="container">
            <div className="row box-direction">

              {content.ListingOne && content.ListingOne.map(list => (
                <div key={list.id} className="col-6 col-md-4 col-lg-2 mb-4">
                  <ThumbnailTwo imgAddress={ImagePath + list.image} title={list.description} />
                </div>
              ))}

            </div>
          </div>




          <div className="padding-top-10"></div>
          <div className="text-center padding-top-30 padding-bottom-40">

            {content.Buttons.length > 0 && <a onClick={openBrandingForm}>
              <ButtonStyleThree title={content.Buttons[0].title}></ButtonStyleThree>
            </a>}

          </div>


        </div>

        {/*  This is the fourth section   */}
        <div className=" padding-top-40 padding-bottom-30">
          <div className="container">
            <h2 className="heading text-uppercase">{content.Sections[0].title}</h2>
            <p className="paragraph">{content.Sections[0].description}</p>
          </div>

        </div>

        {/*  The sixth section    */}
        <BgContentDiv bg="/images/web/webdevelopment/webdev-banner-two.png">
          <div className="pt-3 container">
            <h2 className="white-heading">{content.Sections[1].description}</h2>
            <div className="text-center padding-top-30">



              {content.Sections[1].btn_txt && <span className="meeting-button-light" style={{}}>
                <PopupText
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: '4d5055'
                  }}
                  styles={{}}
                  text={content.Sections[1].btn_txt}
                  url="https://calendly.com/hashim-6/30min"
                />
              </span>}




            </div>


          </div>
        </BgContentDiv>

        {/*  The seventh Section  */}
        <div className="bg-grey padding-top-30 padding-bottom-30">
          <div className="container">
            <h2 className="heading padding-bottom-10 text-uppercase">
              {content.Sections[2].title}
            </h2>
            <p className="paragraph padding-bottom-30">
              {content.Sections[2].description}
            </p>
          </div>
        </div>
        {/*  The Eights Section  */}

        <div id="mr-eighth-div" className="bg-grey padding-top-50">
          <div className="container">
            <div className="path-container-one " style={{}}>
              <Grid container id="path-div-one" spacing={3}>
                <Grid item xs={6} md={3}>
                  <ThumbnailTwo title={content.ListingTwo[0].title} imgAddress={ImagePath + content.ListingTwo[0].image} />
                </Grid>
                <Grid item xs={6} md={3}>
                  <ThumbnailTwo title={content.ListingTwo[1].title} imgAddress={ImagePath + content.ListingTwo[1].image} />
                </Grid>
                <Grid item xs={6} md={3}>
                  <ThumbnailTwo title={content.ListingTwo[2].title}
                    imgAddress={ImagePath + content.ListingTwo[2].image} />
                </Grid>
                <Grid item xs={6} md={3}>
                  <ThumbnailTwo title={content.ListingTwo[3].title}
                    imgAddress={ImagePath + content.ListingTwo[3].image} />
                </Grid>
              </Grid>

            </div>
            <div className="path-container-two">

              <Grid container id="path-div-two" spacing={3}>
                <Grid item xs={6} md={3} className="hide-mobile">

                </Grid>
                <Grid item xs={6} md={3}>
                  <ThumbnailTwo title={content.ListingTwo[4].title} imgAddress={ImagePath + content.ListingTwo[4].image} />
                </Grid>
                <Grid item xs={6} md={3}>
                  <ThumbnailTwo title={content.ListingTwo[5].title} imgAddress={ImagePath + content.ListingTwo[5].image} />
                </Grid>
                <Grid item xs={6} md={3}>
                  <ThumbnailTwo title={content.ListingTwo[6].title} imgAddress={ImagePath + content.ListingTwo[6].image} />
                </Grid>
              </Grid>


            </div>
          </div>
        </div>

        {/*    Get started button section  */}
        <div className="bg-grey padding-bottom-50 padding-top-30">
          <div className="container">
            <div className="text-center">
              {content.Buttons.length > 1 && <a onClick={openBrandingForm}>
                <ButtonStyleOne title={content.Buttons[1].title} ></ButtonStyleOne>
              </a>}
            </div>
          </div>
        </div>



        {/*  Ninth Section  */}
        <div className="padding-top-50 padding-bottom-50">
          <h2 className="heading mb-5">{content.widget_headings[0].title}</h2>
          <div className="container">
            <div className="row">
              {content.ListingThree.length > 0 && content.ListingThree.map(list => (
                <div className="col-md-4 d-flex flex-column justify-content-center">
                  <img src={ImagePath + list.image} className="img-fluid" alt="fix a home"></img>
                </div>
              ))}


            </div>
          </div>
          <div className="container">
            <a onClick={openBrandingForm}>
              <p className=" text-center padding-top-10 paragraph link-class">
                {content.Sections[3] && content.Sections[3].description}
              </p>
            </a>
          </div>
        </div>
      </div>


      <div className="padding-top-40 padding-bottom-40"></div>

      {finalData.book
        &&
        <ReportCardFooter
          category="branding"
          imgAddress={ImagePath + finalData.book.image}
          title={locale === 'ar' ? finalData.book.title_arabic : finalData.book.title_english}
          caption={locale === 'ar' ? finalData.book.desc_arabic : finalData.book.desc_english}
          btntext="GET MY FREE REPORT"
        />

      }







      <style>
        {`
  body{
    overflow:inherit;
  }
  .bottom-wave-width{
    max-width: 100%;
}
.box-direction{
  direction: ${locale === 'ar' ? 'rtl' : 'ltr'};
 }
#mr-eighth-div{
  padding-bottom: 190px;
}
.jc-center{
  justify-content: center;
}
.jc-start{
  justify-content: flex-start;
}
.jc-end{
  justify-content: flex-end;
}
.as-center{
  align-self: center;
}
.as-start{
  align-self: center;
}
.as-end{
  align-self: center;
}


.text-left{
  text-align: left;
}
div#path-div-one {
    position: absolute;
    top: -68px;
}
div#path-div-two {
    position: absolute;
    top: 120px;
    padding-top:10px;
}

#mr-eighth-div .path-container-one{
 border: dashed 1px;
 min-height: 200px;
 border-left: none;
 border-bottom: none;
 position: relative;
}

#mr-eighth-div .path-container-two{
 border: dashed 1px;
 min-height: 200px;
 border-right: none;
 position: relative;
}

@media only screen and (max-width: 850px) {


  #mr-eighth-div{
    padding-bottom: 20px;
    padding-top: 0px;
  }
  #mr-eighth-div .path-container-one{
   border: none;
   min-height: 5px;
  }

  #mr-eighth-div .path-container-two{
   border: none;
   min-height: 2px;

  }

  div#path-div-one {
      position: relative;
      top: 0;
      justify-content: center;

  }
  div#path-div-two {
      position: relative;
      top: 0;
        justify-content: center;

  }

}

        `}

      </style>
    </React.Fragment>
  );

}



export default MediaRelation;
