import axios from 'axios';
import React from 'react';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import Layout from '../../components/Layout'
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const BrandingSlide = dynamic(() => import('../../components/Slides/Branding'), { ssr: false });
const WebDevelopment = dynamic(() => import('../../components/Slides/WebDevelopment'), { ssr: false });
const DigitalMarketing = dynamic(() => import('../../components/Slides/DigitalMarketing'), { ssr: false });




function SERVICES({data}) {
 


// check if we have data or not 
if(data?.length < 1){
    return <Error statusCode="404"/>; 
}else{
    if(data[0].id == 11){ 
        return <>
        <Layout>
        <BrandingSlide data = {data[0]}   />
        </Layout>
              </> 
      
      
      }else if(data[0].id == 12){ 
      
          return <>
          <Layout>
           <WebDevelopment data = {data[0]}  /> 
          </Layout>
         </>
      
      }else if(data[0].id == 13){ 
      
          return <>
             <Layout>
               <DigitalMarketing data = {data[0]}   />
             </Layout>
             </>;
           
      
      }else{
      
          return <Error statusCode="500" />
      
      }


}

 
}

export default SERVICES



  // hopefully prerendering pages with defined paths
export async function getStaticPaths({locales}) {

     return {
        paths: [
          { params: { id: 'branding' } },   
          { params: { id: 'branding' }, locale: 'ar' },
          { params: { id: 'marketing' } },   
          { params: { id: 'marketing' }, locale: 'ar' },
          { params: { id: 'development' } },   
          { params: { id: 'development' }, locale: 'ar' },

        ],
        fallback: true 
      }
    
  
    }



// fetch data from the url
export async function getStaticProps(context) {
  console.log("checking the parameters");
  console.log(context.params.id);
    let data = null; 
    const res = await axios.get(`https://staging.techbay.co/api/get-navbar-menu-content/${context.params.id}`)
    if(res.data.status !== 500){
       data = await res.data.response
    }else{data = null}
    return { props: { data, } }
  }
