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
        paths: finalRoutes,
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
