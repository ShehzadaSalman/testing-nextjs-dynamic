import axios from 'axios';
import React from 'react';
import Template350 from '../components/Templates/template350'
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
import Error from 'next/error';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Headerfive from '../components/HeaderFive';
import Footer from '../components/Footer'
import { addStickyHeader } from '../lib/helper';





function Dynamic({data}) {
  

if(data){

    switch (data.template_id) {
        
case 1:
return (<><Headerfive/><Template1 finalData = {data} /><Footer/></>)
break;

case 2:
return (<><Headerfive/><Template2 finalData = {data} /><Footer/></>)
break;

case 3:
return (<><Headerfive/><Template3 finalData = {data} /><Footer/></>)
break;

case 4:
return (<><Headerfive/><Template4 finalData = {data} /></>)
break;

case 5:
return (<><Headerfive/><Template5 finalData = {data} /><Footer/></>)
break;

case 6:
return (<><Headerfive/><Template6 finalData = {data} /><Footer/></>)
break;

case 7:
return (<><Headerfive/><Template7 finalData = {data} /><Footer/></>)
break;

case 8:
return (<><Headerfive/><Template8 finalData = {data} /><Footer/></>)
break;

case 9:
return (<><Headerfive/><Template9 finalData = {data} /><Footer/></>)
break;

case 10:
return (<><Headerfive/><Template10 finalData = {data} /><Footer/></>)
break;

case 11:
return (<><Headerfive/><Template11 finalData = {data} /><Footer/></>)
break;

case 12:
return (<><Headerfive/><Template12 finalData = {data} /><Footer/></>)
break;

case 13:
return (<><Headerfive/><Template13 finalData = {data} /><Footer/></>)
break;

case 14:
return (<><Headerfive/><Template14 finalData = {data} /><Footer/></>)
break;

case 15:
return (<><Headerfive/><Template15 finalData = {data} /><Footer/></>)
break;

case 16:
return (<><Headerfive/><Template16 finalData = {data} /><Footer/></>)
break;

case 17:
return (<><Headerfive/><Template17 finalData = {data} /><Footer/></>)
break;

case 18:
return (<><Headerfive/><Template18 finalData = {data} /><Footer/></>)
break;

case 19:
return (<><Headerfive/><Template19 finalData = {data} /><Footer/></>)
break;

case 20:
return (<><Headerfive/><Template20 finalData = {data} /><Footer/></>)
break;

case 26:
return (<><Headerfive/><Template26 finalData = {data} /> <Footer/></>)
break;

case 25:
return (<><Headerfive/><Template25 finalData = {data}  /><Footer/></>)
break;    

case 27:
return (<><Headerfive/><Template27 finalData = {data}  /><Footer/></>)
break;  

case 350:
return (<><Headerfive/><Template350 finalData = {data}  /><Footer/></>)
break;  

case 29:
return (<><Headerfive/><Template25/><Footer/></>)
break;  

default:
return <>{JSON.stringify(data.template_id)}</>
break;
}


}else{
    return <Error statusCode="503"/>
}







 
}

export default Dynamic

// hopefully prerendering pages with defined paths
export async function getStaticPaths({locales}) {

    let allpages = [];  
    const menu = await  axios.get('https://staging.techbay.co/api/get-navbar-menu');
    const menuList = await  menu.data.response;
    let categoryPages = menuList.map(li => {  return li.services.map(l => (l.slug))});
   for(let i = 0; i < categoryPages.length;  i++) {
        allpages.push(...categoryPages[i]);
    } 
  
let footerMenuList = [];    
// getting routes for the footer menu
const footermenu = await axios.get('https://staging.techbay.co/api/get-footer-menu');
const footerMenuResponse = await footermenu.data.response;
const footerpages = footerMenuResponse.map(li => (li.services))
let bottomPages = [...footerpages[0],...footerpages[1], ...footerpages[2]]; // spread opertor to combine the objects
const bottomPagesList = bottomPages.filter(li => li !== undefined ); // removing undefined
const finalBottomPagesList =  bottomPagesList.filter(li => {
  if(li.slug !== undefined || li.slug !== null ) {
    return li.slug
  }
})
let finalbpages = finalBottomPagesList.map(li => li.slug);
 
 
 // defining bottompage routes

 // arabic routes for bottom pages
 const bArabicRoutes =  finalbpages.map(li => 
  ({ params: { id:  li}, locale: 'ar' })) 

 // english routes for bottom pages
 const bEnglishRoutes =  finalbpages.map(li => 
  ({ params: { id:  li}, locale: 'en-US' })) 
 
  // defining the routes   
  const arabicRoutes =  allpages.map(li => 
      ({ params: { id:  li}, locale: 'ar' })) 

  const englishRoutes =  allpages.map(li => 
    ({ params: { id:  li} })) 
  const finalRoutes = [...englishRoutes, ...arabicRoutes, ...bArabicRoutes, ...bEnglishRoutes ];
   


   console.log("FINAL ROUTES START HERE") 
   console.log(finalRoutes) 
   console.log('FINAL ROUTES ENDS HERE')
  
     return {
        paths: [

          { params: { id: 'design-services' } },   
          { params: { id: 'branding-services' } }, 
          { params: { id: 'media-agency' } },      
          { params: { id: 'public-relation' } },   
          { params: { id: 'motion-designing' } },  
          { params: { id: 'video-production' } },  
          { params: { id: 'advertising-agency' } },
          { params: { id: 'website-designing' } }, 
          { params: { id: 'ui-ux-designing' } },   
          { params: { id: 'web-development' } },   
          { params: { id: 'mobile-app-development' } },
          { params: { id: 'content-management-system' } },
          { params: { id: 'enterprise-resource-planning' } },
          { params: { id: 'e-commerce' } },
          { params: { id: 'customer-relationship-management' } },
          { params: { id: 'app-designing' } },
          { params: { id: 'search-engine-optimization' } },
          { params: { id: 'pay-per-click-advertisement' } },
          { params: { id: 'conversion-rate-optimization' } },
          { params: { id: 'content-marketing' } },
          { params: { id: 'seo-packages' } },
          { params: { id: 'ppc-packages' } },
          { params: { id: 'smm-packages' } },
          { params: { id: 'startup-packages' } },
          { params: { id: 'design-services' }, locale: 'ar' },
          { params: { id: 'branding-services' }, locale: 'ar' },
          { params: { id: 'media-agency' }, locale: 'ar' },
          { params: { id: 'public-relation' }, locale: 'ar' },
          { params: { id: 'motion-designing' }, locale: 'ar' },
          { params: { id: 'video-production' }, locale: 'ar' },
          { params: { id: 'advertising-agency' }, locale: 'ar' },
          { params: { id: 'website-designing' }, locale: 'ar' },
          { params: { id: 'ui-ux-designing' }, locale: 'ar' },
          { params: { id: 'web-development' }, locale: 'ar' },
          { params: { id: 'mobile-app-development' }, locale: 'ar' },
          { params: { id: 'content-management-system' }, locale: 'ar' },
          { params: { id: 'enterprise-resource-planning' }, locale: 'ar' },
          { params: { id: 'e-commerce' }, locale: 'ar' },
          { params: { id: 'customer-relationship-management' }, locale: 'ar' },
          { params: { id: 'app-designing' }, locale: 'ar' },
          { params: { id: 'search-engine-optimization' }, locale: 'ar' },
          { params: { id: 'pay-per-click-advertisement' }, locale: 'ar' },
          { params: { id: 'conversion-rate-optimization' }, locale: 'ar' },
          { params: { id: 'content-marketing' }, locale: 'ar' },
          { params: { id: 'seo-packages' }, locale: 'ar' },
          { params: { id: 'ppc-packages' }, locale: 'ar' },
          { params: { id: 'smm-packages' }, locale: 'ar' },
          { params: { id: 'startup-packages' }, locale: 'ar' },
          { params: { id: 'about-us' }, locale: 'ar' },
          { params: { id: 'case-studies' }, locale: 'ar' },
          { params: { id: 'privacy-policy' }, locale: 'ar' },
          { params: { id: 'terms-and-conditions' }, locale: 'ar' },
          { params: { id: 'cancellation-and-refund' }, locale: 'ar' },
          { params: { id: 'about-us' } },
          { params: { id: 'case-studies' } },
          { params: { id: 'privacy-policy' } },
          { params: { id: 'terms-and-conditions' } },
          { params: { id: 'cancellation-and-refund' } },
          { params: { id: 'services/branding-and-pr' } },
          { params: { id: 'services/digital-marketing-agency-dubai' } },
          { params: { id: 'services/web-and-app-development' } },
          // { params: { id: '/' } },
          // { params: { id: '/' }, locale: 'ar'},



        ],
        fallback: true 
      }
    
  
    }



// fetch data from the url
export async function getStaticProps(context) {
    let data = 'hello world'; 
    const res = await axios.get(`https://staging.techbay.co/api/get-template-data/${context.params.id}`)
    if(res.data.status !== 500){
       data = await res.data.response
    }else{data = null}
    return { props: { data, } }
  }
