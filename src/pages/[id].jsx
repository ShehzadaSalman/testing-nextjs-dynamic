import axios from 'axios';
import Head from 'next/head'
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
import Template33 from '../components/Templates/template33';
import menuContext from '../ContextApi/menuContext';
import Error from 'next/error';
import Headerfive from '../components/HeaderFive';
import Footer from '../components/Footer'





function Dynamic({ data, footerData, bottomFooter, menudata, bottomPages, companyInfo }) {
 const [headerMenu, setHeaderMenu] = useState(false);
 function SwitchPages(data){

  switch (data.template_id) {

    case 1:
      return (<> <Headerfive/><Template1 finalData={data} /><Footer/></>)
      break;

    case 2:
      return (<> <Headerfive/><Template2 finalData={data} /><Footer/></>)
      break;

    case 3:
      return (<> <Headerfive/><Template3 finalData={data} /><Footer/></>)
      break;

    case 4:
      return (<> <Headerfive/><Template4 finalData={data} /></>)
      break;

    case 5:
      return (<> <Headerfive/><Template5 finalData={data} /><Footer/></>)
      break;

    case 6:
      return (<> <Headerfive/><Template6 finalData={data} /><Footer/></>)
      break;

    case 7:
      return (<> <Headerfive/><Template7 finalData={data} /><Footer/></>)
      break;

    case 8:
      return (<> <Headerfive/><Template8 finalData={data} /><Footer/></>)
      break;

    case 9:
      return (<> <Headerfive/><Template9 finalData={data} /><Footer/></>)
      break;

    case 10:
      return (<> <Headerfive/><Template10 finalData={data} /><Footer/></>)
      break;

    case 11:
      return (<> <Headerfive/><Template11 finalData={data} /><Footer/></>)
      break;

    case 12:
      return (<> <Headerfive/><Template12 finalData={data} /><Footer/></>)
      break;

    case 13:
      return (<> <Headerfive/><Template13 finalData={data} /><Footer/></>)
      break;

    case 14:
      return (<> <Headerfive/><Template14 finalData={data} /><Footer/></>)
      break;

    case 15:
      return (<> <Headerfive/><Template15 finalData={data} /><Footer/></>)
      break;

    case 16:
      return (<> <Headerfive/><Template16 finalData={data} /><Footer/></>)
      break;

    case 17:
      return (<> <Headerfive/><Template17 finalData={data} /><Footer/></>)
      break;

    case 18:
      return (<> <Headerfive/><Template18 finalData={data} /><Footer/></>)
      break;

    case 19:
      return (<> <Headerfive/><Template19 finalData={data} /><Footer/></>)
      break;

    case 20:
      return (<> <Headerfive/><Template20 finalData={data} /><Footer/></>)
      break;

    case 21:
      return (<> <Headerfive/><Template21 finalData={data} /><Footer/></>)
      break;

    case 26:
      return (<> <Headerfive/><Template26 finalData={data} /></>)
      break;

    case 24:
      return (<> <Headerfive/> <Template24 data={data} /><Footer/></>)
      break;

    case 25:
      return (<> <Headerfive/><Template25 finalData={data} /><Footer/></>)
      break;

    case 27:
      return (<> <Headerfive/><Template27 finalData={data} /><Footer/></>)
      break;

    case 29:
      return (<> <Headerfive/><Template29 finalData={data} /><Footer/></>)
      break;

    case 30:
      return (<> <Headerfive/><Template30 finalData={data} /><Footer/></>)

    case 31:
      return (<> <Headerfive/><Template31 finalData={data} /></>)  
    
    case 33:
        return (<> <Headerfive/><Template33 finalData={data} /><Footer/></>)  

    case 350:
      return (<>  <Headerfive/><Template350 finalData={data} /><Footer/></>)
      break;

    case 450:
      return (<> <Headerfive/><Template450 finalData={data} /></>)
      break;   


    default:
      return <>{JSON.stringify(data.template_id)}</>
      break;
  }
 }


  if (data) {

       return <>
       <Head>
           <title>
            Digital Marketing Agency | SEO, PPC, SMM, Web Development
          </title>
          <meta
            name="description"
            content="Techbay Solutions is one of the leading Digital Marketing Agency, which provides SEO, PPC, SMM, Web &amp; App Design &amp; Development Services. Get a quote"
          />
          <meta name="keywords" content="Digital Marketing Agency" />
          <link rel="canonical" href="https://techbay.co" />
       </Head>
        <menuContext.Provider value= {{headerMenu, setHeaderMenu}}>
       {SwitchPages(data)}
        </menuContext.Provider>
       </>
    
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
      { params: { id: 'branding-services' }, locale: 'ar' },
    
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
