import axios from 'axios';
import React from 'react';
import Template350 from '../components/Templates/template350'
import Template450 from '../components/Templates/template450'
import Template27 from '../components/Templates/template27';
import Template26 from '../components/Templates/template26';
import Template25 from '../components/Templates/template25';
import Template1 from '../components/Templates/template1';
import Template2 from '../components/Templates/template2';
import Template3 from '../components/Templates/template3';
import Template4 from '../components/Templates/template4';
import Template5 from '../components/Templates/template5';
import Template6 from '../components/Templates/template6';
import Template7 from '../components/Templates/template7';
import Template8 from '../components/Templates/template8';
import Template9 from '../components/Templates/template9';
import Template10 from '../components/Templates/template10';
import Template11 from '../components/Templates/template11';
import Template12 from '../components/Templates/template12';
import Template13 from '../components/Templates/template13';
import Template14 from '../components/Templates/template14';
import Template15 from '../components/Templates/template15';
import Template16 from '../components/Templates/template16';
import Template17 from '../components/Templates/template17';
import Template18 from '../components/Templates/template18';
import Template19 from '../components/Templates/template19';
import Template20 from '../components/Templates/template20';
import Template21 from '../components/Templates/template21';
import Template24 from '../components/Templates/template24';
import Template29 from '../components/Templates/template29';
import Template30 from '../components/Templates/template30';
import Error from 'next/error';
import Headerfive from '../components/HeaderFive';
import Footer from '../components/Footer'





function Dynamic({ data }) {

 function SwitchPages(data){

  switch (data.template_id) {

    case 1:
      return (<><Template1 finalData={data} /></>)
      break;

    case 2:
      return (<><Template2 finalData={data} /></>)
      break;

    case 3:
      return (<><Template3 finalData={data} /></>)
      break;

    case 4:
      return (<><Template4 finalData={data} /></>)
      break;

    case 5:
      return (<><Template5 finalData={data} /></>)
      break;

    case 6:
      return (<><Template6 finalData={data} /></>)
      break;

    case 7:
      return (<><Template7 finalData={data} /></>)
      break;

    case 8:
      return (<><Template8 finalData={data} /></>)
      break;

    case 9:
      return (<><Template9 finalData={data} /></>)
      break;

    case 10:
      return (<><Template10 finalData={data} /></>)
      break;

    case 11:
      return (<><Template11 finalData={data} /></>)
      break;

    case 12:
      return (<><Template12 finalData={data} /></>)
      break;

    case 13:
      return (<><Template13 finalData={data} /></>)
      break;

    case 14:
      return (<><Template14 finalData={data} /></>)
      break;

    case 15:
      return (<><Template15 finalData={data} /></>)
      break;

    case 16:
      return (<><Template16 finalData={data} /></>)
      break;

    case 17:
      return (<><Template17 finalData={data} /></>)
      break;

    case 18:
      return (<><Template18 finalData={data} /></>)
      break;

    case 19:
      return (<><Template19 finalData={data} /></>)
      break;

    case 20:
      return (<><Template20 finalData={data} /></>)
      break;

    case 21:
      return (<><Template21 finalData={data} /></>)
      break;

    case 26:
      return (<><Template26 finalData={data} /></>)
      break;

    case 24:
      return (<> <Template24 data={data} /></>)
      break;

    case 25:
      return (<><Template25 finalData={data} /></>)
      break;

    case 27:
      return (<><Template27 finalData={data} /></>)
      break;

    case 29:
      return (<><Template29 finalData={data} /></>)
      break;

    case 30:
      return (<><Template30 finalData={data} /></>)


    case 350:
      return (<> <Template350 finalData={data} /></>)
      break;

    case 450:
      return (<><Template450 finalData={data} /></>)
      break;   


    default:
      return <>{JSON.stringify(data.template_id)}</>
      break;
  }
 }


  if (data) {
    return <>
    <Headerfive/>
    {SwitchPages(data)}
    <Footer/>
    </>
  } else {
    return <Error statusCode="503" />
  }








}

export default Dynamic


export async function getStaticPaths({ locales }) {

  //     let allpages = [];  
  //     const menu = await  axios.get('https://staging.techbay.co/api/get-navbar-menu');
  //     const menuList = await  menu.data.response;
  //     let categoryPages = menuList.map(li => {  return li.services.map(l => (l.slug))});
  //    for(let i = 0; i < categoryPages.length;  i++) {
  //         allpages.push(...categoryPages[i]);
  //     } 

  // let footerMenuList = [];    
  // const footermenu = await axios.get('https://staging.techbay.co/api/get-footer-menu');
  // const footerMenuResponse = await footermenu.data.response;
  // const footerpages = footerMenuResponse.map(li => (li.services))
  // let bottomPages = [...footerpages[0],...footerpages[1], ...footerpages[2]]; // spread opertor to combine the objects
  // const bottomPagesList = bottomPages.filter(li => li !== undefined ); // removing undefined
  // const finalBottomPagesList =  bottomPagesList.filter(li => {
  //   if(li.slug !== undefined || li.slug !== null ) {
  //     return li.slug
  //   }
  // })
  // let finalbpages = finalBottomPagesList.map(li => li.slug);
  //  const bArabicRoutes =  finalbpages.map(li => 
  //   ({ params: { id:  li}, locale: 'ar' })) 

  //  const bEnglishRoutes =  finalbpages.map(li => 
  //   ({ params: { id:  li}, locale: 'en-US' })) 


  //   const arabicRoutes =  allpages.map(li => 
  //       ({ params: { id:  li}, locale: 'ar' })) 

  //   const englishRoutes =  allpages.map(li => 
  //     ({ params: { id:  li} })) 


  let allpages = [];
  const menu = await axios.get('https://staging.techbay.co/api/get-templates-url');
  const menuListl = await menu.data.response;

  let menuList = menuListl.filter(function (el) {
    return el.slug != null;
  });

   




  const bEnglishRoutes = menuList.map(li =>
    ({ params: { id: li.slug } }))


  const arabicRoutes = menuList.map(li =>
    ({ params: { id: li.slug }, locale: 'ar' }))


  let finalRoutes = [...arabicRoutes, ...bEnglishRoutes];
 
    //  let finalRoutes1 = finalRoutes.filter(li => li.params.id !== 'cancellation-and-refund')
  return {

    paths: [
      // { params: { id: 'branding' } },
      // { params: { id: 'branding', locale: 'ar' } },
       ...finalRoutes,

      // { params: { id: 'design-services' } },
      // { params: { id: 'branding-services' } },
      // { params: { id: 'media-agency' } },
      // { params: { id: 'public-relation' } },
      // { params: { id: 'motion-designing' } },
      // { params: { id: 'video-production' } },
      // { params: { id: 'advertising-agency' } },
      // { params: { id: 'website-designing' } },
      // { params: { id: 'ui-ux-designing' } },
      // { params: { id: 'web-development' } },
      // { params: { id: 'mobile-app-development' } },
      // { params: { id: 'content-management-system' } },
      // { params: { id: 'enterprise-resource-planning' } },
      // { params: { id: 'e-commerce' } },
      // { params: { id: 'customer-relationship-management' } },
      // { params: { id: 'app-designing' } },
      // { params: { id: 'search-engine-optimization' } },
      // { params: { id: 'pay-per-click-advertisement' } },
      // { params: { id: 'conversion-rate-optimization' } },
      // { params: { id: 'content-marketing' } },
      // { params: { id: 'seo-packages' } },
      // { params: { id: 'ppc-packages' } },
      // { params: { id: 'smm-packages' } },
      // { params: { id: 'startup-packages' } },
      // { params: { id: 'design-services' }, locale: 'ar' },
      // { params: { id: 'branding-services' }, locale: 'ar' },
      // { params: { id: 'media-agency' }, locale: 'ar' },
      // { params: { id: 'public-relation' }, locale: 'ar' },
      // { params: { id: 'motion-designing' }, locale: 'ar' },
      // { params: { id: 'video-production' }, locale: 'ar' },
      // { params: { id: 'advertising-agency' }, locale: 'ar' },
      // { params: { id: 'website-designing' }, locale: 'ar' },
      // { params: { id: 'ui-ux-designing' }, locale: 'ar' },
      // { params: { id: 'web-development' }, locale: 'ar' },
      // { params: { id: 'mobile-app-development' }, locale: 'ar' },
      // { params: { id: 'content-management-system' }, locale: 'ar' },
      // { params: { id: 'enterprise-resource-planning' }, locale: 'ar' },
      // { params: { id: 'e-commerce' }, locale: 'ar' },
      // { params: { id: 'customer-relationship-management' }, locale: 'ar' },
      // { params: { id: 'app-designing' }, locale: 'ar' },
      // { params: { id: 'search-engine-optimization' }, locale: 'ar' },
      // { params: { id: 'pay-per-click-advertisement' }, locale: 'ar' },
      // { params: { id: 'conversion-rate-optimization' }, locale: 'ar' },
      // { params: { id: 'content-marketing' }, locale: 'ar' },
      // { params: { id: 'seo-packages' }, locale: 'ar' },
      // { params: { id: 'ppc-packages' }, locale: 'ar' },
      // { params: { id: 'smm-packages' }, locale: 'ar' },
      // { params: { id: 'startup-packages' }, locale: 'ar' },
      // { params: { id: 'about-us' }, locale: 'ar' },
      // { params: { id: 'case-studies' }, locale: 'ar' },
      // { params: { id: 'privacy-policy' }, locale: 'ar' },
      // { params: { id: 'terms-and-conditions' }, locale: 'ar' },
      // { params: { id: 'cancellation-and-refund' }, locale: 'ar' },
    ],
    fallback: false
  }


}



// fetch data from the url
export async function getStaticProps(context) {
  let data = 'hello world';
  const res = await axios.get(`https://staging.techbay.co/api/get-template-data/${context.params.id}`)
  if (res.data.status !== 500) {
    data = await res.data.response
  } else { data = null }
  return { props: { data, } }
}
