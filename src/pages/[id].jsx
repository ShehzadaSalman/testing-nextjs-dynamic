import axios from 'axios';
import React, {useState} from 'react';
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
import Template31 from '../components/Templates/template31';
import menuContext from '../ContextApi/menuContext';
import Error from 'next/error';
import Headerfive from '../components/HeaderFive';
import Footer from '../components/Footer'





function Dynamic({ data, footerData, bottomFooter, menudata, bottomPages, companyInfo }) {
 const [headerMenu, setHeaderMenu] = useState(false);
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

    case 31:
      return (<><Template31 finalData={data} /></>)  

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
    if(data.template_id == 450){
      return <>
      <menuContext.Provider  value= {{headerMenu, setHeaderMenu}}>
      <Template450 finalData={data} /><Footer footerData = {footerData} bottomFooter = {bottomFooter}   /> 
      </menuContext.Provider> </>
    } else if(data.template_id == 31){
      return <><Headerfive/><Template31 finalData={data} /></>
    }
    else{
      return <>
      <menuContext.Provider value= {{headerMenu, setHeaderMenu}}>
      <Headerfive/>{SwitchPages(data)}<Footer 
      footerData = {footerData} 
      bottomFooter = {bottomFooter}   />
      </menuContext.Provider>
       </>
    }
  } else {
    return <Error statusCode="503" />
  }








}

export default Dynamic


export async function getStaticPaths({ locales }) {


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
 
 
     let removeCancelation = finalRoutes.filter(li => li.params.id !== 'cancellation-and-refund')
     let removeTerms = removeCancelation.filter(li => li.params.id !== 'terms-and-conditions')
  return {

    paths: [
       ...removeTerms,

    ],
    fallback: true
  }


}



// fetch data from the url
export async function getStaticProps(context) {
  let data = '';
  const res = await axios.get(`https://staging.techbay.co/api/get-template-data/${context.params.id}`)
  if (res.data.status !== 500) {
    data = await res.data.response
  } else { data = null }
  
  return {
     props: { 
    data,
  },
  revalidate: 10, }
}
