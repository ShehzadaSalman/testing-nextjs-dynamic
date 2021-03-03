import axios from 'axios';
import Head from 'next/head'
import React, {useState} from 'react';
import dynamic from 'next/dynamic';
// import Template350 from '../components/Templates/template350'
// import Template450 from '../components/Templates/template450'

// import Template1 from '../components/Templates/template1';
// import Template2 from '../components/Templates/template2';
// import Template3 from '../components/Templates/template3';
// import Template4 from '../components/Templates/template4';
// import Template5 from '../components/Templates/template5';
// import Template6 from '../components/Templates/template6';
// import Template7 from '../components/Templates/template7';
// import Template8 from '../components/Templates/template8';
// import Template9 from '../components/Templates/template9';
// import Template10 from '../components/Templates/template10';
// import Template11 from '../components/Templates/template11';
// import Template12 from '../components/Templates/template12';
// import Template13 from '../components/Templates/template13';
// import Template14 from '../components/Templates/template14';
// import Template15 from '../components/Templates/template15';
// import Template16 from '../components/Templates/template16';
// import Template17 from '../components/Templates/template17';
// import Template18 from '../components/Templates/template18';
// import Template19 from '../components/Templates/template19';
// import Template20 from '../components/Templates/template20';
// import Template21 from '../components/Templates/template21';
// import Template24 from '../components/Templates/template24';
// import Template25 from '../components/Templates/template25';
// import Template26 from '../components/Templates/template26';
// import Template27 from '../components/Templates/template27';
// import Template29 from '../components/Templates/template29';
// import Template30 from '../components/Templates/template30';
// import Template31 from '../components/Templates/template31';
// import Template32 from '../components/Templates/template32';
// import Template33 from '../components/Templates/template33';
// import Template34 from '../components/Templates/template34';
import menuContext from '../ContextApi/menuContext';
import Error from 'next/error';
import Headerfive from '../components/HeaderFive';
import Footer from '../components/Footer'

const Template1 = dynamic(() => import('../components/Templates/template1'), { ssr: true });
const Template2 = dynamic(() => import('../components/Templates/template2'), { ssr: true });
const Template3 = dynamic(() => import('../components/Templates/template3'), { ssr: true });
const Template4 = dynamic(() => import('../components/Templates/template4'), { ssr: true });
const Template5 = dynamic(() => import('../components/Templates/template5'), { ssr: true });
const Template6 = dynamic(() => import('../components/Templates/template6'), { ssr: true });
const Template7 = dynamic(() => import('../components/Templates/template7'), { ssr: true });
const Template8 = dynamic(() => import('../components/Templates/template8'), { ssr: true });
const Template9 = dynamic(() => import('../components/Templates/template9'), { ssr: true });
const Template10 = dynamic(() => import('../components/Templates/template10'), { ssr: true });
const Template11 = dynamic(() => import('../components/Templates/template11'), { ssr: true });
const Template12 = dynamic(() => import('../components/Templates/template12'), { ssr: true });
const Template13 = dynamic(() => import('../components/Templates/template13'), { ssr: true });
const Template14 = dynamic(() => import('../components/Templates/template14'), { ssr: true });
const Template15 = dynamic(() => import('../components/Templates/template15'), { ssr: true });
const Template16 = dynamic(() => import('../components/Templates/template16'), { ssr: true });
const Template17 = dynamic(() => import('../components/Templates/template17'), { ssr: true });
const Template18 = dynamic(() => import('../components/Templates/template18'), { ssr: true });
const Template19 = dynamic(() => import('../components/Templates/template19'), { ssr: true });
const Template20 = dynamic(() => import('../components/Templates/template20'), { ssr: true });
const Template21 = dynamic(() => import('../components/Templates/template21'), { ssr: true });

const Template24 = dynamic(() => import('../components/Templates/template24'), { ssr: true });
const Template25 = dynamic(() => import('../components/Templates/template25'), { ssr: true });
const Template26 = dynamic(() => import('../components/Templates/template26'), { ssr: true });
const Template27 = dynamic(() => import('../components/Templates/template27'), { ssr: true });
const Template29 = dynamic(() => import('../components/Templates/template29'), { ssr: true });
const Template30 = dynamic(() => import('../components/Templates/template30'), { ssr: true });
const Template31 = dynamic(() => import('../components/Templates/template31'), { ssr: true });
const Template32 = dynamic(() => import('../components/Templates/template32'), { ssr: true });
const Template33 = dynamic(() => import('../components/Templates/template33'), { ssr: true });
const Template34 = dynamic(() => import('../components/Templates/template34'), { ssr: true });
const Template350 = dynamic(() => import('../components/Templates/template350'), { ssr: true });
const Template450 = dynamic(() => import('../components/Templates/template450'), { ssr: true });




function Dynamic({ data,status}) {
 const [headerMenu, setHeaderMenu] = useState(false);

 const SwitchPages = (data) =>{

  switch (data.template_id) {

    case 1:
    return (<><Headerfive/><Template1 finalData={data} /><Footer/> </>);
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
      return (<><Headerfive/><Template31 finalData={data} /></>) 

    case 32:
      return (<><Headerfive/><Template32 finalData={data} /><Footer/></>)

    case 33:
        return (<><Headerfive/><Template33 finalData={data} /><Footer/></>)  

    case 34:
      return (<><Headerfive/><Template34 finalData={data} /><Footer/></>)      

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


  if (status == 200) {

       return <>
       <Head>
           <title>
            Digital Marketing Agency | SEO, PPC, SMM, Web Development
          </title>
          <meta
            name="description"
            content="Techbay Solutions is one of the leading Digital Marketing Agency, which provides SEO, PPC, SMM, Web &amp; App Design &amp; Development Services. Get a quote"
          />
          {/* <meta name="keywords" content="Digital Marketing Agency" /> */}
          <link rel="canonical" href="https://techbay.co" />
       </Head>
        <menuContext.Provider value= {{headerMenu, setHeaderMenu}}>
         {SwitchPages(data)}
         {/* {JSON.stringify("hellow world")} */}
        </menuContext.Provider>
       </>
    
  } else if (status == 5000) {
    return <><Error statusCode= "404"/> </>
  }
  else{ return null;}
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
    paths: [],
    fallback: true
  }


}



// fetch data from the url
export async function getStaticProps(context) {
  let data = '';
  let status;
  const res = await axios.get(`https://staging.techbay.co/api/get-template-data/${context.params.id}`)
  const response = await res.data;
  if (response.status !== 5000) {
    data = response.response
    status = 200;
  } 
  else { 
    data = null
    status = 5000;
   }
  
  return {
     props: { 
    data,
    status
  },
  revalidate: 1, }
}
