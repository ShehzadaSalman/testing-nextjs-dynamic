import axios from 'axios';
import React from 'react';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import Layout from '../../components/Layout'
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';


const BrandingSlide = dynamic(() => import('../Slides/Branding'), { ssr: false });
const WebDevelopment = dynamic(() => import('../Slides/WebDevelopment'), { ssr: false });
const DigitalMarketing = dynamic(() => import('../Slides/DigitalMarketing'), { ssr: false });




function SERVICES({finalData}) {
 let data = finalData;
  console.log(data);


// check if we have data or not 
 
  
if(data.id == 11){ 
        return <>
        <Layout>
        <BrandingSlide data = {data}   />
        </Layout>
              </> 
      
      
      }else if(data.id == 12){ 
      
          return <>
          <Layout>
           <WebDevelopment data = {data}  /> 
          </Layout>
         </>
      
      }else if(data.id == 13){ 
      
          return <>
             <Layout>
               <DigitalMarketing data = {data}   />
             </Layout>
             </>;
           
      
      }else{
      
          return <Error statusCode="500" />
      
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
